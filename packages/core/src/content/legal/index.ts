import type { LegalDoc, ProductId } from '../types';
import { blackmusicPrivacy } from './blackmusic.privacy';
import { blackmusicTerms } from './blackmusic.terms';

import { vinewardPrivacy } from './vineward.privacy';
import { vinewardTerms } from './vineward.terms';

export { blackmusicPrivacy, blackmusicTerms, vinewardPrivacy, vinewardTerms };
export { websitePrivacy, websiteTerms } from './website';

/**
 * Legal documents per product. Products without an entry simply show no
 * legal section.
 */
export const PRODUCT_LEGAL: Partial<Record<ProductId, { privacy?: LegalDoc; terms?: LegalDoc }>> = {
  blackmusic: { privacy: blackmusicPrivacy, terms: blackmusicTerms },
  vineward: { privacy: vinewardPrivacy, terms: vinewardTerms },
};
