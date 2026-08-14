"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FireFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "What is Fire Insurance?",
      answer: "Fire Insurance is a specialized property insurance contract that compensates the policyholder against financial loss or damage caused to physical structures, plant, machinery, furniture, raw materials, and finished goods due to fire, explosions, lightning, and 12 special perils."
    },
    {
      question: "What does Fire Insurance typically cover?",
      answer: "A standard fire and special perils policy covers damages arising from fire, lightning, explosion/implosion, aircraft damage, riots and strikes (RSMD), storm, cyclone, flood, and inundation (STFI), impact damage by road vehicles or animals, subsidence, landslides, bush fires, water tank bursting, and accidental sprinkler leakage."
    },
    {
      question: "Who should buy Fire Insurance?",
      answer: "Anyone who owns, leases, or operates physical property—including individual homeowners, residential housing societies, retail store owners, SME factories, warehouse operators, logistics hubs, IT parks, schools, and large industrial plants—should invest in fire insurance."
    },
    {
      question: "What is not covered under Fire Insurance?",
      answer: "Standard exclusions include loss caused by war and nuclear perils, intentional or fraudulent destruction, gradual wear and tear, pollution contamination, loss of earnings (unless FLOP/Business Interruption rider is added), and theft during a fire (unless Burglary extension is active)."
    },
    {
      question: "How is the Fire Insurance premium calculated?",
      answer: "Premiums are calculated based on: (1) Total Sum Insured (replacement or market value), (2) Nature of occupancy (residential, commercial, manufacturing, or hazardous chemical storage), (3) Built-up construction type and age, (4) In-house fire protection systems (fire hydrants, sprinklers, smoke alarms), and (5) Geographical peril hazard zone."
    },
    {
      question: "What is the difference between Reinstatement Value and Market Value?",
      answer: "Under Reinstatement Value, the insurer pays the complete cost of rebuilding the damaged property or replacing equipment with brand new units of equal capability without any depreciation deductions. Market value deducts depreciation for age and wear-and-tear."
    },
    {
      question: "How fast are fire claims processed and settled?",
      answer: "At Bharati Mall, emergency claim intimation is logged 24/7. An IRDAI surveyor inspects the site within 24-48 hours. Once necessary documents and final repair estimates are submitted, approved claim funds are disbursed directly to your bank account within 7 to 15 working days."
    },
    {
      question: "Is terrorism risk covered in fire insurance?",
      answer: "Yes, terrorism cover is available as an IRDAI-regulated extension endorsed by the Indian Market Terrorism Risk Pool. It protects your business assets and resulting consequential losses against acts of sabotage and terror."
    }
  ];

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2076C7] tracking-tight leading-tight uppercase">
            Frequently Asked <span className="text-[#1CADA3]">Questions</span>
          </h2>

          <p className="mt-3 text-zinc-500 font-medium text-sm sm:text-base">
            Got questions about fire insurance? We've got answers.
          </p>
        </div>

        {/* Accordion List (Matching Screenshot 5) */}
        <div className="space-y-3.5">
          {visibleFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#f8fbff]/80 hover:bg-[#f8fbff] rounded-2xl border border-blue-50 transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-zinc-800">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white text-[#2076C7] flex items-center justify-center shrink-0 shadow-xs border border-blue-100">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed border-t border-blue-100/60 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        {!showAll && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 rounded-full bg-blue-50 hover:bg-blue-100/80 text-[#2076C7] font-bold text-xs sm:text-sm transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>View More</span>
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
