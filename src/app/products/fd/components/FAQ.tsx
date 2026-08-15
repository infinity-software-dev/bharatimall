"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What is a Fixed Deposit (FD)?",
        answer: "A Fixed Deposit is a financial instrument where you deposit a lump sum amount for a fixed tenure at a guaranteed interest rate. It is one of the safest investment options in India."
    },
    {
        question: "Is my money safe in a Fixed Deposit?",
        answer: "Yes, Fixed Deposits with scheduled commercial banks are insured by the DICGC (a subsidiary of RBI) for up to ₹5 Lakh, including principal and interest."
    },
    {
        question: "Can I withdraw my FD before the maturity date?",
        answer: "Yes, most FDs allow premature withdrawal, though it usually comes with a small penalty (typically 0.5% to 1%) on the applicable interest rate."
    },
    {
        question: "What is the difference between Bank FD and NBFC FD?",
        answer: "Bank FDs are insured by RBI (up to ₹5L) and offer moderate returns. NBFC FDs (Corporate FDs) are not insured by RBI but often offer higher interest rates. Safety in NBFCs is determined by credit ratings like AAA or AA+."
    },
    {
        question: "How is interest on FD taxed?",
        answer: "Interest earned on FD is taxable as per your income tax slab. Banks deduct TDS (Tax Deducted at Source) at 10% if the interest exceeds ₹40,000 (₹50,000 for senior citizens) in a financial year."
    },
    {
        question: "Are interest rates higher for senior citizens?",
        answer: "Yes, most banks and financial institutions offer an additional 0.50% to 0.75% interest rate to senior citizens (individuals aged 60 and above)."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [showAllFaqs, setShowAllFaqs] = useState(false);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="py-16 md:py-20 bg-[#F5F5F3] font-sans border-b border-[#E5E5E0]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-20 h-1 mx-auto rounded-full mb-4 bg-[#F4C430]" />
                    <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal">
                        Got questions about Fixed Deposits? We&apos;ve got you covered.
                    </p>
                </div>

                <div className="space-y-4">
                    {(showAllFaqs ? faqs : faqs.slice(0, 5)).map((faq: any, idx: number) => (
                        <div key={idx} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === idx ? 'border-[#F4C430] shadow-md bg-white' : 'border-[#E5E5E0] bg-white hover:border-[#F4C430]/60 hover:shadow-md'}`}>
                            <button
                                onClick={() => toggleFAQ(idx)}
                                className={`w-full px-4 sm:px-6 py-3.5 sm:py-4.5 text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-start md:gap-3 transition-colors focus:outline-none cursor-pointer group ${activeIndex === idx ? 'bg-[#FFF8D6]/40' : 'bg-white hover:bg-[#FFFDF5]'}`}
                            >
                                <span className={`font-bold text-base sm:text-lg pr-2 transition-colors duration-300 ${activeIndex === idx ? 'text-[#171717]' : 'text-[#292929] group-hover:text-[#171717]'}`}>{faq.question}</span>
                                <div className={`p-1.5 rounded-full border transition-all duration-300 ${activeIndex === idx ? 'rotate-180 bg-[#F4C430] border-[#F4C430] text-[#171717]' : 'bg-white border-[#E5E5E0] text-[#6B6B6B]'}`}>
                                    {activeIndex === idx ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                                </div>
                            </button>

                            {activeIndex === idx && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="px-6 py-4 bg-white text-[#292929] text-sm sm:text-base leading-relaxed border-t border-[#E5E5E0] font-normal"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>

                {faqs.length > 5 && (
                    <div className="text-center mt-12">
                        <button
                            type="button"
                            onClick={() => setShowAllFaqs(!showAllFaqs)}
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white border border-[#E5E5E0] text-[#171717] font-bold text-sm hover:bg-[#FFF8D6] hover:border-[#F4C430] transition-all duration-300 cursor-pointer shadow-xs"
                        >
                            {showAllFaqs ? 'View Less' : 'View More'}
                            <Plus size={18} className={`transition-transform duration-300 ${showAllFaqs ? 'rotate-45' : ''}`} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQ;
