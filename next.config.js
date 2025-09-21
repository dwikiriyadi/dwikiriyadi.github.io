/**
 * Next.js configuration for static export on GitHub Pages
 * - output: 'export' makes `next build` generate a static `out/` directory
 * - images.unoptimized is required because the Image Optimization API is not available on static hosts
 * - trailingSlash helps when serving from GitHub Pages
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Optional but often helpful for GitHub Pages
  trailingSlash: true,
};

module.exports = nextConfig;
