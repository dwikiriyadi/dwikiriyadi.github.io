"use client";
import { useMediumArticles } from "@/hooks/useMediumArticles";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function Articles() {
  const { items, page, hasPrev, hasNext, prev, next, loading, error } = useMediumArticles();
  return (
    <section id="articles" className="min-h-screen flex flex-col justify-center py-16 scroll-mt-16 relative snap-start snap-always">
      <div className="container">
        <h2 className="section-title text-center">Articles</h2>
        {loading && <p className="text-neutral-400 text-center">Loading articles…</p>}
        {error && <p className="text-red-400 text-center">{error}</p>}
        {!loading && !error && (
          <>
            <ul className="space-y-4 max-w-3xl mx-auto">
              {items.map((a) => (
                <li key={a.id} className="p-4 border border-neutral-800 rounded">
                  <a href={a.link} target="_blank" className="font-medium text-white hover:underline">
                    {a.title}
                  </a>
                  <div className="text-sm text-neutral-500 mt-1">{new Date(a.pubDate).toLocaleDateString()}</div>
                  <p className="text-neutral-300 mt-2">{a.excerpt}</p>
                </li>
              ))}
            </ul>
            {/* Bottom-centered arrow buttons */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <button onClick={prev} disabled={!hasPrev} aria-label="Previous" className={`p-2 rounded-full border ${hasPrev ? "border-neutral-700 hover:bg-neutral-800" : "opacity-50 cursor-not-allowed border-neutral-800"}`}>
                <CaretLeft size={20} />
              </button>
              <button onClick={next} disabled={!hasNext} aria-label="Next" className={`p-2 rounded-full border ${hasNext ? "border-neutral-700 hover:bg-neutral-800" : "opacity-50 cursor-not-allowed border-neutral-800"}`}>
                <CaretRight size={20} />
              </button>
            </div>
            <div className="mt-4 text-center text-sm text-neutral-500">Page {page}</div>
          </>
        )}
      </div>
    </section>
  );
}
