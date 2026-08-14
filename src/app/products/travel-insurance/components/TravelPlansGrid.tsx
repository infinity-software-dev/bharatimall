"use client";

import { useState } from "react";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export interface TravelPlan {
  id: string;
  name: string;
  insurer: string;
  badge?: string;
  medicalCoverage: string;
  startingPrice: number;
  category: "Solo" | "Family" | "Student" | "Senior Citizen";
  features: string[];
}

export const TRAVEL_PLANS_DATA: TravelPlan[] = [
  {
    id: "tp-1",
    name: "Tata AIG Travel Guard Plus",
    insurer: "Tata AIG",
    badge: "MOST POPULAR",
    medicalCoverage: "$500,000",
    startingPrice: 549,
    category: "Solo",
    features: [
      "Zero deductible emergency medical treatment",
      "Baggage delay & loss reimbursement up to $1,500",
      "Trip cancellation & flight delay cover"
    ]
  },
  {
    id: "tp-2",
    name: "Care Explore International",
    insurer: "Care Health",
    badge: "SCHENGEN READY",
    medicalCoverage: "$250,000",
    startingPrice: 420,
    category: "Solo",
    features: [
      "100% compliant with Schengen €30,000 visa rules",
      "Automatic policy extension during medical emergency",
      "Emergency cash advance up to $1,000"
    ]
  },
  {
    id: "tp-3",
    name: "HDFC ERGO Travel Shield Family",
    insurer: "HDFC ERGO",
    badge: "BEST FOR FAMILY",
    medicalCoverage: "$1,000,000",
    startingPrice: 1199,
    category: "Family",
    features: [
      "Single sum insured shared across 2 adults + 2 children",
      "Missed flight connection & emergency hotel expenses",
      "Compassionate visit ticket for family member"
    ]
  },
  {
    id: "tp-4",
    name: "Digit Student Overseas Travel",
    insurer: "Digit Insurance",
    badge: "STUDENT SPECIAL",
    medicalCoverage: "$500,000",
    startingPrice: 799,
    category: "Student",
    features: [
      "Study interruption & sponsor protection cover",
      "University fee refund upon medical withdrawal",
      "Laptop and electronic gadget loss coverage"
    ]
  },
  {
    id: "tp-5",
    name: "Bajaj Allianz Senior Travel Elite",
    insurer: "Bajaj Allianz",
    badge: "SENIOR CARE",
    medicalCoverage: "$200,000",
    startingPrice: 1450,
    category: "Senior Citizen",
    features: [
      "No mandatory medical tests up to 85 years",
      "Pre-existing disease life-saving emergency cover",
      "24x7 doctor-on-call global tele-consultation"
    ]
  },
  {
    id: "tp-6",
    name: "Reliance Travel Care Worldwide",
    insurer: "Reliance General",
    badge: "BEST VALUE",
    medicalCoverage: "$100,000",
    startingPrice: 380,
    category: "Solo",
    features: [
      "Instant paperless policy generation in 2 minutes",
      "Passport loss recovery assistance fees",
      "Personal liability cover up to $100,000"
    ]
  }
];

interface TravelPlansGridProps {
  onSelectPlan: (plan: TravelPlan) => void;
}

export default function TravelPlansGrid({ onSelectPlan }: TravelPlansGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPlans = TRAVEL_PLANS_DATA.filter((p) => {
    if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
    return true;
  });

  return (
    <section id="travel-plans" className="py-14 lg:py-20 bg-zinc-50/70 border-t border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            Tailored Travel Insurance Plans
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Compare plans from India&apos;s leading general insurance providers. Instant cashless assistance across 195+ countries.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {["All", "Solo", "Family", "Student", "Senior Citizen"].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#1CADA3] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200/70"
              }`}
            >
              {cat === "All" ? "All Travel Plans" : `${cat} Plans`}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-3xl border border-gray-100 p-6 shadow-md hover:shadow-xl hover:border-[#2076C7]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Badge & Insurer */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-[#2076C7] border border-blue-100 text-[10px] font-bold uppercase tracking-wider">
                    {plan.badge}
                  </span>
                  <span className="text-xs font-bold text-gray-400">
                    {plan.insurer}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2076C7] transition-colors">
                    {plan.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-teal-600 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Medical Cover: {plan.medicalCoverage}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="pt-2 space-y-2 border-t border-gray-100">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block leading-none">
                    STARTING FROM
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-black text-gray-900">
                      ₹{plan.startingPrice}
                    </span>
                    <span className="text-xs text-gray-400">/trip</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectPlan(plan)}
                  className="px-5 py-2.5 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer flex items-center gap-1.5"
                  style={{ background: "linear-gradient(to right, #2076C7, #1CADA3)" }}
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
