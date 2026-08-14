"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const TRAVEL_FAQS = [
  {
    q: "What does travel insurance typically cover?",
    a: "Travel insurance typically covers overseas emergency medical hospitalization & doctor visits, baggage loss or delay, flight cancellation or interruption, loss of passport, emergency medical evacuation, and third-party personal liability."
  },
  {
    q: "When should I buy travel insurance?",
    a: "It is best to buy travel insurance right after booking your flights or hotel reservations. This ensures you are immediately protected against unexpected trip cancellations before departure."
  },
  {
    q: "Are pre-existing medical conditions covered?",
    a: "Most standard international travel insurance plans cover life-threatening medical emergencies arising from pre-existing illnesses to stabilize the patient until safely returning to India."
  },
  {
    q: "How do I file a claim?",
    a: "For cashless hospital claims, contact the 24/7 global emergency helpline on your policy certificate. For baggage or flight delay reimbursements, submit your airline PIR report and expense bills via our online portal."
  },
  {
    q: "Can I extend my policy while abroad?",
    a: "Yes. You can request a policy extension online prior to the expiration date of your current policy, subject to a good health declaration and underwriter approval."
  },
  {
    q: "Is travel insurance mandatory for Schengen Visas?",
    a: "Yes. Schengen immigration strictly requires a minimum medical coverage of €30,000 (approx ₹30 Lakhs) with zero deductible valid across all 29 member countries."
  },
  {
    q: "Does travel insurance cover adventure sports and extreme activities?",
    a: "Certain comprehensive and family plans include coverage for standard leisure adventure sports like scuba diving, snorkeling, and trekking. Extreme sports add-on covers can also be opted."
  }
];

export default function TravelFaq() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const visibleFaqs = showAllFaqs ? TRAVEL_FAQS : TRAVEL_FAQS.slice(0, 5);

  return (
    <section className="py-14 lg:py-20 bg-white border-t border-zinc-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 bg-teal-500 mx-auto rounded-full mt-2" />
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Got questions about travel insurance? We&apos;ve got answers for you.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3 pt-2">
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

        {/* View More Button */}
        {!showAllFaqs && (
          <div className="text-center pt-3">
            <button
              type="button"
              onClick={() => setShowAllFaqs(true)}
              className="inline-flex items-center gap-1.5 px-6 py-2 rounded-xl bg-sky-50 text-[#2076C7] border border-sky-200/80 text-xs font-bold tracking-wider uppercase hover:bg-sky-100 transition-all cursor-pointer shadow-2xs"
            >
              <span>VIEW MORE +</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
