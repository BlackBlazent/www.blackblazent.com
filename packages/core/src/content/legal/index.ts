import type { LegalDoc, ProductId } from '../types';
import { blackmusicPrivacy } from './blackmusic.privacy';
import { blackmusicTerms } from './blackmusic.terms';

export { blackmusicPrivacy, blackmusicTerms };
export { websitePrivacy, websiteTerms } from './website';

/**
 * Legal documents per product. Add `vineward: { privacy, terms }` here once the
 * Vineward documents are written. Products without an entry simply show no
 * legal section.
 */
export const PRODUCT_LEGAL: Partial<Record<ProductId, { privacy?: LegalDoc; terms?: LegalDoc }>> = {
  blackmusic: { privacy: blackmusicPrivacy, terms: blackmusicTerms },
};
