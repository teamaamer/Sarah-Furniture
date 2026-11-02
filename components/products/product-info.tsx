import Link from 'next/link';
import { formatPrice } from '@/lib/catalog';
import { HIDE_PRICES } from '@/lib/config';
import { businessInfo } from '@/data/businessInfo';
import type { Product } from '@/data/products';

export function ProductInfo({ product }: { product: Product }) {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3">
          {product.name}
        </h1>
        {product.description && (
          <p className="text-gray-600 text-base leading-relaxed">{product.description}</p>
        )}
      </div>

      {/* Price & Availability */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {!HIDE_PRICES && product.price !== undefined && (
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Price</p>
              <span className="text-3xl md:text-4xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && product.compareAtPrice > product.price && (
                <span className="ml-3 text-lg text-gray-400 line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
          )}
          {product.inStock ? (
            <span className="bg-green-100 text-green-700 border border-green-300 px-4 py-2 rounded-full text-sm font-semibold">
              ✓ In Stock
            </span>
          ) : (
            <span className="bg-red-100 text-red-700 border border-red-300 px-4 py-2 rounded-full text-sm font-semibold">
              Out of Stock
            </span>
          )}
        </div>
      </div>

      {/* In-Store Notice */}
      <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
        <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
        </svg>
        <div>
          <p className="text-amber-800 font-semibold text-sm">In-Store Purchase Only</p>
          <p className="text-amber-700 text-sm mt-0.5">
            This item is available exclusively at our Jacksonville showroom — <span className="font-medium">7534 Atlantic Blvd</span>. Visit us in person to purchase.
          </p>
        </div>
      </div>

      {/* Store CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/locations"
          className="flex-1 h-14 bg-primary hover:bg-red-700 text-white font-bold text-base rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Visit Our Store
        </Link>
        <a
          href={`tel:${businessInfo.phone}`}
          className="flex-1 h-14 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold text-base rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {businessInfo.phone}
        </a>
      </div>
    </div>
  );
}
