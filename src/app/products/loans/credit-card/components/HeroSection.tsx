"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface HeroSectionProps {
    onApplyClick?: () => void;
}

export default function HeroSection({ onApplyClick }: HeroSectionProps) {
    const router = useRouter();
    const handleBackHome = () => router.push("/");

    const handleApply =
        onApplyClick ||
        (() => {
            console.log("Apply Now clicked from Credit Card Hero");
        });

    return (
        <section className="relative min-h-[75vh] flex items-center bg-[#FFFDF5] overflow-hidden pt-20 pb-14 lg:pt-28 lg:pb-20 border-b border-[#E5E5E0] font-sans">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                    {/* Left: Content (7 cols on desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-7 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs uppercase tracking-wider shadow-xs mt-6 lg:mt-0">
                            <CreditCard size={14} className="text-[#171717]" />
                            <span>Premium Rewards • Airport Lounge Access</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#171717] leading-tight tracking-tight">
                            Unlock Your{" "}
                            <span className="inline-block bg-[#FFF8D6] px-3 py-0.5 rounded-xl border border-[#F4C430]/30">
                                Financial Power
                            </span>
                        </h1>

                        {/* Subtitle / Description */}
                        <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-xl font-medium">
                            Compare and apply for India&apos;s best credit cards offering up to 10% cashback, complimentary luxury airport lounge access, accelerated reward multipliers, and zero annual fee offers.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
                            <button
                                type="button"
                                onClick={handleApply}
                                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl font-bold text-base md:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                            >
                                <span>Apply Now</span>
                                <ArrowRight size={20} className="stroke-[2.5]" />
                            </button>

                            <a
                                href="#types"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFFFFF] hover:bg-[#FFF8D6] text-[#171717] rounded-xl font-bold text-base md:text-lg border border-[#E5E5E0] hover:border-[#F4C430] shadow-xs hover:shadow-sm transform hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <span>Check Eligibility</span>
                            </a>
                        </div>

                        {/* Quick Metrics Row */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#E5E5E0] pt-6 w-full text-center lg:text-left">
                            <div>
                                <div className="text-xl sm:text-2xl font-extrabold text-[#171717]">
                                    50+
                                </div>
                                <div className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mt-0.5">
                                    Card Partners
                                </div>
                            </div>
                            <div className="border-l border-[#E5E5E0] pl-3 sm:pl-6">
                                <div className="text-xl sm:text-2xl font-extrabold text-[#171717]">
                                    10%
                                </div>
                                <div className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mt-0.5">
                                    Max Cashback
                                </div>
                            </div>
                            <div className="border-l border-[#E5E5E0] pl-3 sm:pl-6">
                                <div className="text-xl sm:text-2xl font-extrabold text-[#171717]">
                                    100%
                                </div>
                                <div className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mt-0.5">
                                    Digital Process
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Illustration (5 cols on desktop) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                        className="lg:col-span-5 relative flex items-center justify-center"
                    >
                        {/* Background Glow */}
                        <div className="absolute inset-0 rounded-full bg-[#FFF8D6]/70 blur-3xl pointer-events-none" />

                        <div className="relative z-10 w-full max-w-[440px] aspect-square rounded-3xl bg-[#FFFFFF] p-6 border border-[#E5E5E0] shadow-xl flex items-center justify-center group overflow-hidden">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#FFFDF5]">
                                <Image
                                    src="/loan/credit-card-hero.png"
                                    alt="Credit Card Illustration"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 440px"
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