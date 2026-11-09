/** Accepts a YouTube id or any common YouTube URL and returns the id, or null. */
export const parseYouTubeId = (input: string): string | null => {
  const value = input.trim();
  if (/^[\w-]{11}$/.test(value)) return value;
  try {
    const url = new URL(value);
    if (url.hostname === 'youtu.be') return url.pathname.slice(1, 12) || null;
    if (url.hostname.endsWith('youtube.com') || url.hostname.endsWith('youtube-nocookie.com')) {
      const v = url.searchParams.get('v');
      if (v) return v.slice(0, 11);
      const m = url.pathname.match(/\/(embed|shorts|live)\/([\w-]{11})/);
      if (m) return m[2];
    }
  } catch { /* not a URL */ }
  return null;
};

/** Privacy enhanced embed. The iframe is only rendered after the visitor opens a node. */
export const youTubeEmbedSrc = (id: string): string =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
