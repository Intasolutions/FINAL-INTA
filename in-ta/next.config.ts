import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 /** @type {import('next').NextConfig} */

  reactStrictMode: true, // Optional, good for debugging in dev
  swcMinify: true,       // Optional, faster builds
  images: {
    domains: [
      'assets.aceternity.com', // Add more domains if you use other external images
    ],
  },




};

export default nextConfig;
