export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#articles", label: "Articles" },
  { href: "#contact", label: "Contact" },
];

export const SECTION_IDS: string[] = [
  "about",
  "portfolio",
  "articles",
  "contact",
];
