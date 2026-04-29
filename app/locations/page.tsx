import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import { businessInfo } from "@/data/businessInfo";

export default function LocationsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Our Locations"
          subtitle="Visit us at our Jacksonville location"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessInfo.locations.map((location) => (
            <Link
              key={location.id}
              href={`/locations/${location.id}`}
              className="group block bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                {location.name}
              </h3>
              <div className="space-y-2 text-gray-700">
                <p className="text-lg">{location.fullAddress}</p>
                {location.isPrimary && (
                  <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full">
                    Main Location
                  </span>
                )}
              </div>
              <div className="mt-6">
                <span className="text-primary font-semibold group-hover:underline">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-dark mb-4">Business Hours</h3>
          <p className="text-gray-700">Mon – Sat: {businessInfo.hoursWeekday}</p>
          <p className="text-gray-700 mb-6">Sun: {businessInfo.hoursSunday}</p>
          <p className="text-gray-600">
            Call us at{" "}
            <a
              href={`tel:${businessInfo.phone}`}
              className="text-primary font-semibold hover:underline"
            >
              {businessInfo.phone}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
