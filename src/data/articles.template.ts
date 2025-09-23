// Template for Articles configuration
// How to use:
// 1) Copy this file to src/data/articles.ts
// 2) Fill in your Medium username (without @) or provide a custom RSS URL
// 3) The Articles section and hook will read from this config

import type { ArticlesConfig } from "@/types/articles";

export const ARTICLES: ArticlesConfig = {
  provider: "medium",
  // Option A: set your Medium handle (recommended)
  mediumUsername: "your_handle",
  // Option B: provide a full RSS URL and leave mediumUsername empty
  // rssUrl: "https://medium.com/feed/@your_handle",
};
