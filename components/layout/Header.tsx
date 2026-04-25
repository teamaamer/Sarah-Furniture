"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { businessInfo, navigation } from "@/data/businessInfo";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      {/* Top Bar - Minimal */}
      <div className="border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="text-gray-500">
              {businessInfo.locations[0].fullAddress}
            </div>
<a
              href={`tel:${businessInfo.phone}`}
              className="text-gray-900 font-medium hover:text-primary transition-colors"
            >
              {businessInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/sarahlogo.png"
              alt={businessInfo.name}
              width={180}
              height={70}
              className="h-14 w-auto object-contain"
              priority
              style={{ mixBlendMode: 'multiply' }}
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.main.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </Link>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Right */}
          <div className="hidden lg:block">
            <a
              href={`tel:${businessInfo.phone}`}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-red-700 transition-all shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            {navigation.main.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2.5 text-sm font-medium text-gray-700 hover:text-primary"
                  onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 text-sm text-gray-600 hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={`tel:${businessInfo.phone}`}
              className="mt-4 inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-md text-sm font-medium w-full justify-center"
            >
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
