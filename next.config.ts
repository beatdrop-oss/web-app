import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "toolbox.marketingtools.apple.com",
      },
    ],
  },
};

export default nextConfig;
