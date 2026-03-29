import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // If not using a custom domain, add: basePath: "/CamberCoreWebsite"
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
