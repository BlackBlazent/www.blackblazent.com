import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, getEnabledProducts, productHref } from '@blackblazent/core';
import { NAV_LINKS, SOCIAL_LINKS } from '../content/site-data';
import { FOOTER } from '../config/footer.config';
import logo from '../assets/icons/blackblazer-mark.png';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const products = getEnabledProducts();

  return (
    <footer className="footer">
      <section className="footer-intel" aria-labelledby="footer-intel-title">
        {/*<svg className="footer-intel-mark" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
          <circle cx="256" cy="256" r="214" />
          <circle cx="256" cy="168" r="126" /><circle cx="344" cy="256" r="126" />
          <circle cx="256" cy="344" r="126" /><circle cx="168" cy="256" r="126" />
        </svg> */}
        <img className="footer-intel-mark" src="https://avatars.githubusercontent.com/u/171582599?s=200&v=4" alt="BlackBlazent Intelligence" />
        <div className="footer-intel-copy">
          <p className="footer-intel-kicker">{FOOTER.intelligence.banner.kicker}</p>
          <h2 className="footer-intel-title" id="footer-intel-title">
            {FOOTER.intelligence.banner.statement.map((l) => <span key={l}>{l}</span>)}
          </h2>
          <p className="footer-intel-purpose">{FOOTER.intelligence.banner.purpose}</p>
        </div>
        <a className="btn btn-primary footer-intel-cta" href={FOOTER.intelligence.url} target="_blank" rel="noreferrer">
          {FOOTER.intelligence.banner.cta} <span aria-hidden="true">&rarr;</span>
        </a>
      </section>

      <div className="footer-top">
        <div className="footer-brand">
          <div className="nav-mark">
            <img className="nav-mark-dot" src={logo} alt="" width={40} height={40} />
            BlackBlazent
          </div>
          <p>An independent software organization building hybrid, cross-platform applications with passion, purpose, and precision.</p>
          <p className="footer-faith">{FOOTER.faith}</p>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Navigate</div>
          {NAV_LINKS.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Products</div>
          {products.map((p) => { const h = productHref(p.id); return h.external ? <a key={p.id} href={h.href}>{p.name}</a> : <Link key={p.id} to={h.href}>{p.name}</Link>; })}
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Company</div>
          <Link to="/company/vision">Vision</Link>
          <Link to="/company/mission">Mission</Link>
          <Link to="/company/philosophy">Philosophy</Link>
          <Link to="/company/careers">Careers</Link>
          <Link to="/company/contact">Contact</Link>
          <a href={FOOTER.github.href} target="_blank" rel="noreferrer" aria-label="BlackBlazent on GitHub (opens in a new tab)">{FOOTER.github.label}</a>
          <a href={FOOTER.intelligence.url} target="_blank" rel="noreferrer">{FOOTER.intelligence.linkLabel}</a>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Legal</div>
          <Link to="/legal/privacy">Privacy</Link>
          <Link to="/legal/terms">Terms of Use</Link>
          <a href={`mailto:${CONTACT.legal}`}>{CONTACT.legal}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">&copy; {year} BlackBlazent. All rights reserved.</div>
        <div className="footer-social">
          {SOCIAL_LINKS.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
