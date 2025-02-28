import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "placeholder.co"
      }
    ]
  }
};

export default nextConfig;
