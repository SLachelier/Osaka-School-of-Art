/**
 * FAQSection — Frequently Asked Questions displayed as an animated accordion.
 *
 * Each item expands smoothly via Framer Motion height animation.
 * Only one item can be open at a time (single-select accordion behaviour).
 */

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQ_ITEMS } from "@/lib/constants";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animations";

// ─── Single FAQ item ──────────────────────────────────────────────────────────

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className="border border-[var(--color-sumi-700)] rounded-md overflow-hidden bg-[var(--color-sumi-900)] transition-colors duration-200 hover:border-[var(--color-sumi-600)]"
    >
      {/* Question button */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer "
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span
          className={`text-sm font-semibold leading-snug transition-colors duration-200 ${
            isOpen
              ? "text-[var(--color-washi-50)]"
              : "text-[var(--color-washi-200)]"
          }`}
        >
          {question}
        </span>
        <span
          className={`flex-shrink-0 rounded-full p-1 transition-colors duration-200 ${
            isOpen
              ? "bg-[var(--color-akane-600)] text-[var(--color-washi-50)]"
              : "bg-[var(--color-sumi-700)] text-[var(--color-washi-300)]"
          }`}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      {/* Answer — animated expand / collapse */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-[var(--color-sumi-700)] px-6 py-4">
              <p className="text-sm text-[var(--color-washi-300)] leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative py-24 bg-[var(--color-sumi-950)] lg:py-32"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          heading={
            <>
              Questions?{" "}
              <span className="text-[var(--color-akane-400)]">
                We Have Answers.
              </span>
            </>
          }
          subheading="Everything you need to know before applying to the Osaka School of Art."
          className="mb-12"
        />

        <motion.div
          className="flex flex-col gap-3"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom contact nudge */}
        <motion.p
          className="mt-10 text-center text-sm text-[var(--color-washi-300)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Still have questions?{" "}
          <a
            href="mailto:admissions@osakamanga.jp"
            className="text-[var(--color-akane-400)] hover:text-[var(--color-akane-300)] underline underline-offset-2 transition-colors"
          >
            Email our admissions team
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
