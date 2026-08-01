/**
 * Navbar — Fixed top navigation bar for the Osaka School of Art.
 *
 * Behaviour:
 * - Transparent on page-top; gains a frosted-glass dark background on scroll.
 * - Smooth entrance animation on mount via Framer Motion.
 * - Mobile: collapsible hamburger menu with an animated slide-down panel.
 * - Desktop: horizontal link list with an animated underline on hover/active.
 * - "Enroll Now" CTA button always visible on the right.
 */

"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, ENROLL_HREF } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

// ─── Animation variants ───────────────────────────────────────────────────────

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

const navbarVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function Navbar() {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // ── Scroll listener — darken background after 60px ──────────────────────
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ── Intersection Observer — track active section ─────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ── Close mobile menu on resize to desktop ────────────────────────────────
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "navbar-scrolled bg-[var(--color-sumi-950)]/90 backdrop-blur-md border-b border-[var(--color-sumi-800)] shadow-lg"
          : "navbar-transparent bg-transparent",
      )}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* ── Logo ────────────────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Osaka School of Art — Home"
          >
            <Image
              src={
                theme === "dark" ? "/osa-logo-dark.png" : "/osa-logo-light.png"
              }
              alt="Osaka School of Art"
              width={214}
              height={55}
              priority
              className="h-50 p-10 w-auto object-contain"
            />
          </Link>

          {/* ── Desktop Navigation ──────────────────────────────────────────── */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link relative px-3 py-2 text-sm font-medium transition-colors duration-200 group",
                  activeSection === item.href
                    ? "text-[var(--color-washi-50)]"
                    : "text-[var(--color-washi-300)] hover:text-[var(--color-washi-50)]",
                )}
              >
                {item.label}
                {/* Animated underline */}
                <span
                  className={cn(
                    "absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-[var(--color-akane-500)] to-[var(--color-cyan-500)] transition-transform duration-200 origin-left",
                    activeSection === item.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* ── Desktop controls: theme toggle + CTA ──────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button href={ENROLL_HREF} size="sm">
              Enroll Now
            </Button>
          </div>

          {/* ── Mobile controls: theme toggle + hamburger ─────────────────── */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="nav-hamburger p-2 text-[var(--color-washi-200)] hover:text-[var(--color-washi-50)] transition-colors cursor-pointer"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu Panel ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden border-t border-[var(--color-sumi-800)] bg-[var(--color-sumi-950)]/95 backdrop-blur-md overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav
              className="flex flex-col px-4 py-4 gap-1"
              aria-label="Mobile navigation"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-3 text-sm font-medium text-[var(--color-washi-200)] hover:text-[var(--color-washi-50)] hover:bg-[var(--color-sumi-800)] rounded-lg transition-colors duration-150"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-[var(--color-sumi-800)] mt-2">
                <Button href={ENROLL_HREF} size="sm" className="w-full">
                  Enroll Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
