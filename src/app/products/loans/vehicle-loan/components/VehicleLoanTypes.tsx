"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Car,
    Bike,
    Truck,
    Tractor,
    Scissors,
    HardHat,
    ArrowRight,
    Sparkles,
    Calculator,
} from "lucide-react";

interface VehicleLoanTypesProps {
    onApplyClick?: () => void;
}

const vehicleTypes = [
    {
        title: "Car Loan",
        icon: Car,
        description: "Flexible financing for premium passenger cars, sedans, and SUVs at competitive rates.",
        features: ["Up to 100% Funding", "Zero Foreclosure Fee", "Instant Approval"],
    },
    {
        title: "Two-Wheeler Loan",
        icon: Bike,
        description: "Quick sanctioning for commuter bikes, performance motorcycles, and electric scooters.",
        features: ["Minimal Paperwork", "Low Down Payment", "Same-Day Disbursal"],
    },
    {
        title: "Commercial Vehicle",
        icon: Truck,
        description: "Tailored funding for transport logistics, fleet expansion, and light/heavy commercial vehicles.",
        features: ["Customized Tenures", "Working Capital Support", "Fleet Discounts"],
    },
    {
        title: "Tractor Loan",
        icon: Tractor,
        description: "Agricultural machinery financing to modernize farming equipment and harvest productivity.",
        features: ["Seasonal EMI Options", "Zero Hidden Charges", "Hassle-Free Valuation"],
    },
    {
        title: "Harvester Loan",
        icon: Scissors,
        description: "Specialized asset financing for combine harvesters and high-capacity agro machinery.",
        features: ["Flexible Cash-Flow EMIs", "High LTV Ratios", "Fast Verification"],
    },
    {
        title: "Construction Equipment",
        icon: HardHat,
        description: "Heavy machinery and earth-moving equipment financing to scale infrastructure projects.",
        features: ["High Loan Quantum", "Structured Tenures", "Quick Technical Approval"],
    },
];

export default function VehicleLoanTypes({ onApplyClick }: VehicleLoanTypesProps) {
    const [loanCategory, setLoanCategory] = useState<"new" | "used">("new");

    const getDisplayTitle = (title: string, category: "new" | "used") => {
        if (
            category === "used" &&
            !title.startsWith("Used ") &&
            !title.includes("Equipment") &&
            !title.includes("Tractor") &&
            !title.includes("Harvester")
        ) {
            return `Used ${title}`;
        }
        return title;
    };

    const scrollToCalculator = () => {
        const el = document.getElementById("calculator");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="py-14 md:py-20 bg-[#FFFFFF] font-sans border-b border-[#E5E5E0]" id="vehicle-loan-types-section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <Sparkles size={14} className="text-[#171717]" />
                        Vehicle Segments
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        Choose Your Vehicle Loan Type
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        Find the perfect financing solution tailored to your personal mobility or commercial transport requirements.
                    </p>
                </div>

                {/* Category Switcher: New vs. Pre-Owned */}
                <div className="flex justify-center mb-10 md:mb-12">
                    <div className="inline-flex bg-[#F5F5F3] border border-[#E5E5E0] rounded-2xl p-1.5 gap-1.5 shadow-inner">
                        <button
                            type="button"
                            onClick={() => setLoanCategory("new")}
                            className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${loanCategory === "new"
                                    ? "bg-[#F4C430] text-[#171717] shadow-sm"
                                    : "text-[#6B6B6B] hover:text-[#171717]"
                                }`}
                        >
                            New Vehicles
                        </button>
                        <button
                            type="button"
                            onClick={() => setLoanCategory("used")}
                            className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${loanCategory === "used"
                                    ? "bg-[#F4C430] text-[#171717] shadow-sm"
                                    : "text-[#6B6B6B] hover:text-[#171717]"
                                }`}
                        >
                            Used / Pre-Owned
                        </button>
                    </div>
                </div>

                {/* Vehicle Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {vehicleTypes.map((loan, index) => {
                        const Icon = loan.icon;
                        return (
                            <motion.div
                                key={`${loan.title}-${loanCategory}`}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ y: -4 }}
                                className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 flex flex-col border border-[#E5E5E0] hover:border-[#F4C430] shadow-xs hover:shadow-md transition-all duration-200 group"
                            >
                                {/* Icon & Title */}
                                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-[#E5E5E0]">
                                    <div className="w-12 h-12 rounded-xl bg-[#FFF8D6] border border-[#F4C430]/30 flex items-center justify-center text-[#171717] shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                                        <Icon size={24} strokeWidth={2} />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#171717] leading-snug">
                                        {getDisplayTitle(loan.title, loanCategory)}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-xs sm:text-sm text-[#6B6B6B] mb-5 leading-relaxed">
                                    {loanCategory === "used"
                                        ? "Attractive loan terms, certified valuation support, and low interest rates for verified pre-owned models."
                                        : loan.description}
                                </p>

                                {/* Feature Pills */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {loan.features.map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[11px] font-bold text-[#292929] bg-[#FFFDF5] border border-[#E5E5E0] px-2.5 py-1 rounded-lg"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-auto pt-4 border-t border-[#E5E5E0] grid grid-cols-2 gap-2.5">
                                    <button
                                        type="button"
                                        onClick={scrollToCalculator}
                                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-[#171717] bg-[#FFFFFF] hover:bg-[#FFF8D6] border border-[#E5E5E0] hover:border-[#F4C430] transition-colors cursor-pointer"
                                    >
                                        <Calculator size={13} />
                                        <span>Calculate</span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={onApplyClick}
                                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-[#171717] bg-[#F4C430] hover:bg-[#FFD21F] shadow-xs hover:shadow transition-all cursor-pointer"
                                    >
                                        <span>Apply</span>
                                        <ArrowRight size={13} />
                                    </button>
                                </div>

                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}