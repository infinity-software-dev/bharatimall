"use client";

import React from "react";
import {
  Building2,
  FlaskConical,
  Pill,
  Ambulance,
  FileText,
  Brain,
  User,
  Users,
  ShieldCheck,
  HeartHandshake,
  Activity
} from "lucide-react";

export default function CoverageDetails() {
  const coverageItems = [
    { icon: Building2, title: "Hospitalization (Room, ICU, Surgery)" },
    { icon: FlaskConical, title: "Diagnostic Tests (Blood, Scans)" },
    { icon: Pill, title: "Medicines & Pharmacy" },
    { icon: Ambulance, title: "Emergency Ambulance" },
    { icon: FileText, title: "Pre & Post Hospitalization" },
    { icon: Brain, title: "Mental Health Care" },
  ];

  const typesOfInsurance = [
    {
      icon: User,
      title: "Individual Health Insurance",
      desc: "Covers one person with dedicated sum insured."
    },
    {
      icon: Users,
      title: "Family Floater Plan",
      desc: "Covers the whole family under one sum insured."
    },
    {
      icon: ShieldCheck,
      title: "Group Health Insurance",
      desc: "Provided by employers for employees."
    },
    {
      icon: HeartHandshake,
      title: "Senior Citizen Plans",
      desc: "Tailored for people above 60 years."
    },
    {
      icon: Activity,
      title: "Critical Illness Plans",
      desc: "Covers major diseases like cancer, heart attack."
    },
  ];

  return (
    <section className="py-14 lg:py-20 bg-white border-t border-zinc-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Coverage Details Left */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold text-[#17859c] tracking-tight">
                Coverage Details
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Comprehensive protection for your most valuable asset—your health.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {coverageItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-gray-100 bg-white shadow-xs hover:border-[#2076C7]/30 hover:shadow-md transition-all flex items-center gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#2076C7] flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-gray-800 leading-snug">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Types of Health Insurance Right Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xl space-y-5">
              <h3 className="text-xl font-extrabold text-zinc-900 tracking-tight">
                Types of Health Insurance
              </h3>

              <div className="space-y-4">
                {typesOfInsurance.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-2 rounded-xl hover:bg-gray-50/70 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#2076C7] flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
