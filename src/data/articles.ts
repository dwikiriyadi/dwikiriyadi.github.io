import type { ArticlesConfig } from "@/types/articles";

// Articles configuration
// Tip: To create your own config from scratch, copy src/data/articles.template.ts to src/data/articles.ts
// and follow the inline comments.
export const ARTICLES: ArticlesConfig = {
  provider: "static",
  mediumUsername: "wikinotes",
  // Project-hosted post archive mapped from /posts/*.html
  fallbackItems: [
    {
      id: "2026-03-08-the-context-architect-when-design-becomes-data",
      title: "The Context Architect: When Design Becomes Data",
      link: "https://medium.com/@wikinotes/the-context-architect-when-design-becomes-data-55a8ef83e5a3",
      pubDate: "2026-03-08T00:00:00.000Z",
      excerpt: "In my previous reflections, I argued that documentation is the new command line. But the \"Context Loop\" doesn't start with a Markdown file...",
    },
    {
      id: "2026-03-08-the-context-architect-documentation-as-the-new-command-line",
      title: "The Context Architect: Documentation as the New Command Line",
      link: "https://medium.com/@wikinotes/the-context-architect-documentation-as-the-new-command-line-a048b7b49f17",
      pubDate: "2026-03-08T00:00:00.000Z",
      excerpt: "In my previous reflections, I talked about the pivot from being a “bricklayer” of code to being an orchestrator of systems. Using tools like...",
    },
    {
      id: "2026-03-07-the-architects-pivot-why-im-trading-implementation-for-orchestration",
      title: "The Architect's Pivot: Why I'm Trading Implementation for Orchestration",
      link: "https://medium.com/@wikinotes/the-architects-pivot-why-i-m-trading-implementation-for-orchestration-71036c2e517c",
      pubDate: "2026-03-07T00:00:00.000Z",
      excerpt: "Have you ever felt like you were a professional typist rather than a software engineer?",
    },
    {
      id: "2025-08-18-closing-a-chapter",
      title: "Closing a Chapter",
      link: "https://medium.com/@wikinotes/closing-a-chapter-1ea7be73d0cb",
      pubDate: "2025-08-18T00:00:00.000Z",
      excerpt: "I quit my job.",
    },
    {
      id: "2025-04-29-build-consistent-forms-share-validation-in-flutter-and-compose",
      title: "Build Consistent Forms: Share Validation in Flutter and Compose",
      link: "https://medium.com/@wikinotes/build-consistent-forms-share-validation-in-flutter-and-compose-a2510a650c56",
      pubDate: "2025-04-29T00:00:00.000Z",
      excerpt: "Form validation is a fundamental aspect of building user-friendly and reliable mobile applications. Ensuring data accuracy and proper...",
    },
    {
      id: "2025-04-24-coding-journeys-structured-oop-and-functional",
      title: "Coding Journeys: Structured, OOP, and Functional",
      link: "https://medium.com/srctool/coding-journeys-structured-oop-and-functional-4693631df023",
      pubDate: "2025-04-24T00:00:00.000Z",
      excerpt: "Ever thought about how we get around? From taking a simple stroll to hopping on a super-fast train, our ways of moving have come a long way...",
    },
    {
      id: "2025-04-20-building-a-dynamic-ui-in-flutter-using-json-schema",
      title: "Building a Dynamic UI in Flutter Using JSON Schema",
      link: "https://medium.com/@wikinotes/building-a-dynamic-ui-in-flutter-using-json-schema-03e4062780e8",
      pubDate: "2025-04-20T00:00:00.000Z",
      excerpt: "A while ago, I found myself working on a project that needed to support highly dynamic UIs - forms, detail screens, and even list views -...",
    },
    {
      id: "2024-12-29-why-you-need-sops-before-building-a-digital-system",
      title: "Why You Need SOPs Before Building a Digital System for Your Business",
      link: "https://medium.com/srctool/why-you-need-sops-before-building-a-digital-system-for-your-business-7b30e8ad2e57",
      pubDate: "2024-12-29T00:00:00.000Z",
      excerpt: "When business owners decide to digitalize their operations, they often jump straight into building a system, hoping it will solve all their...",
    },
    {
      id: "2024-12-02-thememanager-in-jetpack-compose-inspired-by-mantine",
      title: "ThemeManager in Jetpack Compose: Inspired by Mantine",
      link: "https://medium.com/@wikinotes/thememanager-in-jetpack-compose-inspired-by-mantine-5b0f1a8d522f",
      pubDate: "2024-12-02T00:00:00.000Z",
      excerpt: "Jetpack Compose has revolutionized how we build Android UIs by making it declarative and intuitive. One of the most powerful features of...",
    },
    {
      id: "2024-11-30-looks-like-ive-been-doing-it-wrong-all-this-time",
      title: "Looks Like I've Been Doing It Wrong All This Time",
      link: "https://medium.com/@wikinotes/looks-like-ive-been-doing-it-wrong-all-this-time-675a5f8d2dd9",
      pubDate: "2024-11-30T00:00:00.000Z",
      excerpt: "As developers, we often find ourselves juggling tight deadlines, high expectations, and complex systems. Over time, I\'ve developed a habit...",
    },
    {
      id: "2024-11-28-why-we-need-themedata-like-flutter-in-jetpack-compose",
      title: "Why We Need ThemeData Like Flutter in Jetpack Compose",
      link: "https://medium.com/@wikinotes/why-we-need-themedata-like-flutter-in-jetpack-compose-9b1888788cab",
      pubDate: "2024-11-28T00:00:00.000Z",
      excerpt: "Jetpack Compose has revolutionized UI development on Android, offering a declarative and modern way to build apps. However, when it comes...",
    },
    {
      id: "2024-11-28-6-dependencies-in-my-flutter-project",
      title: "6 Dependencies in My Flutter Project",
      link: "https://medium.com/@wikinotes/6-dependencies-in-my-flutter-project-9860ded78cda",
      pubDate: "2024-11-28T00:00:00.000Z",
      excerpt: "Flutter, Google's UI toolkit, enables developers to build natively compiled applications for mobile, web, and desktop from a single...",
    },
    {
      id: "2022-05-31-network-request-error-handling-on-web-and-mobile",
      title: "Network Request Error Handling on Web & Mobile Application",
      link: "https://medium.com/@wikinotes/network-request-error-handling-on-web-mobile-application-17b56df009a2",
      pubDate: "2022-05-31T00:00:00.000Z",
      excerpt: "There is no perfect web and mobile application without and error or exception, that's why we need to handle every case of error and show it...",
    },
    {
      id: "2022-05-20-i-dont-really-like-base-class",
      title: "I Don't Really Like Base Class",
      link: "https://medium.com/@wikinotes/i-dont-really-like-base-class-cdb4b37211be",
      pubDate: "2022-05-20T00:00:00.000Z",
      excerpt: "Developing an application is hard. Maybe making a base class will make things easier? That is what I think when making a base class. The...",
    },
    {
      id: "2022-05-20-handling-network-request-error-web-mobile",
      title: "Handling Network Request Error pada Web & Aplikasi Mobile",
      link: "https://medium.com/@wikinotes/error-dari-backend-ke-frontend-mobile-developer-795e9046d7b9",
      pubDate: "2022-05-20T00:00:00.000Z",
      excerpt: "Banyak hal yang mungkin menyebabkan terjadinya error pada saat melakukan request API. Dalam proses nya backend biasanya melemparkan...",
    },
  ],
};
