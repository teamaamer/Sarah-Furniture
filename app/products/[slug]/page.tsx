import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import SectionTitle from "@/components/shared/SectionTitle";
import ImageGallery from "@/components/shared/ImageGallery";
import { productCategories } from "@/data/products";

const galleryImages = [
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

export async function generateStaticParams() {
  return productCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = productCategories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.name} | Sarah Furniture Liquidation`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = productCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <SectionTitle
          title={category.name}
          subtitle={category.description}
        />

        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-700">{category.longDescription}</p>
        </div>

        <div className="mb-12">
          <ImageGallery images={galleryImages} />
        </div>

        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-dark mb-4">
            Interested in Our {category.name}?
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
