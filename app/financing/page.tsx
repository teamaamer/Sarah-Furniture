'use client';

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { financingPartners } from "@/data/financing";
import { businessInfo } from "@/data/businessInfo";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const partnerAccents = ["from-red-600 to-rose-500", "from-gray-700 to-gray-900"];
const partnerNumbers = ["01", "02"];

export default function FinancingPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <div className="bg-white">

      {/* ── Hero Banner ── */}
      <section ref={heroRef} className="relative bg-gray-950 overflow-hidden py-24 lg:py-32">
        {/* Background glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Financing & Leasing
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-5 max-w-3xl mx-auto"
          >
            Furniture Now,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">
              Pay Your Way
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            One simple application. Flexible plans. No credit needed. Furnish your home today.
          </motion.p>
        </div>
      </section>

      {/* ── Partner Cards ── */}
      <section ref={cardsRef} className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Our Partners</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Choose Your Plan</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {financingPartners.map((partner, i) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 50 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease }}
                className="group relative bg-gray-950 rounded-2xl p-8 overflow-hidden hover:scale-[1.02] transition-transform duration-500 shadow-xl"
              >
                {/* Ghost number */}
                <span className="absolute top-4 right-6 text-7xl font-black text-white/5 select-none leading-none">
                  {partnerNumbers[i]}
                </span>

                {/* Top accent gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${partnerAccents[i]}`} />

                {/* Partner name */}
                <div className="mb-6">
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${partnerAccents[i]} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                    FINANCING PARTNER
                  </div>
                  <h3 className="text-2xl font-extrabold text-white leading-tight">{partner.name}</h3>
                  <p className="text-gray-400 mt-2 text-sm">{partner.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {partner.features.map((feature, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      animate={cardsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.15 + j * 0.07 + 0.3, ease }}
                      className="flex items-center gap-3 text-gray-300 text-sm"
                    >
                      <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-primary" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-red-400 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section ref={stepsRef} className="py-24 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Simple Process</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">How It Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Visit the Store", desc: "Come in to our Atlantic Blvd location and pick the furniture you love." },
              { step: "02", title: "Quick Application", desc: "Fill out one simple application — takes just a few minutes, no credit needed." },
              { step: "03", title: "Take It Home", desc: "Get approved and take your furniture home the same day with flexible payments." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease }}
                className="relative text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                  <span className="text-primary font-black text-lg">{item.step}</span>
                </div>
                {/* Connector line */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] right-0 w-[calc(100%-5rem)] h-px bg-gradient-to-r from-primary/30 to-transparent" />
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section ref={ctaRef} className="py-20 bg-gray-950 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />

        <div className="container-custom relative text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="text-3xl lg:text-4xl font-extrabold text-white mb-4"
          >
            Questions About Financing?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-gray-400 text-lg mb-8 max-w-md mx-auto"
          >
            Our team is ready to help you find the best plan for your needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-md hover:bg-red-700 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/30"
            >
              Contact Us
            </Link>
            <a
              href={`tel:${businessInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-semibold px-8 py-4 rounded-md hover:bg-white/20 active:scale-95 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {businessInfo.phone}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
