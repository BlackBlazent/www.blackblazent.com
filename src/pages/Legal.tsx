import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LegalDocumentView, websitePrivacy, websiteTerms } from '@blackblazent/core';

const renderLink = (href: string, children: React.ReactNode, className?: string) => (
  <Link to={href} className={className}>{children}</Link>
);

export const WebsiteLegal: React.FC<{ doc: 'privacy' | 'terms' }> = ({ doc }) => {
  const d = doc === 'privacy' ? websitePrivacy : websiteTerms;
  useEffect(() => { document.title = `${d.title} | BlackBlazent`; }, [d]);
  return (
    <LegalDocumentView
      doc={d}
      crumbs={[{ label: 'BlackBlazent', href: '/home' }]}
      renderLink={renderLink}
      footer={
        <p className="legal-prose">
          {doc === 'privacy'
            ? <Link className="btn btn-outline" to="/legal/terms">Read the Terms of Use</Link>
            : <Link className="btn btn-outline" to="/legal/privacy">Read the Privacy Policy</Link>}
        </p>
      }
    />
  );
};

