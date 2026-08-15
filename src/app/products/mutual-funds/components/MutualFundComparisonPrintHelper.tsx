"use client";
import React, { useRef } from "react";
import { X, Printer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface HistoryPoint { date: string | Date; nav: number; }
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
  expenseRatio?: string;
  aum?: string;
  history: HistoryPoint[];
}

interface MutualFundComparisonPrintHelperProps {
  selectedFunds: CompareFund[];
  isPreviewOpen: boolean;
  setIsPreviewOpen: (open: boolean) => void;
  logoBase64?: string;
  chartImageSrc?: string;
  CHART_COLORS?: string[];
  getReturnColor?: (returnStr: string) => string;
}

export default function MutualFundComparisonPrintHelper({
  selectedFunds,
  isPreviewOpen,
  setIsPreviewOpen,
  CHART_COLORS = ["#171717", "#F4C430", "#198754", "#6B6B6B"],
}: MutualFundComparisonPrintHelperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  if (!isPreviewOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E5E0] relative max-h-[90vh] overflow-y-auto font-sans"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F4C430]">Comparison Report</span>
              <h3 className="text-2xl font-black text-[#171717] mt-1">Mutual Fund Performance Report</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#171717] bg-[#F4C430] hover:bg-[#FFD21F] hover:shadow-md cursor-pointer transition-all"
              >
                <Printer className="w-4 h-4" />
                Print / Save PDF
              </button>
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="p-2 rounded-full text-[#6B6B6B] hover:text-[#171717] hover:bg-[#F5F5F3] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Report Body */}
          <div ref={containerRef} className="space-y-6 text-left">
            <div className="p-4 rounded-2xl bg-[#FFF8D6] border border-[#F4C430]/40 flex justify-between items-center shadow-xs">
              <div>
                <p className="text-xs font-bold text-[#6B6B6B] uppercase">Generated For</p>
                <p className="text-base font-bold text-[#171717]">Bharti Share Market Investor</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-[#6B6B6B] uppercase">Comparison Count</p>
                <p className="text-base font-black text-[#171717]">{selectedFunds.length} Funds</p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto border border-[#E5E5E0] rounded-2xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="text-xs uppercase tracking-wider text-white bg-[#171717]">
                    <th className="py-3 px-4 font-extrabold">Fund Name</th>
                    <th className="py-3 px-4 font-extrabold">Category</th>
                    <th className="py-3 px-4 font-extrabold">Risk</th>
                    <th className="py-3 px-4 font-extrabold">Latest NAV</th>
                    <th className="py-3 px-4 font-extrabold">1Y Return</th>
                    <th className="py-3 px-4 font-extrabold">3Y CAGR</th>
                    <th className="py-3 px-4 font-extrabold">5Y CAGR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5E0] text-sm">
                  {selectedFunds.map((fund, idx) => (
                    <tr key={fund.id} className="hover:bg-[#FFFDF5]">
                      <td className="py-3 px-4 font-bold text-[#171717] flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full inline-block shrink-0" style={{ backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] }} />
                        {fund.name}
                      </td>
                      <td className="py-3 px-4 text-xs font-medium text-[#292929]">{fund.category}</td>
                      <td className="py-3 px-4">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40">
                          {fund.risk}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-bold text-[#171717]">₹{fund.nav}</td>
                      <td className="py-3 px-4 font-black text-[#198754]">+{fund.return1Y}</td>
                      <td className="py-3 px-4 font-black text-[#198754]">+{fund.return3Y}</td>
                      <td className="py-3 px-4 font-black text-[#198754]">+{fund.return5Y}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-[#6B6B6B] text-center pt-4 border-t border-[#E5E5E0]">
              * Mutual fund investments are subject to market risks. Past performance does not guarantee future returns.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}