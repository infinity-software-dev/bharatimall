"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
  BookOpen,
  Award,
  LineChart,
  Coins,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  Building2,
  CreditCard,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// const disclaimerText = "Investment In Stock market is subject to market risk. There is no assured returns in the stock market so invest as per your risk appetite and read all the documents carefully before investing.";

// Core focus items of Comprehensive Financial Marketplace
const coreFocusItems = [
  {
    title: "Finance & Credit Solutions",
    subtitle: "Personal, Business & Asset Loans",
    icon: Building2,
    iconBg: "bg-[#FFF8D6]",
    iconColor: "text-[#D97706]",
    tagBg: "bg-[#FFF8D6] text-[#B45309] border-[#FDE68A]",
    tagText: "Flexible Borrowing",
    borderHover: "hover:border-[#F4C430]",
    link: "/products",
    items: [
      "Personal Loans",
      "Business Loans",
      "Education Loans",
      "Vehicle Loans",
      "Loan Against Property (LAP)",
      "Credit Cards",
    ],
  },
  {
    title: "Comprehensive Insurance",
    subtitle: "Complete 360° Life & Asset Cover",
    icon: ShieldCheck,
    iconBg: "bg-[#FDF2F8]",
    iconColor: "text-[#E91E63]",
    tagBg: "bg-[#FDF2F8] text-[#E91E63] border-[#FBCFE8]",
    tagText: "360° Protection",
    borderHover: "hover:border-[#E91E63]",
    link: "/products",
    items: [
      "Motor Insurance",
      "Health Insurance",
      "Term Life Insurance",
      "General Insurance",
    ],
  },
  {
    title: "Wealth & Investments",
    subtitle: "Systematic Growth & Retirement Plans",
    icon: TrendingUp,
    iconBg: "bg-[#E8F8F5]",
    iconColor: "text-[#198754]",
    tagBg: "bg-[#E8F8F5] text-[#198754] border-[#A7F3D0]",
    tagText: "Long-Term Growth",
    borderHover: "hover:border-[#198754]",
    link: "/products",
    items: [
      "Mutual Funds (SIP & Lumpsum)",
      "National Pension Scheme (NPS)",
      "Fixed Deposits (FD)",
      "Unlisted Shares & Pre-IPO",
    ],
  },
];

// Highlighted features categories
const categoryTabs = [
  "All Offerings",
  "Advisory Guides",
  "Wealth & SIP",
  "Protection",
];

// Highlighted features mapped cleanly to Bharati Mall offerings with balanced color accents
const featurePillars = [
  // {
  //   icon: GraduationCap,
  //   category: "Trading Mastery",
  //   title: "Stock Market Courses",
  //   tag: "Online & Offline",
  //   tagColor: "bg-[#FFF8D6] text-[#B45309] border-[#FDE68A]",
  //   iconBg: "bg-[#FFF8D6]",
  //   iconColor: "text-[#D97706]",
  //   borderColor: "hover:border-[#F4C430]",
  //   description: "Mastery programs in technical analysis, equity trading, and derivatives designed for beginners and seasoned investors.",
  //   link: "/products",
  //   linkText: "Explore Courses",
  //   metric: "50,000+ Enrolled",
  //   metricColor: "text-[#198754]"
  // },
  {
    icon: LineChart,
    category: "Advisory Guides",
    title: "Financial Advisory & Resources",
    tag: "Certified Research",
    tagColor: "bg-[#FDF2F8] text-[#E91E63] border-[#FBCFE8]",
    iconBg: "bg-[#FDF2F8]",
    iconColor: "text-[#E91E63]",
    borderColor: "hover:border-[#E91E63]",
    description:
      "Curated research guides, market data handbooks, and advisor resources under the trusted Bharti Share Market umbrella.",
    link: "/about",
    linkText: "Discover Advisory",
    metric: "15+ Handbooks",
    metricColor: "text-[#E91E63]",
  },
  {
    icon: Coins,
    category: "Wealth & SIP",
    title: "Mutual Funds & Investments",
    tag: "Wealth Growth",
    tagColor: "bg-[#E8F8F5] text-[#198754] border-[#A7F3D0]",
    iconBg: "bg-[#E8F8F5]",
    iconColor: "text-[#198754]",
    borderColor: "hover:border-[#198754]",
    description:
      "Systematic SIPs, NPS retirement solutions, fixed deposits, and curated wealth management products.",
    link: "/products",
    linkText: "View Portfolios",
    metric: "Top Rated Funds",
    metricColor: "text-[#198754]",
  },
  {
    icon: ShieldCheck,
    category: "Protection",
    title: "Insurance & Security",
    tag: "Protection First",
    tagColor: "bg-[#EEF4FF] text-[#2563EB] border-[#BFDBFE]",
    iconBg: "bg-[#EEF4FF]",
    iconColor: "text-[#2563EB]",
    borderColor: "hover:border-[#2563EB]",
    description:
      "Term, health, motor, and travel insurance solutions to safeguard you and your family's financial future.",
    link: "/products",
    linkText: "Compare Plans",
    metric: "100% Support",
    metricColor: "text-[#2563EB]",
  },
];

// Media partners
const mediaBrands = [
  { name: "Zee News", img: "/images/brand/zeenews.webp" },
  { name: "Red FM 93.5", img: "/images/brand/redfm.webp" },
  { name: "Sakal", img: "/images/brand/sakal.webp" },
  { name: "Big FM 92.7", img: "/images/brand/bigfm.webp" },
  { name: "TV9 Marathi", img: "/images/brand/tv9marathi.webp" },
  { name: "Zee 24 Taas", img: "/images/brand/zee24taas.webp" },
  { name: "Pudhari", img: "/images/brand/pudhari.webp" },
  { name: "Radio Mirchi", img: "/images/brand/mirchi.webp" },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All Offerings");

  const filteredFeatures =
    selectedCategory === "All Offerings"
      ? featurePillars
      : featurePillars.filter((f) => f.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] text-[#4B5563] selection:bg-[#FDF2F8] selection:text-[#E91E63]">
      <Header />

      {/* 1. Market Risk Disclaimer Scroller Bar */}
      {/* <section className="bg-[#FFFDF5] border-b border-[#E5E5E0] py-2.5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF8D6] border border-[#F4C430]/60 text-[#374151] text-xs font-bold shrink-0 shadow-xs cursor-default">
            <AlertCircle className="w-3.5 h-3.5 text-[#F4C430] animate-pulse" />
            <span className="uppercase tracking-wider">Important Notice</span>
          </motion.div>

          <div className="flex-1 overflow-hidden relative">
            <div className="flex items-center gap-12 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="inline-flex items-center gap-3 text-xs font-medium text-[#4B5563]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E91E63] shrink-0"></span>
                  <span>{disclaimerText}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* 2. Main Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#FFFDF5] border-b border-[#E5E5E0] py-16 sm:py-24 px-4">
          {/* Dual Warm & Magenta Ambient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.7, 0.9, 0.7],
              x: [0, 20, 0],
              y: [0, -15, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-1/2 -translate-x-1/2 w-[620px] h-[380px] bg-[#FFF8D6] rounded-full blur-[100px] pointer-events-none -z-0"
          />
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.12, 0.25, 0.12],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-0 right-10 w-80 h-80 bg-[#E91E63]/15 rounded-full blur-[90px] pointer-events-none -z-0"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-0 left-10 w-80 h-80 bg-[#FFF8D6] rounded-full blur-[110px] pointer-events-none -z-0"
          />

          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-7">
            {/* Animated Pill Badge with Magenta Spark */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#E5E5E0] hover:border-[#E91E63]/60 text-[#374151] text-xs sm:text-sm font-bold shadow-xs transition-all cursor-default"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E91E63] animate-ping" />
                <Sparkles className="w-4 h-4 text-[#F4C430]" />
              </div>
              <span>Financial Literacy &amp; Advisory Hub</span>
            </motion.div>

            {/* Main Heading in Soft Slate Grey with Yellow Brand Accent */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#374151] leading-[1.12]"
            >
              Welcome to{" "}
              <span className="text-[#F4C430]">Bharti Financial Mall</span>
            </motion.h1>

            {/* Subtitle / Description in Soft Slate Grey */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed"
            >
              Reimagining share market education and advisor resources. Browse
              our courses, download guides, and elevate your financial potential
              under Bharti Share Market.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/products/term-life-insurance"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-[#374151] bg-[#F4C430] hover:bg-[#FFD21F] btn-brand-shadow shimmer-btn transition-all duration-200 text-center"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-[#E91E63] bg-[#FFFFFF] border border-[#FBCFE8] hover:bg-[#FDF2F8] transition-all duration-200 text-center shadow-xs"
                >
                  About Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 3. COMPREHENSIVE FINANCIAL MARKETPLACE (OUR CORE FOCUS PILLARS) */}
        <section className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#E91E63] bg-[#FDF2F8] border border-[#FBCFE8] px-3.5 py-1 rounded-full">
                Our Core Focus
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#374151] tracking-tight">
                Comprehensive Financial Marketplace
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Discover a full spectrum of credit solutions, comprehensive
                insurance protection, and curated wealth growth products
                customized to your goals.
              </p>
            </div>

            {/* 3 Core Focus Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {coreFocusItems.map((focus, idx) => {
                const IconComp = focus.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.1 }}
                    whileHover={{ y: -8 }}
                    className={`bg-[#FFFFFF] border border-[#E5E5E0] ${focus.borderHover} rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 card-shadow hover:card-shadow-hover group`}
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <motion.div
                          whileHover={{ rotate: 8, scale: 1.1 }}
                          className={`w-14 h-14 rounded-2xl ${focus.iconBg} flex items-center justify-center ${focus.iconColor} transition-transform duration-300`}
                        >
                          <IconComp className="w-7 h-7" />
                        </motion.div>
                        <span
                          className={`text-[11px] font-bold px-3 py-1 rounded-full border ${focus.tagBg}`}
                        >
                          {focus.tagText}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="text-xl font-bold text-[#374151] group-hover:text-[#374151] transition-colors">
                          {focus.title}
                        </h3>
                        <p className="text-xs text-[#64748B]">
                          {focus.subtitle}
                        </p>
                      </div>

                      {/* Item Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {focus.items.map((item, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4B5563] bg-[#F5F5F3] border border-[#E5E5E0] px-2.5 py-1 rounded-lg"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#374151]/40" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E5E5E0] flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#198754] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Instant Approvals
                      </span>
                      <Link
                        href={focus.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#374151] hover:text-[#E91E63] group-hover:translate-x-1 transition-all"
                      >
                        <span>Explore Category</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#F4C430]" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3.5 Complete Product Suite - All Products Grid */}
        <section className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#198754] bg-[#E8F8F5] border border-[#A7F3D0] px-3.5 py-1 rounded-full">
                Complete Product Suite
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#374151] tracking-tight">
                Everything You Need for Financial Success
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                From investment opportunities to protective insurance and
                flexible credit solutions - explore our comprehensive range of
                financial products designed for every life stage.
              </p>
            </div>

            {/* Products Grid - 4 Columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {/* Investment Products */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#E8F8F5] border border-[#A7F3D0] rounded-2xl p-5 text-center hover:border-[#198754] transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#198754]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-[#198754]" />
                </div>
                <h3 className="text-sm font-bold text-[#374151] mb-1">
                  Unlisted Shares
                </h3>
                <p className="text-[11px] text-[#64748B]">
                  Pre-IPO Investment Opportunities
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#E8F8F5] border border-[#A7F3D0] rounded-2xl p-5 text-center hover:border-[#198754] transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#198754]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <LineChart className="w-6 h-6 text-[#198754]" />
                </div>
                <h3 className="text-sm font-bold text-[#374151] mb-1">
                  Mutual Funds
                </h3>
                <p className="text-[11px] text-[#64748B]">
                  SIP & Lumpsum Options
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#E8F8F5] border border-[#A7F3D0] rounded-2xl p-5 text-center hover:border-[#198754] transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#198754]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-[#198754]" />
                </div>
                <h3 className="text-sm font-bold text-[#374151] mb-1">NPS</h3>
                <p className="text-[11px] text-[#64748B]">
                  National Pension Scheme
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.15 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#E8F8F5] border border-[#A7F3D0] rounded-2xl p-5 text-center hover:border-[#198754] transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#198754]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Coins className="w-6 h-6 text-[#198754]" />
                </div>
                <h3 className="text-sm font-bold text-[#374151] mb-1">
                  Fixed Deposits
                </h3>
                <p className="text-[11px] text-[#64748B]">Secure Returns</p>
              </motion.div>

              {/* Loan Products */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.2 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#FFF8D6] border border-[#FDE68A] rounded-2xl p-5 text-center hover:border-[#D97706] transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#D97706]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-[#D97706]" />
                </div>
                <h3 className="text-sm font-bold text-[#374151] mb-1">
                  Personal Loan
                </h3>
                <p className="text-[11px] text-[#64748B]">Quick Approval</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.25 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#FFF8D6] border border-[#FDE68A] rounded-2xl p-5 text-center hover:border-[#D97706] transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#D97706]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-[#D97706]" />
                </div>
                <h3 className="text-sm font-bold text-[#374151] mb-1">
                  Business Loan
                </h3>
                <p className="text-[11px] text-[#64748B]">
                  Grow Your Enterprise
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.3 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#FFF8D6] border border-[#FDE68A] rounded-2xl p-5 text-center hover:border-[#D97706] transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#D97706]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-[#D97706]" />
                </div>
                <h3 className="text-sm font-bold text-[#374151] mb-1">
                  Vehicle Loan
                </h3>
                <p className="text-[11px] text-[#64748B]">Drive Your Dream</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.35 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#FFF8D6] border border-[#FDE68A] rounded-2xl p-5 text-center hover:border-[#D97706] transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#D97706]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-[#D97706]" />
                </div>
                <h3 className="text-sm font-bold text-[#374151] mb-1">LAS</h3>
                <p className="text-[11px] text-[#64748B]">
                  Loan Against Securities
                </p>
              </motion.div>

              {/* Insurance Products */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.4 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#FDF2F8] border border-[#FBCFE8] rounded-2xl p-5 text-center hover:border-[#E91E63] transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#E91E63]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-[#E91E63]" />
                </div>
                <h3 className="text-sm font-bold text-[#374151] mb-1">
                  Health Insurance
                </h3>
                <p className="text-[11px] text-[#64748B]">
                  Complete Medical Cover
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.45 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#FDF2F8] border border-[#FBCFE8] rounded-2xl p-5 text-center hover:border-[#E91E63] transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#E91E63]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-[#E91E63]" />
                </div>
                <h3 className="text-sm font-bold text-[#374151] mb-1">
                  Motor Insurance
                </h3>
                <p className="text-[11px] text-[#64748B]">Vehicle Protection</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#FDF2F8] border border-[#FBCFE8] rounded-2xl p-5 text-center hover:border-[#E91E63] transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#E91E63]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-[#E91E63]" />
                </div>
                <h3 className="text-sm font-bold text-[#374151] mb-1">
                  Term Life
                </h3>
                <p className="text-[11px] text-[#64748B]">Family Security</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.55 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#FDF2F8] border border-[#FBCFE8] rounded-2xl p-5 text-center hover:border-[#E91E63] transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#E91E63]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-[#E91E63]" />
                </div>
                <h3 className="text-sm font-bold text-[#374151] mb-1">
                  General Insurance
                </h3>
                <p className="text-[11px] text-[#64748B]">Asset Protection</p>
              </motion.div>

              {/* Credit Cards */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.6 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#EEF4FF] border border-[#BFDBFE] rounded-2xl p-5 text-center hover:border-[#2563EB] transition-all duration-300 cursor-pointer group col-span-2 md:col-span-1"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#2563EB]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CreditCard className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-sm font-bold text-[#374151] mb-1">
                  Credit Cards
                </h3>
                <p className="text-[11px] text-[#64748B]">Rewards & Benefits</p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <div className="text-center pt-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/products/term-life-insurance"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-[#374151] bg-[#F4C430] hover:bg-[#FFD21F] btn-brand-shadow transition-all duration-200"
                >
                  View All Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Highlighted Feature Offerings Filter Section */}
        <section className="py-16 sm:py-20 bg-[#FFFDF5] border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categoryTabs.map((tab) => {
                const isSelected = selectedCategory === tab;
                return (
                  <motion.button
                    key={tab}
                    onClick={() => setSelectedCategory(tab)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "text-[#E91E63] bg-[#FDF2F8] border border-[#FBCFE8] shadow-xs"
                        : "text-[#64748B] bg-[#FFFFFF] border border-[#E5E5E0] hover:bg-[#FFFDF5] hover:text-[#374151]"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeCategoryIndicator"
                        className="absolute inset-0 rounded-xl bg-[#FDF2F8] -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 25,
                        }}
                      />
                    )}
                    <span>{tab}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Feature Cards Grid with Smooth Motion */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredFeatures.map((pillar, idx) => {
                  const IconComponent = pillar.icon;
                  return (
                    <motion.div
                      layout
                      key={pillar.title}
                      initial={{ opacity: 0, scale: 0.92, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: 20 }}
                      transition={{ duration: 0.35, delay: idx * 0.05 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className={`bg-[#FFFFFF] border border-[#E5E5E0] ${pillar.borderColor} rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 card-shadow hover:card-shadow-hover group`}
                    >
                      <div className="space-y-4">
                        {/* Top icon and tag */}
                        <div className="flex items-center justify-between">
                          <motion.div
                            whileHover={{ rotate: 8, scale: 1.1 }}
                            className={`w-12 h-12 rounded-2xl ${pillar.iconBg} flex items-center justify-center ${pillar.iconColor} transition-colors duration-300`}
                          >
                            <IconComponent className="w-6 h-6" />
                          </motion.div>
                          <span
                            className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${pillar.tagColor}`}
                          >
                            {pillar.tag}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-[#374151] transition-colors">
                            {pillar.title}
                          </h3>
                          <p className="text-xs text-[#64748B] leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      </div>

                      {/* Footer Metric and Action */}
                      <div className="pt-6 mt-6 border-t border-[#E5E5E0] flex items-center justify-between">
                        <span
                          className={`text-[11px] font-semibold ${pillar.metricColor} flex items-center gap-1`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {pillar.metric}
                        </span>
                        <Link
                          href={pillar.link}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#374151] hover:text-[#E91E63] group-hover:translate-x-1 transition-all"
                        >
                          <span>{pillar.linkText}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-[#F4C430]" />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* 5. Highlighted Advisory Spotlight Banner */}
        <section className="py-12 bg-[#FFF8D6] border-b border-[#E5E5E0] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
              className="bg-[#FFFFFF] border-2 border-[#F4C430] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 transition-transform"
            >
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E91E63] bg-[#FDF2F8] border border-[#FBCFE8] px-3 py-1 rounded-md">
                  <BookOpen className="w-3.5 h-3.5 text-[#E91E63]" />
                  <span>Bharti Share Market Academic Resources</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#374151]">
                  Ready to upgrade your stock trading and investment skills?
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] max-w-xl">
                  Access comprehensive study materials, offline classroom
                  workshops across Maharashtra, and interactive market sessions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/products"
                    className="px-6 py-3.5 rounded-xl text-xs font-bold text-[#374151] bg-[#F4C430] hover:bg-[#FFD21F] btn-brand-shadow transition-all text-center block"
                  >
                    Browse All Courses
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/about"
                    className="px-6 py-3.5 rounded-xl text-xs font-bold text-[#E91E63] bg-[#FFFFFF] border border-[#FBCFE8] hover:bg-[#FDF2F8] transition-all text-center block"
                  >
                    About Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. Why Choose Us Section */}
        <section className="py-16 sm:py-20 bg-[#FFFDF5] border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EEF4FF] border border-[#BFDBFE] px-3.5 py-1 rounded-full">
                Why Choose Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#374151] tracking-tight">
                Your Trusted Financial Partner
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Experience the Bharati advantage with our commitment to
                transparency, expertise, and customer-first approach.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "SEBI Compliant",
                  desc: "All advisory services follow regulatory guidelines",
                  color: "text-[#E91E63]",
                  bg: "bg-[#FDF2F8]",
                },
                {
                  icon: Award,
                  title: "Expert Advisors",
                  desc: "Certified professionals with 15+ years experience",
                  color: "text-[#F4C430]",
                  bg: "bg-[#FFF8D6]",
                },
                {
                  icon: TrendingUp,
                  title: "Proven Track Record",
                  desc: "50,000+ satisfied customers across Maharashtra",
                  color: "text-[#198754]",
                  bg: "bg-[#E8F8F5]",
                },
                // {
                //   icon: GraduationCap,
                //   title: "Educational Focus",
                //   desc: "Learn while you invest with our comprehensive courses",
                //   color: "text-[#2563EB]",
                //   bg: "bg-[#EEF4FF]",
                // },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-[#FFFFFF] border border-[#E5E5E0] rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${feature.bg} flex items-center justify-center`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-[#374151] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
