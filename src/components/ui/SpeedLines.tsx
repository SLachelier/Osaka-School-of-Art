/**
 * SpeedLines — Decorative SVG component rendering manga-style radial speed lines.
 *
 * Classic manga technique: dense lines converging on a focal point create
 * a sense of motion, focus, or impact. Used as a section background decoration.
 *
 * Implementation is fully deterministic (no Math.random) so SSR and client
 * hydration always produce identical output — no hydration mismatch.
 */

"use client";

import React, { useMemo } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface SpeedLinesProps {
  /** Total number of speed lines to render (default: 96) */
  count?: number;
  /** Focal point X in 0–1000 coordinate space (default: 500 = center) */
  focalX?: number;
  /** Focal point Y in 0–1000 coordinate space (default: 420) */
  focalY?: number;
  /** SVG stroke color — accepts any CSS color or CSS custom property string */
  color?: string;
  /** Overall opacity of the line group (default: 0.10) */
  opacity?: number;
  /** Tailwind / CSS className applied to the `<svg>` element */
  className?: string;
}

// ─── Line generation ───────────────────────────────────────────────────────────

interface LineData {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  /** Stroke width for this individual line */
  sw: number;
}

/**
 * Builds an array of speed-line descriptors deterministically from an index.
 * Uses index-only arithmetic (no randomness) to ensure SSR/CSR parity.
 */
function buildLines(count: number, cx: number, cy: number): LineData[] {
  return Array.from({ length: count }, (_, i): LineData => {
    // Evenly distribute angles around 360°
    const baseAngle = (i / count) * Math.PI * 2;
    // Small deterministic angular jitter — prime-based to avoid patterns
    const jitter = (((i * 7) % 13) - 6) * 0.004;
    const angle = baseAngle + jitter;

    // Inner gap from the focal point (varies slightly so lines don't star-burst)
    const inner = 6 + ((i * 3) % 8) * 2; // range: 6–22

    // Outer extent — shorter lines mixed with longer ones for texture
    const outer = 820 - ((i * 11) % 19) * 18; // range: 476–820

    // Stroke weight: every 6th line is bold, every 4th is medium, rest thin
    const sw = i % 6 === 0 ? 1.6 : i % 4 === 0 ? 1.1 : 0.5;

    return {
      x1: cx + Math.cos(angle) * inner,
      y1: cy + Math.sin(angle) * inner,
      x2: cx + Math.cos(angle) * outer,
      y2: cy + Math.sin(angle) * outer,
      sw,
    };
  });
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SpeedLines({
  count = 96,
  focalX = 500,
  focalY = 420,
  color = "var(--speed-line-color)",
  opacity = 1,
  className = "",
}: SpeedLinesProps) {
  const lines = useMemo(
    () => buildLines(count, focalX, focalY),
    [count, focalX, focalY],
  );

  return (
    <svg
      viewBox="0 0 1000 1000"
      className={`w-full h-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke={color} opacity={opacity} fill="none">
        {lines.map((l, i) => (
          <line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            strokeWidth={l.sw}
          />
        ))}
      </g>
    </svg>
  );
}
