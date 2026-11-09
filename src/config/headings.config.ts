/**
 * Outlined section headings (v3.1.0).
 *
 * Headings are drawn as large stroke-only type with a typing reveal. Change speed or turn the
 * animation off here. Headings stay fully readable to screen readers and when animation is off.
 */
export const HEADINGS = {
  /** Master switch for the typing animation. Reduced motion also disables it. */
  typing: true,
  /** Milliseconds per character. */
  speedMs: 34,
  /** Pause before the first character appears once the heading is in view. */
  startDelayMs: 160,
  /** Share of the heading that must be visible before typing starts, 0 to 1. */
  threshold: 0.35,
} as const;
