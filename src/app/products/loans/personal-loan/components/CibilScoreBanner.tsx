"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function CibilScoreBanner() {
    return (
        <section className="py-12 bg-[#FFFFFF] font-sans border-b border-[#E5E5E0]">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="bg-[#FFF8D6] rounded-3xl p-8 md:p-12 border border-[#E5E5E0] shadow-xs relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Content Area */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 relative z-10 w-full md:w-2/3">
                        <div className="w-14 h-14 shrink-0 bg-[#FFFFFF] rounded-2xl flex items-center justify-center border border-[#E5E5E0] shadow-xs text-[#171717]">
                            <ShieldCheck className="w-7 h-7 text-[#171717]" strokeWidth={2} />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#171717] mb-2 tracking-tight">
                                Know Your CIBIL Score Before You Apply
                            </h3>
                            <p className="text-[#6B6B6B] text-sm md:text-base leading-relaxed font-normal">
                                A higher credit score unlocks lower interest rates, faster approvals, and higher loan limits. Check your detailed credit report for free without impacting your score.
                            </p>
                        </div>
                    </div>

                    {/* CTA Action */}
                    <div className="relative z-10 w-full md:w-auto shrink-0 flex justify-center md:justify-end">
                        <Link href="/enquiry">
                            <button
                                type="button"
                                className="group flex items-center gap-2.5 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] px-7 py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-200 shadow-xs hover:shadow-md active:scale-95 cursor-pointer"
                            >
                                <span>Check Free Score</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}