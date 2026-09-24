import React from 'react';
import Reveal from '../components/Reveal';
import { ENGINEERING_STACK } from '../content/site-data';
import '../styles/pages.css';
import '../styles/home.css';

const Engineering: React.FC = () => {
  return (
    <>
      <div className="page-hero">
        <Reveal>
          <div className="eyebrow">Engineering</div>
          <h1 className="h-display">Hybrid by design.</h1>
          <p className="body-copy" style={{ marginTop: 18 }}>
            We build with modern web technology and native capability where it
            earns its place, so a product can run wherever it needs to without
            unnecessary compromise.
          </p>
        </Reveal>
      </div>

      <div className="section">
        <Reveal><div className="eyebrow">Core Stack</div></Reveal>
        <div className="tech-list">
          {ENGINEERING_STACK.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="tech-row">
                <span className="tech-name">{t.name}</span>
                <span className="tech-note">{t.note}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section">
        <Reveal>
          <div className="eyebrow">Principles</div>
          <p className="body-copy" style={{ marginTop: 18 }}>
            Semantic HTML, responsive layout, and reduced-motion support are treated
            as requirements, not enhancements. Dependencies are added deliberately,
            not by default.
          </p>
        </Reveal>
      </div>
    </>
  );
};

export default Engineering;
