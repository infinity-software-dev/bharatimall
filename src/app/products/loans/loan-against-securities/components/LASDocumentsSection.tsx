"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FileText,
    CheckCircle2,
    Sparkles,
    ShieldCheck,
    UserCheck,
    Building2,
    Receipt,
    ArrowRight,
} from "lucide-react";

interface DocumentCategory {
    category: string;
    subtitle: string;
    icon: React.ElementType;
    items: string[];
}

const DEFAULT_LAS_DOCUMENTS: DocumentCategory[] = [
    {
        category: "Identity & KYC Proof",
        subtitle: "Borrower Identification",
        icon: UserCheck,
        items: [
            "PAN Card (Mandatory for tax and depository linking)",
            "Passport / Voter ID / Driving License (Digital OVD)",
            "Recent passport-sized digital photograph",
        ],
    },
    {
        category: "Address Proof",
        subtitle: "Residential Verification",
        icon: ShieldCheck,
        items: [
            "Utility Bill (Electricity, Gas, or Water bill < 3 months)",
            "Valid Passport copy or Voter ID card",
            "Bank account statement with current residential address",
        ],
    },
    {
        category: "Portfolio & Demat Records",
        subtitle: "Collateral Ownership",
        icon: FileText,
        items: [
            "Client Master Report (CMR) / CML from NSDL / CDSL",
            "Latest Consolidated Account Statement (CAS from CAMS / KFintech)",
            "Demat statement holding approved scrips & ISIN numbers",
        ],
    },
    {
        category: "Banking & Disbursement",
        subtitle: "Bank Verification",
        icon: Building2,
        items: [
            "Last 3 to 6 months bank statement showing salary or business credits",
            "Cancelled cheque leaf with printed borrower name & IFSC",
            "Auto-debit / NACH mandate authorization for interest servicing",
        ],
    },
];

interface LASDocumentsSectionProps {
    documents?: DocumentCategory[];
    onApplyClick?: () => void;
}

export const LASDocumentsSection: React.FC<LASDocumentsSectionProps> = ({
    documents = DEFAULT_LAS_DOCUMENTS,
    onApplyClick,
}) => {
    const handleApply =
        onApplyClick ||
        (() => {
            console.log("Documents Apply Clicked from LASDocumentsSection");
        });

    return (
        <section
            className="py-14 md:py-20 bg-[#F5F5F3] relative overflow-hidden font-sans border-b border-[#E5E5E0]"
            id="las-documents-section"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <Sparkles size={14} className="text-[#171717]" />
                        Fast-Track Verification
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        Documents Required
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        Upload clear digital copies or verify seamlessly via OTP-based CAMS/KFintech integration for same-day loan disbursal.
                    </p>
                </motion.div>

                {/* Document Category Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
                    {documents.map((docCategory, idx) => {
                        const Icon = docCategory.icon;

                        return (
                            <motion.div
                                key={docCategory.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: idx * 0.08 }}
                                className="bg-[#FFFFFF] rounded-3xl border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-md transition-all duration-200 flex flex-col justify-between p-6 sm:p-7 group"
                            >
                                <div>
                                    {/* Category Header */}
                                    <div className="flex flex-col items-center text-center pb-5 mb-5 border-b border-[#E5E5E0]">
                                        <div className="w-14 h-14 rounded-2xl bg-[#FFF8D6] border border-[#F4C430]/30 flex items-center justify-center text-[#171717] mb-4 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                                            <Icon size={26} strokeWidth={2} />
                                        </div>
                                        <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">
                                            {docCategory.subtitle}
                                        </span>
                                        <h3 className="font-extrabold text-base sm:text-lg text-[#171717] leading-snug">
                                            {docCategory.category}
                                        </h3>
                                    </div>

                                    {/* Checklist */}
                                    <div className="space-y-3">
                                        {docCategory.items.map((item, itemIdx) => (
                                            <div
                                                key={itemIdx}
                                                className="flex items-start gap-2.5 text-left"
                                            >
                                                <div className="w-4 h-4 rounded-full bg-[#FFF8D6] text-[#171717] flex items-center justify-center shrink-0 mt-0.5 border border-[#F4C430]/40">
                                                    <CheckCircle2 size={12} className="text-[#171717]" />
                                                </div>
                                                <span className="text-xs sm:text-sm text-[#292929] leading-snug">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-5 mt-5 border-t border-[#E5E5E0] text-[11px] font-bold text-[#6B6B6B] text-center uppercase tracking-wider">
                                    Digital / Paperless Upload
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Paperless Verification Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="max-w-4xl mx-auto p-6 sm:p-7 rounded-3xl bg-[#FFFDF5] border border-[#F4C430]/50 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5 shadow-xs text-center sm:text-left"
                >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#FFF8D6] flex items-center justify-center text-[#171717] shrink-0 border border-[#F4C430]/40">
                            <Receipt size={24} />
                        </div>
                        <div>
                            <h4 className="font-extrabold text-base text-[#171717] mb-1">
                                Zero Physical Documentation with Digital CAS
                            </h4>
                            <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed max-w-xl">
                                Authorize OTP verification directly through your registered mobile number to fetch your Demat holdings and Mutual Fund folios with zero physical paperwork.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleApply}
                        className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] font-bold text-xs uppercase tracking-wider transition-all shadow-xs hover:shadow shrink-0 cursor-pointer w-full sm:w-auto"
                    >
                        <span>Proceed with OTP</span>
                        <ArrowRight size={14} />
                    </button>
                </motion.div>

            </div>
        </section>
    );
};