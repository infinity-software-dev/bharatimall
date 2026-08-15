"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const creditCardFaqs = [
    {
        question: "How do I apply for a credit card online?",
        answer:
            "Applying is simple! Browse our card collection, compare benefits, and click 'Apply Now' or request a callback. Our digital onboarding workflow guides you through 100% paperless verification, Video KYC, and E-documentation.",
    },
    {
        question: "What are the common documents required for application?",
        answer:
            "Typically required: 1. Identity Proof (PAN, Aadhaar, Passport), 2. Address Proof (Utility bills, Voter ID), and 3. Income Proof (Last 3 months salary slips, Form 16, or ITR computation).",
    },
    {
        question: "What is 'SBI Card Sprint' and how does it work?",
        answer:
            "SBI Card Sprint is an instant, digital-only application platform allowing you to complete your application in 3 streamlined steps—Personal Details, Professional Details, and KYC—for an immediate decision.",
    },
    {
        question: "Does HDFC Bank offer travel and lounge rewards?",
        answer:
            "Yes! HDFC premium credit cards like Regalia Gold offer complimentary domestic and international airport lounge access alongside reward points redeemable for flights and hotels via SmartBuy.",
    },
    {
        question: "What is the 'Total Security Policy' on IndusInd Bank cards?",
        answer:
            "An exclusive protection feature that covers you against unauthorized transactions up to your credit limit in the event of card loss, theft, or skimming.",
    },
    {
        question: "Can I get a credit card without income proof?",
        answer:
            "Yes, fixed-deposit (FD) backed credit cards (like Kotak 811 Dream Different) require no prior credit history or income proof and are issued against a fixed deposit lien.",
    },
    {
        question: "What is the interest-free grace period on credit cards?",
        answer:
            "Most credit cards offer an interest-free grace period ranging from 20 to 55 days, provided you pay your total outstanding balance in full by the stipulated payment due date.",
    },
    {
        question: "How is my credit card limit determined?",
        answer:
            "Issuers evaluate your monthly net income, debt-to-income ratio, employment stability, and CIBIL credit score (750+ preferred) to determine your maximum approved credit limit.",
    },
    {
        question: "What movie and dining benefits are included on Axis Bank cards?",
        answer:
            "Selected Axis Bank variants offer 'Buy One Get One' (BOGO) movie ticket discounts via BookMyShow and up to 20% savings at partner dining outlets across India.",
    },
    {
        question: "Are IDFC First Bank credit cards lifetime free?",
        answer:
            "Yes, IDFC First Bank offers multiple popular credit card variants (such as Millennia and Select) with zero joining fees and zero annual fees (Lifetime Free) with no hidden conditions.",
    },
    {
        question: "Is Video KYC mandatory for credit card approval?",
        answer:
            "Video KYC is a fast, mandatory alternative to physical verification required by RBI. It takes around 5 minutes where you display your original PAN card over a secure video link.",
    },
    {
        question: "What is the difference between Joining Fee and Annual Fee?",
        answer:
            "The Joining Fee is a one-time charge in your first billing cycle, while the Annual Fee is charged yearly. Many cards offer annual fee waivers upon reaching annual spending milestones.",
    },
];

interface FAQSectionProps {
    onApply?: () => void;
}

export default function FAQSection({ onApply }: FAQSectionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [showAllFaqs, setShowAllFaqs] = useState(false);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const displayedFaqs = showAllFaqs ? creditCardFaqs : creditCardFaqs.slice(0, 5);

    return (
        <section
            className="py-14 md:py-20 bg-[#FFFFFF] font-sans border-b border-[#E5E5E0]"
            id="faq"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <HelpCircle size={14} className="text-[#171717]" />
                        Cardholder FAQs
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Got questions about credit card rewards, annual fee waivers, Video KYC, or credit limits? We&apos;ve got answers.
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
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* View More / View Less Toggle */}
                {creditCardFaqs.length > 5 && (
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