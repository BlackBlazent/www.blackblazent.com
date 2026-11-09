import { banner } from '../../banners';
import { VINEWARD_LEGAL } from '../../config/site.config';
import type { LegalBlock, LegalDoc } from '../types';

/**
 * Vineward Terms and Conditions.
 * Source of truth: legalContext.ts supplied with Vineward (TERMS_INTRO and TERMS_SECTIONS).
 * Wording is lightly edited for grammar and readability. No provisions were added.
 */
const pending = (text: string): LegalBlock[] =>
  VINEWARD_LEGAL.showPendingNotes ? [{ type: 'note', text: `Pending confirmation: ${text}` }] : [];

export const vinewardTerms: LegalDoc = {
  id: 'terms',
  owner: 'Vineward',
  title: 'Terms and Conditions',
  effectiveDate: 'Draft, last revised October 2026',
  dateLabel: 'Status',
  cover: banner('vw-terms'),
  intro:
    'These terms explain the rules for using Vineward. By creating an account or using the app, you agree to them. If you do not agree, please do not use the app.',
  preview: [
    'Give accurate information and keep your sign-in details private.',
    'You are responsible for what you record about other people. Treat it with care and confidentiality.',
    'You can delete your account at any time in Settings.',
  ],
  chapters: [
    {
      id: 'using',
      tag: 'Using Vineward',
      title: 'Using Vineward',
      banner: banner('vw-t-1'),
      blocks: [
        {
          type: 'ul',
          items: [
            'You must give accurate information and keep your sign-in details private.',
            'You are responsible for what you record about other people. Only enter information you have a good reason to hold, and treat it with care and confidentiality.',
            'Do not misuse the app, try to access information outside your ministry line, interfere with the service or upload unlawful content.',
          ],
        },
      ],
    },
    {
      id: 'roles',
      tag: 'Roles',
      title: 'Ministry roles',
      banner: banner('vw-t-2'),
      blocks: [
        { type: 'p', text: 'Roles such as leader or pastor decide what you can see and do. Choosing a role does not by itself make you verified. Some actions, such as approving payments, need verification by the app owner.' },
      ],
    },
    {
      id: 'content',
      tag: 'Content',
      title: 'Your content, materials and donations',
      banner: banner('vw-t-3'),
      blocks: [
        { type: 'h3', text: 'Your content' },
        { type: 'p', text: 'You keep ownership of what you enter. You allow Vineward and your ministry to store and display it to provide the service, as described in the Privacy Policy.' },
        { type: 'h3', text: 'Materials and payments' },
        {
          type: 'ul',
          items: [
            'Materials are unlocked after your payment receipt is verified. Prices are shown in the app.',
            'Materials are for your personal ministry use. Do not copy or share them beyond what the owner permits.',
            'Refunds, if any, are handled by the app owner.',
          ],
        },
        ...pending('refund and licensing terms with the app owner.'),
        { type: 'h3', text: 'Donations' },
        { type: 'p', text: 'Donations are voluntary and are processed by third-party payment apps. Vineward does not store your payment account details.' },
      ],
    },
    {
      id: 'third-parties',
      tag: 'Third parties',
      title: 'Sponsored content and availability',
      banner: banner('vw-t-4'),
      blocks: [
        { type: 'h3', text: 'Sponsored content and third-party links' },
        { type: 'p', text: 'Sponsored items are clearly labelled and open websites we do not control. We are not responsible for their content, products or privacy practices.' },
        { type: 'h3', text: 'Availability' },
        { type: 'p', text: 'We work to keep Vineward available, but we cannot guarantee that it will always be uninterrupted or error free. Features may change.' },
      ],
    },
    {
      id: 'ending',
      tag: 'Ending',
      title: 'Ending use, limits and governing law',
      banner: banner('vw-t-5'),
      blocks: [
        { type: 'h3', text: 'Ending your use' },
        { type: 'p', text: 'You can delete your account at any time in Settings. We may suspend accounts that break these terms or put others at risk.' },
        { type: 'h3', text: 'Limits and governing law' },
        { type: 'p', text: 'To the extent the law allows, Vineward is provided “as is” and is not liable for indirect losses. Nothing here limits rights you have that cannot be limited by law.' },
        ...pending('the governing law and venue (for example the Philippines) and the liability wording, with a legal adviser.'),
        { type: 'h3', text: 'Contact' },
        { type: 'p', text: 'Questions about these terms can be sent to the privacy contact listed in the Privacy Policy.' },
      ],
    },
  ],
};
