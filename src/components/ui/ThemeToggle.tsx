/**
 * ThemeToggle — Animated sun/moon button for switching between light and dark themes.
 *
 * - Sun icon indicates "switch to light mode" when dark theme is active.
 * - Moon icon indicates "switch to dark mode" when light theme is active.
 * - The icon swap uses a cross-fade + scale animation via Framer Motion's
 *   AnimatePresence so the transition feels tactile and premium.
 */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ThemeToggleProps {
  /** Additional class names on the wrapper button */
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "relative flex h-9 w-9 items-center cursor-pointer justify-center rounded-lg",
        "border border-[var(--color-sumi-700)] bg-[var(--color-sumi-900)]",
        "text-[var(--color-washi-300)] transition-colors duration-200",
        "hover:border-[var(--color-akane-600)] hover:text-[var(--color-washi-50)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-akane-500)]",
        className,
      )}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {/* AnimatePresence swaps the icon with a fade + scale cross-fade */}
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <Sun size={16} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <Moon size={16} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
