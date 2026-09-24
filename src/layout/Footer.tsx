import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS } from '../content/site-data';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="nav-mark"><span className="nav-mark-dot" />BlackBlazent</div>
          <p>An independent software organization building hybrid, cross-platform applications with passion, purpose, and precision.</p>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Navigate</div>
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Products</div>
          <Link to="/products/blackvideo">BlackVideo</Link>
          <Link to="/products/blackmusic">BlackMusic</Link>
          <Link to="/products/blackgallery">BlackGallery</Link>
          <Link to="/products/blackmiscellen">BlackMiscellen</Link>
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
          <span>legal@blackblazent.com</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">© {year} BlackBlazent. All rights reserved.</div>
        <div className="footer-social">
          {SOCIAL_LINKS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
