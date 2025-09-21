import type { PortfolioItem, PortfolioCategory } from "@/types/portfolio";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "Fitness Tracker",
    description: "Android app with Jetpack Compose, offline-first architecture.",
    image: "/images/fitness.svg",
    link: "#",
    category: "Android",
  },
  {
    id: "2",
    title: "Travel Booking",
    description: "Flutter app with custom animations and theming.",
    image: "/images/travel.svg",
    link: "#",
    category: "Flutter",
  },
  {
    id: "3",
    title: "Finance Dashboard",
    description: "Clean UI exploration in Figma for a fintech dashboard.",
    image: "/images/finance.svg",
    category: "UI Design",
  },
  {
    id: "4",
    title: "Notes App",
    description: "Compose Material 3, Room, and WorkManager integration.",
    image: "/images/notes.svg",
    link: "#",
    category: "Android",
  },
];

export const PORTFOLIO_CATEGORIES: ("All" | PortfolioCategory)[] = [
  "All",
  "Android",
  "Flutter",
  "UI Design",
];
