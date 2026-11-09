import { SITE } from '@blackblazent/core';

const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {};

/**
 * Footer content (v3.1.0). Edit text and links here.
 *
 * BLACK CORP: INTELLIGENCE
 *   CONFIRM the address before launch. Set VITE_BLACK_CORP_URL in the deployment settings, or change
 *   the fallback below. Until it is set the link opens the fallback.
 */
export const FOOTER = {
  faith: 'All Glory to God.',
  github: { label: 'GitHub', href: SITE.github, handle: 'github.com/BlackBlazent' },
  intelligence: {
    name: 'Black Corp: Intelligence',
    url: env.VITE_BLACK_CORP_URL ?? 'https://blackcorp.vercel.app',
    /** Link in the footer columns. */
    linkLabel: 'Black Corp: Intelligence',
    banner: {
      kicker: 'Black Corp: Intelligence',
      statement: ['Serve God.', 'Serve People.'],
      purpose:
        'Black Corp: Intelligence is where BlackBlazent’s defense and intelligence work is described, built on one conviction: capable technology exists to serve.',
      cta: 'Discover Black Corp: Intelligence.',
    },
  },
} as const;
