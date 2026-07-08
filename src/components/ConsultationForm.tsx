"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  variant?: "consultation" | "panchakarma";
};

const CONCERNS = [
  "Pain, Joint & Back",
  "Digestive & Liver Wellness",
  "Stress, Sleep & Fatigue",
  "Women's Wellness",
  "Panchakarma / Detox",
  "General Consultation",
];

export default function ConsultationForm({ variant = "consultation" }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isPanchakarma = variant === "panchakarma";
  const title = isPanchakarma
    ? "Book Your Panchakarma Assessment"
    : "Book Your Ayurveda Consultation";
  const subtitle = isPanchakarma
    ? "Share a few details and a Vaidya will call you to plan the right assessment."
    : "Share a few details and our care team will call you to schedule your visit.";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: real users leave this empty
    if (data.company) return;

    if (!data.consent) {
      setError("Please accept the consent to proceed.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: title }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json?.error || "Something went wrong.");
      router.push("/thank-you");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not submit right now. Please try again."
      );
      setLoading(false);
    }
  }

  return (
    <div
      id="book"
      className="max-w-xl mx-auto border border-brand-line bg-white/95 p-6 shadow-card backdrop-blur sm:p-7"
    >
      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-goldDark">
        <span className="h-1.5 w-1.5 rounded-full bg-green-600" /> OPD Available
      </span>
      <h3 className="mt-3 text-xl font-bold text-brand-goldDark">{title}</h3>
      <p className="mt-1 text-[13px] leading-relaxed text-brand-body">{subtitle}</p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3.5" noValidate>
        {/* Honeypot */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
        />

        <div className="grid gap-3.5 sm:grid-cols-2">
          <Field label="First name" name="firstName" placeholder="Your name" required />
          <Field
            label="Phone number"
            name="phone"
            type="tel"
            placeholder="10-digit mobile"
            required
          />
        </div>

        <SelectField label="Primary concern" name="concern" options={CONCERNS} />

        {/* <div className="grid gap-3.5 sm:grid-cols-2">
          <Field label="Preferred date" name="date" type="date" />
          <Field label="City" name="city" placeholder="e.g. Delhi" />
        </div>

        <Field label="Email" name="email" type="email" placeholder="you@email.com" /> */}

        <label className="flex items-start gap-2.5 pt-1 text-[12.5px] leading-snug text-brand-body">
          <input
            type="checkbox"
            name="consent"
            className="mt-0.5 h-4 w-4 shrink-0 accent-[#9A7B2E]"
          />
          <span>
            I agree to be contacted by Maharishi Ayurveda Hospital regarding my
            enquiry via call, SMS or WhatsApp.
          </span>
        </label>

        {error && (
          <p className="rounded-md bg-red-50 px-3 py-2 text-[13px] text-red-700">
            {error}
          </p>
        )}

        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? "Submitting..." : isPanchakarma ? "Request Assessment Call" : "Book Free Consultation"}
        </button>

        <p className="text-center text-[11px] text-brand-muted">
          Your details stay private and are used only to contact you.
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[12px] font-medium text-brand-ink">
        {label} {required && <span className="text-brand-gold">*</span>}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-md border border-brand-line bg-white px-3 py-2.5 text-sm text-brand-ink outline-none transition-colors placeholder:text-brand-muted focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[12px] font-medium text-brand-ink">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="w-full appearance-none rounded-md border border-brand-line bg-white px-3 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
      >
        <option value="" disabled>
          Select your concern
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
