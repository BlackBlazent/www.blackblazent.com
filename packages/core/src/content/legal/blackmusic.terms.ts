import { banner } from '../../banners';
import { CONTACT, LEGAL, SITE } from '../../config/site.config';
import type { LegalDoc } from '../types';

export const blackmusicTerms: LegalDoc = {
  id: 'terms',
  owner: 'BlackMusic',
  title: 'Terms and Conditions',
  effectiveDate: LEGAL.effectiveDate,
  appVersion: '3.0.0',
  intro:
    'These terms are the agreement between you and BlackBlazent for using BlackMusic. They work together with the Privacy Policy. In these terms, "we" and "us" mean BlackBlazent.',
  preview: [
    'BlackMusic plays files you already own. You are responsible for having the right to use them.',
    'The source code is open source under the BlackBlazent License.',
    'Third party services follow their own terms, and the app is provided as is.',
  ],
  chapters: [
    {
      id: 'agreement',
      tag: 'Agreement',
      title: 'Using BlackMusic',
      banner: banner('bm-t-agreement'),
      blocks: [
        { type: 'h3', text: 'Agreement' },
        { type: 'p', text: 'By installing or using BlackMusic you agree to these terms and to the Privacy Policy. If you do not agree, please do not use the app.' },
        { type: 'h3', text: 'License to use' },
        { type: 'p', text: 'You may install and use BlackMusic for your own listening. The source code is open source and published on GitHub under the BlackBlazent License. That license, included in the repository as the LICENSE file, defines what you may do with the code, including copying, modifying and redistributing it. Where these terms and the BlackBlazent License differ on the source code, the BlackBlazent License applies.' },
      ],
    },
    {
      id: 'content',
      tag: 'Content',
      title: 'Your music, your responsibility',
      banner: banner('bm-t-content'),
      blocks: [
        {
          type: 'ul',
          items: [
            'BlackMusic plays files you already have. You must own them or have the right to use them.',
            'BlackMusic does not provide, sell or license music. Online catalogs are provided by third parties under their own terms.',
            'You are responsible for the metadata and artwork you write to your files. Back up important files before editing. We are not liable for loss caused by editing or conversion.',
          ],
        },
      ],
    },
    {
      id: 'services-and-use',
      tag: 'Services',
      title: 'Online services and acceptable use',
      banner: banner('bm-t-services'),
      blocks: [
        { type: 'h3', text: 'Third party services' },
        { type: 'p', text: 'Connecting to Spotify, YouTube, Audius, Tidal, Apple Music, Amazon Music, Deezer, SoundCloud, Yandex Music, Last.fm, Genius, MusicBrainz or any other service is governed by that service terms. Some require a paid subscription, an API key or a developer allow list. BlackMusic does not guarantee that any service will be available, complete or allow playback.' },
        { type: 'h3', text: 'Acceptable use' },
        { type: 'p', text: 'You agree not to:' },
        {
          type: 'ul',
          items: [
            'use BlackMusic to infringe copyright or to bypass a service technical protections or terms;',
            'download or extract media you have no right to copy;',
            'reverse engineer, resell or redistribute the app contrary to the license;',
            'attack, overload or probe our servers or other users accounts;',
            'upload unlawful content or impersonate others.',
          ],
        },
      ],
    },
    {
      id: 'accounts-and-updates',
      tag: 'Accounts',
      title: 'Accounts, promotions and updates',
      banner: banner('bm-t-accounts'),
      blocks: [
        { type: 'h3', text: 'Accounts' },
        { type: 'p', text: 'You are responsible for your account and for keeping your credentials secure. We may suspend or remove accounts that breach these terms.' },
        { type: 'h3', text: 'Promotions and affiliate links' },
        { type: 'p', text: 'Promotional links are clearly marked. We are not a party to your dealings with advertisers and are not responsible for their products or sites.' },
        { type: 'h3', text: 'Updates' },
        { type: 'p', text: 'BlackMusic may check for and offer updates automatically. Updates may add, change or remove features. Some features differ by platform, and unsupported features are hidden or disabled on that platform.' },
        { type: 'h3', text: 'Availability' },
        { type: 'p', text: 'We aim for a stable app but provide it "as is" and "as available". Features may change, and online services may stop working without notice.' },
      ],
    },
    {
      id: 'liability',
      tag: 'Liability',
      title: 'Warranties and liability',
      banner: banner('bm-t-liability'),
      blocks: [
        { type: 'h3', text: 'Disclaimer of warranties' },
        { type: 'p', text: 'To the fullest extent permitted by law, we give no warranty of any kind, express or implied. This includes merchantability, fitness for a particular purpose, non-infringement, uninterrupted or error-free operation, and the accuracy of third party data such as lyrics, artwork and metadata.' },
        { type: 'h3', text: 'Limitation of liability' },
        { type: 'p', text: 'To the fullest extent permitted by law, BlackBlazent is not liable for indirect, incidental, special, consequential or punitive damages, or for lost data, files, profits or goodwill, arising from your use of the app. Our total liability for any claim is limited to the amount you paid for the app in the 12 months before the claim, which may be zero. Nothing here limits liability that cannot be limited by law.' },
      ],
    },
    {
      id: 'legal',
      tag: 'Legal',
      title: 'Ownership, ending and governing law',
      banner: banner('bm-t-legal'),
      blocks: [
        { type: 'h3', text: 'Intellectual property' },
        { type: 'p', text: 'The BlackMusic name, logo and original app content belong to BlackBlazent. Third party names, logos and content belong to their owners and are used for identification only. Brand names do not imply endorsement.' },
        { type: 'h3', text: 'Ending your use' },
        { type: 'p', text: 'You may stop using BlackMusic at any time by uninstalling it. We may end your right to use the app if you breach these terms. Sections that by their nature should continue, such as the warranty disclaimer, the liability limit and intellectual property, continue after termination.' },
        { type: 'h3', text: 'Governing law and disputes' },
        { type: 'p', text: `These terms are governed by the laws of ${LEGAL.governingLaw}. Disputes go to ${LEGAL.jurisdiction}, unless mandatory consumer law in your country says otherwise.` },
        { type: 'h3', text: 'Changes to these terms' },
        { type: 'p', text: 'We may revise these terms. The updated version shows a new effective date. Continuing to use the app after a change means you accept it.' },
        { type: 'h3', text: 'Contact' },
        { type: 'p', text: `BlackBlazent, ${CONTACT.legal}, ${SITE.mainUrl}` },
      ],
    },
  ],
};
