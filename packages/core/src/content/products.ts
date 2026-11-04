import { banner } from '../banners';
import { PRODUCT_ENABLED } from '../config/products.config';
import type { Product, ProductId } from './types';

const ALL_PRODUCTS: Product[] = [
  {
    id: 'blackmusic',
    slug: 'blackmusic',
    name: 'BlackMusic',
    alias: 'RavenSyntha',
    category: 'Music Player',
    tagline: 'Music Ultra Superior Integrated Catalog.',
    description:
      'A music player designed to deliver an unparalleled audio experience. BlackMusic integrates a vast catalog of music with superior playback capabilities.',
    status: 'Released',
    future:
      'Expand cross-platform availability, improve music discovery and synchronization, and continue developing privacy-focused local-first media capabilities.',
    theme: 'blackmusic',
    banner: {
      type: 'image',
      src: banner('blackmusic-cover'),
      alt: 'BlackMusic cover artwork',
    },
    cardBanner: {
      type: 'image',
      src: banner('blackmusic-art'),
      alt: '',
    },
    externalSite: false,
    github: {
      repo: 'BlackBlazent/BlackMusic',
      fallbackVersion: '3.0.0',
    },
    platforms: [
      'windows',
      'macos',
      'linux',
      'android-tv',
      'android',
      'ios',
    ],
    license: 'Open Source, based on the BlackBlazent License',
    sections: [
      {
        id: 'capabilities',
        tag: 'Features',
        title: 'Everything your library needs',
        banner: banner('bm-features'),
        body: [
          'BlackMusic plays the files you already own. It reads the folders you choose, builds a library from the tags and artwork inside your files, and keeps everything on your device.',
          'Around that library sits a set of tools you can use together or leave alone. Each one is optional, and each one tells you when it needs the internet.',
        ],
        points: [
          {
            title: 'Local library',
            text: 'Titles, artists, albums, embedded artwork, playlists, favorites, play history, queue, pins and ratings.',
          },
          {
            title: 'Metadata editing',
            text: 'Fix tags and cover art. Changes are written to your files only when you apply an edit.',
          },
          {
            title: 'Sound and personalization',
            text: 'Equalizer, audio filters, themes, languages, layout and a custom banner image.',
          },
          {
            title: 'Catalogs',
            text: 'Browse and search Spotify, Audius, Deezer, SoundCloud, Tidal, Apple Music, Amazon Music and Yandex Music where the service allows it.',
          },
          {
            title: 'Lyrics and artwork',
            text: 'Lyrics from Genius and LRCLIB, album details from MusicBrainz and the Cover Art Archive, charts from Last.fm.',
          },
          {
            title: 'Speech to text',
            text: 'Transcribe audio with Whisper models that run entirely on your device.',
          },
          {
            title: 'Music Portable Sync',
            text: 'See the same library on all your devices. Songs travel directly between your devices, never through our servers.',
          },
          {
            title: 'Meet Room and Session Share',
            text: 'Listen together in an online room or on the same Wi-Fi. Everyone plays their own copy, so no audio is streamed.',
          },
          {
            title: 'Playback everywhere',
            text: 'Notification and lock screen controls on Android, and playback that continues with the screen off.',
          },
        ],
      },
      {
        id: 'future',
        tag: 'Direction',
        title: 'Where it goes next',
        banner: banner('bm-future'),
        body: [
          'The next stage is reach. BlackMusic is released on GitHub Releases and SourceForge today. Listings on the Microsoft Store, Snap Store, Mac App Store, Google Play, the Apple App Store, Uptodown and Softonic are in preparation, and each one appears on this page only when it is live.',
          'Account management is also on the list, including deleting an account from inside the app. Until then, deletion is handled by email and is described in the privacy policy.',
          'Catalog support will keep following what each service allows. Some services require a subscription, an API key or a developer allow list, and BlackMusic tells you plainly when one cannot be used.',
        ],
      },
      {
        id: 'technology',
        tag: 'Technology',
        title: 'Built to run local first',
        banner: banner('bm-tech'),
        body: [
          'Your library lives in the app data folder on your device. There is no advertising SDK, no analytics and no crash reporting service inside the app.',
          'Online features contact a service only when you use them. Sign in runs through Supabase with Google, GitHub, Facebook, Spotify or email. Sync and rooms use a private realtime channel for small set up messages, and songs move between your devices over encrypted peer to peer connections.',
          'Speech recognition, edits and playback never leave the device. Connections to online services use HTTPS, and secrets that must stay private are kept on our server, not in the app.',
        ],
      },
      {
        id: 'license',
        tag: 'License',
        title: 'Open source, open terms',
        banner: banner('bm-license'),
        body: [
          'BlackMusic is open source and released under the BlackBlazent License. The source code is public on GitHub, and the exact permissions for use, modification and redistribution are written in the LICENSE file of the repository.',
          'Using the app for your own listening is always free. If you plan to build on the code or redistribute binaries, read the license first.',
        ],
        link: {
          label: 'View the repository',
          href: 'https://github.com/BlackBlazent/BlackMusic',
        },
      },
    ],
    media: {
      // Add the demo video and up to eight screenshots when they are ready.
      // Example: demoVideo: { kind: 'youtube', src: 'VIDEO_ID' }
      // Example: gallery: [{ src: '/media/screen-1.webp', alt: 'Library view', width: 1280, height: 800 }]
      gallery: [],
    },
  },
  {
    id: 'vineward',
    slug: 'vineward',
    name: 'Vineward',
    category: 'Social | Church | G12 | Ministry Leadership',
    tagline: 'One place to see who needs attention.',
    description:
      'Vineward gives ministry leaders one place to see who needs attention, what to do about it, and where every person actually stands, from a first connection to being sent to lead.',
    status: 'Released',
    future:
      'Develop the platform further with improved ministry workflows, leadership tools, communication and cross-platform accessibility.',
    theme: 'vineward',
    banner: {
      type: 'image',
      src: banner('vineward-cover'),
      alt: 'Vineward cover artwork',
    },
    cardBanner: {
      type: 'image',
      src: banner('vineward-art'),
      alt: '',
    },
    externalSite: true,
    github: {
      repo: 'BlackBlazent/Vineward',
    },
    platforms: ['android', 'ios'],
    license: 'Open Source, based on the BlackBlazent License',
    sections: [],
    media: {
      gallery: [],
    },
  },
  {
    id: 'blackvideo',
    slug: 'blackvideo',
    name: 'BlackVideo',
    category: 'Video Player',
    tagline: 'A video player built for versatile, cross-platform playback.',
    description:
      'Details for BlackVideo will be published when the product is ready.',
    status: 'Unreleased',
    future:
      'Planned development of a versatile cross-platform video player with a focus on playback, media organization and a consistent user experience.',
    theme: 'default',
    externalSite: false,
    platforms: [],
    license: 'Open Source, based on the BlackBlazent License',
    sections: [],
    media: {
      gallery: [],
    },
  },
  {
    id: 'blackgallery',
    slug: 'blackgallery',
    name: 'BlackGallery',
    category: 'Photo Gallery',
    tagline: 'A visual library for organizing and displaying images.',
    description:
      'Details for BlackGallery will be published when the product is ready.',
    status: 'Unreleased',
    future:
      'Planned development of a visual media library for organizing, managing and displaying personal image collections.',
    theme: 'default',
    externalSite: false,
    platforms: [],
    license: 'Open Source, based on the BlackBlazent License',
    sections: [],
    media: {
      gallery: [],
    },
  },
];

/** Every product, regardless of visibility. Use only for configuration tooling. */
export const getAllProducts = (): Product[] => ALL_PRODUCTS;

/** Products that are switched on in products.config.ts. */
export const getEnabledProducts = (): Product[] =>
  ALL_PRODUCTS.filter((product) => PRODUCT_ENABLED[product.id]);

export const getProduct = (id: ProductId): Product | undefined =>
  ALL_PRODUCTS.find((product) => product.id === id);

export const getEnabledProduct = (id: string): Product | undefined =>
  getEnabledProducts().find((product) => product.id === id);