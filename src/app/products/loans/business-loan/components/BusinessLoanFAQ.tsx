"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const businessLoanFaqs = [
    {
        question: "What is the maximum loan amount I can get for my business?",
        answer:
            "You can apply for an unsecured business loan up to ₹50 Lakhs to ₹1 Crore, depending on your business stability, vintage, annual turnover, and audited cash flows.",
    },
    {
        question: "Is collateral required for a business loan?",
        answer:
            "We offer collateral-free business loans where no asset pledging (such as commercial property, machinery, or inventory) is required for sanctioning.",
    },
    {
        question: "What are the interest rates for business loans?",
        answer:
            "Interest rates start from 9.50% p.a. and are determined based on your enterprise type, operational vintage, financial health, and commercial credit rating.",
    },
    {
        question: "How long does it take for the loan to be disbursed?",
        answer:
            "Our process is designed for speed. Once your digital documents are verified and credit sanction is approved, funds are credited to your current account within 24 to 48 hours.",
    },
    {
        question: "What is the eligibility criteria for a business loan?",
        answer:
            "Generally, your enterprise should have a minimum vintage of 1 to 2 years, healthy annual turnover (> ₹20 Lakhs), and a promoter credit score of 700+. Proprietorships, Partnerships, LLPs, and Pvt. Ltd. companies are eligible.",
    },
    {
        question: "Can I prepay or foreclose my business loan?",
        answer:
            "Yes, you can prepay or foreclose your loan after a minimum lock-in period (typically 6 months). Standard foreclosure terms apply as per lender agreements.",
    },
    {
        question: "Can I use a business loan to start a new business?",
        answer:
            "Standard commercial loans require operational history. However, specialized startup lines and government schemes (such as CGTMSE/MUDRA) exist for early-stage ventures.",
    },
    {
        question: "Are there any processing fees involved?",
        answer:
            "A nominal processing fee ranging between 1% and 2% of the sanctioned amount applies, deducted directly from the disbursal with full upfront disclosure.",
    },
    {
        question: "How does my credit score affect my business loan application?",
        answer:
            "A CIBIL score of 700+ demonstrates strong financial discipline, accelerating approval turnaround times and unlocking preferential interest rates.",
    },
];

export default function BusinessLoanFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [showAllFaqs, setShowAllFaqs] = useState(false);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const displayedFaqs = showAllFaqs ? businessLoanFaqs : businessLoanFaqs.slice(0, 5);

    return (
        <section className="bg-[#FFFFFF] font-sans py-14 md:py-20 border-b border-[#E5E5E0]" id="faqs">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <HelpCircle size={14} className="text-[#171717]" />
                        Common Inquiries
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Find quick answers to common questions regarding business loan sanctions, interest rates, and eligibility.
                    </p>
                </div>

                {/* FAQ Accordion List */}
                <div className="space-y-3.5">
                    {displayedFaqs.map((faq, idx) => {
                        const isOpen = activeIndex === idx;
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
                                    onClick={() => toggleFAQ(idx)}
                                    className={`w-full px-5 sm:px-6 py-4 text-left flex justify-between items-center gap-4 transition-colors cursor-pointer ${isOpen ? "bg-[#FFF8D6]/40" : "bg-[#FFFFFF] hover:bg-[#FFFDF5]"
                                        }`}
                                >
                                    <span className="font-bold text-base sm:text-lg text-[#171717] pr-2 leading-snug">
                                        {faq.question}
                                    </span>

                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${isOpen
                                                ? "bg-[#F4C430] border-[#F4C430] text-[#171717] rotate-180"
                                                : "bg-[#F5F5F3] border-[#E5E5E0] text-[#171717]"
                                            }`}
                                    >
                                        {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-5 sm:px-6 py-4 bg-[#FFFDF5] text-[#6B6B6B] text-sm sm:text-base leading-relaxed border-t border-[#E5E5E0]">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Toggle More / Less */}
                {businessLoanFaqs.length > 5 && (
                    <div className="text-center mt-8">
                        <button
                            type="button"
                            onClick={() => setShowAllFaqs(!showAllFaqs)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFF8D6] hover:bg-[#FFD21F] text-[#171717] border border-[#F4C430]/40 font-bold text-sm transition-colors cursor-pointer shadow-xs"
                        >
                            <span>{showAllFaqs ? "View Less Questions" : "View All Questions"}</span>
                            <Plus
                                size={16}
                                className={`transition-transform duration-300 ${showAllFaqs ? "rotate-45" : ""}`}
                            />
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}