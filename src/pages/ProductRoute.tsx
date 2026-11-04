import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  DeleteAccount,
  ExternalRedirect,
  LegalDocumentView,
  PRODUCT_HOSTING,
  PRODUCT_LEGAL,
  PRODUCT_SITE_URL,
  ProductPage,
  getEnabledProduct,
  type ProductId,
} from '@blackblazent/core';

const renderLink = (href: string, children: React.ReactNode, className?: string) => (
  <Link to={href} className={className}>{children}</Link>
);

type View = 'overview' | 'privacy' | 'terms' | 'delete-account';

/**
 * Product dimension inside the BlackBlazent site. /blackmusic shows the product
 * page, /blackmusic/privacy and /blackmusic/terms show its documents. The product's
 * own address is shown on the page. A product set to 'external' in products.config.ts
 * redirects to that address instead.
 */
const ProductRoute: React.FC<{ view?: View }> = ({ view = 'overview' }) => {
  const { slug } = useParams();
  const product = slug ? getEnabledProduct(slug.toLowerCase()) : undefined;

  useEffect(() => {
    if (!product) return;
    document.documentElement.dataset.theme = product.theme;
    return () => { delete document.documentElement.dataset.theme; };
  }, [product]);

  if (!product) return <Navigate to={slug ? '/products' : '/home'} replace />;
  if (PRODUCT_HOSTING[product.id] === 'external') return <ExternalRedirect to={PRODUCT_SITE_URL[product.id]} label={product.name} />;

  const base = `/${product.id}`;
  const docs = PRODUCT_LEGAL[product.id as ProductId] ?? {};
  const crumbs = [{ label: 'BlackBlazent', href: '/home' }, { label: 'Products', href: '/products' }, { label: product.name, href: base }];

  if (view === 'privacy' && docs.privacy) return <LegalDocumentView doc={docs.privacy} crumbs={crumbs} renderLink={renderLink}
    footer={product.id === 'blackmusic' ? <p className="legal-prose"><Link className="btn btn-outline" to={`${base}/delete-account`}>How to delete your account</Link></p> : undefined} />;
  if (view === 'terms' && docs.terms) return <LegalDocumentView doc={docs.terms} crumbs={crumbs} renderLink={renderLink} />;
  if (view === 'delete-account' && product.id === 'blackmusic') return <DeleteAccount homeHref={base} renderLink={renderLink} />;
  if (view !== 'overview') return <Navigate to={base} replace />;

  return (
    <ProductPage
      product={product}
      privacy={docs.privacy}
      terms={docs.terms}
      renderLink={renderLink}
      privacyHref={`${base}/privacy`}
      termsHref={`${base}/terms`}
      siteUrl={PRODUCT_SITE_URL[product.id]}
      homeHref="/home"
    />
  );
};

export default ProductRoute;
