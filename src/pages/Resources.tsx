import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { RESOURCES } from '../content/site-data';
import '../styles/pages.css';

const isInternal = (href: string) => href.startsWith('/');

const Resources: React.FC = () => {
  return (
    <>
      <div className="page-hero">
        <Reveal>
          <div className="eyebrow">Resources</div>
          <h1 className="h-display">Everything to work with BlackBlazent.</h1>
        </Reveal>
      </div>

      <div className="section">
        <div className="grid-3">
          {RESOURCES.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              {isInternal(r.href) ? (
                <Link to={r.href} className="tile" style={{ textDecoration: 'none' }}>
                  <span className="tile-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="tile-title">{r.title}</span>
                  <span className="tile-body">{r.body}</span>
                </Link>
              ) : (
                <div className="tile">
                  <span className="tile-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="tile-title">{r.title}</span>
                  <span className="tile-body">{r.body}</span>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resources;
