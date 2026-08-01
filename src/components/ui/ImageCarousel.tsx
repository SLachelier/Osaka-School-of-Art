/**
 * ImageCarousel — Slideshow for the About section's right column.
 *
 * Drop real images into the SLIDES array below (each needs src + alt).
 * Until then it renders numbered placeholder panels so the layout,
 * spacing, and motion can be reviewed before assets are ready.
 */

"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

// ─── Slide data ─────────────────────────────────────────────────────────────
// Replace placeholder entries with real images later, e.g.:
// { src: "/public/DSCF6631.JPG", alt: "Student inking a manga panel at OSA" }

type Slide = {
  src: string | null;
  alt: string;
};

const SLIDES: Slide[] = [
  { src: "/osa-door-closeup.jpg", alt: "OSA front door" },
  { src: "/instruction.jpg", alt: "Instructor giving a lesson" },
  { src: "/student-progress.jpg", alt: "Student progress" },
  { src: "/student-with-work.jpg", alt: "Student with their work" },
  { src: "/instruction2.jpg", alt: "Instructor giving a lesson" },
  { src: "/OSA-manga-shelf.jpg", alt: "Manga shelves at OSA" },
  { src: "/osa-sign.jpg", alt: "OSA directory sign" },
  { src: "/building-hallway.jpg", alt: "OSA building hallway" },
];

const AUTO_ADVANCE_MS = 6000;

// ─── Component ────────────────────────────────────────────────────────────────

export function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = SLIDES.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((curr) => (curr + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, total]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  const slide = SLIDES[index];

  return (
    <div
      className="relative h-[560px] w-full select-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="OSA photo gallery"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Frame */}
      <div className="relative h-full w-full overflow-hidden rounded-md border-2 border-[var(--color-sumi-700)] bg-[var(--color-sumi-900)]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 48 : -48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -48 : 48 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {slide.src ? (
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[var(--color-sumi-900)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-akane-700)]/15 text-[var(--color-akane-400)]">
                  <ImageIcon size={24} />
                </div>
                <p className="text-sm text-[var(--color-washi-400)]">
                  {slide.alt}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Top + bottom gradient for legibility once real photos are in */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-sumi-950)]/50 via-transparent to-transparent" />

        {/* Prev / Next controls */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-sumi-950)]/60 text-[var(--color-washi-100)] backdrop-blur-sm transition-colors duration-200 hover:bg-[var(--color-akane-700)]/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-akane-400)]"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-sumi-950)]/60 text-[var(--color-washi-100)] backdrop-blur-sm transition-colors duration-200 hover:bg-[var(--color-akane-700)]/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-akane-400)]"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i, i > index ? 1 : -1)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-akane-400)] ${
                i === index
                  ? "w-6 bg-[var(--color-akane-400)]"
                  : "w-1.5 bg-[var(--color-washi-100)]/40 hover:bg-[var(--color-washi-100)]/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Accent corner mark, echoes the akane brand color used elsewhere */}
    </div>
  );
}
