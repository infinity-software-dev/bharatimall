"use client";

import React from "react";

export default function LifeCtaBanner() {
  return (
    <section
      className="py-16 text-[#171717] text-center relative overflow-hidden"
      style={{ background: "#FFF8D6" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Ready to Secure Your Financial Future?
        </h2>
        <p className="text-sm sm:text-base text-[#171717]/90 max-w-xl mx-auto font-medium">
          Get personalized term insurance advice and ₹1 Crore cover starting at ₹490/month from certified advisors.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <div className="px-7 py-3.5 rounded-xl bg-[#F4C430] text-[#171717] font-bold text-xs sm:text-sm shadow-lg select-none">
            Talk to an Expert
          </div>
          <div className="px-7 py-3.5 rounded-xl bg-black/20 border border-[#E5E5E0] text-[#171717] font-bold text-xs sm:text-sm select-none">
            Explore All Blueprints
          </div>
        </div>
      </div>
    </section>
  );
}
