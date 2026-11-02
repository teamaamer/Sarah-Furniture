"use client";

import { useEffect } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";

export default function InstagramFeed() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const instagramPosts = [
    "https://www.instagram.com/p/DXpX5ibjNjR/",
    "https://www.instagram.com/p/DXo7vGmjOiE/",
    "https://www.instagram.com/reel/DXnJR68ghow/",
    "https://www.instagram.com/p/DXZbp2zjLl_/",
    "https://www.instagram.com/reel/DXW6Yt8FOVQ/",
    "https://www.instagram.com/p/DXUMA1rjILc/",
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Follow Us on Instagram"
          subtitle="See our latest furniture arrivals and customer setups"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {instagramPosts.map((postUrl, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={postUrl}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  margin: "0",
                  maxWidth: "100%",
                  minWidth: "326px",
                  padding: "0",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="https://www.instagram.com/sarahfurnitureliquidation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-4 px-10 rounded-md hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Follow @sarahfurnitureliquidation</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
