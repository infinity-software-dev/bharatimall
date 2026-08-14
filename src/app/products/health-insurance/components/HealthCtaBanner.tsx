"use client";

import React from "react";

interface HealthCtaBannerProps {
  onTalkToExpert: () => void;
}

export default function HealthCtaBanner({ onTalkToExpert }: HealthCtaBannerProps) {
  const scrollToPlans = () => {
    document.getElementById("plans-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="py-16 text-white text-center relative overflow-hidden"
      style={{ background: "linear-gradient(to right, #1CADA3, #2076C7)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Ready to Secure Your Financial Future?
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto font-medium">
          Get personalized advice from our IRDAI-certified insurance experts today. Compare plans and save up to 25% on your annual premiums.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onTalkToExpert}
            className="px-7 py-3.5 rounded-xl bg-white text-[#2076C7] hover:bg-gray-50 font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            Talk to an Expert
          </button>
          <button
            type="button"
            onClick={scrollToPlans}
            className="px-7 py-3.5 rounded-xl bg-black/20 hover:bg-black/30 border border-white/30 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
          >
            Explore All Plans
          </button>
        </div>
      </div>
    </section>
  );
}
