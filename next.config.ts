import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', // 👈 Enables static HTML export
  images: {
    unoptimized: true, // 👈 Required for static export if using <Image />
  },
};

export default nextConfig;
