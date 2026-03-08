import type { ArticlesConfig } from "@/types/articles";

// Articles configuration
// Tip: To create your own config from scratch, copy src/data/articles.template.ts to src/data/articles.ts
// and follow the inline comments.
export const ARTICLES: ArticlesConfig = {
  provider: "static",
  mediumUsername: "wikinotes",
  // Used on GitHub Pages when remote RSS APIs fail/rate-limit
  fallbackItems: [
    {
      id: "medium-profile",
      title: "Browse all articles on Medium",
      link: "https://medium.com/@wikinotes",
      pubDate: "2026-01-01T00:00:00.000Z",
      excerpt: "Open my Medium profile to read the latest posts while the feed provider is unavailable.",
    },
  ],
};
