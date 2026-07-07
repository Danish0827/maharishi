import Link from "next/link";
import Reveal from "./Reveal";

/* A gold-tinted media placeholder that mirrors the Figma image cards.
   Swap the background for a real <Image> later without touching layout. */
export function GradientMedia({
  className = "",
  tone = "warm",
  src,
  overlay = 0.55,
  label,
  icon,
  children,
}: {
  className?: string;
  tone?: "warm" | "deep" | "sage";
  src?: string;
  overlay?: number;
  label?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const tones: Record<string, string> = {
    warm: "from-[#C9A45B] via-[#B4863A] to-[#7C6120]",
    deep: "from-[#7C6120] via-[#5E4A18] to-[#3F3110]",
    sage: "from-[#A9A66B] via-[#8A8347] to-[#5E5A2E]",
  };
  return (
    <div
      className={`relative flex items-end overflow-hidden bg-gradient-to-br ${tones[tone]} ${className}`}
    >
      {/* Real photo (falls back to the gradient if it fails to load) */}
      {src && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${src}")` }}
          aria-hidden
        />
      )}
      {/* Gold tint overlay to match the Figma treatment */}
      {/* {src && (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${tones[tone]} mix-blend-multiply`}
          style={{ opacity: overlay }}
          aria-hidden
        />
      )} */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,rgba(255,255,255,.45),transparent_45%)]" />
      {icon && (
        <div className="absolute right-4 top-4 z-10 text-white/85">{icon}</div>
      )}
      {label && (
        <div className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
          <span className="text-sm font-semibold text-white">{label}</span>
        </div>
      )}
      {children}
    </div>
  );
}

export function ImageCard({
  title,
  text,
  cta,
  tone = "warm",
  src,
  delay = 0,
}: {
  title: string;
  text: string;
  cta?: string;
  tone?: "warm" | "deep" | "sage";
  src?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden  ">
        <GradientMedia tone={tone} src={src} overlay={0.5} className="h-[400px]">
          <div className="relative z-10 p-4">
            <h3 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-[#74570F] drop-shadow-sm pb-4">{title}</h3>
            <p className="flex-1 text-sm lg:text-base xl:text-lg  text-[#383838]">{text}</p>
          </div>
        </GradientMedia>
        {cta && (
          <Link
            href="/#book"
            className="flex flex-1 flex-col border border-brand-line transition-shadow hover:shadow-card shadow-soft mt-5 p-5 items-center justify-center gap-1.5 text-sm font-semibold text-brand-gold hover:gap-2.5 hover:text-brand-goldDark"
          >
            {cta}
          </Link>
        )}
      </div>
    </Reveal>
  );
}

export function NumberCard({
  n,
  title,
  text,
  delay = 0,
}: {
  n: number;
  title: string;
  text: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="h-full border border-brand-line bg-white p-6 shadow-soft transition-shadow hover:shadow-card">
        <span className="flex h-9 w-9 items-center justify-center  bg-brand-goldDark text-sm font-bold text-white">
          {n}
        </span>
        <h3 className="mt-4 text-[16px] font-bold text-brand-ink">{title}</h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-brand-body">{text}</p>
      </div>
    </Reveal>
  );
}

export function StepCard({
  n,
  label,
  text,
  tone = "deep",
  src,
  delay = 0,
}: {
  n: number;
  label: string;
  text: string;
  tone?: "warm" | "deep" | "sage";
  src?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <GradientMedia
        tone={tone}
        src={src}
        overlay={0.5}
        className="h-56 rounded-xl"
      >
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-brand-goldDark">
            {n}
          </span>
          <div className="rounded-lg bg-black/35 p-3 backdrop-blur-[1px]">
            <h4 className="text-sm font-bold text-white">{label}</h4>
            <p className="mt-1 text-[12px] leading-snug text-white/85">{text}</p>
          </div>
        </div>
      </GradientMedia>
    </Reveal>
  );
}

export function CtaBand({
  title,
  text,
  primary = "Book Free Consultation",
  href = "/#book",
}: {
  title: string;
  text: string;
  primary?: string;
  href?: string;
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-goldDark via-brand-goldDeep to-[#3F3110] px-6 py-12 text-center md:px-12 md:py-16">
            <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_80%_20%,rgba(199,166,79,.7),transparent_50%)]" />
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-[32px]">
                {title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/80">{text}</p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href={href} className="rounded-md bg-brand-goldLight px-7 py-3 text-sm font-semibold text-brand-goldDeep transition-colors hover:bg-white">
                  {primary}
                </Link>
                <a href="tel:+919811000000" className="btn-outline-light">
                  Call +91 98110 00000
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TrustBadge({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-white/25 bg-white/95 px-4 py-3 shadow-soft">
      <p className="text-[13px] font-bold text-brand-goldDark">{title}</p>
      <p className="text-[11px] leading-snug text-brand-body">{text}</p>
    </div>
  );
}
