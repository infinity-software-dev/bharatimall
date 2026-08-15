"use client";

import React from "react";
import { Shield, TrendingUp, Info, Activity } from "lucide-react";

export default function MarketInsights() {
  return (
    <section className="py-14 lg:py-20 bg-[#F5F5F3] border-t border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Market Insights & Claim Transparency
          </h2>
          <p className="text-sm text-[#6B6B6B]">
            Data-driven decisions for your family&apos;s future. We track claim performance and market trends to ensure you always have the best protection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Claim Settlement Leaderboard Card */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#E5E5E0] shadow-xl space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#171717]">Claim Settlement Leaderboard</h3>
                  <p className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest">EFFICIENCY RANKING 2024-25</p>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="pt-6 pb-2">
                <div className="h-48 flex items-end justify-between gap-3 px-2 border-b border-[#E5E5E0]">
                  {[
                    { name: "HDFC ERGO", csr: 98, height: "92%" },
                    { name: "Tata AIG", csr: 98, height: "92%" },
                    { name: "ICICI Lombard", csr: 97, height: "86%" },
                    { name: "Star Health", csr: 97, height: "82%" },
                    { name: "Niva Bupa", csr: 96, height: "76%" },
                    { name: "Care Health", csr: 95, height: "68%" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                      <span className="text-[10px] font-bold text-[#292929] opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.csr}%
                      </span>
                      <div
                        className="w-full rounded-t-lg transition-all duration-500 group-hover:brightness-110"
                        style={{
                          height: item.height,
                          background: "linear-gradient(to top, #FFD21F, #F4C430)"
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-1 pt-2 px-1 text-[9px] font-bold text-[#6B6B6B] text-center">
                  <span className="flex-1 truncate">HDFC ERGO</span>
                  <span className="flex-1 truncate">Tata AIG</span>
                  <span className="flex-1 truncate">ICICI Lombard</span>
                  <span className="flex-1 truncate">Star Health</span>
                  <span className="flex-1 truncate">Niva Bupa</span>
                  <span className="flex-1 truncate">Care Health</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#F5F5F3] rounded-xl border border-[#E5E5E0] text-xs text-[#6B6B6B] flex items-start gap-2">
              <Info className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#171717]">Why CSR Matters:</strong> Higher Claim Settlement Ratio indicates reliability. We partner with insurers maintaining 95%+ CSR.
              </p>
            </div>
          </div>

          {/* Medical Inflation Trend Card */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#E5E5E0] shadow-xl space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#171717]">Medical Inflation Trend</h3>
                  <p className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest">RISING COST OF CRITICAL CARE (IN INR)</p>
                </div>
              </div>

              {/* Line Chart */}
              <div className="pt-6 pb-2">
                <div className="h-48 relative flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 160">
                    <line x1="0" y1="20" x2="400" y2="20" stroke="#f1f5f9" strokeDasharray="3" />
                    <line x1="0" y1="60" x2="400" y2="60" stroke="#f1f5f9" strokeDasharray="3" />
                    <line x1="0" y1="100" x2="400" y2="100" stroke="#f1f5f9" strokeDasharray="3" />
                    <line x1="0" y1="140" x2="400" y2="140" stroke="#e2e8f0" />

                    <defs>
                      <linearGradient id="inflationGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F4C430" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#FFD21F" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M 20 145 Q 100 135 180 105 T 380 25 L 380 150 L 20 150 Z"
                      fill="url(#inflationGrad)"
                    />
                    <path
                      d="M 20 145 Q 100 135 180 105 T 380 25"
                      fill="none"
                      stroke="#F4C430"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <circle cx="20" cy="145" r="4" fill="#ffffff" stroke="#F4C430" strokeWidth="2.5" />
                    <circle cx="100" cy="138" r="4" fill="#ffffff" stroke="#F4C430" strokeWidth="2.5" />
                    <circle cx="180" cy="105" r="4" fill="#ffffff" stroke="#F4C430" strokeWidth="2.5" />
                    <circle cx="280" cy="65" r="4" fill="#ffffff" stroke="#F4C430" strokeWidth="2.5" />
                    <circle cx="380" cy="25" r="4" fill="#ffffff" stroke="#F4C430" strokeWidth="2.5" />
                  </svg>
                </div>
                <div className="flex items-center justify-between text-[10px] font-bold text-[#6B6B6B] pt-2 px-1">
                  <span>2014 (~₹2.5L)</span>
                  <span>2016</span>
                  <span>2019</span>
                  <span>2022</span>
                  <span>2025 (~₹8.8L)</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#F5F5F3] rounded-xl border border-[#E5E5E0] text-xs text-[#6B6B6B] flex items-start gap-2">
              <Activity className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#F4C430]">The Urgency:</strong> Healthcare costs in India are rising at <strong>14% annually</strong>. Early coverage secures your financial future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
