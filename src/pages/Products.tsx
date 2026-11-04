import React from 'react';
import { Link } from 'react-router-dom';
import { BannerMedia, getEnabledProducts, productHref } from '@blackblazent/core';
import Reveal from '../components/Reveal';
import '../styles/pages.css';

const Products: React.FC = () => {
  const products = getEnabledProducts();
  return (
    <>
      <div className="page-hero">
        <Reveal>
          <div className="eyebrow">Products</div>
          <h1 className="h-display">Software for the real world.</h1>
          <p className="body-copy" style={{ marginTop: 18 }}>
            Every BlackBlazent product is built with a clear purpose: solving a
            real problem through hybrid technology, considered design, and an
            intuitive experience. Each one has its own home on the web.
          </p>
        </Reveal>
      </div>

      <div className="section">
        <div className="product-grid">
          {products.map((p, i) => (
            <Reveal key={p.id} from={i % 2 ? 'right' : 'left'} distance={50} delay={i * 0.05}>
              <Link to={productHref(p.id).href} className="product-tile" data-theme={p.theme}>
                <BannerMedia className="product-tile-banner" source={p.cardBanner ?? p.banner} parallax />
                <div className="product-tile-body">
                  <div className="product-tile-meta">
                    <span>{String(i + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}</span>
                    <span>{p.category}</span>
                  </div>
                  <div className="product-card-name">{p.name}</div>
                  <p className="product-card-tag">{p.description}</p>
                  <div className="product-card-foot">
                    <span className={`status-tag${p.status === 'Released' ? ' is-live' : ''}`}>{p.status}</span>
                    <span className="product-tile-go">Open {p.name} <span aria-hidden="true">&rarr;</span></span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
