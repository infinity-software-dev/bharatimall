"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap,
    Globe,
    Building2,
    Award,
    Check,
    ArrowRight,
    X,
    ShieldCheck,
    Percent,
    Calendar,
    FileText,
    Clock,
    Sparkles,
} from "lucide-react";

interface LoanPlan {
    id: string;
    badge: string;
    loan_type: string;
    max_amount: string;
    tenure: string;
    interest_rate: string;
    is_popular?: boolean;
    features: string[];
    description: string;
    eligibility: string[];
    documents: string[];
}

const HARDCODED_EDUCATION_LOANS: LoanPlan[] = [
    {
        id: "domestic-edu",
        badge: "Domestic Degrees",
        loan_type: "India Higher Education Loan",
        max_amount: "Up to ₹50 Lakhs",
        tenure: "Up to 15 Years",
        interest_rate: "8.15% - 10.50% p.a.",
        is_popular: true,
        description: "Designed for students pursuing undergraduate, postgraduate, and professional degrees in premier Indian universities, IITs, IIMs, and AICTE-approved institutions.",
        features: [
            "100% tuition and hostel fee coverage",
            "Moratorium period: Course duration + 1 year",
            "Zero collateral required up to ₹7.5 Lakhs",
            "Full Section 80E tax deduction on interest paid",
        ],
        eligibility: [
            "Resident of India with confirmed university admission",
            "Co-applicant (parent, guardian, or spouse) required",
            "Eligible for leading Indian colleges (NIRF/UGC accredited)",
        ],
        documents: [
            "Identity Proof (Aadhaar / Passport) & PAN Card",
            "Official University Admission Letter & Fee Schedule",
            "Co-applicant KYC, Income Proof & 6 Months Bank Statement",
        ],
    },
    {
        id: "abroad-edu",
        badge: "International Studies",
        loan_type: "Study Abroad Education Loan",
        max_amount: "Up to ₹1.5 Crore+",
        tenure: "Up to 15 Years",
        interest_rate: "8.50% - 11.25% p.a.",
        is_popular: true,
        description: "Comprehensive financial backing for students admitted to recognized overseas universities across the USA, UK, Canada, Germany, Australia, and Singapore.",
        features: [
            "Covers tuition, travel, living expenses & health insurance",
            "Pre-visa sanction letter for smooth immigration clearance",
            "Flexible secured and unsecured loan structures",
            "Fast-track sanctioning within 3 to 5 business days",
        ],
        eligibility: [
            "Confirmed admission in accredited international university",
            "Valid passport and standard test scores (GRE/GMAT/IELTS/TOEFL)",
            "Financial co-sponsor with verified credit track record",
        ],
        documents: [
            "Valid Passport & Student Visa Documentation",
            "University I-20 / CAS Letter / Acceptance Confirmation",
            "Co-sponsor Financial Proofs (ITR, Form 16, Bank Statements)",
        ],
    },
    {
        id: "executive-edu",
        badge: "Professional Upskilling",
        loan_type: "Executive & Skill Development",
        max_amount: "Up to ₹30 Lakhs",
        tenure: "Up to 7 Years",
        interest_rate: "8.99% - 12.00% p.a.",
        is_popular: false,
        description: "Tailored financing for working professionals pursuing Executive MBAs, Data Science, AI certifications, and leadership degrees.",
        features: [
            "Fast paperless approval for working professionals",
            "Flexible EMI options with part-payment facilities",
            "Covers part-time, hybrid, and international modular courses",
            "No physical collateral needed for salaried applicants",
        ],
        eligibility: [
            "Working professional with minimum 2 years of work experience",
            "Enrolled in recognized executive or certification programs",
            "Minimum net monthly take-home salary of ₹35,000",
        ],
        documents: [
            "Applicant KYC & PAN Card",
            "3 Months Salary Slips & 6 Months Bank Statements",
            "Course Admission Letter & Professional ID",
        ],
    },
];

const COMPARISON_DATA = [
    { feature: "Loan Amount", domestic: "₹5 Lakh to ₹50 Lakh", abroad: "₹10 Lakh to ₹1.5 Cr+", icon: GraduationCap },
    { feature: "Starting Interest Rate", domestic: "8.15% p.a.", abroad: "8.50% p.a.", icon: Percent },
    { feature: "Collateral Requirement", domestic: "Nil up to ₹7.5 Lakh", abroad: "Secured & Unsecured options", icon: ShieldCheck },
    { feature: "Repayment Moratorium", domestic: "Course tenure + 6-12 months", abroad: "Course tenure + 6-12 months", icon: Clock },
    { feature: "Maximum Tenure", domestic: "Up to 15 years", abroad: "Up to 15 years", icon: Calendar },
    { feature: "Tax Benefit (Sec 80E)", domestic: "100% on interest paid (8 years)", abroad: "100% on interest paid (8 years)", icon: FileText },
];

export default function LoanTypesSection({
    onApplyClick,
}: {
    onApplyClick?: () => void;
}) {
    const [selectedPlan, setSelectedPlan] = useState<LoanPlan | null>(null);

    return (
        <section className="py-14 md:py-20 bg-[#FFFFFF] relative overflow-hidden font-sans border-b border-[#E5E5E0]" id="loan-types-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <Sparkles size={14} className="text-[#171717]" />
                        Tailored Options
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 text-[#171717] tracking-tight">
                        Choose Your Education Loan
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        From domestic degrees to top-tier international universities—explore customized financing products structured around your academic goals.
                    </p>
                </div>

                {/* Loan Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
                    {HARDCODED_EDUCATION_LOANS.map((loan) => (
                        <div
                            key={loan.id}
                            className={`relative flex flex-col h-full bg-[#FFFFFF] rounded-2xl border transition-all duration-200 shadow-xs hover:shadow-md ${loan.is_popular ? "border-[#F4C430]" : "border-[#E5E5E0] hover:border-[#F4C430]"
                                }`}
                        >
                            {loan.is_popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F4C430] text-[#171717] px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest z-10 shadow-xs border border-[#FFFFFF]">
                                    Most Popular
                                </div>
                            )}

                            <div className="p-6 md:p-7 flex flex-col h-full">

                                {/* Badge & Title */}
                                <div className="mb-4 text-center">
                                    <span className="inline-block px-3 py-1 bg-[#F5F5F3] text-[#6B6B6B] rounded-full text-xs font-bold uppercase tracking-wider border border-[#E5E5E0] mb-2.5">
                                        {loan.badge}
                                    </span>
                                    <h3 className="text-xl font-bold text-[#171717] leading-snug">
                                        {loan.loan_type}
                                    </h3>
                                </div>

                                {/* Key Metrics */}
                                <div className="grid grid-cols-2 gap-3 mb-5">
                                    <div className="bg-[#FFFDF5] p-3 rounded-xl border border-[#E5E5E0] text-center">
                                        <p className="text-[10px] uppercase tracking-wider text-[#6B6B6B] font-bold mb-0.5">
                                            Max Amount
                                        </p>
                                        <p className="text-xs sm:text-sm font-extrabold text-[#171717]">
                                            {loan.max_amount}
                                        </p>
                                    </div>
                                    <div className="bg-[#FFFDF5] p-3 rounded-xl border border-[#E5E5E0] text-center">
                                        <p className="text-[10px] uppercase tracking-wider text-[#6B6B6B] font-bold mb-0.5">
                                            Interest Rate
                                        </p>
                                        <p className="text-xs sm:text-sm font-extrabold text-[#171717]">
                                            {loan.interest_rate.split(" ")[0]}
                                        </p>
                                    </div>
                                </div>

                                {/* Features List */}
                                <ul className="space-y-3 mb-6 flex-grow list-none pl-0">
                                    {loan.features.map((feat, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#292929]">
                                            <div className="w-5 h-5 rounded-full bg-[#FFF8D6] text-[#171717] flex items-center justify-center shrink-0 mt-0.5 border border-[#F4C430]/40">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className="leading-snug">{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Actions */}
                                <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-[#E5E5E0]">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedPlan(loan)}
                                        className="w-full py-3 bg-[#FFFFFF] hover:bg-[#FFF8D6] text-[#171717] rounded-xl text-xs sm:text-sm font-bold border border-[#E5E5E0] hover:border-[#F4C430] transition-colors cursor-pointer"
                                    >
                                        View Details
                                    </button>

                                    <button
                                        type="button"
                                        onClick={onApplyClick}
                                        className="w-full py-3 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                                    >
                                        <span>Apply Now</span>
                                        <ArrowRight size={15} />
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Public Market Comparison Section --- */}
                <div className="bg-[#FFFDF5] rounded-3xl p-6 sm:p-10 border border-[#E5E5E0] shadow-xs">
                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-[#171717] mb-2 tracking-tight">
                            Domestic vs. International Comparison
                        </h3>
                        <p className="text-xs sm:text-sm text-[#6B6B6B]">
                            Key differences between studying in India and pursuing global degrees overseas.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-[#E5E5E0] bg-[#FFF8D6]">
                                    <th className="py-3.5 px-4 text-xs font-bold text-[#171717] uppercase tracking-wider">Feature</th>
                                    <th className="py-3.5 px-4 text-xs font-bold text-[#171717] uppercase tracking-wider">Domestic Degree</th>
                                    <th className="py-3.5 px-4 text-xs font-bold text-[#171717] uppercase tracking-wider">Study Abroad</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#E5E5E0] text-xs sm:text-sm">
                                {COMPARISON_DATA.map((row, idx) => {
                                    const RowIcon = row.icon;
                                    return (
                                        <tr key={idx} className="hover:bg-[#FFFFFF] transition-colors">
                                            <td className="py-3.5 px-4 font-bold text-[#171717] flex items-center gap-2">
                                                <RowIcon size={16} className="text-[#F4C430] shrink-0" />
                                                <span>{row.feature}</span>
                                            </td>
                                            <td className="py-3.5 px-4 text-[#292929]">{row.domestic}</td>
                                            <td className="py-3.5 px-4 text-[#292929] font-medium">{row.abroad}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            {/* Plan Details Modal */}
            <AnimatePresence>
                {selectedPlan && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
                            onClick={() => setSelectedPlan(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-[#FFFFFF] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl border border-[#E5E5E0] relative z-10 max-h-[90vh] flex flex-col"
                        >
                            <div className="p-6 border-b border-[#E5E5E0] flex justify-between items-center bg-[#FFF8D6] shrink-0">
                                <div>
                                    <h3 className="text-xl font-bold text-[#171717]">{selectedPlan.loan_type}</h3>
                                    <p className="text-xs text-[#6B6B6B] mt-0.5">{selectedPlan.badge}</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setSelectedPlan(null)}
                                    className="w-9 h-9 rounded-full bg-[#FFFFFF] hover:bg-[#D64545]/10 flex items-center justify-center text-[#292929] hover:text-[#D64545] border border-[#E5E5E0] cursor-pointer"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="p-6 overflow-y-auto flex-1 space-y-5 bg-[#FFFDF5]">
                                <p className="text-xs sm:text-sm text-[#292929] leading-relaxed">
                                    {selectedPlan.description}
                                </p>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E5E5E0]">
                                        <p className="text-[10px] font-bold text-[#6B6B6B] uppercase mb-0.5">Interest Slabs</p>
                                        <p className="text-sm font-extrabold text-[#171717]">{selectedPlan.interest_rate}</p>
                                    </div>
                                    <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E5E5E0]">
                                        <p className="text-[10px] font-bold text-[#6B6B6B] uppercase mb-0.5">Max Tenure</p>
                                        <p className="text-sm font-extrabold text-[#171717]">{selectedPlan.tenure}</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#171717] text-xs uppercase tracking-wider mb-2">Eligibility Criteria</h4>
                                    <ul className="space-y-1.5 list-none pl-0">
                                        {selectedPlan.eligibility.map((el, i) => (
                                            <li key={i} className="text-xs text-[#292929] flex items-start gap-2">
                                                <Check size={14} className="text-[#198754] shrink-0 mt-0.5" />
                                                <span>{el}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#171717] text-xs uppercase tracking-wider mb-2">Required Documents</h4>
                                    <ul className="space-y-1.5 list-none pl-0">
                                        {selectedPlan.documents.map((doc, i) => (
                                            <li key={i} className="text-xs text-[#292929] flex items-start gap-2">
                                                <Check size={14} className="text-[#198754] shrink-0 mt-0.5" />
                                                <span>{doc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setSelectedPlan(null);
                                        onApplyClick?.();
                                    }}
                                    className="w-full py-3.5 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer mt-4"
                                >
                                    Proceed with this Plan
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </section>
    );
}