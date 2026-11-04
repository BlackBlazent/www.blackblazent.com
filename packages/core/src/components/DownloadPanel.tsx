import React from 'react';
import { DISTRIBUTION, STORE_META, UNAVAILABLE_STORE_DISPLAY, type StoreId } from '../config/distribution.config';
import { PLATFORM_LABEL, type Product } from '../content/types';

type Props = { product: Product };

type Row = { id: StoreId; label: string; platforms: string; url?: string; available: boolean };

/** Lists download actions from distribution.config.ts. Unavailable stores are hidden or disabled by config. */
const DownloadPanel: React.FC<Props> = ({ product }) => {
  const entries = DISTRIBUTION[product.id] ?? {};

  const rows: Row[] = (Object.keys(entries) as StoreId[]).map((id) => {
    const e = entries[id]!;
    const meta = STORE_META[id];
    const platforms = meta.platforms.filter((p) => product.platforms.includes(p)).map((p) => PLATFORM_LABEL[p]).join(', ');
    return { id, label: meta.label, platforms, url: e.url, available: e.available && Boolean(e.url) };
  }).filter((r) => r.platforms.length > 0);

  const visible = rows.filter((r) => r.available || UNAVAILABLE_STORE_DISPLAY === 'disabled');
  const group = (g: 'desktop' | 'mobile') => visible.filter((r) => STORE_META[r.id].group === g);
  const groups = [
    { key: 'desktop' as const, title: 'Desktop', rows: group('desktop') },
    { key: 'mobile' as const, title: 'Mobile', rows: group('mobile') },
  ].filter((g) => g.rows.length > 0);

  if (groups.length === 0) return null;

  return (
    <div className="downloads" id="download">
      {groups.map((g) => (
        <div className="downloads-group" key={g.key}>
          <div className="downloads-title">{g.title}</div>
          <ul>
            {g.rows.map((r) => (
              <li key={r.id}>
                {r.available ? (
                  <a className="download-row" href={r.url} target="_blank" rel="noreferrer">
                    <span className="download-name">{r.label}</span>
                    <span className="download-platforms">{r.platforms}</span>
                    <span className="download-cta">Download <span aria-hidden="true">&rarr;</span></span>
                  </a>
                ) : (
                  <span className="download-row is-disabled" aria-disabled="true">
                    <span className="download-name">{r.label}</span>
                    <span className="download-platforms">{r.platforms}</span>
                    <span className="download-cta">Not yet available</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DownloadPanel;
