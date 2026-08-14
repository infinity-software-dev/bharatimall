"use client";

import React from "react";
import { Zap, Shield, Activity, Heart, Sparkles, Star, Check } from "lucide-react";

export default function HealthComparisonTable() {
  return (
    <section className="py-14 lg:py-20 bg-white border-t border-zinc-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            Side-by-Side Comparison
          </h2>
          <p className="text-sm text-gray-500">
            Compare the top-performing health plans to find your ideal match.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr style={{ background: "linear-gradient(to right, #2076C7, #1CADA3)" }} className="text-white">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider">PLAN FEATURE</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-center">HDFC OPTIMA</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-center">NIVA BUPA</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-center">ICICI ELEVATE</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-center">CARE SUPREME</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-center">STAR HEALTH</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm font-medium text-gray-700">
                {/* STARTING PREMIUM */}
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2.5 font-bold uppercase text-xs text-gray-600 tracking-wider">
                    <Zap className="w-4 h-4 text-[#2076C7]" />
                    STARTING PREMIUM
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-gray-900">₹499</td>
                  <td className="py-4 px-4 text-center font-bold text-gray-900">₹450</td>
                  <td className="py-4 px-4 text-center font-bold text-gray-900">₹520</td>
                  <td className="py-4 px-4 text-center font-bold text-gray-900">₹480</td>
                  <td className="py-4 px-4 text-center font-bold text-gray-900">₹410</td>
                </tr>

                {/* SUM INSURED */}
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2.5 font-bold uppercase text-xs text-gray-600 tracking-wider">
                    <Shield className="w-4 h-4 text-[#2076C7]" />
                    SUM INSURED
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-gray-900">2 Cr</td>
                  <td className="py-4 px-4 text-center font-bold text-gray-900">1 Cr</td>
                  <td className="py-4 px-4 text-center font-bold text-gray-900">3 Cr</td>
                  <td className="py-4 px-4 text-center font-bold text-gray-900">1 Cr</td>
                  <td className="py-4 px-4 text-center font-bold text-gray-900">25 L</td>
                </tr>

                {/* CASHLESS HOSPITALS */}
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2.5 font-bold uppercase text-xs text-gray-600 tracking-wider">
                    <Activity className="w-4 h-4 text-[#2076C7]" />
                    CASHLESS HOSPITALS
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-gray-900">13,000+</td>
                  <td className="py-4 px-4 text-center font-bold text-gray-900">10,000+</td>
                  <td className="py-4 px-4 text-center font-bold text-gray-900">9,000+</td>
                  <td className="py-4 px-4 text-center font-bold text-gray-900">11,000+</td>
                  <td className="py-4 px-4 text-center font-bold text-gray-900">14,000+</td>
                </tr>

                {/* RESTORATION */}
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2.5 font-bold uppercase text-xs text-gray-600 tracking-wider">
                    <Heart className="w-4 h-4 text-[#2076C7]" />
                    RESTORATION
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-teal-50 text-teal-600 border border-teal-200">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-teal-600">Unlimited</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-teal-50 text-teal-600 border border-teal-200">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-teal-600">Unlimited</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-teal-50 text-teal-600 border border-teal-200">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  </td>
                </tr>

                {/* MATERNITY */}
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2.5 font-bold uppercase text-xs text-gray-600 tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#2076C7]" />
                    MATERNITY
                  </td>
                  <td className="py-4 px-4 text-center text-gray-500 font-medium">Optional</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-teal-50 text-teal-600 border border-teal-200">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center text-gray-500 font-medium">Optional</td>
                  <td className="py-4 px-4 text-center text-gray-500 font-medium">Optional</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-teal-50 text-teal-600 border border-teal-200">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  </td>
                </tr>

                {/* ROOM RENT LIMIT */}
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2.5 font-bold uppercase text-xs text-gray-600 tracking-wider">
                    <Star className="w-4 h-4 text-[#2076C7]" />
                    ROOM RENT LIMIT
                  </td>
                  <td className="py-4 px-4 text-center font-semibold text-gray-800">No Limit</td>
                  <td className="py-4 px-4 text-center font-semibold text-gray-800">No Limit</td>
                  <td className="py-4 px-4 text-center font-semibold text-gray-800">No Limit</td>
                  <td className="py-4 px-4 text-center font-semibold text-gray-800">No Limit</td>
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
