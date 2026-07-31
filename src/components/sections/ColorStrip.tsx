/**
 * ColorStrip — Decorative vertical accent stripes on the left edge of the page.
 *
 * Renders two fixed vertical stripes in the brand accent colors (cyan and coral red)
 * that span the full height of the viewport. These strips are purely decorative,
 * positioned below the navbar (z-10), and do not interfere with user interactions.
 *
 * The body has matching left padding (pl-10) to prevent content overlap.
 *
 * Performance: Memoized to prevent unnecessary re-renders.
 */

"use client";

import React from "react";

// ── Brand accent colors ──────────────────────────────────────────
// These reference the CSS custom properties defined in globals.css

const CYAN_ACCENT = "var(--color-brand-cyan)"; // Cyan blue secondary accent
const CORAL_ACCENT = "var(--color-brand-coral)"; // Coral red primary accent

// ── Component ────────────────────────────────────────────────

export const ColorStrip = React.memo(function ColorStrip() {
  return (
    <div
      className="fixed top-0 left-0 flex flex-row h-full z-10 pointer-events-none"
      aria-hidden="true"
    >
      {/* Cyan stripe (left) - 20px wide */}
      <div className="w-5 h-full" style={{ backgroundColor: CYAN_ACCENT }} />
      {/* Coral red stripe (right) - 20px wide */}
      <div className="w-5 h-full" style={{ backgroundColor: CORAL_ACCENT }} />
    </div>
  );
});
