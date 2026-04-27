'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductGalleryProps {
  images: Array<{
    url: string;
    altText: string | null;
    width: number;
    height: number;
  }>;
  productTitle: string;
  selectedImageIndex?: number;
  onImageChange?: (index: number) => void;
}

export function ProductGallery({ images, productTitle, selectedImageIndex, onImageChange }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(selectedImageIndex || 0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (selectedImageIndex !== undefined) {
      setSelectedImage(selectedImageIndex);
    }
  }, [selectedImageIndex]);

  const handleImageChange = (index: number) => {
    setSelectedImage(index);
    onImageChange?.(index);
  };

  const goToPrevious = () => {
    handleImageChange(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
  };

  const goToNext = () => {
    handleImageChange(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
  };

  if (images.length === 0) {
    return (
      <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
        <span className="text-gray-400">No image available</span>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative group">
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full aspect-square relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 cursor-zoom-in hover:border-gray-300 transition-all shadow-md"
          >
            <Image
              src={images[selectedImage].url}
              alt={images[selectedImage].altText || productTitle}
              fill
              className="object-contain p-4"
              priority
            />
            <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
              <ZoomIn className="h-5 w-5 text-gray-700" />
            </div>
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
              >
                <ChevronLeft className="h-5 w-5 text-gray-800" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
              >
                <ChevronRight className="h-5 w-5 text-gray-800" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => handleImageChange(idx)}
                className={cn(
                  'relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200',
                  selectedImage === idx
                    ? 'border-primary ring-2 ring-primary/20 scale-105 shadow-md'
                    : 'border-gray-200 hover:border-gray-400 hover:scale-105'
                )}
              >
                <Image
                  src={image.url}
                  alt={image.altText || `${productTitle} ${idx + 1}`}
                  fill
                  className="object-contain p-1"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Expanded Modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsExpanded(false)}
        >
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative w-full max-w-4xl max-h-[90vh] aspect-square"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImage].url}
              alt={images[selectedImage].altText || productTitle}
              fill
              className="object-contain"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 text-white text-sm px-4 py-2 rounded-full">
                {selectedImage + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
