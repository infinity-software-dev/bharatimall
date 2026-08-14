"use client";

import React, { useState, useMemo } from "react";
import { Search, X, CheckCircle2, ArrowRight, Activity } from "lucide-react";

export interface HealthPlan {
  id: string;
  targetAudience: string;
  title: string;
  insurer: string;
  startingAt: string;
  sumInsured: string;
  cashlessHospitals: string;
  csr: string;
  features: string[];
  category: "Individual" | "Family Floater" | "Senior Citizen" | "Young Adults";
}

export const HEALTH_PLANS_DATA: HealthPlan[] = [
  {
    id: "hp-1",
    targetAudience: "WELLNESS-FOCUSED INDIVIDUALS & FAMILIES",
    title: "CARE HEALTH – CARE SUPREME VALUE",
    insurer: "Care Health Insurance",
    startingAt: "₹430",
    sumInsured: "₹5 Lakh – ₹1 Crore",
    cashlessHospitals: "11,800+",
    csr: "~96%",
    features: [
      "Automatic Recharge",
      "Cumulative Bonus",
      "Pre & Post Hospitalization",
      "Organ Donor Expenses"
    ],
    category: "Family Floater"
  },
  {
    id: "hp-2",
    targetAudience: "BALANCED COVERAGE SEEKERS",
    title: "CARE HEALTH – CARE SUPREME VIKAS",
    insurer: "Care Health Insurance",
    startingAt: "₹399",
    sumInsured: "₹5 Lakh – ₹1 Crore",
    cashlessHospitals: "11,800+",
    csr: "~96%",
    features: [
      "Affordable Premium",
      "Shared Room Coverage",
      "Unlimited Automatic Recharge",
      "Hospitalization & Daycare"
    ],
    category: "Individual"
  },
  {
    id: "hp-3",
    targetAudience: "INDIVIDUAL & FAMILY",
    title: "FUTURE GENERALI – HEALTH ABSOLUTE",
    insurer: "Future Generali",
    startingAt: "₹370",
    sumInsured: "₹3 Lakh – ₹1 Crore",
    cashlessHospitals: "6,000+",
    csr: "~94%",
    features: [
      "Unlimited Restoration",
      "No Claim Bonus",
      "Daycare Coverage",
      "Lifetime Renewability"
    ],
    category: "Individual"
  },
  {
    id: "hp-4",
    targetAudience: "FAMILY FLOATER",
    title: "HDFC ERGO GENERAL INSURANCE",
    insurer: "HDFC ERGO",
    startingAt: "₹499",
    sumInsured: "₹5 Lakh – ₹2 Crore",
    cashlessHospitals: "13,000+",
    csr: "~98%",
    features: [
      "4X Coverage Benefit",
      "No Claim Bonus",
      "Pre & Post Hospitalization",
      "Daycare Procedures"
    ],
    category: "Family Floater"
  },
  {
    id: "hp-5",
    targetAudience: "INDIVIDUAL, FAMILY & SENIOR",
    title: "ICICI LOMBARD GENERAL INSURANCE",
    insurer: "ICICI Lombard",
    startingAt: "₹520",
    sumInsured: "₹5 Lakh – ₹3 Crore",
    cashlessHospitals: "9,000+",
    csr: "~97%",
    features: [
      "No Room Rent Limit",
      "Critical Illness Cover",
      "Wellness Program",
      "Lifetime Renewability"
    ],
    category: "Individual"
  },
  {
    id: "hp-6",
    targetAudience: "INDIVIDUAL & FAMILY",
    title: "MANIPALCIGNA – PROHEALTH PLUS",
    insurer: "ManipalCigna",
    startingAt: "₹390",
    sumInsured: "₹3 Lakh – ₹50 Lakh",
    cashlessHospitals: "8,600+",
    csr: "~95%",
    features: [
      "Restoration Benefit",
      "Wellness Rewards",
      "Worldwide Emergency Cover",
      "No Claim Bonus"
    ],
    category: "Individual"
  },
  {
    id: "hp-7",
    targetAudience: "INDIVIDUALS & FAMILIES",
    title: "MAX BUPA – HEALTH COMPANION",
    insurer: "Niva Bupa / Max Bupa",
    startingAt: "₹380",
    sumInsured: "₹3 Lakh – ₹1 Crore",
    cashlessHospitals: "10,000+",
    csr: "~96%",
    features: [
      "Restore Benefit",
      "No Claim Bonus",
      "AYUSH Coverage",
      "Pre & Post Hospitalization"
    ],
    category: "Individual"
  },
  {
    id: "hp-8",
    targetAudience: "INDIVIDUAL & FAMILY",
    title: "NIVA BUPA HEALTH INSURANCE",
    insurer: "Niva Bupa",
    startingAt: "₹450",
    sumInsured: "₹3 Lakh – ₹1 Crore",
    cashlessHospitals: "10,000+",
    csr: "~96%",
    features: [
      "Unlimited Restoration",
      "Maternity Cover",
      "AYUSH Treatment",
      "Annual Health Checkup"
    ],
    category: "Family Floater"
  },
  {
    id: "hp-9",
    targetAudience: "INDIVIDUAL & FAMILY",
    title: "RELIANCE – HEALTH INFINITY",
    insurer: "Reliance General",
    startingAt: "₹399",
    sumInsured: "₹3 Lakh – ₹1 Crore",
    cashlessHospitals: "8,000+",
    csr: "~95%",
    features: [
      "Unlimited Restoration",
      "OPD Add-on",
      "Wellness Benefits",
      "Pre & Post Hospitalization"
    ],
    category: "Individual"
  },
  {
    id: "hp-10",
    targetAudience: "INDIVIDUAL & FAMILY",
    title: "SBI GENERAL – AROGYA SUPREME",
    insurer: "SBI General",
    startingAt: "₹470",
    sumInsured: "₹5 Lakh – ₹3 Crore",
    cashlessHospitals: "8,000+",
    csr: "~95%",
    features: [
      "Super Restoration",
      "Optional OPD Cover",
      "Critical Illness Add-on",
      "Tax Benefits"
    ],
    category: "Family Floater"
  },
  {
    id: "hp-11",
    targetAudience: "INDIVIDUAL & FAMILY",
    title: "STAR HEALTH – FAMILY HEALTH OPTIMA",
    insurer: "Star Health",
    startingAt: "₹410",
    sumInsured: "₹5 Lakh – ₹25 Lakh",
    cashlessHospitals: "14,000+",
    csr: "~97%",
    features: [
      "Maternity & Newborn Cover",
      "Automatic Restoration Benefit",
      "Pre & Post Hospitalization",
      "AYUSH Treatment Coverage"
    ],
    category: "Family Floater"
  },
  {
    id: "hp-12",
    targetAudience: "SENIOR CITIZENS (60+ YEARS)",
    title: "STAR HEALTH – SENIOR CITIZENS RED CARPET",
    insurer: "Star Health",
    startingAt: "₹520",
    sumInsured: "₹1 Lakh – ₹25 Lakh",
    cashlessHospitals: "14,000+",
    csr: "~97%",
    features: [
      "Designed for Seniors",
      "Pre-Existing Diseases Covered",
      "No Pre-Policy Checkup",
      "Lifelong Renewability"
    ],
    category: "Senior Citizen"
  },
  {
    id: "hp-13",
    targetAudience: "INDIVIDUAL & FAMILY",
    title: "STAR HEALTH – STAR COMPREHENSIVE PLAN",
    insurer: "Star Health",
    startingAt: "₹430",
    sumInsured: "₹5 Lakh – ₹1 Crore",
    cashlessHospitals: "14,000+",
    csr: "~97%",
    features: [
      "Comprehensive Hospitalization",
      "Maternity Benefit (Optional)",
      "Organ Donor Expenses",
      "Pre & Post Hospitalization"
    ],
    category: "Family Floater"
  },
  {
    id: "hp-14",
    targetAudience: "INDIVIDUAL & FAMILY",
    title: "STAR HEALTH – SUPER STAR PLAN",
    insurer: "Star Health",
    startingAt: "₹450",
    sumInsured: "₹5 Lakh – ₹1 Crore",
    cashlessHospitals: "14,000+",
    csr: "~99%",
    features: [
      "No Room Rent Restriction",
      "Super Restoration Benefit",
      "Wellness & Rewards Program",
      "Coverage for Modern Treatments"
    ],
    category: "Individual"
  },
  {
    id: "hp-15",
    targetAudience: "YOUNG INDIVIDUALS (18–40 YEARS)",
    title: "STAR HEALTH – YOUNG STAR INSURANCE",
    insurer: "Star Health",
    startingAt: "₹350",
    sumInsured: "₹5 Lakh – ₹1 Crore",
    cashlessHospitals: "14,000+",
    csr: "~97%",
    features: [
      "Lower Premium for Young Adults",
      "No Claim Bonus Benefit",
      "Automatic Restoration",
      "Daycare Procedures Covered"
    ],
    category: "Young Adults"
  },
  {
    id: "hp-16",
    targetAudience: "INDIVIDUAL & FAMILY",
    title: "TATA AIG – MEDICARE PREMIER",
    insurer: "Tata AIG",
    startingAt: "₹560",
    sumInsured: "₹5 Lakh – ₹3 Crore",
    cashlessHospitals: "12,000+",
    csr: "~98%",
    features: [
      "Worldwide Coverage",
      "High Sum Insured Options",
      "No Room Rent Limit",
      "Annual Health Checkup"
    ],
    category: "Individual"
  }
];

const FILTER_CATEGORIES = [
  "All",
  "Individual",
  "Family Floater",
  "Senior Citizen",
  "Young Adults"
];

interface HealthPlansGridProps {
  onSelectPlan: (plan: HealthPlan) => void;
}

export default function HealthPlansGrid({ onSelectPlan }: HealthPlansGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlans = useMemo(() => {
    return HEALTH_PLANS_DATA.filter((plan) => {
      if (selectedCategory !== "All" && plan.category !== selectedCategory) {
        return false;
      }
      if (searchTerm.trim() !== "") {
        const query = searchTerm.toLowerCase();
        const matchTitle = plan.title.toLowerCase().includes(query);
        const matchInsurer = plan.insurer.toLowerCase().includes(query);
        const matchFeatures = plan.features.some((f) => f.toLowerCase().includes(query));
        const matchTarget = plan.targetAudience.toLowerCase().includes(query);
        if (!matchTitle && !matchInsurer && !matchFeatures && !matchTarget) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section id="plans-grid" className="py-12 lg:py-16 bg-white border-t border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1660A7] tracking-tight">
            Compare Top Health Insurance Plans
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Explore handpicked medical insurance policies from leading insurers with instant cashless settlement.
          </p>
        </div>

        {/* Filter Pills & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {FILTER_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "text-white shadow-sm"
                      : "bg-zinc-50 hover:bg-zinc-100 text-zinc-600 border border-zinc-200/80"
                  }`}
                  style={isSelected ? { background: "linear-gradient(to right, #2076C7, #1CADA3)" } : {}}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search plan or insurer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-zinc-200 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#2076C7] focus:ring-2 focus:ring-[#2076C7]/15 transition-all shadow-2xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Plans Grid */}
        {filteredPlans.length === 0 ? (
          <div className="py-16 text-center space-y-3 bg-zinc-50 rounded-2xl border border-zinc-200/80">
            <Activity className="w-12 h-12 text-zinc-400 mx-auto" />
            <h3 className="text-base font-bold text-zinc-700">No health plans matched your search</h3>
            <p className="text-xs text-zinc-500">Try searching for Care, Star Health, Niva Bupa, or reset filters.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchTerm("");
              }}
              className="px-4 py-2 text-xs font-semibold text-[#2076C7] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {filteredPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-5 sm:p-6 relative group hover:-translate-y-1"
              >
                <div>
                  <p className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center mb-2">
                    {plan.targetAudience}
                  </p>

                  <h3 className="text-sm sm:text-base font-extrabold text-[#1A4E8C] text-center tracking-tight leading-snug min-h-[44px] flex items-center justify-center uppercase">
                    {plan.title}
                  </h3>

                  <div className="text-center my-3">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-0.5">
                      STARTING AT
                    </span>
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                        {plan.startingAt}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">/mo*</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 my-4 bg-gray-50/80 rounded-xl p-2.5 border border-gray-100 text-center">
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">
                        SUM INSURED
                      </p>
                      <p className="text-xs font-bold text-gray-800 mt-0.5 truncate">
                        {plan.sumInsured}
                      </p>
                    </div>
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">
                        CASHLESS
                      </p>
                      <p className="text-xs font-bold text-gray-800 mt-0.5 truncate">
                        {plan.cashlessHospitals}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center mb-4">
                    <span className="px-3 py-0.5 bg-teal-50 text-teal-600 border border-teal-200/60 rounded-full text-[10px] font-bold tracking-wider uppercase">
                      CSR {plan.csr}
                    </span>
                  </div>

                  <div className="space-y-2.5 pt-1 pb-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 mt-0.5 text-teal-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1CADA3]" />
                        </div>
                        <span className="text-xs font-medium text-gray-600 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan)}
                    className="group relative w-full h-11 text-white rounded-xl font-bold text-xs tracking-wider shadow-md hover:brightness-110 active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 overflow-hidden"
                    style={{ background: "linear-gradient(to right, #2076C7, #1CADA3)" }}
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      Consult an Advisor
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan)}
                    className="w-full text-center text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#2076C7] transition-colors py-1 cursor-pointer"
                  >
                    TALK TO ADVISOR
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
