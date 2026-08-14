"use client";
import React from "react";
import {
  Home,
  Building,
  Building2,
  ShieldCheck,
  Factory,
  TrendingUp,
  Lock,
  ShieldAlert,
  ArrowRight,
  Check
} from "lucide-react";

export interface FirePlanItem {
  id: string;
  categoryTag: string;
  title: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  assetRange: string;
  startingPrice: string;
  period: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  features: string[];
}

export const FIRE_PLANS_DATA: FirePlanItem[] = [
  {
    id: "griha-raksha",
    categoryTag: "Home Protection",
    title: "Bharat Griha Raksha",
    badge: "POPULAR",
    badgeColor: "bg-blue-600 text-white",
    description: "Essential fire insurance for residential buildings and home contents (furniture, electronics, appliances) against 14 special perils.",
    assetRange: "Up to ₹5 Crore",
    startingPrice: "₹999",
    period: "per year",
    icon: Home,
    iconBg: "bg-blue-50",
    iconColor: "text-[#2076C7]",
    features: [
      "Structure + Household contents cover",
      "Automatic 20% in-built contents protection",
      "Alternate accommodation rent up to ₹1 Lakh",
      "Natural perils (Earthquake & Flood) included"
    ]
  },
  {
    id: "laghu-udyam",
    categoryTag: "SME Protection",
    title: "Bharat Laghu Udyam",
    badge: "TRENDING",
    badgeColor: "bg-teal-600 text-white",
    description: "Designed for small and medium enterprises with total asset values between ₹5 Crores and ₹50 Crores across plant, sheds, and stocks.",
    assetRange: "₹5 Cr to ₹50 Cr",
    startingPrice: "₹4,500",
    period: "per year",
    icon: Building,
    iconBg: "bg-teal-50",
    iconColor: "text-[#1CADA3]",
    features: [
      "In-built flood, storm & cyclone cover (STFI)",
      "Stock floating allowance up to 10%",
      "Automatic additions cover for new machinery",
      "Fast surveyor assignment within 24 hours"
    ]
  },
  {
    id: "sookshma-udyam",
    categoryTag: "Micro Enterprise",
    title: "Bharat Sookshma Udyam",
    badge: "EASY ONBOARDING",
    badgeColor: "bg-emerald-600 text-white",
    description: "Specialized cover for micro-units, retail shops, and small workshops with total asset value up to ₹5 Crores. Simplified IRDAI terms.",
    assetRange: "Up to ₹5 Crore",
    startingPrice: "₹1,850",
    period: "per year",
    icon: Building2,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    features: [
      "100% Reinstatement value basis",
      "Architects & surveyor fees reimbursed",
      "Debris removal costs up to 2% included",
      "Zero complex documentation needed"
    ]
  },
  {
    id: "standard-fire",
    categoryTag: "SFSP Cover",
    title: "Standard Fire Policy",
    description: "Comprehensive protection against fire and 11 other special perils including explosion, aircraft damage, riots, and burst pipes.",
    assetRange: "Customizable",
    startingPrice: "₹2,200",
    period: "per year",
    icon: ShieldCheck,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    features: [
      "Covers 12 standard Fire & Special Perils",
      "Machinery, stock & building protection",
      "Customizable deductibles and excess",
      "Add-on riders for terrorism & transit"
    ]
  },
  {
    id: "industrial-all-risk",
    categoryTag: "Large Industrial",
    title: "Industrial All Risk (IAR)",
    badge: "LARGE CAP",
    badgeColor: "bg-indigo-600 text-white",
    description: "All-in-one comprehensive policy for large manufacturing industries with sum insured > ₹50 Crores covering fire, machinery & FLOP.",
    assetRange: "₹50 Cr+ Assets",
    startingPrice: "₹18,500",
    period: "per year",
    icon: Factory,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    features: [
      "Combines Fire + Machinery Breakdown",
      "Fire Loss of Profit (FLOP) included",
      "Comprehensive accidental damage shield",
      "Dedicated corporate risk engineering team"
    ]
  },
  {
    id: "consequential-loss",
    categoryTag: "Business Continuity",
    title: "Consequential Loss (FLOP)",
    description: "Protects ongoing business profits, standing charges (rent, staff salaries, bank EMIs) during post-fire factory reconstruction.",
    assetRange: "Turnover Based",
    startingPrice: "₹3,400",
    period: "per year",
    icon: TrendingUp,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    features: [
      "Covers lost net profits during downtime",
      "Fixed standing charges & wages reimbursement",
      "Increased cost of working compensation",
      "Auditor fees for claim proof compilation"
    ]
  },
  {
    id: "burglary-theft",
    categoryTag: "Comprehensive Add-On",
    title: "Burglary & Theft Extension",
    description: "Complements your fire policy by protecting finished stocks, raw inventory, and cash against forceful break-ins and theft.",
    assetRange: "Customizable",
    startingPrice: "₹1,200",
    period: "per year",
    icon: Lock,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    features: [
      "Covers theft following violent break-in",
      "First Loss policy structure available",
      "Safe & cash counter robbery cover",
      "Damage to property during burglary attempt"
    ]
  },
  {
    id: "terrorism-perils",
    categoryTag: "Catastrophic Shield",
    title: "Terrorism & Sabotage Cover",
    description: "Extended protection backed by the Indian Market Terrorism Risk Pool covering acts of sabotage, violent civil commotion, and terror.",
    assetRange: "Full Sum Insured",
    startingPrice: "₹850",
    period: "per year",
    icon: ShieldAlert,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    features: [
      "Indian Market Terrorism Pool endorsed",
      "Covers physical damage & resulting FLOP",
      "Nationwide coverage across all risk zones",
      "Seamless integration into base fire policy"
    ]
  }
];

interface FireProductsGridProps {
  onSelectPlan: (plan: FirePlanItem) => void;
}

export default function FireProductsGrid({ onSelectPlan }: FireProductsGridProps) {
  return (
    <section className="py-14 md:py-20 bg-white border-b border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stat Alert Banner (Matching Image 4) */}
        <div className="mb-14 max-w-4xl mx-auto bg-gradient-to-r from-blue-50/80 via-teal-50/50 to-sky-50/80 border border-blue-100 rounded-3xl p-5 sm:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#2076C7] shadow-sm border border-blue-100 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6 text-[#2076C7]" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">
                70% of businesses fail to reopen after a major fire without insurance.
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 font-medium">
                Don't let your hard-earned progress turn into ashes. Secure your legacy today.
              </p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2076C7] text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <span>Market Products • IRDAI Standardized</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight uppercase">
            Fire Insurance <span className="bg-gradient-to-r from-[#2076C7] to-[#1CADA3] bg-clip-text text-transparent">Products</span>
          </h2>

          <p className="mt-4 text-zinc-600 font-medium text-sm sm:text-base md:text-lg leading-relaxed">
            Standardized and custom-built fire insurance plans for SMEs, large industries, and residential properties.
          </p>
        </div>

        {/* Products Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FIRE_PLANS_DATA.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className="relative bg-white rounded-3xl p-6 border border-zinc-200 hover:border-[#2076C7]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Badge if present */}
                {plan.badge && (
                  <div className="absolute -top-3 right-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm ${plan.badgeColor || "bg-blue-600 text-white"}`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${plan.iconBg} ${plan.iconColor} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                      {plan.categoryTag}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#2076C7] transition-colors mb-2">
                    {plan.title}
                  </h3>

                  <p className="text-xs text-zinc-600 font-medium leading-relaxed mb-5 line-clamp-3">
                    {plan.description}
                  </p>

                  {/* Asset Range & Starting Price */}
                  <div className="bg-zinc-50 rounded-2xl p-3.5 mb-5 border border-zinc-100 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-semibold">Sum Insured:</span>
                      <span className="text-zinc-900 font-bold">{plan.assetRange}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-semibold">Starting at:</span>
                      <span className="text-[#2076C7] font-extrabold">{plan.startingPrice} <span className="text-[10px] text-zinc-400 font-normal">/{plan.period}</span></span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#1CADA3] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  type="button"
                  onClick={() => onSelectPlan(plan)}
                  className="w-full py-3 px-4 rounded-xl border border-zinc-200 bg-white group-hover:bg-gradient-to-r group-hover:from-[#2076C7] group-hover:to-[#1CADA3] group-hover:border-transparent group-hover:text-white text-zinc-800 font-bold text-xs shadow-xs group-hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get Quotation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
