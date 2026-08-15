"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Calculator } from "lucide-react";

interface BusinessLoanHeroProps {
    onApplyClick: () => void;
    onCalculateClick: () => void;
}

export default function BusinessLoanHero({
    onApplyClick,
    onCalculateClick,
}: BusinessLoanHeroProps) {
    return (
        <section className="relative overflow-hidden font-sans bg-[#FFFDF5] pt-20 pb-12 lg:pt-28 lg:pb-20 border-b border-[#E5E5E0]">
            <div className="relative container mx-auto px-4 md:px-6 max-w-6xl z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] border border-[#F4C430]/40 text-[#171717] font-semibold text-xs md:text-sm mb-6 shadow-xs">
                            <ShieldCheck size={16} className="text-[#171717]" />
                            <span>Fuel Your Enterprise Growth with Confidence</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-[#171717] tracking-tight">
                            Empowering Business with{" "}
                            <span className="inline-block bg-[#FFF8D6] px-3 py-0.5 rounded-xl border border-[#F4C430]/30">
                                Smart Financing
                            </span>
                        </h1>

                        {/* Subheading Description */}
                        <p className="text-base sm:text-lg md:text-xl text-[#6B6B6B] mb-8 sm:mb-10 leading-relaxed max-w-2xl">
                            Access flexible, competitive business capital designed to scale your operations, manage working capital, and expand infrastructure with zero hidden charges.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md sm:max-w-none mb-12">
                            <button
                                type="button"
                                onClick={onApplyClick}
                                className="group inline-flex items-center justify-center gap-2 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] px-8 py-4 rounded-xl font-bold text-base md:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                            >
                                <span>Apply Now</span>
                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </button>

                            <button
                                type="button"
                                onClick={onCalculateClick}
                                className="inline-flex items-center justify-center gap-2 bg-[#FFFFFF] hover:bg-[#FFF8D6] text-[#171717] px-8 py-4 rounded-xl font-bold text-base md:text-lg border border-[#E5E5E0] hover:border-[#F4C430] shadow-xs hover:shadow-sm transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                            >
                                <Calculator size={18} className="text-[#171717]" />
                                <span>Calculate EMI</span>
                            </button>
                        </div>

                        {/* Stats Highlight Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-3xl mx-auto pt-6 border-t border-[#E5E5E0]">
                            <div className="flex flex-col items-center p-4 bg-[#FFFFFF] rounded-2xl border border-[#E5E5E0] shadow-xs">
                                <div className="text-3xl md:text-4xl font-extrabold text-[#171717] mb-0.5">
                                    9.50%
                                    <span className="text-lg font-bold text-[#F4C430] ml-0.5">*</span>
                                </div>
                                <div className="text-[10px] md:text-xs font-bold text-[#6B6B6B] uppercase tracking-wider">
                                    Starting APR
                                </div>
                            </div>

                            <div className="flex flex-col items-center p-4 bg-[#FFFFFF] rounded-2xl border border-[#E5E5E0] shadow-xs">
                                <div className="text-3xl md:text-4xl font-extrabold text-[#171717] mb-0.5">
                                    24 <span className="text-lg font-bold text-[#6B6B6B]">Hrs</span>
                                </div>
                                <div className="text-[10px] md:text-xs font-bold text-[#6B6B6B] uppercase tracking-wider">
                                    Quick Sanction
                                </div>
                            </div>

                            <div className="col-span-2 md:col-span-1 flex flex-col items-center p-4 bg-[#FFFFFF] rounded-2xl border border-[#E5E5E0] shadow-xs">
                                <div className="text-3xl md:text-4xl font-extrabold text-[#171717] mb-0.5">
                                    Up to ₹2 Cr
                                </div>
                                <div className="text-[10px] md:text-xs font-bold text-[#6B6B6B] uppercase tracking-wider">
                                    Collateral Free
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}