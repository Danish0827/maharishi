import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your enquiry has been received. Our care team will contact you shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_50%_0%,rgba(199,166,79,.25),transparent_55%)]" />
      <div className="container-page relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-gold/15">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-goldDark">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <p className="eyebrow mt-8">Enquiry Received</p>
        <h1 className="mt-3 text-3xl font-extrabold text-brand-goldDark sm:text-4xl">
          Thank You - We&apos;ve Got Your Details
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-brand-body">
          A member of our care team at Maharishi Ayurveda Hospital will reach out
          shortly to understand your concern and schedule your consultation. Please
          keep your phone handy.
        </p>

        <div className="mt-8 grid w-full max-w-lg gap-3 sm:grid-cols-3">
          {[
            { t: "We Review", d: "Your details reach a Vaidya" },
            { t: "We Call", d: "Usually within a few hours" },
            { t: "We Plan", d: "A personalised path for you" },
          ].map((s) => (
            <div key={s.t} className="rounded-lg border border-brand-line bg-white px-4 py-4">
              <p className="text-sm font-bold text-brand-goldDark">{s.t}</p>
              <p className="mt-1 text-[12px] leading-snug text-brand-body">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <a href="tel:+919811000000" className="btn-outline">Call Us Now</a>
        </div>

        <p className="mt-8 text-[13px] text-brand-muted">
          Need urgent help? Email{" "}
          <a href="mailto:danish@healthus.ai" className="font-semibold text-brand-gold hover:underline">
            danish@healthus.ai
          </a>
        </p>
      </div>
    </section>
  );
}
