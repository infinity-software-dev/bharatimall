"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const LIFE_FAQS = [
  {
    q: "What is the best age to buy life insurance?",
    a: "The best age to buy life insurance is as early as possible (ideally in your 20s or early 30s) because premium rates are significantly lower and remain locked in for the entire policy tenure."
  },
  {
    q: "How much life insurance coverage do I need?",
    a: "A standard rule of thumb is to choose a sum assured that is at least 10 to 15 times your annual income plus any existing loans, liabilities, or future education expenses."
  },
  {
    q: "What is Zero Cost Term Insurance?",
    a: "Zero Cost Term Insurance allows you to exit the policy at a specific age (typically around retirement at age 60) and receive a 100% refund of all paid premiums with zero deductions."
  },
  {
    q: "What is the Secure Choice Benefit?",
    a: "The Secure Choice Benefit ensures regular guaranteed monthly income payouts to your family or nominees along with lump-sum death benefit protection."
  },
  {
    q: "Can NRIs buy life insurance from India?",
    a: "Yes, Non-Resident Indians (NRIs) and PIOs can easily purchase Indian life insurance plans online via video medicals (Tele-MER) with tax benefits under Section 80C."
  },
  {
    q: "Is the life insurance payout tax-free under Section 10(10D)?",
    a: "Yes, the death benefit payout received by nominees is 100% tax-free under Section 10(10D) of the Income Tax Act."
  },
  {
    q: "What riders should I add to my term policy?",
    a: "Recommended riders include Critical Illness Rider, Accidental Total & Permanent Disability Rider, Waiver of Premium, and Terminal Illness Accelerated Payout."
  }
];

export default function LifeFaq() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const visibleFaqs = showAllFaqs ? LIFE_FAQS : LIFE_FAQS.slice(0, 5);

  return (
    <section className="py-14 lg:py-20 bg-zinc-50/70 border-t border-zinc-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Got questions about life insurance? We&apos;ve got answers.
          </p>
        </div>

        <div className="space-y-3">
          {visibleFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:border-[#2076C7]/30 transition-all"
            >
              <button
                type="button"
                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-zinc-800 hover:text-[#2076C7] transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <div className="w-7 h-7 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 text-gray-500">
                  {faqOpen === idx ? (
                    <Minus className="w-4 h-4 text-[#2076C7]" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-500" />
                  )}
                </div>
              </button>
              {faqOpen === idx && (
                <div className="px-6 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3.5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More Questions Button */}
        {!showAllFaqs && (
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => setShowAllFaqs(true)}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl border border-gray-200 bg-white text-xs font-bold text-gray-700 hover:text-[#2076C7] hover:border-[#2076C7]/40 shadow-xs transition-all cursor-pointer"
            >
              <span>View More +</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
