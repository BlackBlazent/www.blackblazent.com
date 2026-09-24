export const NAV_LINKS = [
  { label: 'Products', to: '/products' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Research', to: '/research' },
  { label: 'Engineering', to: '/engineering' },
  { label: 'Resources', to: '/resources' },
  { label: 'Company', to: '/company' },
];

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: 'Shipped' | 'In development' | 'Concept';
  category: string;
  capabilities: string[];
  technology: string[];
  future: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: 'blackvideo',
    name: 'BlackVideo',
    tagline: 'A video player built for versatile, cross-platform playback.',
    description:
      'BlackVideo is a hybrid desktop video application focused on wide-ranging playback capability rather than a narrow feature set. It is built as a serious media product, not a stripped-down utility.',
    status: 'Shipped',
    category: 'Media',
    capabilities: [
      'Cross-platform hybrid desktop playback',
      'Extensible architecture for future functionality',
      'Local-first operation',
    ],
    technology: ['React', 'TypeScript', 'Rust', 'Tauri'],
    future:
      'Future direction includes deeper extensibility and assistant-oriented capabilities, developed incrementally rather than promised in advance.',
  },
  {
    slug: 'blackmusic',
    name: 'BlackMusic',
    tagline: 'Music Ultra Superior Integrated Catalog.',
    description:
      'BlackMusic is a music application designed to deliver a superior playback experience around an integrated catalog, built with the same hybrid, cross-platform philosophy as the rest of the BlackBlazent product line.',
    status: 'In development',
    category: 'Media',
    capabilities: ['Catalog integration', 'Playback-focused interface'],
    technology: ['React', 'TypeScript'],
    future: 'Active development. Capabilities will be published as they ship.',
  },
  {
    slug: 'blackgallery',
    name: 'BlackGallery',
    tagline: 'A visual library for organizing and displaying images.',
    description:
      'BlackGallery is a gallery application designed to showcase and organize visual content, with a focus on a luminous, vibrant display and an efficient library structure.',
    status: 'Shipped',
    category: 'Creative',
    capabilities: ['Visual content library', 'Organizational tooling for image collections'],
    technology: ['React', 'TypeScript'],
    future: 'Continued refinement of display and organization features.',
  },
  {
    slug: 'blackmiscellen',
    name: 'BlackMiscellen',
    tagline: 'An integrated collection of miscellaneous tools.',
    description:
      'BlackMiscellen brings together a set of smaller, practical utilities under one roof — everyday tools that don\u2019t warrant a standalone product but still deserve to be built with care.',
    status: 'Shipped',
    category: 'Utility',
    capabilities: ['Integrated utility set', 'Practical, everyday tooling'],
    technology: ['React', 'TypeScript'],
    future: 'The utility set will grow as needs are identified.',
  },
];

export const SOLUTIONS = [
  {
    title: 'Media',
    body: 'Playback and catalog software for video and music, built for cross-platform reach rather than a single environment.',
  },
  {
    title: 'Creativity',
    body: 'Tools for organizing, displaying, and working with visual content.',
  },
  {
    title: 'Productivity',
    body: 'Practical software that supports daily work rather than adding process for its own sake.',
  },
  {
    title: 'Utilities',
    body: 'Small, well-built tools that solve one problem cleanly, collected under a single integrated set.',
  },
  {
    title: 'Intelligent Software',
    body: 'Early-stage exploration into assistant-oriented and AI-adjacent functionality inside existing and future products.',
  },
  {
    title: 'Cross-Platform Applications',
    body: 'A hybrid technology approach so the same product idea can reach desktop, web, and mobile without starting over.',
  },
];

export type ResearchStatus = 'Active development' | 'Experimental work' | 'Future concept';

export const RESEARCH_AREAS: { title: string; status: ResearchStatus; body: string }[] = [
  {
    title: 'Experimental Software',
    status: 'Experimental work',
    body: 'Early prototypes exploring ideas that may or may not become products.',
  },
  {
    title: 'Intelligent Systems',
    status: 'Future concept',
    body: 'Exploring where assistant-oriented and AI-adjacent capability could meaningfully help inside our products.',
  },
  {
    title: 'Media Technology',
    status: 'Active development',
    body: 'Playback, catalog, and media-handling technology feeding directly into BlackVideo and BlackMusic.',
  },
  {
    title: 'Cross-Platform Architecture',
    status: 'Active development',
    body: 'Hybrid architecture work — React/TypeScript frontends paired with native layers where it earns its place.',
  },
  {
    title: 'Emerging Interfaces',
    status: 'Experimental work',
    body: 'Interaction models we\u2019re testing internally before they reach any product.',
  },
];

export const ENGINEERING_STACK = [
  { name: 'React', note: 'Frontend UI across every product' },
  { name: 'TypeScript', note: 'Type-safe application code' },
  { name: 'Vite', note: 'Build tooling' },
  { name: 'Rust', note: 'Native performance layer where needed' },
  { name: 'Tauri', note: 'Hybrid desktop packaging' },
];

export const PRINCIPLES = [
  { n: '01', text: 'Cross-Platform Experience', body: 'Deliver seamless functionality across desktop, web, and mobile environments.' },
  { n: '02', text: 'Creative & Visual Engagement', body: 'Create visually rich interfaces that are enjoyable and intuitive.' },
  { n: '03', text: 'Practical Functionality', body: 'Build tools that support productivity, entertainment, creativity, and everyday digital life.' },
  { n: '04', text: 'Hybrid Technology', body: 'Use modern hybrid frameworks and native technology where it earns its place.' },
  { n: '05', text: 'User-First Design', body: 'Respect privacy, simplicity, accessibility, and usability.' },
  { n: '06', text: 'Global Accessibility', body: 'Design products that can be localized and used by people around the world.' },
  { n: '07', text: 'Purposeful Innovation', body: 'Technology should solve a problem, improve an experience, or enable something meaningfully new.' },
];

export const RESOURCES = [
  { title: 'Documentation', body: 'Reference material for using BlackBlazent products.', href: '#' },
  { title: 'Releases', body: 'Version history and changelogs as products ship updates.', href: '#' },
  { title: 'Downloads', body: 'Get the current build of each shipped product.', href: '/products' },
  { title: 'Blog', body: 'Notes on what we\u2019re building and why.', href: '#' },
  { title: 'Support', body: 'Reach the team directly for help.', href: '/company/contact' },
  { title: 'FAQ', body: 'Answers to common questions about the products and the organization.', href: '#' },
];

export type CompanyPage = { slug: string; title: string; body: string[] };

export const COMPANY_PAGES: CompanyPage[] = [
  {
    slug: 'about',
    title: 'About',
    body: [
      'BlackBlazent is an independent software organization creating hybrid, cross-platform applications — designed with passion, purpose, and precision.',
      'We are a startup software company focused on building modern, user-centered digital tools. From media and creative software to everyday utilities, we build across disciplines rather than inside a single category.',
      'BlackBlazent is not limited to one software discipline. Our long-term direction is to develop advanced hybrid software that can cross conventional boundaries between disciplines, platforms, and technologies.',
    ],
  },
  {
    slug: 'vision',
    title: 'Vision',
    body: [
      'To build a new generation of digital software that makes advanced technology useful, accessible, creative, and meaningful to people everywhere.',
      'We aim to become an independent technology organization known for unconventional, high-quality software products that cross disciplines, platforms, and traditional boundaries — an ambitious direction we\u2019re working toward, not a claim about where we already are.',
    ],
  },
  {
    slug: 'mission',
    title: 'Mission',
    body: [
      'BlackBlazent builds purposeful hybrid software that combines engineering, creativity, design, and emerging technology to solve real-world problems and create new digital experiences.',
      'Build purposeful technology. Create useful experiences. Push software forward.',
    ],
  },
  {
    slug: 'philosophy',
    title: 'Philosophy',
    body: [
      'Purpose over noise. Function over decoration. Design with intention. Technology without unnecessary boundaries. Innovation with a reason.',
      'Every product is expected to justify its own existence before it justifies its design.',
    ],
  },
  {
    slug: 'careers',
    title: 'Careers',
    body: [
      'BlackBlazent is early-stage. We\u2019re open to contributors, testers, and idea-sharers who want to help build something from the ground up.',
      'There are no listed openings yet. Reach out through the contact page if you want to be part of what we\u2019re building.',
    ],
  },
  {
    slug: 'contact',
    title: 'Contact',
    body: ['Reach the right team directly using the contacts below.'],
  },
];

export const CONTACTS = [
  { group: 'General & Administrative', items: [
    { label: 'Main', email: 'blackblazent@gmail.com' },
    { label: 'Customer Support', email: 'blackblazent.customer.service@gmail.com' },
    { label: 'Billing & Payments', email: 'blackblazent.billing@gmail.com' },
    { label: 'Legal / Compliance', email: 'blackblazent.legal@gmail.com' },
    { label: 'General Inquiries', email: 'blackblazent.info@gmail.com' },
  ]},
  { group: 'Development & Technical', items: [
    { label: 'Developer Support', email: 'blackblazent.dev@gmail.com' },
    { label: 'Technical / Bug Reports', email: 'blackblazent.techsupport@gmail.com' },
  ]},
  { group: 'Marketing & Outreach', items: [
    { label: 'Marketing', email: 'blackblazent.marketing@gmail.com' },
    { label: 'Partnerships', email: 'blackblazent.partners@gmail.com' },
    { label: 'Press / Media', email: 'blackblazent.press@gmail.com' },
  ]},
  { group: 'Product & Feedback', items: [
    { label: 'Product Feedback', email: 'blackblazent.feedback@gmail.com' },
    { label: 'Beta Testing', email: 'blackblazent.beta@gmail.com' },
  ]},
];

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61565193375253' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@blackblazent' },
  { label: 'YouTube', href: 'https://www.youtube.com/@BlackBlazent' },
];

export const PLATFORMS = ['Desktop', 'Web', 'Mobile', 'Future Platforms'];
