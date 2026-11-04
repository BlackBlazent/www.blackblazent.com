import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { BannerSource } from '../content/types';

type Props = {
  source?: BannerSource;
  /** Drift the media slowly against the scroll. */
  parallax?: boolean;
  className?: string;
  eager?: boolean;
};

/** Renders a banner that can be an image or a looping video. */
const BannerMedia: React.FC<Props> = ({ source, parallax = false, className, eager = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  if (!source) return <div ref={ref} className={`banner-media banner-media--empty ${className ?? ''}`} />;

  const style = parallax && !reduce ? { y, scale: 1.12 } : undefined;

  return (
    <div ref={ref} className={`banner-media ${className ?? ''}`}>
      {source.type === 'video' ? (
        <motion.video
          style={style}
          src={source.src}
          poster={source.poster}
          muted
          loop
          playsInline
          autoPlay={!reduce}
          preload="metadata"
          aria-label={source.alt}
        />
      ) : (
        <motion.img
          style={style}
          src={source.src}
          alt={source.alt ?? ''}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
    </div>
  );
};

export default BannerMedia;
