import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Solutions from './pages/Solutions';
import Research from './pages/Research';
import Engineering from './pages/Engineering';
import Resources from './pages/Resources';
import Company from './pages/Company';
import CompanySub from './pages/CompanySub';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="research" element={<Research />} />
          <Route path="engineering" element={<Engineering />} />
          <Route path="resources" element={<Resources />} />
          <Route path="company" element={<Company />} />
          <Route path="company/:slug" element={<CompanySub />} />
          <Route path="legal/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
