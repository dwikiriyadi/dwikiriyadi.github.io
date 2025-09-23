import type { ArticlesConfig } from "@/types/articles";

// Articles configuration
// Tip: To create your own config from scratch, copy src/data/articles.template.ts to src/data/articles.ts
// and follow the inline comments.
export const ARTICLES: ArticlesConfig = {
  provider: "medium",
  // If not provided, the code will fall back to NEXT_PUBLIC_MEDIUM_USERNAME env var
  // mediumUsername: "wikinotes",
};
