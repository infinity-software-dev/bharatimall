"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Zap, ShieldCheck, Rocket, ChevronRight, ArrowRight } from "lucide-react";

const steps = [
    {
        title: "Check Eligibility",
        desc: "Quick 2-minute preliminary check with basic business credentials and credit profile verification.",
        icon: ClipboardCheck,
    },
    {
        title: "Digital Verification",
        desc: "Seamless digital document upload for rapid KYC and financial statement verification.",
        icon: ShieldCheck,
    },
    {
        title: "Best Offer Matching",
        desc: "Automated underwriting matches your profile with optimal lending partners for lowest rates.",
        icon: Zap,
    },
    {
        title: "Direct Disbursal",
        desc: "Sanctioned funds are credited directly to your current account within 24 to 48 hours.",
        icon: Rocket,
    },
];

interface BusinessLoanStepProcessProps {
    onApplyClick?: () => void;
}

export default function BusinessLoanStepProcess({
    onApplyClick,
}: BusinessLoanStepProcessProps) {
    return (
        <section className="py-14 md:py-20 bg-[#FFFFFF] overflow-hidden font-sans border-b border-[#E5E5E0]">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <Zap size={14} className="text-[#171717] animate-pulse" />
                        Simple &amp; Efficient
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
                        Your Path to Capital in 4 Simple Steps
                    </h2>

                    <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Avoid lengthy branch negotiations. Our 100% digital process ensures your business secures the necessary capital without delays.
                    </p>
                </motion.div>

                {/* Steps Container */}
                <div className="relative max-w-6xl mx-auto">

                    {/* Desktop Connection Line */}
                    <div className="hidden lg:block absolute top-[2.25rem] left-[10%] w-[80%] h-0.5 bg-[#E5E5E0] z-0">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="h-full bg-[#F4C430]"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative z-10">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15 }}
                                    className="flex flex-col items-center text-center group"
                                >
                                    {/* Icon Circle with Step Number Badge */}
                                    <div className="relative mb-6">
                                        <div className="w-[72px] h-[72px] rounded-2xl bg-[#FFF8D6] border border-[#E5E5E0] shadow-xs flex items-center justify-center text-[#171717] transform group-hover:scale-105 group-hover:border-[#F4C430] transition-all duration-300">
                                            <Icon className="w-8 h-8 text-[#171717]" strokeWidth={1.75} />
                                        </div>
                                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F4C430] text-[#171717] font-extrabold text-xs flex items-center justify-center border-2 border-[#FFFFFF] shadow-xs">
                                            {idx + 1}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold mb-2 text-[#171717]">
                                        {step.title}
                                    </h3>

                                    <p className="text-[#6B6B6B] text-sm leading-relaxed px-2">
                                        {step.desc}
                                    </p>

                                    {/* Mobile Down Arrow */}
                                    {idx < steps.length - 1 && (
                                        <div className="lg:hidden mt-6 text-[#E5E5E0]">
                                            <ChevronRight size={28} className="rotate-90 md:rotate-0" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                </div>

                {/* CTA Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 sm:mt-16 text-center"
                >
                    <button
                        type="button"
                        onClick={onApplyClick}
                        className="inline-flex items-center gap-2.5 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] px-8 py-4 rounded-xl font-bold text-base md:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all cursor-pointer"
                    >
                        <span>Start Your Application Now</span>
                        <ArrowRight size={20} />
                    </button>
                </motion.div>

            </div>
        </section>
    );
}