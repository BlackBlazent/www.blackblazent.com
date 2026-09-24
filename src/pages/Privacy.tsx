import React from 'react';
import Reveal from '../components/Reveal';
import '../styles/pages.css';

const SECTIONS = [
  {
    title: 'What we collect',
    body: 'When you use BlackBlazent products or this site, we may collect basic identifying information you provide directly (such as an email address) and standard non-personal technical information (browser, device, usage patterns).',
  },
  {
    title: 'How it\u2019s used',
    body: 'Collected information is used to operate and improve our products, respond to support requests, and communicate updates. We do not sell or rent personal data to third parties.',
  },
  {
    title: 'Third-party links',
    body: 'Our services may link to third-party sites we don\u2019t control. We\u2019re not responsible for their content or privacy practices.',
  },
  {
    title: 'Your choices',
    body: 'You can contact us at any time to ask what information we hold about you or to request its removal, using the legal contact below.',
  },
  {
    title: 'Changes to this policy',
    body: 'If we make a material change to this policy, we\u2019ll make a reasonable effort to note it here before the change takes effect.',
  },
];

const Privacy: React.FC = () => {
  return (
    <>
      <div className="page-hero">
        <Reveal>
          <div className="eyebrow">Legal</div>
          <h1 className="h-display">Privacy</h1>
          <p className="body-copy" style={{ marginTop: 18 }}>
            A plain-language summary of how BlackBlazent handles information. For
            anything not covered here, reach us at legal@blackblazent.com.
          </p>
        </Reveal>
      </div>

      <div className="section">
        <div className="kv-list">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="kv-row" style={{ alignItems: 'flex-start' }}>
                <span className="kv-key" style={{ paddingTop: 2 }}>{s.title}</span>
                <span className="kv-val">{s.body}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
};

export default Privacy;
