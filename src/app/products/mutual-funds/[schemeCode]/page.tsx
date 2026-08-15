"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Shield,
  TrendingUp,
  Activity,
  Calendar,
  IndianRupee,
  Sparkles,
  PieChart as PieChartIcon,
  CheckCircle2,
  ArrowUp,
  Percent,
  Layers,
  PhoneCall,
  UserCheck,
  Building2,
  Award,
  ArrowRight,
  Clock,
  ShieldCheck,
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";

// Hardcoded Detailed Schemes Database
interface SchemeDetail {
  schemeCode: string;
  name: string;
  nav: number;
  navDate: string;
  fundHouse: string;
  category: string;
  subCategory: string;
  risk: string;
  return1Y: string;
  return3Y: string;
  return5Y: string;
  aum: string;
  expenseRatio: string;
  exitLoad: string;
  minSip: string;
  minLumpsum: string;
  fundManager: string;
  topHoldings: { company: string; sector: string; weight: string }[];
  assetAllocation: { equity: number; debt: number; cash: number };
  navHistory: { date: string; nav: number }[];
}

const SCHEMES_DATABASE: Record<string, SchemeDetail> = {
  "120503": {
    schemeCode: "120503",
    name: "Nippon India Small Cap Fund",
    nav: 184.25,
    navDate: "14-Feb-2026",
    fundHouse: "Nippon India Mutual Fund",
    category: "Equity",
    subCategory: "Small Cap Fund",
    risk: "Very High",
    return1Y: "38.4%",
    return3Y: "28.2%",
    return5Y: "32.6%",
    aum: "₹56,420 Cr",
    expenseRatio: "0.72%",
    exitLoad: "1.0% if redeemed within 1 month",
    minSip: "₹500",
    minLumpsum: "₹5,000",
    fundManager: "Samir Rachh & Kinjal Desai",
    topHoldings: [
      { company: "HDFC Bank Ltd", sector: "Financials", weight: "4.2%" },
      { company: "Tube Investments of India", sector: "Automobile", weight: "3.8%" },
      { company: "Apar Industries Ltd", sector: "Capital Goods", weight: "3.2%" },
      { company: "Voltamp Transformers", sector: "Energy", weight: "2.9%" },
      { company: "KPIT Technologies Ltd", sector: "Technology", weight: "2.6%" },
    ],
    assetAllocation: { equity: 94.2, debt: 1.5, cash: 4.3 },
    navHistory: [
      { date: "Jan 22", nav: 98.4 },
      { date: "Jul 22", nav: 104.2 },
      { date: "Jan 23", nav: 122.5 },
      { date: "Jul 23", nav: 138.9 },
      { date: "Jan 24", nav: 156.4 },
      { date: "Jul 24", nav: 168.2 },
      { date: "Jan 25", nav: 176.8 },
      { date: "Feb 26", nav: 184.25 },
    ],
  },
  "122639": {
    schemeCode: "122639",
    name: "Parag Parikh Flexi Cap Fund",
    nav: 78.90,
    navDate: "14-Feb-2026",
    fundHouse: "PPFAS Mutual Fund",
    category: "Equity",
    subCategory: "Flexi Cap Fund",
    risk: "High",
    return1Y: "26.8%",
    return3Y: "21.4%",
    return5Y: "23.9%",
    aum: "₹72,150 Cr",
    expenseRatio: "0.64%",
    exitLoad: "2.0% within 365 days, 1.0% within 730 days",
    minSip: "₹1,000",
    minLumpsum: "₹1,000",
    fundManager: "Rajeev Thakkar & Raunak Onkar",
    topHoldings: [
      { company: "HDFC Bank Ltd", sector: "Financials", weight: "7.8%" },
      { company: "Bajaj Holdings & Investment", sector: "Financials", weight: "6.9%" },
      { company: "ITC Ltd", sector: "FMCG", weight: "6.2%" },
      { company: "Power Grid Corp of India", sector: "Utilities", weight: "5.4%" },
      { company: "Microsoft Corp (US)", sector: "Global Tech", weight: "4.8%" },
    ],
    assetAllocation: { equity: 84.5, debt: 11.2, cash: 4.3 },
    navHistory: [
      { date: "Jan 22", nav: 48.2 },
      { date: "Jul 22", nav: 52.1 },
      { date: "Jan 23", nav: 58.4 },
      { date: "Jul 23", nav: 64.2 },
      { date: "Jan 24", nav: 69.8 },
      { date: "Jul 24", nav: 73.4 },
      { date: "Jan 25", nav: 76.5 },
      { date: "Feb 26", nav: 78.90 },
    ],
  },
  "118989": {
    schemeCode: "118989",
    name: "HDFC Mid-Cap Opportunities Fund",
    nav: 192.40,
    navDate: "14-Feb-2026",
    fundHouse: "HDFC Mutual Fund",
    category: "Equity",
    subCategory: "Mid Cap Fund",
    risk: "Very High",
    return1Y: "34.2%",
    return3Y: "26.1%",
    return5Y: "28.4%",
    aum: "₹68,300 Cr",
    expenseRatio: "0.78%",
    exitLoad: "1.0% if redeemed within 1 year",
    minSip: "₹500",
    minLumpsum: "₹5,000",
    fundManager: "Chirag Setalvad",
    topHoldings: [
      { company: "Tata Communications", sector: "Telecom", weight: "4.8%" },
      { company: "Federal Bank Ltd", sector: "Financials", weight: "4.4%" },
      { company: "Balkrishna Industries", sector: "Auto Ancillary", weight: "3.9%" },
      { company: "Astral Ltd", sector: "Building Products", weight: "3.5%" },
      { company: "Max Healthcare", sector: "Healthcare", weight: "3.1%" },
    ],
    assetAllocation: { equity: 91.5, debt: 3.2, cash: 5.3 },
    navHistory: [
      { date: "Jan 22", nav: 112.0 },
      { date: "Jul 22", nav: 124.5 },
      { date: "Jan 23", nav: 140.2 },
      { date: "Jul 23", nav: 156.8 },
      { date: "Jan 24", nav: 172.4 },
      { date: "Jul 24", nav: 182.1 },
      { date: "Jan 25", nav: 188.6 },
      { date: "Feb 26", nav: 192.40 },
    ],
  },
  "120505": {
    schemeCode: "120505",
    name: "ICICI Prudential Bluechip Fund",
    nav: 112.15,
    navDate: "14-Feb-2026",
    fundHouse: "ICICI Prudential Mutual Fund",
    category: "Equity",
    subCategory: "Large Cap Fund",
    risk: "Moderate High",
    return1Y: "22.5%",
    return3Y: "17.8%",
    return5Y: "18.2%",
    aum: "₹54,200 Cr",
    expenseRatio: "0.88%",
    exitLoad: "1.0% if redeemed within 1 year",
    minSip: "₹500",
    minLumpsum: "₹5,000",
    fundManager: "Anish Tawakley & Vaibhav Dusad",
    topHoldings: [
      { company: "ICICI Bank Ltd", sector: "Financials", weight: "8.5%" },
      { company: "Reliance Industries", sector: "Energy", weight: "7.9%" },
      { company: "Infosys Ltd", sector: "IT Services", weight: "6.8%" },
      { company: "Larsen & Toubro Ltd", sector: "Engineering", weight: "5.4%" },
      { company: "Axis Bank Ltd", sector: "Financials", weight: "4.9%" },
    ],
    assetAllocation: { equity: 93.8, debt: 2.1, cash: 4.1 },
    navHistory: [
      { date: "Jan 22", nav: 72.4 },
      { date: "Jul 22", nav: 78.1 },
      { date: "Jan 23", nav: 86.5 },
      { date: "Jul 23", nav: 94.0 },
      { date: "Jan 24", nav: 101.8 },
      { date: "Jul 24", nav: 106.5 },
      { date: "Jan 25", nav: 109.8 },
      { date: "Feb 26", nav: 112.15 },
    ],
  },
  "119598": {
    schemeCode: "119598",
    name: "SBI Long Term Equity Fund (ELSS)",
    nav: 410.80,
    navDate: "14-Feb-2026",
    fundHouse: "SBI Mutual Fund",
    category: "Equity",
    subCategory: "ELSS Tax Saver Fund",
    risk: "Very High",
    return1Y: "31.4%",
    return3Y: "24.6%",
    return5Y: "24.8%",
    aum: "₹24,800 Cr",
    expenseRatio: "0.95%",
    exitLoad: "Nil (Statutory 3-Year Lock-in applies)",
    minSip: "₹500",
    minLumpsum: "₹500",
    fundManager: "Dinesh Balachandran",
    topHoldings: [
      { company: "ICICI Bank Ltd", sector: "Financials", weight: "6.8%" },
      { company: "Larsen & Toubro Ltd", sector: "Engineering", weight: "5.4%" },
      { company: "Mahindra & Mahindra", sector: "Automobile", weight: "4.9%" },
      { company: "Infosys Ltd", sector: "IT Services", weight: "4.2%" },
      { company: "State Bank of India", sector: "Financials", weight: "3.9%" },
    ],
    assetAllocation: { equity: 92.4, debt: 2.1, cash: 5.5 },
    navHistory: [
      { date: "Jan 22", nav: 245.0 },
      { date: "Jul 22", nav: 275.5 },
      { date: "Jan 23", nav: 310.2 },
      { date: "Jul 23", nav: 345.8 },
      { date: "Jan 24", nav: 378.4 },
      { date: "Jul 24", nav: 395.2 },
      { date: "Jan 25", nav: 404.1 },
      { date: "Feb 26", nav: 410.80 },
    ],
  },
  "125354": {
    schemeCode: "125354",
    name: "Quant Small Cap Fund",
    nav: 248.60,
    navDate: "14-Feb-2026",
    fundHouse: "Quant Mutual Fund",
    category: "Equity",
    subCategory: "Small Cap Fund",
    risk: "Very High",
    return1Y: "42.1%",
    return3Y: "32.5%",
    return5Y: "36.2%",
    aum: "₹21,400 Cr",
    expenseRatio: "0.76%",
    exitLoad: "1.0% if redeemed within 1 year",
    minSip: "₹1,000",
    minLumpsum: "₹5,000",
    fundManager: "Sandeep Tandon & Ankit Pande",
    topHoldings: [
      { company: "Reliance Industries", sector: "Energy", weight: "8.1%" },
      { company: "Jio Financial Services", sector: "Financials", weight: "6.2%" },
      { company: "Bikaji Foods International", sector: "FMCG", weight: "4.8%" },
      { company: "Aegis Logistics Ltd", sector: "Oil & Gas", weight: "4.1%" },
      { company: "IRB Infrastructure", sector: "Infrastructure", weight: "3.7%" },
    ],
    assetAllocation: { equity: 91.2, debt: 4.8, cash: 4.0 },
    navHistory: [
      { date: "Jan 22", nav: 120.5 },
      { date: "Jul 22", nav: 138.0 },
      { date: "Jan 23", nav: 165.2 },
      { date: "Jul 23", nav: 192.4 },
      { date: "Jan 24", nav: 215.8 },
      { date: "Jul 24", nav: 232.1 },
      { date: "Jan 25", nav: 241.5 },
      { date: "Feb 26", nav: 248.60 },
    ],
  },
  "default": {
    schemeCode: "120503",
    name: "Top Recommended Growth Fund",
    nav: 154.20,
    navDate: "14-Feb-2026",
    fundHouse: "Leading Asset Management Co.",
    category: "Equity",
    subCategory: "Diversified Growth Fund",
    risk: "Very High",
    return1Y: "28.5%",
    return3Y: "22.4%",
    return5Y: "24.1%",
    aum: "₹38,500 Cr",
    expenseRatio: "0.75%",
    exitLoad: "1.0% within 1 year",
    minSip: "₹500",
    minLumpsum: "₹1,000",
    fundManager: "Senior Fund Management Team",
    topHoldings: [
      { company: "HDFC Bank Ltd", sector: "Financials", weight: "6.5%" },
      { company: "ICICI Bank Ltd", sector: "Financials", weight: "5.8%" },
      { company: "Infosys Ltd", sector: "IT Services", weight: "4.9%" },
      { company: "Reliance Industries", sector: "Energy", weight: "4.5%" },
      { company: "Larsen & Toubro Ltd", sector: "Engineering", weight: "4.0%" },
    ],
    assetAllocation: { equity: 92.0, debt: 3.5, cash: 4.5 },
    navHistory: [
      { date: "Jan 22", nav: 92.0 },
      { date: "Jul 22", nav: 104.5 },
      { date: "Jan 23", nav: 118.2 },
      { date: "Jul 23", nav: 130.4 },
      { date: "Jan 24", nav: 142.1 },
      { date: "Jul 24", nav: 148.8 },
      { date: "Jan 25", nav: 151.4 },
      { date: "Feb 26", nav: 154.20 },
    ],
  },
};

export default function MutualFundDetailPage() {
  const params = useParams();
  const rawCode = Array.isArray(params?.schemeCode) ? params.schemeCode[0] : (params?.schemeCode as string) || "120503";

  const scheme: SchemeDetail = useMemo(() => {
    return SCHEMES_DATABASE[rawCode] || {
      ...SCHEMES_DATABASE["default"],
      schemeCode: rawCode,
      name: `Growth & Compounding Fund (${rawCode})`,
    };
  }, [rawCode]);

  const [sipAmount, setSipAmount] = useState(5000);
  const [tenureYears, setTenureYears] = useState(5);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const estimatedCorpus = useMemo(() => {
    const rate = parseFloat(scheme.return3Y.replace("%", "")) || 15;
    const monthlyRate = rate / 12 / 100;
    const months = tenureYears * 12;
    const fv = sipAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const invested = sipAmount * months;
    return {
      invested: Math.round(invested),
      returns: Math.round(Math.max(0, fv - invested)),
      total: Math.round(fv),
    };
  }, [sipAmount, tenureYears, scheme]);

  const formatINR = (val: number) =>
    "₹" + Math.round(val).toLocaleString("en-IN");

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#171717] flex flex-col font-sans selection:bg-[#FFF8D6] selection:text-[#171717]">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs">
          <Link
            href="/products/mutual-funds"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[#E5E5E0] bg-white font-bold text-[#171717] hover:bg-[#FFF8D6] hover:border-[#F4C430] shadow-xs transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#F4C430]" />
            Back to Mutual Funds
          </Link>
          <span className="text-[#6B6B6B]">/</span>
          <span className="font-semibold text-[#6B6B6B] truncate max-w-xs">{scheme.name}</span>
        </div>

        {/* Scheme Hero Header Card */}
        <div className="bg-gradient-to-br from-[#171717] via-[#222222] to-[#171717] text-white p-6 sm:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden mb-10 border border-[#2E2E2E]">
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E91E63]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#F4C430]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#FFF8D6] text-[#171717] px-3.5 py-1 rounded-full border border-[#F4C430]/40 shadow-xs">
                  {scheme.subCategory}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white px-3.5 py-1 rounded-full border border-white/20">
                  Risk: {scheme.risk}
                </span>
                <span className="text-[10px] font-mono font-bold text-[#F4C430] bg-[#171717] px-3 py-1 rounded-full border border-[#F4C430]/30">
                  ARN Registered Scheme
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {scheme.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-300 font-normal pt-1">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#F4C430]" />
                  {scheme.fundHouse}
                </span>
                <span className="text-gray-500">•</span>
                <span className="flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-[#E91E63]" />
                  Manager: {scheme.fundManager}
                </span>
              </div>
            </div>

            {/* Price & CTA Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 text-center sm:text-right shadow-inner">
                <p className="text-[10px] font-bold uppercase text-gray-300 tracking-wider">Latest NAV ({scheme.navDate})</p>
                <p className="text-2xl sm:text-3xl font-black text-[#F4C430] mt-0.5">₹{scheme.nav.toFixed(2)}</p>
              </div>

              <Link
                href="/enquiry"
                className="px-8 py-4 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-2xl font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer whitespace-nowrap text-center flex items-center justify-center gap-2"
              >
                <span>Start SIP in Fund</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Returns & Core Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          <div className="p-5 bg-white rounded-2xl border border-[#E5E5E0] shadow-xs hover:border-[#E91E63] transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[10px] font-bold text-[#6B6B6B] uppercase">1Y Return</p>
              <TrendingUp className="w-3.5 h-3.5 text-[#198754]" />
            </div>
            <p className="text-xl font-black text-[#198754]">+{scheme.return1Y}</p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#E5E5E0] shadow-xs hover:border-[#E91E63] transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[10px] font-bold text-[#6B6B6B] uppercase">3Y CAGR</p>
              <Sparkles className="w-3.5 h-3.5 text-[#E91E63]" />
            </div>
            <p className="text-xl font-black text-[#198754]">+{scheme.return3Y}</p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#E5E5E0] shadow-xs hover:border-[#E91E63] transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[10px] font-bold text-[#6B6B6B] uppercase">5Y CAGR</p>
              <Award className="w-3.5 h-3.5 text-[#F4C430]" />
            </div>
            <p className="text-xl font-black text-[#198754]">+{scheme.return5Y}</p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#E5E5E0] shadow-xs hover:border-[#E91E63] transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[10px] font-bold text-[#6B6B6B] uppercase">Fund AUM</p>
              <Layers className="w-3.5 h-3.5 text-[#171717]" />
            </div>
            <p className="text-xl font-extrabold text-[#171717]">{scheme.aum}</p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#E5E5E0] shadow-xs hover:border-[#E91E63] transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[10px] font-bold text-[#6B6B6B] uppercase">Expense Ratio</p>
              <Percent className="w-3.5 h-3.5 text-[#6B6B6B]" />
            </div>
            <p className="text-xl font-extrabold text-[#171717]">{scheme.expenseRatio}</p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#E5E5E0] shadow-xs hover:border-[#E91E63] transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[10px] font-bold text-[#6B6B6B] uppercase">Min. SIP</p>
              <IndianRupee className="w-3.5 h-3.5 text-[#F4C430]" />
            </div>
            <p className="text-xl font-extrabold text-[#171717]">{scheme.minSip}</p>
          </div>
        </div>

        {/* Historical NAV Chart & SIP Estimator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Historical NAV Chart */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E5E0] shadow-md">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF8D6] text-[#171717] text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-[#F4C430]/40">
                  <Activity className="w-3 h-3 text-[#E91E63]" /> Growth History
                </div>
                <h3 className="text-lg font-bold text-[#171717]">Historical NAV Progression</h3>
                <p className="text-xs text-[#6B6B6B] font-normal">Tracking value appreciation over time</p>
              </div>
            </div>

            <div className="h-64 sm:h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={scheme.navHistory} margin={{ top: 10, right: 20, left: -15, bottom: 0 }}>
                  <defs>
                    <linearGradient id="mfNavGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F4C430" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#F4C430" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E0" />
                  <XAxis dataKey="date" tick={{ fill: "#6B6B6B", fontSize: 11 }} />
                  <YAxis tick={{ fill: "#6B6B6B", fontSize: 11 }} unit="₹" />
                  <Tooltip
                    formatter={(val: any) => [`₹${val}`, "NAV"]}
                    contentStyle={{ borderRadius: '12px', border: '1px solid #E5E5E0', backgroundColor: '#FFFFFF', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                  />
                  <Area type="monotone" dataKey="nav" stroke="#171717" strokeWidth={3} fill="url(#mfNavGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick SIP Estimator */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E5E0] flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40">
                  Interactive Simulator
                </span>
                <span className="text-xs font-bold text-[#198754]">Rate: {scheme.return3Y} CAGR</span>
              </div>
              <h3 className="text-lg font-extrabold text-[#171717] mb-1">SIP Return Calculator</h3>
              <p className="text-xs text-[#6B6B6B] font-normal mb-6">Estimate expected wealth based on scheme historical performance</p>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#171717] mb-2">
                    <span className="text-[#6B6B6B]">Monthly SIP Amount</span>
                    <span className="text-[#171717] bg-[#FFF8D6] px-2.5 py-0.5 rounded-md border border-[#F4C430]/40 font-extrabold">{formatINR(sipAmount)}</span>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={50000}
                    step={500}
                    value={sipAmount}
                    onChange={(e) => setSipAmount(Number(e.target.value))}
                    className="w-full h-2 bg-[#E5E5E0] rounded-lg cursor-pointer accent-[#F4C430]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-[#171717] mb-2">
                    <span className="text-[#6B6B6B]">Investment Duration</span>
                    <span className="text-[#171717] bg-[#FFF8D6] px-2.5 py-0.5 rounded-md border border-[#F4C430]/40 font-extrabold">{tenureYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    step={1}
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full h-2 bg-[#E5E5E0] rounded-lg cursor-pointer accent-[#F4C430]"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 mt-6 pt-5 border-t border-[#E5E5E0] text-xs">
              <div className="flex justify-between text-[#6B6B6B]">
                <span>Total Amount Invested:</span>
                <span className="font-bold text-[#171717]">{formatINR(estimatedCorpus.invested)}</span>
              </div>
              <div className="flex justify-between text-[#6B6B6B]">
                <span>Estimated Returns / Gain:</span>
                <span className="font-black text-[#198754]">+{formatINR(estimatedCorpus.returns)}</span>
              </div>
              <div className="flex justify-between text-sm pt-2.5 bg-[#FFFDF5] px-4 py-3 rounded-2xl border border-[#E5E5E0] mt-2">
                <span className="font-bold text-[#171717]">Expected Corpus Value:</span>
                <span className="font-black text-[#171717] text-base">{formatINR(estimatedCorpus.total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Holdings & Asset Allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Top Holdings Table */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E5E0] shadow-md overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#171717]">Top 5 Portfolio Holdings</h3>
              <span className="text-[10px] font-bold text-[#6B6B6B] uppercase bg-[#FFFDF5] px-2.5 py-1 rounded-md border border-[#E5E5E0]">
                Equity Basket
              </span>
            </div>

            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E5E0] text-xs uppercase tracking-wider text-white bg-[#171717]">
                  <th className="py-3.5 px-4 font-bold rounded-l-xl">Company</th>
                  <th className="py-3.5 px-4 font-bold">Sector</th>
                  <th className="py-3.5 px-4 font-bold text-right rounded-r-xl">Weightage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E0] text-xs">
                {scheme.topHoldings.map((h, idx) => (
                  <tr key={idx} className="hover:bg-[#FFFDF5] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#171717]">{h.company}</td>
                    <td className="py-3.5 px-4 text-[#6B6B6B]">
                      <span className="px-2 py-0.5 rounded-md bg-[#FFFDF5] border border-[#E5E5E0] font-medium text-[11px]">
                        {h.sector}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-black text-[#198754] text-right">{h.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Scheme Information Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E5E0] text-xs space-y-3.5 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-extrabold text-[#171717]">Scheme Terms & Details</h3>
                <ShieldCheck className="w-4 h-4 text-[#198754]" />
              </div>

              <div className="divide-y divide-[#E5E5E0]">
                <div className="flex justify-between py-2.5">
                  <span className="text-[#6B6B6B]">Exit Load:</span>
                  <span className="font-bold text-[#171717] text-right max-w-[200px]">{scheme.exitLoad}</span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span className="text-[#6B6B6B]">Min. Initial Lumpsum:</span>
                  <span className="font-bold text-[#171717]">{scheme.minLumpsum}</span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span className="text-[#6B6B6B]">Equity Asset Allocation:</span>
                  <span className="font-bold text-[#198754]">{scheme.assetAllocation.equity}%</span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span className="text-[#6B6B6B]">Debt &amp; Cash Equivalent:</span>
                  <span className="font-bold text-[#171717]">{(scheme.assetAllocation.debt + scheme.assetAllocation.cash).toFixed(1)}%</span>
                </div>
              </div>
            </div>

            <Link
              href="/enquiry"
              className="w-full mt-4 py-4 rounded-xl bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] font-bold text-xs uppercase tracking-wider hover:shadow-lg active:scale-95 transition-all cursor-pointer text-center flex items-center justify-center gap-2 shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Consult Advisor for this Scheme</span>
            </Link>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <section className="bg-gradient-to-r from-[#171717] via-[#2A2A2A] to-[#171717] text-white rounded-3xl p-8 sm:p-12 border border-[#E91E63]/30 relative overflow-hidden text-center mb-10 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E91E63]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl mx-auto relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF8D6] text-[#171717] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#E91E63]" />
              Zero Commission Direct Onboarding
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to invest in <span className="text-[#F4C430]">{scheme.name}</span>?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              Connect with our AMFI-registered advisory team for paperless KYC and customized portfolio allocation.
            </p>
            <div className="pt-2">
              <Link
                href="/enquiry"
                className="inline-block bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer text-center"
              >
                Request a Callback &amp; Start SIP
              </Link>
            </div>
          </div>
        </section>

        {/* Floating Scroll to Top */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 p-3 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
          </button>
        )}
      </main>

      <Footer />
    </div>
  );
}
