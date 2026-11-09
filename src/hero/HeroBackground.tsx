import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { HeroAmbientConfig, HeroBackgroundConfig, HeroMediaItem } from '../config/hero.config';
import { readAmbientCache, sampleAmbient, writeAmbientCache } from './ambient';

type Props = {
  config: HeroBackgroundConfig;
  ambient: HeroAmbientConfig;
  /** Called with the glow colour whenever the visible background changes. */
  onAmbient: (color: string) => void;
};

type Layer = { key: number; item: HeroMediaItem; phase: 'enter' | 'show' };

const isNarrow = (max: number) => typeof window !== 'undefined' && window.matchMedia(`(max-width: ${max}px)`).matches;
const saveData = () => Boolean((navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData);

/** Builds the playlist from the config: switches, order, and device rules. */
export const buildPlaylist = (cfg: HeroBackgroundConfig, reduce: boolean): HeroMediaItem[] => {
  const on = (i: HeroMediaItem) => i.enabled !== false;
  const images = cfg.images.enabled ? cfg.images.items.filter(on) : [];
  const allowVideo = cfg.videos.enabled && !reduce && !(cfg.videos.disableOnMobile && isNarrow(cfg.mobileMaxWidth)) && !(cfg.videos.disableOnSaveData && saveData());
  const videos = allowVideo ? cfg.videos.items.filter(on) : [];
  let list: HeroMediaItem[];
  if (cfg.order === 'videos-first') list = [...videos, ...images];
  else if (cfg.order === 'images-first') list = [...images, ...videos];
  else {
    list = [];
    for (let i = 0; i < Math.max(images.length, videos.length); i++) {
      if (images[i]) list.push(images[i]);
      if (videos[i]) list.push(videos[i]);
    }
  }
  // Under reduced motion nothing moves: one still frame.
  return reduce ? list.slice(0, 1) : list;
};

const HeroBackground: React.FC<Props> = ({ config, ambient, onAmbient }) => {
  const reduce = Boolean(useReducedMotion());
  const rootRef = useRef<HTMLDivElement>(null);
  const playlist = useMemo(() => buildPlaylist(config, reduce), [config, reduce]);
  const [layers, setLayers] = useState<Layer[]>(() => (playlist[0] ? [{ key: 0, item: playlist[0], phase: 'show' }] : []));
  const layersRef = useRef(layers);
  layersRef.current = layers;
  const indexRef = useRef(0);
  const keyRef = useRef(0);
  const [active, setActive] = useState(true);
  const mediaRefs = useRef(new Map<number, HTMLImageElement | HTMLVideoElement>());
  const failed = useRef(new Set<string>());

  // Keep resources idle when the hero is off screen or the tab is hidden.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    let visible = true, tabVisible = !document.hidden;
    const update = () => setActive(visible && tabVisible);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; update(); }, { threshold: 0.05 });
    io.observe(el);
    const onVis = () => { tabVisible = !document.hidden; update(); };
    document.addEventListener('visibilitychange', onVis);
    return () => { io.disconnect(); document.removeEventListener('visibilitychange', onVis); };
  }, []);

  // Pause and resume video elements with `active`.
  useEffect(() => {
    mediaRefs.current.forEach((m) => {
      if (m instanceof HTMLVideoElement) { if (active && !reduce) void m.play().catch(() => undefined); else m.pause(); }
    });
  }, [active, reduce, layers]);

  const publishAmbient = useCallback((item: HeroMediaItem, el?: HTMLImageElement | HTMLVideoElement | null) => {
    if (ambient.mode === 'off') return;
    if (ambient.mode === 'static') { onAmbient(ambient.fallback); return; }
    if (item.ambient) { onAmbient(item.ambient); return; }
    const cached = readAmbientCache(item.id);
    if (cached) { onAmbient(cached); return; }
    const sampled = el ? sampleAmbient(el, ambient) : null;
    const color = sampled ?? ambient.fallback;
    writeAmbientCache(item.id, color);
    onAmbient(color);
  }, [ambient, onAmbient]);

  // First background: publish its ambient colour once it is available.
  useEffect(() => {
    if (!playlist[0]) { onAmbient(ambient.fallback); return; }
    const first = playlist[0];
    if (first.ambient || ambient.mode !== 'media') publishAmbient(first, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startNext = useCallback(() => {
    if (playlist.length < 2) return;
    let tries = 0, next = (indexRef.current + 1) % playlist.length;
    while (failed.current.has(playlist[next].id) && tries++ < playlist.length) next = (next + 1) % playlist.length;
    if (tries > playlist.length) return;
    indexRef.current = next;
    const key = ++keyRef.current;
    setLayers((prev) => [...prev.filter((l) => l.phase === 'show').slice(-1), { key, item: playlist[next], phase: 'enter' }]);
  }, [playlist]);

  // Rotation timer: restarts after each change, stops while inactive.
  const shownKey = layers.find((l) => l.phase === 'show')?.key;
  useEffect(() => {
    if (reduce || !active || playlist.length < 2) return;
    const t = window.setTimeout(startNext, config.intervalMs);
    return () => window.clearTimeout(t);
  }, [active, reduce, playlist.length, config.intervalMs, shownKey, startNext]);

  // A layer is revealed only when its media can paint, so a slow asset never causes a flash.
  const reveal = useCallback((key: number) => {
    const entering = layersRef.current.find((l) => l.key === key && l.phase === 'enter');
    if (!entering) return;
    // Side effects stay outside the state updater.
    publishAmbient(entering.item, mediaRefs.current.get(key));
    setLayers((prev) => prev.map((l) => (l.key === key ? { ...l, phase: 'show' } : l)));
    window.setTimeout(() => {
      setLayers((prev) => {
        const top = prev[prev.length - 1];
        return top && top.phase === 'show' ? [top] : prev;
      });
    }, config.transitionMs + 80);
  }, [config.transitionMs, publishAmbient]);

  const fail = useCallback((key: number, item: HeroMediaItem) => {
    failed.current.add(item.id);
    setLayers((prev) => prev.filter((l) => l.key !== key));
    if (failed.current.size < playlist.length) startNext();
  }, [playlist.length, startNext]);

  // Safety net: if media never reports ready, skip it.
  useEffect(() => {
    const entering = layers.find((l) => l.phase === 'enter');
    if (!entering) return;
    const t = window.setTimeout(() => fail(entering.key, entering.item), 6000);
    return () => window.clearTimeout(t);
  }, [layers, fail]);

  const style = { '--hero-fade': `${config.transitionMs}ms`, '--scrim-top': config.scrim.top, '--scrim-bottom': config.scrim.bottom } as React.CSSProperties;

  return (
    <div ref={rootRef} className={`hero-bg${config.drift && !reduce ? ' has-drift' : ''}`} style={style} aria-hidden="true">
      {layers.map((l, i) => {
        const src = isNarrow(config.mobileMaxWidth) && l.item.mobileSrc ? l.item.mobileSrc : l.item.src;
        const common = {
          className: `hero-bg-media${l.phase === 'show' ? ' is-shown' : ''}${i === 0 && layers.length === 1 ? ' is-first' : ''}`,
          style: { objectPosition: l.item.objectPosition },
        };
        return l.item.type === 'video' ? (
          <video
            key={l.key}
            {...common}
            ref={(el) => { if (el) mediaRefs.current.set(l.key, el); else mediaRefs.current.delete(l.key); }}
            src={src}
            poster={l.item.poster}
            muted loop playsInline autoPlay preload="auto"
            onLoadedData={() => reveal(l.key)}
            onError={() => fail(l.key, l.item)}
          />
        ) : (
          <img
            key={l.key}
            {...common}
            ref={(el) => { if (el) mediaRefs.current.set(l.key, el); else mediaRefs.current.delete(l.key); }}
            src={src}
            alt=""
            decoding="async"
            fetchPriority={l.key === 0 ? 'high' : 'auto'}
            onLoad={() => { if (l.phase === 'enter') reveal(l.key); else publishAmbient(l.item, mediaRefs.current.get(l.key)); }}
            onError={() => fail(l.key, l.item)}
          />
        );
      })}
      <div className="hero-bg-scrim" />
    </div>
  );
};

export default HeroBackground;
