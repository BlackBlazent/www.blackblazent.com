import software from '../assets/orbit/orbit-software.webp';
import ai from '../assets/orbit/orbit-ai.webp';
import security from '../assets/orbit/orbit-security.webp';
import defense from '../assets/orbit/orbit-defense.webp';
import embedded from '../assets/orbit/orbit-embedded.webp';
import robotics from '../assets/orbit/orbit-robotics.webp';
import physical from '../assets/orbit/orbit-physical.webp';
import wearable from '../assets/orbit/orbit-wearable.webp';

/**
 * Hero orbital system (v3.1.0).
 *
 * GEOMETRY
 *   The geometry is the BlackBlazent logo (public/favicon.png) drawn as SVG on a 512 by 512 grid:
 *   one outer circle, and four inner circles (top, right, bottom, left) that each touch the outer
 *   circle from inside and overlap their neighbours. The numbers below are measured from the logo.
 *
 * NODES
 *   Each node is a circular image that rides one circle of that geometry. Add, remove or hide nodes
 *   by editing ORBIT_NODES. The component never needs to change.
 *
 * VIDEO
 *   Local file : video: { kind: 'file', src: '/media/orbit/software.mp4', poster: '/media/orbit/software.webp' }
 *   YouTube    : video: { kind: 'youtube', id: 'dQw4w9WgXcQ' }   (a full URL also works)
 *   The video is created only when the visitor activates the node, and destroyed when the panel closes.
 */
export const ORBIT_GRID = 512;
export const ORBIT_CENTER = 256;

/** Measured from the logo. `inner + offset === outer`: each inner circle touches the outer circle. */
export const LOGO_GEOMETRY = {
  outer: 214,
  inner: 126,
  offset: 88,
} as const;

export type OrbitPathName = 'outer' | 'top' | 'right' | 'bottom' | 'left';
export type OrbitPath = OrbitPathName | { cx: number; cy: number; r: number };

/** Circle centres and radii, in grid units. */
export const ORBIT_PATHS: Record<OrbitPathName, { cx: number; cy: number; r: number }> = {
  outer: { cx: ORBIT_CENTER, cy: ORBIT_CENTER, r: LOGO_GEOMETRY.outer },
  top: { cx: ORBIT_CENTER, cy: ORBIT_CENTER - LOGO_GEOMETRY.offset, r: LOGO_GEOMETRY.inner },
  right: { cx: ORBIT_CENTER + LOGO_GEOMETRY.offset, cy: ORBIT_CENTER, r: LOGO_GEOMETRY.inner },
  bottom: { cx: ORBIT_CENTER, cy: ORBIT_CENTER + LOGO_GEOMETRY.offset, r: LOGO_GEOMETRY.inner },
  left: { cx: ORBIT_CENTER - LOGO_GEOMETRY.offset, cy: ORBIT_CENTER, r: LOGO_GEOMETRY.inner },
};

export type OrbitVideo =
  | { kind: 'file'; src: string; poster?: string }
  | { kind: 'youtube'; id: string };

export type OrbitNode = {
  id: string;
  title: string;
  description: string;
  image: string;
  /** Set false to hide a node without deleting it. */
  visible: boolean;
  /** Which circle the node rides. Default 'outer'. */
  path?: OrbitPath;
  /** Starting angle in degrees, clockwise from the top. */
  phase: number;
  /** Seconds for one full revolution. */
  period: number;
  direction: 'cw' | 'ccw';
  /** Diameter in grid units (512 = full width of the system). */
  size: number;
  video?: OrbitVideo;
  /** Short line under the title in the focused panel, for example a status. */
  caption?: string;
  /** Link shown in the focused panel. */
  link?: { label: string; to: string };
};

export type OrbitConfig = {
  enabled: boolean;
  /** 'logo' draws the four logo hues, 'mono' draws white lines with the blaze accent. */
  palette: 'mono' | 'logo';
  /** Seconds for the whole geometry to turn once. 0 keeps it still, as in the logo. */
  geometrySpin: number;
  showCenterDots: boolean;
  showIntersectionDots: boolean;
  /** Mouse leaving the open panel closes it. Touch always uses the Close button, the backdrop or Escape. */
  closeOnPointerLeave: boolean;
  /** Orbits stop while a node is hovered, focused or open. */
  pauseOnInteract: boolean;
  /** Milliseconds the pointer may be outside the panel before it closes. */
  leaveDelayMs: number;
};

export const ORBIT: OrbitConfig = {
  enabled: true,
  palette: 'mono',
  geometrySpin: 0,
  showCenterDots: true,
  showIntersectionDots: true,
  closeOnPointerLeave: true,
  pauseOnInteract: true,
  leaveDelayMs: 220,
};

export const ORBIT_NODES: OrbitNode[] = [
  {
    id: 'software', title: 'Software and Applications', image: software, visible: true,
    video: {
      kind: 'file',
      src: '/media/orbit/software.mp4',
      poster: '/media/orbit/software.webp',
    },
    description: 'Cross-platform applications for people and institutions, from music players to ministry tools.',
    caption: 'Available now', link: { label: 'See products', to: '/products' },
    phase: 0, period: 90, direction: 'cw', size: 62,
  },
  {
    id: 'ai', title: 'Artificial Intelligence', image: ai, visible: true,
    video: {
      kind: 'file',
      src: '/media/orbit/ai.mp4',
      poster: '/media/orbit/ai.webp',
    },
    description: 'Research and development in artificial intelligence and general intelligence, used where it earns its place.',
    caption: 'Active research', link: { label: 'See solutions', to: '/solutions#ai' },
    phase: 60, period: 90, direction: 'cw', size: 62,
  },
  {
    id: 'security', title: 'Cybersecurity', image: security, visible: true,
    video: {
      kind: 'file',
      src: '/media/orbit/security.mp4',
      poster: '/media/orbit/security.webp',
    },
    description: 'Operating systems and tools for security, ethical hacking, digital forensics and incident response.',
    caption: 'Capability', link: { label: 'See solutions', to: '/solutions#security' },
    phase: 120, period: 90, direction: 'cw', size: 62,
  },
  {
    id: 'defense', title: 'Defense Technology', image: defense, visible: true,
    video: {
      kind: 'file',
      src: '/media/orbit/defense.mp4',
      poster: '/media/orbit/defense.webp',
    },
    description: 'Mission software with a deliberately limited scope. Details are shared selectively.',
    caption: 'Capability', link: { label: 'See solutions', to: '/solutions#defense' },
    phase: 180, period: 90, direction: 'cw', size: 62,
  },
  {
    id: 'embedded', title: 'Embedded Systems', image: embedded, visible: true,
    video: {
      kind: 'file',
      src: '/media/orbit/embedded.mp4',
      poster: '/media/orbit/embedded.webp',
    },
    description: 'Computing built into devices and machines, where software meets hardware.',
    caption: 'Future area of work', link: { label: 'See solutions', to: '/solutions#embedded' },
    phase: 240, period: 90, direction: 'cw', size: 62,
  },
  {
    id: 'robotics', title: 'Robotics', image: robotics, visible: true,
    video: {
      kind: 'file',
      src: '/media/orbit/robotics.mp4',
      poster: '/media/orbit/robotics.webp',
    },
    description: 'Intelligent machines that move and act in the physical world.',
    caption: 'Future area of work', link: { label: 'See solutions', to: '/solutions#robotics' },
    phase: 300, period: 90, direction: 'cw', size: 62,
  },

  // Ready to switch on. Flip `visible` to true and give each one a free phase.
  // Prepared for future activation.
  {
    id: 'physical-ai', title: 'Physical AI', image: physical, visible: false,
    video: {
      kind: 'file',
      src: '/media/orbit/physical-ai.mp4',
      poster: '/media/orbit/physical-ai.webp',
    },
    description: 'Artificial intelligence that perceives and acts through a body.',
    path: 'top', phase: 0, period: 70, direction: 'ccw', size: 52,
  },
  {
    id: 'wearable', title: 'Wearable Devices', image: wearable, visible: false,
    video: {
      kind: 'file',
      src: '/media/orbit/wearable.mp4',
      poster: '/media/orbit/wearable.webp',
    },
    description: 'Technology worn close to the person, built to stay calm and out of the way.',
    path: 'bottom', phase: 180, period: 70, direction: 'ccw', size: 52,
  },
];
