import React from 'react';
import Reveal from '../components/Reveal';
import { RESEARCH_AREAS } from '../content/site-data';
import '../styles/pages.css';

const Research: React.FC = () => {
  return (
    <>
      <div className="page-hero">
        <Reveal>
          <div className="eyebrow">Research</div>
          <h1 className="h-display">Beyond today&rsquo;s software.</h1>
          <p className="body-copy" style={{ marginTop: 18 }}>
            Alongside shipped products, we explore ideas that may or may not become
            products. Every area below is labeled plainly &mdash; active development,
            experimental work, or future concept &mdash; so it&rsquo;s never mistaken for
            a finished product.
          </p>
        </Reveal>
      </div>

      <div className="section">
        <div className="kv-list">
          {RESEARCH_AREAS.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <div className="kv-row" style={{ alignItems: 'flex-start' }}>
                <span className="kv-key" style={{ paddingTop: 2 }}>{r.title}</span>
                <span className="kv-val">
                  <span className="status-tag" style={{ marginBottom: 8, display: 'inline-block' }}>{r.status}</span>
                  <br />
                  {r.body}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
};

export default Research;
