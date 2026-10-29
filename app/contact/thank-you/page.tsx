import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import SectionTitle from "@/components/shared/SectionTitle";

export const metadata: Metadata = {
  title: "Thank You - Sarah Furniture Liquidation",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="py-16 bg-white">
      {/* Event snippet for Website lead conversion page */}
      <Script id="gtag-lead-conversion" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('event', 'conversion', {'send_to': 'AW-10896725335/urjyCN-tm_kcENeq-8so'});
      `}</Script>
      <div className="container-custom">
        <SectionTitle
          title="Thank You!"
          subtitle="Your email client should have opened. Please send the email to complete your request, and we'll get back to you as soon as possible."
          centered
        />

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-dark mb-4">
              Need Help Right Away?
            </h3>
            <a
              href="tel:(904) 484-8434"
              className="text-2xl font-bold text-primary hover:underline"
            >
              (904) 484-8434
            </a>
            <p className="text-gray-600 mt-2">Mon - Sun | 9:00 am - 9:00 pm</p>
          </div>

          <Link href="/" className="btn-primary inline-block mt-8">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
