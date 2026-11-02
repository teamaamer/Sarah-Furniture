'use client';

import { useState } from 'react';
import { ProductGallery } from './product-gallery';
import { ProductInfo } from './product-info';
import type { Product } from '@/data/products';

interface ProductClientWrapperProps {
  product: Product;
  children?: React.ReactNode;
}

export function ProductClientWrapper({ product, children }: ProductClientWrapperProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const images = product.images.map((url) => ({ url, altText: null }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <ProductGallery
          images={images}
          productTitle={product.name}
          selectedImageIndex={selectedImageIndex}
          onImageChange={setSelectedImageIndex}
        />
      </div>
      <div className="space-y-4">
        <ProductInfo product={product} />
        {children}
      </div>
    </div>
  );
}
