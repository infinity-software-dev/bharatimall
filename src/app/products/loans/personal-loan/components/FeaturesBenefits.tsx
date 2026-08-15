"use client";

import React from "react";
import { ShieldCheck, Banknote, Zap, History, FileText, Gift } from "lucide-react";

export default function FeaturesBenefits() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Approvals",
      desc: "Experience minimal wait times. Advanced automated systems assess your application swiftly, giving you rapid decisions.",
    },
    {
      icon: FileText,
      title: "100% Paperless Journey",
      desc: "No physical branch visits or document printing required. Complete your loan application online with digital verification.",
    },
    {
      icon: Banknote,
      title: "Zero Hidden Charges",
      desc: "Complete transparency at every step. From processing fees to interest rates, every charge is communicated clearly upfront.",
    },
    {
      icon: History,
      title: "Flexible Repayment",
      desc: "Choose a repayment tenure that comfortably fits your monthly budget, ranging from 12 months up to 84 months.",
    },
    {
      icon: ShieldCheck,
      title: "Bank-Grade Security",
      desc: "Your data is secured using AES-256 encryption. We utilize strictly compliant infrastructure adhering to industry standards.",
    },
    {
      icon: Gift,
      title: "Pre-Approved Offers",
      desc: "Eligible applicants and returning clients can unlock pre-approved limits, fast-track disbursals, and preferential interest rates.",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-[#FFFFFF] font-sans border-b border-[#E5E5E0]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs uppercase tracking-wider mb-4 shadow-xs">
            Why Choose Bharti
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#171717] tracking-tight">
            Built for Speed and Convenience
          </h2>
          <p className="text-sm md:text-lg text-[#6B6B6B] leading-relaxed">
            A modernized financing experience designed to eliminate complex paperwork and long waiting cycles with complete transparency.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E0] shadow-xs hover:shadow-md hover:border-[#F4C430] transition-all duration-200 flex flex-col items-center text-center h-full"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FFF8D6] rounded-xl flex items-center justify-center text-[#171717] mb-5 group-hover:scale-105 transition-transform">
                <item.icon size={26} className="text-[#171717]" strokeWidth={1.75} />
              </div>

              <h3 className="text-lg font-bold mb-2.5 text-[#171717]">
                {item.title}
              </h3>

              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}