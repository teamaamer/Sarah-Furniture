'use client';

import { useCart } from './cart-provider';
import { formatPrice } from '@/lib/shopify';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function CartDrawer() {
  const { cart, isOpen, closeCart, updateQuantity, removeFromCart, isLoading } = useCart();

  const handleCheckout = () => {
    if (cart?.checkoutUrl) {
      window.location.href = cart.checkoutUrl;
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">
            Shopping Cart
            {cart && cart.totalQuantity > 0 && (
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({cart.totalQuantity} {cart.totalQuantity === 1 ? 'item' : 'items'})
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {!cart || cart.lines.edges.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</p>
              <p className="text-sm text-gray-500 mb-6">Add some furniture to get started!</p>
              <button
                onClick={closeCart}
                className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="p-6 space-y-4">
              {cart.lines.edges.map(({ node: line }) => (
                <div key={line.id} className="flex gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50">
                  {line.merchandise.product.featuredImage && (
                    <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-white border flex-shrink-0">
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
                      onClick={closeCart}
                      className="font-semibold text-gray-900 hover:text-primary transition-colors line-clamp-2 text-sm"
                    >
                      {line.merchandise.product.title}
                    </Link>
                    {line.merchandise.title !== 'Default Title' && (
                      <p className="text-xs text-gray-500 mt-0.5">{line.merchandise.title}</p>
                    )}
                    <p className="text-sm font-bold text-gray-900 mt-1">
                      {formatPrice(line.cost.totalAmount.amount, line.cost.totalAmount.currencyCode)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(line.id, Math.max(1, line.quantity - 1))}
                        disabled={isLoading || line.quantity <= 1}
                        className="h-7 w-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors disabled:opacity-40"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{line.quantity}</span>
                      <button
                        onClick={() => updateQuantity(line.id, line.quantity + 1)}
                        disabled={isLoading}
                        className="h-7 w-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors disabled:opacity-40"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(line.id)}
                        disabled={isLoading}
                        className="ml-auto h-7 w-7 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors disabled:opacity-40"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart && cart.lines.edges.length > 0 && (
          <div className="border-t p-6 space-y-4 bg-white">
            <div className="flex justify-between items-center">
              <span className="text-base font-semibold text-gray-900">Subtotal</span>
              <span className="text-xl font-bold text-gray-900">
                {formatPrice(cart.cost.subtotalAmount.amount, cart.cost.subtotalAmount.currencyCode)}
              </span>
            </div>
            <p className="text-xs text-gray-500">Shipping and taxes calculated at checkout</p>
            <Link
              href="/cart"
              onClick={closeCart}
              className="block w-full text-center border-2 border-gray-900 text-gray-900 py-3 rounded-md font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              View Cart
            </Link>
            <button
              onClick={handleCheckout}
              className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-red-700 transition-colors shadow-md"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
