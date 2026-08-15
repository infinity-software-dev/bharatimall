"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Percent,
  Calendar,
  FileText,
  Clock,
  UserCheck,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Paperless Approval",
    description: "Experience a fully digital application journey with swift electronic verification and zero physical paperwork.",
    icon: Zap,
  },
  {
    title: "Competitive Interest Rates",
    description: "Benefit from industry-leading commercial rates starting at 9.50% p.a. tailored to your company's credit strength.",
    icon: Percent,
  },
  {
    title: "Flexible Repayment Tenures",
    description: "Repayment periods ranging from 12 to 60 months structured to comfortably match your seasonal cash flow cycles.",
    icon: Calendar,
  },
  {
    title: "Collateral-Free Capital",
    description: "Access unsecured funding up to ₹50 Lakhs without pledging commercial property, equipment, or personal assets.",
    icon: FileText,
  },
  {
    title: "Rapid Account Disbursal",
    description: "Direct credit to your current account within 24 to 48 hours following document validation and sanctioning.",
    icon: Clock,
  },
  {
    title: "Dedicated Relationship Desk",
    description: "Receive end-to-end guidance from dedicated lending specialists throughout loan processing and post-disbursal.",
    icon: UserCheck,
  },
];

export default function BusinessLoanFeatures() {
  return (
    <section className="py-14 md:py-20 bg-[#FFFFFF] relative overflow-hidden font-sans border-b border-[#E5E5E0]" id="business-features">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs"
          >
            <ShieldCheck size={14} className="text-[#171717]" />
            Key Advantages
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#171717] tracking-tight"
          >
            Why Choose Our Business Loans?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed"
          >
            We provide more than just capital—we deliver the liquidity and flexibility you need to execute business expansion plans with confidence.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group h-full"
              >
                <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E0] shadow-xs hover:shadow-md hover:border-[#F4C430] transition-all duration-200 flex flex-col items-center text-center h-full">
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF8D6] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                    <Icon size={26} className="text-[#171717]" strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2.5 text-[#171717]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}