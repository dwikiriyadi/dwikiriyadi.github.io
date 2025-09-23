"use client";
import Image from "next/image";
import Link from "next/link";
import Tab from "@/components/Tab/Tab";
import type { PortfolioItem } from "@/types/portfolio";
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from "@/data/portfolio";
import { useEffect, useRef, useState } from "react";

function Carousel({ data }: { data: PortfolioItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  function updateEdgeState() {
    const el = scrollerRef.current;
    if (!el) return;
    const epsilon = 1; // tolerate sub-pixel scroll values
    const atStart = el.scrollLeft <= epsilon - 1;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - epsilon;
    setIsAtStart(atStart);
    setIsAtEnd(atEnd);
  }

  useEffect(() => {
    // Run after layout and after potential image size calculations
    updateEdgeState();
    requestAnimationFrame(updateEdgeState);
    const timeoutId = window.setTimeout(updateEdgeState, 250);

    const el = scrollerRef.current;
    if (!el) return () => { window.clearTimeout(timeoutId); };
    const onScroll = () => updateEdgeState();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(timeoutId);
    };
  }, [data.length]);

  function scrollByDir(dir: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    // Prevent scroll if already at edges
    if ((dir === -1 && isAtStart) || (dir === 1 && isAtEnd)) return;
    const firstCard = el.querySelector("a") as HTMLElement | null;
    const gap = 16; // matches gap-4
    const amount = (firstCard?.offsetWidth ?? 360) + gap;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
    // schedule an update after smooth scroll
    setTimeout(updateEdgeState, 300);
  }
  // Use native scrolling for drag on touch devices/trackpads to ensure links remain clickable
  return (
    <div className="relative -mx-[calc(50vw-50%)] w-screen max-w-[100vw]">
      <div
        ref={scrollerRef}
        className="carousel overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-4 pl-4 sm:pl-6 pr-24 pb-16"
        aria-label="Portfolio items carousel"
      >
        {data.map((it) => (
          <Link
            key={it.id}
            href={`/portfolio/${it.id}`}
            className="group w-[320px] sm:w-[400px] lg:w-[480px] flex-none snap-start rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          >
            <div className="aspect-[4/3] relative">
              <Image src={it.image?.startsWith("/") ? it.image : `/${it.image}`} alt={it.title} fill sizes="(max-width:768px) 90vw, 480px" className="object-contain transition-transform duration-300 ease-out group-hover:scale-105" />
            </div>
            <div className="pt-2 pb-1">
              <h3 className="font-semibold text-center text-[#212121]">{it.title}</h3>
              <div className="mt-1 text-center text-sm text-neutral-500">
                {(it.categories && it.categories.length > 0 ? it.categories : (it.category ? [it.category] : []))
                  .join(" • ")}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 pb-2">
        <button
          type="button"
          aria-label="Previous"
          className={`h-9 w-9 rounded-full bg-[#212121] text-white flex items-center justify-center shadow-md/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
            isAtStart ? "opacity-40 cursor-default" : "hover:opacity-90"
          }`}
          onClick={() => scrollByDir(-1)}
          disabled={isAtStart}
          aria-disabled={isAtStart}
        >
          <span aria-hidden>❮</span>
        </button>
        <button
          type="button"
          aria-label="Next"
          className={`h-9 w-9 rounded-full bg-[#212121] text-white flex items-center justify-center shadow-md/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
            isAtEnd ? "opacity-40 cursor-default" : "hover:opacity-90"
          }`}
          onClick={() => scrollByDir(1)}
          disabled={isAtEnd}
          aria-disabled={isAtEnd}
        >
          <span aria-hidden>❯</span>
        </button>
      </div>
      <style jsx>{`
        .carousel { scrollbar-width: none; }
        .carousel::-webkit-scrollbar { height: 8px; background: transparent; }
        .carousel::-webkit-scrollbar-track { background: transparent; }
        .carousel::-webkit-scrollbar-thumb { background: transparent; }
      `}</style>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden min-h-[var(--app-height,100vh)] flex items-center py-16 scroll-mt-16 md:scroll-mt-2 snap-start snap-always">
      {/* Diagonal white background to create angled cuts with the dark surrounding sections */}
      <div className="absolute inset-0 -z-10 bg-[#FFFFFF] [clip-path:polygon(0_6vw,100%_0,100%_calc(100%_-_6vw),0%_100%)]" aria-hidden></div>
      <div className="container w-full text-[#212121]">
        <h2 className="section-title text-center text-[#212121]">Portfolio</h2>
        <p className="text-center text-[#212121] mt-1">A Collection of My Work</p>
        <Tab
          theme="light"
          items={PORTFOLIO_CATEGORIES.map((cat) => ({
            key: cat,
            label: cat,
            content: <Carousel data={cat === "All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((i) => (i.categories ? i.categories.includes(cat as any) : i.category === cat))} />,
          }))}
        />
      </div>
    </section>
  );
}
