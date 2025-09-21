"use client";
import { ReactNode, useState } from "react";

export interface TabItem {
  key: string;
  label: string;
  content: ReactNode;
}

export default function Tab({ items, defaultKey }: { items: TabItem[]; defaultKey?: string }) {
  const [active, setActive] = useState<string>(defaultKey ?? items[0]?.key);
  return (
    <div>
      <div role="tablist" aria-label="Tabs" className="w-full flex flex-wrap items-center justify-center gap-2 border-b border-neutral-800">
        {items.map((it) => (
          <button
            key={it.key}
            role="tab"
            aria-selected={active === it.key}
            className={`px-4 py-2 text-sm sm:text-base -mb-px border-b-2 transition-colors font-mono ${
              active === it.key ? "border-[var(--color-primary)] text-white" : "border-transparent text-[#9A9A9A] hover:text-neutral-200"
            }`}
            onClick={() => setActive(it.key)}
          >
            {it.label}
          </button>
        ))}
      </div>
      <div className="pt-6 animate-fadeIn">
        {items.find((i) => i.key === active)?.content}
      </div>
      <style jsx>{`
        .animate-fadeIn { animation: fade .2s ease-in; }
        @keyframes fade { from { opacity: 0; transform: translateY(4px);} to { opacity: 1; transform: translateY(0);} }
      `}</style>
    </div>
  );
}
