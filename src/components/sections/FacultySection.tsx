/**
 * FacultySection - Showcases the OSA founder and lead instructor.
 *
 * Until additional faculty are hired, this section presents Sean Ngo
 * in a prominent two-column layout (image left, bio right) rather than
 * a grid of cards, which would look sparse with a single entry.
 *
 * A "Join the Faculty" call-to-action invites prospective instructors
 * to get in touch, signalling that the teaching team is growing.
 */

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Mail } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { INSTRUCTORS } from "@/lib/constants";
import { fadeLeftVariants, fadeRightVariants } from "@/lib/animations";

// ── Component ─────────────────────────────────────────────────────────────────

export function FacultySection() {
  const founder = INSTRUCTORS[0];

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
          subheading="OSA is led by a working artist who has spent years studying both Eastern and Western art traditions, and who built this school to share everything he knows."
          className="mb-16"
        />

        {/* ── Founder card — two-column on desktop ─────────────────────────── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: image */}
          <motion.div
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
            variants={fadeLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative h-[480px] w-full overflow-hidden rounded-2xl border border-[var(--color-sumi-700)] bg-[var(--color-sumi-800)]">
              <Image
                src={founder.imageSrc}
                alt={`Portrait of ${founder.name}, Founder of Osaka School of Art`}
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
                  {founder.name}
                </p>
                <p className="text-sm text-[var(--color-akane-400)] mt-0.5 font-medium">
                  {founder.title}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: bio & highlights */}
          <motion.div
            className="flex flex-col gap-6"
            variants={fadeRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-base text-[var(--color-washi-300)] leading-relaxed">
              {founder.bio}
            </p>

            {/* Highlights */}
            <ul className="flex flex-col gap-3">
              {founder.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-sm text-[var(--color-washi-200)]"
                >
                  <CheckCircle2
                    size={16}
                    className="text-[var(--color-cyan-500)] shrink-0 mt-0.5"
                  />
                  {h}
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-[var(--color-akane-600)] to-transparent" />

            {/* Philosophy blurb */}
            <blockquote className="border-l-2 border-[var(--color-akane-500)] pl-5">
              <p className="text-base italic text-[var(--color-washi-200)] font-display leading-relaxed">
                &ldquo;Another quote here...add later. Place holder text will be
                filled here instead for now. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.&rdquo;
              </p>
            </blockquote>
          </motion.div>
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
