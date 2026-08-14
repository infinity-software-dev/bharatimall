"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const HEALTH_FAQS = [
  {
    q: "How quickly can I get the policy?",
    a: "You can receive your instant digital policy document within 5–10 minutes after completing the online application, medical declaration, and digital premium payment."
  },
  {
    q: "Are pre-existing diseases covered?",
    a: "Yes, pre-existing conditions (like diabetes, hypertension, asthma, thyroid) are covered after a standard waiting period typically ranging between 1 to 3 years depending on the chosen plan."
  },
  {
    q: "Can I use it for parents?",
    a: "Yes, you can easily add dependent parents under a Family Floater policy or choose dedicated Senior Citizen Health Plans with specialized OPD and pre-existing disease coverage."
  },
  {
    q: "Is there any medical test required?",
    a: "In most cases for applicants below 45-50 years, no pre-policy medical checkup is required. Medical tests are usually required only for higher age groups or very high sum insured policies."
  },
  {
    q: "How do I claim?",
    a: "For Cashless Claims: Visit any of the 14,000+ network hospitals, present your digital Health Card & ID at the TPA desk for instant pre-authorization. For Reimbursement: Submit your hospital discharge summary and original bills within 30 days."
  },
  {
    q: "What is Section 80D tax benefit in Health Insurance?",
    a: "Under Section 80D of the Income Tax Act, you can claim a deduction of up to ₹25,000 for self, spouse, and children, plus up to ₹50,000 for senior citizen parents (total tax savings up to ₹75,000–₹1,00,000)."
  },
  {
    q: "What is Restoration Benefit?",
    a: "If you exhaust your entire sum insured in a single hospitalization, the Restoration Benefit automatically recharges 100% of your sum insured for unrelated subsequent hospitalizations in the same policy year."
  }
];

export default function HealthFaq() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const visibleFaqs = showAllFaqs ? HEALTH_FAQS : HEALTH_FAQS.slice(0, 5);

  return (
    <section className="py-14 lg:py-20 bg-zinc-50/70 border-t border-zinc-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Got questions about health insurance? We&apos;ve got answers.
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
