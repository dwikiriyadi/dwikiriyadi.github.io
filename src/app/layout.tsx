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
  title: "Dwiki Riyadi — Portfolio",
  description: "Personal portfolio website of Dwiki Riyadi.",
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
