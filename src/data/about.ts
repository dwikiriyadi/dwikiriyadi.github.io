import { DeviceMobile, SquaresFour, Wrench, FlowArrow, Lightbulb } from "@phosphor-icons/react";

export const OVERVIEW_TEXT = `My career in software development began in 2018, where I started as a full-stack developer. In those early days, I immersed myself in building web applications using Laravel, jQuery, and Vue.js. Simultaneously, I ventured into Android development with Java, and even explored UI/UX design using Adobe XD for specific projects.

The initial years were a period of intense self-discovery. With no formal mentor, I dedicated myself to experimenting with various tools and frameworks. This hands-on exploration was crucial for me to truly understand different approaches and forge my own best practices in a rapidly evolving field.

Today, my focus has shifted primarily to mobile development. I specialize in creating robust applications using Kotlin and Flutter, and I'm committed to staying updated with the latest advancements in software development to continuously refine my skills and deliver cutting-edge solutions.`;

export interface ExperienceItem {
  company: string;
  location: string;
  employment: string;
  role: string;
  period: string;
  details: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  { company: "CV. Borneo Algorithm Technology", location: "Pontianak", employment: "Self-employed", role: "Software Engineer", period: "Maret 2024 - Present", details: "" },
  { company: "Amigo Group Indonesia", location: "Yogyakarta", employment: "Freelance", role: "Flutter Developer", period: "Maret 2023 - Present", details: "" },
  { company: "PT. KB Finansia Multi Finance", location: "Jakarta", employment: "Full-time", role: "Senior Mobile Engineer", period: "August 2024 - August 2025", details: "" },
  { company: "LOGEE", location: "Jakarta", employment: "Full-time", role: "Android Developer", period: "Juny 2020 - December 2023", details: "" },
  { company: "Amigo Group Indonesia", location: "Yogyakarta", employment: "Freelance", role: "Flutter Developer", period: "May 2020 - December 2021", details: "" },
  { company: "Amigo Group Indonesia", location: "Yogyakarta", employment: "Full-time", role: "Mobile Developer", period: "April 2019 - May 2020", details: "" },
  { company: "IdeKite Indonesia", location: "Pontianak", employment: "Full-time", role: "Full Stack Developer", period: "Februari 2018 - February 2019", details: "" },
];

export interface SkillItem {
  key: string;
  title: string;
  desc: string;
  tags: string[];
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const SKILLS: SkillItem[] = [
  {
    key: "mobile",
    title: "Mobile Development",
    desc: "Designing and building robust, scalable mobile applications with a focus on performance, offline-first experiences, and delightful UX. Comfortable leading end-to-end delivery from architecture to Play Store/App Store releases.",
    tags: ["Kotlin", "Coroutines", "Compose", "Android SDK", "Flutter", "Dart", "Riverpod/Bloc", "Firebase", "WorkManager", "Room/SQLDelight"],
    Icon: DeviceMobile,
  },
  {
    key: "arch",
    title: "Software Architecture & Design",
    desc: "Applying pragmatic architectural patterns that balance flexibility and simplicity. Emphasis on clean boundaries, testability, and maintainability across modular codebases.",
    tags: ["Clean Architecture", "MVVM/MVI", "Modularization", "SOLID", "Design Systems", "Domain-Driven Thinking"],
    Icon: SquaresFour,
  },
  {
    key: "tools",
    title: "Tools & Technologies",
    desc: "Leveraging modern toolchains to streamline development, improve quality, and speed up delivery across platforms and teams.",
    tags: ["Git/GitHub", "CI/CD", "Fastlane", "Gradle", "Kotlin DSL", "Lint/Detekt", "Figma"],
    Icon: Wrench,
  },
  {
    key: "practices",
    title: "Development Practices & Methodologies",
    desc: "Disciplined engineering practices that improve reliability and collaboration, with a product mindset and user-centric delivery.",
    tags: ["Code Review", "Testing", "TDD (pragmatic)", "Agile/Scrum", "Docs as Code", "Performance Profiling"],
    Icon: FlowArrow,
  },
  {
    key: "pro",
    title: "Professional Attributes & Problem Solving",
    desc: "Strong ownership and communication. Comfortable with ambiguity, capable of decomposing complex problems and shipping incremental value.",
    tags: ["Communication", "Leadership", "Mentorship", "Problem Framing", "Tradeoff Analysis", "Stakeholder Alignment"],
    Icon: Lightbulb,
  },
];
