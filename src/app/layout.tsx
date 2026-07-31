/**
 * Root Layout - Osaka School of Art
 *
 * Responsibilities:
 * 1. Register custom fonts (Lato, Fjalla One, Facile Sans).
 * 2. Export site-wide <Metadata>.
 * 3. Inject a blocking inline script that reads localStorage / OS preference
 *    and sets data-theme on <html> BEFORE the first paint, preventing any
 *    flash of unstyled content (FOUC) when the user has a stored preference.
 * 4. Wrap the app in <ThemeProvider> so all components can call useTheme().
 * 5. Mount the persistent <Navbar> and <Footer> shell.
 * 6. Apply left padding (pl-10) to accommodate the ColorStrip decoration.
 */

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
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

// ── FOUC-prevention script ────────────────────────────────────────────────────
// This minified snippet runs synchronously before React hydrates.
// It reads localStorage (or OS preference) and sets data-theme on <html>
// so the correct theme is applied on the very first paint — no flash.
const themeInitScript = `(function(){try{var t=localStorage.getItem('osa-theme');document.documentElement.setAttribute('data-theme',t==='light'||t==='dark'?t:window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light')}catch(e){}})();`;

// ── Layout ────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /*
     * suppressHydrationWarning: The inline FOUC script may set data-theme
     * before React hydrates, creating a one-time mismatch between the
     * server-rendered attribute (absent) and the client value. This prop
     * suppresses the harmless warning for the <html> element only.
     */
    <html
      lang="en"
      suppressHydrationWarning
      className={`${lato.variable} ${fjallaOne.variable} ${facileSans.variable} h-full antialiased`}
    >
      <head>
        {/* Blocking script — must run before any CSS class is applied */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col pl-10">
        <ThemeProvider>
          <ScrollbarProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
