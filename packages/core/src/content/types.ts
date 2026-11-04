export type ProductId = 'blackmusic' | 'vineward' | 'blackvideo' | 'blackgallery';
export type PlatformId = 'windows' | 'macos' | 'linux' | 'android-tv' | 'android' | 'ios';

export const PLATFORM_LABEL: Record<PlatformId, string> = {
  windows: 'Windows',
  macos: 'macOS',
  linux: 'Linux',
  'android-tv': 'Android TV',
  android: 'Android',
  ios: 'iOS',
};

export type BannerSource =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'video'; src: string; poster?: string; alt?: string };

export type ArticleSection = {
  id: string;
  tag: string;
  title: string;
  banner: string;
  body: string[];
  points?: { title: string; text: string }[];
  link?: { label: string; href: string };
};

export type Product = {
  id: ProductId;
  name: string;
  /** Secondary name shown beside the title, for example a codename. */
  alias?: string;
  category: string;
  tagline: string;
  description: string;
  status: 'Released' | 'Unreleased';
  /** Theme key. Product pages set data-theme to this value. */
  theme: 'blackmusic' | 'vineward' | 'default';
  banner?: BannerSource;
  /** Art only artwork used behind cards. Falls back to banner. */
  cardBanner?: BannerSource;
  /** True when the product keeps a website outside this monorepo. */
  externalSite: boolean;
  github?: { repo: string; fallbackVersion?: string };
  platforms: PlatformId[];
  license: string;
  sections: ArticleSection[];
  media: {
    demoVideo?: { kind: 'youtube' | 'file'; src: string; poster?: string };
    /** Up to eight images. */
    gallery: { src: string; alt: string; width?: number; height?: number }[];
  };
};

export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'note'; text: string };

export type LegalChapter = {
  id: string;
  tag: string;
  title: string;
  banner: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  id: 'privacy' | 'terms';
  owner: string;
  title: string;
  effectiveDate: string;
  appVersion?: string;
  intro: string;
  /** Short points shown in the preview card on the product page. */
  preview: string[];
  chapters: LegalChapter[];
};
