// Template for site-wide configuration (name, role, logos, links)
// How to use:
// 1) Copy this file to src/data/site.ts
// 2) Adjust values to match your profile, assets, and links
// 3) Replace PDFs and logo files in /public as needed

import type { SiteConfig } from "@/types/site";

export const SITE: SiteConfig = {
  name: "Your Name",
  role: "Your Role",
  shortName: "SHORT",
  logoLight: "/logo_rounded.svg",
  logoDark: "/logo_rounded_dark.svg",
  githubUrl: "https://github.com/your_handle",
  resumeUrl: "/resume.pdf",
  portfolioUrl: "/portfolio.pdf",
};
