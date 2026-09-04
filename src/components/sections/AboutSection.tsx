/**
 * AboutSection — Introduces the Osaka School of Art's mission,
 * history, and the OSA experience to prospective students.
 *
 * Layout: Two-column on desktop — text left, decorative right.
 * Includes a set of value-proposition cards that animate in on scroll.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Globe, Award } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import {
  fadeLeftVariants,
  fadeRightVariants,
  staggerContainerVariants,
  fadeUpVariants,
} from "@/lib/animations";

// ─── Value cards data ─────────────────────────────────────────────────────────

const VALUES = [
  {
    icon: BookOpen,
    title: "Master the Craft",
    description:
      "Rigorous, structured training from fundamental inking to full chapter production, designed and taught by a working artist.",
  },
  {
    icon: Users,
    title: "A Global Community",
    description:
      "A studio built for artists from every corner of the world, learning side-by-side in the heart of Osaka.",
  },
  {
    icon: Globe,
    title: "Study Abroad in Japan",
    description:
      "Enrollment in a qualifying program supports your Japanese Student Visa application, making your creative journey a full cultural immersion.",
  },
  {
    icon: Award,
    title: "Real-World Curriculum",
    description:
      "Every lesson is built on professional practice: the same techniques, tools, and workflow used by working Mangaka today.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-[var(--color-sumi-950)] lg:py-32 overflow-hidden"
    >
      {/* Background accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-sumi-700)] to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Top two-column layout ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10 lg:items-center">
          {/* Left: text content */}
          <motion.div
            className="flex flex-col gap-6"
            variants={fadeLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-akane-400)]">
              Our Story
            </p>
            <h2 className="text-3xl font-bold leading-tight text-[var(--color-washi-50)] font-display sm:text-4xl lg:text-5xl">
              A School Built{" "}
              <span className="text-[var(--color-akane-400)]">by Artists</span>
              <br />
              for Artists
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-[var(--color-akane-500)] to-[var(--color-cyan-500)]" />

            <p className="text-base text-[var(--color-washi-300)] leading-relaxed">
              The Osaka School of Arts is the first of its kind, offering a
              manga teaching program primarily focused on allowing foreign
              students to learn directly from a professional mangaka in Japan.
              Our school is located one minute away from Tanimachi 6-Chome and
              15 minutes from Shinsaibashi, and is one stop away from Osaka
              Castle. Through our school, you can have the unique experience of
              living and learning in Japan.
            </p>
            <p className="text-base text-[var(--color-washi-300)] leading-relaxed">
              Even if you have zero knowledge of drawing, our ABC program can
              take you from nothing to hopefully publishing your work as a real
              mangaka! The goal of our school is to make your dream of becoming
              a mangaka come true! Come join a community of like-minded artists
              and begin your life in Japan. Our school even offers a Japanese
              language learning course. We will assist you in every step to
              ensure that your stay in Japan is a smooth and successful process.
            </p>

            {/* Founder quote — styled as a speech bubble */}
            <div className="speech-bubble mt-2 bg-[var(--color-sumi-900)]">
              <p className="text-base italic text-[var(--color-washi-200)] font-display leading-relaxed">
                &ldquo;I built OSA because I wanted to create a place where
                artists could learn and grow together while experiencing all
                that Japan has to offer.&rdquo;
              </p>
              <p className="mt-3 text-sm text-[var(--color-cyan-500)]">
                — Sean Ngo, Founder
              </p>
            </div>
          </motion.div>

          {/* Right: image carousel — placeholder slides until photos are added */}
          <motion.div
            className="hidden lg:block"
            variants={fadeRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ImageCarousel />
          </motion.div>
        </div>

        {/* ── Value proposition cards ──────────────────────────────────────── */}
        <motion.div
          className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {VALUES.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUpVariants}
              className="group relative flex flex-col gap-4 rounded-xl border border-[var(--color-sumi-700)] bg-[var(--color-sumi-900)] p-6 transition-all duration-300 hover:border-[var(--color-akane-600)] hover:shadow-lg hover:shadow-akane-900/20"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-akane-700)]/20 text-[var(--color-akane-400)] group-hover:bg-[var(--color-akane-700)]/30 transition-colors duration-200">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-[var(--color-washi-100)]">
                {title}
              </h3>
              <p className="text-sm text-[var(--color-washi-300)] leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
