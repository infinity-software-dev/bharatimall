"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Sparkles,
    TrendingUp,
    LineChart,
    ShieldCheck,
    Briefcase,
    PieChart,
    Landmark,
} from "lucide-react";

interface LASProduct {
    title: string;
    category: string;
    description: string;
    rate: string;
    ltv: string;
    popular?: boolean;
    icon: React.ElementType;
}

const DEFAULT_LAS_PRODUCTS: LASProduct[] = [
    {
        title: "Mutual Funds",
        category: "Equity & Debt Units",
        description: "Pledge your existing equity and debt mutual fund folios seamlessly without halting SIP investments or liquidating units.",
        rate: "8.50% - 10.25% p.a.",
        ltv: "Up to 80% LTV",
        popular: true,
        icon: TrendingUp,
    },
    {
        title: "Shares & Listed Equity",
        category: "Approved Demat Scrips",
        description: "Leverage approved Group-A shares across BSE/NSE to unlock instant credit limits while retaining dividend and voting rights.",
        rate: "8.75% - 11.00% p.a.",
        ltv: "Up to 50% LTV",
        popular: false,
        icon: LineChart,
    },
    {
        title: "Insurance Policies",
        category: "Traditional & Endowment",
        description: "Pledge high-surrender-value life insurance or endowment policies for guaranteed liquidity at attractive overdraft rates.",
        rate: "8.25% - 9.75% p.a.",
        ltv: "Up to 85% LTV",
        popular: false,
        icon: ShieldCheck,
    },
    {
        title: "Corporate & Sovereign Bonds",
        category: "Fixed Income Securities",
        description: "Monetize investment-grade rated corporate bonds and PSU tax-free bonds for stable, low-cost capital requirements.",
        rate: "8.00% - 9.50% p.a.",
        ltv: "Up to 85% LTV",
        popular: false,
        icon: Briefcase,
    },
    {
        title: "Exchange Traded Funds (ETFs)",
        category: "Gold & Index ETFs",
        description: "Pledge liquid Nifty 50, Bank Nifty, and Sovereign Gold ETFs for immediate capital access with daily mark-to-market flexibility.",
        rate: "8.50% - 10.50% p.a.",
        ltv: "Up to 75% LTV",
        popular: false,
        icon: PieChart,
    },
    {
        title: "Government Securities & SGBs",
        category: "G-Secs & Sovereign Gold",
        description: "Unlock collateral value against RBI Sovereign Gold Bonds (SGBs) and Treasury Bills with minimal haircut requirements.",
        rate: "7.99% - 9.25% p.a.",
        ltv: "Up to 90% LTV",
        popular: false,
        icon: Landmark,
    },
];

interface LASProductGridProps {
    openLogin?: () => void;
    products?: LASProduct[];
}

export const LASProductGrid: React.FC<LASProductGridProps> = ({
    openLogin,
    products = DEFAULT_LAS_PRODUCTS,
}) => {
    const handleApply =
        openLogin ||
        (() => {
            console.log("Enquire clicked from LASProductGrid");
        });

    return (
        <section
            id="products"
            className="py-14 md:py-20 bg-[#FFFFFF] relative overflow-hidden font-sans border-b border-[#E5E5E0]"
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
                        Collateral Portfolio
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight mb-3">
                        Loan Against Securities Products
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        Gain immediate liquidity without liquidating your investments or losing out on market upsides, dividends, and compounding.
                    </p>
                </motion.div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {products.map((product, idx) => {
                        const Icon = product.icon;

                        return (
                            <motion.div
                                key={product.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.06 }}
                                className={`relative rounded-3xl border bg-[#FFFFFF] p-7 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-200 group ${product.popular
                                        ? "border-[#F4C430] shadow-xs"
                                        : "border-[#E5E5E0] hover:border-[#F4C430]"
                                    }`}
                            >
                                {/* Popular Ribbon */}
                                {product.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F4C430] text-[#171717] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-xs border border-[#FFFFFF]">
                                        Most Popular
                                    </div>
                                )}

                                <div>
                                    {/* Icon & Category Header */}
                                    <div className="flex flex-col items-center text-center mb-5">
                                        <div className="w-14 h-14 bg-[#FFF8D6] border border-[#F4C430]/30 rounded-2xl flex items-center justify-center text-[#171717] mb-4 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                                            <Icon size={28} strokeWidth={2} />
                                        </div>
                                        <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">
                                            {product.category}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-extrabold text-[#171717] tracking-tight">
                                            {product.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-[#6B6B6B] text-center mb-6 leading-relaxed">
                                        {product.description}
                                    </p>

                                    {/* Key Metrics */}
                                    <div className="space-y-2.5 mb-7 border-t border-[#E5E5E0] pt-5">
                                        <div className="flex justify-between items-center py-1">
                                            <span className="text-xs font-bold text-[#6B6B6B] uppercase tracking-wider">
                                                Interest Rate
                                            </span>
                                            <span className="text-xs sm:text-sm font-extrabold text-[#171717] bg-[#FFF8D6] px-3 py-1 rounded-lg border border-[#F4C430]/30">
                                                {product.rate}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center py-1">
                                            <span className="text-xs font-bold text-[#6B6B6B] uppercase tracking-wider">
                                                Max LTV Ratio
                                            </span>
                                            <span className="text-xs sm:text-sm font-extrabold text-[#171717] bg-[#F5F5F3] px-3 py-1 rounded-lg border border-[#E5E5E0]">
                                                {product.ltv}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Enquire Button */}
                                <button
                                    type="button"
                                    onClick={handleApply}
                                    className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#171717] bg-[#F4C430] hover:bg-[#FFD21F] shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                                >
                                    <span>Enquire Now</span>
                                    <ArrowRight size={16} />
                                </button>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};