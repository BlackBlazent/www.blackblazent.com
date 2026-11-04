import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getEnabledProducts } from '@blackblazent/core';
import Reveal from '../components/Reveal';
import '../styles/pages.css';

const ProductDetail: React.FC = () => {
  const { slug } = useParams();

  const products = getEnabledProducts();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const related = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <div className="page-hero">
        <div className="crumbs">
          <Link to="/products">Products</Link> / {product.name}
        </div>

        <Reveal>
          <div className="eyebrow">{product.category}</div>
          <h1 className="h-display">{product.name}</h1>
          <p className="body-copy" style={{ marginTop: 18 }}>
            {product.tagline}
          </p>
        </Reveal>
      </div>

      <div className="section">
        <Reveal>
          <div className="eyebrow">Overview</div>
          <p
            className="body-copy"
            style={{ marginTop: 18, maxWidth: 720 }}
          >
            {product.description}
          </p>
        </Reveal>
      </div>

      <div className="section">
        <Reveal>
          <div className="eyebrow">Details</div>

          <div className="kv-list">
            <div className="kv-row">
              <span className="kv-key">Status</span>
              <span className="kv-val">
                <span
                  className={`status-tag${
                    product.status === 'Released' ? ' is-live' : ''
                  }`}
                >
                  {product.status}
                </span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {related.length > 0 && (
        <div className="section">
          <Reveal>
            <div className="eyebrow">Related Products</div>

            <div className="related-row">
              {related.map((relatedProduct) => (
                <Link
                  to={`/products/${relatedProduct.slug}`}
                  className="related-card"
                  key={relatedProduct.slug}
                >
                  <div className="related-card-name">
                    {relatedProduct.name}
                  </div>

                  <div className="related-card-tag">
                    {relatedProduct.category}
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      )}
    </>
  );
};

export default ProductDetail;