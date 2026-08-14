"use client";

import React from "react";
import { Ambulance, Plane, Globe, Headphones } from "lucide-react";

export default function KeyCoverageHighlights() {
  const highlights = [
    {
      icon: Ambulance,
      title: "Medical Emergency",
      points: [
        "Medical emergency coverage abroad",
        "Emergency medical evacuation",
        "Repatriation of remains",
        "Hospitalization expenses"
      ]
    },
    {
      icon: Plane,
      title: "Trip Assistance",
      points: [
        "Total loss of checked-in baggage",
        "Trip delay or cancellation",
        "Loss of passport or IDs",
        "Emergency travel assistance"
      ]
    },
    {
      icon: Globe,
      title: "Personal Liability",
      points: [
        "Third-party liability abroad",
        "Accidental death & disability",
        "Financial loss protection",
        "Legal assistance expenses"
      ]
    },
    {
      icon: Headphones,
      title: "Global Support",
      points: [
        "Worldwide concierge services",
        "Cashless medical services",
        "Direct claim settlement",
        "Multi-lingual assistance"
      ]
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-white border-t border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            Key Coverage Highlights
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Essential protection for medical emergencies, trip delays, and document loss.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-7 shadow-md hover:shadow-xl hover:border-[#2076C7]/30 transition-all duration-300 space-y-5 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#2076C7] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <ul className="space-y-2 text-xs text-gray-600 font-medium">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold shrink-0 mt-0.5">•</span>
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
