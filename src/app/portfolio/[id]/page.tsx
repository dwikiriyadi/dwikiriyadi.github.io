import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import type { PortfolioItem } from "@/types/portfolio";
import PortfolioGallery from "@/components/Portfolio/PortfolioGallery";

export function generateStaticParams() {
  return PORTFOLIO_ITEMS.map((item) => ({ id: item.id }));
}

function getItem(id: string): { item: PortfolioItem; index: number } | null {
  const index = PORTFOLIO_ITEMS.findIndex((i) => i.id === id);
  if (index === -1) return null;
  return { item: PORTFOLIO_ITEMS[index], index };
}

export default function Page({ params }: { params: { id: string } }) {
  const found = getItem(params.id);
  if (!found) return notFound();
  const { item, index } = found;
  const prev = PORTFOLIO_ITEMS[(index - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length];
  const next = PORTFOLIO_ITEMS[(index + 1) % PORTFOLIO_ITEMS.length];

  return (
    <main className="md:h-[var(--app-height,100vh)] md:overflow-hidden">
      {/* Content */}
      <div className="container py-6 pb-24 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:h-[var(--app-height,100vh)] items-stretch">
          {/* Left column */}
          <div className="flex flex-col gap-4 md:py-10 md:pb-20 md:overflow-y-auto">
            <div className="flex items-center justify-between">
              <Link href="/#portfolio" className="inline-flex items-center gap-2 text-neutral-300 hover:text-white">
                <span aria-hidden>←</span> Back
              </Link>
            </div>

            <div className="mt-2">
              <div className="uppercase text-xs tracking-widest text-neutral-400">About</div>
              <h1 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">{item.title}</h1>
              {item.company && <div className="text-neutral-400 mt-1">{item.company}</div>}
            </div>

            <p className="text-neutral-300 leading-7 whitespace-pre-line">{item.description}</p>

            {/* Links */}
            {item.links && item.links.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {item.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded border border-neutral-800 text-neutral-100 hover:border-neutral-700 hover:bg-neutral-800/40"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Right column: gallery */}
          <div className="min-h-[300px] md:h-[var(--app-height,100vh)] md:py-10 md:pb-20">
            <PortfolioGallery images={item.images} backgroundImages={item.backgroundImages} />
          </div>
        </div>
      </div>

      {/* Bottom fixed controls */}
      <div className="fixed bottom-4 inset-x-0">
        <div className="container">
          <div className="flex items-center justify-between gap-4">
            <Link href={`/portfolio/${prev.id}`} className="inline-flex items-center gap-2 px-4 py-2 rounded bg-neutral-900/70 backdrop-blur border border-neutral-800 hover:bg-neutral-900 text-neutral-100">
              <span aria-hidden>←</span> Previous
            </Link>
            <Link href={`/portfolio/${next.id}`} className="inline-flex items-center gap-2 px-4 py-2 rounded bg-neutral-900/70 backdrop-blur border border-neutral-800 hover:bg-neutral-900 text-neutral-100">
              Next <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
