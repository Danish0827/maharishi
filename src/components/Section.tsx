import Reveal from "./Reveal";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-5">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      {/* {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>} */}
      <h2 className="text-3xl font-semibold text-brand-goldDark md:text-4xl">{title}</h2>
      {intro && (
        <p className={`lede mt-4 ${center ? "" : "mx-0"}`}>{intro}</p>
      )}
    </Reveal>
  );
}

export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[15px] leading-relaxed text-brand-body">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center  bg-brand-gold/15">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M5 13l4 4L19 7" stroke="#9A7B2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}
