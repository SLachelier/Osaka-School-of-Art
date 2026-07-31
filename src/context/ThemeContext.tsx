/**
 * ThemeContext — Light / Dark mode state management for the Osaka School of Art.
 *
 * Strategy:
 * 1. A tiny inline script in <head> (see layout.tsx) reads localStorage and sets
 *    `data-theme` on <html> BEFORE the first paint, eliminating flash-of-unstyled-
 *    content (FOUC).
 * 2. This context reads that same value on mount and keeps React state in sync.
 * 3. Every toggle persists the selection to localStorage for subsequent visits.
 * 4. Falls back to the user's OS `prefers-color-scheme` when no stored value exists.
 *
 * Usage:
 *   const { theme, toggleTheme } = useTheme();
 */

"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type Theme = "dark" | "light";

interface ThemeContextValue {
  /** The currently active theme */
  theme: Theme;
  /** Toggle between 'dark' and 'light' */
  toggleTheme: () => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

// ─── localStorage key ─────────────────────────────────────────────────────────

const STORAGE_KEY = "osa-theme";

// ─── Provider ─────────────────────────────────────────────────────────────────

/**
 * ThemeProvider wraps the entire application and exposes the current theme
 * + toggle function to all descendants via context.
 *
 * The initial render always defaults to "dark" so the server-rendered HTML
 * stays consistent. The useEffect on mount then reads the real preference
 * (localStorage or OS default) and corrects it client-side. React's
 * `suppressHydrationWarning` on <html> suppresses the one-time mismatch
 * between the server attribute and the FOUC script's attribute.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Start with "dark" to match the server render; corrected immediately on mount.
  const [theme, setTheme] = useState<Theme>("dark");

  // ── Read real preference on mount ────────────────────────────────────────
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else {
      // No stored preference — check OS setting
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }

    // Enable CSS transitions only after the first paint so that the initial
    // theme application (from the FOUC script) never animates.
    const id = requestAnimationFrame(() => {
      document.documentElement.classList.add("theme-ready");
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // ── Apply theme attribute + persist whenever theme changes ───────────────
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * useTheme — convenience hook for consuming the theme context.
 * Must be used inside a <ThemeProvider>.
 */
export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
