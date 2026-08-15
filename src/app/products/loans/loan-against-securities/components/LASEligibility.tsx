"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Users,
    Briefcase,
    ShieldCheck,
    CheckCircle2,
    Sparkles,
    ArrowRight,
    UserCheck,
} from "lucide-react";

interface EligibilityItem {
    title: string;
    subtitle: string;
    desc: string;
    icon: React.ElementType;
}

const DEFAULT_ELIGIBILITY_ITEMS: EligibilityItem[] = [
    {
        title: "Applicant Profile",
        subtitle: "Resident & Entity Types",
        desc: "Resident Indian individuals, NRIs (with select lenders), HUFs, Sole Proprietorships, and Private Limited Companies holding approved securities.",
        icon: Users,
    },
    {
        title: "Eligible Portfolio",
        subtitle: "Collateral Threshold",
        desc: "Minimum portfolio valuation of ₹50,000 in approved mutual fund units, group-A equity shares, SGBs, or investment-grade bonds.",
        icon: Briefcase,
    },
    {
        title: "Valid KYC & Demat",
        subtitle: "Verification Requirements",
        desc: "Active Demat account with NSDL / CDSL, valid PAN card, verified digital KYC, and an active linked bank account for disbursements.",
        icon: ShieldCheck,
    },
    {
        title: "Age Qualification",
        subtitle: "18 to 65+ Years",
        desc: "Primary borrower must be at least 18 years old at the time of pledge authorization. Minimal credit score dependency due to full asset collateral.",
        icon: UserCheck,
    },
];

interface LASEligibilityProps {
    items?: EligibilityItem[];
    onApplyClick?: () => void;
}

export const LASEligibility: React.FC<LASEligibilityProps> = ({
    items = DEFAULT_ELIGIBILITY_ITEMS,
    onApplyClick,
}) => {
    const handleApply =
        onApplyClick ||
        (() => {
            console.log("Check Eligibility / Apply Clicked from LASEligibility");
        });

    return (
        <section
            className="py-14 md:py-20 bg-[#F5F5F3] relative overflow-hidden font-sans border-b border-[#E5E5E0]"
            id="las-eligibility-section"
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
                        Fast-Track Approval Criteria
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        Eligibility Criteria
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        Because your loan is fully secured by financial assets, eligibility criteria are streamlined with minimal income documentation and instant verification.
                    </p>
                </motion.div>

                {/* Eligibility Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
                    {items.map((item, idx) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: idx * 0.08 }}
                                className="bg-[#FFFFFF] p-7 rounded-3xl border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                            >
                                <div>
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-2xl bg-[#FFF8D6] border border-[#F4C430]/30 flex items-center justify-center text-[#171717] mb-6 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                                        <Icon size={26} strokeWidth={2} />
                                    </div>

                                    {/* Subtitle */}
                                    <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider block mb-1">
                                        {item.subtitle}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-[#171717] mb-3 leading-snug">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="pt-5 mt-5 border-t border-[#E5E5E0] flex items-center gap-1.5 text-xs font-bold text-[#171717]">
                                    <CheckCircle2 size={14} className="text-[#171717]" />
                                    <span>Verified Instantly</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Pre-Qualification Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="max-w-4xl mx-auto p-6 sm:p-7 rounded-3xl bg-[#FFFDF5] border border-[#F4C430]/50 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5 shadow-xs text-center sm:text-left"
                >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#FFF8D6] flex items-center justify-center text-[#171717] shrink-0 border border-[#F4C430]/40">
                            <Sparkles size={24} />
                        </div>
                        <div>
                            <h4 className="font-extrabold text-base text-[#171717] mb-1">
                                No Income Proof Required for Pre-Approved Scrips
                            </h4>
                            <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed max-w-xl">
                                Holding approved Category-A equities or top mutual fund folios allows sanction without mandatory ITR or salary slip submission.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleApply}
                        className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] font-bold text-xs uppercase tracking-wider transition-all shadow-xs hover:shadow shrink-0 cursor-pointer w-full sm:w-auto"
                    >
                        <span>Check My Scrips</span>
                        <ArrowRight size={14} />
                    </button>
                </motion.div>

            </div>
        </section>
    );
};