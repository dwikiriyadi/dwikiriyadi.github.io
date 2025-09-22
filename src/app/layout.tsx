import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";
import AppHeight from "@/components/System/AppHeight";
import BackToTop from "@/components/System/BackToTop";
import OrientationGate from "@/components/System/OrientationGate";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dwikiriyadi.github.io"),
  title: {
    default: "Dwiki Riyadi | Mobile Developer",
    template: "%s | Dwiki Riyadi",
  },
  description:
    "Portfolio of Dwiki Riyadi, a mobile developer specializing in Kotlin (Android/Compose) and Flutter. Projects, articles, and experience.",
  keywords: [
    "Dwiki Riyadi",
    "Mobile Developer",
    "Android",
    "Kotlin",
    "Jetpack Compose",
    "Flutter",
    "Portfolio",
    "Software Engineer",
    "Jakarta",
    "Indonesia",
  ],
  authors: [{ name: "Dwiki Riyadi", url: "https://dwikiriyadi.github.io" }],
  creator: "Dwiki Riyadi",
  openGraph: {
    type: "website",
    url: "https://dwikiriyadi.github.io",
    title: "Dwiki Riyadi — Mobile Developer",
    description:
      "Portfolio of Dwiki Riyadi, a mobile developer specializing in Kotlin (Android/Compose) and Flutter. Projects, articles, and experience.",
    siteName: "Dwiki Riyadi",
    images: [
      { url: "/logo_rounded.svg", width: 512, height: 512, alt: "Dwiki Riyadi" },
    ],
  },
  twitter: {
    card: "summary",
    title: "Dwiki Riyadi — Mobile Developer",
    description:
      "Portfolio of Dwiki Riyadi, a mobile developer specializing in Kotlin (Android/Compose) and Flutter.",
    images: ["/logo_rounded.svg"],
  },
  icons: {
    icon: "/logo_rounded.svg",
    shortcut: "/logo_rounded.svg",
    apple: "/logo_rounded.svg",
  },
  themeColor: "#212121",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${firaCode.variable} antialiased bg-[#212121] text-white`}
      >
        {/* Set a consistent app-height CSS variable across devices */}
        <AppHeight />
        <OrientationGate />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
