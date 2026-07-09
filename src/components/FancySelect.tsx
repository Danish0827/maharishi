"use client";

import { useEffect, useId, useRef, useState } from "react";

export default function FancySelect({
  label,
  name,
  options,
  placeholder = "Select an option",
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder?: string;
  required?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  // Close on outside click
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function choose(opt: string) {
    setValue(opt);
    setOpen(false);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      setActive((a) => {
        const next = e.key === "ArrowDown" ? a + 1 : a - 1;
        return (next + options.length) % options.length;
      });
    }
    if ((e.key === "Enter" || e.key === " ") && open) {
      e.preventDefault();
      choose(options[active]);
    } else if (e.key === "Enter" && !open) {
      e.preventDefault();
      setOpen(true);
    }
  }

  return (
    <div className="block">
      <span className="mb-1 block text-[12px] font-medium text-brand-ink">
        {label} {required && <span className="text-brand-gold">*</span>}
      </span>

      {/* value carried into FormData */}
      <input type="hidden" name={name} value={value} />

      <div ref={rootRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          onKeyDown={onKeyDown}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          className={`flex w-full items-center justify-between gap-2 rounded-md border bg-white px-3 py-2.5 text-left text-sm outline-none transition-colors ${
            open
              ? "border-brand-gold ring-2 ring-brand-gold/20"
              : "border-brand-line hover:border-brand-gold/50"
          }`}
        >
          <span className={value ? "text-brand-ink" : "text-brand-muted"}>
            {value || placeholder}
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className={`shrink-0 text-brand-gold transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden
          >
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {open && (
          <ul
            id={listId}
            role="listbox"
            className="absolute left-0 right-0 top-[calc(100%+6px)] z-30 max-h-60 overflow-auto rounded-lg border border-brand-line bg-white p-1.5 shadow-card animate-fade-up"
          >
            {options.map((opt, i) => {
              const selected = opt === value;
              return (
                <li key={opt} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => choose(opt)}
                    className={`flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-left text-[13.5px] transition-colors ${
                      selected
                        ? "bg-brand-gold/10 font-semibold text-brand-goldDark"
                        : active === i
                        ? "bg-brand-cream text-brand-ink"
                        : "text-brand-body"
                    }`}
                  >
                    <span>{opt}</span>
                    {selected && (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M5 13l4 4L19 7" stroke="#9A7B2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
