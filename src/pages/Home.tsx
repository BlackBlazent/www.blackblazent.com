import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Reveal from '../components/Reveal';
import {
  PRODUCTS,
  ENGINEERING_STACK,
  PRINCIPLES,
  PLATFORMS,
  RESEARCH_AREAS,
} from '../content/site-data';
import '../styles/home.css';

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const fieldY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 160]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero-field" style={{ y: fieldY }}>
        <div className="hero-ring hero-ring--a" />
        <div className="hero-ring hero-ring--b" />
        <div className="hero-ring hero-ring--c" />
      </motion.div>

      <motion.div className="hero-content" style={{ y: contentY, opacity: contentOpacity }}>
        <div className="hero-kicker">Black &rarr; Energy &rarr; Creation</div>
        <h1 className="hero-title">
          Software beyond<br /> the <em>expected</em>
        </h1>
        <p className="hero-sub">
          BlackBlazent builds purposeful hybrid software that combines engineering,
          creativity, design, and future-oriented technology.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="btn btn-primary">Explore Products</Link>
          <Link to="/research" className="btn btn-outline">Explore Research</Link>
        </div>
      </motion.div>

      <div className="hero-cue">
        <span>Scroll</span>
        <span className="hero-cue-line" />
      </div>
    </section>
  );
};

const ProductRail: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(PRODUCTS.length - 1) * 100}%`]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="rail-wrapper" ref={wrapperRef}>
      <div className="rail-sticky">
        <motion.div className="rail-track" style={{ x }}>
          {PRODUCTS.map((p, i) => (
            <Link to={`/products/${p.slug}`} className="rail-card" key={p.slug}>
              <div className="rail-card-index">{String(i + 1).padStart(2, '0')} / {String(PRODUCTS.length).padStart(2, '0')} &mdash; {p.category}</div>
              <div className="rail-card-name">{p.name}</div>
              <p className="rail-card-tagline">{p.tagline}</p>
              <div className="rail-card-meta">
                <span className={`status-tag${p.status === 'Shipped' ? ' is-live' : ''}`}>{p.status}</span>
              </div>
            </Link>
          ))}
        </motion.div>
        <div className="rail-progress">
          <motion.div className="rail-progress-fill" style={{ width: progressWidth }} />
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Hero />

      <section className="home-section">
        <Reveal>
          <div className="eyebrow">The Organization</div>
          <h2 className="h-display home-section-title">Built with purpose.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="body-copy" style={{ marginTop: 22 }}>
            BlackBlazent is an independent software organization creating hybrid,
            cross-platform applications &mdash; designed with passion, purpose, and
            precision. We build across media, creativity, productivity, and utility
            software, held together by one engineering and design philosophy rather
            than a single category.
          </p>
        </Reveal>
      </section>

      <div>
        <Reveal className="home-section" y={16}>
          <div className="eyebrow">Products</div>
          <h2 className="h-display home-section-title">Software for the real world.</h2>
        </Reveal>
        <ProductRail />
      </div>

      <section className="home-section">
        <Reveal>
          <div className="eyebrow">Technology</div>
          <h2 className="h-display home-section-title">Hybrid by design.</h2>
        </Reveal>
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
      </section>

      <section className="home-section">
        <Reveal>
          <div className="eyebrow">Research</div>
          <h2 className="h-display home-section-title">Beyond today&rsquo;s software.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="body-copy" style={{ marginTop: 22, marginBottom: 36 }}>
            Alongside shipped products, we run experimental work in media technology,
            cross-platform architecture, and early intelligent tooling. We label each
            one plainly &mdash; active development, experimental work, or future concept.
          </p>
        </Reveal>
        <div className="tech-list">
          {RESEARCH_AREAS.slice(0, 3).map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <div className="tech-row">
                <span className="tech-name" style={{ fontSize: 18 }}>{r.title}</span>
                <span className="status-tag">{r.status}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-section">
        <Reveal>
          <div className="eyebrow">Philosophy</div>
          <h2 className="h-display home-section-title">Seven principles.</h2>
        </Reveal>
        <div className="principle-list">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.04}>
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
          <div className="eyebrow">Platform</div>
          <h2 className="h-display home-section-title">One idea. Multiple environments.</h2>
        </Reveal>
        <div className="platform-row">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p} delay={i * 0.05}>
              <span className="platform-chip">{p}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="closing">
        <Reveal>
          <h2 className="h-display">The next application hasn&rsquo;t been built yet.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="body-copy">We&rsquo;re building toward it.</p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">Explore Products</Link>
            <Link to="/company" className="btn btn-outline">About BlackBlazent</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Home;
