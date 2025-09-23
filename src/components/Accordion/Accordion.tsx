"use client";
import { useState } from "react";
import { Minus, Plus } from "@phosphor-icons/react";

export interface AccordionItemProps {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

/**
 * Reusable AccordionItem component.
 * Uncontrolled by default via internal open state; can be initialized with defaultOpen.
 * Usage:
 *   <ul>
 *     <AccordionItem title={<div>Header</div>}>
 *       <div>Content</div>
 *     </AccordionItem>
 *   </ul>
 */
export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  return (
    <li className="rounded border border-neutral-700">
      <button
        type="button"
        className="w-full text-left p-4 flex items-center justify-between gap-4"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <div className="min-w-0 flex-1">{title}</div>
        <div className="shrink-0 text-neutral-400">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </li>
  );
}

export default AccordionItem;
