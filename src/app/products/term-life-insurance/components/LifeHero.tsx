"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Building2, Heart } from "lucide-react";

interface LifeHeroProps {
  onApplyNow?: () => void;
}

export default function LifeHero({ onApplyNow }: LifeHeroProps) {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pb-24">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFF8D6] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#FFF8D6] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F3] border border-[#E5E5E0] text-[#171717] text-xs font-bold tracking-wide uppercase">
              <span>TRUSTED BY 50,000+ INDIAN FAMILIES</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#171717] leading-[1.12]">
              Securing Lives,<br />
              Building Legacies.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#6B6B6B] max-w-xl font-normal leading-relaxed">
              Sophisticated term life insurance solutions for absolute financial peace of mind.
            </p>

            {/* CTA Action */}
            <div className="pt-2">
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer group"
              >
                <span>Get Instant Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Hero Stats */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#E5E5E0] max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#171717] tracking-tight">
                  99.8%
                </div>
                <div className="text-[11px] font-bold text-[#292929] uppercase tracking-wider mt-0.5">
                  CLAIM SETTLEMENT
                </div>
                <div className="text-[10px] text-[#6B6B6B] font-medium">
                  Industry Leading
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#171717] tracking-tight">
                  25+
                </div>
                <div className="text-[11px] font-bold text-[#292929] uppercase tracking-wider mt-0.5">
                  TRUSTED PARTNERS
                </div>
                <div className="text-[10px] text-[#6B6B6B] font-medium">
                  Leading Insurers
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#171717] tracking-tight">
                  100%
                </div>
                <div className="text-[11px] font-bold text-[#292929] uppercase tracking-wider mt-0.5">
                  SECURE OPERATIONS
                </div>
                <div className="text-[10px] text-[#6B6B6B] font-medium">
                  Enterprise Security
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl bg-gradient-to-b from-white via-[#fcfdff] to-[#FFD21F] border border-[#E5E5E0] shadow-xl p-8 flex flex-col items-center justify-center text-center">
              
              {/* Floating Badges */}
              <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFFFFF]/90 border border-[#E5E5E0] shadow-xs text-[10px] font-bold tracking-wider text-[#292929] uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#171717]" />
                <span>SECURE</span>
              </div>

              <div className="absolute bottom-6 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFFFFF]/90 border border-[#E5E5E0] shadow-xs text-[10px] font-bold tracking-wider text-[#292929] uppercase">
                <Building2 className="w-3.5 h-3.5 text-[#171717]" />
                <span>TRUSTED</span>
              </div>

              <div className="absolute bottom-6 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFFFFF]/90 border border-[#E5E5E0] shadow-xs text-[10px] font-bold tracking-wider text-[#292929] uppercase">
                <Heart className="w-3.5 h-3.5 text-[#171717]" />
                <span>PROTECT</span>
              </div>

              {/* Card Central Graphic */}
              <div className="space-y-4 my-auto">
                <h3 className="text-xl font-bold tracking-wider text-[#292929] uppercase">
                  PROTECT
                </h3>

                <div className="relative mx-auto w-36 h-36 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#FFF8D6] rounded-full blur-xl animate-pulse" />
                  
                  <svg viewBox="0 0 100 110" className="w-full h-full drop-shadow-md">
                    <path
                      d="M50 5 L88 22 C88 65, 50 98, 50 98 C50 98, 12 65, 12 22 Z"
                      fill="#ffffff"
                      stroke="#1f71ba"
                      strokeWidth="5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M50 14 L80 28 C80 62, 50 88, 50 88 C50 88, 20 62, 20 28 Z"
                      fill="#e6f2fc"
                    />
                    <path
                      d="M38 72 C42 67, 58 67, 62 72 Z"
                      fill="#1e293b"
                    />
                    <path
                      d="M50 70 Q49 50 36 44 C44 42 52 50 50 70 Z"
                      fill="#22c55e"
                    />
                    <path
                      d="M50 70 Q51 45 64 39 C58 48 53 58 50 70 Z"
                      fill="#16a34a"
                    />
                  </svg>
                </div>

                <div className="space-y-0.5">
                  <div className="text-xl font-black tracking-wider text-[#292929] uppercase">
                    GROW
                  </div>
                  <div className="text-xl font-black tracking-wider text-[#292929] uppercase">
                    TERM
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
