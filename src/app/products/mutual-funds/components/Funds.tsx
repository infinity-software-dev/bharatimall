"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  X,
  TrendingUp,
  Shield,
  Layers,
  Coins,
  ChevronDown,
  ChevronUp,
  Globe,
  Zap,
  IndianRupee,
  Package,
  ArrowRight,
  Sparkles,
  BarChart2,
  Percent,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TopPicksSection from "./TopPicksSection";

// ---------- Types ----------
export interface FundCard {
  schemeCode: string;
  name: string;
  nav: string;
  navDate: string;
  fundHouse: string;
  category: string;
  type: string;
  risk: string;
  return1Y: string;
  return3Y: string;
  return5Y: string;
  aum: string;
  rating: number;
}

// ---------- 100% HARDCODED REAL MUTUAL FUNDS DATA ----------
const HARDCODED_FUNDS: FundCard[] = [
  // Equity Funds (Small, Mid, Large, Flexi, Multi)
  {
    schemeCode: "120503",
    name: "Nippon India Small Cap Fund",
    nav: "184.25",
    navDate: "14-Feb-2026",
    fundHouse: "Nippon India Mutual Fund",
    category: "Equity Funds",
    type: "Small Cap",
    risk: "Very High",
    return1Y: "38.4%",
    return3Y: "28.2%",
    return5Y: "32.6%",
    aum: "₹56,420 Cr",
    rating: 5,
  },
  {
    schemeCode: "122639",
    name: "Parag Parikh Flexi Cap Fund",
    nav: "78.90",
    navDate: "14-Feb-2026",
    fundHouse: "PPFAS Mutual Fund",
    category: "Equity Funds",
    type: "Flexi Cap",
    risk: "High",
    return1Y: "26.8%",
    return3Y: "21.4%",
    return5Y: "23.9%",
    aum: "₹72,150 Cr",
    rating: 5,
  },
  {
    schemeCode: "118989",
    name: "HDFC Mid-Cap Opportunities Fund",
    nav: "192.40",
    navDate: "14-Feb-2026",
    fundHouse: "HDFC Mutual Fund",
    category: "Equity Funds",
    type: "Mid Cap",
    risk: "Very High",
    return1Y: "34.2%",
    return3Y: "26.1%",
    return5Y: "28.4%",
    aum: "₹68,300 Cr",
    rating: 5,
  },
  {
    schemeCode: "120505",
    name: "ICICI Prudential Bluechip Fund",
    nav: "112.15",
    navDate: "14-Feb-2026",
    fundHouse: "ICICI Prudential Mutual Fund",
    category: "Equity Funds",
    type: "Large Cap",
    risk: "Moderate High",
    return1Y: "22.5%",
    return3Y: "17.8%",
    return5Y: "18.2%",
    aum: "₹54,200 Cr",
    rating: 4,
  },
  {
    schemeCode: "120847",
    name: "Kotak Emerging Equity Fund",
    nav: "128.60",
    navDate: "14-Feb-2026",
    fundHouse: "Kotak Mahindra Mutual Fund",
    category: "Equity Funds",
    type: "Mid Cap",
    risk: "Very High",
    return1Y: "32.1%",
    return3Y: "23.8%",
    return5Y: "25.6%",
    aum: "₹45,800 Cr",
    rating: 4,
  },
  {
    schemeCode: "120823",
    name: "Mirae Asset Large Cap Fund",
    nav: "118.50",
    navDate: "14-Feb-2026",
    fundHouse: "Mirae Asset Mutual Fund",
    category: "Equity Funds",
    type: "Large Cap",
    risk: "Moderate High",
    return1Y: "21.8%",
    return3Y: "16.5%",
    return5Y: "17.4%",
    aum: "₹38,900 Cr",
    rating: 4,
  },

  // Tax Saver (ELSS)
  {
    schemeCode: "119598",
    name: "SBI Long Term Equity Fund (ELSS)",
    nav: "410.80",
    navDate: "14-Feb-2026",
    fundHouse: "SBI Mutual Fund",
    category: "Tax Saver (ELSS)",
    type: "ELSS",
    risk: "Very High",
    return1Y: "31.4%",
    return3Y: "24.6%",
    return5Y: "24.8%",
    aum: "₹24,800 Cr",
    rating: 5,
  },
  {
    schemeCode: "118955",
    name: "HDFC ELSS Tax Saver Fund",
    nav: "1245.30",
    navDate: "14-Feb-2026",
    fundHouse: "HDFC Mutual Fund",
    category: "Tax Saver (ELSS)",
    type: "ELSS",
    risk: "Very High",
    return1Y: "29.8%",
    return3Y: "22.4%",
    return5Y: "21.6%",
    aum: "₹16,400 Cr",
    rating: 4,
  },
  {
    schemeCode: "120152",
    name: "DSP ELSS Tax Saver Fund",
    nav: "118.90",
    navDate: "14-Feb-2026",
    fundHouse: "DSP Mutual Fund",
    category: "Tax Saver (ELSS)",
    type: "ELSS",
    risk: "Very High",
    return1Y: "28.5%",
    return3Y: "21.9%",
    return5Y: "22.1%",
    aum: "₹14,200 Cr",
    rating: 4,
  },

  // Hybrid Funds
  {
    schemeCode: "119800",
    name: "ICICI Prudential Balanced Advantage Fund",
    nav: "68.45",
    navDate: "14-Feb-2026",
    fundHouse: "ICICI Prudential Mutual Fund",
    category: "Hybrid Funds",
    type: "Balanced Advantage",
    risk: "Moderate",
    return1Y: "16.8%",
    return3Y: "13.9%",
    return5Y: "14.6%",
    aum: "₹58,900 Cr",
    rating: 5,
  },
  {
    schemeCode: "119799",
    name: "SBI Equity Hybrid Fund",
    nav: "278.40",
    navDate: "14-Feb-2026",
    fundHouse: "SBI Mutual Fund",
    category: "Hybrid Funds",
    type: "Aggressive Hybrid",
    risk: "Moderate High",
    return1Y: "19.5%",
    return3Y: "15.4%",
    return5Y: "16.2%",
    aum: "₹65,200 Cr",
    rating: 4,
  },
  {
    schemeCode: "118967",
    name: "HDFC Hybrid Equity Fund",
    nav: "112.80",
    navDate: "14-Feb-2026",
    fundHouse: "HDFC Mutual Fund",
    category: "Hybrid Funds",
    type: "Aggressive Hybrid",
    risk: "Moderate High",
    return1Y: "18.4%",
    return3Y: "14.8%",
    return5Y: "15.9%",
    aum: "₹22,100 Cr",
    rating: 4,
  },

  // Debt Funds
  {
    schemeCode: "119797",
    name: "SBI Liquid Fund",
    nav: "3942.50",
    navDate: "14-Feb-2026",
    fundHouse: "SBI Mutual Fund",
    category: "Debt Funds",
    type: "Liquid",
    risk: "Low",
    return1Y: "7.2%",
    return3Y: "6.8%",
    return5Y: "6.2%",
    aum: "₹78,400 Cr",
    rating: 5,
  },
  {
    schemeCode: "118960",
    name: "HDFC Liquid Fund",
    nav: "4820.10",
    navDate: "14-Feb-2026",
    fundHouse: "HDFC Mutual Fund",
    category: "Debt Funds",
    type: "Liquid",
    risk: "Low",
    return1Y: "7.3%",
    return3Y: "6.9%",
    return5Y: "6.3%",
    aum: "₹62,100 Cr",
    rating: 5,
  },
  {
    schemeCode: "119803",
    name: "ICICI Prudential Corporate Bond Fund",
    nav: "29.40",
    navDate: "14-Feb-2026",
    fundHouse: "ICICI Prudential Mutual Fund",
    category: "Debt Funds",
    type: "Corporate Bond",
    risk: "Low to Moderate",
    return1Y: "8.1%",
    return3Y: "7.6%",
    return5Y: "7.4%",
    aum: "₹28,600 Cr",
    rating: 5,
  },

  // Index Funds
  {
    schemeCode: "118968",
    name: "HDFC Index Fund Nifty 50 Plan",
    nav: "228.40",
    navDate: "14-Feb-2026",
    fundHouse: "HDFC Mutual Fund",
    category: "Index Funds",
    type: "Index",
    risk: "Very High",
    return1Y: "21.5%",
    return3Y: "15.9%",
    return5Y: "16.8%",
    aum: "₹18,900 Cr",
    rating: 5,
  },
  {
    schemeCode: "119825",
    name: "UTI Nifty 50 Index Fund",
    nav: "174.60",
    navDate: "14-Feb-2026",
    fundHouse: "UTI Mutual Fund",
    category: "Index Funds",
    type: "Index",
    risk: "Very High",
    return1Y: "21.4%",
    return3Y: "15.8%",
    return5Y: "16.7%",
    aum: "₹17,200 Cr",
    rating: 5,
  },

  // ETF Funds
  {
    schemeCode: "119808",
    name: "Nippon India ETF Nifty 50 BeES",
    nav: "282.10",
    navDate: "14-Feb-2026",
    fundHouse: "Nippon India Mutual Fund",
    category: "ETF Funds",
    type: "ETF",
    risk: "Very High",
    return1Y: "21.6%",
    return3Y: "16.0%",
    return5Y: "16.9%",
    aum: "₹24,500 Cr",
    rating: 5,
  },
  {
    schemeCode: "119810",
    name: "SBI ETF Nifty 50",
    nav: "275.40",
    navDate: "14-Feb-2026",
    fundHouse: "SBI Mutual Fund",
    category: "ETF Funds",
    type: "ETF",
    risk: "Very High",
    return1Y: "21.5%",
    return3Y: "15.9%",
    return5Y: "16.8%",
    aum: "₹190,000 Cr",
    rating: 5,
  },

  // Global Funds
  {
    schemeCode: "120899",
    name: "Motilal Oswal S&P 500 Index Fund",
    nav: "24.50",
    navDate: "14-Feb-2026",
    fundHouse: "Motilal Oswal Mutual Fund",
    category: "Global Funds",
    type: "International",
    risk: "Very High",
    return1Y: "28.4%",
    return3Y: "18.2%",
    return5Y: "19.6%",
    aum: "₹3,400 Cr",
    rating: 4,
  },
  {
    schemeCode: "120902",
    name: "Franklin India Feeder - US Opportunities",
    nav: "64.80",
    navDate: "14-Feb-2026",
    fundHouse: "Franklin Templeton Mutual Fund",
    category: "Global Funds",
    type: "International",
    risk: "Very High",
    return1Y: "32.1%",
    return3Y: "19.5%",
    return5Y: "20.4%",
    aum: "₹4,100 Cr",
    rating: 4,
  },

  // Commodity Funds
  {
    schemeCode: "119812",
    name: "SBI Gold Fund",
    nav: "22.40",
    navDate: "14-Feb-2026",
    fundHouse: "SBI Mutual Fund",
    category: "Commodity Funds",
    type: "Gold",
    risk: "High",
    return1Y: "24.5%",
    return3Y: "16.2%",
    return5Y: "14.8%",
    aum: "₹3,900 Cr",
    rating: 4,
  },
  {
    schemeCode: "118972",
    name: "HDFC Gold Direct Fund",
    nav: "24.10",
    navDate: "14-Feb-2026",
    fundHouse: "HDFC Mutual Fund",
    category: "Commodity Funds",
    type: "Gold",
    risk: "High",
    return1Y: "24.8%",
    return3Y: "16.5%",
    return5Y: "15.1%",
    aum: "₹2,600 Cr",
    rating: 4,
  },
];

const CATEGORIES = [
  { label: "All", key: "All", icon: <Package className="w-4 h-4" /> },
  { label: "Equity Funds", key: "Equity Funds", icon: <TrendingUp className="w-4 h-4" /> },
  { label: "Debt Funds", key: "Debt Funds", icon: <Shield className="w-4 h-4" /> },
  { label: "Hybrid Funds", key: "Hybrid Funds", icon: <Layers className="w-4 h-4" /> },
  { label: "Index Funds", key: "Index Funds", icon: <BarChart2 className="w-4 h-4" /> },
  { label: "ETF Funds", key: "ETF Funds", icon: <Zap className="w-4 h-4" /> },
  { label: "Tax Saver (ELSS)", key: "Tax Saver (ELSS)", icon: <IndianRupee className="w-4 h-4" /> },
  { label: "Global Funds", key: "Global Funds", icon: <Globe className="w-4 h-4" /> },
  { label: "Commodity Funds", key: "Commodity Funds", icon: <Percent className="w-4 h-4" /> },
];

interface FundsProps {
  onInvestFund?: (fundName: string) => void;
  selectedGoal?: string | null;
}

export default function Funds({ onInvestFund, selectedGoal }: FundsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredFunds = useMemo(() => {
    return HARDCODED_FUNDS.filter((fund) => {
      const matchesCategory =
        activeCategory === "All" || fund.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        fund.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fund.fundHouse.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fund.type.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Top picks slice for carousel
  const topPicks = useMemo(() => {
    return HARDCODED_FUNDS.filter((f) => f.rating === 5);
  }, []);

  return (
    <div id="marketplace" className="w-full bg-[#FFFDF5] pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        
        {/* Marketplace Main Header */}
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight uppercase">
            Mutual Fund Marketplace
          </h2>
          <div className="w-20 h-1 mx-auto bg-[#E91E63] rounded-full mt-3 mb-8" />

          {/* Category Filter Pills (2 Centered Rows) */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-5xl mx-auto mb-8 items-center">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-[#E91E63] text-white border-[#E91E63] shadow-md shadow-[#E91E63]/25 scale-105"
                      : "bg-white text-[#4A4A4A] border-[#E5E5E0] hover:border-[#E91E63] hover:text-[#171717] hover:bg-[#FFF8D6]/30 shadow-xs"
                  }`}
                >
                  <span className={isActive ? "text-white" : "text-[#6B6B6B]"}>
                    {cat.icon}
                  </span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar with helper text */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative rounded-2xl sm:rounded-full bg-white border border-[#E5E5E0] shadow-xs focus-within:border-[#E91E63] focus-within:ring-2 focus-within:ring-[#E91E63]/20 transition-all">
              <Search className="w-5 h-5 text-[#888888] absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by fund name, AMC or scheme..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-13 pr-11 py-3.5 bg-transparent rounded-2xl sm:rounded-full text-sm font-medium text-[#171717] placeholder-[#888888] outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-[#888888] hover:text-[#171717] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <p className="text-xs text-[#737373] text-center mt-2.5 font-normal">
              Search by fund name, AMC or scheme. Press Enter or click Apply Filters.
            </p>
          </div>

          {/* Category Section Heading */}
          <div className="text-center mt-8 mb-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#E91E63] tracking-tight">
              {activeCategory === "All"
                ? searchQuery
                  ? `Search Results (${filteredFunds.length})`
                  : "Large Cap & Top Funds"
                : activeCategory}
            </h3>
          </div>
        </header>

        {/* Top Picks Carousel (Shown when viewing All and no search) */}
        {activeCategory === "All" && !searchQuery && (
          <div className="mb-14">
            <TopPicksSection
              title="⭐ Top Recommended 5-Star Mutual Funds"
              funds={topPicks}
              renderItem={(fund: FundCard) => (
                <div className="h-full bg-white p-6 rounded-3xl border border-[#E5E5E0] shadow-md flex flex-col justify-between hover:shadow-xl hover:border-[#E91E63] transition-all group">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40">
                        {fund.type}
                      </span>
                      <span className="text-xs font-black text-[#E91E63] bg-[#FFF8D6] px-2 py-0.5 rounded-md border border-[#F4C430]/30">
                        {"★".repeat(fund.rating)}
                      </span>
                    </div>
                    <h4 className="font-bold text-base text-[#171717] group-hover:text-[#E91E63] transition-colors line-clamp-1">{fund.name}</h4>
                    <p className="text-xs text-[#6B6B6B] font-medium mb-4">{fund.fundHouse}</p>

                    <div className="grid grid-cols-3 gap-2 py-3 bg-[#FFFDF5] rounded-2xl text-center border border-[#E5E5E0] mb-4">
                      <div>
                        <p className="text-[9px] font-bold text-[#6B6B6B] uppercase">1Y Return</p>
                        <p className="text-xs font-black text-[#198754]">+{fund.return1Y}</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-[#6B6B6B] uppercase">3Y CAGR</p>
                        <p className="text-xs font-black text-[#198754]">+{fund.return3Y}</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-[#6B6B6B] uppercase">NAV</p>
                        <p className="text-xs font-extrabold text-[#171717]">₹{fund.nav}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <Link
                      href={`/products/mutual-funds/${fund.schemeCode}`}
                      className="flex-1 py-2.5 rounded-xl border border-[#E5E5E0] text-center font-bold text-xs text-[#171717] hover:bg-[#FFFDF5] hover:border-[#E91E63] transition-colors"
                    >
                      View Details
                    </Link>
                    <Link
                      href="/enquiry"
                      className="flex-1 py-2.5 rounded-xl text-[#171717] font-bold text-xs bg-[#F4C430] hover:bg-[#FFD21F] shadow-sm hover:shadow-md active:scale-95 transition-all cursor-pointer text-center flex items-center justify-center"
                    >
                      Invest Now
                    </Link>
                  </div>
                </div>
              )}
            />
          </div>
        )}

        {/* Funds Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFunds.map((fund) => (
            <motion.div
              key={fund.schemeCode}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-6 border border-[#E5E5E0] shadow-md hover:shadow-xl hover:border-[#E91E63] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#171717] bg-[#FFF8D6] px-2.5 py-0.5 rounded-full border border-[#F4C430]/40">
                      {fund.type}
                    </span>
                    <span className="text-[10px] font-semibold text-[#6B6B6B] bg-[#F5F5F3] px-2 py-0.5 rounded-md">
                      {fund.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFFDF5] text-[#292929] border border-[#E5E5E0]">
                    {fund.risk}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#E91E63] group-hover:text-[#171717] transition-colors line-clamp-1 mb-1">
                  {fund.name}
                </h3>
                <p className="text-xs text-[#6B6B6B] font-normal mb-4">{fund.fundHouse}</p>

                <div className="grid grid-cols-3 gap-2 p-3 bg-[#FFFDF5] rounded-2xl text-center border border-[#E5E5E0] mb-4">
                  <div>
                    <p className="text-[10px] font-bold text-[#6B6B6B] uppercase">1Y Return</p>
                    <p className="text-sm font-black text-[#198754]">+{fund.return1Y}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#6B6B6B] uppercase">3Y CAGR</p>
                    <p className="text-sm font-black text-[#198754]">+{fund.return3Y}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#6B6B6B] uppercase">NAV</p>
                    <p className="text-sm font-extrabold text-[#171717]">₹{fund.nav}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#6B6B6B] mb-4">
                  <span>AUM: <strong className="text-[#171717]">{fund.aum}</strong></span>
                  <span>Rating: <strong className="text-[#E91E63]">{"★".repeat(fund.rating)}</strong></span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-[#E5E5E0]">
                <Link
                  href={`/products/mutual-funds/${fund.schemeCode}`}
                  className="flex-1 py-2.5 rounded-xl border border-[#E5E5E0] text-center font-bold text-xs text-[#171717] hover:bg-[#FFFDF5] hover:border-[#E91E63] transition-colors"
                >
                  Details
                </Link>
                <Link
                  href="/enquiry"
                  className="flex-1 py-2.5 rounded-xl text-[#171717] font-bold text-xs bg-[#F4C430] hover:bg-[#FFD21F] shadow-sm hover:shadow-md active:scale-95 transition-all cursor-pointer text-center flex items-center justify-center"
                >
                  Start SIP
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredFunds.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E5E5E0] shadow-sm">
            <p className="text-base font-bold text-[#171717]">No mutual funds match your search.</p>
            <p className="text-xs text-[#6B6B6B] mt-1">Try searching for other categories or fund houses.</p>
          </div>
        )}

      </div>
    </div>
  );
}