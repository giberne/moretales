import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Static site generation
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Optional: adds trailing slash to URLs
};

export default nextConfig;
