'use client';

import { useCart } from "@/components/cart/cart-provider";
import { formatPrice } from "@/lib/shopify";
import { HIDE_PRICES } from "@/lib/config";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, isLoading } = useCart();

  const handleCheckout = () => {
    if (cart?.checkoutUrl) {
      window.location.href = cart.checkoutUrl;
    }
  };

  if (!cart || cart.lines.edges.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 bg-white">
        <ShoppingBag className="h-20 w-20 text-gray-300 mb-6" />
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">Add some furniture to get started!</p>
        <Link href="/products" className="btn-primary inline-block">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom">
        <div className="mb-8 flex items-center gap-4">
          <Link href="/products" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm">
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            Shopping Cart
            <span className="ml-2 text-base font-normal text-gray-500">
              ({cart.totalQuantity} {cart.totalQuantity === 1 ? 'item' : 'items'})
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.lines.edges.map(({ node: line }) => (
              <div key={line.id} className="bg-white rounded-xl p-6 flex gap-5 border border-gray-100 shadow-sm">
                {line.merchandise.product.featuredImage && (
                  <div className="relative h-24 w-24 rounded-lg overflow-hidden bg-gray-50 border flex-shrink-0">
                    <Image
                      src={line.merchandise.product.featuredImage.url}
                      alt={line.merchandise.product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/products/${line.merchandise.product.handle}`}
                    className="font-semibold text-gray-900 hover:text-primary transition-colors line-clamp-2"
                  >
                    {line.merchandise.product.title}
                  </Link>
                  {line.merchandise.title !== 'Default Title' && (
                    <p className="text-sm text-gray-500 mt-0.5">{line.merchandise.title}</p>
                  )}
                  {!HIDE_PRICES && (
                    <p className="text-base font-bold text-gray-900 mt-2">
                      {formatPrice(line.cost.totalAmount.amount, line.cost.totalAmount.currencyCode)}
                    </p>
                  )}
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(line.id, Math.max(1, line.quantity - 1))}
                        disabled={isLoading || line.quantity <= 1}
                        className="h-8 w-8 rounded-md flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-40"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">{line.quantity}</span>
                      <button
                        onClick={() => updateQuantity(line.id, line.quantity + 1)}
                        disabled={isLoading}
                        className="h-8 w-8 rounded-md flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-40"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(line.id)}
                      disabled={isLoading}
                      className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-700 transition-colors disabled:opacity-40"
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Order Summary</h2>
              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal ({cart.totalQuantity} items)</span>
                  {!HIDE_PRICES && (
                    <span className="font-medium text-gray-900">
                      {formatPrice(cart.cost.subtotalAmount.amount, cart.cost.subtotalAmount.currencyCode)}
                    </span>
                  )}
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-bold text-gray-900 text-lg">
                  <span>Total</span>
                  {!HIDE_PRICES && (
                    <span>
                      {formatPrice(cart.cost.totalAmount.amount, cart.cost.totalAmount.currencyCode)}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-primary text-white py-3.5 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-md"
              >
                Proceed to Checkout
              </button>
              <p className="text-xs text-gray-400 text-center mt-3">
                Secure checkout powered by Shopify
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
