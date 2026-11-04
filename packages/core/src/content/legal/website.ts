import { banner } from '../../banners';
import { CONTACT, LEGAL, SITE } from '../../config/site.config';
import type { LegalDoc } from '../types';

export const websitePrivacy: LegalDoc = {
  id: 'privacy',
  owner: 'BlackBlazent Website',
  title: 'Website Privacy Policy',
  effectiveDate: LEGAL.effectiveDate,
  intro:
    'This policy covers the BlackBlazent website only. Each product has its own privacy policy that describes what that app does. In this policy, "we" and "us" mean BlackBlazent.',
  preview: [],
  chapters: [
    {
      id: 'collect',
      tag: 'Privacy',
      title: 'What this site collects',
      banner: banner('site-p-collect'),
      blocks: [
        { type: 'p', text: 'The website has no accounts, no forms that store your details, no advertising and no analytics. We do not set tracking cookies. Fonts are served from our own pages, so your browser does not contact a font provider.' },
        { type: 'p', text: 'Like any web host, our hosting provider, Vercel, processes technical request data such as your IP address, browser type and the pages requested, in order to deliver the site and keep it secure. That data is handled under the provider own policy.' },
      ],
    },
    {
      id: 'third-party',
      tag: 'Privacy',
      title: 'Third party requests',
      banner: banner('site-p-third'),
      blocks: [
        { type: 'p', text: 'Product pages ask the GitHub API for the latest released version number of an app, so the version you see is current. This request goes from your browser to GitHub, which can see your IP address. The result is kept in your browser for a short time to avoid repeat requests.' },
        { type: 'p', text: 'Links to stores, repositories, social networks and partner sites leave this website. Those sites have their own privacy practices that we do not control.' },
        { type: 'p', text: 'If you open an embedded demo video, the video provider may set cookies inside its frame. Videos load only after you choose to play them.' },
      ],
    },
    {
      id: 'choices',
      tag: 'Privacy',
      title: 'Your choices and contact',
      banner: banner('site-p-rights'),
      blocks: [
        { type: 'p', text: `If you email us, we keep the message and your address for as long as needed to answer you and keep a record of support. You can ask what we hold or ask us to delete it by writing to ${CONTACT.legal}. We will answer within ${LEGAL.responseDays} days.` },
        { type: 'p', text: 'We may update this policy. The new version carries a new effective date.' },
      ],
    },
  ],
};

export const websiteTerms: LegalDoc = {
  id: 'terms',
  owner: 'BlackBlazent Website',
  title: 'Website Terms of Use',
  effectiveDate: LEGAL.effectiveDate,
  intro: `These terms cover your use of ${SITE.mainUrl} and the product sites we operate. Each app has its own Terms and Conditions that apply to the app itself.`,
  preview: [],
  chapters: [
    {
      id: 'use',
      tag: 'Terms',
      title: 'Using this website',
      banner: banner('site-t-use'),
      blocks: [
        { type: 'p', text: 'You may browse this website and share links to it. Please do not attempt to disrupt it, probe it for weaknesses without permission, or collect its content in bulk by automated means.' },
        { type: 'p', text: 'Report security concerns to ' + CONTACT.security + '. We appreciate responsible disclosure.' },
      ],
    },
    {
      id: 'content',
      tag: 'Terms',
      title: 'Content and ownership',
      banner: banner('site-t-content'),
      blocks: [
        { type: 'p', text: 'The BlackBlazent name, logos, written content and original artwork belong to BlackBlazent. Product source code is covered by the license in each repository. Third party names and logos belong to their owners and appear for identification only.' },
        { type: 'p', text: 'Vineward is a collaborative project. Its website and branding are maintained with its partners and are covered by its own terms.' },
      ],
    },
    {
      id: 'liability',
      tag: 'Terms',
      title: 'Liability and changes',
      banner: banner('site-t-liability'),
      blocks: [
        { type: 'p', text: 'The website is provided as is and as available. To the extent the law allows, BlackBlazent is not liable for loss arising from your use of the website or from links that lead away from it. Nothing here limits liability that cannot be limited by law.' },
        { type: 'p', text: `These terms are governed by the laws of ${LEGAL.governingLaw}. We may revise them, and the updated version shows a new effective date.` },
      ],
    },
  ],
};
