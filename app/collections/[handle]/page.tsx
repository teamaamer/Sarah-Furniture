import { getCategory, getProducts } from "@/lib/catalog";
import { productCategories } from "@/data/products";
import { businessInfo } from "@/data/businessInfo";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ProductCard } from "@/components/products/product-card";
import SectionTitle from "@/components/shared/SectionTitle";
import { ChevronRight } from "lucide-react";

export function generateStaticParams() {
  return productCategories.map((c) => ({ handle: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const category = getCategory(handle);
  if (!category) return {};
  return {
    title: `${category.name} | Sarah Furniture Liquidation`,
    description: category.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const category = getCategory(handle);

  if (!category) {
    notFound();
  }

  const products = getProducts(category.slug);

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products" className="hover:text-gray-900 transition-colors">
            Products
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900 font-medium">{category.name}</span>
        </nav>

        <SectionTitle title={category.name} subtitle={category.description} />

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8 items-center">
            <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden bg-gray-100">
              <Image src={category.image} alt={category.name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{category.longDescription}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={`tel:${businessInfo.phone}`} className="btn-primary inline-block text-center">
                  Call to Check Availability
                </a>
                <Link href="/locations" className="btn-secondary inline-block text-center">
                  Visit Our Store
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
