export interface SiteSocial {
  name: string;
  href: string;
  ariaLabel?: string;
}

export interface SiteConfig {
  name: string; // Full name displayed in sidebar
  role: string; // Short role/subtitle
  shortName?: string; // Short brand for mobile header
  logoLight?: string; // Path under /public
  logoDark?: string; // Path under /public
  githubUrl?: string; // Optional GitHub profile URL
  resumeUrl?: string; // e.g. /Dwiki_Riyadi_Resume.pdf
  portfolioUrl?: string; // e.g. /portfolio.pdf
}
