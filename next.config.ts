import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'utfs.io',
      'img.clerk.com',
      'subdomain',
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
