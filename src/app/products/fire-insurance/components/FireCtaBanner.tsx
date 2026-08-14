"use client";
import React from "react";
import { ArrowRight, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";

interface FireCtaBannerProps {
  onGetStarted: () => void;
}

export default function FireCtaBanner({ onGetStarted }: FireCtaBannerProps) {
  return (
    <section className="bg-gradient-to-r from-[#17859c] via-[#1CADA3] to-[#2076C7] py-16 md:py-20 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            Ready to Secure Your <br />
            <span>Financial Future?</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-teal-50 font-medium max-w-2xl mx-auto leading-relaxed">
            Get an instant quotation tailored to your property. 100% digital issuance, zero paperwork, backed by top insurers.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#17859c] font-black text-sm sm:text-base shadow-xl hover:bg-teal-50 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Instant Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:18002091234"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-teal-200" />
              <span>Call: 1800 209 1234</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-teal-100 font-semibold">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>IRDAI Regulated</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Fast 15-Min Quote</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>24x7 Claim Assistance</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
