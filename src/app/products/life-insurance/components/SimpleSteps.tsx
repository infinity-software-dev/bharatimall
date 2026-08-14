"use client";

import React from "react";
import {
  User,
  Clock,
  Zap,
  Globe,
  FileText,
  CreditCard,
  Building,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function SimpleSteps({ onStartApplication }: { onStartApplication?: () => void }) {
  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] font-sans border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold font-sans bg-gradient-to-r from-[#2076C7] to-[#1CADA3] bg-clip-text text-transparent drop-shadow-xs">
            Simple Steps to Secure Life
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed">
            Skip the paperwork. Our 100% digital process gets your policy issued in less than 24 hours.
          </p>
        </div>

        {/* 3 Process Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Step 1: Instant Eligibility */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-slate-800 text-center mb-8">
                Instant Eligibility
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <User className="w-3.5 h-3.5 text-[#1CADA3]" />
                    <span>AGE</span>
                  </div>
                  <div className="text-sm font-bold text-slate-800">18-65 Yrs</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <Clock className="w-3.5 h-3.5 text-[#2076C7]" />
                    <span>TERM</span>
                  </div>
                  <div className="text-sm font-bold text-slate-800">Up to 40 Yrs</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <Zap className="w-3.5 h-3.5 text-[#1CADA3]" />
                    <span>MIN SA</span>
                  </div>
                  <div className="text-sm font-bold text-slate-800">₹25 Lakhs</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <Globe className="w-3.5 h-3.5 text-[#2076C7]" />
                    <span>STATUS</span>
                  </div>
                  <div className="text-sm font-bold text-slate-800">NRI Friendly</div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 mt-6 text-[10px] text-slate-400 text-center font-medium">
              *Real-time eligibility verification in &lt; 2 minutes.
            </div>
          </div>

          {/* Step 2: Digital Dossier */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-slate-800 text-center mb-6">
                Digital Dossier
              </h3>

              <div className="space-y-3">
                {/* Identity */}
                <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white shadow-2xs flex items-center justify-center text-[#2076C7]">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">IDENTITY</div>
                      <div className="text-xs font-bold text-slate-800">Aadhaar / PAN</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>

                {/* Income */}
                <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white shadow-2xs flex items-center justify-center text-[#1CADA3]">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">INCOME</div>
                      <div className="text-xs font-bold text-slate-800">Salary / ITR</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>

                {/* Address */}
                <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white shadow-2xs flex items-center justify-center text-[#2076C7]">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">ADDRESS</div>
                      <div className="text-xs font-bold text-slate-800">Utility / Rent</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            </div>

            <div className="pt-4 text-[10px] text-slate-400 text-center font-medium">
              🔒 100% paperless digital KYC via DigiLocker
            </div>
          </div>

          {/* Step 3: Expert Review */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-slate-800 text-center">
                Expert Review
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed text-center">
                Our dedicated relationship managers ensure 100% accurate data filling and instant verification for priority terminal-case support.
              </p>

              {/* Trust Badge */}
              <div className="p-3 rounded-2xl bg-emerald-50/90 border border-emerald-200/70 flex items-center justify-center gap-2 text-emerald-800">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <div className="text-left">
                  <div className="text-[9px] font-black uppercase tracking-wider text-emerald-600">TRUST BADGE</div>
                  <div className="text-xs font-extrabold">100% Verified Issue</div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => {
                  if (onStartApplication) {
                    onStartApplication();
                  } else {
                    const el = document.getElementById("calculator");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0e939e] to-[#127083] hover:from-[#0c7f88] hover:to-[#0f5c6c] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
