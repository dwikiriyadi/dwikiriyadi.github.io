import ContactSection from "@/sections/contact/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dwiki Riyadi | Mobile Developer",
  description: "Dwiki Riyadi Website",
};

const Main = () => {
  return (
    <main>
      <ContactSection />
    </main>
  );
};

export default Main;
