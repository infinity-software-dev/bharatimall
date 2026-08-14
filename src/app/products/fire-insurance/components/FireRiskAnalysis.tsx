"use client";
import { useState } from "react";
import { Activity, AlertTriangle, Zap } from "lucide-react";

export default function FireRiskAnalysis() {
  const [activeLocationHover, setActiveLocationHover] = useState<string | null>(null);

  // Data for Fatality by Location (NCRB 2023)
  const locationData = [
    { label: "Residential", percentage: 54, color: "#94a3b8", highlight: "Over 50% in apartments & houses" },
    { label: "Factories", percentage: 18, color: "#1CADA3", highlight: "Industrial zones & chemical plants" },
    { label: "Commercial", percentage: 12, color: "#2076C7", highlight: "Malls, retail shops & offices" },
    { label: "Vehicles", percentage: 9, color: "#38bdf8", highlight: "EVs, commercial transport & cars" },
    { label: "Others", percentage: 7, color: "#6366f1", highlight: "Storage yards & public places" },
  ];

  // Data for Primary Causes
  const causesData = [
    { label: "Short Circuit", percentage: 62, count: "62%", color: "from-[#1CADA3] to-[#2076C7]", note: "Aging wiring & heavy load spikes" },
    { label: "Negligence", percentage: 24, count: "24%", color: "from-teal-500 to-teal-600", note: "Improper storage & discarded flammables" },
    { label: "Gas Leak", percentage: 18, count: "18%", color: "from-sky-500 to-sky-600", note: "LPG cylinder & pipeline failures" },
    { label: "Environmental", percentage: 14, count: "14%", color: "from-teal-400 to-teal-500", note: "Lightning strikes & heatwaves" },
    { label: "Others", percentage: 8, count: "8%", color: "from-cyan-500 to-cyan-600", note: "Boiler overheating & static discharge" },
  ];

  return (
    <section className="py-14 md:py-20 bg-slate-50/70 border-b border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#1CADA3] text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Activity className="w-3.5 h-3.5" />
            <span>Data-Driven Risk Analysis</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight uppercase">
            Understanding Fire Risks <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#2076C7] to-[#1CADA3] bg-clip-text text-transparent">
              In Modern India
            </span>
          </h2>

          <p className="mt-4 text-zinc-600 font-medium text-sm sm:text-base md:text-lg leading-relaxed">
            Market data (NCRB 2023) highlights that over 50% of fire fatalities occur in residential buildings, with electrical short circuits being the leading cause.
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Fatality by Location Donut Chart */}
          <div className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-sm border border-zinc-200/80 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2076C7] flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#2076C7] tracking-tight uppercase">
                    Fatality By Location
                  </h3>
                  <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                    NCRB 2023 Dataset
                  </p>
                </div>
              </div>

              {/* Donut Chart Representation */}
              <div className="flex flex-col items-center justify-center my-6">
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background track */}
                    <circle cx="50" cy="50" r="38" stroke="#f1f5f9" strokeWidth="16" fill="transparent" />
                    
                    {/* Slices calculated for 100% (Circumference = 2 * pi * 38 = 238.76) */}
                    {/* Residential: 54% (128.9) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#94a3b8"
                      strokeWidth="16"
                      fill="transparent"
                      strokeDasharray="128.9 238.76"
                      strokeDashoffset="0"
                      className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                      onMouseEnter={() => setActiveLocationHover("Residential")}
                      onMouseLeave={() => setActiveLocationHover(null)}
                    />
                    {/* Factories: 18% (43.0) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#1CADA3"
                      strokeWidth="16"
                      fill="transparent"
                      strokeDasharray="43.0 238.76"
                      strokeDashoffset="-128.9"
                      className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                      onMouseEnter={() => setActiveLocationHover("Factories")}
                      onMouseLeave={() => setActiveLocationHover(null)}
                    />
                    {/* Commercial: 12% (28.6) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#2076C7"
                      strokeWidth="16"
                      fill="transparent"
                      strokeDasharray="28.6 238.76"
                      strokeDashoffset="-171.9"
                      className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                      onMouseEnter={() => setActiveLocationHover("Commercial")}
                      onMouseLeave={() => setActiveLocationHover(null)}
                    />
                    {/* Vehicles: 9% (21.5) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#38bdf8"
                      strokeWidth="16"
                      fill="transparent"
                      strokeDasharray="21.5 238.76"
                      strokeDashoffset="-200.5"
                      className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                      onMouseEnter={() => setActiveLocationHover("Vehicles")}
                      onMouseLeave={() => setActiveLocationHover(null)}
                    />
                    {/* Others: 7% (16.7) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#6366f1"
                      strokeWidth="16"
                      fill="transparent"
                      strokeDasharray="16.7 238.76"
                      strokeDashoffset="-222.0"
                      className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                      onMouseEnter={() => setActiveLocationHover("Others")}
                      onMouseLeave={() => setActiveLocationHover(null)}
                    />
                  </svg>

                  {/* Inner Donut Center Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none p-4">
                    <span className="text-2xl sm:text-3xl font-black text-zinc-800">
                      {activeLocationHover ? 
                        locationData.find(l => l.label === activeLocationHover)?.percentage + "%" 
                        : "54%"}
                    </span>
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-tight">
                      {activeLocationHover || "Residential"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Legend */}
            <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-wider">
              {locationData.map((item) => (
                <div 
                  key={item.label}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    activeLocationHover === item.label ? "bg-zinc-100 text-zinc-900" : "text-zinc-500"
                  }`}
                  onMouseEnter={() => setActiveLocationHover(item.label)}
                  onMouseLeave={() => setActiveLocationHover(null)}
                >
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span>{item.label} ({item.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Primary Causes Horizontal Bar Chart */}
          <div className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-sm border border-zinc-200/80 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#1CADA3] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight uppercase">
                    Primary Causes
                  </h3>
                  <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                    India Market Trends
                  </p>
                </div>
              </div>

              {/* Horizontal Bar Chart */}
              <div className="space-y-5 my-4">
                {causesData.map((item) => (
                  <div key={item.label} className="group">
                    <div className="flex justify-between items-center text-xs sm:text-sm font-bold mb-1.5">
                      <span className="text-zinc-700">{item.label}</span>
                      <span className="text-[#1CADA3] font-black">{item.count}</span>
                    </div>

                    <div className="w-full h-3.5 bg-zinc-100 rounded-full overflow-hidden p-0.5">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-700 ease-out group-hover:brightness-110`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    
                    <p className="text-[11px] text-zinc-400 mt-1 font-medium hidden sm:block">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Takeaway Tip */}
            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-3 bg-amber-50/60 rounded-xl p-3 text-amber-800 text-xs font-semibold">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>90% of short-circuit damage can be reimbursed under standard Fire policies.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
