"use client";
import React from "react";
import { motion } from "framer-motion";
interface StrategyData {
  type: string;
  strategy: string;
  marketCap: string;
  risk: "LOW" | "MODERATE" | "HIGH" | "VERY HIGH";
  horizon: string;
  bestSuited: string;
}
const STRATEGIES: StrategyData[] = [
  {
    type: "Large Cap Funds",
    strategy: "Invest in stable blue-chip companies",
    marketCap: "Large Cap",
    risk: "MODERATE",
    horizon: "3-5 yrs",
    bestSuited: "Conservative Investors",
  },
  {
    type: "Mid Cap Funds",
    strategy: "Focus on growing mid-size companies",
    marketCap: "Mid Cap",
    risk: "HIGH",
    horizon: "5+ yrs",
    bestSuited: "Growth Investors",
  },
  {
    type: "Small Cap Funds",
    strategy: "Invest in emerging companies",
    marketCap: "Small Cap",
    risk: "VERY HIGH",
    horizon: "5-7 yrs",
    bestSuited: "Aggressive Investors",
  },
  {
    type: "Flexi Cap Funds",
    strategy: "Dynamic allocation across caps",
    marketCap: "Multi Cap",
    risk: "HIGH",
    horizon: "5+ yrs",
    bestSuited: "Long-term investors",
  },
  {
    type: "ELSS Funds",
    strategy: "Equity funds with tax benefits",
    marketCap: "Multi Cap",
    risk: "HIGH",
    horizon: "3 yrs",
    bestSuited: "Tax-saving investors",
  },
  {
    type: "Index Funds",
    strategy: "Passive funds tracking an index",
    marketCap: "Market Index",
    risk: "MODERATE",
    horizon: "5+ yrs",
    bestSuited: "Low-cost investors",
  },
  {
    type: "Liquid Funds",
    strategy: "Short-term debt instruments",
    marketCap: "Debt",
    risk: "LOW",
    horizon: "< 1 yr",
    bestSuited: "Parking surplus cash",
  },
  {
    type: "Hybrid Funds",
    strategy: "Mix of equity and debt",
    marketCap: "Mixed",
    risk: "MODERATE",
    horizon: "3-5 yrs",
    bestSuited: "Balanced investors",
  },
];
const getRiskStyle = (risk: string) => {
  switch (risk) {
    case "LOW":
      return "bg-[#FFF8D6] text-[#198754] border-[#198754]/30";
    case "MODERATE":
      return "bg-[#FFF8D6] text-[#171717] border-[#F4C430]/40";
    case "HIGH":
      return "bg-[#FFFDF5] text-[#D64545] border-[#D64545]/30";
    case "VERY HIGH":
      return "bg-red-50 text-[#D64545] border-red-200";
    default:
      return "bg-[#F5F5F3] text-[#6B6B6B] border-[#E5E5E0]";
  }
};

export default function FundTypeComparison() {
  return (
    <section className="py-20 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight"
          >
            Mutual Fund Strategy <span className="text-[#E91E63]">Comparison</span>
          </motion.h2>
          <div className="w-20 h-1 mx-auto bg-[#E91E63] rounded-full mb-4" />
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#6B6B6B] max-w-2xl mx-auto text-base font-normal"
          >
            Compare different mutual fund categories to find the perfect match for your financial goals, risk appetite, and investment horizon.
          </motion.p>
        </div>
        {/* Table Container */}
        <div className="bg-white rounded-[2rem] border border-[#E5E5E0] shadow-md overflow-hidden">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-[#FFFDF5] border-b border-[#E5E5E0]">
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-[#171717]">Fund Type</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-[#171717]">Strategy</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-[#171717]">Market Cap Bias</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-[#171717]">Risk</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-[#171717]">Horizon</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-[#171717]">Best Suited For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E0]">
                {STRATEGIES.map((item, idx) => (
                  <motion.tr 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="hover:bg-[#FFFDF5] transition-colors group"
                  >
                    <td className="px-6 py-5">
                      <span className="text-sm font-bold text-[#171717] group-hover:text-[#E91E63] transition-colors">
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm font-medium text-[#292929] line-clamp-1">
                        {item.strategy}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm font-bold text-[#171717]">
                        {item.marketCap}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`text-[9px] font-bold px-3 py-1 rounded-full border shadow-xs ${getRiskStyle(item.risk)}`}>
                        {item.risk}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm font-bold text-[#171717]">
                        {item.horizon}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm font-medium text-[#6B6B6B] italic">
                        {item.bestSuited}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #FFFDF5;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #F4C430;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}
