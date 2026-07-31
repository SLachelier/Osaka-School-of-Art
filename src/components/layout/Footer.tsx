/**
 * Footer — Site-wide footer for the Osaka School of Art.
 *
 * Contains:
 * - Brand column with logo, tagline, and social links
 * - Quick navigation links
 * - Programs links
 * - Contact information
 * - Legal row with copyright and policy links
 */

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, Camera, PlayCircle, AtSign } from "lucide-react";
import {
  SITE_NAME,
  SITE_TAGLINE,
  NAV_ITEMS,
  CONTACT_EMAIL,
  CONTACT_ADDRESS_EN,
} from "@/lib/constants";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animations";

// ─── Social link data ─────────────────────────────────────────────────────────
// Note: lucide-react v1.x removed branded social icons.
// Camera → Instagram, PlayCircle → YouTube, AtSign → X/Twitter.

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Camera,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: PlayCircle,
  },
  {
    label: "X / Twitter",
    href: "https://x.com",
    icon: AtSign,
  },
];

// ─── Programs quick-links ─────────────────────────────────────────────────────

const PROGRAM_LINKS = [
  { label: "Program A: Foundation", href: "#programs" },
  { label: "Program B: Craft", href: "#programs" },
  { label: "Program C: Industry", href: "#programs" },
  { label: "Japanese Language", href: "#programs" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--color-sumi-900)] border-t border-[var(--color-sumi-700)]">
      {/* Decorative top gradient stripe */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-akane-600)] to-transparent" />

      {/* Main footer grid */}
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* ── Column 1: Brand ─────────────────────────────────────────────── */}
        <motion.div variants={fadeUpVariants} className="flex flex-col gap-5">
          <div>
            <Image
              src="https://static.wixstatic.com/media/e668a5_da0a13d9ff4c4e48bcbaba8da3992fd0~mv2.png"
              alt="Osaka School of Art"
              width={180}
              height={46}
              className="osa-logo-img h-9 w-auto object-contain mb-3"
              loading="lazy"
            />
            <p className="text-xs text-[var(--color-cyan-500)] tracking-widest">
              {SITE_TAGLINE}
            </p>
          </div>
          <p className="text-sm text-[var(--color-washi-300)] leading-relaxed max-w-xs">
            Educating the next generation of Mangaka from Osaka, Japan.
            World-class instruction in the art of manga storytelling.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--color-washi-300)] hover:text-[var(--color-akane-400)] transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Column 2: Navigation ────────────────────────────────────────── */}
        <motion.div variants={fadeUpVariants} className="flex flex-col gap-4">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-akane-400)]">
            Navigate
          </p>
          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[var(--color-washi-300)] hover:text-[var(--color-washi-50)] transition-colors duration-150"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#enroll"
                className="text-sm text-[var(--color-akane-400)] hover:text-[var(--color-akane-300)] transition-colors duration-150 font-semibold"
              >
                Enroll Now →
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* ── Column 3: Programs ──────────────────────────────────────────── */}
        <motion.div variants={fadeUpVariants} className="flex flex-col gap-4">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-akane-400)]">
            Programs
          </p>
          <ul className="flex flex-col gap-2">
            {PROGRAM_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--color-washi-300)] hover:text-[var(--color-washi-50)] transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Column 4: Contact ───────────────────────────────────────────── */}
        <motion.div variants={fadeUpVariants} className="flex flex-col gap-4">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-akane-400)]">
            Contact
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2.5 text-sm text-[var(--color-washi-300)]">
              <MapPin
                size={15}
                className="mt-0.5 shrink-0 text-[var(--color-cyan-500)]"
              />
              <span>{CONTACT_ADDRESS_EN}</span>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2.5 text-sm text-[var(--color-washi-300)] hover:text-[var(--color-washi-50)] transition-colors duration-150"
              >
                <Mail
                  size={15}
                  className="shrink-0 text-[var(--color-cyan-500)]"
                />
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Legal / Bottom bar */}
      <div className="border-t border-[var(--color-sumi-700)] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--color-sumi-600)]">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(
              (label) => (
                <Link
                  key={label}
                  href="#"
                  className="text-xs text-[var(--color-sumi-600)] hover:text-[var(--color-washi-300)] transition-colors duration-150"
                >
                  {label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
