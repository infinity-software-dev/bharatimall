"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    IndianRupee,
    Clock,
    HeartPulse,
    Receipt,
    Landmark,
    Sparkles,
    Globe,
    ChevronLeft,
    ChevronRight,
    Gift,
} from "lucide-react";

const benefits = [
    {
        icon: ShieldCheck,
        title: "Zero Pre-payment Charges",
        desc: "Repay your loan early without any penalty fees—save on total interest outflow and become debt-free sooner.",
    },
    {
        icon: IndianRupee,
        title: "Section 80E Tax Deduction",
        desc: "Claim up to 100% tax deduction on interest paid for up to 8 years under Section 80E of the Income Tax Act.",
    },
    {
        icon: Clock,
        title: "Flexible Moratorium Period",
        desc: "Zero EMI pressure during the course duration plus a 6 to 12 months grace period after graduation.",
    },
    {
        icon: HeartPulse,
        title: "Bundled Insurance Coverage",
        desc: "Student travel, emergency health, and loan protection covers seamlessly bundled with select lender products.",
    },
    {
        icon: Receipt,
        title: "100% Comprehensive Funding",
        desc: "Covers university tuition, living accommodation, laptops, textbooks, laboratory equipment, and airfare.",
    },
    {
        icon: Landmark,
        title: "Direct University Disbursal",
        desc: "Funds are transferred directly to your university's fee department to satisfy strict foreign visa timelines.",
    },
    {
        icon: Sparkles,
        title: "Central Interest Subsidy (CSIS)",
        desc: "Government interest subsidies available for eligible Economically Weaker Section (EWS) students during the moratorium.",
    },
    {
        icon: Globe,
        title: "Global 40+ Country Coverage",
        desc: "Unsecured and secured loans for top-ranked institutions across the USA, UK, Canada, Australia, Germany, and Ireland.",
    },
];

export default function BenefitsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo =
                direction === "left"
                    ? scrollLeft - clientWidth * 0.75
                    : scrollLeft + clientWidth * 0.75;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <section className="py-14 md:py-20 bg-[#FFFFFF] relative overflow-hidden font-sans border-b border-[#E5E5E0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <Gift size={14} className="text-[#171717]" />
                        Key Advantages
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        Benefits of Our Education Loan
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        We provide structured financial products built to grant you maximum repayment flexibility and peace of mind.
                    </p>
                </div>

                {/* Mobile Navigation Controls */}
                <div className="flex md:hidden items-center justify-center gap-3 mb-6">
                    <button
                        type="button"
                        onClick={() => scroll("left")}
                        className="w-10 h-10 rounded-full border border-[#E5E5E0] bg-[#FFFFFF] hover:bg-[#FFF8D6] flex items-center justify-center text-[#171717] shadow-xs active:scale-95 transition-all cursor-pointer"
                        aria-label="Previous Benefits"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        type="button"
                        onClick={() => scroll("right")}
                        className="w-10 h-10 rounded-full border border-[#E5E5E0] bg-[#FFFFFF] hover:bg-[#FFF8D6] flex items-center justify-center text-[#171717] shadow-xs active:scale-95 transition-all cursor-pointer"
                        aria-label="Next Benefits"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

                {/* Carousel Container */}
                <div className="relative flex items-center">

                    {/* Desktop Left Navigation Button */}
                    <button
                        type="button"
                        onClick={() => scroll("left")}
                        className="hidden md:flex absolute -left-5 z-20 w-11 h-11 rounded-full border border-[#E5E5E0] bg-[#FFFFFF] hover:bg-[#FFF8D6] hover:border-[#F4C430] items-center justify-center text-[#171717] shadow-md active:scale-95 transition-all cursor-pointer"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {/* Swipeable / Scrollable Cards Track */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-5 pb-6 pt-2 scrollbar-hide snap-x snap-mandatory touch-pan-x w-full"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {benefits.map((b, i) => {
                            const Icon = b.icon;
                            return (
                                <motion.div
                                    key={b.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: i * 0.05 }}
                                    className="min-w-[270px] sm:min-w-[300px] md:min-w-[320px] bg-[#FFFDF5] rounded-2xl p-7 border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-md transition-all duration-200 group flex flex-col items-center text-center snap-start"
                                >
                                    {/* Icon Circle */}
                                    <div className="w-13 h-13 bg-[#FFF8D6] rounded-2xl border border-[#F4C430]/30 flex items-center justify-center text-[#171717] mb-5 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                                        <Icon size={24} strokeWidth={2} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base sm:text-lg font-bold text-[#171717] mb-2.5 leading-snug">
                                        {b.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                                        {b.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Desktop Right Navigation Button */}
                    <button
                        type="button"
                        onClick={() => scroll("right")}
                        className="hidden md:flex absolute -right-5 z-20 w-11 h-11 rounded-full border border-[#E5E5E0] bg-[#FFFFFF] hover:bg-[#FFF8D6] hover:border-[#F4C430] items-center justify-center text-[#171717] shadow-md active:scale-95 transition-all cursor-pointer"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight size={20} />
                    </button>

                </div>

            </div>
        </section>
    );
}