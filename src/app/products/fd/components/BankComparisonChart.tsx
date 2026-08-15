"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Lock, Percent } from 'lucide-react';

const MotionDiv = motion.div;

const SectorComparisonMatrix = () => {
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full relative overflow-hidden font-sans pb-0"
        >
            <div className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
                        Find Your Perfect Investment Match
                    </h2>
                    <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal">
                        Compare safety parameters, interest ranges, and insurance coverage across all financial sectors.
                    </p>
                </div>

                {/* Desktop Table View */}
                <div className="hidden lg:block overflow-hidden rounded-[32px] border border-[#E5E5E0] bg-white shadow-lg">
                    <table className="w-full min-w-[900px] border-collapse">
                        <thead>
                            <tr className="bg-[#171717] text-white">
                                <th className="py-7 px-8 text-left font-bold uppercase text-xs tracking-[0.2em]">Sector Type</th>
                                <th className="py-7 px-8 text-center font-bold uppercase text-xs tracking-[0.2em]">
                                    <div className="flex items-center justify-center gap-2"><ShieldCheck size={16} className="text-[#F4C430]" /> Safety Profile</div>
                                </th>
                                <th className="py-7 px-8 text-center font-bold uppercase text-xs tracking-[0.2em]">
                                    <div className="flex items-center justify-center gap-2"><Percent size={16} className="text-[#F4C430]" /> Yield Range</div>
                                </th>
                                <th className="py-7 px-8 text-center font-bold uppercase text-xs tracking-[0.2em]">
                                    <div className="flex items-center justify-center gap-2"><Lock size={16} className="text-[#F4C430]" /> Protection</div>
                                </th>
                                <th className="py-7 px-8 text-center font-bold uppercase text-xs tracking-[0.2em]">
                                    <div className="flex items-center justify-center gap-2"><TrendingUp size={16} className="text-[#F4C430]" /> ROI Potential</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="font-sans">
                            {[
                                { sector: "Public Sector Banks", safety: "Highest (Sovereign)", rate: "6.5% - 7.5%", insurance: "DICGC (Up to ₹5L)", roi: "Stable Growth", fill: 25 },
                                { sector: "Private Sector Banks", safety: "Very High (RBI)", rate: "7.0% - 8.2%", insurance: "DICGC (Up to ₹5L)", roi: "Moderate Yield", fill: 50 },
                                { sector: "Small Finance Banks", safety: "High (RBI Supervised)", rate: "7.5% - 9.1%", insurance: "DICGC (Up to ₹5L)", roi: "High Yield", fill: 75 },
                                { sector: "NBFCs", safety: "Moderate (Credit Rated)", rate: "8.0% - 9.1%", insurance: "Internal (No DICGC)", roi: "Maximum Returns", fill: 100 }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-[#FFFDF5] transition-all duration-300 group border-b border-[#E5E5E0] last:border-none">
                                    <td className="py-8 px-8 font-bold text-[#171717]">
                                        <div className="flex flex-col">
                                            <span>{row.sector}</span>
                                            <span className="text-[10px] text-[#6B6B6B] font-bold uppercase mt-1 tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Financial Institution</span>
                                        </div>
                                    </td>
                                    <td className="py-8 px-8 text-center">
                                        <span className="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 shadow-xs inline-block text-nowrap">
                                            {row.safety}
                                        </span>
                                    </td>
                                    <td className="py-8 px-8 text-center">
                                        <div className="text-lg font-black text-[#E91E63] tracking-tight">{row.rate}</div>
                                        <div className="text-[10px] text-[#6B6B6B] font-bold uppercase mt-1 text-nowrap">Per Annum</div>
                                    </td>
                                    <td className="py-8 px-8 text-center">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="text-sm font-bold text-[#292929]">{row.insurance}</span>
                                        </div>
                                    </td>
                                    <td className="py-8 px-8 text-center">
                                        <div className="flex flex-col items-center">
                                            <span className="font-bold text-[#171717] mb-3 text-sm tracking-wide">{row.roi}</span>
                                            <div className="w-32 h-2.5 bg-[#E5E5E0] rounded-full overflow-hidden shadow-inner relative">
                                                <MotionDiv
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${row.fill}%` }}
                                                    transition={{ duration: 1.5, delay: 0.5 }}
                                                    whileHover={{ scaleY: 1.2 }}
                                                    className="h-full relative z-10 bg-gradient-to-r from-[#F4C430] to-[#E91E63]"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { sector: "Public Sector Banks", safety: "Highest (Sovereign)", rate: "6.5% - 7.5%", insurance: "DICGC (Up to ₹5L)", roi: "Stable Growth", fill: 25 },
                        { sector: "Private Sector Banks", safety: "Very High (RBI)", rate: "7.0% - 8.2%", insurance: "DICGC (Up to ₹5L)", roi: "Moderate Yield", fill: 50 },
                        { sector: "Small Finance Banks", safety: "High (RBI Supervised)", rate: "7.5% - 9.1%", insurance: "DICGC (Up to ₹5L)", roi: "High Yield", fill: 75 },
                        { sector: "NBFCs", safety: "Moderate (Credit Rated)", rate: "8.0% - 9.1%", insurance: "Internal (No DICGC)", roi: "Maximum Returns", fill: 100 }
                    ].map((row, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl border border-[#E5E5E0] p-6 shadow-md"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="font-bold text-[#171717] text-lg">{row.sector}</h4>
                                    <span className="text-[10px] text-[#6B6B6B] font-bold uppercase tracking-wider">Financial Institution</span>
                                </div>
                                <span className="px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/30 shadow-xs">
                                    {row.safety}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <div className="text-[10px] text-[#6B6B6B] font-bold uppercase mb-1">Yield Range</div>
                                    <div className="text-base font-black text-[#E91E63]">{row.rate}</div>
                                    <div className="text-[9px] text-[#6B6B6B] font-bold">Per Annum</div>
                                </div>
                                <div>
                                    <div className="text-[10px] text-[#6B6B6B] font-bold uppercase mb-1">Protection</div>
                                    <div className="text-sm font-bold text-[#292929]">{row.insurance}</div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-[10px] text-[#6B6B6B] font-bold uppercase">ROI Potential</div>
                                    <span className="font-bold text-[#171717] text-xs">{row.roi}</span>
                                </div>
                                <div className="w-full h-2 bg-[#E5E5E0] rounded-full overflow-hidden shadow-inner relative">
                                    <MotionDiv
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${row.fill}%` }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                        className="h-full relative z-10 bg-gradient-to-r from-[#F4C430] to-[#E91E63]"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </MotionDiv>
    );
};

export default SectorComparisonMatrix;
