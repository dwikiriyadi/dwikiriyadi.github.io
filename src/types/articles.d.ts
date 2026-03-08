import type { ArticleItem } from "@/types/article";

export interface ArticlesConfig {
  provider: "medium" | "static";
  mediumUsername?: string; // your Medium handle without @
  // Optional: override full RSS URL; if provided, mediumUsername is ignored
  rssUrl?: string;
  // Local fallback items when Medium provider fails or when provider is static
  fallbackItems?: ArticleItem[];
}