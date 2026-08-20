/**
 * FacultySection - Showcases the OSA teaching team.
 *
 * Displays all faculty members in a responsive grid layout, with each
 * member's portrait, name, title, bio, and highlights. For instructors
 * with a portfolio URL (like the manga instructor), a download link is
 * prominently displayed.
 *
 * A "Join the Faculty" call-to-action invites prospective instructors
 * to get in touch, signalling that the teaching team is growing.
 */

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Download } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { INSTRUCTORS } from "@/lib/constants";
import { fadeLeftVariants, fadeRightVariants } from "@/lib/animations";

// ── Component ─────────────────────────────────────────────────────────────────

export function FacultySection() {
  return (
    <section
      id="faculty"
      className="relative py-24 bg-[var(--color-sumi-950)] lg:py-32"
    >
      {/* Decorative top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-sumi-700)] to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Faculty"
          heading={
            <>
              Instruction Rooted in{" "}
              <span className="text-[var(--color-akane-400)]">
                Real Practice
              </span>
            </>
          }
          subheading=""
          className="mb-16"
        />

        {/* ── Faculty grid ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {INSTRUCTORS.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              className="flex flex-col gap-6"
              variants={index % 2 === 0 ? fadeLeftVariants : fadeRightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Image card */}
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border border-[var(--color-sumi-700)] bg-[var(--color-sumi-800)]">
                <Image
                  src={instructor.imageSrc}
                  alt={`Portrait of ${instructor.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-sumi-950)]/60 to-transparent" />

                {/* Name badge overlaid on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-2xl font-bold text-[var(--color-washi-50)] font-display">
                    {instructor.name}
                  </p>
                  <p className="text-sm text-[var(--color-akane-400)] mt-0.5 font-medium">
                    {instructor.title}
                  </p>
                </div>
              </div>

              {/* Bio & highlights */}
              <div className="flex flex-col gap-4">
                <p className="text-base text-[var(--color-washi-300)] leading-relaxed">
                  {instructor.bio}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2">
                  {instructor.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm text-[var(--color-washi-200)]"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[var(--color-cyan-500)] shrink-0 mt-0.5"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Portfolio download button (if available) */}
                {instructor.portfolioUrl && (
                  <div className="mt-2">
                    <Button
                      href={instructor.portfolioUrl}
                      variant="secondary"
                      size="sm"
                      external
                    >
                      <Download size={15} />
                      Download Portfolio
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Join the faculty CTA ─────────────────────────────────────────── */}
        <motion.div
          className="mt-20 text-center flex flex-col items-center gap-4 rounded-2xl border border-dashed border-[var(--color-sumi-700)] bg-[var(--color-sumi-950)]/60 py-12 px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-akane-400)]">
            Grow With Us
          </p>
          <h3 className="text-xl font-bold text-[var(--color-washi-50)] font-display max-w-lg">
            Are you an experienced Mangaka or manga educator?
          </h3>
          <p className="text-sm text-[var(--color-washi-300)] max-w-md leading-relaxed">
            OSA&apos;s teaching team is expanding. If you are a working
            professional with a passion for teaching, we&apos;d love to hear
            from you.
          </p>
          <Button
            href="mailto:faculty@osakamanga.jp"
            variant="secondary"
            external
            size="md"
          >
            <Mail size={15} />
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
