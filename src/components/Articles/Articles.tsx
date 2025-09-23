"use client";
import { useEffect, useRef, useState } from "react";
import { useMediumArticles } from "@/hooks/useMediumArticles";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function Articles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const [pageSize, setPageSize] = useState<number>(3);

  // Recalculate items per page based on viewport width: mobile=3, desktop=5
  useEffect(() => {
    function compute() {
      const w = window.innerWidth;
      const per = w < 768 ? 3 : 5; // < md => 3, >= md => 5
      setPageSize(per);
    }
    compute();
    const ro = new ResizeObserver(() => compute());
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("resize", compute);
      ro.disconnect();
    };
  }, []);

  const { items, page, hasPrev, hasNext, prev, next, loading, error } = useMediumArticles(pageSize);

  return (
    <section id="articles" className="relative overflow-hidden min-h-[var(--app-height,100vh)] py-16 scroll-mt-16 md:scroll-mt-2 snap-start snap-always flex items-center">
      <div ref={containerRef} className="container h-full flex flex-col">
        {/* Header at top */}
        <div ref={headerRef} className="text-center">
          <h2 className="section-title">Articles</h2>
          <p className="text-center text-neutral-400 mt-1">Read My Latest Thoughts</p>
        </div>

        {/* Content fills available space */}
        <div className="flex-1 mt-4">
          {loading && <p className="text-neutral-400 text-center">Loading articles…</p>}
          {error && <p className="text-red-400 text-center">{error}</p>}
          {!loading && !error && (
            <ul className="space-y-4 max-w-3xl mx-auto overflow-auto pr-1">
              {items.map((a) => (
                <li key={a.id}>
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-neutral-800 rounded hover:bg-neutral-900/50 hover:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#C12323] transition-colors"
                  >
                    <h3 className="font-medium text-white">{a.title}</h3>
                    <div className="text-sm text-neutral-500 mt-1">{new Date(a.pubDate).toLocaleDateString()}</div>
                    <p className="text-neutral-300 mt-2 clamp-2">{a.excerpt}</p>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Controls at bottom */}
        <div ref={controlsRef} className="mt-4 flex items-center justify-center gap-2">
          <button onClick={prev} disabled={!hasPrev} aria-label="Previous" className={`p-2 rounded-full border ${hasPrev ? "border-neutral-700 hover:bg-neutral-800" : "opacity-50 cursor-not-allowed border-neutral-800"}`}>
            <CaretLeft size={20} />
          </button>
          <button onClick={next} disabled={!hasNext} aria-label="Next" className={`p-2 rounded-full border ${hasNext ? "border-neutral-700 hover:bg-neutral-800" : "opacity-50 cursor-not-allowed border-neutral-800"}`}>
            <CaretRight size={20} />
          </button>
          <span className="ml-3 text-sm text-neutral-500">Page {page}</span>
        </div>
      </div>
    </section>
  );
}
