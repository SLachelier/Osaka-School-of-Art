import type { NextConfig } from "next";

/**
 * Next.js configuration for the Osaka School of Art website.
 * Enables image optimization for both local and remote sources,
 * and configures experimental features for improved performance.
 */
const nextConfig: NextConfig = {
  images: {
    // Allow external placeholder, Wix CDN, and future CDN image sources
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        // OSA's Wix-hosted media: real facility photos, programs, logo
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
    ],
  },
  // Enable strict mode for better error detection during development
  reactStrictMode: true,
};

export default nextConfig;
