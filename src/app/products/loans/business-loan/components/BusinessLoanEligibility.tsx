"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Briefcase,
    User,
    MapPin,
    CalendarCheck,
    FileCheck,
    BadgeCheck,
    ArrowRight,
    ShieldCheck,
} from "lucide-react";

interface BusinessLoanEligibilityProps {
    onApplyClick?: () => void;
}

const criteria = [
    {
        title: "Eligible Entities",
        items: [
            "Proprietorship Firms",
            "Partnership Firms",
            "Private Limited Companies",
            "Limited Liability Partnerships (LLPs)",
        ],
        icon: Briefcase,
    },
    {
        title: "Business Vintage",
        items: [
            "Minimum 1 year in continuous operations",
            "At least 1 year at current commercial location",
            "Demonstrated stable cash flows & revenue",
        ],
        icon: CalendarCheck,
    },
    {
        title: "Applicant Age",
        items: [
            "Minimum 21 years at time of application",
            "Maximum 65 years at loan maturity",
        ],
        icon: User,
    },
    {
        title: "Financial Health",
        items: [
            "Healthy CIBIL score of 700+ (Promoter & Entity)",
            "Annual turnover > ₹20 Lakhs",
            "Positive banking balance and no recent defaults",
        ],
        icon: BadgeCheck,
    },
];

const documents = [
    { title: "Identity Proof & PAN Card", icon: User },
    { title: "Udyam Registration Certificate", icon: Briefcase },
    { title: "Shop Act / GST Registration", icon: FileCheck },
    { title: "Last 12 Months Bank Statements", icon: CalendarCheck },
    { title: "Commercial Address Proof (Utility Bill)", icon: MapPin },
    { title: "ITR & Financials (Last 2-3 Years)", icon: BadgeCheck },
    { title: "Promoter Photographs", icon: User },
    { title: "Business Continuity Proof", icon: Briefcase },
];

export default function BusinessLoanEligibility({
    onApplyClick,
}: BusinessLoanEligibilityProps) {
    return (
        <section className="py-14 md:py-20 bg-[#F5F5F3] font-sans border-b border-[#E5E5E0]" id="business-eligibility">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <ShieldCheck size={14} className="text-[#171717]" />
                        Eligibility &amp; Verification
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 text-[#171717] tracking-tight">
                        Eligibility Criteria
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        Transparent, straightforward requirements designed to give expanding businesses quick access to capital without unnecessary hurdles.
                    </p>
                </motion.div>

                {/* Criteria Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14 max-w-6xl mx-auto">
                    {criteria.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5E5E0] shadow-xs flex flex-col h-full hover:shadow-md hover:border-[#F4C430] transition-all duration-200"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#FFF8D6] flex items-center justify-center text-[#171717] mb-5 shrink-0">
                                    <Icon size={22} className="text-[#171717]" />
                                </div>

                                <h3 className="text-base font-bold text-[#171717] mb-4 pb-2 border-b border-[#E5E5E0]">
                                    {item.title}
                                </h3>

                                <ul className="space-y-3 list-none pl-0 flex-1">
                                    {item.items.map((li, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#292929]">
                                            <CheckCircle2 size={15} className="text-[#198754] shrink-0 mt-0.5" />
                                            <span className="leading-snug">{li}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Documents Required Container */}
                <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 border border-[#E5E5E0] shadow-xs max-w-6xl mx-auto mb-10">
                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-[#171717] mb-2 tracking-tight">
                            Required Documents
                        </h3>
                        <p className="text-xs sm:text-sm text-[#6B6B6B]">
                            Keep these digital documents handy for rapid online verification and processing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
                        {documents.map((doc, idx) => {
                            const DocIcon = doc.icon;
                            return (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFDF5] border border-[#E5E5E0] hover:border-[#F4C430] transition-colors"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-[#FFF8D6] flex items-center justify-center text-[#171717] shrink-0">
                                        <DocIcon size={18} className="text-[#171717]" />
                                    </div>
                                    <span className="text-xs font-bold text-[#292929] leading-tight">
                                        {doc.title}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Digital Note Banner */}
                    <div className="p-4 bg-[#FFF8D6] border border-[#F4C430]/40 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                        <div className="w-11 h-11 rounded-xl bg-[#FFFFFF] flex items-center justify-center text-[#171717] shrink-0 shadow-2xs">
                            <BadgeCheck size={24} className="text-[#171717]" />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#171717] text-sm">100% Digital Document Upload</h4>
                            <p className="text-xs text-[#292929] leading-relaxed">
                                Only scanned digital copies are required. No physical branch visits or document couriers needed for initial underwriting.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Action */}
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={onApplyClick}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] px-9 py-4 rounded-xl font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-base md:text-lg cursor-pointer"
                    >
                        <span>Check Your Business Eligibility</span>
                        <ArrowRight size={20} />
                    </button>
                </div>

            </div>
        </section>
    );
}