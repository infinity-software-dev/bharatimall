"use client";

import React from "react";
import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function BlueprintComparison() {
  const plans = [
    {
      name: "Term Plus",
      insurer: "MAX LIFE",
      category: "Term Insurance",
      primaryBenefit: "Pure Protection",
      cover: "₹1 Cr - ₹5 Cr",
      payout: "Instant",
      uniqueFeature: "Skip-a-premium",
      rating: "4.9 / 5.0",
      stars: 5,
    },
    {
      name: "Click 2 Protect",
      insurer: "HDFC LIFE",
      category: "Term Insurance",
      primaryBenefit: "Elite Protection",
      cover: "₹1 Cr+",
      payout: "Immediate",
      uniqueFeature: "Parent Protect Care",
      rating: "4.8 / 5.0",
      stars: 5,
    },
    {
      name: "iProtect Smart",
      insurer: "ICICI PRU",
      category: "Term Insurance",
      primaryBenefit: "Milestone Cover",
      cover: "₹1 Cr+",
      payout: "Instant",
      uniqueFeature: "Milestone increase",
      rating: "4.8 / 5.0",
      stars: 5,
    },
    {
      name: "Sampoorna Raksha",
      insurer: "TATA AIA",
      category: "Term Insurance",
      primaryBenefit: "Premium Back",
      cover: "₹1 Cr+",
      payout: "Regular",
      uniqueFeature: "Defer premium option",
      rating: "4.7 / 5.0",
      stars: 5,
    },
    {
      name: "iSecure II",
      insurer: "BAJAJ LIFE",
      category: "Term Insurance",
      primaryBenefit: "Flexible Eligibility",
      cover: "₹1 Cr+",
      payout: "Lump-sum",
      uniqueFeature: "ITR / Bank Statement",
      rating: "4.7 / 5.0",
      stars: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#fbfcfe] relative overflow-hidden font-sans border-t border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-[#171717] tracking-tight">
            Insurance Blueprints Comparison
          </h2>
          <p className="text-[#6B6B6B] text-sm sm:text-base font-normal leading-relaxed">
            Find the right fit for your lifelong financial protection.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="max-w-6xl mx-auto bg-[#FFFFFF] rounded-3xl border border-[#E5E5E0] shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">

              {/* Header Row */}
              <thead>
                <tr className="bg-[#FFF8D6] text-[#171717]">
                  <th className="py-5 px-6 font-extrabold text-xs uppercase tracking-wider w-[22%]">
                    ATTRIBUTES
                  </th>
                  {plans.map((p, idx) => (
                    <th key={idx} className="py-5 px-4 font-bold text-center w-[15.6%]">
                      <div className="text-sm font-black text-[#E91E63] tracking-tight leading-tight">{p.name}</div>
                      <div className="text-[10px] font-bold tracking-widest text-[#E91E63] uppercase mt-0.5">
                        {p.insurer}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Rows */}
              <tbody className="divide-y divide-slate-100 text-xs">
                {/* Plan Category */}
                <tr className="hover:bg-[#F5F5F3] transition-colors">
                  <td className="py-4 px-6 font-extrabold text-[#292929] uppercase tracking-wider text-[11px]">
                    PLAN CATEGORY
                  </td>
                  {plans.map((p, i) => (
                    <td key={i} className="py-4 px-4 text-center font-medium text-[#292929]">
                      {p.category}
                    </td>
                  ))}
                </tr>

                {/* Primary Benefit */}
                <tr className="hover:bg-[#F5F5F3] transition-colors bg-[#F5F5F3]">
                  <td className="py-4 px-6 font-extrabold text-[#292929] uppercase tracking-wider text-[11px]">
                    PRIMARY BENEFIT
                  </td>
                  {plans.map((p, i) => (
                    <td key={i} className="py-4 px-4 text-center font-semibold text-[#171717]">
                      {p.primaryBenefit}
                    </td>
                  ))}
                </tr>

                {/* Life Cover / SA */}
                <tr className="hover:bg-[#F5F5F3] transition-colors">
                  <td className="py-4 px-6 font-extrabold text-[#292929] uppercase tracking-wider text-[11px]">
                    LIFE COVER / SA
                  </td>
                  {plans.map((p, i) => (
                    <td key={i} className="py-4 px-4 text-center font-bold text-[#171717]">
                      {p.cover}
                    </td>
                  ))}
                </tr>

                {/* Payout Structure */}
                <tr className="hover:bg-[#F5F5F3] transition-colors bg-[#F5F5F3]">
                  <td className="py-4 px-6 font-extrabold text-[#292929] uppercase tracking-wider text-[11px]">
                    PAYOUT STRUCTURE
                  </td>
                  {plans.map((p, i) => (
                    <td key={i} className="py-4 px-4 text-center font-medium text-[#292929]">
                      {p.payout}
                    </td>
                  ))}
                </tr>

                {/* Unique Feature */}
                <tr className="hover:bg-[#F5F5F3] transition-colors">
                  <td className="py-4 px-6 font-extrabold text-[#292929] uppercase tracking-wider text-[11px]">
                    UNIQUE FEATURE
                  </td>
                  {plans.map((p, i) => (
                    <td key={i} className="py-4 px-4 text-center font-bold text-[#171717]">
                      {p.uniqueFeature}
                    </td>
                  ))}
                </tr>

                {/* Expert Rating */}
                <tr className="hover:bg-[#F5F5F3] transition-colors bg-[#F5F5F3]">
                  <td className="py-4 px-6 font-extrabold text-[#292929] uppercase tracking-wider text-[11px]">
                    EXPERT RATING*
                    <span className="block text-[9px] font-normal text-[#6B6B6B] normal-case mt-0.5">
                      Source: CRISIL &amp; Independent Audit
                    </span>
                  </td>
                  {plans.map((p, i) => (
                    <td key={i} className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-0.5 text-[#171717] mb-0.5">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} className="w-3 h-3 fill-[#F4C430]" />
                        ))}
                      </div>
                      <span className="text-xs font-black text-[#171717]">{p.rating}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Certification Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F3] border border-[#E5E5E0] text-emerald-700 text-xs font-bold shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>DIGITAL CLAIM GUARANTEE</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F3] border border-[#E5E5E0] text-[#171717] text-xs font-bold shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>IRDAI CERTIFIED PLANS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
