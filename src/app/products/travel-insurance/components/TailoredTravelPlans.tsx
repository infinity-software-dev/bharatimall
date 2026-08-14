"use client";

import React from "react";
import { Shield, Plane, GraduationCap, Users, Check } from "lucide-react";

export interface TailoredPlan {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  pricePeriod: string;
  features: string[];
}

export const TAILORED_PLANS_DATA: TailoredPlan[] = [
  {
    id: "single-trip",
    icon: Shield,
    iconBg: "bg-teal-50 text-[#1CADA3]",
    title: "Single Trip",
    subtitle: "One Trip, Full Coverage",
    description: "Perfect for one-off vacations or business trips. Coverage for up to 180 days.",
    price: "₹399",
    pricePeriod: "/per trip",
    features: [
      "Medical up to ₹2 Cr",
      "Cancellation 100%",
      "Baggage up to ₹50k",
      "24/7 Support"
    ]
  },
  {
    id: "multi-trip",
    icon: Plane,
    iconBg: "bg-sky-50 text-[#2076C7]",
    badge: "(MOST POPULAR)",
    title: "Multi-Trip Annual",
    subtitle: "Unlimited Trips, One Plan",
    description: "Ideal for frequent travelers. Cover unlimited trips within a year (up to 45 days each).",
    price: "₹2,499",
    pricePeriod: "/per year",
    features: [
      "Medical up to ₹4 Cr",
      "Unlimited Trips",
      "Liability ₹8 Cr",
      "Flight Delay Cover"
    ]
  },
  {
    id: "student-travel",
    icon: GraduationCap,
    iconBg: "bg-teal-50 text-[#1CADA3]",
    title: "Student Travel",
    subtitle: "Study Abroad, Stay Safe",
    description: "Tailored for students. Extended stays up to 2 years with academic activity coverage.",
    price: "₹4,999",
    pricePeriod: "/per year",
    features: [
      "Extended Stays",
      "Tuition Protection",
      "Sponsor Benefit",
      "Mental Health Support"
    ]
  },
  {
    id: "family-floater",
    icon: Users,
    iconBg: "bg-sky-50 text-[#2076C7]",
    title: "Family Floater",
    subtitle: "Protect Your Whole Family",
    description: "One plan for the entire family. Cover spouse and up to 3 dependent children.",
    price: "₹3,799",
    pricePeriod: "/per trip",
    features: [
      "Family Medical ₹6 Cr",
      "Child Benefits",
      "Maternity Emergency",
      "Adventure Sports"
    ]
  }
];

interface TailoredTravelPlansProps {
  onApplyPlan: (plan: TailoredPlan) => void;
}

export default function TailoredTravelPlans({ onApplyPlan }: TailoredTravelPlansProps) {
  return (
    <section id="travel-plans" className="py-14 lg:py-20 bg-zinc-50/70 border-t border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            Tailored Travel Insurance Plans
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Choose the perfect coverage designed for your specific travel needs, whether it&apos;s a quick vacation or a year abroad.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {TAILORED_PLANS_DATA.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-7 shadow-md hover:shadow-xl hover:border-[#2076C7]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${plan.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {plan.badge && (
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-[#2076C7] transition-colors">
                      {plan.title}
                    </h3>
                    <p className="text-[11px] font-bold text-teal-600 uppercase tracking-wider mt-0.5">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed min-h-[48px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">{plan.pricePeriod}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-2 text-xs text-gray-600">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="font-medium leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => onApplyPlan(plan)}
                    className="w-full h-11 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                    style={{ background: "linear-gradient(to right, #2076C7, #1CADA3)" }}
                  >
                    APPLY NOW
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
