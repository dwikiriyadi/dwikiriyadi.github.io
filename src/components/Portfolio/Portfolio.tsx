"use client";
import Image from "next/image";
import Tab from "@/components/Tab/Tab";
import type { PortfolioItem, PortfolioCategory } from "@/types/portfolio";

const items: PortfolioItem[] = [
  {
    id: "1",
    title: "Fitness Tracker",
    description: "Android app with Jetpack Compose, offline-first architecture.",
    image: "/images/fitness.svg",
    link: "#",
    category: "Android",
  },
  {
    id: "2",
    title: "Travel Booking",
    description: "Flutter app with custom animations and theming.",
    image: "/images/travel.svg",
    link: "#",
    category: "Flutter",
  },
  {
    id: "3",
    title: "Finance Dashboard",
    description: "Clean UI exploration in Figma for a fintech dashboard.",
    image: "/images/finance.svg",
    category: "UI Design",
  },
  {
    id: "4",
    title: "Notes App",
    description: "Compose Material 3, Room, and WorkManager integration.",
    image: "/images/notes.svg",
    link: "#",
    category: "Android",
  },
];

function Carousel({ data }: { data: PortfolioItem[] }) {
  // Drag to scroll horizontally
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    isDown = true;
    startX = e.clientX;
    scrollLeft = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  }
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!isDown) return;
    const el = e.currentTarget;
    const walk = (e.clientX - startX) * -1; // drag right-to-left scrolls right
    el.scrollLeft = scrollLeft + walk;
  }
  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    isDown = false;
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch {}
  }
  return (
    <div
      className="overflow-x-auto snap-x snap-mandatory flex gap-4 pb-2 -mx-4 px-4 cursor-grab select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      aria-label="Portfolio items carousel"
    >
      {data.map((it) => (
        <article key={it.id} className="min-w-[280px] sm:min-w-[340px] lg:min-w-[380px] snap-start border border-neutral-800 rounded-lg overflow-hidden bg-neutral-950">
          <div className="aspect-[16/10] relative bg-neutral-900">
            <Image src={it.image} alt={it.title} fill sizes="(max-width:768px) 90vw, 380px" className="object-contain" />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-white">{it.title}</h3>
            <p className="text-sm text-neutral-400 mt-1">{it.description}</p>
            {it.link && (
              <a href={it.link} target="_blank" className="inline-block mt-3 text-sm font-medium text-[var(--color-primary)] hover:underline">View project →</a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const categories: ("All" | PortfolioCategory)[] = ["All", "Android", "Flutter", "UI Design"];
  return (
    <section id="portfolio" className="h-[var(--app-height,100vh)] flex items-center py-16 scroll-mt-16 snap-start snap-always">
      <div className="container w-full">
        <h2 className="section-title text-center">Portfolio</h2>
        <p className="text-center text-neutral-400 mt-1">A Collection of My Work</p>
        <Tab
          items={categories.map((cat) => ({
            key: cat,
            label: cat,
            content: <Carousel data={cat === "All" ? items : items.filter((i) => i.category === cat)} />,
          }))}
        />
      </div>
    </section>
  );
}
