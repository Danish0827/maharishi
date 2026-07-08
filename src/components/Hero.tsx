import Link from "next/link";
import ConsultationForm from "./ConsultationForm";
import { TrustBadge } from "./blocks";

type Badge = { title: string; text: string };

export default function Hero({
  title,
  highlight,
  intro,
  badges,
  bgSrc,
  formVariant = "consultation",
  primaryCta = "Book Free Consultation",
  secondaryCta = "Talk to a Vaidya",
}: {
  title: string;
  highlight?: string;
  intro: string;
  badges: Badge[];
  bgSrc?: string;
  formVariant?: "consultation" | "panchakarma";
  primaryCta?: string;
  secondaryCta?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-goldDeep pt-20 px-5">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5E4A18] via-[#6E5719] to-[#8A6C24]" />
        {bgSrc && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-45"
            style={{ backgroundImage: `url("${bgSrc}")` }}
            aria-hidden
          />
        )}
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_75%_30%,rgba(199,166,79,.8),transparent_55%)]" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/70 via-black/40 to-transparent lg:w-2/3" />
      </div>
      <div className="container mx-auto relative z-10 grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex leading-relaxed items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-goldLight">
            NABH Accredited - Shalimar Bagh, Delhi NCR
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl md:text-[46px] space-y-">
            {title}{" "}
            {highlight && <span className="text-brand-goldLight pt-5">{highlight}</span>}
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/80">
            {intro}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="#book" className="bg-brand-goldLight px-6 py-3 text-center  font-semibold text-brand-goldDeep transition-colors hover:bg-white">
              {primaryCta}
            </Link>
            {/* <a href="tel:+919811000000" className="btn-outline-light rounded-none text-base">
              {secondaryCta}
            </a> */}
          </div>
          <div className="mt-8 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3">
            {badges.map((b) => (
              <TrustBadge key={b.title} title={b.title} text={b.text} />
            ))}
          </div>
        </div>
        <div className="lg:pl-4">
          <ConsultationForm variant={formVariant} />
        </div>
      </div>
    </section>
  );
}
