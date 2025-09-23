export interface ArticlesConfig {
  provider: "medium"; // currently only Medium is supported
  mediumUsername?: string; // your Medium handle without @
  // Optional: override full RSS URL; if provided, mediumUsername is ignored
  rssUrl?: string;
}