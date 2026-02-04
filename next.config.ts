import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // Disable image optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
