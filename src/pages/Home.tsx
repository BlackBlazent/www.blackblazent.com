import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { BannerMedia, getEnabledProducts, productHref } from '@blackblazent/core';
import Reveal from '../components/Reveal';
import OutlineHeading from '../components/OutlineHeading';
import HeroBackground from '../hero/HeroBackground';
import OrbitalSystem from '../hero/OrbitalSystem';
import { HERO_AMBIENT, HERO_BACKGROUND, HERO_COPY } from '../config/hero.config';
import { ORBIT, ORBIT_NODES } from '../config/orbit.config';
import { STAGE_LABEL, getCategory } from '../config/categories.config';
import {
  HYBRID_POINTS,
  PLATFORMS,
  PRINCIPLES,
  RESEARCH_AREAS,
  SOLUTION_AREAS,
} from '../content/site-data';
import '../styles/home.css';
import '../styles/hero.css';

/** Product links stay inside the site, or leave for the product address when configured as external. */
const ProductAnchor: React.FC<{ id: Parameters<typeof productHref>[0]; className: string; label: string; children: React.ReactNode }> = ({ id, className, label, children }) => {
  const { href, external } = productHref(id);
  return external
    ? <a href={href} className={className} aria-label={label}>{children}</a>
    : <Link to={href} className={className} aria-label={label}>{children}</Link>;
};

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [ambient, setAmbient] = useState(HERO_AMBIENT.fallback);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const fieldY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const style = {
    '--ambient': ambient,
    '--ambient-strength': HERO_AMBIENT.intensity,
    '--ambient-ms': `${HERO_AMBIENT.transitionMs}ms`,
  } as React.CSSProperties;

  return (
    <section className="hero" ref={ref} style={style} data-ambient={HERO_AMBIENT.mode}>
      <HeroBackground config={HERO_BACKGROUND} ambient={HERO_AMBIENT} onAmbient={setAmbient} />
      <div className="hero-glow" aria-hidden="true" />
      <motion.div className="hero-field" style={{ y: fieldY }}>
        <OrbitalSystem config={ORBIT} nodes={ORBIT_NODES} />
      </motion.div>

      <motion.div className="hero-content" style={{ y: contentY, opacity: contentOpacity }}>
        <h1 className="hero-title" aria-label={HERO_COPY.titleLabel}>
          {HERO_COPY.title.map((w, i) => (
            <span className="word-mask" key={w}>
              <motion.span
                className={`word${w === HERO_COPY.accentWord ? ' word--accent' : ''}`}
                initial={reduce ? undefined : { y: '115%', rotate: 3 }}
                animate={reduce ? undefined : { y: '0%', rotate: 0 }}
                transition={{ duration: 1, delay: 0.25 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {w}
              </motion.span>
              {i < HERO_COPY.title.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>
        <motion.p
          className="hero-sub"
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
        >
          {HERO_COPY.sub}
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
        >
          <Link to="/products" className="btn btn-primary">Explore Products</Link>
          <Link to="/solutions" className="btn btn-outline">Explore Solutions</Link>
        </motion.div>
      </motion.div>

      <div className="hero-cue" aria-hidden="true">
        <span>Scroll</span>
        <span className="hero-cue-line" />
      </div>
    </section>
  );
};

const MARQUEE_A = ['Consumer Applications', 'Government Applications', 'Security and Forensics', 'Defense Technology', 'Artificial Intelligence', 'Embedded Systems', 'Robotics', 'Physical AI', 'Wearable Devices'];
const stageOf = (id: string) => { const c = getCategory(id); return c ? STAGE_LABEL[c.stage] : ''; };
const MARQUEE_B = ['Hybrid by design', 'Local first', 'Open source', 'Cross-platform', 'Purpose over noise', 'Built with precision'];

const MarqueeRow: React.FC<{ items: string[]; reverse?: boolean }> = ({ items, reverse }) => (
  <div className={`marquee-row${reverse ? ' is-reverse' : ''}`} aria-hidden="true">
    <div className="marquee-track">
      {[...items, ...items, ...items, ...items].map((t, i) => <span key={i}>{t}</span>)}
    </div>
  </div>
);

/**
 * Pinned horizontal rail. Each card is a doorway: selecting it leaves for the
 * product's own website. The backdrop follows the product currently in view.
 */
const ProductRail: React.FC = () => {
  const products = getEnabledProducts();
  const count = products.length;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${Math.max(count - 1, 0) * 100}%`]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const reduce = useReducedMotion();

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(count - 1, Math.max(0, Math.round(v * (count - 1))));
    setActive((cur) => (cur === next ? cur : next));
  });

  if (count === 0) return null;
  const pinned = count > 1;

  return (
    <div className="rail-wrapper" ref={wrapperRef} style={{ height: pinned ? `${count * 85 + 40}vh` : 'auto' }}>
      <div className={`rail-sticky${pinned ? '' : ' is-static'}`} data-theme={products[active].theme}>
        <div className="rail-backdrop" aria-hidden="true" />
        <motion.div className="rail-track" style={pinned ? { x } : undefined}>
          {products.map((p, i) => (
            <div className="rail-slide" key={p.id} data-theme={p.theme}>
              <ProductAnchor id={p.id} className="rail-card" label={`Open ${p.name}`}>
                <BannerMedia className="rail-card-banner" source={p.cardBanner ?? p.banner} parallax={!reduce} eager={i === 0} />
                <div className="rail-card-content">
                  <div className="rail-card-index">
                    <span>{String(i + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span>
                    <span className="rail-card-category">{p.category}</span>
                  </div>
                  <div className="rail-card-name">{p.name}</div>
                  <p className="rail-card-tagline">{p.description}</p>
                  <div className="rail-card-meta">
                    <span className={`status-tag${p.status === 'Released' ? ' is-live' : ''}`}>{p.status}</span>
                    <span className="rail-card-go">Open {p.name} <span aria-hidden="true">&rarr;</span></span>
                  </div>
                </div>
              </ProductAnchor>
            </div>
          ))}
        </motion.div>
        {pinned && (
          <div className="rail-progress" aria-hidden="true">
            <motion.div className="rail-progress-fill" style={{ width: progressWidth }} />
          </div>
        )}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Hero />

      <div className="marquee" aria-label="Areas of work">
        <MarqueeRow items={MARQUEE_A} />
        <MarqueeRow items={MARQUEE_B} reverse />
      </div>

      <section className="home-section">
        <Reveal>
          <OutlineHeading text="Built with purpose." />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="body-copy" style={{ marginTop: 22 }}>
            BlackBlazent is an independent software organization creating hybrid,
            cross-platform applications, designed with passion, purpose, and
            precision. Our work reaches from everyday consumer software to
            government, security, defense technology and artificial intelligence,
            held together by one engineering and design philosophy rather than a
            single category.
          </p>
        </Reveal>
      </section>

      <div>
        <Reveal className="home-section" distance={16}>
          <OutlineHeading text="Software for the real world." />
        </Reveal>
        <ProductRail />
      </div>

      <section className="home-section">
        <Reveal>
          <OutlineHeading text="Where we work." />
        </Reveal>
        <div className="area-list">
          {SOLUTION_AREAS.filter((a) => getCategory(a.id)?.visible !== false).map((a, i) => (
            <Reveal key={a.id} from={i % 2 ? 'right' : 'left'} distance={60} delay={0.04}>
              <Link to={`/solutions#${a.id}`} className="area-row">
                <span className="area-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="area-title">{a.title}</span>
                <span className="area-sum">{a.summary}{stageOf(a.id) && <em className={`area-stage area-stage--${getCategory(a.id)?.stage}`}>{stageOf(a.id)}</em>}</span>
                <span className="area-arrow" aria-hidden="true">&rarr;</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-section hybrid">
        <Reveal>
          <OutlineHeading text="One approach. No ceiling." />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="body-copy" style={{ marginTop: 22 }}>
            BlackBlazent does not build around a single toolset. We choose the
            approach that fits the problem, then make every part work as one
            product.
          </p>
        </Reveal>
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
      </section>

      <section className="home-section">
        <Reveal>
          <OutlineHeading text="Beyond today’s software." />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="body-copy" style={{ marginTop: 22, marginBottom: 36 }}>
            Alongside released products we run experimental work in intelligent
            systems, media technology and cross-platform architecture. Each area
            is labeled plainly as active development, experimental work, or a
            future concept.
          </p>
        </Reveal>
        <div className="tech-list">
          {RESEARCH_AREAS.slice(0, 3).map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05} from={i % 2 ? 'right' : 'left'} distance={40}>
              <div className="tech-row">
                <span className="tech-name" style={{ fontSize: 'clamp(18px, 2.4vw, 26px)' }}>{r.title}</span>
                <span className="status-tag">{r.status}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-section">
        <Reveal>
          <OutlineHeading text="Seven principles." />
        </Reveal>
        <div className="principle-list">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.03} distance={22}>
              <div className="principle-row">
                <span className="principle-num">{p.n}</span>
                <div>
                  <div className="principle-title">{p.text}</div>
                  <div className="principle-body">{p.body}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-section">
        <Reveal>
          <OutlineHeading text="One idea. Every environment." />
        </Reveal>
        <div className="platform-row">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p} delay={i * 0.05} distance={18}>
              <span className="platform-chip">{p}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="closing">
        <Reveal><OutlineHeading text="The next application hasn’t been built yet." /></Reveal>
        <Reveal delay={0.1}><p className="body-copy">We are building toward it.</p></Reveal>
        <Reveal delay={0.2}>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">Explore Products</Link>
            <Link to="/about" className="btn btn-outline">About BlackBlazent</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Home;
