import { banner } from '../../banners';
import { CONTACT, VINEWARD_LEGAL } from '../../config/site.config';
import type { LegalBlock, LegalDoc } from '../types';

/**
 * Vineward Privacy Policy.
 * Source of truth: legalContext.ts supplied with Vineward (PRIVACY_INTRO and PRIVACY_SECTIONS).
 * Wording is lightly edited for grammar and readability. No provisions were added.
 * Items the source marks CONFIRM are carried as `pending(...)` notes.
 */
const pending = (text: string): LegalBlock[] =>
  VINEWARD_LEGAL.showPendingNotes ? [{ type: 'note', text: `Pending confirmation: ${text}` }] : [];

export const vinewardPrivacy: LegalDoc = {
  id: 'privacy',
  owner: 'Vineward',
  title: 'Privacy Policy',
  effectiveDate: 'Draft, last revised October 2026',
  dateLabel: 'Status',
  cover: banner('vw-privacy'),
  intro:
    'Vineward is used by churches and ministries to care for people. That means we may handle personal information, including information about spiritual progress, which deserves a high level of care. This page explains what is collected, why, who can see it, and the choices you have.',
  preview: [
    'Your direct leader can see your daily rhythm, invite counts, connections and ladder progress.',
    'Your email address, password and exact location are never shown to other people.',
    'You can delete your account in Settings, and Vineward does not sell personal information.',
  ],
  chapters: [
    {
      id: 'responsibility',
      tag: 'Responsibility',
      title: 'Who is responsible',
      banner: banner('vw-p-1'),
      blocks: [
        { type: 'p', text: 'The organization that runs your Vineward community, for example your church, decides why and how your information is used. Vineward is operated by the app owner on that organization’s behalf.' },
        ...pending('the legal name and address of the responsible organization, and the name of its Data Protection Officer or privacy contact.'),
      ],
    },
    {
      id: 'information',
      tag: 'Information',
      title: 'What we collect and why',
      banner: banner('vw-p-2'),
      blocks: [
        { type: 'h3', text: 'What we collect' },
        {
          type: 'ul',
          items: [
            'Account details: your email address, your sign-in method (email or Google) and the name you enter.',
            'Profile details: your photo, your role and status in the ladder (for example new believer or leader), your church or organization, your network and who leads you.',
            'Ministry activity: tasks, daily rhythm logs, weekly invite counts and the names you tag, connections you record, attendance, ladder and formation progress, and badges.',
            'Approximate location, only if you choose to share it. Your exact position is stored privately, and other people only see a rough distance range.',
            'Materials: which materials you have unlocked and, when you pay, the receipt image and reference you upload for verification.',
            'Messages you send us through Feedback, and your notification preferences.',
            'Basic technical and crash information used to keep the app working.',
          ],
        },
        { type: 'h3', text: 'Why we use it' },
        {
          type: 'ul',
          items: [
            'To provide the app: sign-in, discipleship tracking, requests between people, notifications and materials.',
            'To let your leader see how you are walking, as described below.',
            'To keep the service secure, prevent misuse and fix problems.',
            'To respond to feedback and support requests.',
          ],
        },
        ...pending('the lawful basis for each purpose (for example consent, contract or legitimate interests) with the organization’s adviser, under the Data Privacy Act of 2012 and, where applicable, the GDPR.'),
      ],
    },
    {
      id: 'access',
      tag: 'Access',
      title: 'Who can see your information',
      banner: banner('vw-p-3'),
      blocks: [
        { type: 'p', text: 'Access is meant to follow your ministry line. It is enforced on the server with database access rules, not only hidden on the screen.' },
        {
          type: 'ul',
          items: [
            'Your direct leader can see your daily rhythm, invite counts, connections and ladder progress.',
            'You can see your own information, and basic details of people in your own line.',
            'Other people can find you in the People Directory only as the app’s visibility rules allow, for example when your profile is public, or when you are in the same organization and are a leader or awaiting a mentor. Only your name, photo, role, status and church are shown.',
            'Your email address, password and exact location are never shown to other people.',
          ],
        },
      ],
    },
    {
      id: 'providers',
      tag: 'Providers',
      title: 'Service providers and sponsored links',
      banner: banner('vw-p-4'),
      blocks: [
        { type: 'h3', text: 'Service providers that process data' },
        {
          type: 'ul',
          items: [
            'Supabase: hosting of the database, sign-in and file storage.',
            'Expo / EAS: building and delivering the app and, if enabled, push notifications.',
            'Sentry: crash and error reports.',
            'Google: only if you choose “Sign in with Google”.',
            'The materials payment verification service run by the app owner, which reads the receipt you upload.',
            'Involve Asia and the advertisers it connects us with: only when you tap a sponsored link. Vineward does not send them your profile or ministry information. The partner site may collect its own data under its own policy.',
          ],
        },
        ...pending('the full list of processors, their locations, and the safeguards used for any transfer of data outside your country.'),
        { type: 'h3', text: 'Sponsored content' },
        { type: 'p', text: 'Some screens show clearly labelled sponsored links. Vineward may earn a commission if you buy through them. Sponsored content never changes how your ministry information is handled.' },
      ],
    },
    {
      id: 'retention',
      tag: 'Retention',
      title: 'How long we keep it and how it is protected',
      banner: banner('vw-p-5'),
      blocks: [
        { type: 'p', text: 'Information is kept while your account is active so the ministry can continue to care for you. You can delete your account in Settings → Profile, which removes your account and the information under it.' },
        { type: 'p', text: 'We use access controls, authenticated connections and database-level rules to protect information. No system is perfectly secure.' },
        ...pending('the actual retention periods for backups, receipts and logs, and the encryption measures in place. None is promised here until verified.'),
      ],
    },
    {
      id: 'rights',
      tag: 'Your rights',
      title: 'Your rights and children',
      banner: banner('vw-p-6'),
      blocks: [
        { type: 'p', text: 'Depending on where you live (including under the Philippine Data Privacy Act, the GDPR and the California CCPA/CPRA), you may have the right to:' },
        {
          type: 'ul',
          items: [
            'be informed about, and access, the personal information we hold about you;',
            'correct inaccurate information (most of it can be edited in Settings);',
            'ask for deletion, object to or restrict certain uses, and withdraw consent;',
            'receive a copy of your information in a portable format;',
            'not be treated differently for using these rights, and opt out of any sale or sharing (Vineward does not sell personal information);',
            'complain to your data protection authority, such as the National Privacy Commission in the Philippines.',
          ],
        },
        { type: 'h3', text: 'Children' },
        { type: 'p', text: 'Vineward is not designed for children. If you believe a child has created an account without a parent’s or guardian’s permission, contact us so it can be removed.' },
        ...pending('the minimum age the organization wants to allow.'),
      ],
    },
    {
      id: 'contact',
      tag: 'Contact',
      title: 'If something goes wrong, and how to reach us',
      banner: banner('vw-p-7'),
      blocks: [
        { type: 'h3', text: 'If something goes wrong' },
        { type: 'p', text: 'If a personal data breach occurs that is likely to put people at risk, the responsible organization will assess it and notify the affected people and the regulator where the law requires it.' },
        { type: 'h3', text: 'Contact' },
        { type: 'p', text: `To use your rights or ask a question about privacy, write to ${CONTACT.legal}.` },
        { type: 'h3', text: 'Changes' },
        { type: 'p', text: 'If this policy changes in a meaningful way, we will update this page and, where required, tell you in the app.' },
      ],
    },
  ],
};
