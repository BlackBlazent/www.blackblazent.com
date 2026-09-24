import React, { useEffect, useRef } from 'react';
import '../../styles/components/home.ui.css';

/**
 * Lightweight scroll-reveal: adds `.in-view` to any `.bb-section` once it
 * enters the viewport. Respects prefers-reduced-motion by doing nothing
 * (the CSS media query handles the rest — content is still visible via
 * the animation-duration override, not hidden behind JS).
 */
function useScrollReveal(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const sections = root.querySelectorAll('.bb-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [containerRef]);
}

const PRODUCTS = [
  {
    index: '01',
    name: 'BlackVideo',
    desc: 'A versatile, cross-platform video player built for wide-ranging playback capability.',
    meta: 'v1.0.0 — Media',
  },
  {
    index: '02',
    name: 'BlackMusic',
    desc: 'A music player integrating a broad catalog with a superior playback experience.',
    meta: 'In development — Media',
  },
  {
    index: '03',
    name: 'BlackGallery',
    desc: 'A visual library for organizing and displaying images with a luminous, vibrant interface.',
    meta: 'v1.0.0 — Creative',
  },
  {
    index: '04',
    name: 'BlackMiscellen',
    desc: 'An integrated collection of miscellaneous tools for everyday digital work.',
    meta: 'v1.0.0 — Utility',
  },
];

const PRINCIPLES = [
  'Purpose over noise.',
  'Function over decoration.',
  'Design with intention.',
  'Technology without unnecessary boundaries.',
  'Innovation with a reason.',
];

const HomeUI: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useScrollReveal(containerRef);

  return (
    <div className="main-content" id="for-home" ref={containerRef}>
      {/* Header */}
      <header className="cp-header">
        <div className="hamburger-menu"><span></span><span></span><span></span></div>
        <div className="cp-logo"><div className="logo-text">BlackBlazent</div></div>
        <div className="header-info">
          <div className="tech-label">INDEPENDENT SOFTWARE ORG</div>
          <div className="date-info">PHILIPPINES</div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-void"></div>
        <div className="hero-kicker">Black → Energy → Creation</div>
        <h1 className="main-tagline">
          Software<br />
          beyond the <span className="tagline-not">expected</span>
        </h1>
        <p className="hero-sub">
          BlackBlazent builds purposeful hybrid software that combines engineering,
          creativity, design, and future-oriented technology.
        </p>
        <div className="cta-buttons">
          <a href="#/products" className="cta-button preorder"><span>Explore Products</span></a>
          <a href="#bb-research" className="cta-button know-more"><span>Explore Research</span></a>
        </div>
        <div className="hero-scroll-cue">
          <span>Scroll</span>
          <span className="arrow-down">▼</span>
        </div>
      </section>

      {/* Organization */}
      <section className="bb-section">
        <div className="bb-eyebrow">The Organization</div>
        <h2 className="bb-headline" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 20 }}>
          Built with purpose.
        </h2>
        <p className="bb-body">
          BlackBlazent is an independent software organization creating hybrid,
          cross-platform applications — designed with passion, purpose, and precision.
          We're a startup software company focused on building modern, user-centered
          digital tools, spanning media, creativity, productivity, and utility software,
          united by one engineering and design philosophy rather than a single category.
        </p>
      </section>

      {/* Products */}
      <section className="bb-section">
        <div className="bb-eyebrow">Products</div>
        <h2 className="bb-headline" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
          Software for the real world.
        </h2>
        <div className="bb-product-grid">
          {PRODUCTS.map((p) => (
            <a href="#/products" className="bb-product-card" key={p.name}>
              <span className="bb-product-index">{p.index}</span>
              <span className="bb-product-name">{p.name}</span>
              <span className="bb-product-desc">{p.desc}</span>
              <span className="bb-product-meta">{p.meta}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="bb-section">
        <div className="bb-eyebrow">Technology</div>
        <h2 className="bb-headline" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 20 }}>
          Hybrid by design.
        </h2>
        <p className="bb-body">
          We build with modern web technology and native capability where it earns
          its place, so a product can run wherever it needs to without unnecessary
          compromise.
        </p>
        <div className="bb-tech-grid">
          {['React', 'TypeScript', 'Rust', 'Tauri', 'Vite', 'JavaScript'].map((t) => (
            <span className="bb-tech-chip" key={t}>{t}</span>
          ))}
        </div>
      </section>

      {/* Research */}
      <section className="bb-section" id="bb-research">
        <div className="bb-eyebrow">Research</div>
        <h2 className="bb-headline" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 20 }}>
          Beyond today's software.
        </h2>
        <p className="bb-body">
          Alongside our current products, we explore experimental ideas in media
          technology, cross-platform architecture, and intelligent tooling. These
          are concepts and prototypes, not finished products — we'll always tell
          you which is which.
        </p>
      </section>

      {/* Philosophy */}
      <section className="bb-section">
        <div className="bb-eyebrow">Philosophy</div>
        <h2 className="bb-headline" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
          Five principles.
        </h2>
        <div className="bb-principles">
          {PRINCIPLES.map((p, i) => (
            <div className="bb-principle" key={p}>
              <span className="bb-principle-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="bb-principle-text">{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Platform */}
      <section className="bb-section">
        <div className="bb-eyebrow">Platform</div>
        <h2 className="bb-headline" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
          One idea. Multiple environments.
        </h2>
        <div className="bb-platform-row">
          {['Desktop', 'Web', 'Mobile', 'Future Platforms'].map((p) => (
            <span className="bb-platform-chip" key={p}>{p}</span>
          ))}
        </div>
      </section>

      {/* Future / closing */}
      <section className="bb-section bb-future">
        <h2 className="bb-headline">The next application hasn't been built yet.</h2>
        <p className="bb-body">We're building toward it.</p>
        <div className="cta-buttons">
          <a href="#/products" className="cta-button preorder"><span>Explore Products</span></a>
          <a href="#/about" className="cta-button know-more"><span>About BlackBlazent</span></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="cp-footer">
        <div className="scroll-indicator">
          <span className="arrow-down">▼</span>
          <span>BlackBlazent</span>
        </div>
        <div className="social-icons">
          <a target="_blank" rel="noreferrer" href="#" className="social-icon instagram"><img style={{ width: '16px', height: '16px' }} src="/src/assets/icons/others/instagram.png" alt="Instagram" /></a>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61565193375253" className="social-icon facebook"><img style={{ width: '16px', height: '16px' }} src="/src/assets/icons/others/facebook.png" alt="Facebook" /></a>
          <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@blackblazent" className="social-icon tiktok"><img style={{ width: '16px', height: '16px' }} src="/src/assets/icons/others/tiktok.png" alt="TikTok" /></a>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@BlackBlazent" className="social-icon youtube"><img style={{ width: '16px', height: '16px' }} src="/src/assets/icons/others/youtube.png" alt="YouTube" /></a>
        </div>
      </footer>
    </div>
  );
};

export default HomeUI;
