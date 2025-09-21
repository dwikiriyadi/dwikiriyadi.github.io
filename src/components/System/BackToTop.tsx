"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setVisible(y > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true } as AddEventListenerOptions);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toTop() {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.location.hash = "#home";
    }
  }

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      title="Back to top"
      className={[
        "fixed right-4 bottom-4 md:right-6 md:bottom-6",
        "z-30 p-3 rounded-full border backdrop-blur",
        "bg-neutral-900/80 border-neutral-800 text-white",
        "shadow-lg transition-opacity",
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <ArrowUp size={20} />
    </button>
  );
}
