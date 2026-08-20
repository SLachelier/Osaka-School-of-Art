/**
 * LocationSection - Displays the OSA campus location with an embedded Google Map.
 *
 * Features:
 * - Interactive Google Maps embed showing OSA's exact location
 * - Address display in both English and Japanese
 * - Direct link to view Google Maps reviews
 * - Responsive layout with map and contact information
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Star, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { CONTACT_ADDRESS_EN, CONTACT_ADDRESS_JP } from "@/lib/constants";
import {
  fadeUpVariants,
  fadeLeftVariants,
  fadeRightVariants,
} from "@/lib/animations";

// ── Component ─────────────────────────────────────────────────────────────────

export function LocationSection() {
  // Google Maps embed URL - shows location with reviews accessible
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.888665447392!2d135.51144597519!3d34.67382367293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7e453457f9b%3A0x71d54031b798be7e!2sOSA%20Osaka%20School%20of%20Art!5e0!3m2!1sen!2sjp!4v1724140000000!5m2!1sen!2sjp";

  const googleMapsUrl =
    "https://www.google.com/maps/place/OSA+Osaka+School+of+Art/@34.6738742,135.511446,16z/data=!4m6!3m5!1s0x6000e7e453457f9b:0x71d54031b798be7e!8m2!3d34.6738236!4d135.5165065!16s%2Fg%2F11zcp4pdx_!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section
      id="location"
      className="relative py-24 bg-[var(--color-sumi-900)] lg:py-32"
    >
      {/* Decorative top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-sumi-700)] to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Visit Us"
          heading={
            <>
              Located in the Heart of{" "}
              <span className="text-[var(--color-akane-400)]">Osaka</span>
            </>
          }
          subheading="Minutes from Tanimachi 6-chome station and walking distance to Osaka Castle"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: Address and info */}
          <motion.div
            className="flex flex-col gap-8 lg:col-span-2"
            variants={fadeLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Address card */}
            <div className="rounded-2xl border border-[var(--color-sumi-700)] bg-[var(--color-sumi-800)] p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="rounded-lg bg-[var(--color-akane-900)]/30 p-3 border border-[var(--color-akane-700)]">
                  <MapPin className="text-[var(--color-akane-400)]" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--color-washi-50)] font-display mb-1">
                    Campus Address
                  </h3>
                  <p className="text-sm text-[var(--color-washi-400)]">
                    Osaka School of Art
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-[var(--color-washi-300)] mb-1">
                    English
                  </p>
                  <p className="text-base text-[var(--color-washi-200)] leading-relaxed">
                    {CONTACT_ADDRESS_EN}
                  </p>
                </div>

                <div className="h-px bg-[var(--color-sumi-700)]" />

                <div>
                  <p className="text-sm font-medium text-[var(--color-washi-300)] mb-1">
                    日本語
                  </p>
                  <p className="text-base text-[var(--color-washi-200)] leading-relaxed">
                    {CONTACT_ADDRESS_JP}
                  </p>
                </div>
              </div>
            </div>

            {/* Reviews CTA */}
            <div className="rounded-2xl border border-[var(--color-cyan-700)]/30 bg-[var(--color-cyan-950)]/20 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Star
                  className="text-[var(--color-cyan-400)]"
                  size={20}
                  fill="currentColor"
                />
                <Star
                  className="text-[var(--color-cyan-400)]"
                  size={20}
                  fill="currentColor"
                />
                <Star
                  className="text-[var(--color-cyan-400)]"
                  size={20}
                  fill="currentColor"
                />
                <Star
                  className="text-[var(--color-cyan-400)]"
                  size={20}
                  fill="currentColor"
                />
                <Star
                  className="text-[var(--color-cyan-400)]"
                  size={20}
                  fill="currentColor"
                />
              </div>
              <p className="text-sm text-[var(--color-washi-300)] mb-4 leading-relaxed">
                See what our students and visitors are saying about their
                experience at OSA.
              </p>
              <Button
                href={googleMapsUrl}
                variant="secondary"
                size="sm"
                external
              >
                <ExternalLink size={15} />
                View Reviews on Google Maps
              </Button>
            </div>

            {/* Access info */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-akane-400)]">
                Access
              </h4>
              <ul className="space-y-2 text-sm text-[var(--color-washi-300)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-cyan-500)] mt-1">•</span>
                  <span>
                    1 minute walk from Tanimachi 6-chome Station (Subway Lines)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-cyan-500)] mt-1">•</span>
                  <span>10 minutes from Shinsaibashi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-cyan-500)] mt-1">•</span>
                  <span>One stop from Osaka Castle Park</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Google Maps embed */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-[var(--color-sumi-700)] shadow-2xl">
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OSA Osaka School of Art Location"
                className="w-full h-full"
              />
            </div>
            <p className="mt-4 text-xs text-[var(--color-washi-500)] text-center">
              Click the map to open in Google Maps and explore nearby stations,
              restaurants, and landmarks
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
