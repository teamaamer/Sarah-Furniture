'use client';

import { useState } from 'react';
import { ProductGallery } from './product-gallery';
import { AddToCartButton } from './add-to-cart-button';
import type { ShopifyProduct, ShopifyVariant } from '@/lib/shopify/types';

interface ProductClientWrapperProps {
  product: ShopifyProduct;
  images: Array<{ url: string; altText: string | null; width: number; height: number }>;
  variants: ShopifyVariant[];
  defaultVariant: ShopifyVariant;
  children?: React.ReactNode;
}

export function ProductClientWrapper({
  product,
  images,
  variants,
  defaultVariant,
  children,
}: ProductClientWrapperProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleVariantChange = (variantId: string) => {
    const variant = variants.find((v) => v.id === variantId);
    if (variant?.image) {
      const idx = images.findIndex((img) => img.url === variant.image?.url);
      if (idx !== -1) setSelectedImageIndex(idx);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <ProductGallery
          images={images}
          productTitle={product.title}
          selectedImageIndex={selectedImageIndex}
          onImageChange={setSelectedImageIndex}
        />
      </div>
      <div className="space-y-4">
        <AddToCartButton
          product={product}
          defaultVariant={defaultVariant}
          onVariantChange={handleVariantChange}
        />
        {children}
      </div>
    </div>
  );
}
