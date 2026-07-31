/**
 * SectionHeader — Consistent heading block used across all page sections.
 *
 * Renders an optional eye-brow label, a main heading, and an optional
 * sub-heading. All three animate in on scroll via Framer Motion.
 */

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SectionHeaderProps {
  /** Small all-caps label above the heading (e.g. "Our Programs") */
  eyebrow?: string;
  /** Main heading text — supports JSX for inline accents */
  heading: React.ReactNode;
  /** Optional supporting paragraph below the heading */
  subheading?: string;
  /** Text alignment */
  align?: "left" | "center";
  /** Extra classes on the wrapper */
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className,
      )}
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Eye-brow label */}
      {eyebrow && (
        <motion.p
          variants={fadeUpVariants}
          className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-akane-400)]"
        >
          {eyebrow}
        </motion.p>
      )}

      {/* Main heading */}
      <motion.h2
        variants={fadeUpVariants}
        className="text-3xl font-bold leading-tight tracking-tight text-[var(--color-washi-50)] sm:text-4xl lg:text-5xl font-display"
      >
        {heading}
      </motion.h2>

      {/* Decorative ink-divider below heading */}
      <motion.div
        variants={fadeUpVariants}
        className={cn(
          "h-px w-16 bg-gradient-to-r from-[var(--color-akane-500)] to-[var(--color-cyan-500)]",
          align === "center" && "self-center",
        )}
      />

      {/* Subheading */}
      {subheading && (
        <motion.p
          variants={fadeUpVariants}
          className="max-w-2xl text-base leading-relaxed text-[var(--color-washi-300)] sm:text-lg"
        >
          {subheading}
        </motion.p>
      )}
    </motion.div>
  );
}
