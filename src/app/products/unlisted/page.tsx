"use client";

import React, { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { UNLISTED_SHARES_DATA, UnlistedShareItem } from "@/data/unlistedSharesData";
import { 
  ArrowLeft, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ShoppingCart, 
  HandCoins, 
  Activity, 
  Users, 
  Building, 
  CreditCard, 
  Package, 
  Award, 
  Clock, 
  PieChart, 
  ChevronRight, 
  ChevronDown, 
  ShieldAlert,
  Search,
  SlidersHorizontal,
  X
} from "lucide-react";

export default function UnlistedSharesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "popular" | "under500">("all");
  const [displayCount, setDisplayCount] = useState(15);

  // Filtered Unlisted Shares
  const filteredShares = useMemo(() => {
    return UNLISTED_SHARES_DATA.filter((share) => {
      const matchesSearch = share.shares_name.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;

      if (activeFilter === "popular") {
        return share.is_popular;
      }
      if (activeFilter === "under500") {
        return parseFloat(share.price) < 500;
      }

      return true;
    });
  }, [searchQuery, activeFilter]);

  const visibleShares = useMemo(() => {
    return filteredShares.slice(0, displayCount);
  }, [filteredShares, displayCount]);

  const benefits = [
    {
      icon: <TrendingUp className="w-5 h-5 text-[#171717]" />,
      title: "Growth Potential",
      desc: "Capitalize early on category leaders before public stock exchange listing."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#171717]" />,
      title: "Early Entry Advantage",
      desc: "Invest before public listing at ground-floor valuations before institutional premiums apply."
    },
    {
      icon: <Building className="w-5 h-5 text-[#171717]" />,
      title: "Access to Tech Unicorns",
      desc: "Gain exclusive access to fast-growing pre-IPO companies, industry market leaders, and late-stage startups."
    },
    {
      icon: <PieChart className="w-5 h-5 text-[#171717]" />,
      title: "Portfolio Diversification",
      desc: "Low correlation with short-term public market volatility, balancing your overall wealth portfolio risk."
    },
    {
      icon: <Clock className="w-5 h-5 text-[#171717]" />,
      title: "Long-term Wealth Compounding",
      desc: "Participate directly in multi-year growth stories of emerging Indian corporate powerhouses."
    },
    {
      icon: <Award className="w-5 h-5 text-[#171717]" />,
      title: "Guaranteed Pre-IPO Allocation",
      desc: "Secure your share allocation directly in Demat before oversubscribed public retail issues open."
    }
  ];

  const steps = [
    {
      step: 1,
      icon: <Building className="w-5 h-5 text-[#171717]" />,
      title: "1. Select Share",
      desc: "Browse our curated roster of high-growth pre-IPO companies based on your wealth targets."
    },
    {
      step: 2,
      icon: <ShoppingCart className="w-5 h-5 text-[#171717]" />,
      title: "2. Confirm Quote",
      desc: "Specify your share lot size and confirm share prices with our specialist desk."
    },
    {
      step: 3,
      icon: <CreditCard className="w-5 h-5 text-[#171717]" />,
      title: "3. Secure Payment",
      desc: "Complete your transaction safely via verified banking channels with contract note guarantee."
    },
    {
      step: 4,
      icon: <Package className="w-5 h-5 text-[#171717]" />,
      title: "4. Demat Transfer",
      desc: "Receive shares electronically directly in your NSDL / CDSL Demat account within 24-48 hours."
    },
    {
      step: 5,
      icon: <CheckCircle2 className="w-5 h-5 text-[#171717]" />,
      title: "5. Tracking & Listing",
      desc: "Track company news, quarterly financial results, DRHP filings, and eventual IPO listing date."
    }
  ];

  const faqs = [
    {
      q: "What exactly are unlisted shares & Pre-IPO equities?",
      a: "Unlisted shares belong to equity shares of companies that are not yet traded on public stock exchanges like NSE or BSE. Buying pre-IPO unlisted shares allows retail and HNI investors to buy equity stakes in fast-growing companies before their public IPO listing."
    },
    {
      q: "Are unlisted share transactions legal in India?",
      a: "Yes, 100% legal! Buying and selling unlisted shares in India is governed under the Companies Act, 2013 and SEBI regulations. Share transfers take place off-market electronically directly between Demat accounts via DIS slips."
    },
    {
      q: "Do I need a Demat account to buy unlisted shares?",
      a: "Yes, a valid NSDL or CDSL Demat account is mandatory. Unlisted shares are credited electronically in dematerialized form directly into your existing Demat account."
    },
    {
      q: "What is the minimum investment required?",
      a: "Minimum lot sizes vary per company, typically starting from 25 to 1000 shares."
    },
    {
      q: "How is the price of unlisted shares determined?",
      a: "Unlisted share prices are determined by market demand & supply, recent valuation funding rounds, corporate earnings growth, financial performance, and expected listing valuation."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF5] text-[#292929] font-sans selection:bg-[#F4C430] selection:text-[#171717]">
      <Header />

      {/* Main Container */}
      <main className="flex-1 w-full">

        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF5] via-[#FFF8D6]/30 to-[#F5F5F3] border-b border-[#E5E5E0] pt-8 sm:pt-12 pb-16 px-4 sm:px-6 lg:px-8">
          
          {/* Subtle Ambient Decorative Glows */}
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#FFF8D6] blur-3xl opacity-80 pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#F4C430]/15 blur-3xl opacity-60 pointer-events-none" />

          <div className="max-w-7xl mx-auto space-y-8 relative z-10">

            {/* Top Navigation Row: Back Button & Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E5E5E0] text-xs font-semibold text-[#171717] hover:bg-[#FFF8D6] hover:border-[#F4C430]/60 transition-all shadow-xs group"
              >
                <ArrowLeft className="w-4 h-4 text-[#6B6B6B] group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF8D6] border border-[#F4C430]/50 text-[#171717] text-xs font-bold uppercase tracking-wider shadow-xs">
                <TrendingUp className="w-3.5 h-3.5 text-[#198754]" />
                <span>INDIA&apos;S PREMIER PRE-IPO PLATFORM</span>
              </div>
            </div>

            {/* Hero Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
              
              {/* Left Column: Headlines & CTA */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#171717] tracking-tight leading-[1.15]">
                    Invest in the Next <br className="hidden sm:inline" />
                    <span className="relative inline-block text-[#171717] mt-1 sm:mt-0">
                      <span className="relative z-10 px-3 py-1 bg-[#FFF8D6] rounded-xl border-b-4 border-[#F4C430] shadow-xs">
                        Tech Unicorns
                      </span>
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg text-[#6B6B6B] font-normal leading-relaxed max-w-xl">
                    Access exclusive unlisted shares and Pre-IPO opportunities before they hit the stock exchange. Early entry for maximum wealth creation.
                  </p>
                </div>

                {/* Primary CTA Button -> Navigates directly to /enquiry */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/enquiry?product=unlisted-shares"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-base font-bold text-[#171717] bg-[#F4C430] hover:bg-[#FFD21F] shadow-md shadow-[#F4C430]/20 hover:shadow-lg active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Apply Now</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>

                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B6B6B] px-4 py-3 bg-white/90 rounded-xl border border-[#E5E5E0] shadow-xs">
                    <ShieldCheck className="w-4 h-4 text-[#198754]" />
                    <span>100% Demat Delivery Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean 3D Display Container */}
              <div className="lg:col-span-5 relative flex justify-center items-center pt-4 lg:pt-0">
                <div className="relative w-full max-w-[440px] group flex justify-center items-center">
                  
                  {/* Floating User Badge (Top Right) */}
                  <div className="absolute -top-3 sm:top-2 right-0 sm:right-2 z-20 bg-white/95 backdrop-blur-sm border border-[#E5E5E0] rounded-xl px-3.5 py-2 shadow-md flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#FFF8D6] border border-[#F4C430] flex items-center justify-center text-[#171717]">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-left">
                      <span className="text-[9px] uppercase font-bold text-[#6B6B6B] block leading-none">USERS</span>
                      <span className="text-xs font-bold text-[#171717]">10,000+ Active</span>
                    </div>
                  </div>

                  {/* Floating Safety Verified Badge (Bottom Left) */}
                  <div className="absolute -bottom-3 sm:bottom-2 left-0 sm:left-2 z-20 bg-white/95 backdrop-blur-sm border border-[#E5E5E0] rounded-xl px-3.5 py-2 shadow-md flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 border border-[#198754]/40 flex items-center justify-center text-[#198754]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-left">
                      <span className="text-[9px] uppercase font-bold text-[#6B6B6B] block leading-none">SAFETY</span>
                      <span className="text-xs font-bold text-[#171717]">Verified Platform</span>
                    </div>
                  </div>

                  {/* Clean 3D Image Display Card */}
                  <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-[#E5E5E0] bg-white p-2 sm:p-2.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/unlisted_hero_3d.png"
                      alt="Unlisted Shares & Pre-IPO Investments"
                      className="w-full h-auto max-h-[400px] object-cover rounded-xl transform group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                    />
                  </div>

                </div>
              </div>

            </div>

            {/* Quick Action Navigation Bar */}
            <div className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
                <Link
                  href="/enquiry?product=unlisted-shares&action=buy"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#F4C430] border border-[#F4C430] text-[#171717] hover:bg-[#FFD21F] transition-all shadow-xs cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4 text-[#171717]" />
                  <span>Buy Shares</span>
                </Link>

                <Link
                  href="/enquiry?product=unlisted-shares&action=sell"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-xl text-xs sm:text-sm font-bold bg-white border border-[#E5E5E0] text-[#292929] hover:bg-[#FFF8D6] hover:border-[#F4C430]/60 transition-all shadow-xs cursor-pointer"
                >
                  <HandCoins className="w-4 h-4 text-[#171717]" />
                  <span>Sell Shares</span>
                </Link>

                <a
                  href="#featured-opportunities"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-xl text-xs sm:text-sm font-bold bg-white border border-[#E5E5E0] text-[#292929] hover:bg-[#FFF8D6] hover:border-[#F4C430]/60 transition-all shadow-xs cursor-pointer"
                >
                  <Activity className="w-4 h-4 text-[#171717]" />
                  <span>Live Trends</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 2. FEATURED OPPORTUNITIES & FULL UNLISTED SHARES GRID */}
        <section id="featured-opportunities" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
          
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-[#FFF8D6] border border-[#F4C430]/60 text-[#171717] text-xs font-bold uppercase tracking-wider inline-block shadow-xs">
              UNLISTED SHARES DIRECTORY ({UNLISTED_SHARES_DATA.length} STOCKS)
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#171717] tracking-tight">
              Pre-IPO & Unlisted Companies
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6B6B] font-normal leading-relaxed">
              Discover share prices and lot availability for unlisted companies across India.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-[#6B6B6B] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search unlisted shares by company name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-10 py-3 rounded-xl bg-white border border-[#E5E5E0] text-xs sm:text-sm text-[#171717] placeholder:text-[#6B6B6B] focus:outline-none focus:border-[#F4C430] transition-all shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] hover:text-[#171717]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Quick Filter Tabs */}
              <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 shrink-0">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap border ${
                    activeFilter === "all"
                      ? "bg-[#F4C430] border-[#F4C430] text-[#171717] shadow-xs"
                      : "bg-white border-[#E5E5E0] text-[#6B6B6B] hover:bg-[#FFF8D6]"
                  }`}
                >
                  All ({UNLISTED_SHARES_DATA.length})
                </button>
                <button
                  onClick={() => setActiveFilter("popular")}
                  className={`px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap border ${
                    activeFilter === "popular"
                      ? "bg-[#F4C430] border-[#F4C430] text-[#171717] shadow-xs"
                      : "bg-white border-[#E5E5E0] text-[#6B6B6B] hover:bg-[#FFF8D6]"
                  }`}
                >
                  Popular
                </button>
                <button
                  onClick={() => setActiveFilter("under500")}
                  className={`px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap border ${
                    activeFilter === "under500"
                      ? "bg-[#F4C430] border-[#F4C430] text-[#171717] shadow-xs"
                      : "bg-white border-[#E5E5E0] text-[#6B6B6B] hover:bg-[#FFF8D6]"
                  }`}
                >
                  Under ₹500
                </button>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          {filteredShares.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {visibleShares.map((company) => (
                <div 
                  key={company.id}
                  className="bg-white border border-[#E5E5E0] rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs hover:shadow-lg hover:border-[#F4C430] transition-all relative overflow-hidden flex flex-col justify-between group"
                >
                  {/* Popular Pill Badge */}
                  {company.is_popular && (
                    <div className="absolute top-4 right-4 bg-[#FFF8D6] border border-[#F4C430] text-[#171717] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Popular
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pr-14">
                      <div className="w-10 h-10 rounded-xl bg-[#FFF8D6] border border-[#F4C430]/50 flex items-center justify-center font-bold text-[#171717] text-sm shrink-0 overflow-hidden">
                        {company.logo_url ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={company.logo_url}
                            alt={company.shares_name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to building icon if image fails to load
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        ) : (
                          <Building className="w-5 h-5 text-[#171717]" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#171717] leading-tight line-clamp-2">
                          {company.shares_name}
                        </h3>
                        <span className="text-[11px] text-[#6B6B6B] font-normal block mt-0.5">
                          {company.depository_applicable}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F9F9F8] border border-[#E5E5E0] space-y-2.5 text-xs">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-[#6B6B6B] block font-medium">Share Price</span>
                          <span className="font-bold text-[#171717] text-sm sm:text-base">₹{company.price} / share</span>
                        </div>
                        <span className="text-[#171717] font-semibold text-[11px] px-2.5 py-1 bg-white rounded-lg border border-[#E5E5E0]">{company.status || "ACTIVE"}</span>
                      </div>

                      <div className="pt-2 border-t border-[#E5E5E0] flex justify-between items-center text-[11px]">
                        <span className="text-[#6B6B6B]">Min Lot Size: <strong className="text-[#171717] font-bold">{company.min_lot_size} Shares</strong></span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/enquiry?product=${company.id}&name=${encodeURIComponent(company.shares_name)}`}
                    className="w-full py-3 rounded-xl text-xs font-bold text-[#171717] bg-[#F4C430] hover:bg-[#FFD21F] transition-all cursor-pointer shadow-xs text-center block"
                  >
                    Get Quote & Enquire Now
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white border border-[#E5E5E0] rounded-2xl p-8 space-y-3">
              <Building className="w-8 h-8 text-[#6B6B6B] mx-auto" />
              <h3 className="text-base font-bold text-[#171717]">No unlisted shares match your search</h3>
              <p className="text-xs text-[#6B6B6B]">Try adjusting your search query or reset filters to browse all shares.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveFilter("all"); }}
                className="px-4 py-2 bg-[#F4C430] text-[#171717] font-bold text-xs rounded-xl hover:bg-[#FFD21F] transition-all cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* Load More Button */}
          {filteredShares.length > displayCount && (
            <div className="text-center pt-6">
              <button
                onClick={() => setDisplayCount((prev) => prev + 15)}
                className="px-8 py-3.5 bg-white border border-[#E5E5E0] text-[#171717] font-bold text-xs rounded-xl hover:bg-[#FFF8D6] hover:border-[#F4C430] shadow-xs transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>View More Unlisted Shares ({filteredShares.length - displayCount} Remaining)</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}

        </section>

        {/* 3. BENEFITS OF UNLISTED SHARES SECTION */}
        <section className="py-16 sm:py-20 bg-[#FFFDF5] border-y border-[#E5E5E0] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-10">
            
            <div className="text-center space-y-2.5 max-w-2xl mx-auto">
              <span className="text-[#171717] bg-[#FFF8D6] px-3.5 py-1 rounded-full border border-[#F4C430]/60 font-bold tracking-widest uppercase text-[10px] sm:text-xs inline-block shadow-xs">
                INVESTOR VALUE
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#171717] tracking-tight">
                Benefits of Unlisted Shares
              </h2>
              <p className="text-[#6B6B6B] font-normal text-xs sm:text-base leading-relaxed">
                Unlock wealth creation opportunities usually reserved for institutional investors and venture capitalists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div 
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-[#E5E5E0] shadow-xs hover:shadow-lg hover:border-[#F4C430] transition-all space-y-3 group"
                >
                  <div className="w-10 h-10 bg-[#FFF8D6] border border-[#F4C430]/50 rounded-xl flex items-center justify-center text-[#171717] group-hover:bg-[#F4C430] transition-all">
                    {b.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#171717] tracking-tight">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] font-normal leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. HOW IT WORKS SECTION */}
        <section className="py-16 sm:py-20 bg-[#F5F5F3] border-b border-[#E5E5E0] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-10">
            
            <div className="text-center space-y-2.5 max-w-2xl mx-auto">
              <span className="text-[#171717] bg-[#FFF8D6] px-3.5 py-1 rounded-full border border-[#F4C430]/60 font-bold tracking-widest uppercase text-[10px] sm:text-xs inline-block shadow-xs">
                HOW IT WORKS
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#171717] tracking-tight">
                Simple Steps to Start Investing
              </h2>
              <p className="text-[#6B6B6B] font-normal text-xs sm:text-base">
                Get started with unlisted shares in just a few simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {steps.map((s) => (
                <div 
                  key={s.step}
                  className="bg-white border border-[#E5E5E0] rounded-2xl p-5 text-center space-y-3 shadow-xs hover:shadow-md hover:border-[#F4C430]/60 transition-all flex flex-col items-center justify-between"
                >
                  <div className="space-y-2.5 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF8D6] border border-[#F4C430] text-[#171717] font-bold text-xs flex items-center justify-center">
                      {s.step}
                    </div>
                    <h3 className="text-sm font-bold text-[#171717]">
                      {s.title}
                    </h3>
                    <p className="text-xs text-[#6B6B6B] font-normal leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer Box */}
            <div className="max-w-3xl mx-auto bg-[#FFF8D6]/80 border border-[#F4C430]/60 rounded-xl p-4 text-center shadow-xs flex items-center gap-2.5 justify-center">
              <ShieldAlert className="w-4 h-4 text-[#171717] shrink-0 hidden sm:inline-block" />
              <p className="text-xs text-[#292929] leading-relaxed font-normal">
                <strong className="text-[#171717] font-bold">Disclaimer:</strong> Unlisted shares are subject to market risks. Prices and availability are subject to change based on market transactions. Please consult with a financial advisor before investing.
              </p>
            </div>

          </div>
        </section>

        {/* 5. KNOWLEDGE BASE & FAQS */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[#171717] bg-[#FFF8D6] px-3.5 py-1 rounded-full border border-[#F4C430]/60 font-bold tracking-widest uppercase text-[10px] inline-block shadow-xs">
              KNOWLEDGE BASE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#171717]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6B6B] font-normal">
              Everything you need to know about investing in unlisted shares, legalities, and taxation.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E5E5E0] rounded-xl overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-3.5 flex items-center justify-between text-left text-xs sm:text-sm font-bold text-[#171717] hover:text-[#171717] transition-colors cursor-pointer"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#6B6B6B] shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#F4C430]" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-[#6B6B6B] font-normal leading-relaxed border-t border-[#E5E5E0] pt-3 bg-[#FFFDF5]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Callout Banner */}
          <div className="bg-gradient-to-r from-[#FFF8D6] via-white to-[#FFF8D6] border border-[#F4C430]/60 rounded-2xl p-6 sm:p-8 text-center space-y-3.5 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-[#171717]">Ready to Invest in Unlisted Shares?</h3>
            <p className="text-xs sm:text-sm text-[#6B6B6B] font-normal max-w-lg mx-auto">
              Get personalized policy guidance, latest share prices, and Demat delivery details instantly.
            </p>
            <Link
              href="/enquiry?product=unlisted-shares"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#171717] bg-[#F4C430] hover:bg-[#FFD21F] shadow-xs transition-all cursor-pointer"
            >
              <span>Submit Unlisted Share Enquiry</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
