"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, UserCheck, CreditCard, Send, CheckSquare, Zap, ChevronRight } from 'lucide-react';

const steps = [
    {
        icon: <UserCheck className="w-8 h-8 sm:w-10 sm:h-10" />,
        title: "Registration",
        desc: "Visit the NPS portal of Infinity Arthvishwa and click on new registration."
    },
    {
        icon: <FileText className="w-8 h-8 sm:w-10 sm:h-10" />,
        title: "KYC Details",
        desc: "Enter your Aadhaar or PAN details for KYC verification via OTP authentication."
    },
    {
        icon: <CheckSquare className="w-8 h-8 sm:w-10 sm:h-10" />,
        title: "Fill Application",
        desc: "Provide personal details, bank info, and nomination. Select Pension Fund Manager."
    },
    {
        icon: <CreditCard className="w-8 h-8 sm:w-10 sm:h-10" />,
        title: "Payment",
        desc: "Make the initial contribution (Min ₹500) through Net Banking/Debit/UPI."
    },
    {
        icon: <Send className="w-8 h-8 sm:w-10 sm:h-10" />,
        title: "PRAN Generation",
        desc: "PRAN (Permanent Retirement Account Number) is generated instantly for your account."
    }
];

interface ApplicationProcessProps {
    onApply?: () => void;
}

export default function ApplicationProcess({ onApply }: ApplicationProcessProps) {
    return (
        <section id="application-process" className="py-16 md:py-24 bg-white overflow-hidden font-sans border-b border-[#E5E5E0]">
            <div className="container mx-auto px-4 md:px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF8D6] border border-[#F4C430]/40 text-[#171717] font-bold text-xs mb-6 uppercase tracking-widest shadow-xs">
                        <Zap size={14} className="text-[#E91E63] animate-pulse" />
                        Simple &amp; Fast
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
                        Process to Apply
                    </h2>

                    <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal">
                        Open your NPS account in 5 simple steps. Experience a 100% digital and hassle-free onboarding process.
                    </p>
                </motion.div>

                <div className="relative max-w-6xl mx-auto">

                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.25rem] left-0 w-full h-1 bg-[#E5E5E0] -z-0">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-[#F4C430]"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 relative z-10">

                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >

                                {/* Icon Circle */}
                                <div className="relative mb-6 w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-[#F4C430] shadow-md flex items-center justify-center text-[#171717] transform group-hover:scale-110 group-hover:bg-[#FFD21F] transition-all duration-300 p-3.5">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#171717] group-hover:text-[#E91E63] transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-[#6B6B6B] font-normal text-xs sm:text-sm leading-relaxed px-2 sm:px-4">
                                    {step.desc}
                                </p>

                                {/* Arrow (Mobile/Tablet) */}
                                {idx < steps.length - 1 && (
                                    <div className="lg:hidden mt-6 text-[#E5E5E0] animate-bounce">
                                        <ChevronRight size={28} className="rotate-90 md:rotate-0" />
                                    </div>
                                )}

                            </motion.div>
                        ))}

                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 sm:mt-20 text-center"
                >
                    <Link
                        href="/enquiry"
                        className="inline-block px-10 py-4 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all shadow-xl cursor-pointer text-base sm:text-lg"
                    >
                        Start Your NPS Journey Now
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
