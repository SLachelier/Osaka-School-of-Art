/**
 * Button — Primary interactive call-to-action component.
 *
 * Supports three visual variants (primary, secondary, ghost) and two sizes.
 * Built on a native <button> or <a> element depending on the `href` prop,
 * with Framer Motion press feedback for a tactile feel.
 */

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ButtonProps {
  /** Visual style variant */
  variant?: "primary" | "secondary" | "ghost";
  /** Size preset */
  size?: "sm" | "md" | "lg";
  /** If provided, renders as a Next.js Link */
  href?: string;
  /** If true and href is set, opens in a new tab */
  external?: boolean;
  /** Disables the button */
  disabled?: boolean;
  /** Additional class names */
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

// ── Style Maps ─────────────────────────────────────────────────

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  // Coral red button with prominent shadow
  primary:
    "bg-[var(--color-brand-coral)] text-white border border-[var(--color-sumi-600)] hover:border-[var(--color-washi-300)] hover:text-[var(--color-washi-50)] shadow-lg shadow-akane-900/40",
  // Transparent with coral red border and text
  secondary:
    "bg-transparent border border-[var(--color-darker-red)] text-[var(--color-lighter-red)] hover:bg-[var(--color-red)] hover:text-[var(--color-washi-50)]",
  // Cyan blue button
  ghost:
    "bg-[var(--color-brand-cyan)] border border-[var(--color-sumi-600)] text-white hover:border-[var(--color-washi-300)] hover:text-[var(--color-washi-50)]",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm font-medium rounded-md",
  md: "px-6 py-3 text-base font-semibold rounded-lg",
  lg: "px-8 py-4 text-lg font-semibold rounded-lg",
};

// ─── Component ────────────────────────────────────────────────────────────────

export function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  disabled = false,
  className,
  children,
  onClick,
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 text-center transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-akane-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-sumi-950)]",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  };

  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link
          href={href}
          className={baseStyles}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={baseStyles}
      disabled={disabled}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
