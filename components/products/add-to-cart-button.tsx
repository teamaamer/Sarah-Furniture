'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatPrice } from '@/lib/shopify';
import { HIDE_PRICES } from '@/lib/config';
import { businessInfo } from '@/data/businessInfo';
import type { ShopifyProduct, ShopifyVariant } from '@/lib/shopify/types';

interface AddToCartButtonProps {
  product: ShopifyProduct;
  defaultVariant: ShopifyVariant;
  onVariantChange?: (variantId: string) => void;
}

export function AddToCartButton({ product, defaultVariant, onVariantChange }: AddToCartButtonProps) {
  const [selectedVariant, setSelectedVariant] = useState(defaultVariant);

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3">
          {product.title}
        </h1>
        {product.description && (
          <p className="text-gray-600 text-base leading-relaxed">{product.description}</p>
        )}
      </div>

      {/* Price & Availability */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {!HIDE_PRICES && (
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Price</p>
              <span className="text-3xl md:text-4xl font-bold text-gray-900">
                {formatPrice(selectedVariant.price.amount, selectedVariant.price.currencyCode)}
              </span>
              {selectedVariant.compareAtPrice && parseFloat(selectedVariant.compareAtPrice.amount) > parseFloat(selectedVariant.price.amount) && (
                <span className="ml-3 text-lg text-gray-400 line-through">
                  {formatPrice(selectedVariant.compareAtPrice.amount, selectedVariant.compareAtPrice.currencyCode)}
                </span>
              )}
            </div>
          )}
          {!product.availableForSale || !selectedVariant.availableForSale ? (
            <span className="bg-red-100 text-red-700 border border-red-300 px-4 py-2 rounded-full text-sm font-semibold">
              Out of Stock
            </span>
          ) : selectedVariant.quantityAvailable && selectedVariant.quantityAvailable <= 5 ? (
            <span className="bg-yellow-100 text-yellow-700 border border-yellow-300 px-4 py-2 rounded-full text-sm font-semibold">
              Only {selectedVariant.quantityAvailable} left!
            </span>
          ) : (
            <span className="bg-green-100 text-green-700 border border-green-300 px-4 py-2 rounded-full text-sm font-semibold">
              ✓ In Stock
            </span>
          )}
        </div>
      </div>

      {/* Variant Selector */}
      {product.variants.edges.length > 1 && (
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <label className="block text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
            Select Option
          </label>
          <div className="flex gap-2 flex-wrap">
            {product.variants.edges.map(({ node: variant }) => (
              <button
                key={variant.id}
                type="button"
                onClick={() => {
                  setSelectedVariant(variant);
                  onVariantChange?.(variant.id);
                }}
                disabled={!variant.availableForSale}
                className={`px-4 py-2.5 rounded-xl font-medium transition-all border-2 text-sm ${
                  selectedVariant.id === variant.id
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed'
                }`}
              >
                {variant.title}
              </button>
            ))}
          </div>
        </div>
      )}

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
