"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    CarFront,
    Percent,
    Clock,
    Banknote,
    FileText,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const features = [
    {
        title: "Up to 100% On-Road Funding",
        description:
            "Cover registration fees, insurance, and road tax with zero to minimal upfront down payment on select models.",
        icon: CarFront,
    },
    {
        title: "Competitive Interest Rates",
        description:
            "Enjoy affordable interest rates starting from 8.50% p.a., keeping your monthly installment budget manageable.",
        icon: Percent,
    },
    {
        title: "Flexible Repayment Tenures",
        description:
            "Structured tenures ranging from 12 to 84 months, tailored to match your personal cash flow or business cycle.",
        icon: Clock,
    },
    {
        title: "Zero Pre-closure Penalties",
        description:
            "Prepay part or full loan balance after the initial lock-in period without incurring steep foreclosure charges.",
        icon: Banknote,
    },
    {
        title: "Minimal Digital Documentation",
        description:
            "Enjoy a fast-track, paperless loan sanction workflow with basic KYC verification and income statements.",
        icon: FileText,
    },
    {
        title: "Transparent & Upfront Terms",
        description:
            "Zero hidden fees, transparent processing costs, and clearly defined vehicle hypothecation and NOC release terms.",
        icon: ShieldCheck,
    },
];

export default function VehicleLoanFeatures() {
    return (
        <section
            className="py-14 md:py-20 bg-[#F5F5F3] font-sans border-b border-[#E5E5E0]"
            id="vehicle-loan-features-section"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <Sparkles size={14} className="text-[#171717]" />
                        Key Benefits
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        Why Choose Our Vehicle Loans?
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        Bringing your vehicle home is simpler, faster, and more affordable with our transparent financing framework.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                                className="bg-[#FFFFFF] rounded-2xl p-7 flex flex-col items-center text-center border border-[#E5E5E0] hover:border-[#F4C430] shadow-xs hover:shadow-md transition-all duration-200 group"
                            >
                                {/* Icon Container */}
                                <div className="w-14 h-14 rounded-2xl bg-[#FFF8D6] border border-[#F4C430]/30 flex items-center justify-center text-[#171717] mb-5 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                                    <Icon size={26} strokeWidth={2} />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-[#171717] mb-2.5 leading-snug">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}