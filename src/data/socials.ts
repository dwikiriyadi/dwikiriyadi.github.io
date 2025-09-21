import {
  LinkedinLogo,
  MediumLogo,
  InstagramLogo,
  YoutubeLogo,
  GithubLogo,
} from "@phosphor-icons/react";

export interface SocialLink {
  name: string;
  href: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dwikiriyadi",
    Icon: LinkedinLogo,
  },
  { name: "Medium", href: "https://medium.com/@wikinotes", Icon: MediumLogo },
  { name: "Instagram", href: "https://www.instagram.com/dwkryd/", Icon: InstagramLogo },
  { name: "YouTube", href: "https://www.youtube.com/@dwkryd", Icon: YoutubeLogo },
  { name: "GitHub", href: "https://github.com/dwikiriyadi", Icon: GithubLogo },
];
