/**
 * HeroSection — Full-viewport opening section of the Osaka School of Art homepage.
 *
 * Design language:
 * - Deep ink-black background with a subtle radial glow in crimson (akane).
 * - Japanese kanji as a massive decorative background element.
 * - Staggered entrance animations on all text and CTA elements.
 * - Scroll-down indicator with an animated bounce arrow.
 * - Four founding-pillar badges instead of statistics (school is pre-launch).
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SpeedLines } from "@/components/ui/SpeedLines";
import { fadeUpVariants, staggerSlowContainerVariants } from "@/lib/animations";
import { ENROLL_HREF } from "@/lib/constants";

// ─── Component ────────────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[var(--color-sumi-950)]"
      aria-label="Welcome to Osaka School of Art"
    >
      {/* ── Background image with blur ────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "",
        }}
        aria-hidden="true"
      />

      {/* ── Dark overlay for text area ────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 1100px 3000px at center, rgba(0, 0, 0, 0.8), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <motion.div
        className="relative flex flex-1 flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-32 pb-16"
        variants={staggerSlowContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eye-brow label */}
        <motion.div
          variants={fadeUpVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-akane-700)]/60 bg-[var(--color-akane-700)]/10 px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-xs font-semibold tracking-widest uppercase text-white">
            Enrollment Starts Soon · Apply Now
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUpVariants}
          className="hero-heading max-w-4xl text-4xl font-display leading-[1.1] tracking-tight text-[var(--color-washi-50)] sm:text-5xl lg:text-7xl"
        >
          Learn to draw <span className="gradient-text">Manga</span>
          <br />
          in Osaka
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUpVariants}
          className="hero-subheading mt-6 max-w-2xl text-base text-[var(--color-washi-300)] sm:text-xl leading-relaxed "
        >
          World-class manga education in the heart of Osaka, Japan. Train under
          published Mangaka. Build your portfolio. Launch your career.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button href={ENROLL_HREF} size="lg">
            Apply for Enrollment
          </Button>
          <Button href="#programs" variant="ghost" size="lg">
            Explore Programs
          </Button>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────────────────────────── */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--color-sumi-600)] hover:text-[var(--color-washi-300)] transition-colors duration-200"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  );
}
