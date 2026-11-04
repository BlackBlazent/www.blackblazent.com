import { useEffect, useState } from 'react';

type ReleaseState = { version?: string; url?: string; loading: boolean };

const TTL_MS = 60 * 60 * 1000;

const readCache = (key: string): { version: string; url?: string } | null => {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { at: number; version: string; url?: string };
    return Date.now() - parsed.at < TTL_MS ? parsed : null;
  } catch {
    return null;
  }
};

const extractVersion = (tag: string): string => {
  const match = tag.match(/\d+\.\d+(?:\.\d+)?(?:[-+.][0-9A-Za-z.]+)?/);
  return match ? match[0] : tag.replace(/^v/i, '');
};

/**
 * Reads the latest published release of a GitHub repository.
 * Falls back to `fallback` when the API is unreachable or the repo has no release.
 */
export function useLatestRelease(repo?: string, fallback?: string): ReleaseState {
  const [state, setState] = useState<ReleaseState>({ version: fallback, loading: Boolean(repo) });

  useEffect(() => {
    if (!repo) {
      setState({ version: fallback, loading: false });
      return;
    }
    const key = `bb:release:${repo}`;
    const cached = readCache(key);
    if (cached) {
      setState({ version: cached.version, url: cached.url, loading: false });
      return;
    }
    const controller = new AbortController();
    fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' },
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        return res.json() as Promise<{ tag_name?: string; html_url?: string }>;
      })
      .then((json) => {
        if (!json.tag_name) throw new Error('no tag');
        const version = extractVersion(json.tag_name);
        try {
          sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), version, url: json.html_url }));
        } catch {
          /* storage can be unavailable in private mode */
        }
        setState({ version, url: json.html_url, loading: false });
      })
      .catch((err: unknown) => {
        if ((err as { name?: string }).name === 'AbortError') return;
        setState({ version: fallback, loading: false });
      });
    return () => controller.abort();
  }, [repo, fallback]);

  return state;
}
