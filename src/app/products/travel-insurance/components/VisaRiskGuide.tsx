"use client";

import React, { useState } from "react";
import { Shield, AlertTriangle, Activity, Wallet } from "lucide-react";

export interface DestinationRiskInfo {
  code: string;
  name: string;
  isMandatory: boolean;
  statusTitle: string;
  statusDescription: string;
  commonRisks: string[];
  healthcareCostLevel: "Very High" | "High" | "Moderate";
  recommendedSumInsured: string;
}

export const DESTINATION_RISK_DATA: DestinationRiskInfo[] = [
  {
    code: "EU",
    name: "Schengen Area (Europe)",
    isMandatory: true,
    statusTitle: "Travel Insurance is Mandatory",
    statusDescription: "Mandatory minimum coverage of €30,000 (approx ₹30 Lakhs) for medical emergencies and repatriation.",
    commonRisks: [
      "Petty theft/pickpocketing",
      "Flight delays",
      "Medical emergencies"
    ],
    healthcareCostLevel: "High",
    recommendedSumInsured: "$250,000 - $500,000"
  },
  {
    code: "US",
    name: "USA",
    isMandatory: false,
    statusTitle: "Travel Insurance is Optional (Recommended)",
    statusDescription: "Not mandatory for B1/B2 tourist visas, but highly recommended due to extremely high medical costs.",
    commonRisks: [
      "Extremely high healthcare costs",
      "Flight cancellations",
      "Loss of baggage"
    ],
    healthcareCostLevel: "Very High",
    recommendedSumInsured: "$500,000+"
  },
  {
    code: "TH",
    name: "Thailand",
    isMandatory: false,
    statusTitle: "Travel Insurance is Optional (Recommended)",
    statusDescription: "Currently not mandatory for tourists, though rules can fluctuate. Strongly advised.",
    commonRisks: [
      "Food poisoning",
      "Scooter accidents",
      "Dengue fever"
    ],
    healthcareCostLevel: "Moderate",
    recommendedSumInsured: "$50,000 - $100,000"
  },
  {
    code: "AE",
    name: "UAE (Dubai)",
    isMandatory: true,
    statusTitle: "Travel Insurance is Mandatory",
    statusDescription: "Required by UAE immigration authorities to cover emergency medical treatments & COVID hospitalization.",
    commonRisks: [
      "Dehydration & heat exhaustion",
      "Expensive private clinic fees",
      "Baggage delay during transit"
    ],
    healthcareCostLevel: "High",
    recommendedSumInsured: "$100,000 - $250,000"
  },
  {
    code: "ID",
    name: "Indonesia (Bali)",
    isMandatory: false,
    statusTitle: "Travel Insurance is Optional (Recommended)",
    statusDescription: "Recommended to cover emergency medical evacuation from island resorts to specialized hospitals.",
    commonRisks: [
      "Bali belly (stomach infections)",
      "Motorcycle accidents",
      "Surf & adventure sports injuries"
    ],
    healthcareCostLevel: "Moderate",
    recommendedSumInsured: "$50,000 - $150,000"
  },
  {
    code: "SA",
    name: "Saudi Arabia (Riyadh)",
    isMandatory: true,
    statusTitle: "Travel Insurance is Mandatory",
    statusDescription: "Mandatory requirement linked with the eVisa and Umrah / Hajj tourist permits.",
    commonRisks: [
      "Crowd surges during pilgrimage",
      "Respiratory infections",
      "Flight rescheduled during peak seasons"
    ],
    healthcareCostLevel: "Moderate",
    recommendedSumInsured: "$100,000"
  },
  {
    code: "UK",
    name: "United Kingdom",
    isMandatory: false,
    statusTitle: "Travel Insurance is Optional (Recommended)",
    statusDescription: "NHS does not cover free treatment for standard short-stay overseas tourists.",
    commonRisks: [
      "Lost luggage at hub airports",
      "Trip interruptions",
      "High private doctor fees"
    ],
    healthcareCostLevel: "High",
    recommendedSumInsured: "$250,000+"
  },
  {
    code: "CA",
    name: "Canada",
    isMandatory: false,
    statusTitle: "Travel Insurance is Optional (Recommended)",
    statusDescription: "Provincial healthcare systems do not cover visitors without insurance.",
    commonRisks: [
      "Severe cold weather ailments",
      "High hospital room rents",
      "Winter sports incidents"
    ],
    healthcareCostLevel: "Very High",
    recommendedSumInsured: "$300,000 - $500,000"
  }
];

export default function VisaRiskGuide() {
  const [selectedCode, setSelectedCode] = useState("EU");

  const selectedDestination = DESTINATION_RISK_DATA.find((d) => d.code === selectedCode) || DESTINATION_RISK_DATA[0];

  const getCostBadgeClass = (level: "Very High" | "High" | "Moderate") => {
    if (level === "Very High") return "bg-rose-50 text-rose-600 border-rose-200";
    if (level === "High") return "bg-teal-50 text-teal-600 border-teal-200";
    return "bg-sky-50 text-sky-600 border-sky-200";
  };

  return (
    <section className="py-14 lg:py-20 bg-white border-t border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            Visa & Destination Risk Guide
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Check if travel insurance is mandatory for your visa and discover recommended coverage based on local risks.
          </p>
        </div>

        {/* 2-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Destination Selector */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-gray-100 shadow-md space-y-3">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block px-2">
              Select Destination
            </span>

            <div className="space-y-1.5 max-h-[420px] overflow-y-auto pr-1">
              {DESTINATION_RISK_DATA.map((item) => {
                const isSelected = item.code === selectedCode;
                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => setSelectedCode(item.code)}
                    className={`w-full px-4 py-3 rounded-2xl flex items-center gap-3 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#1CADA3] text-white shadow-md"
                        : "bg-gray-50/70 hover:bg-gray-100 text-gray-700 border border-gray-100"
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs uppercase shrink-0 ${
                      isSelected ? "bg-white/20 text-white" : "bg-gray-200/80 text-gray-700"
                    }`}>
                      {item.code}
                    </span>
                    <span className="truncate">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Risk Details Cards */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Mandatory/Optional Banner */}
            <div className="p-6 rounded-3xl bg-sky-50/70 border border-sky-100/90 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white text-[#2076C7] flex items-center justify-center shrink-0 shadow-xs border border-sky-100">
                <Shield className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-[#1660A7]">
                  {selectedDestination.statusTitle}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {selectedDestination.statusDescription}
                </p>
              </div>
            </div>

            {/* Bottom 2 Insight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Common Risks Card */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md space-y-4">
                <div className="flex items-center gap-2.5 text-xs font-bold text-gray-800 uppercase tracking-wider">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <span>Common Risks</span>
                </div>

                <ul className="space-y-2.5 pt-1 text-xs text-gray-600 font-medium">
                  {selectedDestination.commonRisks.map((risk, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Healthcare Costs & Sum Insured Card */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md space-y-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-800 uppercase tracking-wider">
                      <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                        <Activity className="w-4 h-4" />
                      </div>
                      <span>Healthcare Costs</span>
                    </div>

                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border uppercase tracking-wider ${getCostBadgeClass(selectedDestination.healthcareCostLevel)}`}>
                      {selectedDestination.healthcareCostLevel}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                    <Wallet className="w-3.5 h-3.5 text-[#2076C7]" />
                    <span>Recommended Sum Insured</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-gray-900">
                    {selectedDestination.recommendedSumInsured}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
