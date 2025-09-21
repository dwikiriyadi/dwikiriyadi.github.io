export type PortfolioCategory = "Android" | "Flutter" | "UI Design";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string; // path under /public/images
  link?: string;
  category: PortfolioCategory;
}
