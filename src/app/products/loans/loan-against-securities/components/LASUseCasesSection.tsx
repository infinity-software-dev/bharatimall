"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    HeartPulse,
    Building2,
    GraduationCap,
    Plane,
    Sparkles,
    ArrowUpRight,
} from "lucide-react";

interface UseCaseItem {
    icon: React.ElementType;
    title: string;
    category: string;
    desc: string;
}

const USE_CASES: UseCaseItem[] = [
    {
        icon: HeartPulse,
        title: "Medical & Health Emergencies",
        category: "Emergency Liquidity",
        desc: "Avoid liquidating long-term compounding investments during unexpected medical crises. Draw instant funds to cover hospital costs without lock-in delays.",
    },
    {
        icon: Building2,
        title: "Working Capital & Business Expansion",
        category: "Commercial Growth",
        desc: "Inject agile working capital into your enterprise, settle supplier payments, or bridge seasonal cash flow gaps without diluting equity or taking high-cost loans.",
    },
    {
        icon: GraduationCap,
        title: "Higher Education & Tuition",
        category: "Academic Funding",
        desc: "Fund overseas university tuition, living fees, or specialized certifications effortlessly while your mutual fund folios and equities continue growing uninterrupted.",
    },
    {
        icon: Plane,
        title: "Major Life Milestones & Travel",
        category: "Lifestyle Milestones",
        desc: "Finance home renovations, family weddings, or international travel cost-effectively at secured interest rates instead of relying on expensive unsecured credit cards.",
    },
];

export const LASUseCasesSection: React.FC = () => {
    return (
        <section
            className="py-14 md:py-20 bg-[#FFFFFF] relative overflow-hidden font-sans border-b border-[#E5E5E0]"
            id="las-use-cases-section"
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
                        Smart Capital Allocation
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        How Borrowers Deploy LAS Facilities
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        A sanctioned LAS credit line offers complete spending discretion. Once active, utilize funds for any personal, professional, or commercial requirement.
                    </p>
                </motion.div>

                {/* Use Cases Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {USE_CASES.map((useCase, idx) => {
                        const Icon = useCase.icon;

                        return (
                            <motion.div
                                key={useCase.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                className="bg-[#FFFDF5] p-7 rounded-3xl border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                            >
                                <div>
                                    {/* Top Icon and Category Header */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-13 h-13 rounded-2xl bg-[#FFF8D6] border border-[#F4C430]/30 flex items-center justify-center text-[#171717] shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                                            <Icon size={24} strokeWidth={2} />
                                        </div>
                                        <span className="text-[10px] font-extrabold text-[#6B6B6B] uppercase tracking-wider bg-[#FFFFFF] px-2.5 py-1 rounded-md border border-[#E5E5E0]">
                                            {useCase.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-[#171717] mb-2.5 leading-snug">
                                        {useCase.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                                        {useCase.desc}
                                    </p>
                                </div>

                                <div className="pt-6 mt-6 border-t border-[#E5E5E0] flex items-center justify-between text-xs font-bold text-[#171717]">
                                    <span>Instant Overdraft Drawdown</span>
                                    <ArrowUpRight size={16} className="text-[#6B6B6B] group-hover:text-[#171717] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};