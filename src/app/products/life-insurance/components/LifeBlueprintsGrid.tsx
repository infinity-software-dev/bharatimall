"use client";

import React, { useState, useMemo } from "react";
import {
  Shield,
  ShieldCheck,
  Heart,
  Briefcase,
  Gift,
  Sparkles,
  ArrowRight,
  Search,
  CheckCircle2,
  X,
  GraduationCap,
  Star,
  Anchor,
  Zap,
  Award,
  ShieldAlert
} from "lucide-react";

export interface InsuranceBlueprint {
  id: string;
  badge?: string;
  badgeType?: "popular" | "income" | "self-employed" | "rated" | "default";
  title: string;
  insurer: string;
  category: "Term Insurance" | "Guaranteed Savings" | "Child Plan" | "Retirement" | "Savings Plan" | "Combo Plan";
  settlementCsr: string;
  bestFor: string;
  features: string[];
  iconType: "shield" | "gift" | "briefcase" | "heart" | "sparkles" | "star" | "grad" | "anchor" | "zap" | "award";
}

export const BLUEPRINTS_DATA: InsuranceBlueprint[] = [
  {
    id: "bp-1",
    badge: "MOST POPULAR",
    badgeType: "popular",
    title: "Axis Max Life Smart Term Plus",
    insurer: "Axis Max Life",
    category: "Term Insurance",
    settlementCsr: "99.61%",
    bestFor: "Family financial security",
    features: [
      "Up to 6 plan variants to choose from",
      "Whole life coverage option (up to age 100)",
      "100% premium return option available"
    ],
    iconType: "shield"
  },
  {
    id: "bp-2",
    badge: "INCOME PLUS",
    badgeType: "income",
    title: "Bajaj Life ACE",
    insurer: "Bajaj Allianz Life",
    category: "Savings Plan",
    settlementCsr: "98.49%",
    bestFor: "Wealth accumulation & income",
    features: [
      "Up to 35% extra income benefit on regular payout",
      "Long-term income payout for sustained returns",
      "Additional maturity benefits at policy end"
    ],
    iconType: "gift"
  },
  {
    id: "bp-3",
    badge: "SELF-EMPLOYED",
    badgeType: "self-employed",
    title: "Bajaj Life iSecure II",
    insurer: "Bajaj Allianz Life",
    category: "Term Insurance",
    settlementCsr: "98.49%",
    bestFor: "Business owners, self-employed",
    features: [
      "₹1 Crore coverage option available",
      "Surrogate income eligibility for self-employed",
      "Flexible documentation options (ITR / Bank Statement)"
    ],
    iconType: "briefcase"
  },
  {
    id: "bp-4",
    badge: "TOP RATED",
    badgeType: "rated",
    title: "HDFC Life Click 2 Protect Supreme",
    insurer: "HDFC Life",
    category: "Term Insurance",
    settlementCsr: "98.56%",
    bestFor: "Premium elite protection",
    features: [
      "Immediate claim payout option",
      "Special discounted rates for salaried & women",
      "Parent Protect Care option for dependent parents"
    ],
    iconType: "heart"
  },
  {
    id: "bp-5",
    badge: "SMART CHOICE",
    badgeType: "default",
    title: "ICICI Pru iProtect Smart",
    insurer: "ICICI Prudential",
    category: "Term Insurance",
    settlementCsr: "97.82%",
    bestFor: "Milestone-based life cover",
    features: [
      "Instant claim payout option",
      "Increase cover at major life events (marriage, child birth)",
      "Option to skip premium for 1 year in emergencies"
    ],
    iconType: "shield"
  },
  {
    id: "bp-6",
    badge: "PREMIUM RETURN",
    badgeType: "default",
    title: "Tata AIA Sampoorna Raksha Promise",
    insurer: "Tata AIA Life",
    category: "Term Insurance",
    settlementCsr: "98.58%",
    bestFor: "Premium-back term plan",
    features: [
      "₹1 Crore life cover at affordable premiums",
      "Coverage till 85 years of age",
      "Option to defer premium payment for up to 1 year"
    ],
    iconType: "shield"
  },
  {
    id: "bp-7",
    badge: "WEALTH BUILDER",
    badgeType: "rated",
    title: "HDFC Life YoungStar Super Premium",
    insurer: "HDFC Life",
    category: "Child Plan",
    settlementCsr: "98.56%",
    bestFor: "Higher education & future",
    features: [
      "Market-linked returns with professional fund management",
      "Flexible premium payment options",
      "Life cover included throughout the policy"
    ],
    iconType: "star"
  },
  {
    id: "bp-8",
    badge: "CHILD FUTURE",
    badgeType: "default",
    title: "ICICI Pru SmartKid Assure",
    insurer: "ICICI Prudential",
    category: "Child Plan",
    settlementCsr: "97.82%",
    bestFor: "Child education & security",
    features: [
      "Zero premium allocation charges",
      "Wealth creation through market-linked returns",
      "Waiver of premium on death of life assured"
    ],
    iconType: "grad"
  },
  {
    id: "bp-9",
    badge: "RETIREMENT",
    badgeType: "income",
    title: "HDFC Life Systematic Pension",
    insurer: "HDFC Life",
    category: "Retirement",
    settlementCsr: "98.56%",
    bestFor: "Retirement planning & pension",
    features: [
      "Assured vesting benefit at maturity",
      "Multiple policy terms available (5–40 years)",
      "Compound bonus accumulation yearly"
    ],
    iconType: "anchor"
  },
  {
    id: "bp-10",
    badge: "360° COMBO",
    badgeType: "popular",
    title: "Tata AIA Param Raksha Plus 2.0",
    insurer: "Tata AIA Life",
    category: "Combo Plan",
    settlementCsr: "98.58%",
    bestFor: "All-in-one safety & health",
    features: [
      "₹1 Crore life + accidental death cover",
      "Critical illness benefit covering 36+ conditions",
      "Hospital cash benefit for daily expenses"
    ],
    iconType: "zap"
  },
  {
    id: "bp-11",
    badge: "GUARANTEED SAVINGS",
    badgeType: "popular",
    title: "SBI Life Smart Platina Plus",
    insurer: "SBI Life",
    category: "Guaranteed Savings",
    settlementCsr: "97.05%",
    bestFor: "Guaranteed regular income",
    features: [
      "Guaranteed annual payouts during income period",
      "Return of 110% total premiums paid at maturity",
      "Life cover continues throughout the policy term"
    ],
    iconType: "sparkles"
  },
  {
    id: "bp-12",
    badge: "LIFELONG INCOME",
    badgeType: "default",
    title: "HDFC Life Sanchay Plus",
    insurer: "HDFC Life",
    category: "Guaranteed Savings",
    settlementCsr: "98.56%",
    bestFor: "Guaranteed income stream",
    features: [
      "Guaranteed income option up to age 99",
      "Return of total premiums at the end of payout term",
      "Enhanced benefits for higher premium sizes"
    ],
    iconType: "shield"
  }
];

export const CATEGORY_TABS = [
  "All",
  "Term Insurance",
  "Guaranteed Savings",
  "Child Plan",
  "Retirement",
  "Savings Plan",
  "Combo Plan"
];

interface LifeBlueprintsGridProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onSelectBlueprint: (bp: InsuranceBlueprint) => void;
}

export default function LifeBlueprintsGrid({
  selectedCategory,
  onSelectCategory,
  onSelectBlueprint
}: LifeBlueprintsGridProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlueprints = useMemo(() => {
    return BLUEPRINTS_DATA.filter((bp) => {
      if (selectedCategory !== "All" && bp.category !== selectedCategory) {
        return false;
      }
      if (searchTerm.trim() !== "") {
        const query = searchTerm.toLowerCase();
        const matchesInsurer = bp.insurer.toLowerCase().includes(query);
        const matchesTitle = bp.title.toLowerCase().includes(query);
        const matchesCategory = bp.category.toLowerCase().includes(query);
        const matchesBestFor = bp.bestFor.toLowerCase().includes(query);
        if (!matchesInsurer && !matchesTitle && !matchesCategory && !matchesBestFor) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchTerm]);

  const renderIcon = (type: InsuranceBlueprint["iconType"]) => {
    switch (type) {
      case "shield": return <Shield className="w-5 h-5 text-[#2076C7]" />;
      case "gift": return <Gift className="w-5 h-5 text-[#2076C7]" />;
      case "briefcase": return <Briefcase className="w-5 h-5 text-[#2076C7]" />;
      case "heart": return <Heart className="w-5 h-5 text-[#2076C7]" />;
      case "sparkles": return <Sparkles className="w-5 h-5 text-[#2076C7]" />;
      case "star": return <Star className="w-5 h-5 text-[#2076C7]" />;
      case "grad": return <GraduationCap className="w-5 h-5 text-[#2076C7]" />;
      case "anchor": return <Anchor className="w-5 h-5 text-[#2076C7]" />;
      case "zap": return <Zap className="w-5 h-5 text-[#2076C7]" />;
      case "award": return <Award className="w-5 h-5 text-[#2076C7]" />;
      default: return <Shield className="w-5 h-5 text-[#2076C7]" />;
    }
  };

  return (
    <section id="blueprints-section" className="py-12 lg:py-16 bg-white border-t border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#175ea1] tracking-tight">
            Insurance Blueprints
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Research-driven strategies designed to capture value across diverse market cycles.
          </p>

          {/* Verified Count Pill */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-sky-50 border border-sky-200/70 text-[#0f6bb8] text-xs font-bold shadow-2xs">
              <div className="w-5 h-5 rounded-full bg-[#1270b8] text-white flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-semibold leading-none">VERIFIED</span>
                <span className="font-extrabold">{BLUEPRINTS_DATA.length} Live Blueprints</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-4">
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {CATEGORY_TABS.map((tab) => {
              const isSelected = selectedCategory === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => onSelectCategory(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#0e939e] text-white shadow-sm"
                      : "bg-zinc-50 hover:bg-zinc-100 text-zinc-600 border border-zinc-200/80"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Insurer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-zinc-200 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#2076C7] focus:ring-2 focus:ring-[#2076C7]/15 transition-all shadow-2xs"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredBlueprints.length === 0 ? (
          <div className="py-16 text-center space-y-3 bg-zinc-50 rounded-2xl border border-zinc-200/80">
            <ShieldAlert className="w-12 h-12 text-zinc-400 mx-auto" />
            <h3 className="text-base font-bold text-zinc-700">No matching insurance blueprints found</h3>
            <p className="text-xs text-zinc-500">Try changing your category filter or search keywords.</p>
            <button
              type="button"
              onClick={() => {
                onSelectCategory("All");
                setSearchTerm("");
              }}
              className="px-4 py-2 text-xs font-semibold text-[#2076C7] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {filteredBlueprints.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl border border-zinc-200/90 hover:border-[#0e939e]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between p-6"
              >
                <div className="flex flex-col items-center text-center space-y-3 pb-2">
                  {item.badge && (
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-bold uppercase tracking-wider">
                      {item.badge}
                    </div>
                  )}

                  <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {renderIcon(item.iconType)}
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 tracking-tight group-hover:text-[#146ba8] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3 py-3 my-2 bg-zinc-50/80 rounded-xl p-3 border border-zinc-100 text-xs">
                  <div>
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      INSURER
                    </div>
                    <div className="font-semibold text-zinc-800 truncate mt-0.5">
                      {item.insurer}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      CATEGORY
                    </div>
                    <div className="font-semibold text-[#0e939e] truncate mt-0.5">
                      {item.category}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      CLAIM SETTLEMENT
                    </div>
                    <div className="font-semibold text-emerald-600 mt-0.5">
                      {item.settlementCsr}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      BEST FOR
                    </div>
                    <div className="font-semibold text-zinc-700 truncate mt-0.5">
                      {item.bestFor}
                    </div>
                  </div>
                </div>

                <div className="py-3 space-y-2 text-xs text-zinc-600 flex-1">
                  <div className="font-semibold text-[11px] uppercase tracking-wider text-zinc-400">
                    Key Features
                  </div>
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0e939e] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-zinc-100">
                  <button
                    type="button"
                    onClick={() => onSelectBlueprint(item)}
                    className="w-full py-2.5 rounded-xl bg-[#0e939e] hover:bg-[#0c7f88] text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-2xs hover:shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <span>QUOTE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center pt-8">
          <p className="text-[11px] text-zinc-400 italic">
            *Premium rates and benefits are subject to respective insurer terms & conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
