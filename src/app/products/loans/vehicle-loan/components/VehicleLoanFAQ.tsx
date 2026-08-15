"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const vehicleLoanFaqs = [
    {
        question: "What is the maximum vehicle loan amount I can get?",
        answer:
            "We offer up to 100% financing on the on-road price of select vehicle models. The exact loan sanction depends on the invoice quotation, your monthly income, CIBIL score, and debt-to-income ratio.",
    },
    {
        question: "Can I get a loan for a used or pre-owned vehicle?",
        answer:
            "Yes, we provide financing options for certified pre-owned and used vehicles. Loan-to-value (LTV) ratios and interest slabs are assessed based on the car or commercial vehicle's age, mileage, and technical valuation.",
    },
    {
        question: "How long does it take for a vehicle loan to be approved?",
        answer:
            "With complete digital KYC and bank statements, provisional sanction letters are issued within 24 to 48 hours. Pre-approved customers can receive instant approval and rapid disbursal directly to the dealership.",
    },
    {
        question: "Is it mandatory to have a guarantor or co-applicant?",
        answer:
            "A guarantor is generally not required if your primary income profile meets lender criteria. However, adding a co-applicant or guarantor can help boost your eligible loan quantum or overcome minor credit score gaps.",
    },
    {
        question: "Can I prepay or foreclose my vehicle loan before the tenure ends?",
        answer:
            "Yes, you can make part-prepayments or foreclose your vehicle loan after the initial lock-in period (typically 6 months). Foreclosure terms and zero-penalty options vary by lender policy.",
    },
    {
        question: "What happens if I miss a scheduled EMI payment?",
        answer:
            "Missing an EMI attracts late payment charges and penal interest. It will also be reported to credit bureaus, lowering your CIBIL score. Consistent defaults may risk vehicle hypothecation recovery.",
    },
];

export default function VehicleLoanFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [showAllFaqs, setShowAllFaqs] = useState(false);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const displayedFaqs = showAllFaqs
        ? vehicleLoanFaqs
        : vehicleLoanFaqs.slice(0, 5);

    return (
        <section
            className="bg-[#FFFFFF] font-sans py-14 md:py-20 border-b border-[#E5E5E0]"
            id="vehicle-loan-faq-section"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <HelpCircle size={14} className="text-[#171717]" />
                        Vehicle Financing FAQs
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Got questions about vehicle loans, interest rates, hypothecation, or down payments? We&apos;ve got answers.
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
                {vehicleLoanFaqs.length > 5 && (
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