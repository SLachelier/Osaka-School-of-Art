/**
 * Homepage - Osaka School of Art
 *
 * Performance optimizations:
 * - Above-the-fold content (Hero, About) loaded immediately
 * - Below-the-fold sections lazy loaded with dynamic imports
 * - Improves initial page load time and reduces JavaScript bundle size
 *
 * Sections in scroll order:
 *   1. HeroSection       - Full-viewport CTA with founding pillars
 *   2. AboutSection      - School mission and Sean Ngo's story
 *   3. FacilitiesSection - Real campus photography and facility features
 *   4. ProgramsSection   - Three programs (A/B/C) with real photography
 *   5. FacultySection    - Sean Ngo founder profile + faculty CTA
 *   6. TuitionSection    - Transparent pricing breakdown
 *   7. VisaSection       - Cultural visa pathway guide
 *   8. FAQSection        - Accordion FAQ
 *   9. EnrollSection     - Enrollment enquiry form
 */

import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { ColorStrip } from "@/components/sections/ColorStrip";
import { AboutSection } from "@/components/sections/AboutSection";

// Lazy load below-the-fold sections for better performance
const FacilitiesSection = dynamic(() =>
  import("@/components/sections/FacilitiesSection").then((mod) => ({
    default: mod.FacilitiesSection,
  })),
);
const ProgramsSection = dynamic(() =>
  import("@/components/sections/ProgramsSection").then((mod) => ({
    default: mod.ProgramsSection,
  })),
);
const FacultySection = dynamic(() =>
  import("@/components/sections/FacultySection").then((mod) => ({
    default: mod.FacultySection,
  })),
);
const TuitionSection = dynamic(() =>
  import("@/components/sections/TuitionSection").then((mod) => ({
    default: mod.TuitionSection,
  })),
);
const VisaSection = dynamic(() =>
  import("@/components/sections/VisaSection").then((mod) => ({
    default: mod.VisaSection,
  })),
);
const FAQSection = dynamic(() =>
  import("@/components/sections/FAQSection").then((mod) => ({
    default: mod.FAQSection,
  })),
);
const EnrollSection = dynamic(() =>
  import("@/components/sections/EnrollSection").then((mod) => ({
    default: mod.EnrollSection,
  })),
);

export default function HomePage() {
  return (
    <>
      <ColorStrip />
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <ProgramsSection />
      <FacultySection />
      <TuitionSection />
      <VisaSection />
      <FAQSection />
      <EnrollSection />
    </>
  );
}
