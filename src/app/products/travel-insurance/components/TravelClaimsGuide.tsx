"use client";

import React from "react";
import { PhoneCall, Building2, CreditCard } from "lucide-react";

export default function TravelClaimsGuide() {
  const steps = [
    {
      step: "1",
      icon: PhoneCall,
      title: "Call 24x7 Global TPA",
      description: "Contact the insurer's international emergency assistance hotline printed on your digital insurance certificate."
    },
    {
      step: "2",
      icon: Building2,
      title: "Hospital Network Admission",
      description: "Present your policy number & passport at any overseas accredited hospital or medical clinic."
    },
    {
      step: "3",
      icon: CreditCard,
      title: "Direct Cashless Settlement",
      description: "The Third-Party Administrator approves pre-authorization and settles medical expenses directly in foreign currency."
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-zinc-50/70 border-t border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
            OVERSEAS ASSISTANCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            How Overseas Cashless Claims Work
          </h2>
          <p className="text-sm text-gray-500">
            Emergency support in over 195 countries with zero out-of-pocket medical expenses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-gray-100 shadow-md text-center space-y-4 hover:border-[#2076C7]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#2076C7] flex items-center justify-center mx-auto shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2076C7] text-[10px] font-bold uppercase tracking-wider">
                  Step {item.step}
                </div>
                <h3 className="text-base font-bold text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
