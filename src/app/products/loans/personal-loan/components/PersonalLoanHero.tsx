"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Clock, Percent, Zap, TrendingUp, ArrowRight } from "lucide-react";

interface PersonalLoanHeroProps {
    onApply?: () => void;
}

export default function PersonalLoanHero({ onApply }: PersonalLoanHeroProps) {
    return (
        <section className="relative bg-[#FFFDF5] pt-20 pb-12 lg:pt-28 lg:pb-20 font-sans overflow-hidden border-b border-[#E5E5E0]">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-1">
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] border border-[#F4C430]/40 text-[#171717] text-xs md:text-sm font-semibold mb-5 md:mb-6 shadow-sm mx-auto lg:mx-0">
                            <span className="flex h-2 w-2 rounded-full bg-[#F4C430] animate-pulse"></span>
                            Instant Digital Approval
                        </div>

                        {/* Main Title */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6 text-[#171717]">
                            Smart Financing for Your Ambitions
                        </h1>

                        {/* Description */}
                        <p className="text-sm md:text-lg lg:text-xl text-[#6B6B6B] mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Access instant personal loans up to ₹50 Lakhs with Bharti. Realize your goals with industry-leading rates and a 100% paperless process.
                        </p>

                        {/* Apply Button */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                            <button
                                onClick={() => onApply?.()}
                                type="button"
                                className="group inline-flex items-center justify-center gap-2 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] px-8 py-4 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                            >
                                <span>Apply Now</span>
                                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md mx-auto lg:mx-0">
                            <div className="flex items-center gap-2.5 md:gap-3 p-2.5 bg-white border border-[#E5E5E0] rounded-xl shadow-xs justify-center lg:justify-start">
                                <div className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-lg bg-[#FFF8D6] flex items-center justify-center text-[#171717]">
                                    <Zap size={18} className="text-[#171717]" />
                                </div>
                                <span className="font-semibold text-[#292929] text-xs md:text-sm">Lightning Fast</span>
                            </div>

                            <div className="flex items-center gap-2.5 md:gap-3 p-2.5 bg-white border border-[#E5E5E0] rounded-xl shadow-xs justify-center lg:justify-start">
                                <div className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-lg bg-[#FFF8D6] flex items-center justify-center text-[#171717]">
                                    <ShieldCheck size={18} className="text-[#171717]" />
                                </div>
                                <span className="font-semibold text-[#292929] text-xs md:text-sm">Highly Secure</span>
                            </div>

                            <div className="flex items-center gap-2.5 md:gap-3 p-2.5 bg-white border border-[#E5E5E0] rounded-xl shadow-xs justify-center lg:justify-start">
                                <div className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-lg bg-[#FFF8D6] flex items-center justify-center text-[#171717]">
                                    <Percent size={18} className="text-[#171717]" />
                                </div>
                                <span className="font-semibold text-[#292929] text-xs md:text-sm">Low Interest</span>
                            </div>

                            <div className="flex items-center gap-2.5 md:gap-3 p-2.5 bg-white border border-[#E5E5E0] rounded-xl shadow-xs justify-center lg:justify-start">
                                <div className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-lg bg-[#FFF8D6] flex items-center justify-center text-[#171717]">
                                    <Clock size={18} className="text-[#171717]" />
                                </div>
                                <span className="font-semibold text-[#292929] text-xs md:text-sm">Flexible Tenure</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative order-2 lg:order-2 px-4 md:px-0">
                        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg bg-white border border-[#E5E5E0] z-10 w-full h-[280px] sm:h-[350px] md:h-[500px]">
                            <Image
                                src="/loan/personal-loan-hero.png"
                                alt="Personal finance and loan calculation"
                                width={500}
                                height={400}
                                priority
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div
                            className="hidden sm:flex absolute bottom-16 -right-2 md:-right-6 bg-white border border-[#E5E5E0] shadow-xl rounded-xl md:rounded-2xl p-3 md:p-4 items-center gap-3 md:gap-4 z-20 animate-bounce"
                            style={{ animationDuration: "4s" }}
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#FFF8D6] flex items-center justify-center text-[#171717] shrink-0">
                                <TrendingUp size={22} className="text-[#198754]" />
                            </div>
                            <div>
                                <p className="text-[10px] text-[#6B6B6B] font-semibold uppercase tracking-wider mb-0.5">Funding</p>
                                <p className="text-[#171717] font-bold text-xs md:text-sm whitespace-nowrap">Up to ₹50L</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}