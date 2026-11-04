import type { ProductId } from '../content/types';

/**
 * Product visibility switchboard.
 *
 * Set a product to false and it disappears everywhere: the home rail, the
 * products page, the footer, search metadata and its direct routes.
 */
export const PRODUCT_ENABLED: Record<ProductId, boolean> = {
  blackmusic: true,
  vineward: true,
  blackvideo: false,
  blackgallery: false,
};

/**
 * Public site address of each product. The main website sends visitors here
 * when they open a product from the rail, and each product site links back to
 * the main site.
 *
 * Vineward is a collaborative project and keeps its own external website.
 * It is not part of this monorepo.
 */
const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {};

export const PRODUCT_SITE_URL: Record<ProductId, string> = {
  blackmusic: env.VITE_BLACKMUSIC_URL ?? 'https://blackmusic.vercel.app',
  vineward: 'https://vineward.vercel.app',
  blackvideo: env.VITE_BLACKVIDEO_URL ?? 'https://blackvideo.vercel.app',
  blackgallery: env.VITE_BLACKGALLERY_URL ?? 'https://blackgallery.vercel.app',
};

/**
 * How the main website opens a product.
 *   'monorepo' : the product page is rendered inside the BlackBlazent site at /<product>.
 *                The product's own address (PRODUCT_SITE_URL) is shown on the page and is
 *                where the same page is published when the product site is deployed.
 *   'external' : the visitor is sent straight to PRODUCT_SITE_URL.
 */
export const PRODUCT_HOSTING: Record<ProductId, 'monorepo' | 'external'> = {
  blackmusic: 'monorepo',
  vineward: 'monorepo',
  blackvideo: 'monorepo',
  blackgallery: 'monorepo',
};

/** Where a product link on the main website should point. */
export const productHref = (id: ProductId): { href: string; external: boolean } =>
  PRODUCT_HOSTING[id] === 'external'
    ? { href: PRODUCT_SITE_URL[id], external: true }
    : { href: `/${id}`, external: false };
