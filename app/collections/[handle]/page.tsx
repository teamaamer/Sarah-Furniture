import { getCollection } from "@/lib/shopify";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ProductCard } from "@/components/products/product-card";
import SectionTitle from "@/components/shared/SectionTitle";
import { ChevronRight } from "lucide-react";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const collection = await getCollection(handle);
  if (!collection) return {};
  return {
    title: `${collection.title} | Sarah Furniture Liquidation`,
    description: collection.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const collection = await getCollection(handle);

  if (!collection) {
    notFound();
  }

  const products = collection.products?.edges?.map((e) => e.node) || [];

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
          <span className="text-gray-900 font-medium">{collection.title}</span>
        </nav>

        <SectionTitle
          title={collection.title}
          subtitle={collection.description || `Browse our ${collection.title} collection`}
        />

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 mb-6">
              No products in this collection yet.
            </p>
            <Link href="/products" className="btn-primary inline-block">
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
