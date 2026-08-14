"use client";

import React from "react";
import { HeartPulse, Luggage, Clock, FileText, PhoneCall, ShieldCheck } from "lucide-react";

export default function TravelCoverageFeatures() {
  const features = [
    {
      icon: HeartPulse,
      title: "Emergency Medical & Hospitalization",
      description: "Direct cashless hospitalization abroad, emergency medical evacuation, and repatriation of mortal remains."
    },
    {
      icon: Luggage,
      title: "Loss & Delay of Checked Baggage",
      description: "Compensation for essential emergency purchases during baggage delays and full reimbursement for permanent loss."
    },
    {
      icon: Clock,
      title: "Trip Cancellation & Flight Delays",
      description: "Reimbursement of non-refundable flights and prepaid hotel bookings due to unforeseen medical emergencies or strikes."
    },
    {
      icon: FileText,
      title: "Passport & Document Loss",
      description: "Assistance and cost coverage for obtaining emergency travel certificates and duplicate passport replacement abroad."
    },
    {
      icon: PhoneCall,
      title: "24x7 Global Assistance Helpline",
      description: "Toll-free worldwide emergency concierge support, legal assistance, and multi-lingual medical coordination."
    },
    {
      icon: ShieldCheck,
      title: "Personal Liability & Hijack Distress",
      description: "Third-party accidental damage compensation and daily financial allowance during unexpected hijack situations."
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-white border-t border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
            360° TRAVEL SHIELD
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            Key Coverage & Benefits
          </h2>
          <p className="text-sm text-gray-500">
            Comprehensive financial safeguard for business travelers, vacationing families, and overseas students.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-zinc-50/70 border border-zinc-200/80 hover:border-[#2076C7]/30 hover:shadow-md transition-all space-y-3"
              >
                <div className="w-11 h-11 rounded-2xl bg-sky-50 text-[#2076C7] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-zinc-900">
                  {feat.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
