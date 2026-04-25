"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { businessInfo } from "@/data/businessInfo";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 animate-in slide-in-from-bottom duration-500">
      <a
        href={`tel:${businessInfo.phone}`}
        className="group bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-primary-dark transition-all duration-300 hover:scale-110 flex items-center gap-2"
        aria-label="Call us"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="hidden group-hover:inline-block text-sm font-semibold whitespace-nowrap">
          Call Now
        </span>
      </a>

      <Link
        href="/contact"
        className="group bg-dark text-white p-4 rounded-full shadow-2xl hover:bg-gray-700 transition-all duration-300 hover:scale-110 flex items-center gap-2"
        aria-label="Contact us"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="hidden group-hover:inline-block text-sm font-semibold whitespace-nowrap">
          Get Quote
        </span>
      </Link>
    </div>
  );
}
