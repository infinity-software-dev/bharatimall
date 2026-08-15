"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Check,
    FileText,
    UserCheck,
    Briefcase,
    Clock,
    ArrowRight,
    Info,
    Globe,
    Landmark,
    ShieldCheck,
    GraduationCap,
} from "lucide-react";

const steps = [
    {
        icon: FileText,
        step: "01",
        title: "Fill Application",
        desc: "Provide basic information about the student, target course, university, and required loan quantum.",
    },
    {
        icon: UserCheck,
        step: "02",
        title: "Document Submission",
        desc: "Upload academic credentials, university admission letters, and co-applicant financial records online.",
    },
    {
        icon: Briefcase,
        step: "03",
        title: "Credit Assessment",
        desc: "Underwriting evaluation of the student profile, university ranking, and co-sponsor repayment capacity.",
    },
    {
        icon: Clock,
        step: "04",
        title: "Sanction & Disbursal",
        desc: "Receive an official sanction letter. Funds are disbursed directly to the academic institution as per fee schedules.",
    },
];

const eligibility = {
    student: [
        "Indian citizen between 16 to 35 years of age",
        "Confirmed admission in a recognized degree/diploma program",
        "Academic track record with 50%+ in prior qualifying exams",
        "Valid offer or conditional acceptance letter",
        "Co-applicant (parent, spouse, or legal guardian) required",
    ],
    abroad: [
        "Confirmed admission in accredited overseas college/university",
        "Valid student visa, I-20 Form (USA), or CAS Letter (UK)",
        "Standardized language/aptitude scores (IELTS/TOEFL/GRE/GMAT)",
        "Pre-visa loan sanction documentation supported",
        "WES / academic credential evaluations accepted",
    ],
};

const documentRequirements = [
    {
        title: "Applicant (Student)",
        icon: UserCheck,
        docs: [
            "Identity Proof & PAN Card",
            "Class 10, 12 & Degree Marksheets",
            "University Offer / Admission Letter",
            "Official Detailed Fee Structure",
            "Entrance / Language Scorecard (GRE/IELTS)",
        ],
    },
    {
        title: "Co-Applicant (Financial)",
        icon: Briefcase,
        docs: [
            "KYC (Identity & Address Proof)",
            "Last 3 to 6 Months Salary Slips",
            "Last 6 to 12 Months Bank Statements",
            "Last 2 to 3 Years ITR / Form 16",
            "Business Financial Statements (if Self-Employed)",
        ],
    },
    {
        title: "Collateral Assets (If Applicable)",
        icon: Landmark,
        docs: [
            "Registered Property Title Deed",
            "Approved Property Valuation Report",
            "Fixed Deposit Lien Receipts",
            "Surrender Value Certificate (Insurance)",
            "Recent Encumbrance Certificate",
        ],
    },
    {
        title: "Overseas Specific",
        icon: Globe,
        docs: [
            "Valid Student Passport Copy",
            "I-20 (USA) / CAS (UK) / CoE (Australia)",
            "Student Visa Approval / Application",
            "Proof of Liquid Funds / Solvency Certificate",
            "University Accreditation Documentation",
        ],
    },
];

export default function EligibilityAndProcess() {
    return (
        <div className="font-sans text-[#292929]">

            {/* ── 1. How It Works (4 Steps) ────────────────────────── */}
            <section className="py-14 md:py-20 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E5E5E0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                            <Clock size={14} className="text-[#171717]" />
                            Streamlined Roadmap
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                            How to Apply in 4 Steps
                        </h2>
                        <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                            Our automated process ensures you secure funding without unnecessary delays, campus visits, or paperwork bottlenecks.
                        </p>
                    </motion.div>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Desktop Connector Line */}
                        <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-[#E5E5E0] z-0" />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {steps.map((step, i) => {
                                const Icon = step.icon;
                                return (
                                    <motion.div
                                        key={step.title}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        className="flex flex-col items-center text-center group"
                                    >
                                        <div className="relative mb-5">
                                            <div className="w-14 h-14 bg-[#FFF8D6] border border-[#E5E5E0] rounded-2xl flex items-center justify-center text-[#171717] shadow-xs group-hover:scale-105 group-hover:border-[#F4C430] transition-all duration-200">
                                                <Icon size={24} strokeWidth={2} />
                                            </div>
                                            <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F4C430] text-[#171717] font-extrabold text-xs flex items-center justify-center border-2 border-[#FFFFFF] shadow-xs">
                                                {step.step}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-[#171717] mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed px-2">
                                            {step.desc}
                                        </p>

                                        {i < steps.length - 1 && (
                                            <div className="md:hidden mt-6 text-[#E5E5E0]">
                                                <ArrowRight size={22} className="rotate-90 md:rotate-0" />
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </section>

            {/* ── 2. Eligibility Section ─────────────────────────── */}
            <section id="eligibility" className="py-14 md:py-20 bg-[#F5F5F3] border-b border-[#E5E5E0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                            <ShieldCheck size={14} className="text-[#171717]" />
                            Clear Guidelines
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                            Eligibility Criteria
                        </h2>
                        <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                            Available to Indian students pursuing professional higher education programs in India and abroad.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16 max-w-6xl mx-auto">

                        {/* Domestic Studies */}
                        <div className="relative flex flex-col bg-[#FFFFFF] rounded-3xl p-7 sm:p-8 border border-[#E5E5E0] shadow-xs hover:border-[#F4C430] transition-all duration-200">
                            <div className="flex items-center gap-4 mb-6 pb-5 border-b border-[#E5E5E0]">
                                <div className="w-12 h-12 bg-[#FFF8D6] rounded-2xl flex items-center justify-center text-[#171717] shrink-0 border border-[#F4C430]/30">
                                    <GraduationCap size={24} strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-[#171717]">Domestic Studies</h3>
                                    <p className="text-xs font-semibold text-[#6B6B6B]">General India University Criteria</p>
                                </div>
                            </div>

                            <ul className="space-y-3.5 flex-grow list-none pl-0">
                                {eligibility.student.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#292929]">
                                        <div className="w-5 h-5 rounded-full bg-[#FFF8D6] text-[#171717] flex items-center justify-center shrink-0 mt-0.5 border border-[#F4C430]/40">
                                            <Check size={12} strokeWidth={3} className="text-[#171717]" />
                                        </div>
                                        <span className="leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Overseas Studies */}
                        <div className="relative flex flex-col bg-[#FFFFFF] rounded-3xl p-7 sm:p-8 border border-[#E5E5E0] shadow-xs hover:border-[#F4C430] transition-all duration-200">
                            <div className="flex items-center gap-4 mb-6 pb-5 border-b border-[#E5E5E0]">
                                <div className="w-12 h-12 bg-[#FFF8D6] rounded-2xl flex items-center justify-center text-[#171717] shrink-0 border border-[#F4C430]/30">
                                    <Globe size={24} strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-[#171717]">Overseas Studies</h3>
                                    <p className="text-xs font-semibold text-[#6B6B6B]">Additional for International Programs</p>
                                </div>
                            </div>

                            <ul className="space-y-3.5 flex-grow list-none pl-0">
                                {eligibility.abroad.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#292929]">
                                        <div className="w-5 h-5 rounded-full bg-[#FFF8D6] text-[#171717] flex items-center justify-center shrink-0 mt-0.5 border border-[#F4C430]/40">
                                            <Check size={12} strokeWidth={3} className="text-[#171717]" />
                                        </div>
                                        <span className="leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* ── 3. Document Checklists ──────────────────────── */}
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#171717] mb-2 tracking-tight">
                                Document Checklists
                            </h3>
                            <p className="text-xs sm:text-sm text-[#6B6B6B]">
                                Organize scanned digital copies for expedited sanctioning and verification.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                            {documentRequirements.map((type, i) => {
                                const Icon = type.icon;
                                return (
                                    <div
                                        key={type.title}
                                        className="flex flex-col rounded-2xl bg-[#FFFFFF] p-5 md:p-6 border border-[#E5E5E0] shadow-xs hover:shadow-md hover:border-[#F4C430] transition-all duration-200"
                                    >
                                        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#E5E5E0]">
                                            <div className="w-9 h-9 rounded-xl bg-[#FFF8D6] flex items-center justify-center text-[#171717] shrink-0 border border-[#F4C430]/30">
                                                <Icon size={18} />
                                            </div>
                                            <h4 className="font-bold text-[#171717] text-sm md:text-base leading-tight">
                                                {type.title}
                                            </h4>
                                        </div>

                                        <ul className="space-y-2.5 flex-grow list-none pl-0">
                                            {type.docs.map((doc, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-xs text-[#292929] leading-snug">
                                                    <Check size={13} className="text-[#198754] shrink-0 mt-0.5" strokeWidth={2.5} />
                                                    <span>{doc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Note Box */}
                        <div className="flex items-start gap-3 bg-[#FFFFFF] border border-[#E5E5E0] rounded-2xl p-4 sm:p-5 shadow-xs">
                            <Info size={18} className="text-[#F4C430] shrink-0 mt-0.5" />
                            <p className="text-xs sm:text-sm text-[#292929] leading-relaxed">
                                <strong className="text-[#171717]">Document Preparation Note:</strong> Ensure all digital files (Identity Proof, Academic Transcripts, Admission Letters, and Bank Statements) are clear, uncropped PDF or JPG scans.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
}