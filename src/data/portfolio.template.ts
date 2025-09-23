// Template for adding your own portfolio data
// How to use:
// 1) Copy this file to src/data/portfolio.ts
// 2) Put your images under the public/ directory (e.g. public/portfolio/my_project/image.png)
// 3) Update PORTFOLIO_ITEMS and PORTFOLIO_CATEGORIES below.
//
// Notes:
// - Image paths can be either absolute (start with "/") or relative to public (e.g. "portfolio/my_project/image.png").
// - Prefer the `categories` field (multi-select). `category` exists for backward compatibility.
// - Keep `id` values unique strings. They are used in URLs like /portfolio/{id}.

import type { PortfolioItem, PortfolioCategory } from "@/types/portfolio";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "example-1",
    title: "My Awesome Project",
    description: `Short summary about what this project is and what you did.\n\nYou can include multiple paragraphs using \n\n line breaks.`,
    image: "portfolio/my_project/thumbnail.png", // shown in the grid/carousel
    images: [
      "portfolio/my_project/screen-1.png",
      "portfolio/my_project/screen-2.png",
    ],
    backgroundImages: [
      "portfolio/my_project/bg.png", // optional decorative background
    ],
    company: "Your Company or Client (optional)",
    links: [
      { label: "Website", href: "https://example.com", icon: "link" },
      { label: "GitHub", href: "https://github.com/you/repo", icon: "github" },
    ],
    // Either use a single-category (legacy)…
    // category: "Web",
    // …or use multiple categories (preferred):
    categories: ["Web"],
  },
];

// Categories that appear as tabs on the Portfolio section.
// "All" is automatically added by the UI; keep it here for clarity in your data copy.
export const PORTFOLIO_CATEGORIES: ("All" | PortfolioCategory)[] = [
  "All",
  "Android",
  "Flutter",
  "UI Design",
  "Web",
  "Library",
];
