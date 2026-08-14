"use client";

import React from "react";
import {
  Search,
  ClipboardList,
  Stethoscope,
  Zap,
  Check,
  Users,
  Heart,
  Activity
} from "lucide-react";

export default function ProcessAndEligibility() {
  const scrollToPlans = () => {
    document.getElementById("plans-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  const processSteps = [
    {
      icon: Search,
      title: "Choosing Plan",
      desc: "Select based on coverage, premium & hospitals.",
      bg: "bg-teal-500"
    },
    {
      icon: ClipboardList,
      title: "Application",
      desc: "Fill proposal form & declare medical history.",
      bg: "bg-[#2076C7]"
    },
    {
      icon: Stethoscope,
      title: "Medical Check",
      desc: "Required for higher age or specific cases.",
      bg: "bg-sky-500"
    },
    {
      icon: Zap,
      title: "Policy Issuance",
      desc: "Pay premium & receive your policy instantly.",
      bg: "bg-teal-600"
    },
  ];

  const eligibilityChecklist = [
    {
      label: "AGE CRITERIA",
      desc: "Adults: 18-65 years | Children: 90 days to 18 years | Seniors: 60+ (up to 85)"
    },
    {
      label: "FAMILY MEMBERS",
      desc: "Self, Spouse, Children, Parents & Parents-in-law"
    },
    {
      label: "MEDICAL HISTORY",
      desc: "Must disclose pre-existing diseases (Diabetes, BP, etc.)"
    },
    {
      label: "MEDICAL CHECK-UP",
      desc: "Required if age > 45 or high sum insured chosen"
    },
    {
      label: "RESIDENCY",
      desc: "Must be an Indian resident (NRIs covered for treatment in India)"
    },
  ];

  return (
    <section className="py-14 lg:py-20 bg-white border-t border-zinc-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Our Process Section */}
        <div className="space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-3 p-4 rounded-2xl"
              >
                <div className={`w-14 h-14 rounded-2xl ${step.bg} text-white flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">{step.title}</h3>
                <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Criteria & Who Should Consider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t border-gray-100">
          {/* Eligibility Criteria Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-3xl font-extrabold text-[#17859c] tracking-tight">
                Eligibility Criteria
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Simple criteria for complete peace of mind.
              </p>
            </div>

            {/* Check Points */}
            <div className="space-y-3.5">
              {eligibilityChecklist.map((crit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-50 text-[#2076C7] border border-sky-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">{crit.label}</h4>
                    <p className="text-xs text-gray-600 mt-0.5">{crit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Criteria Table */}
            <div className="pt-2">
              <div className="bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-gray-50/80 text-gray-400 font-bold uppercase tracking-wider border-b border-gray-200/80 text-[10px]">
                      <th className="py-3 px-5">CRITERIA</th>
                      <th className="py-3 px-5">REQUIREMENT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700 font-medium">
                    <tr>
                      <td className="py-3 px-5 font-bold text-gray-900">Minimum age</td>
                      <td className="py-3 px-5 text-gray-600">18 years</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 font-bold text-gray-900">Child coverage</td>
                      <td className="py-3 px-5 text-gray-600">90 days onwards</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 font-bold text-gray-900">Medical tests</td>
                      <td className="py-3 px-5 text-gray-600">Age / health based</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 font-bold text-gray-900">Pre-existing illness</td>
                      <td className="py-3 px-5 text-gray-600">Allowed with waiting period</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 font-bold text-gray-900">Residency</td>
                      <td className="py-3 px-5 text-gray-600">Indian resident</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Who Should Consider Right Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-xl space-y-5">
              <h4 className="text-sm font-extrabold text-zinc-900 uppercase tracking-wider">
                WHO SHOULD CONSIDER?
              </h4>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-gray-50/80 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#2076C7] flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900">Working Professionals</h5>
                    <p className="text-xs text-gray-500 mt-0.5">Protect savings from sudden medical expenses.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-gray-50/80 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900">Families</h5>
                    <p className="text-xs text-gray-500 mt-0.5">Covers spouse and children under one plan.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-gray-50/80 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#2076C7] flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900">Senior Citizens</h5>
                    <p className="text-xs text-gray-500 mt-0.5">Higher risk of illness with age requires special care.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-gray-50/80 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900">Young Adults</h5>
                    <p className="text-xs text-gray-500 mt-0.5">Lower premiums by starting early and completing waiting periods.</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={scrollToPlans}
                className="w-full h-12 rounded-xl text-white font-bold text-xs tracking-wider uppercase shadow-md hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                style={{ background: "linear-gradient(to right, #2076C7, #1CADA3)" }}
              >
                VIEW PLANS
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-center max-w-4xl mx-auto shadow-2xs">
          <p className="text-xs text-amber-900 font-medium leading-relaxed">
            <strong>Disclaimer:</strong> Insurance plans, coverage limits, and policy terms are subject to change based on the insurer&apos;s internal policies and your eligibility profile.
          </p>
        </div>
      </div>
    </section>
  );
}
