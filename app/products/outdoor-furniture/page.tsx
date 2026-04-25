import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import ImageGallery from "@/components/shared/ImageGallery";

const furnitureImages = [
  "/images/sarah1.jpeg",
  "/images/sarah2.jpeg",
  "/images/sarah3.jpeg",
  "/images/sarah4.jpeg",
  "/images/sarah5.jpeg",
  "/images/sarah6.jpeg",
  "/images/sarah7.jpeg",
  "/images/sarah8.jpeg",
  "/images/sarah9.jpeg",
  "/images/sarah10.jpeg",
  "/images/sarah11.jpeg",
  "/images/sarah12.jpeg",
  "/images/sarah13.jpeg",
];

export default function OutdoorFurniturePage() {
  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Outdoor Furniture"
          subtitle="Durable and stylish furniture for your patio and garden"
        />

        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-700">
            Create your perfect outdoor oasis with our weather-resistant furniture
            collection. All pieces are built to last and priced 50-70% below retail.
          </p>
        </div>

        <div className="mb-12">
          <ImageGallery images={furnitureImages} />
        </div>

        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-dark mb-4">
            Ready to Transform Your Outdoor Space?
          </h3>
          <p className="text-gray-700 mb-6">
            Visit our showroom or contact us to check availability and pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Check Availability
            </Link>
            <Link href="/contact" className="btn-secondary">
              Request a Call Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
