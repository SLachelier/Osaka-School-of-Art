/**
 * VisaSection — Explains OSA's study-abroad visa support for international students.
 *
 * Key facts (updated to reflect the real OSA offering):
 * - The visa is a Japanese Cultural Activities Visa (文化活動ビザ)
 * - Processing time: 1 to 3 months (one of Japan's fastest)
 * - Valid for 1 year, renewable up to 4 years total
 * - Guidance is fully included in the OSA admissions process at no extra cost
 *
 * Layout:
 * - Left column: how-it-works steps with step numbers
 * - Right column: highlight cards + Osaka location note
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plane, FileText, Home, Globe, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import {
  fadeLeftVariants,
  fadeRightVariants,
  staggerContainerVariants,
  fadeUpVariants,
} from "@/lib/animations";

// ─── Visa process steps ───────────────────────────────────────────────────────

const VISA_STEPS = [
  {
    step: "01",
    title: "Apply & Enroll",
    description:
      "Submit your enrollment application and receive your Letter of Acceptance from OSA.",
  },
  {
    step: "02",
    title: "Visa Guidance",
    description:
      "Our admissions team provides a complete document checklist and walks you through every form required for the Japanese Cultural Activities Visa.",
  },
  {
    step: "03",
    title: "Submit to Embassy",
    description:
      "File your application at the Japanese embassy or consulate in your home country. The cultural visa has one of Japan's fastest approval times: typically 1 to 3 months of processing.",
  },
  {
    step: "04",
    title: "Arrive in Osaka",
    description:
      "Land in Japan, begin your manga education, and start your life in Osaka. The visa is granted for 1 year and renewable up to 4 years: enough time to complete all three programs.",
  },
];

// ─── Life-in-Osaka highlights ─────────────────────────────────────────────────

const OSAKA_HIGHLIGHTS = [
  {
    icon: Globe,
    title: "Tanimachi Campus",
    description:
      "One minute from Tanimachi 6-chome station, 10 minutes from Shinsaibashi, and one stop from Osaka Castle Park.",
  },
  {
    icon: Home,
    title: "Housing Support",
    description:
      "Our admissions team can guide you toward student housing options near the school to make your arrival in Japan as smooth as possible.",
  },
  {
    icon: FileText,
    title: "Visa Guidance Included",
    description:
      "Full cultural visa application guidance is built into the OSA admissions process. Visa legal fees are factored into your annual tuition.",
  },
  {
    icon: Plane,
    title: "Students from Any Country",
    description:
      "OSA welcomes students worldwide. Our team has experience supporting applications for students from many different countries.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function VisaSection() {
  return (
    <section
      id="visa"
      className="relative py-24 bg-[var(--color-sumi-950)] lg:py-32 overflow-hidden"
    >
      {/* Decorative glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-cyan-600)]/8 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Study Abroad in Japan"
          heading={
            <>
              Your Art Education.{" "}
              <span className="text-[var(--color-akane-400)]">
                Your Japanese Visa.
              </span>
            </>
          }
          subheading="Enrolling in OSA makes you eligible for a Japanese Cultural Activities Visa, one of the fastest visas to obtain in Japan, with 1 to 3 months of processing time. The visa is granted for 1 year and renewable up to 4 years total."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: visa steps */}
          <motion.div
            className="flex flex-col rounded-md gap-8"
            variants={fadeLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-lg font-bold text-[var(--color-washi-50)] font-display">
              How It Works
            </h3>

            {/* Step list */}
            <ol className="relative flex flex-col gap-0">
              {VISA_STEPS.map((item, index) => (
                <li
                  key={item.step}
                  className="relative flex gap-5 pb-8 last:pb-0"
                >
                  {/* Vertical connector line */}
                  {index < VISA_STEPS.length - 1 && (
                    <div
                      className="absolute left-[18px] top-10 bottom-0 w-px bg-[var(--color-sumi-700)]"
                      aria-hidden="true"
                    />
                  )}

                  {/* Step number bubble */}
                  <div className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-akane-600)] bg-[var(--color-akane-700)]/20 text-xs font-bold text-[var(--color-akane-400)]">
                    {item.step}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1 pt-1">
                    <p className="font-semibold text-[var(--color-washi-100)]">
                      {item.title}
                    </p>
                    <p className="text-sm text-[var(--color-washi-300)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Reassurance note */}
            <div className="flex items-start gap-3 rounded-xl border border-[var(--color-cyan-600)]/40 bg-[var(--color-cyan-700)]/10 p-4">
              <CheckCircle2
                size={16}
                className="text-[var(--color-cyan-500)] shrink-0 mt-0.5"
              />
              <p className="text-sm text-[var(--color-washi-300)] leading-relaxed">
                <strong className="text-[var(--color-washi-100)]">
                  No Japanese required.
                </strong>{" "}
                All programs are taught entirely in English. Visa guidance is
                provided in English. For full visa requirements, see the{" "}
                <a
                  href="https://eng.daikou-office.com/list/culturalactivities/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[var(--color-akane-400)] hover:text-[var(--color-akane-300)] transition-colors"
                >
                  official requirements page
                </a>
                .
              </p>
            </div>

            <Button href="#enroll" size="md" className="w-fit" variant="ghost">
              Start Your Application
            </Button>
          </motion.div>

          {/* Right: Osaka highlights grid */}
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {OSAKA_HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUpVariants}
                className="group flex flex-col gap-3 rounded-md border border-[var(--color-sumi-700)] bg-[var(--color-sumi-900)] p-5 transition-all duration-300 hover:border-[var(--color-akane-600)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-akane-700)]/20 text-[var(--color-akane-400)] group-hover:bg-[var(--color-akane-700)]/30 transition-colors duration-200">
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

            {/* Osaka/Japan image from the real OSA site */}
            <motion.div
              variants={fadeUpVariants}
              className="sm:col-span-2 relative h-48 overflow-hidden border border-[var(--color-sumi-700)] bg-[var(--color-sumi-800)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="OSA-building-outside-1.jpg"
                alt="Outside of the OSA building in Osaka, Japan"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-end justify-end p-4">
                <span className="tracking-[0.25em] uppercase text-[var(--color-washi-900)] text-md">
                  Osaka, Japan
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
