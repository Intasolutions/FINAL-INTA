import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // ✅ Added this for Unsplash images
      },
    ],
  },
};

export default nextConfig;
