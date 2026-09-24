import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { PRODUCTS } from '../content/site-data';
import '../styles/pages.css';

const ProductDetail: React.FC = () => {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  const related = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <>
      <div className="page-hero">
        <div className="crumbs">
          <Link to="/products">Products</Link> / {product.name}
        </div>
        <Reveal>
          <div className="eyebrow">{product.category}</div>
          <h1 className="h-display">{product.name}</h1>
          <p className="body-copy" style={{ marginTop: 18 }}>{product.tagline}</p>
        </Reveal>
      </div>

      <div className="section">
        <Reveal>
          <div className="eyebrow">Overview</div>
          <p className="body-copy" style={{ marginTop: 18, maxWidth: 720 }}>{product.description}</p>
        </Reveal>
      </div>

      <div className="section">
        <Reveal>
          <div className="eyebrow">Details</div>
          <div className="kv-list">
            <div className="kv-row">
              <span className="kv-key">Status</span>
              <span className="kv-val"><span className={`status-tag${product.status === 'Shipped' ? ' is-live' : ''}`}>{product.status}</span></span>
            </div>
            <div className="kv-row">
              <span className="kv-key">Capabilities</span>
              <span className="kv-val">{product.capabilities.join(' \u00b7 ')}</span>
            </div>
            <div className="kv-row">
              <span className="kv-key">Technology</span>
              <span className="kv-val">
                <span className="chip-row" style={{ marginTop: 0 }}>
                  {product.technology.map((t) => <span className="chip" key={t}>{t}</span>)}
                </span>
              </span>
            </div>
            <div className="kv-row">
              <span className="kv-key">Future direction</span>
              <span className="kv-val">{product.future}</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="section">
        <Reveal>
          <div className="eyebrow">Related Products</div>
          <div className="related-row">
            {related.map((p) => (
              <Link to={`/products/${p.slug}`} className="related-card" key={p.slug}>
                <div className="related-card-name">{p.name}</div>
                <div className="related-card-tag">{p.category}</div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default ProductDetail;
