"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ClipboardList,
    Lock,
    Landmark,
    FileSignature,
    Zap,
    ArrowRight,
    Sparkles,
    ChevronRight,
} from "lucide-react";

interface ProcessStep {
    step: string;
    title: string;
    desc: string;
    icon: React.ElementType;
}

const DEFAULT_PROCESS_STEPS: ProcessStep[] = [
    {
        step: "01",
        title: "Link Portfolio",
        desc: "Fetch Demat holdings or mutual fund folios via secure CAMS / KFintech OTP authentication.",
        icon: ClipboardList,
    },
    {
        step: "02",
        title: "Digital Pledging",
        desc: "Authorize the pledge online with depository verification via NSDL / CDSL with zero paperwork.",
        icon: Lock,
    },
    {
        step: "03",
        title: "Limit Sanction",
        desc: "Automated portfolio valuation generates an instant credit overdraft limit at approved LTV rates.",
        icon: Landmark,
    },
    {
        step: "04",
        title: "E-Sign Agreement",
        desc: "Complete digital KYC and digitally sign your loan sanction agreement in minutes.",
        icon: FileSignature,
    },
    {
        step: "05",
        title: "Instant Disbursal",
        desc: "Draw funds into your linked bank account 24/7 as needed, paying interest solely on utilized amounts.",
        icon: Zap,
    },
];

interface LASProcessStepsProps {
    steps?: ProcessStep[];
    onApplyClick?: () => void;
}

export const LASProcessSteps: React.FC<LASProcessStepsProps> = ({
    steps = DEFAULT_PROCESS_STEPS,
    onApplyClick,
}) => {
    const handleApply =
        onApplyClick ||
        (() => {
            console.log("Apply clicked from LASProcessSteps");
        });

    return (
        <section
            className="py-14 md:py-20 bg-[#FFFFFF] relative overflow-hidden font-sans border-b border-[#E5E5E0]"
            id="las-process-steps-section"
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
                        Paperless Onboarding
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        Digitized 5-Step Pledging Process
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        A transparent, 100% online workflow to unlock cash against your investments in under 4 hours.
                    </p>
                </motion.div>

                {/* Process Steps Timeline */}
                <div className="relative max-w-6xl mx-auto">

                    {/* Desktop Connecting Line */}
                    <div className="hidden lg:block absolute top-[2.25rem] left-[10%] right-[10%] h-0.5 bg-[#E5E5E0] z-0" />

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 relative z-10">
                        {steps.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    className="flex flex-col items-center text-center group"
                                >
                                    {/* Step Icon Badge */}
                                    <div className="relative mb-5">
                                        <div className="w-16 h-16 rounded-2xl bg-[#FFF8D6] border border-[#E5E5E0] flex items-center justify-center text-[#171717] shadow-xs group-hover:scale-105 group-hover:border-[#F4C430] transition-all duration-200">
                                            <Icon size={26} strokeWidth={2} />
                                        </div>
                                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F4C430] text-[#171717] font-extrabold text-xs flex items-center justify-center border-2 border-[#FFFFFF] shadow-xs">
                                            {item.step}
                                        </span>
                                    </div>

                                    {/* Card Container */}
                                    <div className="bg-[#FFFDF5] p-5 rounded-2xl border border-[#E5E5E0] group-hover:border-[#F4C430] group-hover:shadow-xs transition-all duration-200 w-full flex-grow flex flex-col justify-between">
                                        <div>
                                            <div className="text-[#171717] font-extrabold text-[10px] uppercase tracking-wider mb-1.5 bg-[#FFF8D6] inline-block px-2.5 py-0.5 rounded-md border border-[#F4C430]/30">
                                                Step {item.step}
                                            </div>

                                            <h3 className="text-sm sm:text-base font-extrabold text-[#171717] mb-2 leading-snug">
                                                {item.title}
                                            </h3>

                                            <p className="text-xs text-[#6B6B6B] leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Mobile Down Chevron */}
                                    {index < steps.length - 1 && (
                                        <div className="lg:hidden mt-4 text-[#E5E5E0]">
                                            <ChevronRight size={20} className="rotate-90 md:rotate-0" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                </div>

                {/* Action Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                    className="mt-12 sm:mt-16 text-center"
                >
                    <button
                        type="button"
                        onClick={handleApply}
                        className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl font-bold text-base md:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                    >
                        <span>Pledge Your Portfolio Online</span>
                        <ArrowRight size={20} className="stroke-[2.5]" />
                    </button>

                    <p className="mt-3 text-xs text-[#6B6B6B] font-bold uppercase tracking-wider">
                        Zero physical branch visits required
                    </p>
                </motion.div>

            </div>
        </section>
    );
};