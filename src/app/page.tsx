import ContactSection from "@/sections/contact/ContactSection";
import { Metadata } from "next";

const viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Dwiki Riyadi | Mobile Developer",
  description: "Dwiki Riyadi Website",
  viewport: viewport,
};

const Main = () => {
  return (
    <main>
      <ContactSection />
    </main>
  );
};

export default Main;
