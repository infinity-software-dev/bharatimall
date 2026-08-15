"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";

interface ContactSectionProps {
    onApplyClick?: () => void;
}

export default function ContactSection({ onApplyClick }: ContactSectionProps) {
    const handleApply =
        onApplyClick ||
        (() => {
            console.log("Apply for Education Loan clicked from ContactSection");
        });

    return (
        <section className="bg-[#FFF8D6] font-sans py-16 md:py-20 border-b border-[#E5E5E0]" id="contact-section">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#F4C430]/40 text-[#171717] font-bold text-xs uppercase tracking-wider shadow-xs">
                        <Sparkles size={14} className="text-[#171717]" />
                        Free Profile Consultation
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
                        Ready to Fund Your <br className="hidden sm:inline" />
                        Dream Degree?
                    </h2>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-[#292929] font-medium max-w-2xl mx-auto leading-relaxed">
                        Submit an application for an instant pre-eligibility review. Our dedicated education loan advisors will connect with you within 24 hours.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                        <button
                            type="button"
                            onClick={handleApply}
                            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl font-bold text-base md:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto cursor-pointer"
                        >
                            <span>Apply for Education Loan</span>
                            <ArrowRight size={20} className="stroke-[2.5]" />
                        </button>

                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#FFFFFF] hover:bg-[#FFFDF5] text-[#171717] rounded-xl font-bold text-base md:text-lg border border-[#E5E5E0] hover:border-[#F4C430] shadow-xs hover:shadow-sm transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto"
                        >
                            <PhoneCall size={18} />
                            <span>Talk to an Expert</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}