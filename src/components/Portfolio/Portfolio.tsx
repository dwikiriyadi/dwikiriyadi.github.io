"use client";
import Image from "next/image";
import Link from "next/link";
import Tab from "@/components/Tab/Tab";
import type { PortfolioItem } from "@/types/portfolio";
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from "@/data/portfolio";

function Carousel({ data }: { data: PortfolioItem[] }) {
  // Use native scrolling for drag on touch devices/trackpads to ensure links remain clickable
  return (
    <div
      className="overflow-x-auto snap-x snap-mandatory flex gap-4 pb-2 -mx-4 px-4"
      aria-label="Portfolio items carousel"
    >
      {data.map((it) => (
        <Link
          key={it.id}
          href={`/portfolio/${it.id}`}
          className="group w-[280px] sm:w-[340px] lg:w-[380px] flex-none snap-start border border-neutral-800 rounded-lg overflow-hidden bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] hover:border-neutral-600 hover:bg-neutral-900 transition-colors"
        >
          <div className="aspect-[16/10] relative bg-neutral-900">
            <Image src={it.image?.startsWith("/") ? it.image : `/${it.image}`} alt={it.title} fill sizes="(max-width:768px) 90vw, 380px" className="object-cover transition-transform duration-300 ease-out group-hover:scale-105" />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-white">{it.title}</h3>
            <p className="text-sm text-neutral-400 mt-1 clamp-6">{it.description}</p>
            <span className="inline-block mt-3 text-sm font-medium text-[var(--color-primary)] group-hover:underline">View details →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="h-[var(--app-height,100vh)] flex items-center py-16 scroll-mt-16 snap-start snap-always">
      <div className="container w-full">
        <h2 className="section-title text-center">Portfolio</h2>
        <p className="text-center text-neutral-400 mt-1">A Collection of My Work</p>
        <Tab
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
