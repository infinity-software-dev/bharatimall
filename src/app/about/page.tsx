"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Handshake,
  Layers,
  HeartHandshake,
  Cpu,
  Headphones,
  Compass,
  Target
} from "lucide-react";
import { motion } from "framer-motion";

// Business Approaches
const businessApproaches = [
  {
    title: "Digital First Journey",
    desc: "Seamless, paperless onboarding with instant product discovery, digital comparisons, and rapid application processing.",
    icon: Zap,
    color: "text-[#2563EB]",
    bg: "bg-[#EEF4FF]",
    border: "border-[#BFDBFE]"
  },
  {
    title: "Assisted Advisory Services",
    desc: "Technology-assisted personal consultation connecting customers with certified financial advisors for tailored recommendations.",
    icon: HeartHandshake,
    color: "text-[#E91E63]",
    bg: "bg-[#FDF2F8]",
    border: "border-[#FBCFE8]"
  },
  {
    title: "Strong Partner Ecosystem",
    desc: "Direct integration with India's premier banks, NBFCs, AMCs, and top insurance providers ensuring verified rates and instant approvals.",
    icon: Layers,
    color: "text-[#D97706]",
    bg: "bg-[#FFF8D6]",
    border: "border-[#FDE68A]"
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] text-[#4B5563] selection:bg-[#FDF2F8] selection:text-[#E91E63] font-sans">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-16 space-y-12">
        {/* SECTION 2: LEGACY & APPROACHES */}
        <section className="space-y-12">
          <div className="space-y-4 text-center">
            <span className="text-xs font-bold text-[#2076C7] uppercase tracking-widest">Our Legacy & Mission</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#374151] leading-tight">
              Democratizing Stock Market Success
            </h1>
            <p className="text-sm text-zinc-500 max-w-xl mx-auto">
              At Bharti Share Market, our core vision is आर्थिक साक्षरता (Financial Literacy).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessApproaches.map((approach, idx) => {
              const IconComp = approach.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-[#FFFFFF] border border-[#E5E5E0] hover:border-[#F4C430] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`w-12 h-12 rounded-2xl ${approach.bg} ${approach.border} border flex items-center justify-center ${approach.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#374151]">{approach.title}</h3>

                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {approach.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: VISION & MISSION                                               */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-18 bg-[#FFFFFF] border-b border-[#E5E5E0]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

              {/* Vision Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#FFFDF5] border border-[#E5E5E0] hover:border-[#F4C430] p-6 sm:p-8 rounded-3xl space-y-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF8D6] flex items-center justify-center text-[#D97706]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#374151]">Our Vision</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed italic">
                  &ldquo;To build a trusted, technology-driven financial marketplace that makes financial products simple, accessible, and convenient for every customer across India.&rdquo;
                </p>
              </motion.div>

              {/* Mission Card with Magenta Accent */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#FDF2F8]/40 border border-[#FBCFE8] hover:border-[#E91E63] p-6 sm:p-8 rounded-3xl space-y-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FDF2F8] flex items-center justify-center text-[#E91E63]">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#374151]">Our Mission</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  To empower individuals and businesses with informed financial choices by combining modern technology, deep financial expertise, seamless distribution networks, and personalized customer advisory.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: PROF. RAVINDRA BHARTI — FOUNDER SHOWCASE                    */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#FFFDF5] border-b border-[#E5E5E0] relative overflow-hidden rounded-3xl">

          {/* Dual Glow Background for Founder */}
          <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#E91E63]/10 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#F4C430]/15 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Founder Story Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

              {/* Founder Image Column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 flex justify-center"
              >
                {/* Ambient glow & backdrop card with dual golden + magenta borders */}
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8D6] via-[#FDF2F8] to-[#F5F5F3] rounded-3xl -rotate-2 transform scale-95 border border-[#E5E5E0] -z-10 shadow-sm" />

                  <div className="relative bg-[#FFFFFF] border-2 border-[#F4C430] hover:border-[#E91E63] rounded-3xl p-4 sm:p-6 overflow-hidden shadow-lg transition-colors duration-300">
                    {/* Glowing highlight ring */}
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#E91E63]/15 rounded-full blur-2xl" />

                    <img
                      src="/images/Bharti_Sir_Image.png"
                      alt="Prof. Ravindra Bharti"
                      className="w-full h-auto object-contain max-h-[480px] drop-shadow-md mx-auto"
                    />

                    {/* Badge Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E5E5E0] rounded-xl p-3 shadow-md text-center">
                      <p className="text-sm font-black text-[#374151]">Prof. Ravindra Bharti</p>
                      <p className="text-xs text-[#E91E63] font-bold">Founder, Bharti Business Group</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Founder Biography & Story Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-7 space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E91E63] bg-[#FDF2F8] px-3.5 py-1 rounded-full border border-[#FBCFE8] inline-block">
                    Founder&apos;s Story
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#374151]">
                    Prof. Ravindra Bharti
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-[#64748B]">
                    Visionary Entrepreneur | Stock Market Expert | Financial Influencer &amp; Author
                  </p>
                </div>

                {/* Exact Requested Content Paragraphs with Magenta Highlight */}
                <div className="space-y-4 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  <p className="p-4 bg-[#FFFFFF] border-l-4 border-l-[#E91E63] rounded-r-xl border border-[#E5E5E0]/70">
                    <strong>Prof. Ravindra Bharti</strong> - Founder of Bharti Business Group, a visionary force in the stock market and business, was born into a debt-ridden farming family in Bori Aindi, Pune. He defied the odds and initiated his stock market journey in 2004. An engineering graduate of Bharti Vidyapeeth, Pune, Bharti Sir is driven by a mission to educate India about the stock market. In 2008, he founded Bharti Share Market, now a beacon of financial education headquartered in Pune&apos;s Marvel Fuego, Magarpatta. With over <strong>275K+ students</strong> and <strong>850+ franchises</strong>, Bharti Share Market aims to enlighten over <strong>10 crore Indians</strong>. He appears on Marathi, Hindi and Gujarati news stations on a daily basis to teach the public about the stock market industry and has authored <strong>12 stock market books</strong>.
                  </p>

                  <p>
                    Bharti&apos;s ventures include businesses in various sectors like stock market, media, publications and reality. He helps people to grow in the stock market. Prof. Ravindra Bharti is a respected financial influencer, stock market expert, business coach and investor.
                  </p>

                  <p>
                    From modest beginnings to becoming a big force in the stock market and No. 1 stock market trainer in Maharashtra, Bharti sir has accomplished it all. R Bharti Group is here to guide everyone toward relative success in both the stock market and business endeavours.
                  </p>
                </div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: BOTTOM ACTION CALLOUT                                          */}
        {/* ========================================================================= */}
        <section className="py-12 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto">
            <div className="p-6 sm:p-8 bg-gradient-to-r from-[#FFF8D6] via-[#FFFDF5] to-[#FDF2F8] border border-[#FBCFE8] rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1.5 text-center sm:text-left">
                <h4 className="text-lg font-black text-[#374151]">Start Your Financial Journey with Bharati Mall</h4>
                <p className="text-xs sm:text-sm text-[#4B5563]">Access curated loans, insurance plans, mutual fund SIPs, and stock market mastery.</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/products"
                  className="px-6 py-3.5 rounded-xl text-xs font-bold text-[#374151] bg-[#F4C430] hover:bg-[#FFD21F] shadow-md transition-all whitespace-nowrap"
                >
                  Browse Products
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl text-xs font-bold text-[#E91E63] bg-[#FFFFFF] border border-[#FBCFE8] hover:bg-[#FDF2F8] transition-all whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}