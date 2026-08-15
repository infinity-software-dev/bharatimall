"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, CalendarDays, UserPlus } from 'lucide-react';

const MotionDiv = motion.div;

interface FDHeroProps {
    openLogin?: () => void;
    onApply?: () => void;
    scrollToCalculator?: () => void;
}

export default function FDHero({ openLogin, onApply, scrollToCalculator }: FDHeroProps) {
    const handleApply = onApply || openLogin || (() => { });

    return (
        <section className="relative overflow-hidden bg-[#FFFDF5] pt-4 sm:pt-6 pb-12 sm:pb-16 font-sans border-b border-[#E5E5E0]">
            <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                    {/* Left Content */}
                    <MotionDiv
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center text-center lg:items-start lg:text-left w-full"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] border border-[#F4C430]/40 text-[#171717] font-bold text-xs sm:text-sm mb-5 shadow-xs"
                        >
                            <ShieldCheck size={16} className="text-[#F4C430]" /> Premium Fixed Deposit Investment
                        </motion.div>

                        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight px-4 sm:px-0 text-[#171717]">
                            Grow Your Wealth With <br />
                            <span className="text-[#F4C430]">Fixed Deposits</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-[#6B6B6B] mb-6 lg:mb-8 leading-relaxed max-w-xl font-normal">
                            Sophisticated fixed-income solutions for secure wealth growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
                            <button
                                type="button"
                                onClick={handleApply}
                                className="group relative bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] px-8 py-4 rounded-2xl font-extrabold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-pointer active:scale-[0.98]"
                            >
                                <div className="relative z-10 flex items-center justify-center gap-3">
                                    <span>Apply Now</span>
                                    <ArrowRight
                                        size={20}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </div>
                            </button>
                            <button
                                type="button"
                                onClick={scrollToCalculator}
                                className="group relative bg-white px-8 py-4 rounded-2xl font-extrabold text-base sm:text-lg border-2 border-[#E5E5E0] text-[#171717] hover:border-[#F4C430] hover:bg-[#FFF8D6]/30 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
                            >
                                <span className="relative z-10">Calculate Returns</span>
                            </button>
                        </div>

                        {/* Premium Stats Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 border-t border-[#E5E5E0] pt-6 w-full">
                            <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0">
                                <div className="text-2xl sm:text-3xl font-extrabold text-[#198754] mb-1 flex items-center gap-1">9.10%*</div>
                                <div className="text-xs sm:text-sm font-semibold text-[#6B6B6B]">Max Returns</div>
                            </div>
                            <div className="flex flex-row sm:flex-col items-center sm:items-start border-t sm:border-t-0 sm:border-l border-[#E5E5E0] pt-4 sm:pt-0 sm:pl-8 gap-4 sm:gap-0">
                                <div className="text-2xl sm:text-3xl font-extrabold text-[#171717] mb-1 flex items-center gap-2">
                                    <CalendarDays className="text-[#F4C430]" size={24} />
                                </div>
                                <div className="text-xs sm:text-sm font-semibold text-[#6B6B6B]">Flexible Tenure Options</div>
                            </div>
                            <div className="flex flex-row sm:flex-col items-center sm:items-start border-t sm:border-t-0 sm:border-l border-[#E5E5E0] pt-4 sm:pt-0 sm:pl-8 gap-4 sm:gap-0">
                                <div className="text-2xl sm:text-3xl font-extrabold text-[#171717] mb-1 flex items-center gap-2">
                                    <UserPlus className="text-[#F4C430]" size={24} />
                                </div>
                                <div className="text-xs sm:text-sm font-semibold text-[#6B6B6B]">Senior Citizen Benefits</div>
                            </div>
                        </div>
                    </MotionDiv>

                    {/* Right Image/Illustration */}
                    <MotionDiv
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative hidden lg:flex items-center justify-center min-h-[450px]"
                    >
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative z-10 cursor-pointer"
                        >
                            <img
                                src="/FD/fdimage.png"
                                alt="Fixed Deposit Wealth Growth"
                                className="w-full max-w-[480px] h-auto object-contain drop-shadow-xl rounded-3xl"
                            />
                        </motion.div>
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
}
