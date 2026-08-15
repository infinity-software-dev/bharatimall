"use client";

import React from "react";
import { ShieldCheck, UserCheck, FileCheck, Building2, Lock, Award } from "lucide-react";

export default function TrustedInsurers() {
  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] font-sans border-t border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold font-sans drop-shadow-xs text-[#171717]">
            Supported by India&apos;s Trusted Insurers
          </h2>
          <p className="text-[#6B6B6B] text-sm sm:text-base font-normal leading-relaxed">
            Partnering with India&apos;s most respected insurers to ensure your family&apos;s future stays safe and secure.
          </p>
        </div>

        {/* 3 Trust Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F3] border border-[#E5E5E0] text-[#292929] text-xs font-bold shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#171717]" />
            <span>IRDAI Regulated Security</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F3] border border-[#E5E5E0] text-[#292929] text-xs font-bold shadow-2xs">
            <UserCheck className="w-4 h-4 text-[#171717]" />
            <span>Dedicated Claims Concierge</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F3] border border-[#E5E5E0] text-[#292929] text-xs font-bold shadow-2xs">
            <FileCheck className="w-4 h-4 text-[#171717]" />
            <span>Paperless Processing</span>
          </div>
        </div>

        {/* 3 Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#fafbfd] rounded-3xl border border-[#E5E5E0] p-8 text-center space-y-2 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] border border-[#E5E5E0] flex items-center justify-center mx-auto text-[#171717]">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight">
              99.8%
            </div>
            <div className="text-[11px] font-black text-[#171717] uppercase tracking-widest">
              CLAIM SETTLEMENT
            </div>
            <div className="text-xs text-[#6B6B6B] font-medium">
              Industry Leading
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fafbfd] rounded-3xl border border-[#E5E5E0] p-8 text-center space-y-2 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] border border-[#E5E5E0] flex items-center justify-center mx-auto text-[#171717]">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight">
              25+
            </div>
            <div className="text-[11px] font-black text-[#171717] uppercase tracking-widest">
              TRUSTED PARTNERS
            </div>
            <div className="text-xs text-[#6B6B6B] font-medium">
              Leading Insurers
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fafbfd] rounded-3xl border border-[#E5E5E0] p-8 text-center space-y-2 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] border border-[#E5E5E0] flex items-center justify-center mx-auto text-[#171717]">
              <Lock className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight">
              100%
            </div>
            <div className="text-[11px] font-black text-[#171717] uppercase tracking-widest">
              SECURE OPERATIONS
            </div>
            <div className="text-xs text-[#6B6B6B] font-medium">
              Enterprise-grade Privacy
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="max-w-4xl mx-auto p-6 bg-[#F4C430]/40 rounded-2xl border border-[#F4C430]/50 text-center">
          <p className="text-[11px] text-[#6B6B6B] font-normal leading-relaxed">
            <strong className="text-[#292929]">Disclaimer:</strong> Insurance is a subject matter of solicitation. The information provided on this website is for general informational purposes only and does not constitute professional financial advice. Coverage details, premiums, and benefits are subject to the specific terms and conditions of the respective insurance policies. We strongly recommend reading the policy documents carefully before making any legally binding decision.
          </p>
        </div>

      </div>
    </section>
  );
}
