import { getProduct, getCategory } from "@/lib/catalog";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ProductClientWrapper } from "@/components/products/product-client-wrapper";
import { ChevronRight, Truck, ShieldCheck, RotateCcw } from "lucide-react";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Sarah Furniture Liquidation`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const category = getCategory(product.category);

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products" className="hover:text-gray-900 transition-colors">
            Products
          </Link>
          {category && (
            <>
              <ChevronRight className="h-4 w-4" />
              <Link
                href={`/collections/${category.slug}`}
                className="hover:text-gray-900 transition-colors"
              >
                {category.name}
              </Link>
            </>
          )}
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900 font-medium truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        <ProductClientWrapper product={product}>
          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-blue-50 border border-blue-100">
              <Truck className="h-5 w-5 text-blue-600" />
              <span className="text-xs font-semibold text-blue-900 text-center">Free Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-green-50 border border-green-100">
              <ShieldCheck className="h-5 w-5 text-green-600" />
              <span className="text-xs font-semibold text-green-900 text-center">Secure Checkout</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-purple-50 border border-purple-100">
              <RotateCcw className="h-5 w-5 text-purple-600" />
              <span className="text-xs font-semibold text-purple-900 text-center">Call to Confirm Availability</span>
            </div>
          </div>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </ProductClientWrapper>
      </div>
    </div>
  );
}
