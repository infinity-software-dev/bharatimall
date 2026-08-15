"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Car, Percent } from "lucide-react";
import Image from "next/image";

interface VehicleLoanHeroProps {
    onApplyClick?: () => void;
    onCalculateClick?: () => void;
}

export default function VehicleLoanHero({
    onApplyClick,
    onCalculateClick,
}: VehicleLoanHeroProps) {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 pb-12 lg:pt-28 lg:pb-16 bg-[#FFFDF5] font-sans border-b border-[#E5E5E0]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

                    {/* Left Column: Headline & Controls */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col items-center lg:items-start w-full text-center lg:text-left"
                    >
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] border border-[#F4C430]/40 text-[#171717] font-bold text-xs mb-5 uppercase tracking-wider shadow-xs">
                            <Car size={15} className="text-[#171717]" />
                            <span>Premium Vehicle Financing</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#171717] leading-tight tracking-tight mb-4">
                            Drive Your{" "}
                            <span className="inline-block bg-[#FFF8D6] px-3 py-0.5 rounded-xl border border-[#F4C430]/30">
                                Dream Vehicle
                            </span>{" "}
                            Today
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-[#6B6B6B] mb-8 leading-relaxed max-w-xl font-medium">
                            Experience the fastest route to vehicle ownership. Secure{" "}
                            <strong className="text-[#171717] font-bold">
                                up to 100% on-road funding
                            </strong>{" "}
                            with competitive interest rates, customized tenures, and same-day provisional sanctions.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 w-full sm:w-auto mb-10">
                            <button
                                type="button"
                                onClick={onApplyClick}
                                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl font-bold text-base md:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto cursor-pointer"
                            >
                                <span>Apply Now</span>
                                <ArrowRight size={20} className="stroke-[2.5]" />
                            </button>

                            <button
                                type="button"
                                onClick={onCalculateClick}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFFFFF] hover:bg-[#FFF8D6] text-[#171717] rounded-xl font-bold text-base md:text-lg border border-[#E5E5E0] hover:border-[#F4C430] shadow-xs hover:shadow-sm transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto cursor-pointer"
                            >
                                <span>Calculate EMI</span>
                            </button>
                        </div>

                        {/* Metric Highlights Row */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#E5E5E0] pt-6 w-full text-center lg:text-left">
                            <div className="flex flex-col items-center lg:items-start">
                                <div className="text-2xl sm:text-3xl font-extrabold text-[#171717] mb-0.5">
                                    8.50%
                                </div>
                                <div className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider">
                                    Starting APR
                                </div>
                            </div>

                            <div className="flex flex-col border-l border-[#E5E5E0] pl-3 sm:pl-6 items-center lg:items-start">
                                <div className="text-2xl sm:text-3xl font-extrabold text-[#171717] mb-0.5 flex items-center gap-1">
                                    <Zap size={22} className="text-[#F4C430] fill-[#F4C430]" />
                                    <span>Instant</span>
                                </div>
                                <div className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider">
                                    Digital KYC
                                </div>
                            </div>

                            <div className="flex flex-col border-l border-[#E5E5E0] pl-3 sm:pl-6 items-center lg:items-start">
                                <div className="text-2xl sm:text-3xl font-extrabold text-[#171717] mb-0.5 flex items-center gap-1">
                                    <ShieldCheck size={22} className="text-[#198754]" />
                                    <span>100%</span>
                                </div>
                                <div className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider">
                                    On-Road Cover
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Hero Visual Artwork */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Background Glow */}
                        <div className="absolute inset-0 rounded-full bg-[#FFF8D6]/70 blur-3xl pointer-events-none" />

                        <div className="relative z-10 w-full max-w-[560px] bg-[#FFFFFF] p-4 sm:p-5 rounded-3xl border border-[#E5E5E0] shadow-xl overflow-hidden group">
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#F5F5F3]">
                                <Image
                                    src="/loan/vehicle-loan image.jpeg"
                                    alt="Vehicle Financing Illustration"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 560px"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}