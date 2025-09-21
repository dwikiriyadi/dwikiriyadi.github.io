export type PortfolioCategory =
  | "Android"
  | "Flutter"
  | "UI Design"
  | "Web"
  | "Library";

export type PortfolioIconKey = "github" | "link" | "googlePlay" | "medium";

export interface PortfolioLink {
  label: string;
  href: string;
  icon?: PortfolioIconKey; // simple identifier, render icons on client only
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string; // thumbnail path under /public/images
  images?: string[]; // gallery images under /public/images
  links?: PortfolioLink[]; // external links with icon
  company?: string; // company or client name
  backgroundImages?: string[]; // decorative background images under /public/images
  link?: string; // deprecated: use links instead
  category: PortfolioCategory;
}
