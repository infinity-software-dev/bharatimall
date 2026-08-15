"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    CreditCard,
    UserCheck,
    FileText,
    Clock,
    CheckCircle2,
    Info,
    Sparkles,
    ShieldCheck,
    Star,
} from "lucide-react";

const steps = [
    {
        icon: CreditCard,
        step: "01",
        title: "Check Eligibility",
        desc: "Provide basic professional and income details to see which credit cards match your profile.",
    },
    {
        icon: UserCheck,
        step: "02",
        title: "Video KYC",
        desc: "Complete your identity verification instantly via a secure video call with bank representatives.",
    },
    {
        icon: FileText,
        step: "03",
        title: "E-Documentation",
        desc: "Digitally sign your application and upload required income proofs for swift bank review.",
    },
    {
        icon: Clock,
        step: "04",
        title: "Instant Issuance",
        desc: "Receive your virtual card immediately upon approval, with physical delivery in 5–7 business days.",
    },
];

const eligibility = {
    general: [
        "Age: 21 – 65 years (Salaried) / 25 – 70 years (Self-employed)",
        "Residency: Resident Indian (Primary) / NRIs with eligible bank backings",
        "Monthly Income: Minimum ₹20,000 (Tier-2) / ₹25,000 (Tier-1 cities)",
        "Credit History: Preferred CIBIL score of 700+ for fast-track approvals",
        "Stability: Minimum 1 year business continuity or 6 months current employment",
    ],
    premium: [
        "Annual Income: ₹15 Lakhs+ for super-premium variant qualifications",
        "CIBIL Score: 750+ (Mandatory for metal and invite-only cards)",
        "Portfolio: Active high-value liquid assets or fixed deposit linkages",
        "Existing Credit: Zero defaults or write-offs in the last 36 months",
        "Global Status: High-Net-Worth Individuals (HNIs) & NRIs",
    ],
};

const documentRequirements = [
    {
        title: "Identity Proof",
        docs: [
            "Aadhaar Card (E-KYC verified)",
            "PAN Card (Original mandatory)",
            "Passport-sized photographs (2 copies)",
            "Valid Passport / Voter ID",
        ],
    },
    {
        title: "Salaried Income",
        docs: [
            "Last 3 months salary slips",
            "Last 6 months bank statements",
            "Latest Form 16 / ITR copy",
            "Employee ID card copy",
        ],
    },
    {
        title: "Self-Employed Proof",
        docs: [
            "Last 2 years ITR with tax computation",
            "Business P&L and Balance Sheet",
            "GST registration certificate",
            "12 months current bank statements",
        ],
    },
    {
        title: "Address Proof",
        docs: [
            "Latest utility bill (< 3 months old)",
            "Valid Passport / Voter ID",
            "Bank statement with current address",
            "Registered rent agreement",
        ],
    },
];

interface EligibilityAndProcessProps {
    onApplyClick?: () => void;
}

export default function EligibilityAndProcess({ onApplyClick }: EligibilityAndProcessProps) {
    const handleApply =
        onApplyClick ||
        (() => {
            console.log("Apply clicked from EligibilityAndProcess");
        });

    return (
        <>
            {/* ── 1. Application Process Section ───────────────────── */}
            <section className="py-14 md:py-20 bg-[#FFFFFF] font-sans border-b border-[#E5E5E0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                            <Sparkles size={14} className="text-[#171717]" />
                            Streamlined Onboarding
                        </div>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                            How to Apply for Our Credit Cards
                        </h2>

                        <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                            Experience a 100% digital, paperless application journey from eligibility check to digital card issuance.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative max-w-6xl mx-auto">
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="bg-[#FFFDF5] p-7 rounded-3xl border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group"
                                >
                                    <div className="relative mb-5">
                                        <div className="w-16 h-16 rounded-2xl bg-[#FFF8D6] border border-[#F4C430]/30 flex items-center justify-center text-[#171717] shadow-xs group-hover:scale-105 transition-transform duration-200">
                                            <Icon size={26} strokeWidth={2} />
                                        </div>
                                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F4C430] text-[#171717] font-extrabold text-xs flex items-center justify-center border-2 border-[#FFFFFF] shadow-xs">
                                            {step.step}
                                        </span>
                                    </div>

                                    <h3 className="text-base md:text-lg font-bold text-[#171717] mb-2 leading-snug">
                                        {step.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                                        {step.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* ── 2. Eligibility & Document Vault Section ───────────── */}
            <section className="py-14 md:py-20 bg-[#F5F5F3] font-sans border-b border-[#E5E5E0]" id="eligibility">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
                            Eligibility Criteria & Document Vault
                        </h2>

                        <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                            Verify your qualification criteria and keep digital copies ready for rapid approval.
                        </p>
                    </motion.div>

                    {/* Two-Panel Eligibility Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">

                        {/* Left Panel: Standard Eligibility */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#FFFFFF] border border-[#E5E5E0] rounded-3xl p-7 md:p-8 shadow-xs flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E5E5E0]">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FFF8D6] border border-[#F4C430]/40 flex items-center justify-center text-[#171717] shadow-xs">
                                        <CheckCircle2 size={24} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-extrabold text-[#171717]">
                                            Standard Eligibility
                                        </h3>
                                        <p className="text-xs text-[#6B6B6B]">General criteria for core card variants</p>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {eligibility.general.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#292929]">
                                            <div className="w-4 h-4 rounded-full bg-[#FFF8D6] text-[#171717] flex items-center justify-center shrink-0 mt-0.5 border border-[#F4C430]/40">
                                                <CheckCircle2 size={12} />
                                            </div>
                                            <span className="leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Right Panel: Premium Eligibility */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#FFFDF5] border border-[#F4C430]/50 rounded-3xl p-7 md:p-8 shadow-xs flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E5E5E0]">
                                    <div className="w-12 h-12 rounded-2xl bg-[#F4C430] flex items-center justify-center text-[#171717] shadow-xs">
                                        <Star size={24} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-extrabold text-[#171717]">
                                            Super-Premium Selection
                                        </h3>
                                        <p className="text-xs text-[#6B6B6B]">Requirements for metal & luxury cards</p>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {eligibility.premium.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#292929]">
                                            <div className="w-4 h-4 rounded-full bg-[#FFF8D6] text-[#171717] flex items-center justify-center shrink-0 mt-0.5 border border-[#F4C430]/40">
                                                <CheckCircle2 size={12} />
                                            </div>
                                            <span className="leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                    </div>

                    {/* New-to-Credit Note Strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto flex items-center gap-4 bg-[#FFF8D6]/70 border border-[#F4C430]/40 rounded-2xl p-5 mb-14 shadow-xs"
                    >
                        <div className="w-9 h-9 rounded-full bg-[#F4C430] flex items-center justify-center text-[#171717] shrink-0">
                            <Info size={18} strokeWidth={2.5} />
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-[#171717] leading-relaxed">
                            <span className="font-extrabold underline">New to Credit?</span> You can still qualify! Start with entry-level reward cards or fixed-deposit (FD) backed options to build your credit score from zero.
                        </p>
                    </motion.div>

                    {/* Document Vault Grid */}
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-extrabold text-[#171717] tracking-tight mb-2">
                                The Document Vault
                            </h3>
                            <p className="text-xs sm:text-sm text-[#6B6B6B]">
                                Keep these scanned copies accessible for a 100% paperless digital verification process.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {documentRequirements.map((type, i) => (
                                <motion.div
                                    key={type.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                                >
                                    <div>
                                        <h5 className="font-extrabold text-sm sm:text-base text-[#171717] mb-4 pb-3 border-b border-[#E5E5E0]">
                                            {type.title}
                                        </h5>
                                        <ul className="space-y-2.5">
                                            {type.docs.map((doc, idx) => (
                                                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#6B6B6B]">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] mt-1.5 shrink-0" />
                                                    <span className="leading-snug font-medium text-[#292929]">{doc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}