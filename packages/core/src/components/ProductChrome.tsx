import React, { useEffect, useState } from 'react';
import { CONTACT, SITE, SOCIAL_LINKS } from '../config/site.config';

type HeaderProps = {
  productName: string;
  logo?: string;
  renderLink: (href: string, children: React.ReactNode, className?: string) => React.ReactNode;
};

/** Header for a product site. The BlackBlazent link leaves for the main domain. */
export const ProductHeader: React.FC<HeaderProps> = ({ productName, logo, renderLink }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      {renderLink('/', <>{logo && <img className="nav-mark-img" src={logo} alt="" width={32} height={32} />}{productName}</>, 'nav-mark')}
      <nav className="nav-links nav-links--always" aria-label="Primary">
        {renderLink('/#download', 'Download', 'nav-link')}
        {renderLink('/#policies', 'Policies', 'nav-link')}
        <a className="nav-link" href={`${SITE.mainUrl}/home`}>BlackBlazent</a>
      </nav>
    </header>
  );
};

export const ProductFooter: React.FC<{ productName: string; renderLink: HeaderProps['renderLink']; hasLegal: boolean }> = ({ productName, renderLink, hasLegal }) => (
  <footer className="footer footer--product">
    <div className="footer-bottom footer-bottom--solo">
      <div className="footer-legal">&copy; {new Date().getFullYear()} BlackBlazent. {productName} is a BlackBlazent product.</div>
      <div className="footer-social">
        {hasLegal && renderLink('/privacy', 'Privacy', '')}
        {hasLegal && renderLink('/terms', 'Terms', '')}
        <a href={`mailto:${CONTACT.support}`}>Support</a>
        {SOCIAL_LINKS.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}
      </div>
    </div>
  </footer>
);

/** Sends the visitor to another domain. Used when a main site route belongs to a product site. */
export const ExternalRedirect: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return (
    <div className="not-found">
      <div className="eyebrow">Redirecting</div>
      <p className="body-copy" style={{ marginTop: 16 }}>Taking you to {label}. If nothing happens, <a href={to}>continue here</a>.</p>
    </div>
  );
};
