/**
 * Site level configuration shared by the BlackBlazent website and every product site.
 *
 * Domains: the main site currently lives on Vercel. When the custom domain goes live,
 * set VITE_MAIN_SITE_URL (or edit the fallback below) to https://www.blackblazent.com
 * and every product site will link back to it.
 */
const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {};

export const SITE = {
  name: 'BlackBlazent',
  mainUrl: (env.VITE_MAIN_SITE_URL ?? 'https://blackblazent.vercel.app').replace(/\/$/, ''),
  futureMainUrl: 'https://www.blackblazent.com',
  github: 'https://github.com/BlackBlazent',
} as const;

export const CONTACT = {
  general: 'blackblazent@gmail.com',
  support: 'blackblazent.customer.service@gmail.com',
  legal: 'blackblazent.legal@gmail.com',
  security: 'blackblazent.techsupport@gmail.com',
} as const;

/** Applies to the legal documents. Change here and every document updates. */
export const LEGAL = {
  effectiveDate: 'November 3, 2026',
  responseDays: 30,
  governingLaw: 'the Republic of the Philippines',
  jurisdiction: 'the competent courts of the Philippines',
} as const;

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61565193375253' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@blackblazent' },
  { label: 'YouTube', href: 'https://www.youtube.com/@BlackBlazent' },
];

/**
 * Vineward legal text is a draft supplied with the product (see content/legal/vineward.*.ts).
 * It contains items the responsible organization must still confirm. While true, those items are
 * shown on the page as "Pending confirmation". Set to false once they are confirmed.
 */
export const VINEWARD_LEGAL = {
  showPendingNotes: true,
} as const;
