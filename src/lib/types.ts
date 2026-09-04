/**
 * Shared TypeScript types for the Osaka School of Art website.
 * All data shapes used across components are defined here to
 * enforce consistency and enable IDE auto-completion.
 */

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavItem {
  /** Display label shown in the navigation bar */
  label: string;
  /** Anchor href (e.g., "#programs") or full path (e.g., "/enroll") */
  href: string;
}

// ─── Programs / Courses ───────────────────────────────────────────────────────

export interface Program {
  /** Unique identifier used as a key and URL slug */
  id: string;
  /** Short display name of the program */
  title: string;
  /** One-sentence hook shown on the card */
  tagline: string;
  /** Full description shown in detail views */
  description: string;
  /** Duration string, e.g. "1 Year", "6 Months" */
  duration: string;
  /** Skill level requirement */
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  /** Emoji or icon identifier for the subject area */
  icon: string;
  /** Accent color class applied to the card border / badge */
  accentColor: string;
  /** Ordered list of topics or skills covered */
  topics: string[];
}

// ─── Faculty / Instructors ────────────────────────────────────────────────────

export interface Instructor {
  /** Full name of the instructor */
  name: string;
  /** Professional title / specialization */
  title: string;
  /** Short bio (1–2 sentences) */
  bio: string;
  /** Image path relative to /public or an external URL */
  imageSrc: string;
  /** Optional crop alignment for the instructor portrait */
  imagePosition?: "center" | "top";
  /** Notable works, publications, or achievements */
  highlights: string[];
  /** Optional portfolio download URL */
  portfolioUrl?: string;
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export interface Testimonial {
  /** Student's full name */
  name: string;
  /** Country or city of origin */
  origin: string;
  /** The testimonial quote text */
  quote: string;
  /** Profile image path */
  imageSrc: string;
  /** Numeric rating out of 5 */
  rating: number;
  /** Program the student completed */
  program: string;
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

export interface GalleryItem {
  /** Unique identifier */
  id: string;
  /** Image source path */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Creator's name */
  artist: string;
  /** Art category */
  category: string;
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export interface FAQItem {
  /** The question */
  question: string;
  /** The answer (can include simple HTML for links) */
  answer: string;
}

// ─── Stats ────────────────────────────────────────────────────────────────────

export interface Stat {
  /** Numeric value or formatted string, e.g. "500+" */
  value: string;
  /** What the number represents */
  label: string;
  /** Optional suffix appended to value */
  suffix?: string;
}
