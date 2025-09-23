"use client";
import Image from "next/image";
import Link from "next/link";
import Tab from "@/components/Tab/Tab";
import type { PortfolioItem } from "@/types/portfolio";
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from "@/data/portfolio";
import { useRef } from "react";

function Carousel({ data }: { data: PortfolioItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  function scrollByDir(dir: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const firstCard = el.querySelector("a") as HTMLElement | null;
    const gap = 16; // matches gap-4
    const amount = (firstCard?.offsetWidth ?? 360) + gap;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
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
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 pb-2">
        <button
          type="button"
          aria-label="Previous"
          className="h-9 w-9 rounded-full bg-[#212121] text-white flex items-center justify-center shadow-md/50 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          onClick={() => scrollByDir(-1)}
        >
          <span aria-hidden>❮</span>
        </button>
        <button
          type="button"
          aria-label="Next"
          className="h-9 w-9 rounded-full bg-[#212121] text-white flex items-center justify-center shadow-md/50 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          onClick={() => scrollByDir(1)}
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
    <section id="portfolio" className="min-h-[var(--app-height,100vh)] flex items-center py-16 scroll-mt-16 md:scroll-mt-2 snap-start snap-always bg-[#FFFFFF] text-[#212121]">
      <div className="container w-full">
        <h2 className="section-title text-center text-[#212121]">Portfolio</h2>
        <p className="text-center text-[#212121] mt-1">A Collection of My Work</p>
        <Tab
          theme="light"
          items={PORTFOLIO_CATEGORIES.map((cat) => ({
            key: cat,
            label: cat,
            content: <Carousel data={cat === "All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((i) => i.category === cat)} />,
          }))}
        />
      </div>
    </section>
  );
}
