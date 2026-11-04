import React, { useEffect } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { banner } from '../banners';
import { SITE } from '../config/site.config';
import { DISTRIBUTION } from '../config/distribution.config';
import { PLATFORM_LABEL, type LegalDoc, type Product } from '../content/types';
import { useLatestRelease } from '../hooks/useLatestRelease';
import ArticleBlock from './ArticleBlock';
import BannerMedia from './BannerMedia';
import DownloadPanel from './DownloadPanel';
import { LegalPreview } from './Legal';
import { DemoVideo, MoodboardGallery } from './MediaSections';
import Reveal from './Reveal';

type Props = {
  product: Product;
  privacy?: LegalDoc;
  terms?: LegalDoc;
  renderLink: (href: string, children: React.ReactNode, className?: string) => React.ReactNode;
  privacyHref?: string;
  termsHref?: string;
  /** Public address of the product site, shown on the page. */
  siteUrl?: string;
  /** Where the BlackBlazent link goes. Defaults to the main site. */
  homeHref?: string;
};

const Word: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
  const reduce = useReducedMotion();
  return (
    <span className="word-mask">
      <motion.span
        className="word"
        initial={reduce ? undefined : { y: '110%' }}
        animate={reduce ? undefined : { y: '0%' }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
};

/** Dedicated product page. Everything shown is driven by the product record and the config files. */
const ProductPage: React.FC<Props> = ({ product, privacy, terms, renderLink, privacyHref = '/privacy', termsHref = '/terms', siteUrl, homeHref }) => {
  const reduce = useReducedMotion();
  const release = useLatestRelease(product.github?.repo, product.github?.fallbackVersion);
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 140]);
  const heroOpacity = useTransform(scrollY, [0, 520], [1, 0.35]);

  useEffect(() => {
    document.title = `${product.name}${product.alias ? ` (${product.alias})` : ''} | BlackBlazent`;
  }, [product]);

  const words = product.name.split(' ');
  const hasDownloads = Object.values(DISTRIBUTION[product.id] ?? {}).some((e) => e?.available && e.url);

  return (
    <>
      <header className="p-hero">
        <motion.div className="p-hero-glow" style={{ y: glowY }} aria-hidden="true" />
        <motion.div className="p-hero-inner" style={{ opacity: heroOpacity }}>
          <Reveal><div className="eyebrow">{product.category}</div></Reveal>
          <h1 className="p-title" aria-label={product.name}>
            {words.map((w, i) => <Word key={w + i} text={w} delay={0.1 + i * 0.1} />)}
            {product.alias && <span className="p-alias">({product.alias})</span>}
          </h1>
          <Reveal delay={0.25}><p className="p-desc">{product.description}</p></Reveal>
          <Reveal delay={0.35}>
            <dl className="p-facts">
              <div><dt>Status</dt><dd><span className={`status-tag${product.status === 'Released' ? ' is-live' : ''}`}>{product.status}</span></dd></div>
              {release.version && <div><dt>Version</dt><dd>{release.url ? <a href={release.url} target="_blank" rel="noreferrer">v{release.version}</a> : `v${release.version}`}</dd></div>}
              <div><dt>License</dt><dd>{product.license}</dd></div>
              {siteUrl && <div><dt>Website</dt><dd><a href={siteUrl} target="_blank" rel="noreferrer">{siteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</a></dd></div>}
            </dl>
            <div className="p-actions">
              {hasDownloads && <a className="btn btn-primary" href="#download">Download</a>}
              {product.github && <a className="btn btn-outline" href={`https://github.com/${product.github.repo}`} target="_blank" rel="noreferrer">Source on GitHub</a>}
              {siteUrl && product.externalSite && <a className="btn btn-outline" href={siteUrl} target="_blank" rel="noreferrer">Official website</a>}
            </div>
          </Reveal>
        </motion.div>
        <Reveal delay={0.2} distance={40} className="p-hero-banner-wrap">
          <BannerMedia className="p-hero-banner" source={product.banner} parallax eager />
        </Reveal>
      </header>

      <section className="section" aria-labelledby="platforms-title">
        <Reveal>
          <div className="article-tag" id="platforms-title">Platforms</div>
          <h2 className="article-title">Available on</h2>
          <ul className="platform-chips">
            {product.platforms.map((p) => <li key={p}>{PLATFORM_LABEL[p]}</li>)}
          </ul>
        </Reveal>
        <Reveal delay={0.1}><DownloadPanel product={product} /></Reveal>
      </section>

      {product.media.demoVideo && <DemoVideo demo={product.media.demoVideo} title={product.name} />}
      <MoodboardGallery images={product.media.gallery} title={product.name} />

      {product.sections.length > 0 && (
        <div className="section articles">
          {product.sections.map((s, i) => <ArticleBlock key={s.id} section={s} index={i} />)}
        </div>
      )}

      {(privacy || terms) && (
        <section className="section" id="policies">
          <Reveal>
            <div className="article-tag">Policies</div>
            <h2 className="article-title">Policies and terms, in plain language</h2>
            <p className="article-lead">Read what the app keeps, what it sends, and what you agree to. Each document opens on its own page.</p>
          </Reveal>
          <div className="legal-previews">
            {privacy && <Reveal from="left" distance={32}><LegalPreview doc={privacy} banner={banner('bm-privacy')} href={privacyHref} renderLink={renderLink} /></Reveal>}
            {terms && <Reveal from="right" distance={32} delay={0.08}><LegalPreview doc={terms} banner={banner('bm-terms')} href={termsHref} renderLink={renderLink} /></Reveal>}
          </div>
        </section>
      )}

      <section className="closing closing--product">
        <Reveal><h2 className="h-display">{product.name} is part of BlackBlazent.</h2></Reveal>
        <Reveal delay={0.1}>
          <div className="hero-actions">
            {homeHref ? renderLink(homeHref, 'Back to BlackBlazent', 'btn btn-outline') : <a className="btn btn-outline" href={`${SITE.mainUrl}/home`}>Visit BlackBlazent</a>}
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default ProductPage;
