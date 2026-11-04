import React from 'react';
import { BrowserRouter, Navigate, Routes, Route, useParams } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductRoute from './pages/ProductRoute';
import Solutions from './pages/Solutions';
import Research from './pages/Research';
import Engineering from './pages/Engineering';
import Resources from './pages/Resources';
import Company from './pages/Company';
import CompanySub from './pages/CompanySub';
import { WebsiteLegal } from './pages/Legal';
import NotFound from './pages/NotFound';

const ProductRedirect: React.FC = () => <Navigate to={`/${useParams().slug ?? 'products'}`} replace />;

/**
 * Every major section has its own path. Product routes (/blackmusic and
 * /products/blackmusic) open the product inside the site.
 */
const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:slug" element={<ProductRedirect />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="research" element={<Research />} />
        <Route path="engineering" element={<Engineering />} />
        <Route path="resources" element={<Resources />} />
        <Route path="about" element={<Company />} />
        <Route path="company" element={<Navigate to="/about" replace />} />
        <Route path="company/:slug" element={<CompanySub />} />
        <Route path="legal/privacy" element={<WebsiteLegal doc="privacy" />} />
        <Route path="legal/terms" element={<WebsiteLegal doc="terms" />} />
        <Route path=":slug" element={<ProductRoute />} />
        <Route path=":slug/privacy" element={<ProductRoute view="privacy" />} />
        <Route path=":slug/terms" element={<ProductRoute view="terms" />} />
        <Route path=":slug/delete-account" element={<ProductRoute view="delete-account" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
