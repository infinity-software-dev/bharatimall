"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ_DATA = [
    {
        q: "What is a Loan Against Securities (LAS)?",
        a: "Loan Against Securities allows you to borrow funds by pledging your existing investments—such as mutual funds, shares, bonds, or SGBs—as collateral without liquidating them.",
    },
    {
        q: "Which securities are eligible for pledging?",
        a: "You can pledge approved NSE/BSE Group-A equities, equity and debt mutual fund folios, Sovereign Gold Bonds (SGBs), government securities, corporate bonds, and select life insurance policies.",
    },
    {
        q: "How much loan amount can I qualify for?",
        a: "Loan limits are determined based on regulatory loan-to-value (LTV) limits: typically up to 50% on equity shares, 70%–80% on debt mutual funds, and up to 85%–90% on government bonds and SGBs.",
    },
    {
        q: "What interest rate is charged for LAS?",
        a: "Interest rates generally start from 8.50% p.a., charged purely on the utilized overdraft quantum on a daily reducing balance basis rather than the total sanctioned credit limit.",
    },
    {
        q: "Do I lose ownership or dividend rights of my investments?",
        a: "No. You retain complete beneficial ownership. All corporate actions, including dividends, interest distributions, bonus shares, and voting rights, continue to accrue to you directly.",
    },
    {
        q: "Are there any prepayment or foreclosure penalties?",
        a: "Most institutional lending partners charge zero prepayment or foreclosure penalties for LAS facilities, allowing you to pay back and close lines freely at any time.",
    },
    {
        q: "How is the borrowing limit and haircut calculated?",
        a: "The available credit line is calculated by applying a risk-adjusted haircut (margin) to the real-time market value of your securities, ensuring compliance with RBI/SEBI prudential norms.",
    },
    {
        q: "What happens if the market value of my pledged portfolio drops?",
        a: "If a market downturn reduces your collateral value below the lender's maintenance margin, a margin call is issued, giving you time to either pledge additional scrips or partially pay down the balance.",
    },
    {
        q: "Can I sell my securities while they remain pledged?",
        a: "Securities are locked in demat while pledged. You can unpledge them immediately by repaying the proportionate loan balance or swapping them with alternative approved securities before selling.",
    },
];

interface FAQSectionProps {
    onApply?: () => void;
}

export default function FAQSection({ onApply }: FAQSectionProps) {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [showAllFaqs, setShowAllFaqs] = useState<boolean>(false);

    const displayedFaqs = showAllFaqs ? FAQ_DATA : FAQ_DATA.slice(0, 5);

    return (
        <section
            className="py-14 md:py-20 bg-[#FFFFFF] font-sans border-b border-[#E5E5E0]"
            id="las-faq-section"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <HelpCircle size={14} className="text-[#171717]" />
                        Borrower Clarifications
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Everything you need to know about collateral eligibility, margin calls, interest servicing, and unpledging workflows.
                    </p>
                </div>

                {/* FAQ Accordion List */}
                <div className="space-y-3.5">
                    {displayedFaqs.map((faq, idx) => {
                        const isOpen = expandedFaq === idx;

                        return (
                            <div
                                key={idx}
                                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                                        ? "border-[#F4C430] bg-[#FFFDF5] shadow-xs"
                                        : "border-[#E5E5E0] bg-[#FFFFFF] hover:border-[#E5E5E0]"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                                    className={`w-full px-5 sm:px-6 py-4 text-left flex justify-between items-center gap-4 transition-colors cursor-pointer ${isOpen ? "bg-[#FFF8D6]/40" : "bg-[#FFFFFF] hover:bg-[#FFFDF5]"
                                        }`}
                                >
                                    <span className="font-bold text-base sm:text-lg text-[#171717] pr-2 leading-snug">
                                        {faq.q}
                                    </span>

                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${isOpen
                                                ? "bg-[#F4C430] border-[#F4C430] text-[#171717] rotate-180"
                                                : "bg-[#F5F5F3] border-[#E5E5E0] text-[#171717]"
                                            }`}
                                    >
                                        {isOpen ? (
                                            <Minus size={16} strokeWidth={2.5} />
                                        ) : (
                                            <Plus size={16} strokeWidth={2.5} />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 sm:px-6 py-4 bg-[#FFFDF5] text-[#6B6B6B] text-sm sm:text-base leading-relaxed border-t border-[#E5E5E0]">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* View More / View Less Toggle */}
                {FAQ_DATA.length > 5 && (
                    <div className="text-center mt-8">
                        <button
                            type="button"
                            onClick={() => setShowAllFaqs(!showAllFaqs)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFF8D6] hover:bg-[#FFD21F] text-[#171717] border border-[#F4C430]/40 font-bold text-sm transition-colors cursor-pointer shadow-xs"
                        >
                            <span>{showAllFaqs ? "View Less Questions" : "View All Questions"}</span>
                            <Plus
                                size={16}
                                className={`transition-transform duration-300 ${showAllFaqs ? "rotate-45" : ""
                                    }`}
                            />
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}