import React, { useState } from 'react';
import type { Product } from '../content/types';
import Reveal from './Reveal';

type Demo = NonNullable<Product['media']['demoVideo']>;

/** Loads the video only after the visitor chooses to play it. */
export const DemoVideo: React.FC<{ demo: Demo; title: string }> = ({ demo, title }) => {
  const [playing, setPlaying] = useState(false);
  const poster = demo.poster ?? (demo.kind === 'youtube' ? `https://i.ytimg.com/vi/${demo.src}/hqdefault.jpg` : undefined);
  return (
    <section className="section media-section" id="demo">
      <Reveal>
        <div className="article-tag">Demo</div>
        <h2 className="article-title">See {title} in motion</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="demo-frame">
          {demo.kind === 'file' ? (
            <video src={demo.src} poster={poster} controls preload="metadata" playsInline />
          ) : playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${demo.src}?autoplay=1&rel=0`}
              title={`${title} demo video`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button className="demo-play" onClick={() => setPlaying(true)} style={poster ? { backgroundImage: `url(${poster})` } : undefined} aria-label={`Play the ${title} demo video`}>
              <span className="demo-play-icon" aria-hidden="true" />
              <span className="demo-play-label">Play demo</span>
            </button>
          )}
        </div>
      </Reveal>
    </section>
  );
};

/**
 * Moodboard layout. Images flow into balanced columns and the whole block is
 * clipped to its own container so nothing spills over neighbouring sections.
 */
export const MoodboardGallery: React.FC<{ images: Product['media']['gallery']; title: string }> = ({ images, title }) => {
  const items = images.slice(0, 8);
  if (items.length === 0) return null;
  return (
    <section className="section media-section" id="gallery">
      <Reveal>
        <div className="article-tag">Gallery</div>
        <h2 className="article-title">{title} up close</h2>
      </Reveal>
      <div className="moodboard">
        {items.map((img, i) => (
          <Reveal key={img.src} delay={(i % 4) * 0.06} from={i % 2 ? 'right' : 'left'} distance={22} className="moodboard-item">
            <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" />
          </Reveal>
        ))}
      </div>
    </section>
  );
};
