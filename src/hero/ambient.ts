import type { HeroAmbientConfig } from '../config/hero.config';

const cache = new Map<string, string>();

const toHsl = (r: number, g: number, b: number): [number, number, number] => {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  const h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [h * 60, s, l];
};

/** Turns a raw sample into a calm glow colour: saturation and lightness are clamped, never neon. */
export const tame = (r: number, g: number, b: number, cfg: HeroAmbientConfig): string => {
  const [h, s, l] = toHsl(r, g, b);
  const sat = Math.min(cfg.maxSaturation, Math.max(0.18, s));
  const light = Math.min(cfg.lightness[1], Math.max(cfg.lightness[0], l));
  return `hsl(${Math.round(h)} ${Math.round(sat * 100)}% ${Math.round(light * 100)}%)`;
};

/**
 * Samples a small copy of the media and weights lit, coloured pixels over dark, grey ones,
 * so a dark background with a few warm lines still yields its real colour.
 * Returns null when the pixels cannot be read, for example a cross-origin video.
 */
export const sampleAmbient = (el: HTMLImageElement | HTMLVideoElement, cfg: HeroAmbientConfig): string | null => {
  try {
    const w = 32, h = 18;
    const canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return null;
    ctx.drawImage(el, 0, 0, w, h);
    const { data } = ctx.getImageData(0, 0, w, h);
    let r = 0, g = 0, b = 0, total = 0;
    for (let i = 0; i < data.length; i += 4) {
      const pr = data[i], pg = data[i + 1], pb = data[i + 2];
      const max = Math.max(pr, pg, pb), min = Math.min(pr, pg, pb);
      const lum = max / 255;
      const sat = max === 0 ? 0 : (max - min) / max;
      const wt = lum * lum * (0.1 + sat);
      r += pr * wt; g += pg * wt; b += pb * wt; total += wt;
    }
    if (total < 0.5) return null;
    return tame(r / total, g / total, b / total, cfg);
  } catch {
    return null;
  }
};

export const readAmbientCache = (id: string) => cache.get(id);
export const writeAmbientCache = (id: string, color: string) => { cache.set(id, color); };
