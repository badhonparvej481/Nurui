import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "i.ibb.co",
      "res.cloudinary.com",
      "plus.unsplash.com",
    ],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  webpack(config) {
    config.module.rules.push({
      test: /\.tsx?$/,
      resourceQuery: /raw/, // *.tsx?raw
      use: "raw-loader",
    });
    return config;
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
