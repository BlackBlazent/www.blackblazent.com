import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import OutlineHeading from '../components/OutlineHeading';

import { COMPANY_PAGES, CONTACTS } from '../content/site-data';
import '../styles/pages.css';

const CompanySub: React.FC = () => {
  const { slug } = useParams();
  const page = COMPANY_PAGES.find((p) => p.slug === slug);

  if (!page || page.slug === 'about') return <Navigate to="/about" replace />;

  return (
    <>
      <div className="page-hero">
        <div className="crumbs">
          <Link to="/about">About</Link> / {page.title}
        </div>
        <Reveal>
          <OutlineHeading as="h1" size="page" text={page.title} />
          {page.body.map((p) => (
            <p className="body-copy" style={{ marginTop: 18 }} key={p}>{p}</p>
          ))}
        </Reveal>
      </div>

      {page.slug === 'contact' && (
        <div className="section">
          {CONTACTS.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 0.05}>
              <div className="contact-group">
                <div className="contact-group-title">{group.group}</div>
                {group.items.map((item) => (
                  <div className="contact-row" key={item.email}>
                    <span className="contact-label">{item.label}</span>
                    <a className="contact-email" href={`mailto:${item.email}`}>{item.email}</a>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
};

export default CompanySub;
