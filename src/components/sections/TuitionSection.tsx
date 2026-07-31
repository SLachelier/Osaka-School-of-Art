/**
 * TuitionSection — Transparent pricing breakdown for the OSA program.
 *
 * Real figures from OSA:
 *   - ~$6,000 USD/year  (€5,000 EUR for EU students)
 *   - ~$1,200 of that covers visa legal-processing fees
 *   - Students must also demonstrate 1-year savings to Japanese immigration
 *
 * The 4-year cultural visa makes OSA an exceptional value compared to
 * traditional art school degrees.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { DollarSign, FileCheck, PiggyBank, CalendarDays } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ENROLL_HREF } from "@/lib/constants";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animations";

// ─── Pricing breakdown cards ──────────────────────────────────────────────────

const BREAKDOWN = [
  {
    icon: DollarSign,
    title: "Annual Tuition",
    usd: "~$6,000",
    eur: "~€5,000",
    note: "Per year of study. EU students pay in EUR at the rate above.",
  },
  {
    icon: FileCheck,
    title: "Visa Legal Fees",
    usd: "~$1,200",
    eur: "Included",
    note: "Approximately $1,200 of your tuition covers official visa processing and legal documentation fees.",
  },
  {
    icon: PiggyBank,
    title: "Proof of Savings",
    usd: "1-Year Living Costs",
    eur: "Required",
    note: "Japanese immigration requires you to demonstrate sufficient savings to support yourself in Japan for at least one year. The exact amount varies by currency.",
  },
  {
    icon: CalendarDays,
    title: "Visa Duration",
    usd: "Up to 4 Years",
    eur: "Cultural Visa",
    note: "The cultural activities visa can be renewed for up to 4 years, enough time to complete all three programs and pursue your debut.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function TuitionSection() {
  return (
    <section
      id="tuition"
      className="relative py-24 bg-[var(--color-sumi-950)] lg:py-32 overflow-hidden"
    >
      {/* Screentone texture */}
      <div
        className="absolute inset-0 screentone opacity-[0.04] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tuition & Fees"
          heading={
            <>
              Transparent{" "}
              <span className="text-[var(--color-akane-400)]">Pricing</span>
            </>
          }
          subheading="No hidden fees. Approximately $6,000 USD per year covers your instruction, facility access, and visa legal processing: everything you need to study manga in Osaka."
          className="mb-14"
        />

        {/* Pricing breakdown grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {BREAKDOWN.map(({ icon: Icon, title, usd, eur, note }) => (
            <motion.div
              key={title}
              variants={fadeUpVariants}
              className="group flex flex-col gap-4 border-2 border-[var(--color-sumi-700)] bg-[var(--color-sumi-900)] p-6 hover:border-[var(--color-akane-600)] transition-colors duration-200"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[var(--color-akane-700)]/20 text-[var(--color-akane-400)] group-hover:bg-[var(--color-akane-700)]/30 transition-colors duration-200">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-akane-400)] mb-1">
                  {title}
                </p>
                <p className="text-2xl font-display font-black text-[var(--color-washi-50)] leading-none">
                  {usd}
                </p>
                {eur !== "Included" &&
                eur !== "Required" &&
                eur !== "Cultural Visa" ? (
                  <p className="text-sm text-[var(--color-cyan-500)] mt-1">
                    {eur} for EU students
                  </p>
                ) : (
                  <p className="text-sm text-[var(--color-washi-300)] mt-1">
                    {eur}
                  </p>
                )}
              </div>
              <p className="text-xs text-[var(--color-washi-300)] leading-relaxed flex-1">
                {note}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Callout note */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="max-w-2xl text-sm text-[var(--color-washi-300)] leading-relaxed">
            All requirements met? You can start your journey in Japan. Our
            admissions team will walk you through every financial and legal step
            of the process — so you can focus on your art.
          </p>
          <Button href={ENROLL_HREF} size="lg">
            Apply Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
