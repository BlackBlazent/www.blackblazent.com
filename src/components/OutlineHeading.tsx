import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { HEADINGS } from '../config/headings.config';

type Tag = 'h1' | 'h2' | 'h3';

type Props = {
  text: string;
  as?: Tag;
  /** page: top of a page. section: a section of a page. sub: a smaller label inside a section. */
  size?: 'page' | 'section' | 'sub';
  /** Milliseconds per character. Defaults to HEADINGS.speedMs. */
  speed?: number;
  /** false shows the full heading immediately. */
  animate?: boolean;
  className?: string;
  id?: string;
};

/** Headings already typed in this visit. They never retype when the visitor scrolls back or returns. */
const typed = new Set<string>();

/**
 * Large stroke-only heading with a typing reveal.
 * - The real text is always in the DOM for screen readers; the typed copy is aria-hidden.
 * - Untyped letters keep their space (visibility: hidden), so nothing shifts while typing.
 * - Reduced motion, `animate={false}` or HEADINGS.typing = false show the finished heading.
 */
const OutlineHeading: React.FC<Props> = ({ text, as: Tag = 'h2', size = 'section', speed, animate = true, className, id }) => {
  const reduce = useReducedMotion();
  const instant = !HEADINGS.typing || !animate || Boolean(reduce) || typed.has(text);
  const [count, setCount] = useState(instant ? text.length : 0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (instant) { setCount(text.length); return; }
    const el = ref.current;
    if (!el) return;
    let raf = 0, timer = 0, started = false;
    const perChar = speed ?? HEADINGS.speedMs;

    const run = () => {
      const t0 = performance.now();
      const step = (now: number) => {
        const n = Math.min(text.length, Math.floor((now - t0) / perChar) + 1);
        setCount(n);
        if (n < text.length) raf = requestAnimationFrame(step);
        else typed.add(text);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver((entries) => {
      if (started || !entries.some((e) => e.isIntersecting)) return;
      started = true;
      io.disconnect();
      timer = window.setTimeout(run, HEADINGS.startDelayMs);
    }, { threshold: HEADINGS.threshold });
    io.observe(el);
    return () => { io.disconnect(); window.clearTimeout(timer); cancelAnimationFrame(raf); };
  }, [instant, text, speed]);

  const done = count >= text.length;
  return (
    <Tag ref={ref as React.Ref<HTMLHeadingElement>} id={id} className={`outline-heading outline-heading--${size}${className ? ` ${className}` : ''}`}>
      <span className="sr-only">{text}</span>
      <span className="outline-heading-visual" aria-hidden="true">
        <span>{text.slice(0, count)}</span>
        {!done && <span className="outline-caret" />}
        <span className="outline-rest">{text.slice(count)}</span>
      </span>
    </Tag>
  );
};

export default OutlineHeading;
