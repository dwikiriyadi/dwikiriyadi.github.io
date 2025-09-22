"use client";
import { useEffect } from "react";

export default function AppHeight() {
  useEffect(() => {
    const set = () => {
      const vh = (globalThis as Window & typeof globalThis).visualViewport?.height ?? window.innerHeight;
      document.documentElement.style.setProperty("--app-height", `${vh}px`);
    };
    set();
    const vv = (globalThis as Window & typeof globalThis).visualViewport;
    vv?.addEventListener("resize", set);
    window.addEventListener("resize", set);
    window.addEventListener("orientationchange", set);
    return () => {
      vv?.removeEventListener("resize", set);
      window.removeEventListener("resize", set);
      window.removeEventListener("orientationchange", set);
    };
  }, []);
  return null;
}
