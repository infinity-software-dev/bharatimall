"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ALL_PRODUCTS_DATA, 
  OTHER_PRODUCTS_DATA, 
  INSURANCE_TABS, 
  InsuranceProduct 
} from "@/lib/productsData";
import { 
  Star, 
  Search, 
  CheckCircle, 
  Shield, 
  HeartHandshake, 
  Activity, 
  Car, 
  Plane, 
  Flame, 
  Ship, 
  Building2, 
  ShieldAlert, 
  Dog, 
  Sparkles, 
  ArrowRight, 
  X, 
  Calculator, 
  PhoneCall, 
  CheckCheck
} from "lucide-react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const urlCategory = searchParams.get("category");
  const urlTab = searchParams.get("tab");

  const [selectedCategory, setSelectedCategory] = useState<string>("Insurance");
  const [selectedInsuranceTab, setSelectedInsuranceTab] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<InsuranceProduct | null>(null);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteFormData, setQuoteFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    coverageNeeded: "Standard (₹1 Crore / Max Benefit)"
  });

  // Sync state from query params on load or change
  useEffect(() => {
    if (urlCategory) {
      // Find matching category
      const foundCategory = ["Insurance", "Loans", "Mutual Fund", "Investments", "Real Estate", "Unlisted", "Courses & E-Books", "All"].find(
        (c) => c.toLowerCase() === urlCategory.toLowerCase()
      );
      if (foundCategory) {
        setSelectedCategory(foundCategory);
      }
    }

    if (urlTab) {
      const foundTab = INSURANCE_TABS.find((t) => t.slug.toLowerCase() === urlTab.toLowerCase() || t.id.toLowerCase() === urlTab.toLowerCase());
      if (foundTab) {
        setSelectedInsuranceTab(foundTab.id);
        setSelectedCategory("Insurance");
      }
    }
  }, [urlCategory, urlTab]);

  const categories = [
    { id: "Insurance", label: "Insurance", icon: Shield, badge: "10 Tabs" },
    { id: "Loans", label: "Loans", icon: Sparkles },
    { id: "Mutual Fund", label: "Mutual Fund", icon: Sparkles },
    { id: "Investments", label: "Investments", icon: Sparkles },
    { id: "Real Estate", label: "Real Estate", icon: Sparkles },
    { id: "Unlisted", label: "Unlisted", icon: Sparkles },
    { id: "Courses & E-Books", label: "Courses & Books", icon: Sparkles },
    { id: "All", label: "All Catalog", icon: Sparkles },
  ];

  // Combined product catalog
  const allProducts = useMemo(() => {
    return [...ALL_PRODUCTS_DATA, ...OTHER_PRODUCTS_DATA];
  }, []);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // Category filter
      if (selectedCategory !== "All" && product.category !== selectedCategory) {
        return false;
      }

      // If category is Insurance and a specific tab is selected
      if (selectedCategory === "Insurance" && selectedInsuranceTab !== "all") {
        if (product.subCategory !== selectedInsuranceTab) {
          return false;
        }
      }

      // Search filter
      if (searchTerm.trim() !== "") {
        const term = searchTerm.toLowerCase();
        const matchesTitle = product.title.toLowerCase().includes(term);
        const matchesDesc = product.description.toLowerCase().includes(term);
        const matchesTagline = product.tagline.toLowerCase().includes(term);
        const matchesFeatures = product.features.some(f => f.toLowerCase().includes(term));
        if (!matchesTitle && !matchesDesc && !matchesTagline && !matchesFeatures) {
          return false;
        }
      }

      return true;
    });
  }, [allProducts, selectedCategory, selectedInsuranceTab, searchTerm]);

  const getTabIcon = (tabId: string) => {
    switch (tabId) {
      case "life-insurance": return <HeartHandshake className="w-4 h-4" />;
      case "health-insurance": return <Activity className="w-4 h-4" />;
      case "motor-insurance": return <Car className="w-4 h-4" />;
      case "travel-insurance": return <Plane className="w-4 h-4" />;
      case "fire-insurance": return <Flame className="w-4 h-4" />;
      case "cattle-insurance": return <Shield className="w-4 h-4" />;
      case "marine-insurance": return <Ship className="w-4 h-4" />;
      case "corporate-insurance": return <Building2 className="w-4 h-4" />;
      case "loan-protector": return <ShieldAlert className="w-4 h-4" />;
      case "pet-insurance": return <Dog className="w-4 h-4" />;
      default: return <Shield className="w-4 h-4" />;
    }
  };

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === "Insurance" && selectedInsuranceTab === "all") {
      router.push(`/products?category=Insurance`);
    } else if (catId !== "Insurance") {
      router.push(`/products?category=${encodeURIComponent(catId)}`);
    }
  };

  const handleInsuranceTabClick = (tabId: string) => {
    setSelectedInsuranceTab(tabId);
    if (tabId === "all") {
      router.push(`/products?category=Insurance`);
    } else {
      router.push(`/products?category=Insurance&tab=${encodeURIComponent(tabId)}`);
    }
  };

  const currentTabObj = INSURANCE_TABS.find(t => t.id === selectedInsuranceTab);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSuccess(true);
    setTimeout(() => {
      setQuoteSuccess(false);
      setSelectedProductForQuote(null);
    }, 2800);
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 selection:bg-[#2076C7] selection:text-white">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        
        {/* Hero & Title Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-zinc-900">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2076C7]/10 border border-[#2076C7]/25 text-[#2076C7] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Bharati Mall Financial & Insurance Hub
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Products & Insurance Portfolio
            </h1>
            <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
              Explore comprehensive insurance plans, customized loan financing, top mutual fund SIPs, and pre-IPO investments all under one trusted roof.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search policies, plans, benefits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900/90 border border-zinc-800 rounded-2xl py-3 pl-11 pr-4 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#2076C7] focus:ring-1 focus:ring-[#2076C7] transition-all"
            />
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-3.5" />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-3 text-zinc-500 hover:text-zinc-300"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Primary Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#2076C7] to-[#1CADA3] text-white shadow-lg shadow-[#2076C7]/20 scale-100"
                    : "bg-zinc-900/70 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 hover:bg-zinc-900"
                }`}
              >
                <span>{cat.label}</span>
                {cat.badge && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                    isActive ? "bg-white/20 text-white" : "bg-[#2076C7]/20 text-[#2076C7]"
                  }`}>
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Subcategory Insurance Tabs Bar (When Insurance is selected) */}
        {selectedCategory === "Insurance" && (
          <div className="bg-zinc-900/40 border border-zinc-850 rounded-2xl p-4 sm:p-5 mb-10 shadow-xl">
            <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-zinc-800/80">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#2076C7]" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Insurance Categories & Sub-Tabs
                </span>
              </div>
              <span className="text-[11px] text-zinc-500 font-medium">
                10 Specialized Insurance Verticals
              </span>
            </div>

            {/* The 10 Insurance Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {INSURANCE_TABS.map((tab) => {
                const isTabActive = selectedInsuranceTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleInsuranceTabClick(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isTabActive
                        ? "bg-[#2076C7] text-white shadow-md shadow-[#2076C7]/30 ring-1 ring-white/20"
                        : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-850"
                    }`}
                  >
                    {getTabIcon(tab.id)}
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Highlight Description Banner */}
            {currentTabObj && currentTabObj.description && (
              <div className="mt-3.5 pt-3 border-t border-zinc-850 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1CADA3] animate-pulse" />
                  <span className="text-zinc-300 font-medium">{currentTabObj.name}:</span>
                  <span>{currentTabObj.description}</span>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-zinc-500">
                  <span>✓ 100% Paperless</span>
                  <span>✓ IRDAI Registered Partners</span>
                  <span>✓ Instant E-Policy</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Catalog Count & Filter Summary */}
        <div className="flex items-center justify-between mb-6 text-xs text-zinc-400">
          <div>
            Showing <span className="font-bold text-white">{filteredProducts.length}</span> plan{filteredProducts.length === 1 ? "" : "s"} in{" "}
            <span className="text-[#2076C7] font-semibold">
              {selectedCategory === "Insurance" && selectedInsuranceTab !== "all"
                ? INSURANCE_TABS.find(t => t.id === selectedInsuranceTab)?.name
                : selectedCategory}
            </span>
          </div>
          {searchTerm && (
            <div className="text-amber-400">
              Matching keyword &ldquo;{searchTerm}&rdquo;
            </div>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              return (
                <div 
                  key={product.id} 
                  className="glass-card rounded-2xl overflow-hidden p-6 flex flex-col justify-between group hover:border-[#2076C7]/50 transition-all duration-300 relative"
                >
                  {/* Top Accent Gradient Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2076C7] to-[#1CADA3] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Header Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-inner">
                        {product.icon}
                      </div>
                      
                      {product.badge ? (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25">
                          {product.badge}
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-full border border-zinc-800">
                          {product.category}
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#2076C7] transition-colors leading-snug">
                      {product.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#1CADA3] uppercase tracking-wider mb-3">
                      {product.tagline}
                    </p>

                    {/* Ratings & CSR Metric */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-900">
                      <div className="flex items-center gap-1.5">
                        <div className="flex text-amber-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3.5 h-3.5 ${
                                i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-zinc-700"
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-zinc-200">{product.rating}</span>
                        <span className="text-[11px] text-zinc-500">({product.reviewsCount})</span>
                      </div>

                      {product.csrOrMetric && (
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          {product.csrOrMetric}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-zinc-400 leading-relaxed mb-5 line-clamp-3">
                      {product.description}
                    </p>

                    {/* Features Checklist */}
                    <div className="space-y-2 mb-6">
                      {product.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle className="w-3.5 h-3.5 text-[#1CADA3] shrink-0 mt-0.5" />
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Footer Section */}
                  <div className="pt-4 border-t border-zinc-900/80 flex items-center justify-between gap-3 mt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">
                        {product.coverAmount ? `Cover: ${product.coverAmount}` : "Starting from"}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-black text-white">
                          {product.startingPrice}
                        </span>
                        <span className="text-[10px] text-zinc-400">
                          /{product.period}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProductForQuote(product)}
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2076C7] to-[#1CADA3] hover:shadow-lg hover:shadow-[#2076C7]/20 active:scale-95 transition-all cursor-pointer"
                    >
                      <Calculator className="w-3.5 h-3.5" />
                      Get Quote
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-900/20 border border-zinc-900 rounded-3xl p-8">
            <Shield className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white">No matching products found</h4>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto mt-2">
              No policies found matching your filter or search query. Try clearing the search term or switching tabs.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedInsuranceTab("all");
                setSelectedCategory("Insurance");
              }}
              className="mt-5 px-5 py-2 rounded-xl text-xs font-bold bg-[#2076C7] text-white hover:bg-[#2076C7]/80 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Informative Value Prop Banner */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 bg-zinc-900/40 border border-zinc-850 rounded-3xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#2076C7]/15 border border-[#2076C7]/30 flex items-center justify-center text-[#2076C7] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">IRDAI Certified Advisors</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Expert advisors from Bharti Share Market assist you in tailoring the right insurance and investment plans with zero commission bias.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#1CADA3]/15 border border-[#1CADA3]/30 flex items-center justify-center text-[#1CADA3] shrink-0">
              <CheckCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">99%+ Claim Assistance</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Dedicated 24x7 claim settlement desk ensuring swift hospitalization approvals and emergency motor roadside assistance.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Instant Instant E-Policy</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Complete paperwork digitally in under 2 minutes. Download certified e-policy documents straight to your phone and email.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Quote & Inquiry Modal */}
      {selectedProductForQuote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setSelectedProductForQuote(null)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
          />

          <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl z-10 animate-scale-in">
            {/* Modal Header */}
            <div className="px-6 py-5 bg-zinc-850 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{selectedProductForQuote.icon}</div>
                <div>
                  <span className="text-[10px] font-bold text-[#2076C7] uppercase tracking-wider">
                    Instant Quote Request
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {selectedProductForQuote.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedProductForQuote(null)}
                className="p-1.5 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {quoteSuccess ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCheck className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Quote Request Received!</h4>
                  <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                    Our certified insurance & financial specialist will contact you on <span className="text-white font-semibold">{quoteFormData.phone || "your number"}</span> with personalized quotes and maximum discount benefits.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-zinc-500 block text-[10px]">Starting Premium</span>
                      <span className="font-extrabold text-white text-sm">{selectedProductForQuote.startingPrice}</span>
                      <span className="text-zinc-400 text-[10px]"> /{selectedProductForQuote.period}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-zinc-500 block text-[10px]">Coverage Limit</span>
                      <span className="font-bold text-[#1CADA3]">{selectedProductForQuote.coverAmount || "High Protection"}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={quoteFormData.name}
                      onChange={(e) => setQuoteFormData({ ...quoteFormData, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#2076C7]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={quoteFormData.phone}
                        onChange={(e) => setQuoteFormData({ ...quoteFormData, phone: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#2076C7]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="rahul@example.com"
                        value={quoteFormData.email}
                        onChange={(e) => setQuoteFormData({ ...quoteFormData, email: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#2076C7]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Select Desired Coverage Level
                    </label>
                    <select
                      value={quoteFormData.coverageNeeded}
                      onChange={(e) => setQuoteFormData({ ...quoteFormData, coverageNeeded: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-100 focus:outline-none focus:border-[#2076C7]"
                    >
                      <option>Standard (₹1 Crore / Max Benefit)</option>
                      <option>Enhanced Shield (₹2 Crore + Riders)</option>
                      <option>Starter Basic Cover (₹25 Lakh to ₹50 Lakh)</option>
                      <option>Custom Enterprise / High Net Worth</option>
                    </select>
                  </div>

                  <p className="text-[10px] text-zinc-500 leading-tight">
                    🔒 By clicking submit, you authorize certified Bharati Mall / Bharti Share Market advisors to share official quote calculations and discount brochures via WhatsApp or Call.
                  </p>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#2076C7] to-[#1CADA3] hover:shadow-lg hover:shadow-[#2076C7]/25 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Calculate Instant Quote & Apply</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">Loading Bharati Mall Catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
