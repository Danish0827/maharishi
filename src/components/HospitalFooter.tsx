import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function HospitalFooter() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center">

          {/* Logos */}
          <div className="flex justify-center items-center gap-5">
            <img
              src="/images/logo.svg"
              alt="Hospital Logo"
              className="h-20 lg:h-32 w-auto object-contain"
            />

            {/* <img
              src="/assets/images/nabh.png"
              alt="NABH"
              className="h-16 w-auto object-contain"
            /> */}
          </div>

          {/* Description */}
          <p className="mt-6 text-[15px] leading-7 text-[#8B6A17] max-w-5xl mx-auto">
            Ayurvedic hospital in Shalimar Bagh, Delhi. OPD, Panchakarma,
            day-care wellness, residential Panchakarma and personalized
            Vaidya-led care.
          </p>

          {/* Contact Buttons */}
          {/* <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="tel:+919310866852"
              className="flex items-center justify-center gap-3 border border-[#9A741D] px-8 py-3 text-[#8B6A17] transition hover:bg-[#8B6A17] hover:text-white"
            >
              <Phone size={18} />
              <span>+91 93108 66852</span>
            </Link>

            <Link
              href="https://wa.me/919310866852"
              className="flex items-center justify-center gap-3 border border-[#9A741D] px-8 py-3 text-[#8B6A17] transition hover:bg-[#8B6A17] hover:text-white"
            >
              <MessageCircle size={18} />
              <span>+91 93108 66852</span>
            </Link>
          </div> */}

          {/* Copyright */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-[#E7DFC9] pt-5 text-sm text-[#8B6A17] md:flex-row">
            <p>
              Copyright 2026, Maharishi Ayurveda Hospital. All rights reserved.
            </p>

            {/* <Link
              href="/privacy-policy"
              className="hover:text-black transition"
            >
              Privacy Policy
            </Link> */}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-[#806116] py-5 px-6">
        <div className="mx-auto max-w-7xl text-center text-sm leading-6 text-white/95">
          Ayurvedic care is personalized and depends on individual assessment.
          Suitability, therapy plan and outcomes vary from person to person. For
          emergency or serious acute medical conditions, seek appropriate
          medical care immediately. Do not stop any ongoing prescribed treatment
          without consulting your treating doctor.
        </div>
      </div>
    </footer>
  );
}