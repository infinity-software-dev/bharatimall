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
    Car,
    FileText,
    ShieldCheck,
    Sparkles,
    ArrowRight,
} from "lucide-react";

interface VehicleLoanEligibilityProps {
    onApplyClick?: () => void;
}

const criteria = [
    {
        title: "Eligible Profiles",
        items: [
            "Salaried Employees (Govt. & Private)",
            "Self-Employed Professionals & Traders",
            "Proprietorships & Partnership Firms",
            "Private & Public Limited Companies",
        ],
        icon: User,
    },
    {
        title: "Income Criteria",
        items: [
            "Min. ₹20,000/month for Salaried Individuals",
            "Min. ₹3 Lakhs ITR for Self-Employed",
            "Continuous employment/business for 1+ year",
        ],
        icon: Briefcase,
    },
    {
        title: "Applicant Age",
        items: [
            "Minimum 21 years at loan application",
            "Maximum 65 years at loan maturity",
            "Co-applicant eligible for age relaxation",
        ],
        icon: CalendarCheck,
    },
    {
        title: "Credit Standing",
        items: [
            "Preferred Credit Score (CIBIL 700+)",
            "Clean repayment track without write-offs",
            "Balanced Debt-to-Income (DTI) ratio",
        ],
        icon: BadgeCheck,
    },
];

const documents = [
    { title: "Identity Proof (PAN / Passport / Voter ID)", icon: User },
    { title: "Address Proof (Utility Bill / Passport)", icon: MapPin },
    { title: "Last 3 Months Salary Slips / Form 16", icon: FileText },
    { title: "Last 6 Months Bank Statements", icon: CalendarCheck },
    { title: "Vehicle Pro-forma Invoice & Quotation", icon: Car },
    { title: "Passport Size Photographs", icon: User },
    { title: "Signature Verification Proof", icon: FileCheck },
    { title: "Business Registration (if Self-Employed)", icon: Briefcase },
];

export default function VehicleLoanEligibility({
    onApplyClick,
}: VehicleLoanEligibilityProps) {
    return (
        <div className="flex flex-col font-sans text-[#292929]" id="vehicle-loan-eligibility-section">

            {/* ── 1. Eligibility Criteria Section ───────────────────── */}
            <section className="py-14 md:py-20 bg-[#FFFFFF] border-b border-[#E5E5E0]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                            <ShieldCheck size={14} className="text-[#171717]" />
                            Clear Qualifications
                        </div>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                            Eligibility Criteria
                        </h2>

                        <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                            Transparent, straightforward qualifications designed to approve your vehicle financing swiftly.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {criteria.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08, duration: 0.35 }}
                                    className="bg-[#FFFDF5] rounded-3xl p-6 sm:p-7 border border-[#E5E5E0] hover:border-[#F4C430] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col h-full group"
                                >
                                    <div className="w-13 h-13 rounded-2xl bg-[#FFF8D6] border border-[#F4C430]/30 flex items-center justify-center text-[#171717] mb-6 shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                                        <Icon size={24} strokeWidth={2} />
                                    </div>

                                    <h3 className="text-lg font-bold text-[#171717] mb-4 pb-2 border-b border-[#E5E5E0]">
                                        {item.title}
                                    </h3>

                                    <ul className="space-y-3 flex-grow list-none pl-0">
                                        {item.items.map((li, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#292929]">
                                                <div className="w-4 h-4 rounded-full bg-[#FFF8D6] text-[#171717] flex items-center justify-center shrink-0 mt-0.5 border border-[#F4C430]/40">
                                                    <CheckCircle2 size={12} className="text-[#171717]" />
                                                </div>
                                                <span className="leading-snug">{li}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* ── 2. Document Requirements Section ─────────────────── */}
            <section className="py-14 md:py-20 bg-[#F5F5F3] border-b border-[#E5E5E0]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                            <FileCheck size={14} className="text-[#171717]" />
                            Digital Verification
                        </div>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                            Required Documents
                        </h2>

                        <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                            Upload clear scanned digital copies to expedite your vehicle loan verification and disbursal.
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        {documents.map((doc, idx) => {
                            const Icon = doc.icon;
                            return (
                                <motion.div
                                    key={doc.title}
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.04, duration: 0.3 }}
                                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-xs transition-all duration-200 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[#FFF8D6] border border-[#F4C430]/30 flex items-center justify-center text-[#171717] shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                                        <Icon size={18} />
                                    </div>
                                    <span className="text-xs sm:text-sm font-bold text-[#171717] leading-snug">
                                        {doc.title}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Pre-Approved Offers Tip Callout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto p-6 sm:p-7 rounded-3xl bg-[#FFFDF5] border border-[#F4C430]/50 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5 shadow-xs text-center sm:text-left"
                    >
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#FFF8D6] flex items-center justify-center text-[#171717] shrink-0 border border-[#F4C430]/40">
                                <Sparkles size={24} />
                            </div>
                            <div>
                                <h4 className="font-extrabold text-base text-[#171717] mb-1">
                                    Pre-Approved Auto Loan Offers
                                </h4>
                                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed max-w-xl">
                                    Existing banking customers with good credit scores may qualify for pre-approved vehicle loans with instant digital KYC and zero physical documentation.
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={onApplyClick}
                            className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] font-bold text-xs uppercase tracking-wider transition-all shadow-xs hover:shadow shrink-0 cursor-pointer w-full sm:w-auto"
                        >
                            <span>Check Offers</span>
                            <ArrowRight size={14} />
                        </button>
                    </motion.div>

                </div>
            </section>

        </div>
    );
}