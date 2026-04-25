"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-dark to-gray-900 text-white border-b border-primary/20">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-pulse"></div>
          </div>
          
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer"></div>

          <div className="container-custom relative">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-3 px-2">
              {/* Left side - Badge */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/30">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold tracking-wider uppercase">Limited Offer</span>
                </div>
              </div>

              {/* Center - Main message */}
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-primary via-red-400 to-primary bg-clip-text text-transparent">
                    Up to 70% Off Retail Prices
                  </span>
                </div>
              </div>

              {/* Right side - CTA */}
              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="group relative overflow-hidden bg-primary hover:bg-primary-dark px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Shop Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Link>

                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  aria-label="Close banner"
                >
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
