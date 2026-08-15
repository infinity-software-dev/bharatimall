"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    TrendingUp,
    ShieldCheck,
    Zap,
    Banknote,
    Sparkles,
    CheckCircle2,
} from "lucide-react";

interface BenefitItem {
    title: string;
    desc: string;
    highlight: string;
    icon: React.ElementType;
}

const BENEFITS: BenefitItem[] = [
    {
        icon: TrendingUp,
        title: "Uninterrupted Portfolio Compounding",
        desc: "Your investments stay active in the market, continuing to earn capital appreciation, quarterly dividends, stock splits, and bonuses without disruption.",
        highlight: "Retain 100% upside potential",
    },
    {
        icon: Zap,
        title: "On-Demand Liquidity Access",
        desc: "Draw funds instantaneously against your approved credit line to meet urgent working capital or tactical financial needs without waiting for settlement cycles.",
        highlight: "Sub-4 hour digital setup",
    },
    {
        icon: ShieldCheck,
        title: "Depository-Level Security",
        desc: "Securities remain safely marked as collateral directly in your NSDL / CDSL demat account. You retain full beneficial ownership and voting rights.",
        highlight: "SEBI & RBI compliant framework",
    },
    {
        icon: Banknote,
        title: "Cost-Effective Interest Servicing",
        desc: "Benefit from lower interest rates starting from 8.50% p.a., with interest charged solely on the drawn quantum rather than the entire sanctioned limit.",
        highlight: "Interest-only monthly servicing",
    },
];

export const LASBenefitsSection: React.FC = () => {
    return (
        <section
            className="py-14 md:py-20 bg-[#F5F5F3] relative overflow-hidden font-sans border-b border-[#E5E5E0]"
            id="las-benefits-section"
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
                        Long-Term Value Creation
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        Why LAS Makes Strategic Financial Sense
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        Borrowing against your securities provides essential liquidity while preserving your long-term wealth accumulation and tax efficiency.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {BENEFITS.map((benefit, idx) => {
                        const Icon = benefit.icon;

                        return (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                className="flex flex-col sm:flex-row gap-5 p-7 sm:p-8 bg-[#FFFFFF] rounded-3xl border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-md transition-all duration-200 group"
                            >
                                {/* Icon Badge */}
                                <div className="w-14 h-14 rounded-2xl bg-[#FFF8D6] border border-[#F4C430]/30 flex items-center justify-center text-[#171717] shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                                    <Icon size={26} strokeWidth={2} />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-between flex-grow">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-extrabold text-[#171717] mb-2 leading-snug">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed mb-4">
                                            {benefit.desc}
                                        </p>
                                    </div>

                                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#171717] bg-[#FFF8D6] px-3 py-1.5 rounded-xl border border-[#F4C430]/30 w-fit">
                                        <CheckCircle2 size={13} className="text-[#171717]" />
                                        <span>{benefit.highlight}</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};