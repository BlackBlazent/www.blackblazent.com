import React, { useEffect } from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import {
  LegalDocumentView,
  ProductFooter,
  ProductHeader,
  ProductPage,
  PRODUCT_LEGAL,
  PRODUCT_SITE_URL,
  getProduct,
  type Product,
} from '@blackblazent/core';

/**
 * Vineward product site (v3.1.0). Same presentation system as BlackMusic.
 * Vineward is a collaborative project and keeps its own external website. That address
 * (PRODUCT_SITE_URL.vineward) is linked from the page as the official website and is not replaced here.
 */
const product = getProduct('vineward') as Product;
const legal = PRODUCT_LEGAL.vineward ?? {};

const renderLink = (href: string, children: React.ReactNode, className?: string) => (
  <Link to={href} className={className}>{children}</Link>
);

const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);
  return null;
};

const Shell: React.FC = () => {
  useEffect(() => { document.documentElement.dataset.theme = product.theme; }, []);
  return (
    <div className="page">
      <ScrollManager />
      <ProductHeader productName={product.name} renderLink={renderLink} />
      <main><Outlet /></main>
      <ProductFooter productName={product.name} renderLink={renderLink} hasLegal={Boolean(legal.privacy || legal.terms)} />
    </div>
  );
};

const crumbs = [{ label: 'Vineward', href: '/' }];

const NotFound: React.FC = () => (
  <div className="not-found">
    <div className="eyebrow">404</div>
    <h1 className="h-display" style={{ fontSize: 'clamp(32px, 5vw, 52px)', margin: '16px 0' }}>Page not found</h1>
    <p className="body-copy">That page does not exist. Head back to the Vineward home page.</p>
    <p style={{ marginTop: 28 }}><Link className="btn btn-outline" to="/">Back to Vineward</Link></p>
  </div>
);

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<ProductPage product={product} privacy={legal.privacy} terms={legal.terms} renderLink={renderLink} siteUrl={PRODUCT_SITE_URL.vineward} />} />
        {legal.privacy && <Route path="privacy" element={<LegalDocumentView doc={legal.privacy} crumbs={crumbs} renderLink={renderLink} />} />}
        {legal.terms && <Route path="terms" element={<LegalDocumentView doc={legal.terms} crumbs={crumbs} renderLink={renderLink} />} />}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
