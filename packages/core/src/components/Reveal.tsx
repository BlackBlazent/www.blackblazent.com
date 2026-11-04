import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  /** Travel distance in pixels. */
  distance?: number;
  from?: Direction;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
};

const offset = (from: Direction, d: number) => {
  switch (from) {
    case 'down': return { x: 0, y: -d };
    case 'left': return { x: -d, y: 0 };
    case 'right': return { x: d, y: 0 };
    default: return { x: 0, y: d };
  }
};

/** Brings content in from a direction once it enters the viewport. Shows content immediately under reduced motion. */
const Reveal: React.FC<RevealProps> = ({ children, delay = 0, distance = 28, from = 'up', className, as = 'div' }) => {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  const o = offset(from, distance);
  return (
    <Tag
      className={className}
      initial={reduce ? undefined : { opacity: 0, ...o }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
