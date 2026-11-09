import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  LOGO_GEOMETRY, ORBIT_CENTER, ORBIT_GRID, ORBIT_PATHS,
  type OrbitConfig, type OrbitNode, type OrbitPath,
} from '../config/orbit.config';
import { parseYouTubeId, youTubeEmbedSrc } from './video';

type Props = { config: OrbitConfig; nodes: OrbitNode[] };

const resolvePath = (p: OrbitPath | undefined) => (typeof p === 'object' ? p : ORBIT_PATHS[p ?? 'outer']);

/** Angle between two points on the logo: where adjacent inner circles cross on the outside. */
const crossing = (a: { x: number; y: number }, b: { x: number; y: number }, r: number, outward: { x: number; y: number }) => {
  const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
  const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy);
  const h = Math.sqrt(r * r - (d / 2) * (d / 2));
  const nx = -dy / d, ny = dx / d;
  const p1 = { x: mx + nx * h, y: my + ny * h }, p2 = { x: mx - nx * h, y: my - ny * h };
  const score = (p: { x: number; y: number }) => (p.x - ORBIT_CENTER) * outward.x + (p.y - ORBIT_CENTER) * outward.y;
  return score(p1) > score(p2) ? p1 : p2;
};

const LOGO_HUES = { top: '#e0433a', left: '#e5d93a', right: '#2fd0d6', bottom: '#43c85a' } as const;
const DOT_HUES = { tl: '#ff9f1c', tr: '#1fb5a8', bl: '#e0433a', br: '#2742ff' } as const;

/** The logo drawn as SVG. Geometry only: circles are exact, so intersections match the logo. */
const LogoGeometry: React.FC<{ config: OrbitConfig }> = ({ config }) => {
  const { outer, inner, offset } = LOGO_GEOMETRY;
  const c = ORBIT_CENTER;
  const centers = { top: { x: c, y: c - offset }, right: { x: c + offset, y: c }, bottom: { x: c, y: c + offset }, left: { x: c - offset, y: c } };
  const dots = [
    { id: 'tl', p: crossing(centers.top, centers.left, inner, { x: -1, y: -1 }) },
    { id: 'tr', p: crossing(centers.top, centers.right, inner, { x: 1, y: -1 }) },
    { id: 'bl', p: crossing(centers.bottom, centers.left, inner, { x: -1, y: 1 }) },
    { id: 'br', p: crossing(centers.bottom, centers.right, inner, { x: 1, y: 1 }) },
  ] as const;
  const logo = config.palette === 'logo';
  const stroke = (k: keyof typeof LOGO_HUES) => (logo ? LOGO_HUES[k] : 'var(--orbit-line)');

  return (
    <svg className="orbit-svg" viewBox={`0 0 ${ORBIT_GRID} ${ORBIT_GRID}`} role="presentation" aria-hidden="true" focusable="false">
      <defs>
        {/* The four inner circles are clipped to the outer circle, as in the logo. */}
        <clipPath id="orbit-clip"><circle cx={c} cy={c} r={outer} /></clipPath>
      </defs>
      <circle className="orbit-outer" cx={c} cy={c} r={outer} fill="none" />
      <g className={`orbit-inner${config.geometrySpin > 0 ? ' is-spinning' : ''}`} clipPath="url(#orbit-clip)" style={config.geometrySpin > 0 ? { animationDuration: `${config.geometrySpin}s` } : undefined}>
        {(Object.keys(centers) as (keyof typeof centers)[]).map((k) => (
          <circle key={k} cx={centers[k].x} cy={centers[k].y} r={inner} fill="none" stroke={stroke(k)} strokeWidth="1.2" className="orbit-circle" />
        ))}
      </g>
      {config.showCenterDots && (Object.keys(centers) as (keyof typeof centers)[]).map((k) => (
        <circle key={`c-${k}`} cx={centers[k].x} cy={centers[k].y} r="3.4" className="orbit-dot orbit-dot--center" />
      ))}
      {config.showIntersectionDots && dots.map((d) => (
        <circle key={d.id} cx={d.p.x} cy={d.p.y} r="5.2" className="orbit-dot orbit-dot--cross" style={logo ? { fill: DOT_HUES[d.id] } : undefined} />
      ))}
    </svg>
  );
};

type FocusState = { node: OrbitNode; rect: DOMRect } | null;

/** Circular image that rides one circle of the logo geometry. Placement and speed come from config. */
const NodeButton: React.FC<{
  node: OrbitNode;
  focused: boolean;
  onOpen: (node: OrbitNode, el: HTMLButtonElement) => void;
  registerRef: (id: string, el: HTMLButtonElement | null) => void;
}> = ({ node, focused, onOpen, registerRef }) => {
  const path = resolvePath(node.path);
  const a0 = node.phase - 90; // phase 0 is the top of the circle
  const style = {
    '--cx': `${(path.cx / ORBIT_GRID) * 100}%`,
    '--cy': `${(path.cy / ORBIT_GRID) * 100}%`,
    '--r': path.r,
    '--size': node.size,
    '--a0': `${a0}deg`,
    '--period': `${node.period}s`,
    '--dir': node.direction === 'cw' ? 'normal' : 'reverse',
  } as React.CSSProperties;

  return (
    <div className="orbit-arm" style={style}>
      <button
        ref={(el) => registerRef(node.id, el)}
        type="button"
        className={`orbit-node${focused ? ' is-focused' : ''}`}
        aria-label={`${node.title}. Open details`}
        aria-haspopup="dialog"
        onClick={(e) => onOpen(node, e.currentTarget)}
      >
        <img src={node.image} alt="" width={256} height={256} loading="lazy" decoding="async" draggable={false} />
        <span className="orbit-node-label" aria-hidden="true">{node.title}</span>
      </button>
    </div>
  );
};

/** Expanded presentation. The circle grows from the node into a centred stage, then the video starts. */
const FocusPanel: React.FC<{
  node: OrbitNode;
  from: DOMRect;
  getReturnRect: () => DOMRect | null;
  config: OrbitConfig;
  onClose: () => void;
}> = ({ node, from, getReturnRect, config, onClose }) => {
  const reduce = useReducedMotion();
  const slotRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const leaveTimer = useRef<number | undefined>(undefined);
  const entered = useRef(false);
  const [target, setTarget] = useState<DOMRect | null>(null);
  const [ready, setReady] = useState(false);
  const ytId = node.video?.kind === 'youtube' ? parseYouTubeId(node.video.id) : null;
  const hasVideo = node.video?.kind === 'file' || Boolean(ytId);

  const measure = useCallback(() => { if (slotRef.current) setTarget(slotRef.current.getBoundingClientRect()); }, []);
  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; window.clearTimeout(leaveTimer.current); };
  }, [onClose]);

  const onEnter = () => { entered.current = true; window.clearTimeout(leaveTimer.current); };
  const onLeave = (e: React.PointerEvent) => {
    // Touch and pen never close on exit: they use the Close button, the backdrop or Escape.
    if (!config.closeOnPointerLeave || e.pointerType !== 'mouse' || !entered.current) return;
    leaveTimer.current = window.setTimeout(onClose, config.leaveDelayMs);
  };

  const ease = [0.16, 1, 0.3, 1] as const;
  const start = { left: from.left, top: from.top, width: from.width, height: from.height, borderRadius: '50%' };
  const end = target
    ? { left: target.left, top: target.top, width: target.width, height: target.height, borderRadius: hasVideo ? '22px' : '50%' }
    : start;

  return createPortal(
    <motion.div
      className="orbit-focus"
      role="dialog"
      aria-modal="true"
      aria-label={node.title}
    >
      <motion.div
        className="orbit-focus-backdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduce ? 0 : 0.45 }}
      />
      <div className="orbit-focus-shell" onPointerEnter={onEnter} onPointerLeave={onLeave}>
        <div ref={slotRef} className={`orbit-focus-slot${hasVideo ? ' is-wide' : ''}`} aria-hidden="true" />
        <motion.div
          className="orbit-focus-caption"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: target ? 1 : 0, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.3, ease }}
        >
          {node.caption && <span className="orbit-focus-tag">{node.caption}</span>}
          <h3 className="orbit-focus-title">{node.title}</h3>
          <p className="orbit-focus-text">{node.description}</p>
          <div className="orbit-focus-actions">
            {node.link && <Link className="btn btn-outline" to={node.link.to} onClick={onClose}>{node.link.label} <span aria-hidden="true">&rarr;</span></Link>}
            <button ref={closeRef} type="button" className="btn btn-primary orbit-focus-close" onClick={onClose}>Close</button>
          </div>
        </motion.div>
      </div>

      {/* The stage travels from the node to the slot. */}
      <motion.div
        className="orbit-focus-stage"
        initial={start}
        animate={end}
        exit={(() => { const r = getReturnRect() ?? from; return { left: r.left, top: r.top, width: r.width, height: r.height, borderRadius: '50%' }; })()}
        transition={{ duration: reduce ? 0 : 0.7, ease }}
        onAnimationComplete={() => { if (target) setReady(true); }}
      >
        <img className="orbit-focus-img" src={node.image} alt="" draggable={false} />
        {ready && node.video?.kind === 'file' && (
          <video className="orbit-focus-video" src={node.video.src} poster={node.video.poster} controls autoPlay playsInline preload="auto" />
        )}
        {ready && ytId && (
          <iframe
            className="orbit-focus-video"
            src={youTubeEmbedSrc(ytId)}
            title={`${node.title} video`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </motion.div>
    </motion.div>,
    document.body,
  );
};

const OrbitalSystem: React.FC<Props> = ({ config, nodes }) => {
  const [focus, setFocus] = useState<FocusState>(null);
  /** Stays set until the closing animation ends, so the orbit does not move under the returning circle. */
  const [lockedId, setLockedId] = useState<string | null>(null);
  const refs = useRef(new Map<string, HTMLButtonElement>());
  const visible = useMemo(() => nodes.filter((n) => n.visible), [nodes]);

  const registerRef = useCallback((id: string, el: HTMLButtonElement | null) => {
    if (el) refs.current.set(id, el); else refs.current.delete(id);
  }, []);

  const open = useCallback((node: OrbitNode, el: HTMLButtonElement) => {
    // Only one node can be expanded at a time.
    if (focus) return;
    setLockedId(node.id);
    setFocus({ node, rect: el.getBoundingClientRect() });
  }, [focus]);

  const close = useCallback(() => {
    setFocus((cur) => {
      if (cur) window.setTimeout(() => refs.current.get(cur.node.id)?.focus({ preventScroll: true }), 650);
      return null;
    });
  }, []);

  if (!config.enabled) return null;

  return (
    <div className={`orbit${config.pauseOnInteract ? ' pause-on-interact' : ''}${lockedId ? ' is-paused' : ''}`} data-palette={config.palette}>
      <LogoGeometry config={config} />
      <div className="orbit-nodes">
        {visible.map((n) => (
          <NodeButton key={n.id} node={n} focused={lockedId === n.id} onOpen={open} registerRef={registerRef} />
        ))}
      </div>
      <AnimatePresence onExitComplete={() => setLockedId(null)}>
        {focus && (
          <FocusPanel
            key={focus.node.id}
            node={focus.node}
            from={focus.rect}
            getReturnRect={() => refs.current.get(focus.node.id)?.getBoundingClientRect() ?? null}
            config={config}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrbitalSystem;
