import type { PortfolioItem, PortfolioCategory } from "@/types/portfolio";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "JSON UI (Flutter)",
    description: `
        Json UI Flutter is a small experimental library that turns JSON into Flutter widgets. The goal was to validate a concept: could we describe UI with a portable schema and render it dynamically in Flutter? This work was inspired by a Kotlin-based UI generator I previously built using collections and data classes.

        In this exploration, I focused on a clear JSON structure, a minimal but extensible widget registry, and predictable layout behavior. I also wrote an article to document the approach, trade‑offs, and next steps, including how this concept might evolve into a production‑ready renderer with validation and schema tooling.
        `,
    image: "portofolio/json_ui_flutter/bg.png",
    images: [
      "portofolio/json_ui_flutter/image-1.png",
      "portofolio/json_ui_flutter/image-2.png",
      "portofolio/json_ui_flutter/image-3.png",
    ],
    backgroundImages: ["portofolio/json_ui_flutter/bg.png"],
    company: "PT. KB Finansia Multi Finance",
    links: [
      {
        label: "Github",
        href: "https://github.com/srctool/flutter-json-ui",
        icon: "github",
      },
      {
        label: "Medium",
        href: "https://wikinotes.medium.com/building-a-dynamic-ui-in-flutter-using-json-schema-03e4062780e8",
        icon: "medium",
      },
    ],
    category: "UI Design",
  },
  {
    id: "2",
    title: "BAT Solution Website",
    description: `
    I co‑founded a second commanditaire vennootschap with two friends—one frontend engineer and one backend engineer—while I focused on mobile and design. We initially used a temporary template provided by the backend, then I redesigned the site to better reflect the brand and information architecture. After iterating on the visual language and layout system, the frontend engineer implemented the new design.

    The work included responsive design considerations, cleaner content hierarchy, and a modular component approach so future pages could be added without redesigning from scratch. The end result was a more cohesive and maintainable website.
    `,
    image: "portofolio/bat_solution/bg.png",
    images: ["portofolio/bat_solution/image-1.png"],
    backgroundImages: ["portofolio/bat_solution/bg.png"],
    company: "Borneo Algorithm Technology",
    links: [
      { label: "Website", href: "https://www.batsolution.id/", icon: "link" },
    ],
    category: "UI Design",
  },
  {
    id: "3",
    title: "Amigo Member",
    description: `
    My first production experience with Flutter where I intentionally experimented a lot. I tried different routing strategies, several state‑management approaches (Bloc, Riverpod, Provider), and multiple data layers to understand trade‑offs in real scenarios. This project became a sandbox to build intuition about testing, folder structure, and component reuse.

    The outcome was a much clearer mental model for Flutter architecture and a stronger sense of when to choose simplicity over abstraction. It also taught me how to evaluate libraries pragmatically rather than theoretically.
    `,
    image: "portofolio/amigo_member/bg.png",
    images: [
      "portofolio/amigo_member/image-1.png",
      "portofolio/amigo_member/image-2.png",
      "portofolio/amigo_member/image-3.png",
      "portofolio/amigo_member/image-4.png",
    ],
    backgroundImages: ["portofolio/amigo_member/bg.png"],
    company: "Amigo Group Indonesia",
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=id.amigogroup.member&hl=en&pli=1",
        icon: "googlePlay",
      },
    ],
    category: "Flutter",
  },
  {
    id: "4",
    title: "Logee",
    description: `
    A major evolution of Logee Order, this app unifies multiple Logee products—marketplace, courier, and more—into a single cohesive experience that supports multiple roles and feature sets. I focused on creating a stable Jetpack Compose foundation, reusing and hardening components built during Logee Order while improving performance and consistency.

    The work included navigation and state handling across modules, a scalable theming system, and patterns for complex forms and lists. Lessons learned from earlier iterations directly informed the design of reusable UI primitives and data flows.
    `,
    image: "portofolio/logee/bg.png",
    images: [
      "portofolio/logee/image-1.png",
      "portofolio/logee/image-2.png",
      "portofolio/logee/image-3.png",
      "portofolio/logee/image-4.png",
    ],
    backgroundImages: ["portofolio/logee/bg.png"],
    company: "Logee",
    links: [],
    category: "Android",
  },
  {
    id: "5",
    title: "Logee Order",
    description: `
    I developed a B2B marketplace focused on restocking workflows. This project became a deep dive into applying SOLID principles and practical design patterns to a real product under active development. I created utilities and tooling (code generators, helpers, and build optimizations) to speed up delivery and reduce repetitive tasks.

    I also experimented heavily with Jetpack Compose—building a set of reusable UI components, improving state management patterns, and standardizing UI behavior. These learnings laid the groundwork for the component library later reused in the next iteration of the app.
    `,
    image: "portofolio/logee_order/bg.png",
    images: [
      "portofolio/logee_order/image-1.png",
      "portofolio/logee_order/image-2.png",
      "portofolio/logee_order/image-3.png",
    ],
    backgroundImages: ["portofolio/logee_order/bg.png"],
    company: "Logee",
    links: [],
    category: "Android",
  },
  {
    id: "6",
    title: "Sistem Antrian Online untuk Poli di RSUD dr.Abdul Azis Singkawang",
    description: `
    I was asked to develop a Flutter-based queue application for a hospital polyclinic. The system uses a publish/subscribe mechanism so queue numbers update in real time across devices and displays. Patients can register remotely, obtain a digital queue ticket, and monitor their position from home without waiting on-site.

    The project involved designing a simple, reliable flow for registration, validation, and status updates, along with clear UI feedback to reduce confusion at peak hours. Real-time updates significantly improved transparency and reduced perceived waiting time.
    `,
    image: "portofolio/rsud_queue/bg.png",
    images: [
      "portofolio/rsud_queue/image-1.png",
      "portofolio/rsud_queue/image-2.png",
      "portofolio/rsud_queue/image-3.png",
      "portofolio/rsud_queue/image-4.png",
      "portofolio/rsud_queue/image-5.png",
    ],
    backgroundImages: ["portofolio/rsud_queue/bg.png"],
    company: "Logee",
    links: [],
    category: "Android",
  },
  {
    id: "7",
    title: "BIT Studio Website",
    description: `
     I started my first commanditaire vennootschap with friends and we needed a proper online presence. I asked a friend to handle the visual design, then I implemented the design and built a responsive site using Vue. The focus was on fast load, clean structure, and a layout that could evolve as our services grew.

     This project taught me how to translate a static design into a maintainable frontend, organize components for reuse, and make pragmatic choices about animation and performance on low‑end devices.
     `,
    image: "portofolio/bit_studio/bg.png",
    images: [
      "portofolio/bit_studio/image-1.png",
      "portofolio/bit_studio/image-2.png",
    ],
    backgroundImages: ["portofolio/bit_studio/bg.png"],
    company: "BIT Studio",
    links: [],
    category: "Web",
  },
];

export const PORTFOLIO_CATEGORIES: ("All" | PortfolioCategory)[] = [
  "All",
  "Android",
  "Flutter",
  "UI Design",
  "Web",
  "Library",
];
