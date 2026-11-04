import React from 'react';
import type { ArticleSection } from '../content/types';
import { banner } from '../banners';
import BannerMedia from './BannerMedia';
import Reveal from './Reveal';

type Props = {
  section: Pick<ArticleSection, 'id' | 'tag' | 'title' | 'banner' | 'body' | 'points' | 'link'>;
  /** Alternates the direction content arrives from. */
  index?: number;
};

/**
 * Title, banner, description. The layout used for product information and
 * long form content, modeled on newsletter sections.
 */
const ArticleBlock: React.FC<Props> = ({ section, index = 0 }) => {
  const from = index % 2 === 0 ? 'left' : 'right';
  const src = section.banner.startsWith('/') || section.banner.startsWith('http') ? section.banner : banner(section.banner) || section.banner;
  return (
    <article className="article" id={section.id}>
      <Reveal from={from} distance={36}>
        <div className="article-tag">{section.tag}</div>
        <h2 className="article-title">{section.title}</h2>
      </Reveal>
      <Reveal delay={0.08} distance={24}>
        <BannerMedia className="article-banner" source={{ type: 'image', src, alt: `${section.title} banner` }} parallax />
      </Reveal>
      <Reveal delay={0.12} distance={20}>
        <div className="article-body">
          {section.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        {section.points && (
          <ul className="article-points">
            {section.points.map((pt) => (
              <li key={pt.title}>
                <span className="article-point-title">{pt.title}</span>
                <span className="article-point-text">{pt.text}</span>
              </li>
            ))}
          </ul>
        )}
        {section.link && (
          <a className="article-link" href={section.link.href} target="_blank" rel="noreferrer">
            <span aria-hidden="true">&rarr;</span> {section.link.label}
          </a>
        )}
      </Reveal>
    </article>
  );
};

export default ArticleBlock;
