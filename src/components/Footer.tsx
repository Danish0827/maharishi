import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-goldDeep text-white/80">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-goldLight/20 ring-1 ring-brand-goldLight/40">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 21c0-6 3-11 9-13-1 8-4 12-9 13Zm0 0C6 15 3 10 3 4c8 1 9 9 9 17Z" fill="#C7A64F" />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-extrabold tracking-wide">MAHARISHI</span>
              <span className="block text-[10px] uppercase tracking-[0.28em] text-brand-goldLight">
                Ayurveda Hospital
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            A NABH-accredited Ayurvedic hospital in Shalimar Bagh, Delhi NCR,
            blending classical Vaidya-led care with modern hospital standards.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-goldLight">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "Panchakarma", href: "/panchakarma" },
              { label: "Why Choose Us", href: "/#why" },
              { label: "Care Journey", href: "/#journey" },
              { label: "FAQs", href: "/#faq" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/75 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-goldLight">
            Programs
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>Ayurvedic OPD</li>
            <li>Panchakarma Therapy</li>
            <li>Residential Wellness</li>
            <li>Whole-Body Detox</li>
            <li>Women&apos;s Wellness</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-goldLight">
            Visit Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-2.5">
              <PinIcon />
              <span>Shalimar Bagh, Delhi NCR - 110088</span>
            </li>
            <li className="flex gap-2.5">
              <PhoneIcon />
              <a href="tel:+919811000000" className="hover:text-white">+91 98110 00000</a>
            </li>
            <li className="flex gap-2.5">
              <MailIcon />
              <a href="mailto:danish@healthus.ai" className="hover:text-white">
                danish@healthus.ai
              </a>
            </li>
            <li className="flex gap-2.5">
              <ClockIcon />
              <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Maharishi Ayurveda Hospital. All rights reserved.</p>
          <p className="flex gap-4">
            <span>NABH Accredited</span>
            <span aria-hidden>·</span>
            <span>Ministry of AYUSH aligned</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden>
      <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" stroke="#C7A64F" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.4" stroke="#C7A64F" strokeWidth="1.6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden>
      <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.25 1l-2.2 2.3Z" fill="#C7A64F" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="#C7A64F" strokeWidth="1.6" />
      <path d="m4 7 8 6 8-6" stroke="#C7A64F" strokeWidth="1.6" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="#C7A64F" strokeWidth="1.6" />
      <path d="M12 7v5l3 2" stroke="#C7A64F" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
