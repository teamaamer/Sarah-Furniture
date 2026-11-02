'use client';

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { ShopifyCollection } from "@/lib/shopify/types";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function CategoriesSection({ collections }: { collections: ShopifyCollection[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-12 text-center"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Browse</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">Shop by Category</h2>
          <p className="text-gray-400 mt-3 text-lg">Discover our wide selection of quality furniture</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {collections.map((collection, i) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07, ease }}
            >
              <Link
                href={`/collections/${collection.handle}`}
                className="group block relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  {collection.image ? (
                    <Image
                      src={collection.image.url}
                      alt={collection.image.altText || collection.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                      <span className="text-5xl">🛋️</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-sm lg:text-base leading-tight drop-shadow">
                      {collection.title}
                    </h3>
                    <p className="text-white/70 text-xs mt-1 flex items-center gap-1 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      Shop Now
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-300 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease }}
          className="text-center mt-12"
        >
          <Link href="/products" className="btn-secondary inline-block">
            View All Categories
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
