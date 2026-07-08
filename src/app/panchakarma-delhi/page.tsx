import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { Section, SectionHeading, CheckItem } from "@/components/Section";
import { ImageCard, NumberCard, StepCard, CtaBand, GradientMedia } from "@/components/blocks";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import { IMG } from "@/lib/images";
import Header from "@/components/Header";
import HospitalFooter from "@/components/HospitalFooter";

export const metadata: Metadata = {
  title: "Vaidya-Led Panchakarma in Delhi NCR",
  description:
    "Classical, supervised Panchakarma in Delhi NCR - personalised assessment, day-care and residential pathways at a NABH-accredited Ayurvedic hospital.",
};

const HERO_BADGES = [
  { title: "Vaidya-Led", text: "Assessed before therapy" },
  { title: "Classical Protocols", text: "Authentic five-action care" },
  { title: "Day & Residential", text: "Pathways to suit you" },
];

const NOT_GENERIC = [
  {
    title: "Assessment First",
    text: "Panchakarma begins with a Vaidya assessment - never a fixed package. Your prakriti and current state decide the protocol.",
    tone: "warm" as const,
    src: IMG.shirodhara,
  },
  {
    title: "Prepared, Not Rushed",
    text: "Poorva karma (preparation) with oleation and fomentation readies the body so the main therapies work safely.",
    tone: "deep" as const,
    src: IMG.herbalOil,
  },
  {
    title: "Supervised Detox",
    text: "Every procedure is delivered by trained therapists under physician oversight, with rest and diet built in.",
    tone: "sage" as const,
    src: IMG.oilTherapy,
  },
];

const CONSIDER = [
  "Chronic lifestyle concerns that keep returning despite treatment",
  "High stress, poor sleep and persistent fatigue",
  "Digestive, skin or metabolic imbalances",
  "A structured reset for long-term preventive health",
  "Recovery and rejuvenation after illness or burnout",
];

const DIFFERENT = [
  "Personalised protocol - never a one-size detox package",
  "NABH-accredited safety, hygiene and documentation",
  "Trained therapists for authentic classical procedures",
  "Physician review before, during and after therapy",
  "Clear diet, rest and follow-up plan for lasting results",
];

const THERAPIES = [
  { title: "Abhyanga", text: "Warm medicated-oil massage to mobilise toxins and calm the nervous system." },
  { title: "Swedana", text: "Herbal steam and fomentation that loosens accumulated doshas before cleansing." },
  { title: "Basti", text: "Classical medicated enema - one of the most valued Panchakarma actions for vata." },
  { title: "Nasya", text: "Nasal administration of medicated oils for head, sinus and clarity concerns." },
];

const JOURNEY = [
  { label: "Assessment", text: "Vaidya evaluates prakriti and suitability.", src: IMG.shirodhara },
  { label: "Preparation", text: "Oleation and fomentation to ready the body.", src: IMG.herbalOil },
  { label: "Main Therapy", text: "Supervised classical cleansing procedures.", src: IMG.hotStone },
  { label: "Recovery", text: "Diet, rest and rejuvenation protocol.", src: IMG.diet },
  { label: "Follow-Up", text: "Lifestyle plan to sustain the results.", src: IMG.yogaMountain },
];

const BEFORE = [
  "Share your full medical history and current medication",
  "Keep two to three lighter days before intensive therapy",
  "Plan for adequate rest - avoid heavy travel right after",
  "Follow the diet and daily routine your Vaidya advises",
];

const FAQS = [
  {
    q: "Is Panchakarma just a spa detox?",
    a: "No. Panchakarma is a classical medical process with preparation, main procedures and recovery, delivered under a Vaidya's supervision. It is personalised, not a fixed wellness package.",
  },
  {
    q: "How long does a Panchakarma program take?",
    a: "It depends on your assessment. Some protocols run over 7-14 days, others longer. Your Vaidya recommends a duration based on your concern and body type.",
  },
  {
    q: "Should I choose day-care or residential?",
    a: "Day-care suits milder concerns and those who can rest well at home. Residential is advised when continuous supervision, diet control and rest support better outcomes.",
  },
  {
    q: "Can I do Panchakarma while working?",
    a: "Light schedules can work for day-care pathways, but the therapies are most effective with adequate rest. We help you plan a realistic program around your commitments.",
  },
  {
    q: "Is it safe for older adults?",
    a: "Yes, when properly assessed. Protocols are adjusted for age, strength and existing conditions, which is exactly why we assess before recommending any therapy.",
  },
];

export default function PanchakarmaPage() {
  return (
    <>
     <Header />
      <Hero
        title="Vaidya-Led Panchakarma in"
        highlight="Delhi NCR"
        intro="Panchakarma done the classical way - assessed by a Vaidya, prepared with care and delivered under hospital-grade supervision. Choose day-care or residential pathways at our Shalimar Bagh centre."
        badges={HERO_BADGES}
        bgSrc="/images/banner.webp"
        formVariant="panchakarma"
        primaryCta="Book Assessment"
        secondaryCta="Talk to a Vaidya"
      />
      {/* Not generic */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="The Right Way"
          title="Panchakarma Is Not a Generic Detox Package"
          intro="Authentic Panchakarma is a guided medical process - assessed, prepared and supervised - not an off-the-shelf cleanse."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-center">
          {NOT_GENERIC.map((s, i) => (
            <ImageCard key={s.title} {...s} delay={i * 80} />
          ))}
        </div>
      </Section>
      {/* Two column cards */}
      <Section className="bg-brand-cream">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-gradient-to-br from-brand-goldDark to-brand-goldDeep p-8 text-white md:p-10">
              <h3 className="text-xl font-bold md:text-2xl">Who Should Consider Panchakarma?</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/80">
                Panchakarma helps when everyday treatments only manage symptoms.
                It is ideal if you relate to any of the following:
              </p>
              <ul className="mt-6 space-y-3">
                {CONSIDER.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[14px] leading-relaxed text-white/90">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-goldLight" />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
                <Stat n="5" label="Classical actions" />
                <Stat n="1:1" label="Vaidya guidance" />
                <Stat n="100%" label="Assessed first" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex h-full flex-col rounded-2xl border border-brand-line bg-white p-8 md:p-10">
              <h3 className="text-xl font-bold text-brand-goldDark md:text-2xl">
                What Makes Maharishi Panchakarma Different?
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-brand-body">
                Classical protocols with the accountability of a modern,
                NABH-accredited hospital.
              </p>
              <ul className="mt-6 flex-1 space-y-3.5">
                {DIFFERENT.map((d) => (
                  <CheckItem key={d}>{d}</CheckItem>
                ))}
              </ul>
              <Link href="#book" className="btn-primary mt-8 w-full sm:w-auto">
                Book Your Panchakarma Assessment
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Day-care vs residential */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Choose Your Pathway"
          title="Day-Care Panchakarma vs Residential Panchakarma"
          intro="Both pathways follow classical protocols. The right choice depends on your concern, your ability to rest and how much supervision helps you."
        />
        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-xl border border-brand-line">
            <div className="grid grid-cols-[1fr_1.6fr_auto] bg-brand-goldDark text-[13px] font-semibold text-white">
              <div className="px-5 py-3.5">Pathway</div>
              <div className="px-5 py-3.5">Best Suited For</div>
              <div className="px-5 py-3.5" />
            </div>
            <div className="grid grid-cols-[1fr_1.6fr_auto] items-center border-b border-brand-line bg-white text-[13.5px]">
              <div className="px-5 py-5 font-bold text-brand-ink">Day-Care<br /><span className="font-normal text-brand-muted">Panchakarma</span></div>
              <div className="px-5 py-5 text-brand-body">
                Milder concerns, patients who can rest well at home, and those who
                prefer to keep a lighter daily routine during therapy.
              </div>
              <div className="px-5 py-5">
                <Link href="#book" className="btn-primary whitespace-nowrap text-xs">Enquire Day-Care</Link>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1.6fr_auto] items-center bg-brand-beige/40 text-[13.5px]">
              <div className="px-5 py-5 font-bold text-brand-ink">Residential<br /><span className="font-normal text-brand-muted">Panchakarma</span></div>
              <div className="px-5 py-5 text-brand-body">
                Chronic concerns and deeper resets that benefit from continuous
                supervision, controlled diet and complete rest.
              </div>
              <div className="px-5 py-5">
                <Link href="#book" className="btn-primary whitespace-nowrap text-xs">Enquire Residential</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Therapies */}
      <Section className="bg-brand-cream">
        <SectionHeading
          eyebrow="Classical Support"
          title="Classical Ayurvedic Therapies and Support"
          intro="The core procedures we use within a Panchakarma program, each chosen for your specific assessment."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {THERAPIES.map((t, i) => (
            <NumberCard key={t.title} n={i + 1} title={t.title} text={t.text} delay={i * 80} />
          ))}
        </div>
        <Reveal className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="#book" className="btn-primary">Book Assessment</Link>
          <Link href="/" className="btn-outline">Back to Hospital Home</Link>
        </Reveal>
      </Section>

      {/* Journey */}
      <Section id="journey" className="bg-white">
        <SectionHeading
          eyebrow="Step by Step"
          title="Your Panchakarma Journey at Maharishi Ayurveda"
          intro="A supervised path from assessment to lasting results - with a Vaidya guiding every stage."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {JOURNEY.map((s, i) => (
            <StepCard
              key={s.label}
              n={i + 1}
              label={s.label}
              text={s.text}
              src={s.src}
              tone={i % 2 === 0 ? "deep" : "warm"}
              delay={i * 70}
            />
          ))}
        </div>
      </Section>

      {/* Before + travel advisory */}
      <Section className="bg-brand-cream">
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Prepare Well"
              title="Before Starting Panchakarma"
              intro="A little preparation helps therapy work better and keeps you comfortable."
              center={false}
            />
            <ul className="mt-8 space-y-4">
              {BEFORE.map((b) => (
                <CheckItem key={b}>{b}</CheckItem>
              ))}
            </ul>
          </div>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-brand-line bg-white p-7">
              <h3 className="text-lg font-bold text-brand-goldDark">
                Travel Advisory for Nearby Cities
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-brand-body">
                Coming from outside Delhi? For residential Panchakarma we help you
                plan travel, arrival and stay so your program starts smoothly. Share
                your city and preferred dates and our team will guide you.
              </p>
              <Link href="#book" className="btn-primary mt-6 w-full">Ask About Traveling</Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* City table */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Reach Us"
          title="Panchakarma in Delhi for NCR and Nearby Cities"
          intro="Patients travel to our Shalimar Bagh centre from across the NCR and neighbouring cities for supervised, classical Panchakarma."
        />
        <Reveal className="mt-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "Gurugram",
              "Noida",
              "Faridabad",
              "Ghaziabad",
              "Meerut",
              "Sonipat",
              "Rohtak",
              "Panipat",
              "Karnal",
              "Bulandshahr",
              "Rewari",
              "Bahadurgarh",
            ].map((city) => (
              <div
                key={city}
                className="rounded-md border border-brand-line bg-brand-cream px-3 py-3 text-center text-[13px] font-medium text-brand-ink transition-colors hover:border-brand-gold/50 hover:text-brand-goldDark"
              >
                {city}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="#book" className="btn-primary">Plan Your Panchakarma</Link>
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-brand-cream">
        <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <GradientMedia tone="deep" src={IMG.spaProducts} overlay={0.45} className="hidden h-full min-h-[380px]  lg:flex" label="Supervised, classical Panchakarma" />
          </Reveal>
          <Reveal delay={80}>
            <FaqAccordion items={FAQS} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        title="Start Your Panchakarma Journey With the Right Assessment"
        text="Book a Vaidya assessment and get a personalised, supervised Panchakarma plan - day-care or residential - built for lasting results."
        primary="Book Assessment"
      />
       <HospitalFooter />
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-extrabold text-brand-goldLight">{n}</p>
      <p className="text-[11px] leading-snug text-white/70">{label}</p>
    </div>
  );
}
