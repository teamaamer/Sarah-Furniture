import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import PromoBanner from "@/components/shared/PromoBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarah Furniture Liquidation - Quality Furniture 50-70% Off Retail",
  description: "Sarah Furniture Liquidation Center offers sectionals, beds, sofa sets, outdoor furniture, and wood furniture at 50% to 70% off retail prices in Jacksonville, FL.",
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
      </head>
      <body className={inter.className}>
        <PromoBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
