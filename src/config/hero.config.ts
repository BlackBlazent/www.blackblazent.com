import contour from '../assets/hero/hero-contour.webp';
import contourM from '../assets/hero/hero-contour-m.webp';
import plate from '../assets/hero/hero-plate.webp';
import plateM from '../assets/hero/hero-plate-m.webp';
import trace from '../assets/hero/hero-trace.webp';
import traceM from '../assets/hero/hero-trace-m.webp';

/**
 * Hero background and ambient lighting configuration (v3.1.0).
 *
 * Everything the hero background does is controlled here. The Hero component
 * contains no asset paths and no timings.
 *
 * ADD A BACKGROUND
 *   Images : add an item to `images.items` (import the file above, or use a path under /public).
 *   Videos : add an item to `videos.items`, for example
 *            { id: 'reel-1', type: 'video', src: '/media/hero/reel-1.mp4', poster: '/media/hero/reel-1.webp' }
 *            Put the files in /public/media/hero/. Always give a poster: it is shown while the
 *            video loads, on slow connections, and when reduced motion is requested.
 *
 * Items rotate in the order given by `order`, forever, every `intervalMs`.
 */
export type HeroMediaItem = {
  id: string;
  type: 'image' | 'video';
  src: string;
  /** Smaller file for screens up to `mobileMaxWidth`. Falls back to `src`. */
  mobileSrc?: string;
  /** Required for video. Shown before the video can play and under reduced motion. */
  poster?: string;
  alt?: string;
  /** CSS object-position, for example '50% 30%'. */
  objectPosition?: string;
  /** Overrides the ambient colour sampled from this item. Any CSS colour. */
  ambient?: string;
  /** Per-item switch without deleting the entry. Default true. */
  enabled?: boolean;
};

export type HeroBackgroundConfig = {
  /** Time each background stays before the next one starts to fade in. */
  intervalMs: number;
  /** Cross-fade duration. */
  transitionMs: number;
  order: 'images-first' | 'videos-first' | 'interleave';
  images: { enabled: boolean; items: HeroMediaItem[] };
  videos: {
    enabled: boolean;
    items: HeroMediaItem[];
    /** Skip video on narrow screens and when the browser asks to save data. */
    disableOnMobile: boolean;
    disableOnSaveData: boolean;
  };
  mobileMaxWidth: number;
  /** Slow zoom applied to images. Ignored under reduced motion. */
  drift: boolean;
  /** A dark layer between media and text so copy stays readable on any asset. 0 to 1. */
  scrim: { top: number; bottom: number };
};

export type HeroAmbientConfig = {
  /** 'media' follows the current background. 'static' always uses `fallback`. 'off' removes the glow. */
  mode: 'media' | 'static' | 'off';
  fallback: string;
  /** Hard ceiling on colour saturation, 0 to 1. Keeps the glow from turning neon. */
  maxSaturation: number;
  /** Allowed lightness range, 0 to 1. */
  lightness: [number, number];
  /** Strength of the glow, 0 to 1. */
  intensity: number;
  /** How long the colour takes to follow a background change. */
  transitionMs: number;
};

export const HERO_BACKGROUND: HeroBackgroundConfig = {
  intervalMs: 5000,
  transitionMs: 1600,
  order: 'interleave',
  mobileMaxWidth: 768,
  drift: true,
  scrim: { top: 0.5, bottom: 0.82 },
  images: {
    enabled: true,
    items: [
      { id: 'contour', type: 'image', src: contour, mobileSrc: contourM, alt: '', ambient: '#d08a5c' },
      { id: 'plate', type: 'image', src: plate, mobileSrc: plateM, alt: '', ambient: '#c9703f' },
      { id: 'trace', type: 'image', src: trace, mobileSrc: traceM, alt: '', ambient: '#e07a3f' },
    ],
  },
  videos: {
    enabled: true,
    disableOnMobile: true,
    disableOnSaveData: true,
    items: [],
  },
};

export const HERO_AMBIENT: HeroAmbientConfig = {
  mode: 'media',
  fallback: '#ff7a3d',
  maxSaturation: 0.55,
  lightness: [0.34, 0.56],
  intensity: 0.42,
  transitionMs: 1600,
};

/** Hero copy. Kept here so the headline can change without touching the component. */
export const HERO_COPY = {
  title: ['Software', 'beyond', 'the', 'expected'],
  accentWord: 'expected',
  titleLabel: 'Software beyond the expected',
  sub: 'BlackBlazent builds purposeful hybrid software that combines engineering, creativity, design, and future oriented technology.',
};
