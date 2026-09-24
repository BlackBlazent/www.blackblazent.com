import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { PRODUCTS } from '../content/site-data';
import '../styles/pages.css';

const Products: React.FC = () => {
  return (
    <>
      <div className="page-hero">
        <Reveal>
          <div className="eyebrow">Products</div>
          <h1 className="h-display">Software for the real world.</h1>
          <p className="body-copy" style={{ marginTop: 18 }}>
            Every BlackBlazent product is built with a clear purpose &mdash; solving a
            real problem through hybrid technology, considered design, and an
            intuitive experience.
          </p>
        </Reveal>
      </div>

      <div className="section">
        <div className="grid-2">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link to={`/products/${p.slug}`} className="product-card">
                <span className="tile-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="product-card-name">{p.name}</span>
                <span className="product-card-tag">{p.tagline}</span>
                <span className="product-card-foot">
                  <span className={`status-tag${p.status === 'Shipped' ? ' is-live' : ''}`}>{p.status}</span>
                  <span className="product-card-cat">{p.category}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
