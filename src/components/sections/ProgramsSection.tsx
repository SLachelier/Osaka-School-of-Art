/**
 * ProgramsSection — Showcase of the three OSA programs with real photography.
 *
 * OSA's instructor assesses each applicant's portfolio and places them in:
 *   Program A (Beginner), Program B (Intermediate), or Program C (Advanced).
 * Students can progress through all three during a 4-year cultural visa.
 *
 * Layout:
 * - A → B → C progression indicator
 * - Three large cards (each with a real photo, description, and topic list)
 * - Japanese Language Learning highlighted as an add-on course below
 */

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PROGRAMS, ENROLL_HREF } from "@/lib/constants";
import type { Program } from "@/lib/types";
import {
  staggerContainerVariants,
  fadeUpVariants,
  fadeLeftVariants,
  fadeRightVariants,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

// ─── Real program photography (one image per program tier) ───────────────────

const PROGRAM_IMAGES: Record<string, string> = {
  "program-a":
    "https://static.wixstatic.com/media/e668a5_a87a450b8f524274a3fb93df3fc71016~mv2.jpg",
  "program-b":
    "https://static.wixstatic.com/media/e668a5_760980c9acf242d19ea812260fab9ef6~mv2.jpg",
  "program-c":
    "https://static.wixstatic.com/media/e668a5_b34c81cb35ea4e67a5dad3223b5d4b75~mv2.jpg",
};

// ─── Level badge colours ──────────────────────────────────────────────────────

const LEVEL_STYLES: Record<Program["level"], string> = {
  Beginner: "bg-emerald-900/40 text-emerald-400 border border-emerald-800/60",
  Intermediate: "bg-blue-900/40 text-blue-400 border border-blue-800/60",
  Advanced:
    "bg-[var(--color-akane-700)]/40 text-[var(--color-akane-300)] border border-[var(--color-akane-800)]/60",
  "All Levels":
    "bg-[var(--color-cyan-700)]/30 text-[var(--color-cyan-400)] border border-[var(--color-cyan-700)]/50",
};

// ─── Program Card ─────────────────────────────────────────────────────────────

function ProgramCard({ program }: { program: Program }) {
  const imgSrc = PROGRAM_IMAGES[program.id];
  const letterLabel = program.title.replace("Program ", "");

  return (
    <motion.article
      variants={fadeUpVariants}
      className={cn(
        "group flex flex-col border-2 rounded-md bg-(--color-sumi-900) overflow-hidden transition-all duration-300",
        "border-(--color-sumi-700) hover:border-(--color-akane-600)",
        "hover:shadow-xl hover:shadow-(--color-sumi-950)/50",
      )}
    >
      {/* Photo header — real OSA classroom photography */}
      <div className="relative h-56 overflow-hidden bg-(--color-sumi-800)">
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={`${program.title} — ${program.tagline}`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            loading="lazy"
          />
        )}
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-(--color-sumi-900) via-transparent to-transparent" />
        {/* Decorative top accent line — appears on hover */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-(--color-akane-600) to-(--color-cyan-500) opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Program letter badge — large, decorative */}
        <div className="absolute bottom-4 left-5 flex items-end gap-3">
          <span className="font-display font-black text-5xl leading-none text-washi-50/90">
            {letterLabel}
          </span>
          <span
            className={cn(
              "mb-1 text-xs font-medium px-2 py-0.5",
              LEVEL_STYLES[program.level],
            )}
          >
            {program.level}
          </span>
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div>
          <h3 className="text-lg font-bold text-(--color-washi-50) font-display">
            {program.title}
          </h3>
          <p className="mt-1 text-sm text-(--color-akane-300) italic">
            {program.tagline}
          </p>
        </div>

        <p className="text-sm text-(--color-washi-300) leading-relaxed flex-1">
          {program.description}
        </p>

        {/* Topics list */}
        <ul className="flex flex-col gap-1.5">
          {program.topics.map((topic) => (
            <li
              key={topic}
              className="flex items-start gap-2 text-xs text-(--color-washi-300)"
            >
              <Check
                size={12}
                className="text-(--color-akane-400) shrink-0 mt-0.5"
              />
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer CTA */}
      <div className="border-t-2 border-(--color-sumi-700) px-6 py-4">
        <Button
          href={ENROLL_HREF}
          variant="secondary"
          size="sm"
          className="w-full"
        >
          Apply for Program {letterLabel}
        </Button>
      </div>
    </motion.article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function ProgramsSection() {
  return (
    <section
      id="programs"
      className="relative py-24 bg-[var(--color-sumi-950)] lg:py-32"
    >
      {/* Screentone halftone dot pattern — classic manga shading texture */}
      <div
        className="absolute inset-0 screentone opacity-[0.05] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Programs"
          heading={
            <>
              One School.{" "}
              <span className="text-(--color-akane-400)">Three Paths.</span>
            </>
          }
          subheading="Our instructor reviews your portfolio and places you in the program that fits you best. The cultural visa is granted for 1 year and renewable up to 4 years — enough time to go from complete beginner to professional debut."
          className="mb-10"
        />

        {/* A → B → C progression indicator */}
        <motion.div
          className="mb-12 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {["A — Foundation", "B — Craft", "C — Industry"].map((label, i) => (
            <React.Fragment key={label}>
              <span className="text-xs font-bold tracking-wide text-(--color-washi-300) px-3 py-1.5 border border-(--color-sumi-700) bg-(--color-sumi-900)">
                {label}
              </span>
              {i < 2 && (
                <ArrowRight
                  size={14}
                  className="text-(--color-akane-600) shrink-0"
                />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Program cards grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </motion.div>

        {/* ── Japanese Language Learning add-on ─────────────────────────── */}
        <motion.div
          className="mt-8 grid grid-cols-1 lg:grid-cols-2 rounded-md gap-6 items-center border-2 border-(--color-sumi-700) bg-(--color-sumi-900) overflow-hidden"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Photo */}
          <motion.div
            className="relative h-56 lg:h-full min-h-[220px] overflow-hidden"
            variants={fadeLeftVariants}
          >
            <Image
              src="https://static.wixstatic.com/media/e668a5_ae146a49c3474f328af287504ccbc97d~mv2.jpg"
              alt="Japanese language class at OSA"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-transparent to-(--color-sumi-900) hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex flex-col gap-4 p-6 lg:pl-2 lg:pr-8 lg:py-8"
            variants={fadeRightVariants}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-(--color-cyan-500)">
                Add-On Course
              </span>
              <div className="h-px flex-1 bg-(--color-sumi-700)" />
            </div>
            <h3 className="text-xl font-bold text-(--color-washi-50) font-display">
              Japanese Language Learning
            </h3>
            <p className="text-sm text-(--color-washi-300) leading-relaxed">
              Once a week you will meet with our Japanese language teacher and
              begin your language journey. As with our drawing programs, the
              instructor adjusts to your current fluency level and helps you
              reach your personal language goals; whether that&apos;s navigating
              daily life in Osaka or reading manga in its original language.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-(--color-washi-300) border border-(--color-sumi-700) px-3 py-1.5">
                Once weekly · All fluency levels
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-(--color-washi-300) mb-4">
            Not sure which program is right for you?
          </p>
          <Button href={ENROLL_HREF} size="lg" variant="ghost">
            Submit Your Portfolio for Assessment
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
