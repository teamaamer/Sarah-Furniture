import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/HeaderServer";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarah Furniture Liquidation - Quality Furniture Up to 70% Off Retail",
  description: "Sarah Furniture Liquidation Center offers sectionals, beds, sofa sets, outdoor furniture, and wood furniture at up to 70% off retail prices in Jacksonville, FL.",
  keywords: "furniture, Jacksonville, sectionals, beds, sofa sets, outdoor furniture, wood furniture, discount furniture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-10896725335" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10896725335');
        `}</Script>
        <Script id="metricool-tracker" strategy="afterInteractive">{`
          function loadScript(a){
            var b=document.getElementsByTagName("head")[0],
            c=document.createElement("script");
            c.type="text/javascript",
            c.src="https://tracker.metricool.com/resources/be.js",
            c.onreadystatechange=a,
            c.onload=a,
            b.appendChild(c)
          }
          loadScript(function(){
            beTracker.t({hash:"e88453623dd596319f5a133fdb290ab1"});
          });
        `}</Script>
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingCTA />
        </LanguageProvider>
      </body>
    </html>
  );
}
