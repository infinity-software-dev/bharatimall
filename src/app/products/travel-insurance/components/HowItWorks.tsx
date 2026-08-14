"use client";

import React from "react";
import { MapPin, Search, FileText, Zap } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: MapPin,
      title: "Enter Details",
      description: "Provide destination, duration, and traveler age."
    },
    {
      icon: Search,
      title: "Compare Plans",
      description: "Choose from top-rated global insurance partners."
    },
    {
      icon: FileText,
      title: "Submit Details",
      description: "Quick digital form with minimal paperwork."
    },
    {
      icon: Zap,
      title: "Instant Policy",
      description: "Get your policy via email within minutes."
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-zinc-50/70 border-t border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Quick and hassle-free coverage in four easy steps.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-7 shadow-md hover:shadow-xl hover:border-[#2076C7]/30 transition-all duration-300 flex flex-col items-center text-center space-y-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#008ba3] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
