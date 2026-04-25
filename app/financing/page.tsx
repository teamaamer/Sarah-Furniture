import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import { financingPartners } from "@/data/financing";

export default function FinancingPage() {
  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Financing & Leasing Made Easy"
          subtitle="One application will assist you in building your ideal home"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {financingPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-16 flex items-center justify-center mb-6">
                <h3 className="text-2xl font-bold text-dark text-center">
                  {partner.name}
                </h3>
              </div>
              <p className="text-gray-700 mb-6 text-center">
                {partner.description}
              </p>
              <ul className="space-y-3 mb-6">
                {partner.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="btn-primary block text-center w-full"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-primary text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">
            Questions About Financing?
          </h3>
          <p className="mb-6 text-lg">
            Our team is here to help you find the best financing option for your
            needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href={`tel:(904) 484-8434`}
              className="inline-block bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              Call (904) 484-8434
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
