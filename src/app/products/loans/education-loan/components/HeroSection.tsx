"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
    onApplyClick: () => void;
}

export default function HeroSection({ onApplyClick }: HeroSectionProps) {
    return (
        <section className="relative min-h-[75vh] flex items-center bg-[#FFFDF5] overflow-hidden pt-20 pb-14 lg:pt-28 lg:pb-20 border-b border-[#E5E5E0] font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFF8D6] border border-[#F4C430]/40 rounded-full text-xs font-bold uppercase tracking-wider text-[#171717] shadow-xs">
                            <GraduationCap size={15} className="text-[#171717]" />
                            <span>Higher Education Financing</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#171717] leading-tight tracking-tight">
                            Fund Your{" "}
                            <span className="inline-block bg-[#FFF8D6] px-3 py-0.5 rounded-xl border border-[#F4C430]/30">
                                Dream Education
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-xl">
                            Access comprehensive education loans from ₹5 Lakhs up to ₹1.5 Cr+ for premier institutions in India and abroad. Enjoy quick sanctioning, flexible repayment moratoriums, and Section 80E tax benefits.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
                            <button
                                type="button"
                                onClick={onApplyClick}
                                className="inline-flex items-center justify-center gap-2 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] px-8 py-4 rounded-xl font-bold text-base md:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                            >
                                <span>Apply Now</span>
                                <ArrowRight size={18} />
                            </button>

                            <a
                                href="#loan-types-section"
                                className="inline-flex items-center justify-center gap-2 bg-[#FFFFFF] hover:bg-[#FFF8D6] text-[#171717] px-7 py-4 rounded-xl font-bold text-base md:text-lg border border-[#E5E5E0] hover:border-[#F4C430] shadow-xs hover:shadow-sm transform hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <span>Explore Loan Types</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Visual Illustration & Floating Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative flex justify-center items-center"
                    >
                        <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">

                            {/* Decorative Subtle Backing */}
                            <div className="absolute inset-0 rounded-full bg-[#FFF8D6]/60 blur-2xl pointer-events-none" />
                            <div className="absolute inset-6 rounded-full border border-dashed border-[#F4C430]/40 animate-spin-slow pointer-events-none" />

                            {/* Main Circular Frame */}
                            <div className="relative z-10 w-[270px] h-[270px] sm:w-[330px] sm:h-[330px] bg-[#FFFFFF] rounded-full flex items-center justify-center shadow-xl border-8 border-[#FFFFFF] overflow-hidden group">
                                <div className="relative w-full h-full bg-[#FFFDF5] flex items-center justify-center p-6">
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#FFF8D6] rounded-full flex items-center justify-center text-[#171717] shadow-inner">
                                        <GraduationCap size={64} className="text-[#171717]" strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge: Students Funded */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-2 -right-2 bg-[#FFFFFF] p-3.5 rounded-2xl shadow-lg flex items-center gap-3 border border-[#E5E5E0] z-20"
                            >
                                <div className="w-9 h-9 bg-[#FFF8D6] rounded-xl flex items-center justify-center text-[#171717] shrink-0">
                                    <Star size={18} className="fill-[#F4C430] text-[#F4C430]" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[9px] font-bold text-[#6B6B6B] uppercase tracking-wider">Students</div>
                                    <div className="text-xs sm:text-sm font-extrabold text-[#171717]">50,000+ Funded</div>
                                </div>
                            </motion.div>

                            {/* Floating Badge: Total Disbursed */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                                className="absolute -bottom-2 -left-2 bg-[#FFFFFF] p-3.5 rounded-2xl shadow-lg flex items-center gap-3 border border-[#E5E5E0] z-20"
                            >
                                <div className="w-9 h-9 bg-[#FFF8D6] rounded-xl flex items-center justify-center text-[#171717] shrink-0">
                                    <Check size={18} className="text-[#198754] stroke-[3]" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[9px] font-bold text-[#6B6B6B] uppercase tracking-wider">Disbursed</div>
                                    <div className="text-xs sm:text-sm font-extrabold text-[#171717]">₹2,000 Cr+</div>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}