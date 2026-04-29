import SectionTitle from "@/components/shared/SectionTitle";
import { businessInfo } from "@/data/businessInfo";

export default function AboutPage() {
  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="About Sarah Furniture Liquidation"
          subtitle="Your trusted source for quality furniture at unbeatable prices"
        />

        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Sarah Furniture Liquidation Center offers sectionals, beds, sofa
            sets, outdoor furniture, and wood furniture at up to 70% off retail
            prices in Jacksonville, FL.
          </p>
          <p className="text-lg text-gray-700">
            As a family and locally owned business, we take pride in providing
            our community with access to top-quality furniture from trusted
            brands at prices that can't be beat. Our commitment to customer
            satisfaction and local delivery within 24 hours sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-dark mb-4">Products</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Sectionals</li>
              <li>• Beds</li>
              <li>• Sofa Sets</li>
              <li>• Couches</li>
              <li>• Chairs</li>
              <li>• Living Room Furniture</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-dark mb-4">Specialties</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Sofas</li>
              <li>• Love Seats</li>
              <li>• Rugs</li>
              <li>• Beds</li>
              <li>• Mattress</li>
              <li>• Sectionals</li>
              <li>• Bedroom Furniture</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-dark mb-4">
              Business Hours
            </h3>
            <p className="text-gray-700">Mon – Sat: {businessInfo.hoursWeekday}</p>
            <p className="text-gray-700">Sun: {businessInfo.hoursSunday}</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-dark mb-4">Languages</h3>
            <ul className="space-y-2 text-gray-700">
              {businessInfo.languages.map((lang) => (
                <li key={lang}>• {lang}</li>
              ))}
            </ul>
          </div>

<div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-dark mb-4">
              Payment Options
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-700">
              {businessInfo.paymentMethods.map((method) => (
                <li key={method}>• {method}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
