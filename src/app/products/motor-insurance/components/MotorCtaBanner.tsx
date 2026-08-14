"use client";

import React from "react";

interface MotorCtaBannerProps {
  onGetQuoteClick: () => void;
}

export default function MotorCtaBanner({ onGetQuoteClick }: MotorCtaBannerProps) {
  const scrollToComparison = () => {
    document.getElementById("price-comparison")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="py-16 text-white text-center relative overflow-hidden"
      style={{ background: "linear-gradient(to right, #1CADA3, #2076C7)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Ready to Secure Your Vehicle?
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto font-medium">
          Compare 11+ top motor insurance plans and save up to 85% with zero inspection policy renewals.
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
            onClick={scrollToComparison}
            className="px-7 py-3.5 rounded-xl bg-black/20 hover:bg-black/30 border border-white/30 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
          >
            Compare All Plans
          </button>
        </div>
      </div>
    </section>
  );
}
