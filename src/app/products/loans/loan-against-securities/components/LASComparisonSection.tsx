"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, CheckCircle2, XCircle, Sparkles } from "lucide-react";

interface ComparisonRow {
    feature: string;
    las: string;
    lasPositive: boolean;
    personalLoan: string;
    personalLoanPositive: boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
    {
        feature: "Interest Rates (p.a.)",
        las: "Starting at 8.50% - 10.50% (Secured)",
        lasPositive: true,
        personalLoan: "12.50% - 24.00%+ (Unsecured)",
        personalLoanPositive: false,
    },
    {
        feature: "Repayment Structure",
        las: "Flexible interest-only monthly servicing",
        lasPositive: true,
        personalLoan: "Rigid fixed monthly principal + interest EMIs",
        personalLoanPositive: false,
    },
    {
        feature: "Credit Score Dependency",
        las: "Minimal; backed 100% by pledged collateral",
        lasPositive: true,
        personalLoan: "Strict CIBIL dependency (750+ required)",
        personalLoanPositive: false,
    },
    {
        feature: "Prepayment & Foreclosure",
        las: "Zero prepayment penalty; pay anytime",
        lasPositive: true,
        personalLoan: "Foreclosure charges up to 3% - 5% + lock-in",
        personalLoanPositive: false,
    },
    {
        feature: "Asset Compounding",
        las: "Portfolio stays invested & earns dividends",
        lasPositive: true,
        personalLoan: "No collateral, but higher interest drain",
        personalLoanPositive: false,
    },
    {
        feature: "Sanction & Disbursal Time",
        las: "Sub-4 hours digital pledge setup",
        lasPositive: true,
        personalLoan: "2 to 5 business days with physical verification",
        personalLoanPositive: false,
    },
];

export const LASComparisonSection: React.FC = () => {
    return (
        <section
            className="py-14 md:py-20 bg-[#FFFFFF] relative overflow-hidden font-sans border-b border-[#E5E5E0]"
            id="las-comparison-section"
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
                        <Scale size={14} className="text-[#171717]" />
                        Side-by-Side Comparison
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        LAS vs. Unsecured Personal Loans
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        Discover why pledging your liquid financial assets provides significantly lower financing costs and superior repayment agility compared to traditional unsecured debt.
                    </p>
                </motion.div>

                {/* Comparison Table Container */}
                <div className="max-w-5xl mx-auto">
                    <div className="bg-[#FFFDF5] rounded-3xl border border-[#E5E5E0] overflow-hidden shadow-xs">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[620px]">
                                <thead>
                                    <tr className="border-b border-[#E5E5E0] bg-[#F5F5F3]">
                                        <th className="py-4 px-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#171717] w-1/3">
                                            Key Parameter
                                        </th>
                                        <th className="py-4 px-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#171717] bg-[#FFF8D6] border-l border-r border-[#E5E5E0] w-1/3">
                                            <div className="flex items-center gap-1.5">
                                                <Sparkles size={14} className="text-[#171717]" />
                                                <span>Loan Against Securities</span>
                                            </div>
                                        </th>
                                        <th className="py-4 px-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#6B6B6B] w-1/3">
                                            Unsecured Personal Loan
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#E5E5E0] text-xs sm:text-sm">
                                    {COMPARISON_DATA.map((row, idx) => (
                                        <tr
                                            key={idx}
                                            className="hover:bg-[#FFFFFF] transition-colors"
                                        >
                                            <td className="py-4 px-6 font-bold text-[#171717]">
                                                {row.feature}
                                            </td>
                                            <td className="py-4 px-6 font-bold text-[#171717] bg-[#FFF8D6]/40 border-l border-r border-[#E5E5E0]">
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle2 size={16} className="text-[#198754] shrink-0 mt-0.5" />
                                                    <span>{row.las}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-[#6B6B6B]">
                                                <div className="flex items-start gap-2">
                                                    <XCircle size={16} className="text-[#D64545] shrink-0 mt-0.5" />
                                                    <span>{row.personalLoan}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};