"use client";
import { ReactNode, useEffect, useState } from "react";

export interface TabItem {
  key: string;
  label: string;
  content: ReactNode;
}

export default function Tab({ items, defaultKey, activeKey, onChange, theme = "dark" }: { items: TabItem[]; defaultKey?: string; activeKey?: string; onChange?: (key: string) => void; theme?: "dark" | "light" }) {
  const isControlled = activeKey !== undefined;
  const [internalActive, setInternalActive] = useState<string>(defaultKey ?? items[0]?.key);
  const active = isControlled ? (activeKey as string) : internalActive;
  useEffect(() => {
    if (!isControlled && defaultKey) setInternalActive(defaultKey);
  }, [defaultKey, isControlled]);
  function setActive(key: string) {
    if (!isControlled) setInternalActive(key);
    onChange?.(key);
  }
  const isLight = theme === "light";
  return (
    <div>
      <div role="tablist" aria-label="Tabs" className={`w-full flex flex-wrap items-center justify-center gap-2 border-b ${isLight ? "border-neutral-200" : "border-neutral-800"}`}>
        {items.map((it) => (
          <button
            key={it.key}
            role="tab"
            aria-selected={active === it.key}
            className={`px-4 py-2 text-sm sm:text-base -mb-px border-b-2 transition-colors font-mono ${
              active === it.key
                ? `border-[var(--color-primary)] ${isLight ? "text-[#212121]" : "text-white"}`
                : `${isLight ? "text-[#9A9A9A] hover:text-[#212121]" : "text-[#9A9A9A] hover:text-neutral-200"} border-transparent`
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
