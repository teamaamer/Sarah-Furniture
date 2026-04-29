'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Check, Plus, Minus, Zap } from 'lucide-react';
import { formatPrice } from '@/lib/shopify';
import { HIDE_PRICES } from '@/lib/config';
import { useCart } from '@/components/cart/cart-provider';
import type { ShopifyProduct, ShopifyVariant } from '@/lib/shopify/types';

interface AddToCartButtonProps {
  product: ShopifyProduct;
  defaultVariant: ShopifyVariant;
  onVariantChange?: (variantId: string) => void;
}

export function AddToCartButton({ product, defaultVariant, onVariantChange }: AddToCartButtonProps) {
  const { addToCart, isLoading } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(defaultVariant);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    await addToCart(selectedVariant.id, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = async () => {
    await addToCart(selectedVariant.id, quantity);
    router.push('/cart');
  };

  const maxQuantity = selectedVariant.quantityAvailable || 999;

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

      {/* Quantity */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <label className="block text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
          Quantity
        </label>
        <div className="flex items-stretch gap-2 max-w-[180px]">
          <button
            type="button"
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            disabled={quantity <= 1}
            className="h-12 w-12 border-2 border-gray-300 rounded-xl flex items-center justify-center text-gray-700 hover:border-gray-900 transition-colors disabled:opacity-40"
          >
            <Minus className="h-4 w-4" />
          </button>
          <input
            type="number"
            min="1"
            max={maxQuantity}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Math.min(maxQuantity, parseInt(e.target.value) || 1)))}
            className="flex-1 h-12 text-center border-2 border-gray-300 rounded-xl text-lg font-bold text-gray-900 focus:border-primary focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setQuantity(q => Math.min(maxQuantity, q + 1))}
            disabled={quantity >= maxQuantity}
            className="h-12 w-12 border-2 border-gray-300 rounded-xl flex items-center justify-center text-gray-700 hover:border-gray-900 transition-colors disabled:opacity-40"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-3">
        <button
          onClick={handleBuyNow}
          disabled={!product.availableForSale || isLoading || !selectedVariant.availableForSale}
          className="flex-1 h-14 bg-primary hover:bg-red-700 text-white font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Zap className="h-5 w-5" />
          Buy Now
        </button>
        <button
          onClick={handleAddToCart}
          disabled={!product.availableForSale || isLoading || !selectedVariant.availableForSale}
          className="flex-1 h-14 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold text-lg rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {added ? (
            <>
              <Check className="h-5 w-5" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
