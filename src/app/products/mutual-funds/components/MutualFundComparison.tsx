"use client";
import React, { useState, useMemo } from "react";
import { X, Search, Activity, PlusCircle, TrendingUp, BarChart3, FileDown, Layers, ShieldCheck } from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import MutualFundComparisonPrintHelper from "./MutualFundComparisonPrintHelper";

export interface HistoryPoint {
  date: string;
  nav: number;
}

export interface CompareFund {
  id: number;
  name: string;
  category: string;
  type: string;
  risk: string;
  nav: string;
  return1Y: string;
  return3Y: string;
  return5Y: string;
  fundHouse: string;
  expenseRatio: string;
  aum: string;
  history: HistoryPoint[];
}

const HARDCODED_COMPARE_FUNDS: CompareFund[] = [
  {
    id: 1,
    name: "Nippon India Small Cap Fund",
    category: "Small Cap",
    type: "Equity",
    risk: "Very High",
    nav: "184.25",
    return1Y: "38.4%",
    return3Y: "28.2%",
    return5Y: "32.6%",
    fundHouse: "Nippon India Mutual Fund",
    expenseRatio: "0.72%",
    aum: "₹56,420 Cr",
    history: [
      { date: "2021", nav: 82.4 },
      { date: "2022", nav: 104.1 },
      { date: "2023", nav: 132.8 },
      { date: "2024", nav: 165.2 },
      { date: "2025", nav: 178.5 },
      { date: "2026", nav: 184.25 },
    ],
  },
  {
    id: 2,
    name: "Parag Parikh Flexi Cap Fund",
    category: "Flexi Cap",
    type: "Equity",
    risk: "High",
    nav: "78.90",
    return1Y: "26.8%",
    return3Y: "21.4%",
    return5Y: "23.9%",
    fundHouse: "PPFAS Mutual Fund",
    expenseRatio: "0.64%",
    aum: "₹72,150 Cr",
    history: [
      { date: "2021", nav: 44.5 },
      { date: "2022", nav: 52.3 },
      { date: "2023", nav: 61.8 },
      { date: "2024", nav: 70.4 },
      { date: "2025", nav: 75.6 },
      { date: "2026", nav: 78.9 },
    ],
  },
  {
    id: 3,
    name: "HDFC Mid-Cap Opportunities Fund",
    category: "Mid Cap",
    type: "Equity",
    risk: "Very High",
    nav: "192.40",
    return1Y: "34.2%",
    return3Y: "26.1%",
    return5Y: "28.4%",
    fundHouse: "HDFC Mutual Fund",
    expenseRatio: "0.78%",
    aum: "₹68,300 Cr",
    history: [
      { date: "2021", nav: 95.2 },
      { date: "2022", nav: 115.6 },
      { date: "2023", nav: 142.1 },
      { date: "2024", nav: 172.8 },
      { date: "2025", nav: 186.4 },
      { date: "2026", nav: 192.4 },
    ],
  },
  {
    id: 4,
    name: "ICICI Prudential Bluechip Fund",
    category: "Large Cap",
    type: "Equity",
    risk: "Moderate High",
    nav: "112.15",
    return1Y: "22.5%",
    return3Y: "17.8%",
    return5Y: "18.2%",
    fundHouse: "ICICI Prudential Mutual Fund",
    expenseRatio: "0.89%",
    aum: "₹54,200 Cr",
    history: [
      { date: "2021", nav: 68.4 },
      { date: "2022", nav: 78.2 },
      { date: "2023", nav: 89.5 },
      { date: "2024", nav: 101.4 },
      { date: "2025", nav: 108.2 },
      { date: "2026", nav: 112.15 },
    ],
  },
  {
    id: 5,
    name: "SBI Long Term Equity Fund (ELSS)",
    category: "ELSS (Tax)",
    type: "Equity",
    risk: "Very High",
    nav: "410.80",
    return1Y: "31.4%",
    return3Y: "24.6%",
    return5Y: "24.8%",
    fundHouse: "SBI Mutual Fund",
    expenseRatio: "0.95%",
    aum: "₹24,800 Cr",
    history: [
      { date: "2021", nav: 210.0 },
      { date: "2022", nav: 255.4 },
      { date: "2023", nav: 310.2 },
      { date: "2024", nav: 375.6 },
      { date: "2025", nav: 398.2 },
      { date: "2026", nav: 410.8 },
    ],
  },
  {
    id: 6,
    name: "ICICI Prudential Balanced Advantage Fund",
    category: "Hybrid",
    type: "Hybrid",
    risk: "Moderate",
    nav: "68.45",
    return1Y: "16.8%",
    return3Y: "13.9%",
    return5Y: "14.6%",
    fundHouse: "ICICI Prudential Mutual Fund",
    expenseRatio: "0.82%",
    aum: "₹58,900 Cr",
    history: [
      { date: "2021", nav: 46.2 },
      { date: "2022", nav: 51.4 },
      { date: "2023", nav: 56.8 },
      { date: "2024", nav: 62.9 },
      { date: "2025", nav: 66.1 },
      { date: "2026", nav: 68.45 },
    ],
  },
];

const INVESTMENT_STYLES = [
  { label: "All", key: "all", icon: "🌐" },
  { label: "Large Cap", key: "Large Cap", icon: "📊" },
  { label: "Mid Cap", key: "Mid Cap", icon: "📈" },
  { label: "Small Cap", key: "Small Cap", icon: "🚀" },
  { label: "Flexi Cap", key: "Flexi Cap", icon: "💼" },
  { label: "ELSS (Tax)", key: "ELSS (Tax)", icon: "₹" },
  { label: "Hybrid", key: "Hybrid", icon: "⚖️" },
];

const CHART_COLORS = ["#E91E63", "#F4C430", "#198754", "#6B6B6B"];

export default function MutualFundComparison() {
  const [selectedStyle, setSelectedStyle] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFunds, setSelectedFunds] = useState<CompareFund[]>([
    HARDCODED_COMPARE_FUNDS[0],
    HARDCODED_COMPARE_FUNDS[1],
  ]);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  // Toggle selection (max 4)
  const toggleFundSelection = (fund: CompareFund) => {
    const isSelected = selectedFunds.some((f) => f.id === fund.id);
    if (isSelected) {
      if (selectedFunds.length <= 1) {
        alert("Please keep at least 1 fund in comparison.");
        return;
      }
      setSelectedFunds(selectedFunds.filter((f) => f.id !== fund.id));
    } else {
      if (selectedFunds.length >= 4) {
        alert("You can compare up to 4 funds at once.");
        return;
      }
      setSelectedFunds([...selectedFunds, fund]);
    }
  };

  // Filter available funds
  const filteredFunds = useMemo(() => {
    return HARDCODED_COMPARE_FUNDS.filter((fund) => {
      const matchStyle = selectedStyle === "all" || selectedStyle === "All" || fund.category.toLowerCase().includes(selectedStyle.toLowerCase());
      const matchSearch =
        searchQuery.trim() === "" ||
        fund.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fund.fundHouse.toLowerCase().includes(searchQuery.toLowerCase());
      return matchStyle && matchSearch;
    });
  }, [selectedStyle, searchQuery]);

  // Combined chart data (Base 100 Growth Model)
  const chartData = useMemo(() => {
    const years = ["2021", "2022", "2023", "2024", "2025", "2026"];
    return years.map((yr) => {
      const row: any = { year: yr };
      selectedFunds.forEach((f) => {
        const pt = f.history.find((h) => h.date === yr);
        const baseNav = f.history[0]?.nav || 1;
        if (pt) {
          // Normalized to 100 base
          row[f.name] = Math.round((pt.nav / baseNav) * 100);
        }
      });
      return row;
    });
  }, [selectedFunds]);

  return (
    <section className="py-16 md:py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 bg-[#FFF8D6] border border-[#F4C430]/40 rounded-full text-xs font-bold uppercase tracking-wider text-[#171717] shadow-xs">
            <Activity className="w-3.5 h-3.5 text-[#E91E63]" /> Smart Comparison Engine
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
            Compare Top <span className="text-[#E91E63]">Mutual Funds</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-[#E91E63] rounded-full mb-4" />
          <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base font-normal">
            Select and compare up to 4 funds side-by-side on historical growth, CAGR returns, expense ratios, and risk ratings.
          </p>
        </div>

        {/* Investment Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {INVESTMENT_STYLES.map((style) => (
            <button
              key={style.key}
              type="button"
              onClick={() => setSelectedStyle(style.key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedStyle === style.key
                  ? "bg-[#F4C430] text-[#171717] border border-[#F4C430] shadow-md scale-105"
                  : "bg-[#FFFDF5] border border-[#E5E5E0] text-[#292929] hover:bg-[#FFF8D6]"
              }`}
            >
              <span>{style.icon}</span>
              <span>{style.label}</span>
            </button>
          ))}
        </div>

        {/* Selected Funds Chips */}
        <div className="bg-[#FFFDF5] p-4 rounded-2xl border border-[#E5E5E0] mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#6B6B6B] uppercase tracking-wider mr-2">Comparing ({selectedFunds.length}/4):</span>
            {selectedFunds.map((fund, idx) => (
              <span
                key={fund.id}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#E5E5E0] text-xs font-bold text-[#171717] shadow-xs"
              >
                <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] }} />
                <span>{fund.name}</span>
                <button
                  type="button"
                  onClick={() => toggleFundSelection(fund)}
                  className="text-[#6B6B6B] hover:text-[#D64545] cursor-pointer ml-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#171717] bg-[#FFF8D6] border border-[#F4C430]/40 hover:bg-[#F4C430] transition-all cursor-pointer self-end sm:self-auto shrink-0 shadow-xs"
          >
            <FileDown className="w-4 h-4 text-[#171717]" />
            Export Comparison
          </button>
        </div>

        {/* Growth Comparison Chart */}
        <div className="bg-white rounded-3xl border border-[#E5E5E0] p-6 md:p-8 shadow-md mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#171717]">Historical Growth (Base ₹100 Growth)</h3>
              <p className="text-xs text-[#6B6B6B] font-normal">Shows how ₹100 invested across selected schemes grew over time.</p>
            </div>
          </div>

          <div className="h-72 sm:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 30, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E0" />
                <XAxis dataKey="year" tick={{ fill: "#6B6B6B", fontSize: 12, fontWeight: 600 }} />
                <YAxis tick={{ fill: "#6B6B6B", fontSize: 12, fontWeight: 600 }} unit="₹" />
                <Tooltip
                  formatter={(val: any, name: any) => [`₹${val}`, name]}
                  contentStyle={{ borderRadius: '12px', border: '1px solid #E5E5E0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                {selectedFunds.map((fund, idx) => (
                  <Line
                    key={fund.id}
                    type="monotone"
                    dataKey={fund.name}
                    stroke={CHART_COLORS[idx % CHART_COLORS.length]}
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Available Schemes Grid to Add */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="text-xl font-bold text-[#171717]">Available Schemes in Category</h3>
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search scheme name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#FFFDF5] border border-[#E5E5E0] rounded-xl text-xs outline-none focus:border-[#F4C430] text-[#171717]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFunds.map((fund) => {
              const isSelected = selectedFunds.some((f) => f.id === fund.id);
              return (
                <div
                  key={fund.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isSelected
                      ? "bg-[#FFF8D6]/30 border-[#E91E63] shadow-md"
                      : "bg-white border-[#E5E5E0] hover:border-[#E91E63]/60 hover:shadow-md"
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#171717] bg-[#FFF8D6] px-2 py-0.5 rounded-full border border-[#F4C430]/40">
                        {fund.category}
                      </span>
                      <h4 className="font-bold text-sm text-[#171717] group-hover:text-[#E91E63] mt-1.5">{fund.name}</h4>
                      <p className="text-[11px] text-[#6B6B6B]">{fund.fundHouse}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-[#E5E5E0] my-3 text-center bg-[#FFFDF5] rounded-xl">
                    <div>
                      <p className="text-[10px] text-[#6B6B6B] uppercase font-bold">1Y Return</p>
                      <p className="text-xs font-black text-[#198754]">+{fund.return1Y}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#6B6B6B] uppercase font-bold">3Y CAGR</p>
                      <p className="text-xs font-black text-[#198754]">+{fund.return3Y}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#6B6B6B] uppercase font-bold">5Y CAGR</p>
                      <p className="text-xs font-black text-[#198754]">+{fund.return5Y}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-bold text-[#171717]">NAV: ₹{fund.nav}</span>
                    <button
                      type="button"
                      onClick={() => toggleFundSelection(fund)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                        isSelected
                          ? "bg-[#FFFDF5] text-[#D64545] border border-[#D64545]/40 hover:bg-red-50"
                          : "bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] shadow-xs"
                      }`}
                    >
                      {isSelected ? "Remove" : "+ Add to Compare"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Side-by-Side Detailed Matrix */}
        <div className="bg-white rounded-3xl border border-[#E5E5E0] overflow-hidden shadow-md">
          <div className="p-6 md:p-8 border-b border-[#E5E5E0] bg-[#FFFDF5]">
            <h3 className="text-xl font-bold text-[#171717]">Side-by-Side Metrics</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-white bg-[#171717]">
                  <th className="py-4 px-6 font-bold">Scheme</th>
                  <th className="py-4 px-6 font-bold">Category</th>
                  <th className="py-4 px-6 font-bold">Risk Meter</th>
                  <th className="py-4 px-6 font-bold">Expense Ratio</th>
                  <th className="py-4 px-6 font-bold">Fund AUM</th>
                  <th className="py-4 px-6 font-bold">3Y Return</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E0] text-sm">
                {selectedFunds.map((fund, idx) => (
                  <tr key={fund.id} className="hover:bg-[#FFFDF5] transition-colors">
                    <td className="py-4 px-6 font-bold text-[#171717] flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full inline-block shrink-0" style={{ backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] }} />
                      {fund.name}
                    </td>
                    <td className="py-4 px-6 text-xs font-semibold text-[#292929]">{fund.category}</td>
                    <td className="py-4 px-6">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40">
                        {fund.risk}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-[#171717]">{fund.expenseRatio}</td>
                    <td className="py-4 px-6 font-bold text-[#171717]">{fund.aum}</td>
                    <td className="py-4 px-6 font-black text-[#198754]">+{fund.return3Y}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Export / Print Helper Modal */}
      <MutualFundComparisonPrintHelper
        selectedFunds={selectedFunds}
        isPreviewOpen={isPreviewOpen}
        setIsPreviewOpen={setIsPreviewOpen}
        CHART_COLORS={CHART_COLORS}
      />
    </section>
  );
}