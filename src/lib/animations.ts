/**
 * Reusable Framer Motion animation variants for the Osaka School of Art.
 *
 * Centralizing animation variants keeps motion consistent across sections
 * and makes global timing adjustments a single-file change.
 */

import type { Variants } from "framer-motion";

// ─── Fade & Slide Variants ─────────────────────────────────────────────────────

// Cubic-bezier easing reused across motion variants.
// Typed as a const tuple so Framer Motion's `Easing` type accepts it.
const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Fade in from below — standard entrance for most text/card elements */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

/** Fade in from above */
export const fadeDownVariants: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
};

/** Fade in from the left */
export const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

/** Fade in from the right */
export const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

/** Simple opacity-only fade */
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Scale Variants ────────────────────────────────────────────────────────────

/** Scale in from slightly smaller */
export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
};

// ─── Stagger Container Variants ───────────────────────────────────────────────

/**
 * Container variant that staggers children animations.
 * Usage: apply to a parent motion element; children use any item variant.
 */
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/**
 * Slower stagger for hero / feature sections.
 */
export const staggerSlowContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// ─── Special Purpose Variants ─────────────────────────────────────────────────

/** Ink-stroke draw-in for decorative SVG lines */
export const drawVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.4, ease: "easeInOut" },
  },
};

/** Slide up and reveal — for section headings behind a mask */
export const maskRevealVariants: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};
