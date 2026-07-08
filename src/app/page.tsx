'use client'
import Hero from "@/components/Hero";
import { Section, SectionHeading, CheckItem } from "@/components/Section";
import { ImageCard, NumberCard, StepCard, CtaBand } from "@/components/blocks";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { GradientMedia } from "@/components/blocks";
import { IMG } from "@/lib/images";
import { useEffect, useState } from "react";

const HERO_BADGES = [
  { title: "NABH Accredited", text: "Audited hospital-grade safety" },
  { title: "Vaidya-Led Care", text: "Classically trained doctors" },
  { title: "20,000+ Patients", text: "Guided across India" },
];

const SERVICES = [
  {
    title: "Ayurvedic OPD",
    text: "One-to-one consultations with a Vaidya, personalised prakriti assessment and herbal prescriptions for everyday health concerns.",
    cta: "View OPD",
    tone: "warm" as const,
    src: '/images/ayurvedic/1.webp',
  },
  {
    title: "Panchakarma",
    text: "Classical five-action detox and rejuvenation therapies delivered under trained supervision in a calm, clinical setting.",
    cta: "Explore Panchakarma",
    tone: "deep" as const,
    src: '/images/ayurvedic/2.webp',
  },
  {
    title: "Residential Programs",
    text: "Structured multi-day residential wellness stays with therapy, diet, yoga and daily physician review.",
    cta: "See stays",
    tone: "sage" as const,
    src: '/images/ayurvedic/3.webp',
  },
  {
    title: "Whole-Body Wellness",
    text: "Diet, lifestyle and herbal support for stress, sleep, metabolism and long-term preventive health.",
    cta: "Learn more",
    tone: "warm" as const,
    src: '/images/ayurvedic/4.webp',
  },
];

const CONSULT = [
  {
    title: "Pain, Joint & Back",
    text: "Persistent back, knee or joint discomfort where you want a non-invasive, root-cause approach.",
  },
  {
    title: "Digestive & Liver Wellness",
    text: "Acidity, bloating, irregular digestion or metabolic concerns that keep recurring.",
  },
  {
    title: "Stress, Sleep & Fatigue",
    text: "Low energy, disturbed sleep and stress that affect your daily focus and wellbeing.",
  },
  {
    title: "Women's Wellness",
    text: "Hormonal balance, cycle health and post-partum care through classical Ayurveda.",
  },
];

const JOURNEY = [
  { label: "Book a Session", text: "Share your concern and pick a time that suits you.", src: IMG.diffuser },
  { label: "Vaidya Assessment", text: "Detailed prakriti and pulse-based evaluation.", src: IMG.shirodhara },
  { label: "Personalised Plan", text: "Therapy, diet and herbal plan built for you.", src: IMG.herbalOil },
  { label: "Guided Therapy", text: "Supervised treatment at our Shalimar Bagh centre.", src: IMG.oilTherapy },
  { label: "Follow-Up", text: "Progress reviews and long-term lifestyle support.", src: IMG.yogaMountain },
];

const STANDARDS = [
  "Vaidya-led consultations rooted in classical Ayurvedic texts",
  "NABH-accredited processes for safety, hygiene and record-keeping",
  "In-house pharmacy with quality-checked classical formulations",
  "Trained therapists for authentic Panchakarma procedures",
  "Transparent plans - no vague promises, only guided care",
];

const COMPARE = [
  ["Doctor", "Trained assistant, limited review", "Qualified Vaidya at every step"],
  ["Safety", "Varies by clinic", "NABH-audited hospital standards"],
  ["Therapy", "Generic packages", "Personalised to your prakriti"],
  ["Records", "Often on paper", "Documented, reviewable case files"],
];

const FAQS = [
  {
    q: "Is Ayurveda safe alongside my regular medication?",
    a: "Yes. Our Vaidyas review your current medication and medical history first, and design a plan that complements existing treatment. Always share your reports and prescriptions during consultation.",
  },
  {
    q: "Do I need to stay at the hospital?",
    a: "Not necessarily. Many patients are treated through OPD and day-care visits. Residential programs are recommended only when a concern benefits from continuous, supervised care.",
  },
  {
    q: "What does the first consultation involve?",
    a: "A detailed conversation about your health, a prakriti (body-type) assessment, pulse evaluation and a personalised plan covering therapy, diet and herbal support.",
  },
  {
    q: "How soon will I see results?",
    a: "It depends on the concern and its duration. Ayurveda works on root causes, so some people feel relief within days while chronic conditions need a structured multi-week plan.",
  },
  {
    q: "Are the medicines made in-house?",
    a: "We use quality-checked classical formulations, many prepared and dispensed through our own pharmacy, so you receive authentic and traceable medicines.",
  },
];

export default function HomePage() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.15); // speed (0.15 = slow)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <></>
    // <>
    //   <Hero
    //     title="NABH-Accredited Ayurvedic Hospital in"
    //     highlight="Delhi NCR"
    //     intro="Authentic, Vaidya-led Ayurveda with the safety and record-keeping of a modern hospital. From OPD consultations to Panchakarma and residential wellness, we guide you to root-cause healing in Shalimar Bagh, Delhi NCR."
    //     badges={HERO_BADGES}
    //     bgSrc="/images/banner.webp"
    //     formVariant="consultation"
    //   />

    //   {/* Services */}
    //   <Section className="bg-white relative overflow-hidden">
    //     <img
    //       src="/images/water1.svg"
    //       alt="Watermark"
    //       className="absolute right-0 top-1/2 z-0 opacity-1 pointer-events-none"
    //       style={{
    //         transform: `translateY(calc(-50% + ${offset}px))`,
    //       }}
    //     />
    //     <SectionHeading
    //       eyebrow=""
    //       title="Ayurvedic OPD, Panchakarma, Residential Wellness and More"
    //       intro="A full spectrum of authentic Ayurvedic care, delivered under hospital-grade supervision and tailored to your body type and concern."
    //     />
    //     <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    //       {SERVICES.map((s, i) => (
    //         <ImageCard key={s.title} {...s} delay={i * 80} />
    //       ))}
    //     </div>
    //   </Section>
    //   <Section className="bg-white relative ">
    //     <img
    //       src="/images/water2.svg"
    //       alt="Watermark"
    //       className="absolute left-0 top-1/2 z-0 opacity-1 pointer-events-none"
    //       style={{
    //         transform: `translateY(calc(-50% + ${offset}px))`,
    //       }}
    //     />
    //     <SectionHeading
    //       eyebrow="Is This For You?"
    //       title="Who Should Consult a Maharishi Ayurveda Vaidya?"
    //       intro="If any of these sound familiar, a personalised Ayurvedic assessment can help you understand the root cause and a way forward."
    //     />
    //     <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    //       {CONSULT.map((c, i) => (
    //         <NumberCard key={c.title} n={i + 1} title={c.title} text={c.text} delay={i * 80} />
    //       ))}
    //     </div>
    //     <Reveal className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
    //       <Link href="#book" className="btn-primary">Book Your Consultation</Link>
    //       <Link href="/panchakarma-delhi" className="btn-outline">Explore Panchakarma</Link>
    //     </Reveal>
    //   </Section>
    //   {/* Care journey */}
    //   <Section id="journey" className="bg-white ">
    //     <img
    //       src="/images/water1.svg"
    //       alt="Watermark"
    //       className="absolute right-0 top-1/2 z-0 opacity-1 pointer-events-none"
    //       style={{
    //         transform: `translateY(calc(-50% + ${offset}px))`,
    //       }}
    //     />
    //     <SectionHeading
    //       eyebrow="How It Works"
    //       title="Your Care Journey at Maharishi Ayurveda Hospital"
    //       intro="A clear, guided path from your first call to long-term wellness - with a Vaidya reviewing every step."
    //     />
    //     <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
    //       {JOURNEY.map((s, i) => (
    //         <StepCard
    //           key={s.label}
    //           n={i + 1}
    //           label={s.label}
    //           text={s.text}
    //           src={s.src}
    //           tone={i % 2 === 0 ? "deep" : "warm"}
    //           delay={i * 70}
    //         />
    //       ))}
    //     </div>
    //   </Section>
    //   {/* Standards */}
    //   <Section id="why" className="bg-white">
    //     <div className="grid items-center gap-12 lg:grid-cols-2">
    //       <div>
    //         <SectionHeading
    //           eyebrow="Why Choose Us"
    //           title="Authentic Ayurveda, Vedic Wisdom, Modern Hospital Standards"
    //           intro="You get the depth of classical Ayurveda with the accountability of a NABH-accredited hospital."
    //           center={false}
    //         />
    //         <ul className="mt-8 space-y-4">
    //           {STANDARDS.map((s) => (
    //             <CheckItem key={s}>{s}</CheckItem>
    //           ))}
    //         </ul>
    //       </div>
    //       <Reveal>
    //         <div className="overflow-hidden rounded-xl border border-brand-line bg-white shadow-card">
    //           <div className="grid grid-cols-3 bg-brand-goldDark text-[13px] font-semibold text-white">
    //             <div className="px-4 py-3">Aspect</div>
    //             <div className="px-4 py-3">Typical Clinic</div>
    //             <div className="px-4 py-3">Maharishi Hospital</div>
    //           </div>
    //           {COMPARE.map((row, i) => (
    //             <div
    //               key={row[0]}
    //               className={`grid grid-cols-3 text-[13px] ${i % 2 ? "bg-brand-beige/40" : "bg-white"
    //                 }`}
    //             >
    //               <div className="px-4 py-3 font-semibold text-brand-ink">{row[0]}</div>
    //               <div className="px-4 py-3 text-brand-body">{row[1]}</div>
    //               <div className="px-4 py-3 font-medium text-brand-goldDark">{row[2]}</div>
    //             </div>
    //           ))}
    //         </div>
    //       </Reveal>
    //     </div>
    //   </Section>

    //   {/* Location */}
    //   <Section className="bg-white">
    //     <Reveal>
    //       <div className="rounded-2xl border border-brand-line bg-brand-cream p-8 md:p-12">
    //         <div className="text-center">
    //           <p className="eyebrow">Find Us</p>
    //           <h2 className="h-section mt-2">Ayurvedic Hospital in Shalimar Bagh, Delhi</h2>
    //           <p className="lede mt-4">
    //             Centrally located in North-West Delhi with easy access from across
    //             the NCR. Patients also travel to us from nearby cities for
    //             specialised Panchakarma and residential care.
    //           </p>
    //         </div>
    //         <div className="mt-8 rounded-xl border border-brand-line bg-white p-6">
    //           <h3 className="text-center text-sm font-bold uppercase tracking-wide text-brand-goldDark">
    //             Traveling from Nearby Cities
    //           </h3>
    //           <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
    //             {[
    //               "Gurugram",
    //               "Noida",
    //               "Faridabad",
    //               "Ghaziabad",
    //               "Meerut",
    //               "Sonipat",
    //               "Rohtak",
    //               "Panipat",
    //             ].map((city) => (
    //               <div
    //                 key={city}
    //                 className="rounded-md border border-brand-line bg-brand-cream px-3 py-2.5 text-center text-[13px] font-medium text-brand-ink"
    //               >
    //                 {city}
    //               </div>
    //             ))}
    //           </div>
    //           <div className="mt-6 text-center">
    //             <Link href="#book" className="btn-primary">Plan Your Visit</Link>
    //           </div>
    //         </div>
    //       </div>
    //     </Reveal>
    //   </Section>

    //   {/* FAQ */}
    //   <Section id="faq" className="bg-white">
    //     <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />
    //     <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
    //       <Reveal>
    //         <GradientMedia tone="warm" src={IMG.massage} overlay={0.4} className="hidden h-full min-h-[380px] lg:flex" label="Calm, clinical, Vaidya-led care" />
    //       </Reveal>
    //       <Reveal delay={80}>
    //         <FaqAccordion items={FAQS} />
    //       </Reveal>
    //     </div>
    //   </Section>
    //   <CtaBand
    //     title="Start Your Ayurveda Journey with Maharishi Ayurveda Hospital"
    //     text="Book a free consultation with a qualified Vaidya and get a personalised plan for root-cause healing - safely, and on your schedule."
    //   />
    // </>
  );
}
