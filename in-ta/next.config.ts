import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** @type {import('next').NextConfig} */
  reactStrictMode: true, // Good for catching bugs
  swcMinify: true,       // Speeds up builds
  images: {
    domains: [
      'assets.aceternity.com',
      'cdn.pixabay.com', // ✅ Added this for your About page image
    ],
  },
};

export default nextConfig;
