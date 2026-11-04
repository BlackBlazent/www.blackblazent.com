import { banner } from '../../banners';
import { CONTACT, LEGAL } from '../../config/site.config';
import type { LegalDoc } from '../types';

export const blackmusicPrivacy: LegalDoc = {
  id: 'privacy',
  owner: 'BlackMusic',
  title: 'Privacy Policy',
  effectiveDate: LEGAL.effectiveDate,
  appVersion: '3.0.0',
  intro:
    'This policy explains what BlackMusic keeps on your device, what it sends to other services, and what you can control. BlackMusic is published by BlackBlazent. In this policy, "we" and "us" mean BlackBlazent. It describes version 3.0.0 on desktop and mobile.',
  preview: [
    'Your music files stay on your device. We never upload or store your audio.',
    'No account is required. Sign in, sync and rooms are optional.',
    'No advertising SDK, no analytics and no crash reporting. We do not sell personal data.',
  ],
  chapters: [
    {
      id: 'local-first',
      tag: 'Local first',
      title: 'Your music stays on your device',
      banner: banner('bm-p-library'),
      blocks: [
        { type: 'p', text: 'BlackMusic is a local-first music player. Your music files stay on your device, and we do not upload, copy or store them on our servers.' },
        {
          type: 'ul',
          items: [
            'You can use BlackMusic without creating an account.',
            'BlackMusic has no advertising SDK, no analytics and no crash reporting service. We do not sell your personal data.',
            'Some features contact third party services for catalogs, lyrics, cover art or sign in. Those requests go from your device to that service, and its own privacy policy applies to what it receives.',
          ],
        },
        { type: 'h3', text: 'What is stored on your device' },
        { type: 'p', text: 'BlackMusic keeps the following in its app data folder, using the app local store and your device storage.' },
        {
          type: 'table',
          head: ['Data', 'Why it is kept'],
          rows: [
            ['Paths and tags of your audio files: title, artist, album, duration, embedded artwork', 'To build and show your library'],
            ['Playlists, favorites, play history, queue, pins and ratings', 'Features inside the app'],
            ['Edited metadata and cover art you choose', 'Saved to your files only when you apply an edit'],
            ['Settings and personalization: theme, language, banner image, audio filters, equalizer, layout', 'To remember your preferences'],
            ['API keys and tokens you paste into Settings, such as a Last.fm key or a YouTube key', 'To call those services on your behalf'],
            ['Cached results such as promotions and artwork lookups', 'Speed and offline behavior'],
            ['Speech to text models and transcripts (Whisper)', 'They run entirely on your device'],
          ],
        },
        { type: 'p', text: 'We cannot see any of this data. Uninstalling the app or clearing its data removes it. Your music files themselves are never deleted when you uninstall.' },
      ],
    },
    {
      id: 'permissions',
      tag: 'Permissions',
      title: 'What the app asks for, and why',
      banner: banner('bm-p-permissions'),
      blocks: [
        {
          type: 'table',
          head: ['Permission or access', 'Why'],
          rows: [
            ['Read the folders you choose, and on desktop and Android the audio storage, including SD cards where the system allows', 'To find and play your music'],
            ['Android media and audio read (READ_MEDIA_AUDIO, or READ_EXTERNAL_STORAGE on older versions)', 'To discover music on the device'],
            ['Notifications and foreground service on Android', 'Lock screen and notification playback controls'],
            ['Internet', 'Online services, sign in, updates, lyrics and artwork'],
            ['Wake lock on Android', 'To keep playback running with the screen off'],
          ],
        },
        { type: 'p', text: 'You can revoke any permission in your device settings. Features that depend on it will stop working, and the app tells you when that happens.' },
      ],
    },
    {
      id: 'accounts',
      tag: 'Accounts',
      title: 'Sign in, sync and rooms',
      banner: banner('bm-p-accounts'),
      blocks: [
        { type: 'h3', text: 'Account and sign in (optional)' },
        { type: 'p', text: 'If you create an account or sign in, we use Supabase for authentication and, depending on the method you pick, Google, GitHub, Facebook or Spotify as the sign in provider.' },
        {
          type: 'ul',
          items: [
            'What we receive: your email address, display name, profile picture URL and a unique account ID from the provider you choose. If you sign up with email, your password is handled by Supabase and we cannot read it.',
            'What we use it for: showing your name and photo in the app and identifying your account. Nothing else.',
            'Sessions: a session token is stored on your device so you stay signed in. Signing out removes it.',
            'Provider tokens: when you connect Spotify, the tokens needed to call Spotify for you are kept on your device.',
          ],
        },
        { type: 'h3', text: 'Sync (optional, off by default)' },
        { type: 'p', text: 'If you turn on Music Portable Sync, BlackMusic uploads library details only: song titles, artists, albums, genre, year, composer, country and mood tags, playlists, favorites, play history, device names and folder names. File paths and audio files are never uploaded or stored by us.' },
        { type: 'p', text: 'When you ask one device to play or copy a song that lives on another of your devices, the song travels directly between your devices over an encrypted peer to peer connection. Our service only relays small connection set up messages on a private channel that only your account can read, and it keeps none of them.' },
        { type: 'p', text: 'To help two devices on different networks find each other, a public STUN server, by default Google at stun.l.google.com, learns both devices network addresses. You can add your own TURN server in Settings. You can turn sync off and delete everything synced from the server with one button. Your music and local playlists are not touched.' },
        { type: 'h3', text: 'Meet Room and Session Share' },
        { type: 'p', text: 'Online rooms use our realtime service to pass short messages: the song title, artist and length, play and pause, position, the shared queue and display names. Each person plays their own copy of the song, and no audio is sent. Anyone who has the room code can join, so share it only with people you trust.' },
        { type: 'p', text: 'Same Wi-Fi rooms connect devices directly on your local network. They need no internet, and their messages stay on that network.' },
        { type: 'h3', text: 'Deleting your account' },
        { type: 'p', text: `To delete your account and the data we hold for it, email ${CONTACT.legal} from the address on your account with the subject "Delete my BlackMusic account". We will delete it within ${LEGAL.responseDays} days and confirm by reply. You can also open the dedicated deletion page for step by step instructions.` },
      ],
    },
    {
      id: 'services',
      tag: 'Services',
      title: 'Third party services',
      banner: banner('bm-p-services'),
      blocks: [
        { type: 'p', text: 'BlackMusic contacts these services only when you use the related feature. Your IP address and the data in the request, such as a search term, are visible to the service.' },
        {
          type: 'table',
          head: ['Service', 'What for', 'What is sent'],
          rows: [
            ['Supabase', 'Account sign in', 'Credentials or the OAuth exchange'],
            ['Spotify', 'Browse, search and play through your Spotify account', 'OAuth tokens, search terms, track IDs'],
            ['Audius, Deezer, SoundCloud, Tidal, Apple Music, Amazon Music, Yandex Music', 'Browse and search catalogs when you select them and provide the required key', 'Search terms and requests for catalog data'],
            ['YouTube Data API and YouTube embed', 'Video search and playback', 'Search terms and video IDs'],
            ['Last.fm', 'Charts, artist info, album art and optional scrobble history', 'Artist and album names, and the Last.fm username you enter'],
            ['MusicBrainz and Cover Art Archive', 'Album and cover art lookup', 'Artist and album names'],
            ['Genius and LRCLIB', 'Lyrics and song info', 'Artist and title'],
            ['Hugging Face and GitHub', 'Speech model downloads and update checks', 'A standard download request'],
            ['fal.ai', 'Optional cover art generation with your own fal.ai key, only when you press Generate thumbnail', 'The artwork prompt (song, album, artist, genre or mood words) and your key'],
            ['Google STUN, or your own server', 'Helps two of your devices connect directly when syncing songs', 'Network addresses of your devices'],
            ['Involve Asia and brand partners', 'Promotional cards', 'A request for the current offers'],
          ],
        },
        { type: 'p', text: 'We do not control these services, so please read their policies before you use them. Some services, such as Tidal, Pandora and Amazon Music, may be unavailable or may require credentials. BlackMusic tells you when a service cannot be used.' },
        { type: 'h3', text: 'Video, downloads and speech tools' },
        {
          type: 'ul',
          items: [
            'On desktop, BlackMusic can call a local yt-dlp helper where it is permitted. On mobile, only search and playback through the official YouTube API are offered, and no download is available.',
            'You are responsible for making sure you have the right to download or convert any content, and for following the terms of the service it comes from.',
            'Speech to text with Whisper runs locally. Audio you transcribe is never sent to us.',
          ],
        },
      ],
    },
    {
      id: 'promotions',
      tag: 'Promotions',
      title: 'Promotions and affiliate links',
      banner: banner('bm-p-promos'),
      blocks: [
        { type: 'p', text: 'BlackMusic may show promotional cards, and each one is labeled as a promotion. Some links are affiliate links. If you click and buy, we may earn a commission at no extra cost to you.' },
        { type: 'p', text: 'How often a card has been shown is counted on your device to limit repetition. We do not build a profile about you from it. Opening a promotion takes you to a third party website with its own privacy practices.' },
        { type: 'h3', text: 'Cookies and tracking' },
        { type: 'p', text: 'BlackMusic is an application, not a website. It does not use advertising cookies or cross app tracking. Embedded third party players, such as YouTube, may set their own cookies inside their frame.' },
      ],
    },
    {
      id: 'rights',
      tag: 'Your rights',
      title: 'Your data, your call',
      banner: banner('bm-p-rights'),
      blocks: [
        { type: 'h3', text: 'Your rights' },
        { type: 'p', text: `Depending on where you live, for example under the GDPR in the EU and UK, the CCPA and CPRA in California, or the Philippine Data Privacy Act, you may have the right to access, correct, delete or export your personal data, to object to or restrict processing, and to withdraw consent. Because most data stays on your device, you control it directly. For account data we hold, contact ${CONTACT.legal}. We will answer within ${LEGAL.responseDays} days.` },
        { type: 'h3', text: 'Retention' },
        { type: 'p', text: 'Account data is kept while your account exists. Local data is kept until you remove it. Cached data expires automatically or when you clear the app data.' },
        { type: 'h3', text: 'Children' },
        { type: 'p', text: 'BlackMusic is not directed to children under 13, or the minimum age in your country. We do not knowingly collect personal data from them. If you believe a child created an account, contact us and we will delete it.' },
        { type: 'h3', text: 'Security' },
        { type: 'p', text: `Connections to online services use HTTPS. Secrets that must not be public are kept on our server, not in the app. No method of storage or transmission is perfectly secure, so we cannot guarantee absolute security. Report security issues to ${CONTACT.security}.` },
        { type: 'h3', text: 'International transfers' },
        { type: 'p', text: 'Supabase and the third party services above may process data in other countries. Where the law requires it, transfers rely on the safeguards those providers offer.' },
        { type: 'h3', text: 'Changes to this policy' },
        { type: 'p', text: 'We may update this policy. The new version carries a new effective date, and material changes are announced in the app. Continued use means you accept the updated policy.' },
      ],
    },
    {
      id: 'store-summary',
      tag: 'Summary',
      title: 'Store data summary',
      banner: banner('bm-p-summary'),
      blocks: [
        { type: 'p', text: 'This table summarizes the sections above in the form that app stores ask for. If anything here differs from the detailed sections, the detailed sections apply.' },
        {
          type: 'table',
          head: ['Data', 'Collected by us', 'Purpose'],
          rows: [
            ['Email, display name, profile picture URL, account ID', 'Only if you create an account', 'Sign in and showing your name in the app'],
            ['Library details: titles, artists, albums, tags, playlists, favorites, play history, device and folder names', 'Only if you turn on sync', 'Showing the same library on your devices'],
            ['Audio files', 'Never', 'Not applicable'],
            ['Room messages: song info, playback state, queue, display names', 'Relayed while you are in an online room', 'Listening together'],
            ['Location, contacts, photos, advertising ID, usage analytics, crash logs', 'Not collected', 'Not applicable'],
          ],
        },
        {
          type: 'ul',
          items: [
            'Data sent to us is encrypted in transit with HTTPS.',
            'You can request deletion of your account data at any time, and you can delete synced data from inside the app.',
            'We do not sell personal data and we do not use it for advertising.',
          ],
        },
        { type: 'note', text: `Questions about this policy can be sent to ${CONTACT.legal}.` },
      ],
    },
  ],
};
