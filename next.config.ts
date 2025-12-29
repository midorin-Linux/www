import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    images: {
        unoptimized: true,        // ← これが一番重要！
    },
};

export default nextConfig;
