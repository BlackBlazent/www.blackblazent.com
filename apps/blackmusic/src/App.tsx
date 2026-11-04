import React, { useEffect } from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import {
  LegalDocumentView,
  ProductFooter,
  ProductHeader,
  ProductPage,
  PRODUCT_LEGAL,
  BLACKMUSIC_ICON,
  DeleteAccount,
  PRODUCT_SITE_URL,
  getProduct,
  type Product,
} from '@blackblazent/core';

const product = getProduct('blackmusic') as Product;
const legal = PRODUCT_LEGAL.blackmusic ?? {};

const renderLink = (href: string, children: React.ReactNode, className?: string) => (
  <Link to={href} className={className}>{children}</Link>
);

/** Scrolls to a hash target, or to the top on a new page. */
const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);
  return null;
};

const Shell: React.FC = () => {
  useEffect(() => {
    document.documentElement.dataset.theme = product.theme;
  }, []);
  return (
    <div className="page">
      <ScrollManager />
      <ProductHeader productName={product.name} logo={BLACKMUSIC_ICON} renderLink={renderLink} />
      <main><Outlet /></main>
      <ProductFooter productName={product.name} renderLink={renderLink} hasLegal={Boolean(legal.privacy || legal.terms)} />
    </div>
  );
};

const crumbs = [{ label: 'BlackMusic', href: '/' }];

const NotFound: React.FC = () => (
  <div className="not-found">
    <div className="eyebrow">404</div>
    <h1 className="h-display" style={{ fontSize: 'clamp(32px, 5vw, 52px)', margin: '16px 0' }}>Page not found</h1>
    <p className="body-copy">That page does not exist. Head back to the BlackMusic home page.</p>
    <p style={{ marginTop: 28 }}><Link className="btn btn-outline" to="/">Back to BlackMusic</Link></p>
  </div>
);

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Shell />}>
        <Route
          index
          element={<ProductPage product={product} privacy={legal.privacy} terms={legal.terms} renderLink={renderLink} siteUrl={PRODUCT_SITE_URL.blackmusic} />}
        />
        {legal.privacy && (
          <Route
            path="privacy"
            element={
              <LegalDocumentView
                doc={legal.privacy}
                crumbs={crumbs}
                renderLink={renderLink}
                footer={<p className="legal-prose"><Link className="btn btn-outline" to="/delete-account">How to delete your account</Link></p>}
              />
            }
          />
        )}
        {legal.terms && <Route path="terms" element={<LegalDocumentView doc={legal.terms} crumbs={crumbs} renderLink={renderLink} />} />}
        <Route path="delete-account" element={<DeleteAccount homeHref="/" renderLink={renderLink} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
