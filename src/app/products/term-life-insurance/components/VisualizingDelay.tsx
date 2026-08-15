"use client";

import React, { useState } from "react";
import { Info, TrendingUp, Sparkles } from "lucide-react";

export default function VisualizingDelay() {
  const [activeAgeIndex, setActiveAgeIndex] = useState<number | null>(null);

  const costData = [
    { age: "25 Yrs", cost: "₹8k", heightPercent: 12, raw: 8000 },
    { age: "30 Yrs", cost: "₹12k", heightPercent: 18, raw: 12000 },
    { age: "35 Yrs", cost: "₹18k", heightPercent: 26, raw: 18000 },
    { age: "40 Yrs", cost: "₹28k", heightPercent: 42, raw: 28000 },
    { age: "45 Yrs", cost: "₹48k", heightPercent: 68, raw: 48000 },
    { age: "50 Yrs", cost: "₹78k", heightPercent: 96, raw: 78000 },
  ];

  const yCostLabels = ["₹80k", "₹70k", "₹60k", "₹50k", "₹40k", "₹30k", "₹20k", "₹10k", "₹0k"];
  const yWealthLabels = ["₹1.6Cr", "₹1.4Cr", "₹1.2Cr", "₹1.0Cr", "₹80L", "₹60L", "₹40L", "₹20L", "₹0"];
  const xWealthLabels = ["0 Yr", "5 Yrs", "10 Yrs", "15 Yrs", "20 Yrs", "25 Yrs"];

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] relative overflow-hidden font-sans border-t border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold font-sans drop-shadow-xs text-[#171717]">
            Visualizing the Impact of Delay
          </h2>
          <p className="text-[#6B6B6B] text-sm sm:text-base font-normal leading-relaxed">
            Don&apos;t just take our word for it. Analyze the numbers and see how time affects your premium costs and long-term wealth growth.
          </p>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: Cost of Delay */}
          <div className="bg-[#fafbfd] rounded-3xl border border-[#E5E5E0] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] border border-[#E5E5E0] flex items-center justify-center text-[#171717]">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#171717]">Cost of Delay</h3>
                  <p className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest">
                    ANNUAL PREMIUM BY ENTRY AGE
                  </p>
                </div>
              </div>

              {/* Bar Chart Area */}
              <div className="h-64 sm:h-72 w-full flex items-end pt-6 pb-2 relative">
                {/* Y-Axis Grid & Labels */}
                <div className="flex flex-col justify-between h-full pr-3 text-[10px] font-semibold text-[#6B6B6B] select-none">
                  {yCostLabels.map((lbl, idx) => (
                    <span key={idx} className="leading-none">{lbl}</span>
                  ))}
                </div>

                {/* Bars Container */}
                <div className="flex-1 h-full border-b border-l border-[#E5E5E0] grid grid-cols-6 items-end gap-2 sm:gap-4 px-2 sm:px-4 relative">
                  {/* Subtle horizontal grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30">
                    {yCostLabels.map((_, i) => (
                      <div key={i} className="border-b border-dashed border-slate-300 w-full" />
                    ))}
                  </div>

                  {costData.map((item, idx) => {
                    const isHovered = activeAgeIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="relative flex flex-col items-center h-full justify-end group cursor-pointer"
                        onMouseEnter={() => setActiveAgeIndex(idx)}
                        onMouseLeave={() => setActiveAgeIndex(null)}
                      >
                        {/* Tooltip on hover */}
                        {isHovered && (
                          <div className="absolute -top-7 bg-slate-900 text-[#171717] text-[10px] font-bold px-2 py-0.5 rounded shadow-md whitespace-nowrap z-20 animate-fade-in">
                            {item.cost}/yr
                          </div>
                        )}

                        {/* Bar */}
                        <div
                          style={{ height: `${item.heightPercent}%` }}
                          className="w-full max-w-[42px] bg-[#FFF8D6] rounded-t-lg transition-all duration-300 group-hover:brightness-110 group-hover:scale-y-[1.02] shadow-xs"
                        />

                        {/* X-Label */}
                        <span className="text-[10px] font-bold text-[#6B6B6B] mt-2 whitespace-nowrap">
                          {item.age}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Insight Alert */}
            <div className="mt-8 p-4 rounded-2xl bg-[#F5F5F3] border border-[#E5E5E0] flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
              <p className="text-xs text-[#292929] leading-relaxed">
                <strong className="text-[#171717]">Audit Insight:</strong> Starting cover at age 25 vs 35 can save you up to <strong className="text-[#171717]">₹4.2 Lakhs</strong> in lifetime premiums.
              </p>
            </div>
          </div>

          {/* Card 2: Wealth Growth Comparison */}
          <div className="bg-[#fafbfd] rounded-3xl border border-[#E5E5E0] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] border border-[#E5E5E0] flex items-center justify-center text-[#171717]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#171717]">Wealth Growth Comparison</h3>
                    <p className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest">
                      GROWTH OF ₹1.5L ANNUAL INVESTMENT OVER 25 YEARS
                    </p>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-end gap-4 text-[10px] font-bold text-[#292929] mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#F4C430]" />
                  <span>Term Life Insurance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 border-t border-dashed border-slate-400" />
                  <span>Traditional FD</span>
                </div>
              </div>

              {/* Line / Area Chart Area */}
              <div className="h-64 sm:h-72 w-full flex items-end pt-2 pb-2 relative">
                {/* Y-Axis Labels */}
                <div className="flex flex-col justify-between h-full pr-3 text-[10px] font-semibold text-[#6B6B6B] select-none">
                  {yWealthLabels.map((lbl, idx) => (
                    <span key={idx} className="leading-none">{lbl}</span>
                  ))}
                </div>

                {/* SVG Graph Container */}
                <div className="flex-1 h-full border-b border-l border-[#E5E5E0] relative flex flex-col justify-end">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30">
                    {yWealthLabels.map((_, i) => (
                      <div key={i} className="border-b border-dashed border-slate-300 w-full" />
                    ))}
                  </div>

                  {/* SVG Chart Curves */}
                  <svg
                    viewBox="0 0 500 240"
                    preserveAspectRatio="none"
                    className="w-full h-full absolute inset-0 overflow-visible"
                  >
                    <defs>
                      <linearGradient id="ulipGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FFD21F" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#FFD21F" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Area fill for ULIP */}
                    <path
                      d="M 15 228 Q 120 220 220 180 T 380 90 T 485 24 L 485 235 L 15 235 Z"
                      fill="url(#ulipGradient)"
                    />

                    {/* Traditional FD Line (Dashed) */}
                    <path
                      d="M 15 228 Q 120 215 220 195 T 380 165 T 485 130"
                      fill="none"
                      stroke="#94a3b8"
                      strokeWidth="2.5"
                      strokeDasharray="6,4"
                    />

                    {/* ULIP Line (Teal Smooth) */}
                    <path
                      d="M 15 228 Q 120 220 220 180 T 380 90 T 485 24"
                      fill="none"
                      stroke="#FFD21F"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Data Points on ULIP */}
                    <circle cx="15" cy="228" r="4" fill="#ffffff" stroke="#FFD21F" strokeWidth="2.5" />
                    <circle cx="110" cy="216" r="4" fill="#ffffff" stroke="#FFD21F" strokeWidth="2.5" />
                    <circle cx="210" cy="184" r="4" fill="#ffffff" stroke="#FFD21F" strokeWidth="2.5" />
                    <circle cx="310" cy="138" r="4" fill="#ffffff" stroke="#FFD21F" strokeWidth="2.5" />
                    <circle cx="410" cy="74" r="4" fill="#ffffff" stroke="#FFD21F" strokeWidth="2.5" />
                    <circle cx="485" cy="24" r="4.5" fill="#ffffff" stroke="#FFD21F" strokeWidth="3" />

                    {/* Data Points on FD */}
                    <circle cx="485" cy="130" r="3.5" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                  </svg>

                  {/* X-Axis Labels */}
                  <div className="w-full flex justify-between pt-2 px-1 text-[10px] font-bold text-[#6B6B6B] select-none">
                    {xWealthLabels.map((lbl, idx) => (
                      <span key={idx}>{lbl}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Insight Alert */}
            <div className="mt-8 p-4 rounded-2xl bg-[#F5F5F3] border border-[#E5E5E0] flex items-start gap-2.5">
              <TrendingUp className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
              <p className="text-xs text-[#292929] leading-relaxed">
                <strong className="text-[#171717]">Multiplier Effect:</strong> Tax-free compounding beats traditional FDs by over <strong className="text-[#171717]">2.1x</strong> in overall returns.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
