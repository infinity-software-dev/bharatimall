"use client";

import React from "react";
import Link from "next/link";
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

export default function SimpleSteps() {
  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] font-sans border-t border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold font-sans drop-shadow-xs text-[#171717]">
            Simple Steps to Secure Life
          </h2>
          <p className="text-[#6B6B6B] text-sm sm:text-base font-normal leading-relaxed">
            Skip the paperwork. Our 100% digital process gets your policy issued in less than 24 hours.
          </p>
        </div>

        {/* 3 Process Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Step 1: Instant Eligibility */}
          <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5E5E0] p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-[#171717] text-center mb-8">
                Instant Eligibility
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-black text-[#6B6B6B] uppercase tracking-widest">
                    <User className="w-3.5 h-3.5 text-[#171717]" />
                    <span>AGE</span>
                  </div>
                  <div className="text-sm font-bold text-[#171717]">18-65 Yrs</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-black text-[#6B6B6B] uppercase tracking-widest">
                    <Clock className="w-3.5 h-3.5 text-[#171717]" />
                    <span>TERM</span>
                  </div>
                  <div className="text-sm font-bold text-[#171717]">Up to 40 Yrs</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-black text-[#6B6B6B] uppercase tracking-widest">
                    <Zap className="w-3.5 h-3.5 text-[#171717]" />
                    <span>MIN SA</span>
                  </div>
                  <div className="text-sm font-bold text-[#171717]">₹25 Lakhs</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-black text-[#6B6B6B] uppercase tracking-widest">
                    <Globe className="w-3.5 h-3.5 text-[#171717]" />
                    <span>STATUS</span>
                  </div>
                  <div className="text-sm font-bold text-[#171717]">NRI Friendly</div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#E5E5E0] mt-6 text-[10px] text-[#6B6B6B] text-center font-medium">
              *Real-time eligibility verification in &lt; 2 minutes.
            </div>
          </div>

          {/* Step 2: Digital Dossier */}
          <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5E5E0] p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-[#171717] text-center mb-6">
                Digital Dossier
              </h3>

              <div className="space-y-3">
                {/* Identity */}
                <div className="p-3.5 bg-[#F5F5F3] rounded-2xl border border-[#E5E5E0] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FFFFFF] shadow-2xs flex items-center justify-center text-[#171717]">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] font-black text-[#6B6B6B] uppercase tracking-widest">IDENTITY</div>
                      <div className="text-xs font-bold text-[#171717]">Aadhaar / PAN</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#198754]" />
                </div>

                {/* Income */}
                <div className="p-3.5 bg-[#F5F5F3] rounded-2xl border border-[#E5E5E0] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FFFFFF] shadow-2xs flex items-center justify-center text-[#171717]">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] font-black text-[#6B6B6B] uppercase tracking-widest">INCOME</div>
                      <div className="text-xs font-bold text-[#171717]">Salary / ITR</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#198754]" />
                </div>

                {/* Address */}
                <div className="p-3.5 bg-[#F5F5F3] rounded-2xl border border-[#E5E5E0] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FFFFFF] shadow-2xs flex items-center justify-center text-[#171717]">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] font-black text-[#6B6B6B] uppercase tracking-widest">ADDRESS</div>
                      <div className="text-xs font-bold text-[#171717]">Utility / Rent</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#198754]" />
                </div>
              </div>
            </div>

            <div className="pt-4 text-[10px] text-[#6B6B6B] text-center font-medium">
              🔒 100% paperless digital KYC via DigiLocker
            </div>
          </div>

          {/* Step 3: Expert Review */}
          <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5E5E0] p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-[#171717] text-center">
                Expert Review
              </h3>

              <p className="text-xs text-[#292929] leading-relaxed text-center">
                Our dedicated relationship managers ensure 100% accurate data filling and instant verification for priority terminal-case support.
              </p>

              {/* Trust Badge */}
              <div className="p-3 rounded-2xl bg-[#F5F5F3] border border-[#E5E5E0] flex items-center justify-center gap-2 text-[#198754]">
                <ShieldCheck className="w-5 h-5 text-[#198754]" />
                <div className="text-left">
                  <div className="text-[9px] font-black uppercase tracking-wider text-[#198754]">TRUST BADGE</div>
                  <div className="text-xs font-extrabold">100% Verified Issue</div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/enquiry"
                className="w-full py-3.5 rounded-xl bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Instant Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
