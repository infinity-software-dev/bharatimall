"use client";
import {
  Flame,
  ShieldCheck, FileCheck,
  Building2,
  ArrowRight,
  Shield,
  CheckCircle2
} from "lucide-react";

interface FireHeroProps {
  onApplyNow: () => void;
}

export default function FireHero({ onApplyNow }: FireHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white py-12 md:py-20 border-b border-zinc-100">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-200/20 via-sky-200/20 to-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-teal-100/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/70 text-[#1CADA3] text-xs font-black uppercase tracking-wider shadow-xs">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span>Secure Your Assets Against Fire</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1.12]">
              Shield Your <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#2076C7] via-[#1CADA3] to-teal-500 bg-clip-text text-transparent">
                Future From Fire
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Protect your business, warehouse, and residential properties with India's most comprehensive Fire & Special Perils insurance. Instant quotes, 100% digital process.
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={onApplyNow}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#2076C7] to-[#1CADA3] text-white font-bold text-base shadow-lg shadow-[#2076C7]/20 hover:shadow-xl hover:shadow-[#2076C7]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#calculator"
                className="w-full sm:w-auto px-7 py-4 rounded-xl border border-zinc-300 bg-white text-zinc-700 font-bold text-base hover:bg-zinc-50 hover:text-[#2076C7] hover:border-[#2076C7]/40 transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>Estimate Premium</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-zinc-200/80 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-zinc-700">Instant Policy</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-50 text-[#2076C7] flex items-center justify-center shrink-0">
                  <FileCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-zinc-700">Digital Claims</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-teal-50 text-[#1CADA3] flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-zinc-700">Pan-India Reach</span>
              </div>
            </div>

          </div>

          {/* Right Column - Visual Graphic Card */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              
              {/* Main Card */}
              <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#fbf8f3] via-[#fffbf7] to-white p-6 sm:p-8 border border-amber-100 shadow-[0_25px_60px_-15px_rgba(234,88,12,0.12)] overflow-hidden">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

                {/* Illustrated Center Piece */}
                <div className="relative z-10 flex flex-col items-center justify-center py-4">
                  
                  {/* Safety Checklist Card */}
                  <div className="w-56 sm:w-64 bg-white rounded-2xl p-4 shadow-md border border-amber-100 mb-4 transform -rotate-1 hover:rotate-0 transition-transform">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-100">
                      <span className="text-[11px] font-black text-amber-700 tracking-wider uppercase flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                        PREVENTION & AUDIT
                      </span>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">100% Passed</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Flame Retardant Systems</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Sprinkler & Smoke Detectors</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Electrical Load Clearance</span>
                      </div>
                    </div>
                  </div>

                  {/* Shield & Building Safety Illustration Box */}
                  <div className="w-full bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-5 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                      <Building2 className="w-32 h-32" />
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-orange-400">
                        <Shield className="w-6 h-6 text-teal-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">Comprehensive Peril Shield</h4>
                        <p className="text-[11px] text-zinc-300">Covers Structure + Stock + Machinery</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center pt-2 border-t border-white/10">
                      <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                        <span className="block text-[10px] text-zinc-400 uppercase font-semibold">Fire & Blast</span>
                        <span className="text-xs font-bold text-emerald-400">100% Covered</span>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                        <span className="block text-[10px] text-zinc-400 uppercase font-semibold">Natural Perils</span>
                        <span className="text-xs font-bold text-emerald-400">STFI Included</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Floating Metric Badge - "PROPERTY SECURED ₹5,000Cr+" */}
                <div className="absolute bottom-4 left-4 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-zinc-100 flex items-center gap-3 animate-bounce-slow">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/50 flex items-center justify-center text-[#1CADA3]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                      PROPERTY SECURED
                    </span>
                    <span className="text-lg sm:text-xl font-extrabold text-zinc-900 tracking-tight">
                      ₹5,000Cr+
                    </span>
                  </div>
                </div>

                {/* Floating Live Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-md border border-zinc-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[11px] font-bold text-zinc-700">IRDAI Approved</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
