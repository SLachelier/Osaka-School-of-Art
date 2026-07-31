/**
 * ScrollbarProgress — Dynamically updates scrollbar color based on scroll position.
 *
 * Transitions the scrollbar thumb color from coral red (top of page) to cyan blue
 * (bottom of page) as the user scrolls, providing visual feedback on reading progress.
 *
 * Implementation:
 * - Listens to scroll events with throttling for performance
 * - Calculates scroll percentage (0 = top, 100 = bottom)
 * - Interpolates RGB values between brand coral and brand cyan
 * - Updates CSS custom property --scrollbar-thumb-color on document root
 */

"use client";

import { useEffect } from "react";

// Brand colors (must match globals.css values)
const CORAL_RED = { r: 245, g: 85, b: 70 }; // #f55546
const CYAN_BLUE = { r: 104, g: 224, b: 255 }; // #68e0ff

/**
 * Linear interpolation between two values
 */
function lerp(start: number, end: number, progress: number): number {
  return start + (end - start) * progress;
}

/**
 * Convert RGB object to CSS rgb() string
 */
function rgbToString(r: number, g: number, b: number): string {
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

export function ScrollbarProgress() {
  useEffect(() => {
    let ticking = false;

    const updateScrollbarColor = () => {
      // Calculate scroll percentage (0 = top, 1 = bottom)
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

      // Interpolate between coral red and cyan blue
      const r = lerp(CORAL_RED.r, CYAN_BLUE.r, scrollPercent);
      const g = lerp(CORAL_RED.g, CYAN_BLUE.g, scrollPercent);
      const b = lerp(CORAL_RED.b, CYAN_BLUE.b, scrollPercent);

      // Update CSS custom property
      document.documentElement.style.setProperty(
        "--scrollbar-thumb-color",
        rgbToString(r, g, b),
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollbarColor);
        ticking = true;
      }
    };

    // Set initial color
    updateScrollbarColor();

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // This component doesn't render anything — it only manages the scroll effect
  return null;
}
