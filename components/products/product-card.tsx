'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Eye } from 'lucide-react';
import { formatPrice } from '@/lib/shopify';
import { HIDE_PRICES } from '@/lib/config';
import { useCart } from '@/components/cart/cart-provider';
import type { ShopifyProduct } from '@/lib/shopify/types';

interface ProductCardProps {
  product: ShopifyProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images.edges[0]?.node;
  const minPrice = product.priceRange.minVariantPrice;
  const maxPrice = product.priceRange.maxVariantPrice;
  const hasMultiplePrices = minPrice.amount !== maxPrice.amount;
  const defaultVariant = product.variants.edges[0]?.node;
  const { addToCart, isLoading } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!defaultVariant || !product.availableForSale) return;
    setIsAdding(true);
    await addToCart(defaultVariant.id, 1);
    setIsAdding(false);
  };

  return (
    <div className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <Link href={`/products/${product.handle}`} className="flex-shrink-0">
        <div className="relative h-64 bg-gray-50 overflow-hidden">
          {image ? (
            <Image
              src={image.url}
              alt={image.altText || product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-300">
              <ShoppingCart className="h-16 w-16" />
            </div>
          )}
          {!product.availableForSale && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              Sold Out
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
              <Eye className="h-4 w-4" />
              View Details
            </span>
          </div>
        </div>
      </Link>

      <div className="flex flex-col flex-grow p-5">
        <Link href={`/products/${product.handle}`} className="flex-grow">
          <h3 className="font-semibold text-gray-900 text-base mb-1 group-hover:text-primary transition-colors line-clamp-2">
            {product.title}
          </h3>
          {product.description && (
            <p className="text-gray-500 text-sm line-clamp-2 font-light">{product.description}</p>
          )}
        </Link>

        <div className="mt-4 space-y-3">
          {!HIDE_PRICES && (
            <div>
              {hasMultiplePrices ? (
                <span className="text-lg font-bold text-gray-900">
                  {formatPrice(minPrice.amount, minPrice.currencyCode)} &ndash; {formatPrice(maxPrice.amount, maxPrice.currencyCode)}
                </span>
              ) : (
                <span className="text-lg font-bold text-gray-900">
                  {formatPrice(minPrice.amount, minPrice.currencyCode)}
                </span>
              )}
            </div>
          )}

          <div className="flex gap-2">
            <Link
              href={`/products/${product.handle}`}
              className="flex-1 text-center border-2 border-gray-900 text-gray-900 py-2 rounded-md text-sm font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              View Details
            </Link>
            <button
              onClick={handleAddToCart}
              disabled={!product.availableForSale || isLoading || isAdding}
              className="flex-1 bg-primary text-white py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
            >
              <ShoppingCart className="h-4 w-4" />
              {isAdding ? 'Adding...' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
