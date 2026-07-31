/**
 * EnrollSection — Final call-to-action section that captures enrollment interest.
 *
 * Includes:
 * - Compelling headline and supporting copy
 * - An inline enquiry form (name, email, program of interest, message)
 * - Cohort info and deadline nudge
 * - Background uses a crimson gradient to signal action / urgency
 *
 * Form is client-side only for now; ready to wire to an API route or
 * a service like Resend, Formspree, etc.
 */

"use client";

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PROGRAMS } from "@/lib/constants";
import {
  fadeUpVariants,
  fadeLeftVariants,
  fadeRightVariants,
  staggerContainerVariants,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

// ─── Form state type ──────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  country: string;
  program: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  country: "",
  program: "",
  message: "",
};

// ─── Shared input class ───────────────────────────────────────────────────────

const inputClass = cn(
  "w-full rounded-lg border border-[var(--color-sumi-700)] bg-[var(--color-sumi-900)]",
  "px-4 py-3 text-sm text-[var(--color-washi-100)] placeholder-[var(--color-sumi-600)]",
  "focus:outline-none focus:ring-2 focus:ring-[var(--color-akane-500)] focus:border-transparent",
  "transition-colors duration-200",
);

// ─── Component ────────────────────────────────────────────────────────────────

export function EnrollSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /** Update a single form field */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /**
   * Handle form submission.
   * TODO: Replace the simulated delay with a real API call to your
   *       email service (e.g., `fetch("/api/enroll", { method: "POST", body: JSON.stringify(form) })`).
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network latency — remove when integrating a real endpoint
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="enroll"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--color-sumi-900) 0%, var(--color-sumi-950) 100%)",
      }}
    >
      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[var(--color-cyan-800)]/15 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left: info column */}
          <motion.div
            className="flex flex-col gap-8"
            variants={fadeLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-akane-400)]">
                Begin Your Journey
              </p>
              <h2 className="text-3xl font-bold leading-tight text-[var(--color-washi-50)] font-display sm:text-4xl lg:text-5xl">
                Ready to Become a{" "}
                <span className="text-[var(--color-akane-400)]">Mangaka?</span>
              </h2>
              <div className="h-px w-16 " />
              <p className="text-base text-[var(--color-washi-700)] leading-relaxed max-w-lg">
                Submit your interest form and our admissions team will reach out
                to discuss your portfolio, recommend the right program, and walk
                you through the cultural visa process.
              </p>
            </div>

            {/* Cohort info cards */}
            <motion.div
              className="flex flex-col gap-4"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: MapPin,
                  label: "Campus Location",
                  detail:
                    "Tanimachi, Chuo-ku, Osaka. 1 min from Tanimachi 6-chome station",
                },
                {
                  icon: CalendarDays,
                  label: "Cohorts",
                  detail:
                    "Intake assessed on a rolling basis. Contact us to discuss start dates.",
                },
              ].map(({ icon: Icon, label, detail }) => (
                <motion.div
                  key={label}
                  variants={fadeUpVariants}
                  className="flex items-start gap-4 rounded-xl border border-[var(--color-sumi-700)] bg-[var(--color-sumi-900)]/60 p-4 backdrop-blur-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-akane-700)]/20 text-[var(--color-akane-400)] flex-shrink-0">
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-washi-100)]">
                      {label}
                    </p>
                    <p className="text-xs text-[var(--color-washi-300)] mt-0.5">
                      {detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: form column */}
          <motion.div
            variants={fadeRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-[var(--color-sumi-700)] bg-[var(--color-sumi-900)]/80 p-8 backdrop-blur-md"
          >
            {submitted ? (
              /* ── Success state ──────────────────────────────────────────── */
              <motion.div
                className="flex flex-col items-center gap-4 py-12 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-5xl">🎌</span>
                <h3 className="text-2xl font-bold text-[var(--color-washi-50)] font-display">
                  Application Received!
                </h3>
                <p className="text-sm text-[var(--color-washi-300)] max-w-xs leading-relaxed">
                  Thank you, {form.name}. Our admissions team will be in touch
                  within 2 business days. We look forward to reviewing your
                  application.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm(INITIAL_FORM);
                  }}
                  className="text-sm text-[var(--color-akane-400)] hover:text-[var(--color-akane-300)] underline underline-offset-2 mt-2 cursor-pointer"
                >
                  Submit another enquiry
                </button>
              </motion.div>
            ) : (
              /* ── Form ───────────────────────────────────────────────────── */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                <h3 className="text-lg font-bold text-[var(--color-washi-50)] font-display">
                  Enrollment Enquiry
                </h3>

                {/* Name + Country row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="enroll-name"
                      className="text-xs font-semibold text-[var(--color-washi-200)]"
                    >
                      Full Name{" "}
                      <span className="text-[var(--color-akane-400)]">*</span>
                    </label>
                    <input
                      id="enroll-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      autoComplete="name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="enroll-country"
                      className="text-xs font-semibold text-[var(--color-washi-200)]"
                    >
                      Country of Origin
                    </label>
                    <input
                      id="enroll-country"
                      name="country"
                      type="text"
                      placeholder="e.g. United States"
                      value={form.country}
                      onChange={handleChange}
                      className={inputClass}
                      autoComplete="country-name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="enroll-email"
                    className="text-xs font-semibold text-[var(--color-washi-200)]"
                  >
                    Email Address{" "}
                    <span className="text-[var(--color-akane-400)]">*</span>
                  </label>
                  <input
                    id="enroll-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    autoComplete="email"
                  />
                </div>

                {/* Program select */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="enroll-program"
                    className="text-xs font-semibold text-[var(--color-washi-200)]"
                  >
                    Program of Interest{" "}
                    <span className="text-[var(--color-akane-400)]">*</span>
                  </label>
                  <select
                    id="enroll-program"
                    name="program"
                    required
                    value={form.program}
                    onChange={handleChange}
                    className={cn(inputClass, "cursor-pointer")}
                  >
                    <option value="" disabled>
                      Select a program…
                    </option>
                    {PROGRAMS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="enroll-message"
                    className="text-xs font-semibold text-[var(--color-washi-200)]"
                  >
                    Message / Questions{" "}
                    <span className="font-normal text-[var(--color-sumi-600)]">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="enroll-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your art background, goals, or any questions you have…"
                    value={form.message}
                    onChange={handleChange}
                    className={cn(inputClass, "resize-none")}
                  />
                </div>

                {/* Privacy notice */}
                <p className="text-[11px] text-[var(--color-sumi-600)] leading-relaxed">
                  By submitting this form you agree to our{" "}
                  <a
                    href="#"
                    className="underline hover:text-[var(--color-washi-300)] transition-colors"
                  >
                    Privacy Policy
                  </a>
                  . We will never share your information with third parties.
                </p>

                {/* Submit */}
                <Button
                  size="lg"
                  className="w-full"
                  disabled={loading}
                  onClick={() => {}}
                  variant="ghost"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                      Submitting…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 cursor-pointer">
                      <Send size={16} />
                      Submit Enquiry
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
