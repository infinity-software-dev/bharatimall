"use client";

import React from "react";

interface TravelCtaBannerProps {
  onGetQuoteClick: () => void;
}

export default function TravelCtaBanner({ onGetQuoteClick }: TravelCtaBannerProps) {
  const scrollToPlans = () => {
    document.getElementById("travel-plans")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="py-16 text-white text-center relative overflow-hidden"
      style={{ background: "linear-gradient(to right, #1CADA3, #2076C7)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Ready for Your Next Global Adventure?
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto font-medium">
          Get visa-compliant international travel insurance in under 2 minutes. Instant cashless claims across 195+ countries.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onGetQuoteClick}
            className="px-7 py-3.5 rounded-xl bg-white text-[#2076C7] hover:bg-gray-50 font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            Get Instant Quote
          </button>
          <button
            type="button"
            onClick={scrollToPlans}
            className="px-7 py-3.5 rounded-xl bg-black/20 hover:bg-black/30 border border-white/30 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
          >
            Compare All Plans
          </button>
        </div>
      </div>
    </section>
  );
}
