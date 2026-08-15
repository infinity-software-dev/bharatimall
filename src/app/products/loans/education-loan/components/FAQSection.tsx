"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const educationLoanFaqs = [
    {
        question: "What is the maximum loan amount I can get for studying abroad?",
        answer:
            "You can secure up to ₹1.5 Crore+ for overseas education programs across premier universities. For studies in India, sanction amounts reach up to ₹50 to ₹75 Lakhs through our partner banks and NBFCs, depending on course fee schedules, institution ranking, and co-sponsor income.",
    },
    {
        question: "Is collateral required for an education loan?",
        answer:
            "For loans up to ₹7.5 Lakhs (domestic) and select premier abroad programs up to ₹40 to ₹50 Lakhs, no physical collateral is required. For higher quantum loans, tangible assets like residential property, fixed deposits, or surrender-value insurance policies can be pledged as security.",
    },
    {
        question: "When does the EMI repayment start?",
        answer:
            "Repayment schedules feature a moratorium period equal to your course duration plus a 6 to 12 months post-graduation grace window. During this phase, only simple interest or partial interest may be serviced depending on the lender's policy. Full principal + interest EMIs begin post-moratorium.",
    },
    {
        question: "Can I get a tax benefit on education loan interest?",
        answer:
            "Yes. Under Section 80E of the Income Tax Act, 100% of the interest paid on an education loan is deductible from your taxable income with no upper monetary cap for up to 8 consecutive financial years.",
    },
    {
        question: "What types of courses and degrees are covered?",
        answer:
            "All recognized undergraduate, postgraduate, doctorate, executive MBA, and STEM certification programs are covered. STEM and management degrees in accredited global universities often unlock higher sanction limits and preferential interest slabs.",
    },
    {
        question: "Does a student's credit score affect the loan application?",
        answer:
            "Because students are frequently first-time borrowers without credit histories, lenders focus primarily on the co-applicant's credit score (700+ preferred), annual income stability, and academic admission credentials.",
    },
    {
        question: "What expenses are covered under the sanctioned loan?",
        answer:
            "Loan sanctions cover 100% of university tuition fees, hostel/campus accommodation, living stipends, international flight tickets, mandatory health insurance, books, and essential study hardware like laptops.",
    },
    {
        question: "How long does the loan approval and sanction process take?",
        answer:
            "With verified digital documentation, provisional sanction letters are typically issued in 3 to 5 business days. Fast-track pre-visa sanction letters can also be expedited within 24 to 48 hours for visa filing requirements.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [showAllFaqs, setShowAllFaqs] = useState(false);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const displayedFaqs = showAllFaqs
        ? educationLoanFaqs
        : educationLoanFaqs.slice(0, 5);

    return (
        <section className="bg-[#FFFFFF] font-sans py-14 md:py-20 border-b border-[#E5E5E0]" id="faq-section">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <HelpCircle size={14} className="text-[#171717]" />
                        Student Inquiries
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Everything you need to know about education loan terms, interest rates, tax deductions, and overseas disbursals.
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
                                        {isOpen ? (
                                            <Minus size={16} strokeWidth={2.5} />
                                        ) : (
                                            <Plus size={16} strokeWidth={2.5} />
                                        )}
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

                {/* View More / View Less Toggle */}
                {educationLoanFaqs.length > 5 && (
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