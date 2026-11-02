import { getProducts, getAllCollections } from "@/lib/shopify";
import { ProductCard } from "@/components/products/product-card";
import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 60;

export default async function ProductsPage() {
  const [products, collections] = await Promise.all([
    getProducts(undefined, 24),
    getAllCollections(12),
  ]);

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container-custom">
        <SectionTitle
          title="All Products"
          subtitle="Browse our complete collection of quality furniture at unbeatable prices"
          centered
        />

        {/* Collections Filter */}
        {collections.length > 0 && (
          <div className="flex gap-3 overflow-x-auto pb-4 mb-12 justify-center flex-wrap">
            <Link
              href="/products"
              className="flex-shrink-0 px-5 py-2 rounded-full border-2 border-gray-900 bg-gray-900 text-white text-sm font-medium transition-colors"
            >
              All Products
            </Link>
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.handle}`}
                className="flex-shrink-0 px-5 py-2 rounded-full border-2 border-gray-200 text-gray-700 text-sm font-medium hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
              >
                {collection.title}
              </Link>
            ))}
          </div>
        )}

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 mb-4">No products found</p>
            <p className="text-gray-400 mb-8">
              Make sure your Shopify store is connected and has products.
            </p>
            <Link href="/" className="btn-primary inline-block">
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
