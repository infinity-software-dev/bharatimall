"use client";

import React from "react";
import { Activity, ArrowRight, ShieldCheck, Sparkles, Heart, Building2, Shield } from "lucide-react";

export default function HealthHero() {
  const scrollToPlans = () => {
    document.getElementById("plans-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCalculator = () => {
    document.getElementById("calculator-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-14 lg:pb-20">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFF8D6] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#FFF8D6] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F3] border border-[#E5E5E0] text-[#171717] text-xs font-bold tracking-wide uppercase">
              <Activity className="w-3.5 h-3.5 text-[#171717]" />
              <span>COMPREHENSIVE HEALTHCARE PROTECTION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#171717] leading-[1.12]">
              Protect Your Family,<br />
              Preserve Your Wealth.
            </h1>

            <p className="text-base sm:text-lg text-[#6B6B6B] max-w-xl font-normal leading-relaxed">
              Compare top-rated health insurance plans with 100% cashless hospitalization across 14,000+ network hospitals in India.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={scrollToPlans}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[#171717] font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer group"
                style={{ background: "#F4C430" }}
              >
                <span>Explore Health Plans</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={scrollToCalculator}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E0] text-[#292929] hover:text-[#171717] hover:border-[#F4C430] font-semibold text-sm shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Calculate Premium</span>
              </button>
            </div>

            {/* Stats */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#E5E5E0] max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#171717] tracking-tight">
                  14,000+
                </div>
                <div className="text-[11px] font-bold text-[#292929] uppercase tracking-wider mt-0.5">
                  CASHLESS HOSPITALS
                </div>
                <div className="text-[10px] text-[#6B6B6B] font-medium">
                  Pan-India Network
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#171717] tracking-tight">
                  30 Min
                </div>
                <div className="text-[11px] font-bold text-[#292929] uppercase tracking-wider mt-0.5">
                  CLAIM APPROVAL
                </div>
                <div className="text-[10px] text-[#6B6B6B] font-medium">
                  Express Cashless
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#171717] tracking-tight">
                  ₹75,000
                </div>
                <div className="text-[11px] font-bold text-[#292929] uppercase tracking-wider mt-0.5">
                  TAX BENEFIT
                </div>
                <div className="text-[10px] text-[#6B6B6B] font-medium">
                  Under Section 80D
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Graphic Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl bg-gradient-to-br from-white via-sky-50/40 to-[#FFF8D6] border border-[#E5E5E0] shadow-xl p-8 flex flex-col items-center justify-between text-center">
              <div className="absolute top-6 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFFFFF]/95 border border-[#E5E5E0] shadow-2xs text-[10px] font-bold tracking-wider text-[#F4C430] uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#171717]" />
                <span>100% CASHLESS</span>
              </div>

              <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFFFFF]/95 border border-[#E5E5E0] shadow-2xs text-[10px] font-bold tracking-wider text-[#171717] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#171717]" />
                <span>0% PAPERWORK</span>
              </div>

              <div className="my-auto space-y-4">
                <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-[#F5F5F3] to-[#E5E5E0] flex items-center justify-center border border-[#E5E5E0] shadow-inner">
                  <div className="w-20 h-20 rounded-full bg-[#FFFFFF] flex items-center justify-center shadow-md text-[#171717]">
                    <Heart className="w-10 h-10 text-rose-500 animate-pulse" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#171717] tracking-tight uppercase">
                    FAMILY HEALTH SHIELD
                  </h3>
                  <p className="text-xs text-[#6B6B6B] mt-1 max-w-[260px] mx-auto">
                    Instant cashless admissions, OPD add-ons, and restorative sum insured benefits.
                  </p>
                </div>
              </div>

              <div className="w-full bg-[#FFFFFF]/80 backdrop-blur-xs rounded-xl p-3 border border-[#E5E5E0] flex items-center justify-around text-xs">
                <div className="flex items-center gap-1.5 text-[#292929] font-semibold">
                  <Building2 className="w-4 h-4 text-[#171717]" />
                  <span>Top 16 Insurers</span>
                </div>
                <div className="h-4 w-px bg-zinc-200" />
                <div className="flex items-center gap-1.5 text-[#F4C430] font-semibold">
                  <Shield className="w-4 h-4 text-[#171717]" />
                  <span>24x7 Claim Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
