"use client";

import "./globals.scss";
import { Open_Sans } from "next/font/google";
import { useCallback, useState } from "react";
import NavigationDrawer from "@/components/navigation/NavigationDrawer";
import AppBar from "@/components/appbar/AppBar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const openSans = Open_Sans({ subsets: ["latin"] });

type IRootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: IRootLayoutProps) => {
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);

  const toggleNav = useCallback(() => {
    setIsNavExpanded(!isNavExpanded);
  }, [isNavExpanded]);

  return (
    <html lang="en">
      <body className={openSans.className}>
        <AppBar isNavExpanded={isNavExpanded} onNavToggleClick={toggleNav} />

        <NavigationDrawer
          isNavExpanded={isNavExpanded}
          onNavToggleClick={toggleNav}
        />

        {children}
      </body>
    </html>
  );
};

export default RootLayout;
