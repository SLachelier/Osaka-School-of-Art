/**
 * ScrollReveal — Utility wrapper that animates its children into view
 * when the element enters the viewport.
 *
 * Wraps Framer Motion's `whileInView` with a sensible default so
 * individual sections don't need to repeat the same motion boilerplate.
 */

"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  /** Override the default fadeUp animation */
  variants?: Variants;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Additional class names on the wrapper element */
  className?: string;
  /** Fraction of element that must be visible to trigger (0–1) */
  amount?: number;
}

export function ScrollReveal({
  children,
  variants = fadeUpVariants,
  delay = 0,
  className,
  amount = 0.2,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      // Allow per-instance delay without modifying the shared variant
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
