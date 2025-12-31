import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miky7art.lat',
        port: '',
        pathname: '/mikyart/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
