"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    TrendingUp,
    Clock,
    RefreshCw,
    Percent,
    Banknote,
    Briefcase,
    Sparkles,
} from "lucide-react";

interface FeatureItem {
    title: string;
    desc: string;
    icon: React.ElementType;
}

const DEFAULT_FEATURES: FeatureItem[] = [
    {
        title: "Retain Active Portfolio Growth",
        desc: "Maintain your position in the market. Pledged securities continue to accrue dividends, corporate rights, bonus units, and capital appreciation without interruption.",
        icon: TrendingUp,
    },
    {
        title: "Rapid Digital Sanction",
        desc: "Experience digital CAMS / KFintech OTP validation and NSDL / CDSL pledging for instant limit sanction and swift bank account disbursals.",
        icon: Clock,
    },
    {
        title: "Interest-Only Monthly Servicing",
        desc: "Enjoy immense cash flow flexibility with monthly interest-only payments, choosing to repay or roll over the principal amount at your convenience.",
        icon: RefreshCw,
    },
    {
        title: "High Loan-to-Value Slabs",
        desc: "Access competitive LTV ratios up to 50% on Group-A equity stocks, 70%–80% on debt mutual funds, and up to 85%–90% on SGBs and bonds.",
        icon: Percent,
    },
    {
        title: "Zero Prepayment Penalties",
        desc: "Repay part or full drawn balances whenever you have surplus cash without incurring pre-closure penalties, foreclosure charges, or lock-in fees.",
        icon: Banknote,
    },
    {
        title: "Multipurpose Credit Utilization",
        desc: "Deploy your sanctioned overdraft funds for any personal, professional, or commercial purpose—from working capital to sudden medical emergencies.",
        icon: Briefcase,
    },
];

interface LASFeaturesProps {
    features?: FeatureItem[];
}

export const LASFeatures: React.FC<LASFeaturesProps> = ({
    features = DEFAULT_FEATURES,
}) => {
    return (
        <section
            className="py-14 md:py-20 bg-[#FFFFFF] relative overflow-hidden font-sans border-b border-[#E5E5E0]"
            id="las-features-section"
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
                        Core Advantages
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        Why Choose Loan Against Securities?
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        Preserve your hard-earned wealth and compounding momentum while gaining liquidity at lower rates with complete operational speed.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.06 }}
                                className="bg-[#FFFDF5] p-7 md:p-8 rounded-3xl border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-md transition-all duration-200 flex flex-col items-center text-center h-full group"
                            >
                                {/* Icon Container */}
                                <div className="w-14 h-14 bg-[#FFF8D6] border border-[#F4C430]/30 rounded-2xl flex items-center justify-center text-[#171717] mb-6 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                                    <Icon size={26} strokeWidth={2} />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-[#171717] mb-3 leading-snug">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};