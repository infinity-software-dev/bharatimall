"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Building2, ShieldCheck, HeartPulse, Clock, ArrowRightLeft, TrendingUp, Info } from 'lucide-react';

const BankVsNBFC = () => {
    return (
        <section className="pt-8 pb-20 bg-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#F4C430]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F4C430]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
                        Bank FD vs NBFC FD
                    </h2>
                    <div className="w-20 h-1 mx-auto rounded-full mb-4 bg-[#F4C430]" />
                    <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base font-normal">
                        Understanding the key differences helps you choose the right balance between safety and higher returns for your wealth growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Bank FD Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl shadow-md border border-[#E5E5E0] relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 hover:border-[#F4C430]"
                    >
                        {/* Top bar */}
                        <div className="h-1.5 w-full bg-[#171717]" />

                        <div className="p-8">
                            {/* Card Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-xs bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40">
                                    <Landmark size={28} className="text-[#171717]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#171717]">Bank FD</h3>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-[#FFFDF5] border border-[#E5E5E0] hover:border-[#F4C430] transition-all duration-200">
                                    <div className="w-9 h-9 rounded-lg bg-white shadow-xs border border-[#E5E5E0] flex items-center justify-center shrink-0 mt-0.5">
                                        <ShieldCheck size={20} className="text-[#F4C430]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#171717] mb-0.5">DICGC Insured</h4>
                                        <p className="text-sm text-[#6B6B6B] font-normal">Deposits up to ₹5 Lakh (Principal + Interest) are insured by RBI&apos;s subsidiary.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-[#FFFDF5] border border-[#E5E5E0] hover:border-[#F4C430] transition-all duration-200">
                                    <div className="w-9 h-9 rounded-lg bg-white shadow-xs border border-[#E5E5E0] flex items-center justify-center shrink-0 mt-0.5">
                                        <HeartPulse size={20} className="text-[#F4C430]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#171717] mb-0.5">Highly Regulated</h4>
                                        <p className="text-sm text-[#6B6B6B] font-normal">Directly governed by RBI policies ensuring maximum transparency.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-[#FFFDF5] border border-[#E5E5E0] hover:border-[#F4C430] transition-all duration-200">
                                    <div className="w-9 h-9 rounded-lg bg-white shadow-xs border border-[#E5E5E0] flex items-center justify-center shrink-0 mt-0.5">
                                        <Clock size={20} className="text-[#F4C430]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#171717] mb-0.5">Stable Interest</h4>
                                        <p className="text-sm text-[#6B6B6B] font-normal">Offers moderate but steady interest rates tailored for conservative growth.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* NBFC FD Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl shadow-md border border-[#E5E5E0] relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 hover:border-[#F4C430]"
                    >
                        {/* Top bar */}
                        <div className="h-1.5 w-full bg-[#F4C430]" />

                        <div className="p-8">
                            {/* Card Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-xs bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40">
                                    <Building2 size={28} className="text-[#171717]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#171717]">NBFC FD</h3>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-[#FFFDF5] border border-[#E5E5E0] hover:border-[#F4C430] transition-all duration-200">
                                    <div className="w-9 h-9 rounded-lg bg-white shadow-xs border border-[#E5E5E0] flex items-center justify-center shrink-0 mt-0.5">
                                        <TrendingUp size={20} className="text-[#F4C430]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#171717] mb-0.5">Higher Yields</h4>
                                        <p className="text-sm text-[#6B6B6B] font-normal">Typically offers 1-2% higher interest rates compared to traditional banks.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-[#FFFDF5] border border-[#E5E5E0] hover:border-[#F4C430] transition-all duration-200">
                                    <div className="w-9 h-9 rounded-lg bg-white shadow-xs border border-[#E5E5E0] flex items-center justify-center shrink-0 mt-0.5">
                                        <ShieldCheck size={20} className="text-[#F4C430]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#171717] mb-0.5">Credit Rated Safety</h4>
                                        <p className="text-sm text-[#6B6B6B] font-normal">Safety depends on corporate credit ratings (AAA, AA+) from CRISIL/ICRA.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-[#FFFDF5] border border-[#E5E5E0] hover:border-[#F4C430] transition-all duration-200">
                                    <div className="w-9 h-9 rounded-lg bg-white shadow-xs border border-[#E5E5E0] flex items-center justify-center shrink-0 mt-0.5">
                                        <ArrowRightLeft size={20} className="text-[#F4C430]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#171717] mb-0.5">Flexibility</h4>
                                        <p className="text-sm text-[#6B6B6B] font-normal">More flexible tenure options and frequent interest payout choices.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Key Takeaway Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8 sm:mt-10 w-full text-white py-6 px-6 sm:py-8 sm:px-12 rounded-2xl shadow-xl relative overflow-hidden bg-[#171717] border border-[#292929]"
                >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 relative z-10 text-center sm:text-left">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
                            <Info size={28} className="text-[#F4C430]" />
                        </div>
                        <div>
                            <h4 className="text-lg sm:text-xl font-bold mb-2 tracking-tight text-white">Key Takeaway for Investors</h4>
                            <p className="text-[#E5E5E0]/90 leading-relaxed text-xs sm:text-base font-normal">
                                While Bank FDs offer sovereign-grade security via DICGC insurance, NBFC FDs are excellent for boosting your overall portfolio returns.
                                We advise conservative investors to stick with Banks, while those seeking higher yields can explore AAA-rated corporate FDs with Shriram or Bajaj.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BankVsNBFC;
