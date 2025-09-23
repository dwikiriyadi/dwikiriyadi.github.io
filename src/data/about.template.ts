// Template for About section data (Overview, Experiences, Skills)
// How to use:
// 1) Copy this file to src/data/about.ts
// 2) Fill in OVERVIEW_TEXT, EXPERIENCES, and SKILLS to match your profile
// 3) Icons come from @phosphor-icons/react; you can swap them as needed

import {
  DeviceMobile,
  SquaresFour,
  Wrench,
  FlowArrow,
  Lightbulb,
} from "@phosphor-icons/react";

export const OVERVIEW_TEXT = `Write a short overview about yourself here.\n\nUse blank lines to separate paragraphs.`;

export interface ExperienceItem {
  company: string;
  location: string;
  employment: string;
  role: string;
  period: string;
  details: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Your Company",
    location: "City",
    employment: "Full-time",
    role: "Your Role",
    period: "Jan 2024 - Present",
    details: `\n- Key contribution one\n- Key contribution two\n`,
  },
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
    desc: "Describe your focus/strengths.",
    tags: ["Kotlin", "Flutter", "Dart"],
    Icon: DeviceMobile,
  },
  {
    key: "arch",
    title: "Architecture",
    desc: "Explain your philosophy.",
    tags: ["Clean Architecture", "MVI", "SOLID"],
    Icon: SquaresFour,
  },
  { key: "tools", title: "Tools", desc: "Tooling and ecosystem.", tags: ["Git", "CI/CD"], Icon: Wrench },
  { key: "practices", title: "Practices", desc: "Engineering practices.", tags: ["TDD"], Icon: FlowArrow },
  { key: "pro", title: "Professional", desc: "Attributes.", tags: ["Leadership"], Icon: Lightbulb },
];
