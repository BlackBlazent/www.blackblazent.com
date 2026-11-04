import type { PlatformId, ProductId } from '../content/types';

export type StoreId =
  | 'github'
  | 'sourceforge'
  | 'microsoft-store'
  | 'uptodown'
  | 'softonic'
  | 'snap-store'
  | 'mac-app-store'
  | 'google-play'
  | 'app-store'
  | 'apkpure'
  | 'aptoide';

export type StoreMeta = {
  label: string;
  group: 'desktop' | 'mobile';
  platforms: PlatformId[];
};

export const STORE_META: Record<StoreId, StoreMeta> = {
  github: { label: 'GitHub Releases', group: 'desktop', platforms: ['windows', 'macos', 'linux', 'android'] },
  sourceforge: { label: 'SourceForge', group: 'desktop', platforms: ['windows', 'macos', 'linux'] },
  'microsoft-store': { label: 'Microsoft Store', group: 'desktop', platforms: ['windows'] },
  uptodown: { label: 'Uptodown', group: 'desktop', platforms: ['windows', 'android'] },
  softonic: { label: 'Softonic', group: 'desktop', platforms: ['windows', 'macos'] },
  'snap-store': { label: 'Snap Store', group: 'desktop', platforms: ['linux'] },
  'mac-app-store': { label: 'Mac App Store', group: 'desktop', platforms: ['macos'] },
  'google-play': { label: 'Google Play Store', group: 'mobile', platforms: ['android'] },
  'app-store': { label: 'Apple App Store', group: 'mobile', platforms: ['ios'] },
  apkpure: { label: 'APKPure', group: 'mobile', platforms: ['android'] },
  aptoide: { label: 'Aptoide', group: 'mobile', platforms: ['android'] },
};

export type StoreEntry = {
  /** Set to true once the listing is live. Unavailable entries never act as links. */
  available: boolean;
  url?: string;
};

/**
 * How unavailable stores appear.
 *   'hidden'   : not rendered at all
 *   'disabled' : rendered as a muted, non-clickable "Not yet available" row
 */
export const UNAVAILABLE_STORE_DISPLAY: 'hidden' | 'disabled' = 'hidden';

/**
 * One table for every product. To open a store, flip `available` to true and
 * add its `url`. A store with no entry for a product is treated as unavailable.
 */
export const DISTRIBUTION: Record<ProductId, Partial<Record<StoreId, StoreEntry>>> = {
  blackmusic: {
    github: { available: true, url: 'https://github.com/BlackBlazent/BlackMusic/releases' },
    sourceforge: { available: true, url: 'https://sourceforge.net/projects/blackmusic/' },
    'microsoft-store': { available: false },
    uptodown: { available: false },
    softonic: { available: false },
    'snap-store': { available: false },
    'mac-app-store': { available: false },
    'google-play': { available: false },
    'app-store': { available: false },
  },
  vineward: {
    github: { available: false },
    'app-store': { available: false },
    'google-play': { available: false },
    apkpure: { available: false },
    aptoide: { available: false },
    sourceforge: { available: false },
  },
  blackvideo: {},
  blackgallery: {},
};
