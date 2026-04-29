'use client';

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { businessInfo } from "@/data/businessInfo";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const stats = [
  { value: "700+", label: "Happy Customers" },
  { value: "70%", label: "Off Retail" },
  { value: "Same Day", label: "Delivery" },
  { value: "4.7★", label: "Google Rating" },
];

const products = ["Sectionals", "Beds", "Sofa Sets", "Couches", "Chairs", "Living Room Furniture"];
const specialties = ["Sofas", "Love Seats", "Rugs", "Mattresses", "Sectionals", "Bedroom Furniture"];

export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });

  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: "-80px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative bg-gray-950 overflow-hidden py-24 lg:py-32">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-3xl"
          >
            Jacksonville's Most Trusted{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">
              Furniture Store
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-gray-400 text-lg max-w-xl leading-relaxed"
          >
            Family owned. Community driven. Premium furniture at up to 70% off retail — right here in Jacksonville, FL.
          </motion.p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section ref={statsRef} className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-extrabold text-primary mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section ref={storyRef} className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease }}
            >
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Who We Are</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                A Family Business Built on Trust
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                Sarah Furniture Liquidation Center offers sectionals, beds, sofa sets, and more at up to 70% off retail prices in Jacksonville, FL.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                As a family and locally owned business, we take pride in giving our community access to top-quality furniture at prices that can't be beat. Same-day delivery and personalized service set us apart.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/locations" className="btn-primary inline-flex items-center gap-2">
                  Visit Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a href={`tel:${businessInfo.phone}`} className="text-primary font-semibold hover:underline">
                  {businessInfo.phone}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: "🚚", title: "Same-Day Delivery", desc: "Fast, professional delivery to your door." },
                { icon: "💳", title: "Flexible Financing", desc: "Buy now, pay over time — no credit needed." },
                { icon: "🏠", title: "Family Owned", desc: "Serving Jacksonville with pride for years." },
                { icon: "💰", title: "Up to 70% Off", desc: "Unbeatable prices on premium furniture." },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-5 hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Info Grid ── */}
      <section ref={infoRef} className="py-24 lg:py-32 bg-gray-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Details</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Everything You Need to Know</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0, ease }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-3">Products</h3>
              <ul className="space-y-2">
                {products.map((p) => (
                  <li key={p} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Specialties */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-3">Specialties</h3>
              <ul className="space-y-2">
                {specialties.map((s) => (
                  <li key={s} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-3">Hours</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-white font-semibold text-xs uppercase tracking-wider mb-0.5">Mon – Sat</p>
                  <p className="text-gray-400">{businessInfo.hoursWeekday}</p>
                </div>
                <div>
                  <p className="text-white font-semibold text-xs uppercase tracking-wider mb-0.5">Sunday</p>
                  <p className="text-gray-400">{businessInfo.hoursSunday}</p>
                </div>
              </div>
            </motion.div>

            {/* Payment */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-3">Payment</h3>
              <ul className="space-y-2">
                {businessInfo.paymentMethods.map((m) => (
                  <li key={m} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} className="py-20 bg-white">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4"
          >
            Come See Us Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-gray-400 text-lg mb-8 max-w-md mx-auto"
          >
            {businessInfo.locations[0].fullAddress}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/locations" className="btn-primary inline-flex items-center justify-center gap-2">
              Get Directions
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center gap-2">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
