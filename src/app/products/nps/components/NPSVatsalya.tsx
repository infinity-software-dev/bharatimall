'use client';

import React from 'react';
import { Baby, MoveRight, RefreshCw, ShieldCheck, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    {
        icon: Baby,
        title: 'Start Early (0–18 Years)',
        desc: 'Open an account for your minor child and gift them the powerful advantage of early wealth creation from birth.',
    },
    {
        icon: TrendingUp,
        title: 'Compound Growth',
        desc: 'Benefit from market-linked returns that grow exponentially over a long-term investment horizon of up to 60 years.',
    },
    {
        icon: RefreshCw,
        title: 'Seamless Transition',
        desc: 'Auto-converts to a regular Tier-I NPS account upon attaining adulthood, preserving all accumulated wealth.',
    }
];

interface NPSVatsalyaProps {
    onPlan?: () => void;
}

export default function NPSVatsalya({ onPlan }: NPSVatsalyaProps) {
    return (
        <section id="nps-vatsalya" className="relative py-12 md:py-16 bg-white overflow-hidden font-sans border-b border-[#E5E5E0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header - Centered & Styled */}
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center bg-[#FFF8D6] border border-[#F4C430]/40 text-[#171717] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-xs">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E91E63] mr-2" />
                            New Government Initiative
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
                            NPS <span className="text-[#E91E63]">Vatsalya</span>
                        </h2>

                        <p className="max-w-2xl mx-auto text-[#6B6B6B] font-normal text-base sm:text-lg leading-relaxed">
                            A specialized pension scheme for minors, leveraging the power of <span className="text-[#171717] font-bold">compounding</span> for lifelong financial security.
                        </p>
                    </motion.div>
                </div>

                {/* Benefits Grid - Centered Icons & Shadowed Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {benefits.map((benefit, i) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-white p-8 sm:p-10 rounded-[2rem] border-2 border-[#E5E5E0] shadow-lg hover:shadow-2xl hover:border-[#E91E63] transition-all duration-300 flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 bg-[#FFF8D6] rounded-2xl flex items-center justify-center text-[#171717] shadow-inner mb-6 group-hover:bg-[#F4C430] group-hover:text-[#171717] transition-all duration-300">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#171717] group-hover:text-[#E91E63] transition-colors mb-3">{benefit.title}</h3>
                                <p className="text-[#6B6B6B] font-normal text-xs sm:text-sm leading-relaxed px-2">
                                    {benefit.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Compact Info Card + CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#171717] rounded-[2.5rem] p-6 md:p-8 text-white shadow-2xl relative overflow-hidden border border-[#292929]"
                >
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12 text-center sm:text-left">
                            <div className="flex flex-col items-center sm:items-start">
                                <p className="text-[#E5E5E0]/70 text-[10px] font-black uppercase tracking-widest mb-1">Growth Advantage</p>
                                <p className="text-2xl md:text-3xl font-black text-[#F4C430]">60 Yrs of Growth</p>
                            </div>
                            <div className="hidden sm:block w-px h-12 bg-white/20" />
                            <div className="flex flex-col items-center sm:items-start">
                                <p className="text-[#E5E5E0]/70 text-[10px] font-black uppercase tracking-widest mb-1">Entry Requirement</p>
                                <p className="text-2xl md:text-3xl font-black text-white">Age 0–18 Years</p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={onPlan}
                            className="w-full lg:w-auto px-10 py-5 bg-[#F4C430] text-[#171717] hover:bg-[#FFD21F] rounded-xl font-bold text-base sm:text-lg transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95 cursor-pointer group"
                        >
                            Plan Child&apos;s Future
                            <MoveRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                {/* Footer Regulated Tag */}
                <div className="mt-12 flex items-center justify-center gap-3 opacity-70">
                    <ShieldCheck size={18} className="text-[#6B6B6B]" />
                    <span className="text-xs font-black text-[#6B6B6B] uppercase tracking-widest">PFRDA Regulated Investment Scheme</span>
                </div>
            </div>
        </section>
    );
}
