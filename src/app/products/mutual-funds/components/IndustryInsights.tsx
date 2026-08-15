"use client";
import React, { useState } from "react";
import { Award, Users, BarChart3, Database, TrendingUp } from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";

export default function IndustryInsights() {
  const [activeTab, setActiveTab] = useState<"aum" | "sip">("aum");

  const statCards = [
    {
      title: "Total Industry AUM",
      value: "₹74.30 Lakh Cr",
      desc: "Assets Managed by Indian Mutual Funds (2026)",
      icon: <Database className="w-6 h-6 text-[#171717]" />,
      bg: "bg-[#FFF8D6] border border-[#F4C430]/40",
    },
    {
      title: "Monthly SIP Inflow",
      value: "₹24,516 Cr",
      desc: "Retail investor contribution monthly (2026)",
      icon: <BarChart3 className="w-6 h-6 text-[#171717]" />,
      bg: "bg-[#FFF8D6] border border-[#F4C430]/40",
    },
    {
      title: "Active SIP Accounts",
      value: "8.7+ Crores",
      desc: "Individual investment folders registered",
      icon: <Users className="w-6 h-6 text-[#171717]" />,
      bg: "bg-[#FFF8D6] border border-[#F4C430]/40",
    },
    {
      title: "10-Year Index Return",
      value: "~13.8% CAGR",
      desc: "Nifty 50 historical average compounding rate",
      icon: <TrendingUp className="w-6 h-6 text-[#198754]" />,
      bg: "bg-[#FFF8D6] border border-[#F4C430]/40",
    },
  ];

  // Chart Data definitions
  const aumChartData = [
    { year: "2016", aum: 15.63 },
    { year: "2018", aum: 22.86 },
    { year: "2020", aum: 27.04 },
    { year: "2022", aum: 37.75 },
    { year: "2024", aum: 58.91 },
    { year: "2026", aum: 74.30 },
  ];

  const sipChartData = [
    { year: "2016", sip: 3122 },
    { year: "2018", sip: 6700 },
    { year: "2020", sip: 8641 },
    { year: "2022", sip: 11305 },
    { year: "2024", sip: 19187 },
    { year: "2026", sip: 24516 },
  ];

  return (
    <div className="py-16 bg-[#FFFDF5] overflow-hidden font-sans border-y border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF8D6] text-[#171717] mb-3 border border-[#F4C430]/40 shadow-xs">
            <Award className="w-4 h-4 text-[#E91E63]" /> AMFI & Industry Data
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
            Mutual Fund Growth & <span className="text-[#E91E63]">Statistics</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-[#E91E63] rounded-full mb-3" />
          <p className="text-[#6B6B6B] font-normal text-base">
            Understand the immense growth and trust in the Indian Mutual Fund industry, backed by verified AMFI industry figures.
          </p>
        </div>

        {/* Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {statCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#E5E5E0] shadow-sm hover:shadow-md hover:border-[#E91E63] transition-all flex items-start gap-4 group"
            >
              <div className={`p-3 rounded-xl ${card.bg} shrink-0 group-hover:scale-105 transition-transform`}>
                {card.icon}
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">{card.title}</h4>
                <p className="text-2xl font-extrabold text-[#171717] group-hover:text-[#E91E63] transition-colors mb-1">{card.value}</p>
                <p className="text-xs text-[#6B6B6B] font-normal leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Card */}
        <div className="bg-white rounded-3xl border border-[#E5E5E0] p-6 md:p-8 shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h3 className="text-xl font-extrabold text-[#171717]">
                {activeTab === "aum" ? "Indian Mutual Fund Industry AUM" : "Monthly SIP Inflow Trend"}
              </h3>
              <p className="text-xs text-[#6B6B6B] font-normal mt-1">
                {activeTab === "aum" 
                  ? "Overall assets under management showing long-term compounding growth." 
                  : "Growth in systematic investment plan (SIP) monthly inflows in ₹ Crores."}
              </p>
            </div>
            
            {/* Tabs Toggle */}
            <div className="flex bg-[#F5F5F3] p-1 rounded-xl self-start sm:self-center border border-[#E5E5E0]">
              <button
                type="button"
                onClick={() => setActiveTab("aum")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "aum"
                    ? "bg-[#F4C430] text-[#171717] shadow-sm"
                    : "text-[#6B6B6B] hover:text-[#171717]"
                }`}
              >
                AUM Growth
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("sip")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "sip"
                    ? "bg-[#F4C430] text-[#171717] shadow-sm"
                    : "text-[#6B6B6B] hover:text-[#171717]"
                }`}
              >
                SIP Contribution
              </button>
            </div>
          </div>

          <div className="h-[300px] sm:h-[350px] md:h-[400px] w-full">
            {activeTab === "aum" ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={aumChartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="aumGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F4C430" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#F4C430" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E0" />
                  <XAxis dataKey="year" tick={{ fill: "#6B6B6B", fontSize: 12, fontWeight: 600 }} />
                  <YAxis tick={{ fill: "#6B6B6B", fontSize: 12, fontWeight: 600 }} unit="L Cr" />
                  <Tooltip 
                    formatter={(val: any) => [`₹${val} Lakh Crore`, "Total AUM"]}
                    contentStyle={{ borderRadius: '12px', border: '1px solid #E5E5E0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                  />
                  <Area type="monotone" dataKey="aum" stroke="#171717" strokeWidth={3} fillOpacity={1} fill="url(#aumGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sipChartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E0" />
                  <XAxis dataKey="year" tick={{ fill: "#6B6B6B", fontSize: 12, fontWeight: 600 }} />
                  <YAxis tick={{ fill: "#6B6B6B", fontSize: 12, fontWeight: 600 }} unit="Cr" />
                  <Tooltip 
                    formatter={(val: any) => [`₹${val} Crore`, "Monthly SIP Inflow"]}
                    contentStyle={{ borderRadius: '12px', border: '1px solid #E5E5E0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                  />
                  <Bar dataKey="sip" fill="#F4C430" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
