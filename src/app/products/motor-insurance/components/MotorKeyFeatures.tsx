"use client";

import React from "react";
import { ShieldCheck, Wrench, Clock, FileCheck, Zap, Award } from "lucide-react";

export default function MotorKeyFeatures() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Zero Depreciation Cover",
      description: "Get 100% reimbursement on replacement of metal, fiber, and rubber car parts without depreciation deduction."
    },
    {
      icon: Wrench,
      title: "24x7 Roadside Assistance",
      description: "Flat tire, towing, dead battery, emergency fuel delivery, and key recovery assistance across India."
    },
    {
      icon: Clock,
      title: "Cashless Network Garages",
      description: "Repairs at over 10,000+ verified cashless workshops with genuine OEM parts and lifetime repair warranty."
    },
    {
      icon: FileCheck,
      title: "Instant Digital Policy",
      description: "100% paperless digital issuance. Download your active motor policy instantly on WhatsApp & email."
    },
    {
      icon: Zap,
      title: "Quick Claim Settlement",
      description: "Self-inspection via smartphone camera and priority claim approval within 30 minutes for minor damages."
    },
    {
      icon: Award,
      title: "NCB Retention Bonus",
      description: "Retain up to 50% No Claim Bonus discount even after making a single claim during the policy period."
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-white border-t border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
            WHY BHARATI MALL MOTOR INSURANCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            Key Advantages & Add-on Covers
          </h2>
          <p className="text-sm text-gray-500">
            Tailored motor protection packages crafted for absolute peace of mind on every journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/80 hover:border-[#2076C7]/30 hover:shadow-md transition-all space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#2076C7] flex items-center justify-center">
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
