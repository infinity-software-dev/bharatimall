"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ClipboardEdit,
    CheckCircle2,
    FileCheck,
    Landmark,
    Car,
    Zap,
    ArrowRight,
    ChevronRight,
} from "lucide-react";

interface VehicleLoanProcessProps {
    onApplyClick?: () => void;
}

const processSteps = [
    {
        step: "01",
        title: "Submit Details",
        description: "Fill out a quick online form with basic vehicle and personal income details.",
        icon: ClipboardEdit,
    },
    {
        step: "02",
        title: "Instant Approval",
        description: "Digital evaluation to verify eligibility and unlock pre-approved rate quotes.",
        icon: CheckCircle2,
    },
    {
        step: "03",
        title: "Upload Docs",
        description: "Seamless digital upload of basic KYC and income statements.",
        icon: FileCheck,
    },
    {
        step: "04",
        title: "Verification",
        description: "Finalize loan sanction terms with transparent hypothecation terms.",
        icon: Landmark,
    },
    {
        step: "05",
        title: "Direct Disbursal",
        description: "Sanctioned funds transferred directly to your vehicle dealership for delivery.",
        icon: Car,
    },
];

export default function VehicleLoanProcess({ onApplyClick }: VehicleLoanProcessProps) {
    const handleApply =
        onApplyClick ||
        (() => {
            console.log("Start Application clicked from VehicleLoanProcess");
        });

    return (
        <section
            className="py-14 md:py-20 bg-[#FFFFFF] overflow-hidden font-sans border-b border-[#E5E5E0]"
            id="vehicle-loan-process-section"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <Zap size={14} className="text-[#171717]" />
                        Fast-Track Disbursal
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        How It Works
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        Experience a smooth, fully digital journey from preliminary application to dealership disbursal.
                    </p>
                </motion.div>

                {/* Process Timeline */}
                <div className="relative max-w-6xl mx-auto">

                    {/* Desktop Connecting Line */}
                    <div className="hidden lg:block absolute top-[2.25rem] left-[10%] right-[10%] h-0.5 bg-[#E5E5E0] z-0" />

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                        {processSteps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.35 }}
                                    className="flex flex-col items-center text-center group"
                                >
                                    {/* Step Number + Icon Container */}
                                    <div className="relative mb-5">
                                        <div className="w-16 h-16 rounded-2xl bg-[#FFF8D6] border border-[#E5E5E0] flex items-center justify-center text-[#171717] shadow-xs group-hover:scale-105 group-hover:border-[#F4C430] transition-all duration-200">
                                            <Icon size={26} strokeWidth={2} />
                                        </div>
                                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F4C430] text-[#171717] font-extrabold text-xs flex items-center justify-center border-2 border-[#FFFFFF] shadow-xs">
                                            {step.step}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base sm:text-lg font-bold mb-2 text-[#171717] leading-snug">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed px-2">
                                        {step.description}
                                    </p>

                                    {/* Mobile Down Arrow */}
                                    {idx < processSteps.length - 1 && (
                                        <div className="lg:hidden mt-6 text-[#E5E5E0]">
                                            <ChevronRight size={22} className="rotate-90 md:rotate-0" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 sm:mt-16 text-center"
                >
                    <button
                        type="button"
                        onClick={handleApply}
                        className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl font-bold text-base md:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                    >
                        <span>Start Your Application Now</span>
                        <ArrowRight size={20} className="stroke-[2.5]" />
                    </button>

                    <p className="mt-3 text-xs text-[#6B6B6B] font-bold uppercase tracking-wider">
                        Takes less than 5 minutes to complete
                    </p>
                </motion.div>

            </div>
        </section>
    );
}