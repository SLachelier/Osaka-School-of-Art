/**
 * FacilitiesSection — Showcases the OSA campus with real photography.
 *
 * Highlights:
 * - Private desk booths for focused work
 * - Lounge area with manga and board game library
 * - 24-hour keycard access
 * - Traditional (pen & ink) and digital (iPad) equipment provided
 *
 * Location: Arles Tanimachi 4F-W, 6-4-6 Tanimachi, Chuo-ku, Osaka
 * — 1 min walk from Tanimachi 6-chome station
 */

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Monitor, BookOpen, Shield } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FACILITY_IMAGES } from "@/lib/constants";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animations";

// ─── Feature callouts ─────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Monitor,
    title: "Traditional & Digital",
    description:
      "Fully stocked for both pen-and-ink and iPad/Clip Studio Paint workflows.",
  },
  {
    icon: Shield,
    title: "Private Desk Booths",
    description:
      "Each student works in their own booth — privacy and focus are built into the space.",
  },
  {
    icon: BookOpen,
    title: "Manga Library & Lounge",
    description:
      "A collection of manga and board games in the lounge area for breaks and inspiration.",
  },
  {
    icon: Clock,
    title: "Flexible Learning Hours",
    description:
      "We're here to help you succeed with different class times available.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function FacilitiesSection() {
  return (
    <section
      id="facilities"
      className="relative py-24 bg-[var(--color-sumi-950)] lg:py-32 overflow-hidden"
    >
      {/* Top border rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-sumi-700)] to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Facilities"
          heading={
            <>
              Your Studio in{" "}
              <span className="text-[var(--color-akane-400)]">Osaka</span>
            </>
          }
          subheading="OSA's campus is located in Tanimachi, Osaka, one minute from Tanimachi 6-chome station. The classroom is equipped for both traditional and digital manga production, with amenities designed to let you focus on your art."
          className="mb-12"
        />

        {/* ── Photo grid ──────────────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {FACILITY_IMAGES.map((img, index) => (
            <motion.div
              key={img.src}
              variants={fadeUpVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className={`relative overflow-hidden rounded-md ${
                img.wide ? "col-span-2" : "col-span-1"
              } ${index === 0 ? "aspect-[16/7]" : "aspect-square"}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                loading="lazy"
                className="object-cover overflow-hidden bg-transparent"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Feature callout cards ────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUpVariants}
              className="flex flex-col gap-3 border-2 border-[var(--color-sumi-700)] bg-[var(--color-sumi-950)] p-5 hover:border-[var(--color-brand-cyan)] transition-colors duration-200"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[var(--color-akane-700)]/20 text-[var(--color-akane-400)]">
                <Icon size={18} />
              </div>
              <p className="font-semibold text-[var(--color-washi-100)] text-sm">
                {title}
              </p>
              <p className="text-xs text-[var(--color-washi-300)] leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Location note */}
        <motion.p
          className="mt-8 text-center text-xs text-[var(--color-sumi-600)] tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Arles Tanimachi 4F-W · 6-4-6 Tanimachi, Chuo-ku, Osaka 542-0012 · 1
          min from Tanimachi 6-chome · 10 min from Shinsaibashi
        </motion.p>
      </div>
    </section>
  );
}
