import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HospitalFooter from "@/components/HospitalFooter";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maharishi Ayurveda Hospital | NABH-Accredited Ayurveda in Delhi NCR",
    template: "%s | Maharishi Ayurveda Hospital",
  },
  description:
    "NABH-accredited Ayurvedic hospital in Shalimar Bagh, Delhi NCR offering Vaidya-led OPD, Panchakarma and residential wellness programs.",
  metadataBase: new URL("https://maharishiayurveda.example"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={karla.variable}>
      <body className="font-sans antialiased">
        {/* <Header /> */}
        <main>{children}</main>
        {/* <HospitalFooter /> */}
      </body>
    </html>
  );
}
