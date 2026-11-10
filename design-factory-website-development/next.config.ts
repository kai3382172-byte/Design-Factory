import type { NextConfig } from "next";

// Static export is used only for GitHub Pages (set by the workflow).
const isStatic = process.env.NEXT_PUBLIC_STATIC === "true";

const nextConfig: NextConfig = isStatic
  ? {
      output: "export",
      basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
      images: { unoptimized: true },
      trailingSlash: true,
    }
  : {};

export default nextConfig;
