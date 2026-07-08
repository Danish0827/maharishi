import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
        >
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-THZ29JWJ');
          `}
        </Script>
      </head>

      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-THZ29JWJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* <Header /> */}
        <main>{children}</main>
        {/* <HospitalFooter /> */}
      </body>
    </html>
  );
}