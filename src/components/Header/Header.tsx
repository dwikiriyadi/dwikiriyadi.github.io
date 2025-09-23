"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SidebarSimple, GithubLogo } from "@phosphor-icons/react";
import { NAV_ITEMS, SECTION_IDS } from "@/data/navigation";

const EXPANDED_WIDTH = "16rem"; // 256px
const RAIL_WIDTH = "4.5rem"; // 72px

export default function Header() {
  // Drawer state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopHidden, setDesktopHidden] = useState(true); // start hidden (rail on desktop)
  const [hash, setHash] = useState<string>(typeof window !== "undefined" ? window.location.hash || "#about" : "#about");
  // Scroll progress (0..1)
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sync hash for active nav state and close mobile on navigation
  useEffect(() => {
    const onHash = () => {
      setHash(window.location.hash || "#about");
      setMobileOpen(false);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Compute numbered labels
  const numbered = useMemo(
    () =>
      NAV_ITEMS.map((it, idx) => ({
        ...it,
        num: String(idx).padStart(2, "0"),
      })),
    []
  );

  // Update CSS var for content left padding to create sliding effect
  useEffect(() => {
    const setVar = () => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      let width = "0";
      if (isDesktop) {
        width = desktopHidden ? RAIL_WIDTH : EXPANDED_WIDTH;
      } else {
        width = mobileOpen ? EXPANDED_WIDTH : "0";
      }
      document.documentElement.style.setProperty("--sidebar-width", width);
    };
    setVar();
    const onResize = () => setVar();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [desktopHidden, mobileOpen]);

  // Auto-show once on first scroll beyond the first viewport
  useEffect(() => {
    const key = "autoDrawerShown";
    const already = typeof window !== "undefined" && sessionStorage.getItem(key) === "1";
    if (already) return;
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      if (y > window.innerHeight * 0.6) {
        // Show only once
        sessionStorage.setItem(key, "1");
        if (window.matchMedia("(min-width: 768px)").matches) {
          setDesktopHidden(false);
        } else {
          // Do not auto-open drawer on mobile; keep it hidden
        }
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true } as AddEventListenerOptions);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll progress calculation
  useEffect(() => {
    const calc = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const max = Math.max(0, (doc.scrollHeight || 0) - window.innerHeight);
      const p = max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;
      setScrollProgress(p);
    };
    calc();
    window.addEventListener("scroll", calc, { passive: true } as AddEventListenerOptions);
    window.addEventListener("resize", calc);
    return () => {
      window.removeEventListener("scroll", calc);
      window.removeEventListener("resize", calc);
    };
  }, []);

  // Observe sections for scroll spy
  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const onIntersect: IntersectionObserverCallback = (entries) => {
      // Determine which section is the most visible
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
      if (!visible.length) return;
      const top = visible[0].target as HTMLElement;
      const newHash = `#${top.id}`;
      if (newHash !== hash) {
        setHash(newHash);
        try {
          history.replaceState(null, "", newHash);
        } catch {}
      }
    };

    const observer = new IntersectionObserver(onIntersect, {
      root: null,
      threshold: [0.25, 0.5, 0.6, 0.75, 0.9],
      rootMargin: "-20% 0px -35% 0px",
    });
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [hash]);

  // Mobile open button (Phosphor Sidebar icon)
  return (
    <>
      {/* Top scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-50 pointer-events-none">
        <div
          className="h-full bg-[var(--color-primary)] shadow-[0_0_8px_rgba(193,35,35,0.6)]"
          style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          aria-hidden
        />
      </div>

      {!mobileOpen && (
        <button
          aria-label="Open menu"
          className="md:hidden fixed top-3 left-3 z-50 p-2 rounded bg-neutral-900/80 text-white border border-neutral-800"
          onClick={() => setMobileOpen(true)}
        >
          <SidebarSimple size={22} weight="regular" />
        </button>
      )}

      {/* Drawer / Sidebar */}
      <aside
        className={
          [
            "fixed top-0 left-0 z-40 h-[var(--app-height,100vh)] bg-[var(--color-secondary)] text-white border-r border-neutral-800",
            // Mobile slide in/out
            mobileOpen ? "translate-x-0 w-64" : "-translate-x-full w-64",
            // Desktop pinned; we avoid translate to keep it visible as rail
            "md:translate-x-0 md:w-auto",
          ].join(" ")
        }
        style={{ width: undefined }}
        aria-label="Site navigation drawer"
      >
        {/* Wrapper that adapts width on desktop via CSS var */}
        <div className="h-full flex flex-col" style={{ width: "var(--sidebar-width)" }}>
          {/* Header inside drawer */}
          <div className="px-3 pt-5 pb-4 border-b border-neutral-800 flex items-start justify-between gap-2">
            {/* Name and role (hide in rail) */}
            <div className={"min-w-0 " + (desktopHidden ? "md:hidden" : "")}>
              <div className="text-lg font-semibold">Dwiki Riyadi</div>
              <div className="text-sm text-neutral-400">Mobile Developer</div>
            </div>
            {/* Toggle button on the right using Phosphor icon */}
            <button
              onClick={() => setDesktopHidden((v) => !v)}
              className="hidden md:inline-flex shrink-0 p-2 rounded border border-neutral-700 text-neutral-200 hover:bg-neutral-900"
              aria-pressed={desktopHidden}
              aria-label={desktopHidden ? "Expand sidebar" : "Collapse to rail"}
              title={desktopHidden ? "Expand sidebar" : "Collapse to rail"}
            >
              <SidebarSimple size={18} weight={desktopHidden ? "regular" : "fill"} />
            </button>
            {/* Mobile close */}
            <button
              onClick={() => setMobileOpen(false)}
              className="md:hidden absolute top-3 right-3 p-2 rounded border border-neutral-700 text-neutral-200"
              aria-label="Close menu"
              title="Close"
            >
              <SidebarSimple size={18} weight="fill" />
            </button>
          </div>

          {/* Nav items positioned toward bottom start */}
          <div className="flex-1 flex flex-col">
            {/* When expanded: full nav with labels; when rail: only numbers */}
            <nav className="mt-auto px-2 pb-3 space-y-1 font-mono">
              {numbered.map((it) => {
                const active = hash === it.href;
                return (
                  <a
                    key={it.href}
                    href={it.href}
                    className={[
                      "group flex items-center gap-2 rounded px-3 py-2 transition-colors",
                      desktopHidden ? "md:justify-center" : "",
                    ].join(" ")}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span
                      className={[
                        "text-[11px] tracking-widest",
                        active ? "text-[var(--color-primary)]" : "text-[#9A9A9A]",
                      ].join(" ")}
                    >
                      {it.num}
                    </span>
                    {/* Mobile: show divider and label always when drawer is open */}
                    <span
                      className={[
                        "md:hidden",
                        active ? "text-[var(--color-primary)]" : "text-[#9A9A9A] group-hover:text-white",
                      ].join(" ")}
                    >
                      <span className="px-1">|</span>
                      <span>{it.label}</span>
                    </span>
                    {/* Desktop: show divider and label only when expanded (not in rail) */}
                    {!desktopHidden && (
                      <>
                        <span className={(active ? "text-[var(--color-primary)]" : "text-[#9A9A9A] group-hover:text-white") + " hidden md:inline"}>
                          |
                        </span>
                        <span className={(active ? "text-[var(--color-primary)]" : "text-[#9A9A9A] group-hover:text-white") + " hidden md:inline"}>
                          {it.label}
                        </span>
                      </>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Footer with logo and GitHub link */}
            <div className={"mt-2 px-3 py-4 border-t border-neutral-800 flex items-center gap-3 justify-start " + (desktopHidden ? "md:justify-center" : "")}>
              <div className="flex items-center">
                {/* Show logo as a link to home; in rail (desktop), center; on mobile always start */}
                <Link href="/#home" aria-label="Go to home" onClick={() => setMobileOpen(false)} className="block">
                  <Image src="/logo_rounded.svg" alt="Logo" width={36} height={36} className="cursor-pointer" />
                </Link>
              </div>
              {/* Mobile: always show GitHub link when drawer is visible */}
              <a
                href="https://github.com/dwikiriyadi"
                target="_blank"
                className="inline-flex items-center gap-2 text-[#9A9A9A] md:hidden"
                aria-label="GitHub"
              >
                <GithubLogo size={24} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              {/* Desktop: show GitHub only when expanded */}
              {!desktopHidden && (
                <a
                  href="https://github.com/dwikiriyadi"
                  target="_blank"
                  className="hidden md:inline-flex items-center gap-2 text-[#9A9A9A]"
                  aria-label="GitHub"
                >
                  <GithubLogo size={24} />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
