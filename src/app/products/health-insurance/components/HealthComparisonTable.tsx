"use client";

import React from "react";
import { Zap, Shield, Activity, Heart, Sparkles, Star, Check } from "lucide-react";

export default function HealthComparisonTable() {
  return (
    <section className="py-14 lg:py-20 bg-[#FFFFFF] border-t border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Side-by-Side Comparison
          </h2>
          <p className="text-sm text-[#6B6B6B]">
            Compare the top-performing health plans to find your ideal match.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#E5E5E0] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr style={{ background: "#FFF8D6" }} className="text-[#171717]">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider">PLAN FEATURE</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-center text-[#E91E63]">HDFC OPTIMA</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-center text-[#E91E63]">NIVA BUPA</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-center text-[#E91E63]">ICICI ELEVATE</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-center text-[#E91E63]">CARE SUPREME</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-center text-[#E91E63]">STAR HEALTH</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm font-medium text-[#292929]">
                {/* STARTING PREMIUM */}
                <tr className="hover:bg-[#F5F5F3] transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2.5 font-bold uppercase text-xs text-[#292929] tracking-wider">
                    <Zap className="w-4 h-4 text-[#171717]" />
                    STARTING PREMIUM
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">₹499</td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">₹450</td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">₹520</td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">₹480</td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">₹410</td>
                </tr>

                {/* SUM INSURED */}
                <tr className="hover:bg-[#F5F5F3] transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2.5 font-bold uppercase text-xs text-[#292929] tracking-wider">
                    <Shield className="w-4 h-4 text-[#171717]" />
                    SUM INSURED
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">2 Cr</td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">1 Cr</td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">3 Cr</td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">1 Cr</td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">25 L</td>
                </tr>

                {/* CASHLESS HOSPITALS */}
                <tr className="hover:bg-[#F5F5F3] transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2.5 font-bold uppercase text-xs text-[#292929] tracking-wider">
                    <Activity className="w-4 h-4 text-[#171717]" />
                    CASHLESS HOSPITALS
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">13,000+</td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">10,000+</td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">9,000+</td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">11,000+</td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">14,000+</td>
                </tr>

                {/* RESTORATION */}
                <tr className="hover:bg-[#F5F5F3] transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2.5 font-bold uppercase text-xs text-[#292929] tracking-wider">
                    <Heart className="w-4 h-4 text-[#171717]" />
                    RESTORATION
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#F5F5F3] text-[#171717] border border-[#E5E5E0]">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">Unlimited</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#F5F5F3] text-[#171717] border border-[#E5E5E0]">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-[#171717]">Unlimited</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#F5F5F3] text-[#171717] border border-[#E5E5E0]">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  </td>
                </tr>

                {/* MATERNITY */}
                <tr className="hover:bg-[#F5F5F3] transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2.5 font-bold uppercase text-xs text-[#292929] tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#171717]" />
                    MATERNITY
                  </td>
                  <td className="py-4 px-4 text-center text-[#6B6B6B] font-medium">Optional</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#F5F5F3] text-[#171717] border border-[#E5E5E0]">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center text-[#6B6B6B] font-medium">Optional</td>
                  <td className="py-4 px-4 text-center text-[#6B6B6B] font-medium">Optional</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#F5F5F3] text-[#171717] border border-[#E5E5E0]">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  </td>
                </tr>

                {/* ROOM RENT LIMIT */}
                <tr className="hover:bg-[#F5F5F3] transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2.5 font-bold uppercase text-xs text-[#292929] tracking-wider">
                    <Star className="w-4 h-4 text-[#171717]" />
                    ROOM RENT LIMIT
                  </td>
                  <td className="py-4 px-4 text-center font-semibold text-[#292929]">No Limit</td>
                  <td className="py-4 px-4 text-center font-semibold text-[#292929]">No Limit</td>
                  <td className="py-4 px-4 text-center font-semibold text-[#292929]">No Limit</td>
                  <td className="py-4 px-4 text-center font-semibold text-[#292929]">No Limit</td>
                  <td className="py-4 px-4 text-center font-bold text-rose-500">Capped</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
