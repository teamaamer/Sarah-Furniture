"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ height: "calc(100dvh - 88px)" }}>
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Layered Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center">
        {/* Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/80 border border-white/20 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Premium Furniture Store
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 max-w-4xl">
          Furnish Your<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">
            Dream Space
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base lg:text-xl text-white/70 font-light max-w-xl mb-8 leading-relaxed">
          Premium sectionals, beds & sofa sets from trusted brands — up to{" "}
          <span className="text-white font-semibold">70% off</span> retail.
          Same-day delivery available.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-9 py-4 rounded-md text-base font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02]"
          >
            Shop Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="/locations"
            className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border border-white/25 px-9 py-4 rounded-md text-base font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-[1.02]"
          >
            Visit Our Store
          </Link>
        </div>

        {/* Stats Row */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 w-full">
          {[
            { value: "5,000+", label: "Products" },
            { value: "70%", label: "Off Retail" },
            { value: "Same Day", label: "Delivery" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-xs text-white/50 uppercase tracking-widest mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
