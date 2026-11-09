import type { ProductId } from '@blackblazent/core';

/**
 * Product and solution categories (v3.1.0).
 *
 * One list controls the Products page, the Solutions page and the home overview.
 * Titles, summaries and long copy live in content/site-data.ts (SOLUTION_AREAS) and are matched by `id`.
 *
 * STAGE says how real a category is today. It is shown to visitors, so keep it honest.
 *   available   : at least one product is released.
 *   capability  : the work exists, there is no public release to download.
 *   development : actively being developed.
 *   future      : an intended direction. Nothing exists to ship yet.
 *
 * A category is never presented as containing products unless `productIds` lists enabled products
 * (see PRODUCT_ENABLED in @blackblazent/core). `visible: false` hides a category everywhere.
 */
export type Stage = 'available' | 'capability' | 'development' | 'future';

export const STAGE_LABEL: Record<Stage, string> = {
  available: 'Available now',
  capability: 'Capability',
  development: 'Active development',
  future: 'Future area',
};

export const STAGE_NOTE: Record<Stage, string> = {
  available: 'Released and available to use.',
  capability: 'Work we can do today. There is no public release to download.',
  development: 'Being researched and built. Not released.',
  future: 'A direction we are working toward. Nothing is released yet.',
};

export type CategoryConfig = {
  id: string;
  visible: boolean;
  stage: Stage;
  /** Products shown inside this category on the Products page. */
  productIds: ProductId[];
};

export const CATEGORIES: CategoryConfig[] = [
  { id: 'consumer', visible: true, stage: 'available', productIds: ['blackmusic', 'vineward', 'blackvideo', 'blackgallery'] },
  { id: 'government', visible: true, stage: 'capability', productIds: [] },
  { id: 'security', visible: true, stage: 'capability', productIds: [] },
  { id: 'defense', visible: true, stage: 'capability', productIds: [] },
  { id: 'ai', visible: true, stage: 'development', productIds: [] },
  { id: 'embedded', visible: true, stage: 'future', productIds: [] },
  { id: 'robotics', visible: true, stage: 'future', productIds: [] },
  { id: 'physical-ai', visible: true, stage: 'future', productIds: [] },
  { id: 'wearables', visible: true, stage: 'future', productIds: [] },
];

/** Page level switches for the Products page. */
export const PRODUCTS_PAGE = {
  /** Show categories that have no released product, labelled by stage. false hides them. */
  showCategoriesWithoutProducts: true,
};

export const getCategory = (id: string): CategoryConfig | undefined => CATEGORIES.find((c) => c.id === id);
