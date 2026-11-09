import React from 'react';
import type { LegalBlock, LegalDoc } from '../content/types';
import BannerMedia from './BannerMedia';
import Reveal from './Reveal';

const Block: React.FC<{ block: LegalBlock }> = ({ block }) => {
  switch (block.type) {
    case 'p': return <p>{block.text}</p>;
    case 'h3': return <h3>{block.text}</h3>;
    case 'note': return <p className="legal-note">{block.text}</p>;
    case 'ul': return <ul>{block.items.map((t, i) => <li key={i}>{t}</li>)}</ul>;
    case 'table':
      return (
        <div className="legal-table-wrap">
          <table>
            <thead><tr>{block.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>{block.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} data-label={block.head[j]}>{c}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
  }
};

type DocProps = {
  doc: LegalDoc;
  crumbs: { label: string; href: string }[];
  /** Renders a link element so each app can supply its own router link. */
  renderLink: (href: string, children: React.ReactNode, className?: string) => React.ReactNode;
  /** Extra line under the intro, for example a link to a related page. */
  footer?: React.ReactNode;
};

/** Full legal document in the title, banner, description layout, with a chapter index. */
export const LegalDocumentView: React.FC<DocProps> = ({ doc, crumbs, renderLink, footer }) => (
  <div className="legal">
    <header className="legal-head">
      <nav className="crumbs" aria-label="Breadcrumb">
        {crumbs.map((c, i) => (
          <React.Fragment key={c.href}>
            {renderLink(c.href, c.label)}
            {i < crumbs.length - 1 && <span aria-hidden="true"> / </span>}
          </React.Fragment>
        ))}
        <span aria-hidden="true"> / </span>
        <span>{doc.title}</span>
      </nav>
      <Reveal>
        <div className="eyebrow">{doc.owner}</div>
        <h1 className="legal-title">{doc.title}</h1>
        <p className="legal-intro">{doc.intro}</p>
        <dl className="legal-meta">
          <div><dt>{doc.dateLabel ?? 'Effective'}</dt><dd>{doc.effectiveDate}</dd></div>
          {doc.appVersion && <div><dt>App version</dt><dd>{doc.appVersion}</dd></div>}
          <div><dt>Publisher</dt><dd>BlackBlazent</dd></div>
        </dl>
      </Reveal>
    </header>

    <div className="legal-layout">
      <aside className="legal-toc" aria-label="Contents">
        <div className="legal-toc-title">In this document</div>
        <ol>
          {doc.chapters.map((c) => (
            <li key={c.id}><a href={`#${c.id}`}>{c.title}</a></li>
          ))}
        </ol>
      </aside>

      <div className="legal-body">
        {doc.chapters.map((c, i) => (
          <section className="legal-chapter" id={c.id} key={c.id}>
            <Reveal from={i % 2 ? 'right' : 'left'} distance={30}>
              <div className="article-tag">{c.tag}</div>
              <h2 className="article-title">{c.title}</h2>
            </Reveal>
            <Reveal delay={0.06} distance={20}>
              <BannerMedia className="article-banner" source={{ type: 'image', src: c.banner, alt: '' }} />
            </Reveal>
            <div className="legal-prose">
              {c.blocks.map((b, j) => <Block key={j} block={b} />)}
            </div>
          </section>
        ))}
        {footer}
      </div>
    </div>
  </div>
);

type PreviewProps = {
  doc: LegalDoc;
  banner: string;
  href: string;
  renderLink: DocProps['renderLink'];
};

/** Short preview card used on product pages. */
export const LegalPreview: React.FC<PreviewProps> = ({ doc, banner, href, renderLink }) => (
  <article className="legal-preview">
    <BannerMedia className="legal-preview-banner" source={{ type: 'image', src: doc.cover ?? banner, alt: '' }} />
    <div className="legal-preview-body">
      <div className="article-tag">{doc.id === 'privacy' ? 'Policy' : 'Terms'}</div>
      <h3 className="legal-preview-title">{doc.title}</h3>
      <ul>{doc.preview.map((p) => <li key={p}>{p}</li>)}</ul>
      {renderLink(href, <>View More <span aria-hidden="true">&rarr;</span></>, 'btn btn-outline')}
    </div>
  </article>
);
