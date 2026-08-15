"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    TrendingUp,
    Receipt,
    Gift,
    ShieldCheck,
    ListCheck,
    TrendingDown,
    BookOpen,
    CheckCircle2,
} from "lucide-react";

export const LASEducationalSection: React.FC = () => {
    return (
        <section
            className="py-14 md:py-20 bg-[#FFFFFF] relative overflow-hidden font-sans border-b border-[#E5E5E0]"
            id="las-educational-section"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section 1: Why Pledge Instead of Sell */}
                <div className="mb-14 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                            <BookOpen size={14} className="text-[#171717]" />
                            Educational Center
                        </div>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                            Why Pledge Instead of Sell?
                        </h2>

                        <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                            Unlock the liquidity value of your investments for immediate capital needs without disrupting your long-term wealth compounding.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

                        {/* 1. Avoid Capital Gains Tax */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 }}
                            className="bg-[#FFFDF5] p-7 md:p-8 rounded-3xl border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-14 h-14 bg-[#FFF8D6] border border-[#F4C430]/30 rounded-2xl flex items-center justify-center text-[#171717] mb-6 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                                    <Receipt size={26} strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold text-[#171717] mb-3 leading-snug">
                                    Avoid Capital Gains Tax
                                </h3>
                                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                                    Selling profitable stocks or mutual funds triggers STCG or LTCG tax liabilities. Pledging allows you to borrow liquidity against your portfolio with zero taxable events.
                                </p>
                            </div>
                        </motion.div>

                        {/* 2. Keep Your Corporate Benefits */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.16 }}
                            className="bg-[#FFFDF5] p-7 md:p-8 rounded-3xl border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-14 h-14 bg-[#FFF8D6] border border-[#F4C430]/30 rounded-2xl flex items-center justify-center text-[#171717] mb-6 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                                    <Gift size={26} strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold text-[#171717] mb-3 leading-snug">
                                    Retain Dividends & Rights
                                </h3>
                                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                                    Even while pledged as collateral, you retain full beneficial ownership. All corporate actions—including dividends, interest payouts, rights issues, and bonus shares—credit directly to you.
                                </p>
                            </div>
                        </motion.div>

                        {/* 3. Ride Market Upsides */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.24 }}
                            className="bg-[#FFFDF5] p-7 md:p-8 rounded-3xl border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-14 h-14 bg-[#FFF8D6] border border-[#F4C430]/30 rounded-2xl flex items-center justify-center text-[#171717] mb-6 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                                    <TrendingUp size={26} strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold text-[#171717] mb-3 leading-snug">
                                    Maintain Market Upside
                                </h3>
                                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                                    As the equity and debt markets appreciate, your portfolio value grows in parallel. You never sacrifice future compounding gains simply to fund current capital commitments.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* Section 2: Margin Calls & Approved Scrips */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Margin Call Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#FFFDF5] rounded-3xl p-7 sm:p-9 border border-[#E5E5E0] hover:border-[#F4C430] transition-colors shadow-xs"
                    >
                        <div className="flex items-start gap-4 mb-5">
                            <div className="w-13 h-13 shrink-0 bg-[#FFF8D6] rounded-2xl flex items-center justify-center text-[#171717] border border-[#F4C430]/30 shadow-xs">
                                <TrendingDown size={24} strokeWidth={2} />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider block mb-0.5">
                                    Risk Management
                                </span>
                                <h3 className="text-xl font-bold text-[#171717]">
                                    Understanding Margin Calls
                                </h3>
                            </div>
                        </div>

                        <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed mb-6">
                            Because market valuations fluctuate daily, your portfolio value is monitored via Mark-to-Market (MTM). If a market downturn drops your collateral value below the lender&apos;s maintenance threshold, a <strong className="text-[#171717]">Margin Call</strong> is issued.
                        </p>

                        <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E5E5E0]">
                            <h4 className="text-xs font-bold text-[#171717] uppercase tracking-wider mb-3">
                                How to Resolve a Margin Call:
                            </h4>
                            <ul className="space-y-2.5 text-xs text-[#292929]">
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 size={15} className="text-[#171717] shrink-0 mt-0.5" />
                                    <span>Pledge additional approved securities or mutual fund folios online.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 size={15} className="text-[#171717] shrink-0 mt-0.5" />
                                    <span>Partially repay outstanding principal to bring the LTV back into compliance.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Approved Scrips Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#FFFDF5] rounded-3xl p-7 sm:p-9 border border-[#E5E5E0] hover:border-[#F4C430] transition-colors shadow-xs"
                    >
                        <div className="flex items-start gap-4 mb-5">
                            <div className="w-13 h-13 shrink-0 bg-[#FFF8D6] rounded-2xl flex items-center justify-center text-[#171717] border border-[#F4C430]/30 shadow-xs">
                                <ListCheck size={24} strokeWidth={2} />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider block mb-0.5">
                                    Collateral Quality
                                </span>
                                <h3 className="text-xl font-bold text-[#171717]">
                                    Approved Securities Universe
                                </h3>
                            </div>
                        </div>

                        <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed mb-6">
                            To ensure safety and liquidity for both borrower and lender, credit lines are sanctioned exclusively against institutional-grade assets. Illiquid penny stocks and unlisted shares are excluded.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-[#171717]">
                            <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E5E5E0] flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-[#171717]" />
                                <span>Nifty / BSE Group-A Stocks</span>
                            </div>
                            <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E5E5E0] flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-[#171717]" />
                                <span>Equity & Balanced Mutual Funds</span>
                            </div>
                            <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E5E5E0] flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-[#171717]" />
                                <span>Debt & Liquid Fund Folios</span>
                            </div>
                            <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E5E5E0] flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-[#171717]" />
                                <span>RBI Sovereign Gold Bonds (SGBs)</span>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};