"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Building2,
    Briefcase,
    Search,
    Check,
    ArrowRight,
    Sparkles,
    ExternalLink,
} from "lucide-react";

interface LenderTypeItem {
    name: string;
    category: string;
    features: string[];
    icon: React.ElementType;
}

const DEFAULT_LENDER_TYPES: LenderTypeItem[] = [
    {
        name: "Public Sector Banks",
        category: "PSU Banking Network",
        features: [
            "Lowest starting interest rate slabs",
            "High LTV allowance on Government Bonds & SGBs",
            "Nominal processing charges & zero prepayment fees",
        ],
        icon: Building2,
    },
    {
        name: "Private Sector Banks",
        category: "Scheduled Commercial Banks",
        features: [
            "100% digital onboarding & instant e-mandate setup",
            "Wide approved list of NSE/BSE Group-A equities",
            "Flexible OD limit with real-time net-banking access",
        ],
        icon: Building2,
    },
    {
        name: "NBFC Partners",
        category: "Non-Banking Financial Companies",
        features: [
            "Higher tolerance on diversified mutual fund portfolios",
            "Fast-track sanction in under 2 hours",
            "Interest-only monthly servicing with custom tenures",
        ],
        icon: Briefcase,
    },
    {
        name: "Specialized LAS FinTechs",
        category: "Digital-First Credit Platforms",
        features: [
            "Automated CAMS & KFintech CAS fetch via OTP",
            "Instant portfolio valuation & live LTV monitoring",
            "24/7 self-service portal for pledging and release",
        ],
        icon: Search,
    },
];

interface LASLenderTypesProps {
    lenders?: LenderTypeItem[];
    openLogin?: () => void;
}

export const LASLenderTypes: React.FC<LASLenderTypesProps> = ({
    lenders = DEFAULT_LENDER_TYPES,
    openLogin,
}) => {
    const handleApply =
        openLogin ||
        (() => {
            console.log("Check Eligibility clicked from LASLenderTypes");
        });

    return (
        <section
            className="py-14 md:py-20 bg-[#FFFFFF] relative overflow-hidden font-sans border-b border-[#E5E5E0]"
            id="las-lender-types-section"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <Sparkles size={14} className="text-[#171717]" />
                        Institutional Network
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        Types of Lending Partners
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        We connect borrowers with a comprehensive institutional ecosystem across India, tailoring lender allocation to your unique portfolio mix and liquidity goals.
                    </p>
                </motion.div>

                {/* Lender Types Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {lenders.map((lender, idx) => {
                        const Icon = lender.icon;

                        return (
                            <motion.div
                                key={lender.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: idx * 0.08 }}
                                className="bg-[#FFFDF5] p-7 rounded-3xl border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                            >
                                <div>
                                    {/* Header & Icon */}
                                    <div className="flex flex-col items-center text-center pb-5 mb-5 border-b border-[#E5E5E0]">
                                        <div className="w-14 h-14 rounded-2xl bg-[#FFF8D6] border border-[#F4C430]/30 flex items-center justify-center text-[#171717] mb-4 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                                            <Icon size={26} strokeWidth={2} />
                                        </div>
                                        <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">
                                            {lender.category}
                                        </span>
                                        <h3 className="text-lg font-extrabold text-[#171717] leading-snug">
                                            {lender.name}
                                        </h3>
                                    </div>

                                    {/* Feature Bullets */}
                                    <div className="space-y-3 mb-8">
                                        {lender.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-start gap-2.5">
                                                <div className="w-4 h-4 rounded-full bg-[#FFF8D6] text-[#171717] flex items-center justify-center shrink-0 mt-0.5 border border-[#F4C430]/40">
                                                    <Check size={12} strokeWidth={3} className="text-[#171717]" />
                                                </div>
                                                <span className="text-xs sm:text-sm text-[#292929] leading-snug">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Card Button */}
                                <button
                                    type="button"
                                    onClick={handleApply}
                                    className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#FFFFFF] hover:bg-[#F4C430] text-[#171717] border border-[#E5E5E0] hover:border-[#F4C430] shadow-xs hover:shadow transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                                >
                                    <span>Check Eligibility</span>
                                    <ExternalLink size={13} />
                                </button>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};