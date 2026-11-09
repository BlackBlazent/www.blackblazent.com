import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Reveal from '../components/Reveal';
import OutlineHeading from '../components/OutlineHeading';
import { SOLUTIONS_POSITIONING, SOLUTION_AREAS, consumerProductNames } from '../content/site-data';
import { STAGE_LABEL, STAGE_NOTE, getCategory } from '../config/categories.config';
import '../styles/pages.css';

const Solutions: React.FC = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  }, [hash]);

  const areas = SOLUTION_AREAS.filter((a) => getCategory(a.id)?.visible !== false);

  return (
    <>
      <div className="page-hero">
        <OutlineHeading as="h1" size="page" text={SOLUTIONS_POSITIONING.title} />
        <Reveal>
          <p className="positioning">{SOLUTIONS_POSITIONING.lead}</p>
          <p className="body-copy" style={{ marginTop: 18 }}>{SOLUTIONS_POSITIONING.body}</p>
          <ul className="stage-key" aria-label="How to read the stage of each area">
            {(['available', 'capability', 'development', 'future'] as const).map((s) => (
              <li key={s}><span className={`stage-pill stage-pill--${s}`}>{STAGE_LABEL[s]}</span><span>{STAGE_NOTE[s]}</span></li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="section solution-stack">
        {areas.map((a, i) => {
          const cat = getCategory(a.id);
          return (
            <section className="solution" id={a.id} key={a.id}>
              <Reveal from={i % 2 ? 'right' : 'left'} distance={60}>
                <div className="solution-head">
                  <span className="solution-num">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="solution-title">{a.title}</h2>
                  {cat && <span className={`stage-pill stage-pill--${cat.stage}`}>{STAGE_LABEL[cat.stage]}</span>}
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
          );
        })}
      </div>
    </>
  );
};

export default Solutions;
