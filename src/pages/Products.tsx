import React from 'react';
import { Link } from 'react-router-dom';
import { BannerMedia, getEnabledProduct, productHref, type Product } from '@blackblazent/core';
import Reveal from '../components/Reveal';
import OutlineHeading from '../components/OutlineHeading';
import { CATEGORIES, PRODUCTS_PAGE, STAGE_LABEL, STAGE_NOTE, type Stage } from '../config/categories.config';
import { SOLUTION_AREAS } from '../content/site-data';
import '../styles/pages.css';

const ProductTile: React.FC<{ p: Product; i: number; total: number }> = ({ p, i, total }) => (
  <Reveal from={i % 2 ? 'right' : 'left'} distance={50} delay={i * 0.05}>
    <Link to={productHref(p.id).href} className="product-tile" data-theme={p.theme}>
      <BannerMedia className="product-tile-banner" source={p.cardBanner ?? p.banner} parallax />
      <div className="product-tile-body">
        <div className="product-tile-meta">
          <span>{String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
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
);

const Products: React.FC = () => {
  const blocks = CATEGORIES.filter((c) => c.visible).map((c) => {
    const area = SOLUTION_AREAS.find((a) => a.id === c.id);
    const products = c.productIds.map((id) => getEnabledProduct(id)).filter((p): p is Product => Boolean(p));
    // A category only claims to be "available" when an enabled, released product is inside it.
    const stage: Stage = products.some((p) => p.status === 'Released') ? 'available' : c.stage === 'available' ? 'capability' : c.stage;
    return { c, area, products, stage };
  }).filter((b) => b.area && (b.products.length > 0 || PRODUCTS_PAGE.showCategoriesWithoutProducts));

  return (
    <>
      <div className="page-hero">
        <OutlineHeading as="h1" size="page" text="Products and technology." />
        <Reveal>
          <p className="body-copy">
            BlackBlazent builds across software and physical technology. Products that are released appear
            with their own page. Every other area is labelled by how far along it is, so nothing is shown as
            finished when it is not.
          </p>
          <nav className="category-index" aria-label="Product categories">
            {blocks.map((b, i) => <a key={b.c.id} href={`#cat-${b.c.id}`}><span>{String(i + 1).padStart(2, '0')}</span>{b.area!.title}</a>)}
          </nav>
        </Reveal>
      </div>

      <div className="section category-stack">
        {blocks.map((b, i) => (
          <section className="category" id={`cat-${b.c.id}`} key={b.c.id} aria-labelledby={`cat-title-${b.c.id}`}>
            <Reveal>
              <div className="category-head">
                <span className="solution-num">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="category-title" id={`cat-title-${b.c.id}`}>{b.area!.title}</h2>
                <span className={`stage-pill stage-pill--${b.stage}`}>{STAGE_LABEL[b.stage]}</span>
              </div>
              <p className="body-copy category-lead">{b.area!.body}</p>
            </Reveal>
            {b.products.length > 0 ? (
              <div className="product-grid">
                {b.products.map((p, pi) => <ProductTile key={p.id} p={p} i={pi} total={b.products.length} />)}
              </div>
            ) : (
              <Reveal delay={0.05}>
                <p className="category-empty">
                  <span className={`stage-pill stage-pill--${b.stage}`}>{STAGE_LABEL[b.stage]}</span>
                  {STAGE_NOTE[b.stage]} No product in this area is released.
                  {b.c.id === 'defense' && <> See <Link to="/solutions#defense">Solutions</Link>.</>}
                </p>
              </Reveal>
            )}
          </section>
        ))}
      </div>
    </>
  );
};

export default Products;
