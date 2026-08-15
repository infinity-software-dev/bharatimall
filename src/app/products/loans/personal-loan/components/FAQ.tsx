"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const personalLoanFaqs = [
  {
    question: "What is the maximum loan amount I can avail?",
    answer:
      "You can avail a personal loan up to ₹50 Lakhs, depending on your eligibility, monthly income, and existing credit commitments.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Our digital-first approach allows for instant in-principle approval. Once all documents are verified, the amount is usually disbursed within 24-48 hours.",
  },
  {
    question: "Do I need to provide any collateral or security?",
    answer:
      "No, personal loans are unsecured loans, meaning you don't need to provide any collateral, gold, or property as security.",
  },
  {
    question: "What are the interest rates offered?",
    answer:
      "Interest rates start from competitive levels and vary based on your credit score, employer category, and loan tenure.",
  },
  {
    question: "Can I prepay or foreclose my loan?",
    answer:
      "Yes, you can prepay or foreclose your loan after a minimum lock-in period (usually 6-12 months). Applicable foreclosure charges may apply as per lender norms.",
  },
  {
    question: "Can I get a loan if I am self-employed?",
    answer:
      "Yes, self-employed professionals and business owners can apply for personal loans, provided they meet the income and business vintage requirements.",
  },
  {
    question: "Is there a processing fee for the loan?",
    answer:
      "Yes, lenders usually charge a nominal processing fee ranging from 1% to 3% of the loan amount, deducted from the disbursed amount.",
  },
  {
    question: "What is the minimum monthly income required?",
    answer:
      "The minimum net monthly income requirement typically starts from ₹15,000, though it may vary depending on the lender and city of residence.",
  },
  {
    question: "Can I apply for a personal loan with a low CIBIL score?",
    answer:
      "While a score of 700+ is preferred, some lending partners offer loans to those with lower scores at adjusted terms or with an eligible co-applicant.",
  },
  {
    question: "What can I use a personal loan for?",
    answer:
      "Personal loans are multi-purpose. You can use them for weddings, medical emergencies, travel, home renovation, education, or debt consolidation.",
  },
  {
    question: "Does checking my eligibility impact my credit score?",
    answer:
      "A preliminary eligibility check is considered a soft inquiry and does not harm your credit score.",
  },
  {
    question: "What is the minimum and maximum tenure for repayment?",
    answer:
      "Repayment tenures are flexible, usually ranging from 12 months (1 year) up to 84 months (7 years).",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "We believe in complete transparency. All charges, including processing fees and foreclosure conditions, are communicated upfront.",
  },
  {
    question: "Can I get a top-up on my existing personal loan?",
    answer:
      "Yes, applicants with a consistent repayment track record on their active loan can qualify for instant top-up loans.",
  },
  {
    question: "How is the EMI calculated?",
    answer:
      "EMIs are calculated based on the principal amount, interest rate, and tenure using standard reducing balance methods. You can use our calculator above for exact estimates.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const displayedFaqs = showAllFaqs ? personalLoanFaqs : personalLoanFaqs.slice(0, 5);

  return (
    <section className="bg-[#FFFFFF] font-sans py-14 md:py-20 border-b border-[#E5E5E0]" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
            <HelpCircle size={14} className="text-[#171717]" />
            Common Inquiries
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Find answers to common questions about personal loan eligibility, interest rates, and disbursal.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {displayedFaqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#F4C430] bg-[#FFFDF5] shadow-xs"
                    : "border-[#E5E5E0] bg-[#FFFFFF] hover:border-[#E5E5E0]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className={`w-full px-5 sm:px-6 py-4 text-left flex justify-between items-center gap-4 transition-colors cursor-pointer ${
                    isOpen ? "bg-[#FFF8D6]/40" : "bg-[#FFFFFF] hover:bg-[#FFFDF5]"
                  }`}
                >
                  <span className="font-bold text-base sm:text-lg text-[#171717] pr-2 leading-snug">
                    {faq.question}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                      isOpen
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

        {/* View More / Less Button */}
        {personalLoanFaqs.length > 5 && (
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