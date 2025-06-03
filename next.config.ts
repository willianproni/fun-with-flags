import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://flagcdn.com/w320/**"),
      new URL("https://upload.wikimedia.org/wikipedia/commons/**"),
      new URL("https://placehold.co/**"),
    ],
  },
};

export default nextConfig;
