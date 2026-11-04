import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, getEnabledProducts, productHref } from '@blackblazent/core';
import { NAV_LINKS, SOCIAL_LINKS } from '../content/site-data';
import logo from '../assets/icons/blackblazer-mark.png';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const products = getEnabledProducts();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="nav-mark">
            <img className="nav-mark-dot" src={logo} alt="" width={40} height={40} />
            BlackBlazent
          </div>
          <p>An independent software organization building hybrid, cross-platform applications with passion, purpose, and precision.</p>
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
