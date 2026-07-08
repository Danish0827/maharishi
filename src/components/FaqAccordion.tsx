"use client";

import { useState } from "react";

export type Faq = { q: string; a: string };

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`overflow-hidden border transition-colors ${
              isOpen ? "border-brand-gold/50 bg-white" : "border-brand-line bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-[15px] font-semibold text-brand-ink">{item.q}</span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[14px] leading-relaxed text-brand-body">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
