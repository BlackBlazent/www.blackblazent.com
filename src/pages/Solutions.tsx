import React from 'react';
import Reveal from '../components/Reveal';
import { SOLUTIONS } from '../content/site-data';
import '../styles/pages.css';

const Solutions: React.FC = () => {
  return (
    <>
      <div className="page-hero">
        <Reveal>
          <div className="eyebrow">Solutions</div>
          <h1 className="h-display">Where BlackBlazent works.</h1>
          <p className="body-copy" style={{ marginTop: 18 }}>
            The kinds of problems we build software for &mdash; organized by area,
            not by department. These describe our direction, not a menu of
            enterprise services.
          </p>
        </Reveal>
      </div>

      <div className="section">
        <div className="grid-3">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="tile">
                <span className="tile-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="tile-title">{s.title}</span>
                <span className="tile-body">{s.body}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
};

export default Solutions;
