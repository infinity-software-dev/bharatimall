"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Zap, ShieldCheck, Rocket, ChevronRight } from "lucide-react";

const steps = [
    {
        title: "Compare Rates",
        desc: "Choose from India's top banks & NBFCs with the best interest yields for your wealth.",
        icon: <ClipboardCheck className="w-10 h-10" />,
    },
    {
        title: "Digital Application",
        desc: "Enter your investment details & nominee information in minutes via our secure portal.",
        icon: <ShieldCheck className="w-10 h-10" />,
    },
    {
        title: "Instant Verification",
        desc: "Complete your identity verification instantly via 100% paperless digital onboarding.",
        icon: <Zap className="w-10 h-10" />,
    },
    {
        title: "Start Earning",
        desc: "Securely transfer funds & get your Fixed Deposit certificate instantly in your dashboard.",
        icon: <Rocket className="w-10 h-10" />,
    }
];

interface FDStepProcessProps {
    onApplyClick?: () => void;
}

export default function FDStepProcess({ onApplyClick }: FDStepProcessProps) {
    return (
        <section className="py-16 md:py-20 bg-transparent overflow-hidden font-sans">
            <div className="container mx-auto px-4 md:px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF8D6] border border-[#F4C430]/40 text-[#171717] font-bold text-xs mb-6 uppercase tracking-widest shadow-xs">
                        <Zap size={14} className="text-[#E91E63] animate-pulse" />
                        Seamless Experience
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
                        Start Growing Your Savings in 4 Steps
                    </h2>

                    <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal">
                        Experience a completely digital journey from selection to investment. No more physical bank visits needed.
                    </p>
                </motion.div>

                <div className="relative">

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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

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
                                <div className="relative mb-6 w-[72px] h-[72px] rounded-full bg-[#F4C430] shadow-md flex items-center justify-center text-[#171717] transform group-hover:scale-110 group-hover:bg-[#FFD21F] transition-all duration-300 p-4">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#171717] group-hover:text-[#E91E63] transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-[#6B6B6B] font-normal text-sm leading-relaxed px-4">
                                    {step.desc}
                                </p>

                                {/* Arrow (Mobile/Tablet) */}
                                {idx < steps.length - 1 && (
                                    <div className="lg:hidden mt-8 text-[#E5E5E0] animate-bounce">
                                        <ChevronRight size={32} className="rotate-90 md:rotate-0" />
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
                    transition={{ delay: 1 }}
                    className="mt-12 sm:mt-20 text-center"
                >
                    <button
                        type="button"
                        onClick={onApplyClick}
                        className="px-8 py-4 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all shadow-xl cursor-pointer text-base"
                    >
                        Start Your Investment Journey
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
