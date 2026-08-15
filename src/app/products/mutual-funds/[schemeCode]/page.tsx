"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MFConsultModal from "../components/MFConsultModal";
import {
  ArrowLeft,
  Shield,
  TrendingUp,
  Activity,
  Package,
  Calendar,
  IndianRupee,
  Award,
  Layers,
  Sparkles,
  PieChart as PieChartIcon,
  CheckCircle2,
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
  "default": {
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
};

export default function MutualFundDetailPage() {
  const params = useParams();
  const rawCode = Array.isArray(params?.schemeCode) ? params.schemeCode[0] : (params?.schemeCode as string) || "120503";

  const scheme: SchemeDetail = useMemo(() => {
    return SCHEMES_DATABASE[rawCode] || {
      ...SCHEMES_DATABASE["default"],
      schemeCode: rawCode,
      name: `Top Performing Growth Scheme (${rawCode})`,
    };
  }, [rawCode]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sipAmount, setSipAmount] = useState(5000);
  const [tenureYears, setTenureYears] = useState(5);

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
    <div className="min-h-screen bg-white text-[#171717] flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/products/mutual-funds"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[#E5E5E0] bg-white text-xs font-bold text-[#171717] hover:bg-[#FFF8D6] hover:border-[#F4C430] shadow-xs transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#F4C430]" />
            Back to Mutual Funds
          </Link>
        </div>

        {/* Scheme Header Card */}
        <div className="bg-[#171717] text-white p-6 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden mb-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative z-10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#FFF8D6] text-[#171717] px-3 py-1 rounded-full border border-[#F4C430]/40">
                  {scheme.subCategory}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white px-3 py-1 rounded-full border border-white/20">
                  Risk: {scheme.risk}
                </span>
                <span className="text-[10px] font-bold text-[#FFF8D6] bg-white/10 px-3 py-1 rounded-full">
                  Code: {scheme.schemeCode}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2 text-white">
                {scheme.name}
              </h1>
              <p className="text-sm text-gray-300 font-normal">
                {scheme.fundHouse} • Fund Manager: {scheme.fundManager}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 text-center sm:text-right">
                <p className="text-[10px] font-bold uppercase text-gray-300">Latest NAV ({scheme.navDate})</p>
                <p className="text-2xl font-black text-[#F4C430]">₹{scheme.nav.toFixed(2)}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-2xl font-extrabold text-sm uppercase tracking-wider shadow-lg active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              >
                Start SIP in Fund
              </button>
            </div>
          </div>
        </div>

        {/* Returns & Core Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          <div className="p-4 bg-[#FFFDF5] rounded-2xl border border-[#E5E5E0]">
            <p className="text-[10px] font-bold text-[#6B6B6B] uppercase">1Y Return</p>
            <p className="text-lg font-black text-[#198754]">+{scheme.return1Y}</p>
          </div>
          <div className="p-4 bg-[#FFFDF5] rounded-2xl border border-[#E5E5E0]">
            <p className="text-[10px] font-bold text-[#6B6B6B] uppercase">3Y CAGR</p>
            <p className="text-lg font-black text-[#198754]">+{scheme.return3Y}</p>
          </div>
          <div className="p-4 bg-[#FFFDF5] rounded-2xl border border-[#E5E5E0]">
            <p className="text-[10px] font-bold text-[#6B6B6B] uppercase">5Y CAGR</p>
            <p className="text-lg font-black text-[#198754]">+{scheme.return5Y}</p>
          </div>
          <div className="p-4 bg-[#FFFDF5] rounded-2xl border border-[#E5E5E0]">
            <p className="text-[10px] font-bold text-[#6B6B6B] uppercase">Fund AUM</p>
            <p className="text-lg font-extrabold text-[#171717]">{scheme.aum}</p>
          </div>
          <div className="p-4 bg-[#FFFDF5] rounded-2xl border border-[#E5E5E0]">
            <p className="text-[10px] font-bold text-[#6B6B6B] uppercase">Expense Ratio</p>
            <p className="text-lg font-extrabold text-[#171717]">{scheme.expenseRatio}</p>
          </div>
          <div className="p-4 bg-[#FFFDF5] rounded-2xl border border-[#E5E5E0]">
            <p className="text-[10px] font-bold text-[#6B6B6B] uppercase">Min. SIP</p>
            <p className="text-lg font-extrabold text-[#171717]">{scheme.minSip}</p>
          </div>
        </div>

        {/* Historical NAV Chart & SIP Estimator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Chart */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E5E0] shadow-md">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-[#171717]">Historical NAV Trend</h3>
                <p className="text-xs text-[#6B6B6B] font-normal">NAV performance progression over time</p>
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
                    contentStyle={{ borderRadius: '12px', border: '1px solid #E5E5E0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                  />
                  <Area type="monotone" dataKey="nav" stroke="#171717" strokeWidth={3} fill="url(#mfNavGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick SIP Estimator */}
          <div className="lg:col-span-5 bg-[#FFFDF5] p-6 sm:p-8 rounded-3xl border border-[#E5E5E0] flex flex-col justify-between shadow-xs">
            <div>
              <h3 className="text-lg font-extrabold text-[#171717] mb-1">SIP Return Estimator</h3>
              <p className="text-xs text-[#6B6B6B] font-normal mb-4">Calculate growth at fund&apos;s 3Y CAGR rate ({scheme.return3Y})</p>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#171717] mb-1">
                    <span>Monthly Investment</span>
                    <span className="text-[#171717] bg-[#FFF8D6] px-2 py-0.5 rounded border border-[#F4C430]/40 font-extrabold">{formatINR(sipAmount)}</span>
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
                  <div className="flex justify-between text-xs font-bold text-[#171717] mb-1">
                    <span>Duration</span>
                    <span className="text-[#171717] bg-[#FFF8D6] px-2 py-0.5 rounded border border-[#F4C430]/40 font-extrabold">{tenureYears} Years</span>
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

            <div className="space-y-2 mt-6 pt-4 border-t border-[#E5E5E0] text-xs">
              <div className="flex justify-between text-[#6B6B6B]">
                <span>Total Invested:</span>
                <span className="font-bold text-[#171717]">{formatINR(estimatedCorpus.invested)}</span>
              </div>
              <div className="flex justify-between text-[#6B6B6B]">
                <span>Est. Gains:</span>
                <span className="font-black text-[#198754]">+{formatINR(estimatedCorpus.returns)}</span>
              </div>
              <div className="flex justify-between text-sm pt-2 bg-white px-3 py-2 rounded-xl border border-[#E5E5E0]">
                <span className="font-bold text-[#171717]">Expected Value:</span>
                <span className="font-extrabold text-[#171717]">{formatINR(estimatedCorpus.total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Holdings & Asset Allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Top Holdings Table */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E5E0] shadow-md overflow-x-auto">
            <h3 className="text-lg font-bold text-[#171717] mb-4">Top 5 Portfolio Holdings</h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E5E0] text-xs uppercase tracking-wider text-white bg-[#171717]">
                  <th className="py-3 px-3 font-bold rounded-l-xl">Company</th>
                  <th className="py-3 px-3 font-bold">Sector</th>
                  <th className="py-3 px-3 font-bold text-right rounded-r-xl">Weightage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E0] text-xs">
                {scheme.topHoldings.map((h, idx) => (
                  <tr key={idx} className="hover:bg-[#FFFDF5]">
                    <td className="py-3 px-3 font-bold text-[#171717]">{h.company}</td>
                    <td className="py-3 px-3 text-[#6B6B6B]">{h.sector}</td>
                    <td className="py-3 px-3 font-black text-[#198754] text-right">{h.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Scheme Information Card */}
          <div className="lg:col-span-5 bg-[#FFFDF5] p-6 sm:p-8 rounded-3xl border border-[#E5E5E0] text-xs space-y-3 shadow-xs">
            <h3 className="text-base font-extrabold text-[#171717] mb-3">Scheme Terms & Details</h3>
            <div className="flex justify-between py-1.5 border-b border-[#E5E5E0]">
              <span className="text-[#6B6B6B]">Exit Load:</span>
              <span className="font-bold text-[#171717] text-right max-w-[200px]">{scheme.exitLoad}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-[#E5E5E0]">
              <span className="text-[#6B6B6B]">Min. Lumpsum:</span>
              <span className="font-bold text-[#171717]">{scheme.minLumpsum}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-[#E5E5E0]">
              <span className="text-[#6B6B6B]">Equity Allocation:</span>
              <span className="font-bold text-[#198754]">{scheme.assetAllocation.equity}%</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-[#E5E5E0]">
              <span className="text-[#6B6B6B]">Debt & Cash Allocation:</span>
              <span className="font-bold text-[#171717]">{(scheme.assetAllocation.debt + scheme.assetAllocation.cash).toFixed(1)}%</span>
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full mt-4 py-3.5 rounded-xl bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] font-bold text-xs uppercase tracking-wider hover:shadow-md active:scale-95 transition-all cursor-pointer"
            >
              Consult Advisor for this Scheme
            </button>
          </div>
        </div>
      </main>

      {/* Booking / Consultation Modal */}
      <MFConsultModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Invest in ${scheme.name}`}
        defaultFund={scheme.name}
      />

      <Footer />
    </div>
  );
}
