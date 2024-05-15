import ContactSection from "@/sections/contact/ContactSection";
import { Metadata } from "next";
import { Viewport } from "next/dist/lib/metadata/types/extra-types";

const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dwiki Riyadi | Mobile Developer",
  description: "Dwiki Riyadi Website",
  viewport: viewport,
};

const Main = () => {
  return (
    <main>
      <div className="indicator vertical top right">
        {/* TODO: */}
        <a href="#home" className="dot square" data-active="false"></a>
        <a href="#about" className="dot square" data-active="false"></a>
        <a href="#blog" className="dot square" data-active="false"></a>
        <a href="#portofolio" className="dot square" data-active="false"></a>
        <a href="#contact" className="dot square active" data-active="true"></a>
      </div>

      <ContactSection />

      <footer className="footer">
        <span>Copyright © {new Date().getFullYear()} | Dwiki Riyadi</span>
      </footer>
    </main>
  );
};

export default Main;
