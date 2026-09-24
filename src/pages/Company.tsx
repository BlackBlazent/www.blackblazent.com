import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { COMPANY_PAGES } from '../content/site-data';
import '../styles/pages.css';

const Company: React.FC = () => {
  const about = COMPANY_PAGES.find((p) => p.slug === 'about')!;
  const rest = COMPANY_PAGES.filter((p) => p.slug !== 'about');

  return (
    <>
      <div className="page-hero">
        <Reveal>
          <div className="eyebrow">Company</div>
          <h1 className="h-display">{about.title}</h1>
          {about.body.map((p) => (
            <p className="body-copy" style={{ marginTop: 18 }} key={p}>{p}</p>
          ))}
        </Reveal>
      </div>

      <div className="section">
        <div className="grid-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link to={`/company/${p.slug}`} className="tile" style={{ textDecoration: 'none' }}>
                <span className="tile-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="tile-title">{p.title}</span>
                <span className="tile-body">{p.body[0]}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
};

export default Company;
