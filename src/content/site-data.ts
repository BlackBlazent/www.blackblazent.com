import { getEnabledProducts } from '@blackblazent/core';

export { SOCIAL_LINKS } from '@blackblazent/core';

export const NAV_LINKS = [
  { label: 'Products', to: '/products' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Research', to: '/research' },
  { label: 'Engineering', to: '/engineering' },
  { label: 'Resources', to: '/resources' },
  { label: 'About', to: '/about' },
];

export type SolutionArea = {
  id: string;
  title: string;
  summary: string;
  body: string;
  items?: { title: string; text: string }[];
  note?: string;
};

/** Consumer products are listed from the product configuration so disabled products never appear. */
export const consumerProductNames = (): string => getEnabledProducts().map((p) => p.name).join(', ');

export const SOLUTION_AREAS: SolutionArea[] = [
  {
    id: 'consumer',
    title: 'Consumer Applications and Software',
    summary: 'Everyday software for people',
    body:
      'Music, video, photos and community tools that work on the devices people already own. Each product keeps the person in charge of their own library and their own data.',
  },
  {
    id: 'government',
    title: 'Government Applications',
    summary: 'Software for public institutions',
    body:
      'Software solutions designed for government institutions and public sector operations, where reliability, clear records and accountability matter as much as features.',
  },
  {
    id: 'security',
    title: 'Operating Systems, Security and Forensics',
    summary: 'Tools for people who defend and investigate',
    body:
      'Operating system distributions and tools focused on cybersecurity, ethical hacking, digital forensics and incident response, built for practitioners who need dependable ground to work from.',
  },
  {
    id: 'defense',
    title: 'Defense Technology',
    summary: 'Mission software with a limited scope',
    body:
      'Our defense technology capabilities are listed below. BlackBlazent limits the scope of these products and projects, and details are shared selectively.',
    items: [
      { title: 'Multi-Domain Data Fusion Platforms', text: 'Bringing data from many sources and domains into one coherent picture.' },
      { title: 'Command and Control and Operational Planning', text: 'Software that supports planning and coordination of operations.' },
      { title: 'Predictive Analytics and Targeting Engines', text: 'Analytical engines that model likely outcomes and support decisions.' },
      { title: 'Defense AI and LLM Orchestration', text: 'Coordinating language models and AI systems inside controlled environments.' },
      { title: 'Military Logistics and Supply Chain Software', text: 'Planning and tracking the movement of people, equipment and supplies.' },
      { title: 'Edge Computing Applications', text: 'Software that keeps working close to the field, even with limited connectivity.' },
    ],
    note: 'For additional information, refer to Black Corp: Intelligence.',
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence and AGI',
    summary: 'Research toward general intelligence',
    body:
      'Research and development focused on Artificial Intelligence and Artificial General Intelligence, carried out alongside the products and used where it earns its place in them.',
  },
  {
    id: 'embedded',
    title: 'Embedded Systems',
    summary: 'Software that lives inside devices',
    body:
      'Computing built into devices and machines, where software has to stay dependable on limited hardware with nobody there to restart it. This is a direction of our work. Nothing in this area is released yet.',
  },
  {
    id: 'robotics',
    title: 'Robotics',
    summary: 'Intelligent machines that act',
    body:
      'Machines that sense, decide and move. Robotics joins our software with mechanical design, and it is where our interest in unsolved problems leaves the screen. It is a future area of work, not a released product.',
  },
  {
    id: 'physical-ai',
    title: 'Physical AI',
    summary: 'Intelligence with a body',
    body:
      'Artificial intelligence that perceives and acts in the physical world through sensors and machines, instead of only on a screen. It builds on our AI research and on the embedded and robotics work above. It is a future area of work.',
  },
  {
    id: 'wearables',
    title: 'Wearable Devices',
    summary: 'Technology worn close to people',
    body:
      'Devices worn on the body, designed to be useful and calm rather than demanding attention. This is a future area of work, and no wearable product has been released.',
  },
];

/** The central positioning for the Solutions page and the home overview. */
export const SOLUTIONS_POSITIONING = {
  title: 'From software to mechanical machines.',
  lead: 'Innovation to solve unsolved problems, from software to mechanical machines.',
  body:
    'BlackBlazent works across software and physical technology: software innovation, mechanical and physical systems, embedded computing, intelligent machines, robotics, Physical AI and wearable technology. Each area below is marked by how real it is today, so a direction is never mistaken for a released product.',
};

export const HYBRID_POINTS = [
  { title: 'Capability', text: 'Software that runs where people are: on a desk, in a pocket, on a living room screen, or at the edge of a network.' },
  { title: 'Adaptability', text: 'A product can grow into a new environment without being rebuilt from nothing. The idea stays intact while the form changes.' },
  { title: 'Integration', text: 'Local data, online services and intelligent features are joined deliberately, so each one adds to the product without taking control of it.' },
  { title: 'Purpose', text: 'Every combination exists to serve a person or a mission. If a layer does not improve the result, it does not ship.' },
];

export type ResearchStatus = 'Active development' | 'Experimental work' | 'Future concept';

export const RESEARCH_AREAS: { title: string; status: ResearchStatus; body: string }[] = [
  {
    title: 'Artificial General Intelligence',
    status: 'Future concept',
    body: 'Long range research into general intelligence and where it could responsibly support the products we build.',
  },
  {
    title: 'Intelligent Systems',
    status: 'Experimental work',
    body: 'Assistant oriented and AI adjacent capability, tested inside controlled prototypes before it reaches any product.',
  },
  {
    title: 'Media Technology',
    status: 'Active development',
    body: 'Playback, catalog and media handling work that feeds directly into BlackMusic and our other media products.',
  },
  {
    title: 'Cross-Platform Architecture',
    status: 'Active development',
    body: 'Ways to carry one product across desktop, mobile and living room screens while keeping a single experience.',
  },
  {
    title: 'Emerging Interfaces',
    status: 'Experimental work',
    body: 'Interaction models we test internally before they reach any product.',
  },
];

export const PRINCIPLES = [
  { n: '01', text: 'Cross-Platform Experience', body: 'Deliver seamless functionality across desktop, web, and mobile environments.' },
  { n: '02', text: 'Creative and Visual Engagement', body: 'Create visually rich interfaces that are enjoyable and intuitive.' },
  { n: '03', text: 'Practical Functionality', body: 'Build tools that support productivity, entertainment, creativity, and everyday digital life.' },
  { n: '04', text: 'Hybrid Technology', body: 'Combine approaches freely so every product uses what suits it best.' },
  { n: '05', text: 'User-First Design', body: 'Respect privacy, simplicity, accessibility, and usability.' },
  { n: '06', text: 'Global Accessibility', body: 'Design products that can be localized and used by people around the world.' },
  { n: '07', text: 'Purposeful Innovation', body: 'Technology should solve a problem, improve an experience, or enable something meaningfully new.' },
];

export const ENGINEERING_STANDARDS = [
  { title: 'Local first by default', text: 'Data stays with the person unless they choose to share it. Online features are optional and say so when they need the internet.' },
  { title: 'Privacy by design', text: 'No advertising SDKs and no hidden analytics in our apps. What a product collects is written down in plain language.' },
  { title: 'Open where we can be', text: 'Released products are open source under the BlackBlazent License, so people can read what runs on their devices.' },
  { title: 'Accessible and calm', text: 'Semantic structure, keyboard access and reduced motion support are requirements, not extras.' },
];

export const RESOURCES = [
  { title: 'Products', body: 'Downloads and release information for every product that is available today.', href: '/products' },
  { title: 'Source code', body: 'Open source repositories and release history on GitHub.', href: 'https://github.com/BlackBlazent' },
  { title: 'Privacy and terms', body: 'How this website handles information and the terms for using it.', href: '/legal/privacy' },
  { title: 'Support', body: 'Reach the team directly for help with a product.', href: '/company/contact' },
  { title: 'Careers', body: 'We are early stage and open to contributors and testers.', href: '/company/careers' },
  { title: 'Community', body: 'Follow what we are building on our social channels.', href: '/company/contact' },
];

export type CompanyPage = { slug: string; title: string; body: string[] };

export const COMPANY_PAGES: CompanyPage[] = [
  {
    slug: 'about',
    title: 'About',
    body: [
      'BlackBlazent is an independent software organization creating hybrid, cross-platform applications, designed with passion, purpose, and precision.',
      'We build modern, user-centered digital tools. From media and creative software to security, government and defense technology, we work across disciplines instead of inside a single category.',
      'Our long-term direction is advanced hybrid software that crosses the usual boundaries between disciplines, platforms, and technologies.',
    ],
  },
  {
    slug: 'vision',
    title: 'Vision',
    body: [
      'To build a new generation of digital software that makes advanced technology useful, accessible, creative, and meaningful to people everywhere.',
      'We aim to be an independent technology organization known for unconventional, high quality software that crosses disciplines, platforms, and traditional boundaries. It is a direction we are working toward, not a claim about where we already are.',
    ],
  },
  {
    slug: 'mission',
    title: 'Mission',
    body: [
      'BlackBlazent builds purposeful hybrid software that combines engineering, creativity, design, and emerging technology to solve real problems and create new digital experiences.',
      'Build purposeful technology. Create useful experiences. Push software forward.',
    ],
  },
  {
    slug: 'philosophy',
    title: 'Philosophy',
    body: [
      'Purpose over noise. Function over decoration. Design with intention. Technology without unnecessary boundaries. Innovation with a reason.',
      'Every product is expected to justify its existence before it justifies its design.',
    ],
  },
  {
    slug: 'careers',
    title: 'Careers',
    body: [
      'BlackBlazent is early stage. We are open to contributors, testers, and idea sharers who want to help build something from the ground up.',
      'There are no listed openings yet. Reach out through the contact page if you want to be part of what we are building.',
    ],
  },
  {
    slug: 'contact',
    title: 'Contact',
    body: ['Reach the right team directly using the contacts below.'],
  },
];

export const CONTACTS = [
  { group: 'General and Administrative', items: [
    { label: 'Main', email: 'blackblazent@gmail.com' },
    { label: 'Customer Support', email: 'blackblazent.customer.service@gmail.com' },
    { label: 'Billing and Payments', email: 'blackblazent.billing@gmail.com' },
    { label: 'Legal and Compliance', email: 'blackblazent.legal@gmail.com' },
    { label: 'General Inquiries', email: 'blackblazent.info@gmail.com' },
  ]},
  { group: 'Development and Technical', items: [
    { label: 'Developer Support', email: 'blackblazent.dev@gmail.com' },
    { label: 'Technical and Bug Reports', email: 'blackblazent.techsupport@gmail.com' },
  ]},
  { group: 'Marketing and Outreach', items: [
    { label: 'Marketing', email: 'blackblazent.marketing@gmail.com' },
    { label: 'Partnerships', email: 'blackblazent.partners@gmail.com' },
    { label: 'Press and Media', email: 'blackblazent.press@gmail.com' },
  ]},
  { group: 'Product and Feedback', items: [
    { label: 'Product Feedback', email: 'blackblazent.feedback@gmail.com' },
    { label: 'Beta Testing', email: 'blackblazent.beta@gmail.com' },
  ]},
];

export const PLATFORMS = ['Windows', 'macOS', 'Linux', 'Android', 'iOS', 'Android TV'];
