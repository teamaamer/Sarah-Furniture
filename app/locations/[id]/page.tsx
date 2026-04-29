import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import { businessInfo } from "@/data/businessInfo";
import { notFound } from "next/navigation";

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const location = businessInfo.locations.find((loc) => loc.id === id);

  if (!location) {
    notFound();
  }

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <SectionTitle title={location.name} subtitle={location.fullAddress} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <svg
                className="w-16 h-16 mx-auto mb-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-lg">Map Placeholder</p>
              <p className="text-sm">{location.fullAddress}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-dark mb-4">Address</h3>
              <p className="text-gray-700 text-lg">{location.fullAddress}</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-dark mb-4">
                Business Hours
              </h3>
              <p className="text-gray-700">Mon – Sat: {businessInfo.hoursWeekday}</p>
              <p className="text-gray-700">Sun: {businessInfo.hoursSunday}</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-dark mb-4">Contact</h3>
              <a
                href={`tel:${businessInfo.phone}`}
                className="text-primary text-xl font-semibold hover:underline"
              >
                {businessInfo.phone}
              </a>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                location.fullAddress
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block text-center"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-dark mb-4">
            Payment Options Accepted
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {businessInfo.paymentMethods.map((method) => (
              <div
                key={method}
                className="bg-white p-4 rounded-lg text-center text-gray-700 font-medium"
              >
                {method}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/locations" className="text-primary hover:underline">
            ← Back to All Locations
          </Link>
        </div>
      </div>
    </div>
  );
}
