/**
 * Root Layout - Osaka School of Art
 *
 * Responsibilities:
 * 1. Register custom fonts (Lato, Fjalla One, Facile Sans).
 * 2. Export site-wide <Metadata>.
 * 3. Mount the persistent <Navbar> and <Footer> shell.
 * 4. Apply left padding (pl-10) to accommodate the ColorStrip decoration.
 */

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollbarProgress } from "@/components/ui/ScrollbarProgress";
import "./globals.css";

// ── Custom Fonts ──────────────────────────────────────────────────────────────

// Lato - Small-sized font (body text, UI elements, captions)
const lato = localFont({
  src: "../../public/fonts/lato.regular.ttf",
  variable: "--font-lato",
  display: "swap",
});

// Fjalla One - Medium-sized font (headings, section titles, buttons)
const fjallaOne = localFont({
  src: "../../public/fonts/FjallaOne-Regular.ttf",
  variable: "--font-fjalla",
  display: "swap",
});

// Facile Sans - Large-sized font (hero text, large headings)
const facileSans = localFont({
  src: "../../public/fonts/Facile Sans.ttf",
  variable: "--font-display",
  display: "swap",
});

// ── Site Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: "Osaka School of Art - Become a Mangaka",
    template: "%s | Osaka School of Art",
  },
  description:
    "World-class manga education in Osaka, Japan. Train under professional Mangaka, build your portfolio, and launch your career as a professional manga artist.",
  keywords: [
    "manga school",
    "mangaka",
    "manga education",
    "Osaka",
    "Japan",
    "manga art",
    "character design",
    "sequential art",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Osaka School of Art",
    title: "Osaka School of Art - Become a Mangaka",
    description:
      "World-class manga education in Osaka, Japan. Train under professional Mangaka, build your portfolio, and launch your career.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ── Layout ────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${fjallaOne.variable} ${facileSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pl-10">
        <ScrollbarProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
