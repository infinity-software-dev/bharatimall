"use client";
import {
  Coins,
  LineChart,
  Minus,
  PieChart,
  Plus,
  Search,
  TrendingUp,
  X,
  Sparkles,
} from "lucide-react";
import React, { useCallback, useEffect, useState, useMemo } from "react";

// ---------- Types ----------
interface CalcResults {
  invested: number;
  returns: number;
  total: number;
}

interface SelectedFund {
  schemeCode: string;
  name: string;
  cagr: number;
}

const HARDCODED_SIP_FUNDS = [
  { schemeCode: "101", name: "Parag Parikh Flexi Cap Fund", cagr: 21.4 },
  { schemeCode: "102", name: "Nippon India Small Cap Fund", cagr: 28.2 },
  { schemeCode: "103", name: "HDFC Mid-Cap Opportunities Fund", cagr: 26.1 },
  { schemeCode: "104", name: "ICICI Prudential Bluechip Fund", cagr: 17.8 },
  { schemeCode: "105", name: "SBI Long Term Equity Fund (ELSS)", cagr: 24.6 },
  { schemeCode: "106", name: "Quant Small Cap Fund", cagr: 32.5 },
  { schemeCode: "107", name: "Mirae Asset Large Cap Fund", cagr: 16.5 },
  { schemeCode: "108", name: "Kotak Emerging Equity Fund", cagr: 23.4 },
  { schemeCode: "109", name: "DSP Small Cap Fund", cagr: 24.8 },
  { schemeCode: "110", name: "Axis Bluechip Fund", cagr: 15.2 },
];

export default function SIPCalculator() {
  const [activeTab, setActiveTab] = useState<"sip" | "lumpsum">("sip");

  // SIP state
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipDuration, setSipDuration] = useState(10);
  const [sipReturn, setSipReturn] = useState(12);

  // Lumpsum state
  const [lumpsumAmount, setLumpsumAmount] = useState(100000);
  const [lumpsumDuration, setLumpsumDuration] = useState(10);
  const [lumpsumReturn, setLumpsumReturn] = useState(12);

  const [results, setResults] = useState<CalcResults>({ invested: 0, returns: 0, total: 0 });

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFund, setSelectedFund] = useState<SelectedFund | null>(null);

  // ---------- Calculations ----------
  const calculateSIP = useCallback((monthly: number, years: number, rate: number): CalcResults => {
    const months = years * 12;
    const monthlyRate = rate / 12 / 100;
    const futureValue =
      monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    return { invested: monthly * months, returns: Math.max(0, futureValue - monthly * months), total: futureValue };
  }, []);

  const calculateLumpsum = useCallback((principal: number, years: number, rate: number): CalcResults => {
    const futureValue = principal * Math.pow(1 + rate / 100, years);
    return { invested: principal, returns: Math.max(0, futureValue - principal), total: futureValue };
  }, []);

  useEffect(() => {
    setResults(
      activeTab === "sip"
        ? calculateSIP(sipAmount, sipDuration, sipReturn)
        : calculateLumpsum(lumpsumAmount, lumpsumDuration, lumpsumReturn)
    );
  }, [activeTab, sipAmount, sipDuration, sipReturn, lumpsumAmount, lumpsumDuration, lumpsumReturn, calculateSIP, calculateLumpsum]);

  const searchResults = useMemo(() => {
    if (searchQuery.trim().length < 2) return [];
    return HARDCODED_SIP_FUNDS.filter((f) =>
      f.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5);
  }, [searchQuery]);

  const handleSelectFund = (fund: { schemeCode: string; name: string; cagr: number }) => {
    setSearchQuery("");
    if (activeTab === "sip") setSipReturn(fund.cagr);
    else setLumpsumReturn(fund.cagr);
    setSelectedFund(fund);
  };

  const clearSelectedFund = () => {
    setSelectedFund(null);
    if (activeTab === "sip") setSipReturn(12);
    else setLumpsumReturn(12);
  };

  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(Math.round(val));
  };

  const investedRatio = results.total > 0 ? (results.invested / results.total) * 100 : 50;
  const returnRatio = results.total > 0 ? (results.returns / results.total) * 100 : 50;

  // Pure SVG Doughnut circumference (r=65) -> 408.4
  const C = 408.4;

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E5E5E0] shadow-md font-sans">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight">
          Mutual Fund <span className="text-[#F4C430]">SIP & Lumpsum Calculator</span>
        </h2>
        <div className="w-20 h-1 mx-auto bg-[#F4C430] rounded-full mb-3 mt-3" />
        <p className="text-xs sm:text-sm text-[#6B6B6B] font-normal mt-1">
          Estimate how your regular monthly savings compound into wealth over time.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-[#F5F5F3] p-1.5 rounded-2xl inline-flex border border-[#E5E5E0]">
          <button
            type="button"
            onClick={() => { setActiveTab("sip"); clearSelectedFund(); }}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "sip" ? "bg-[#F4C430] text-[#171717] shadow-sm" : "text-[#6B6B6B] hover:text-[#171717]"
            }`}
          >
            Monthly SIP
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab("lumpsum"); clearSelectedFund(); }}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "lumpsum" ? "bg-[#F4C430] text-[#171717] shadow-sm" : "text-[#6B6B6B] hover:text-[#171717]"
            }`}
          >
            One-Time Lumpsum
          </button>
        </div>
      </div>

      {/* Fund Picker / Auto-fill banner */}
      <div className="mb-8 max-w-2xl mx-auto">
        {selectedFund ? (
          <div className="p-3.5 bg-[#FFF8D6] border border-[#F4C430]/40 rounded-2xl flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#F4C430] text-[#171717] flex items-center justify-center font-bold text-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#171717]">{selectedFund.name}</p>
                <p className="text-[11px] text-[#6B6B6B] font-medium">Applied 3Y Historical CAGR: <strong className="text-[#198754]">{selectedFund.cagr}% p.a.</strong></p>
              </div>
            </div>
            <button
              type="button"
              onClick={clearSelectedFund}
              className="p-1 text-[#6B6B6B] hover:text-[#171717] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="relative">
            <div className="relative">
              <Search className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Auto-fill return from fund (e.g. Parag Parikh, Nippon Small Cap)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#FFFDF5] border border-[#E5E5E0] rounded-2xl text-xs outline-none focus:border-[#F4C430] text-[#171717]"
              />
            </div>
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 z-30 mt-1 bg-white border border-[#E5E5E0] rounded-2xl shadow-xl overflow-hidden divide-y divide-[#E5E5E0]">
                {searchResults.map((fund) => (
                  <button
                    key={fund.schemeCode}
                    type="button"
                    onClick={() => handleSelectFund(fund)}
                    className="w-full px-4 py-2.5 text-left hover:bg-[#FFF8D6]/50 flex justify-between items-center cursor-pointer transition-colors text-xs"
                  >
                    <span className="font-bold text-[#171717]">{fund.name}</span>
                    <span className="text-[#198754] font-bold bg-[#FFF8D6] px-2 py-0.5 rounded border border-[#F4C430]/30">{fund.cagr}% CAGR</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Main Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Inputs Column */}
        <div className="lg:col-span-7 space-y-6">
          {activeTab === "sip" ? (
            <>
              {/* Monthly Investment */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-[#171717] uppercase tracking-wider">Monthly SIP Amount</label>
                  <span className="text-sm font-black text-[#171717] bg-[#FFF8D6] px-3 py-1 rounded-xl border border-[#F4C430]/40">
                    {formatINR(sipAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={100000}
                  step={500}
                  value={sipAmount}
                  onChange={(e) => setSipAmount(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5E5E0] rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                />
                <div className="flex justify-between text-[10px] text-[#6B6B6B] font-bold">
                  <span>₹500</span>
                  <span>₹1,00,000</span>
                </div>
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-[#171717] uppercase tracking-wider">Investment Period (Years)</label>
                  <span className="text-sm font-black text-[#171717] bg-[#FFFDF5] px-3 py-1 rounded-xl border border-[#E5E5E0]">
                    {sipDuration} Years
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={sipDuration}
                  onChange={(e) => setSipDuration(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5E5E0] rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                />
                <div className="flex justify-between text-[10px] text-[#6B6B6B] font-bold">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>

              {/* Expected Return */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-[#171717] uppercase tracking-wider">Expected Return Rate (p.a.)</label>
                  <span className="text-sm font-black text-[#198754] bg-[#FFF8D6] px-3 py-1 rounded-xl border border-[#F4C430]/40">
                    {sipReturn}%
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={30}
                  step={0.5}
                  value={sipReturn}
                  onChange={(e) => { setSipReturn(Number(e.target.value)); setSelectedFund(null); }}
                  className="w-full h-2 bg-[#E5E5E0] rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                />
                <div className="flex justify-between text-[10px] text-[#6B6B6B] font-bold">
                  <span>5%</span>
                  <span>30%</span>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Lumpsum Amount */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-[#171717] uppercase tracking-wider">Total Lumpsum Investment</label>
                  <span className="text-sm font-black text-[#171717] bg-[#FFF8D6] px-3 py-1 rounded-xl border border-[#F4C430]/40">
                    {formatINR(lumpsumAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={5000000}
                  step={5000}
                  value={lumpsumAmount}
                  onChange={(e) => setLumpsumAmount(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5E5E0] rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                />
                <div className="flex justify-between text-[10px] text-[#6B6B6B] font-bold">
                  <span>₹5,000</span>
                  <span>₹50 Lakh</span>
                </div>
              </div>

              {/* Lumpsum Duration */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-[#171717] uppercase tracking-wider">Time Horizon (Years)</label>
                  <span className="text-sm font-black text-[#171717] bg-[#FFFDF5] px-3 py-1 rounded-xl border border-[#E5E5E0]">
                    {lumpsumDuration} Years
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={lumpsumDuration}
                  onChange={(e) => setLumpsumDuration(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5E5E0] rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                />
                <div className="flex justify-between text-[10px] text-[#6B6B6B] font-bold">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>

              {/* Expected Return */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-[#171717] uppercase tracking-wider">Expected Return Rate (p.a.)</label>
                  <span className="text-sm font-black text-[#198754] bg-[#FFF8D6] px-3 py-1 rounded-xl border border-[#F4C430]/40">
                    {lumpsumReturn}%
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={30}
                  step={0.5}
                  value={lumpsumReturn}
                  onChange={(e) => { setLumpsumReturn(Number(e.target.value)); setSelectedFund(null); }}
                  className="w-full h-2 bg-[#E5E5E0] rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                />
                <div className="flex justify-between text-[10px] text-[#6B6B6B] font-bold">
                  <span>5%</span>
                  <span>30%</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Output & Doughnut Chart */}
        <div className="lg:col-span-5 bg-[#FFFDF5] p-6 sm:p-8 rounded-3xl border border-[#E5E5E0] flex flex-col items-center justify-between shadow-xs">
          <div className="relative w-48 h-48 my-2 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r="65"
                fill="transparent"
                stroke="#171717"
                strokeWidth="18"
              />
              <circle
                cx="80"
                cy="80"
                r="65"
                fill="transparent"
                stroke="#F4C430"
                strokeWidth="18"
                strokeDasharray={`${(returnRatio / 100) * C} ${C}`}
                strokeDashoffset="0"
                strokeLinecap="round"
                className="transition-all duration-500 ease-out"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-2">
              <p className="text-[9px] font-bold text-[#6B6B6B] uppercase tracking-widest leading-tight">
                Total Corpus
              </p>
              <p className="text-lg sm:text-xl font-black text-[#171717] mt-0.5">
                {formatINR(results.total)}
              </p>
            </div>
          </div>

          <div className="w-full space-y-2 mt-4 text-xs">
            <div className="flex justify-between items-center py-1.5 border-b border-[#E5E5E0]">
              <span className="text-[#6B6B6B] font-medium flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#171717] inline-block" />
                Invested Amount:
              </span>
              <span className="font-bold text-[#171717]">{formatINR(results.invested)}</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-[#E5E5E0]">
              <span className="text-[#6B6B6B] font-medium flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F4C430] inline-block" />
                Est. Wealth Gain:
              </span>
              <span className="font-black text-[#198754]">+{formatINR(results.returns)}</span>
            </div>
            <div className="flex justify-between items-center py-2.5 bg-white px-3 rounded-xl border border-[#E5E5E0]">
              <span className="text-[#171717] font-bold">Total Expected Value:</span>
              <span className="font-extrabold text-base text-[#171717]">{formatINR(results.total)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Strategy Insight Callout Box */}
      <div className="rounded-2xl p-5 border border-[#F4C430]/40 bg-[#FFF8D6]/40 mt-8">
        <h4 className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 text-[#171717]">
          <TrendingUp className="w-4 h-4 text-[#F4C430]" /> Strategy Insight
        </h4>
        <p className="text-xs sm:text-sm text-[#292929] leading-relaxed font-normal italic">
          A monthly SIP of ₹{sipAmount.toLocaleString("en-IN")} over {sipDuration} years at {sipReturn}% CAGR can build a substantial corpus of {formatINR(results.total)}. Systematic investing averages your entry cost through rupee-cost averaging and captures long-term compounding growth.
        </p>
      </div>
    </div>
  );
}