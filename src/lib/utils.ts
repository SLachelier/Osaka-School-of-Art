/**
 * Utility helpers for the Osaka School of Art website.
 * Shared logic for class merging and common formatting patterns.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names safely, resolving conflicts
 * using tailwind-merge and conditional classes via clsx.
 *
 * @example
 *   cn("px-4 py-2", isActive && "bg-akane-500", "text-sm")
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number with a locale-aware thousands separator.
 * @param n - The number to format
 */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}

/**
 * Clamps a value between a minimum and maximum.
 * Useful for constraining scroll-progress ratios.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
