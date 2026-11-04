import React from 'react';
import Reveal from '../components/Reveal';
import { ENGINEERING_STANDARDS, HYBRID_POINTS } from '../content/site-data';
import '../styles/pages.css';
import '../styles/home.css';

const Engineering: React.FC = () => {
  return (
    <>
      <div className="page-hero">
        <Reveal>
          <div className="eyebrow">Engineering</div>
          <h1 className="h-display">One approach. No ceiling.</h1>
          <p className="body-copy" style={{ marginTop: 18 }}>
            BlackBlazent operates beyond the limits of a single software stack.
            We choose what fits the problem, then join the parts so a product
            feels like one thing wherever it runs.
          </p>
        </Reveal>
      </div>

      <div className="section">
        <Reveal><div className="eyebrow">Hybrid Design</div></Reveal>
        <div className="hybrid-grid">
          {HYBRID_POINTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.07} from={i % 2 ? 'right' : 'left'} distance={34}>
              <div className="hybrid-card">
                <span className="hybrid-title">{h.title}</span>
                <span className="hybrid-text">{h.text}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section">
        <Reveal><div className="eyebrow">Standards</div></Reveal>
        <div className="kv-list">
          {ENGINEERING_STANDARDS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="kv-row" style={{ alignItems: 'flex-start' }}>
                <span className="kv-key" style={{ paddingTop: 2 }}>{s.title}</span>
                <span className="kv-val">{s.text}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
};

export default Engineering;
