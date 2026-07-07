"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Panchakarma", href: "/panchakarma" },
  { label: "Why Choose Us", href: "/#why" },
  { label: "Care Journey", href: "/#journey" },
  { label: "FAQs", href: "/#faq" },
];

const PHONE = "+91 98110 00000";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 duration-500 ${scrolled ? "top-0" : "top-4 lg:top-10 px-4"}`}
    >
      <div className={`w-full border-b transition-colors duration-300 ${scrolled
        ? "border-brand-goldDark/30 top-0 bg-brand-goldDeep/95 backdrop-blur"
        : "top-10 bg- backdrop-blur border border-white/40 container mx-auto "
        }`}>
        <div className="container px-5 lg:px-10 mx-auto flex h-20 items-center justify-between gap-4 md:h-24">
          <Link href="/" className="flex items-center gap-2.5 text-white">
            <Image src="/images/logo.svg" alt="Maharishi Ayurveda" width={200} height={200} className="h-20 lg:h-24"/>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
            >
              <PhoneIcon />
              <span className="hidden xl:inline">{PHONE}</span>
            </a>
            <Link
              href="/#book"
              className="rounded-md bg-brand-goldLight px-4 py-2 text-sm font-semibold text-brand-goldDeep transition-colors hover:bg-white"
            >
              Book Consultation
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
          >
            <span className="sr-only">Menu</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-brand-goldDeep lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2.5 text-[15px] font-medium text-white/90 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-2 px-2 text-sm text-white/90"
              >
                <PhoneIcon /> {PHONE}
              </a>
              <Link
                href="/#book"
                className="rounded-md bg-brand-goldLight px-4 py-2.5 text-center text-sm font-semibold text-brand-goldDeep"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function LeafMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21c0-6 3-11 9-13-1 8-4 12-9 13Zm0 0C6 15 3 10 3 4c8 1 9 9 9 17Z"
        fill="#C7A64F"
      />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.25 1l-2.2 2.3Z"
        fill="currentColor"
      />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
