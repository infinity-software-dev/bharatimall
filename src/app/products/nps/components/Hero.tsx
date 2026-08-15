'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
    onApply?: () => void;
}

export default function Hero({ onApply }: HeroProps) {
    return (
        <section className="relative overflow-hidden bg-[#FFFDF5] pt-4 sm:pt-6 pb-12 sm:pb-16 border-b border-[#E5E5E0]">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                    {/* Left Column: Marketing Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF8D6] border border-[#F4C430]/40 text-[#171717] font-semibold text-xs sm:text-sm mb-6 shadow-xs">
                            <ShieldCheck size={16} className="text-[#F4C430]" />
                            <span>The most trusted government-backed scheme</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold mb-4 sm:mb-6 leading-tight w-full flex flex-col gap-1 text-[#171717]">
                            <span className="block whitespace-nowrap">
                                Retire Smart
                            </span>
                            <span className="block whitespace-nowrap text-[#E91E63]">
                                with NPS
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-[#6B6B6B] mb-8 leading-relaxed max-w-xl pr-4 font-normal">
                            Grow your wealth systematically and enjoy a worry-free life post-retirement with National Pension System.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none">
                            <Link
                                href="/enquiry"
                                className="group relative text-[#171717] px-8 py-4 rounded-xl font-bold text-base sm:text-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer bg-[#F4C430] hover:bg-[#FFD21F] flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                <span>Apply Now</span>
                                <ArrowRight
                                    size={20}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </Link>

                            <button
                                type="button"
                                onClick={() => {
                                    const el = document.getElementById('account-types');
                                    if (el) {
                                        const y = el.getBoundingClientRect().top + window.scrollY - 100;
                                        window.scrollTo({ top: y, behavior: 'smooth' });
                                    }
                                }}
                                className="group relative bg-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg border-2 border-[#E5E5E0] hover:border-[#F4C430] hover:bg-[#FFFDF5] text-[#171717] transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center w-full sm:w-auto"
                            >
                                <span className="relative z-10">Learn More</span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Column: Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end w-full"
                    >
                        <div className="relative w-full max-w-lg lg:max-w-[620px]">
                            {/* Decorative background glow behind image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF8D6]/80 to-[#FFFDF5]/60 rounded-full blur-3xl transform scale-90" />

                            <img
                                src="/nps/nps.jpeg"
                                alt="NPS retirement planning"
                                className="relative w-full h-auto rounded-3xl object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-10 hover:scale-[1.02] transition-transform duration-300 border border-[#E5E5E0]/60"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
