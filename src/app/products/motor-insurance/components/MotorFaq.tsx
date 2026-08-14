"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const MOTOR_FAQS = [
  {
    q: "What is the difference between Comprehensive and Third-Party Motor Insurance?",
    a: "Third-Party Insurance is mandatory by law and covers legal liabilities for injury or property damage caused to third parties. Comprehensive Insurance covers third-party liabilities PLUS damages to your own vehicle caused by accidents, fire, theft, floods, and natural calamities."
  },
  {
    q: "What is Zero Depreciation (Bumper-to-Bumper) cover?",
    a: "Zero Depreciation cover waives off the depreciation deduction on replaced vehicle parts (plastic, rubber, metal, glass) during an accident claim, ensuring you receive the full cost of replaced components."
  },
  {
    q: "Can I transfer my No Claim Bonus (NCB) when switching insurers?",
    a: "Yes! NCB belongs to the vehicle owner, not the vehicle or insurer. You can easily transfer up to 50% accumulated NCB to a new insurer or when purchasing a new vehicle."
  },
  {
    q: "What is IDV (Insured Declared Value)?",
    a: "IDV is the maximum sum insured amount fixed by the insurer payable in case of total loss or theft of the vehicle. It is calculated based on manufacturer's listed price adjusted for annual depreciation."
  },
  {
    q: "How quickly is the motor policy issued after online payment?",
    a: "Your digital motor insurance policy document is generated and emailed to you instantly within 2 minutes of payment, along with an official copy sent to your WhatsApp."
  },
  {
    q: "Do I need physical vehicle inspection for policy renewal?",
    a: "If your policy has expired for more than 90 days, a quick self-inspection via smartphone camera app is usually completed within 15 minutes without requiring physical visits."
  }
];

export default function MotorFaq() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const visibleFaqs = showAllFaqs ? MOTOR_FAQS : MOTOR_FAQS.slice(0, 5);

  return (
    <section className="py-14 lg:py-20 bg-white border-t border-zinc-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Got questions about motor insurance? We&apos;ve got answers.
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
              <span>View More Questions +</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
