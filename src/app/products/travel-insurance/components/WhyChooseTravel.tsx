"use client";

import React, { useState } from "react";
import { Ambulance, Plane, Briefcase, Headphones, Check, ChevronDown, ChevronUp } from "lucide-react";

export default function WhyChooseTravel() {
  const [showDocDetails, setShowDocDetails] = useState(false);

  const whoCanApply = [
    {
      icon: Ambulance,
      title: "Global Medical Cover",
      description: "Up to $1 Million coverage for illnesses and sudden accidents abroad."
    },
    {
      icon: Plane,
      title: "Trip Cancellation",
      description: "Reimbursement for non-refundable expenses if your plans change."
    },
    {
      icon: Briefcase,
      title: "Lost Baggage",
      description: "Secure payouts for total loss or theft of your checked-in baggage."
    },
    {
      icon: Headphones,
      title: "Emergency Cash",
      description: "Immediate financial aid for travelers stranded due to theft or loss."
    }
  ];

  const checklistItems = [
    "Indian passport holders",
    "Traveler age: 6 mo - 70 yr",
    "Trip duration: Up to 180 days",
    "Domestic and international",
    "Leisure, business, study",
    "Generally healthy travelers"
  ];

  return (
    <section className="py-14 lg:py-20 bg-white border-t border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Why Choose & Who Can Apply Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            Why Choose Our Travel Insurance?
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            We offer more than just coverage — we provide peace of mind for your global adventures with tailor-made plans.
          </p>
          <div className="pt-2">
            <h3 className="text-xl font-extrabold text-[#1CADA3] tracking-tight">
              Who Can Apply?
            </h3>
          </div>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whoCanApply.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-gray-100 p-6 shadow-md hover:shadow-xl hover:border-[#2076C7]/30 transition-all duration-300 flex flex-col items-center text-center space-y-3 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#2076C7] flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Large Container Card: Quick Checklist & Protected Everywhere */}
        <div className="bg-gradient-to-br from-sky-50/50 via-teal-50/30 to-white rounded-3xl border border-sky-100 p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Quick Checklist */}
            <div className="lg:col-span-7 space-y-5">
              <h4 className="text-xl font-extrabold text-[#1660A7] tracking-tight">
                Quick Checklist
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {checklistItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowDocDetails(!showDocDetails)}
                  className="px-5 py-2.5 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
                  style={{ background: "linear-gradient(to right, #2076C7, #1CADA3)" }}
                >
                  <span>CHECK ELIGIBILITY & DOCUMENTS</span>
                  {showDocDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {showDocDetails && (
                <div className="p-4 bg-white/90 rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-2 mt-3 animate-in fade-in duration-200">
                  <p className="font-bold text-gray-800">Required Documents for Application:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Valid Passport copy (minimum 6 months validity)</li>
                    <li>Confirmed round-trip flight booking or itinerary</li>
                    <li>Valid Visitor/Tourist/Student Visa (or apply insurance prior to visa interview)</li>
                    <li>Medical declaration for travelers aged above 65 years</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Right: Protected Everywhere Stats */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-sky-100 lg:pl-10 space-y-6">
              <h4 className="text-xl font-extrabold text-[#1660A7] tracking-tight">
                Protected Everywhere
              </h4>

              <div className="flex items-center gap-10">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                    195+
                  </div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                    COUNTRIES
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                    50k+
                  </div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                    DOCTORS
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {["USA", "UK", "Schengen", "UAE"].map((country) => (
                  <span
                    key={country}
                    className="px-3 py-1 rounded-lg bg-white border border-gray-200/80 text-[11px] font-bold text-gray-700 shadow-2xs"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
