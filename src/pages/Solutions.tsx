import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { SOLUTION_AREAS, consumerProductNames } from '../content/site-data';
import '../styles/pages.css';

const Solutions: React.FC = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  }, [hash]);

  return (
    <>
      <div className="page-hero">
        <Reveal>
          <div className="eyebrow">Solutions</div>
          <h1 className="h-display">Where BlackBlazent works.</h1>
          <p className="body-copy" style={{ marginTop: 18 }}>
            Five areas of work, from software people use every day to technology
            built for institutions and defense. They describe our direction and
            capabilities, not a menu of services.
          </p>
        </Reveal>
      </div>

      <div className="section solution-stack">
        {SOLUTION_AREAS.map((a, i) => (
          <section className="solution" id={a.id} key={a.id}>
            <Reveal from={i % 2 ? 'right' : 'left'} distance={60}>
              <div className="solution-head">
                <span className="solution-num">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="solution-title">{a.title}</h2>
              </div>
            </Reveal>
            <Reveal delay={0.08} from={i % 2 ? 'left' : 'right'} distance={40}>
              <p className="body-copy">{a.body}</p>
              {a.id === 'consumer' && consumerProductNames() && (
                <p className="solution-products">Available now: {consumerProductNames()}</p>
              )}
              {a.items && (
                <ul className="solution-items">
                  {a.items.map((it) => (
                    <li key={it.title}>
                      <span className="solution-item-title">{it.title}</span>
                      <span className="solution-item-text">{it.text}</span>
                    </li>
                  ))}
                </ul>
              )}
              {a.note && <p className="solution-note">{a.note}</p>}
            </Reveal>
          </section>
        ))}
      </div>
    </>
  );
};

export default Solutions;
