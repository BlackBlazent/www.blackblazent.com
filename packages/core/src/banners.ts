const files = import.meta.glob('./assets/banners/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

/** Banner image URLs keyed by file name without extension, e.g. BANNERS['bm-features']. */
export const BANNERS: Record<string, string> = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split('/').pop()!.replace('.webp', ''), url]),
);

export const banner = (id: string): string => BANNERS[id] ?? '';
