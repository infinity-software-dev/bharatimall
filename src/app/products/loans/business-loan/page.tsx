"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import BusinessLoanHero from './components/BusinessLoanHero';
import CibilScoreBanner from './components/CibilScoreBanner';
import BusinessLoanFeatures from './components/BusinessLoanFeatures';
import BusinessLoanCalculator from './components/BusinessLoanCalculator';
import BusinessLoanEligibility from './components/BusinessLoanEligibility';
import BusinessLoanStepProcess from './components/BusinessLoanStepProcess';
import BusinessLoanPartners from './components/BusinessLoanPartners';
import BusinessLoanFAQ from './components/BusinessLoanFAQ';
import CTASection from './components/CTASection';

export default function BusinessLoanPage() {
  const router = useRouter();
  const handleBackHome = () => router.push("/");

  const handleApplyClick = () => {
    const element = document.getElementById("calculator-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCalculateClick = () => {
    const element = document.getElementById("calculator-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Fixed Back to Home Navigation */}
      <div className="fixed z-50 top-20 left-4 md:top-24 md:left-8">
        {/* Mobile View */}
        <button
          type="button"
          onClick={handleBackHome}
          aria-label="Back to Home"
          className="md:hidden group flex items-center p-2 text-[#171717]"
        >
          <div className="p-2.5 bg-[#FFFFFF]/90 backdrop-blur-md rounded-full shadow-md border border-[#E5E5E0] active:scale-90 transition-all cursor-pointer">
            <ArrowLeft className="w-4 h-4 text-[#171717]" strokeWidth={2.5} />
          </div>
        </button>

        {/* Desktop View */}
        <button
          type="button"
          onClick={handleBackHome}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#171717] bg-[#FFFFFF]/90 backdrop-blur-md rounded-xl border border-[#E5E5E0] hover:bg-[#FFF8D6] shadow-sm hover:shadow transition-all group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
          <span>Back to Home</span>
        </button>
      </div>

      <BusinessLoanHero
        onApplyClick={handleApplyClick}
        onCalculateClick={handleCalculateClick}
      />
      <CibilScoreBanner />
      <BusinessLoanFeatures />
      <div id="calculator-section">
        <BusinessLoanCalculator />
      </div>
      <BusinessLoanEligibility />
      <BusinessLoanStepProcess />
      <BusinessLoanPartners />
      <BusinessLoanFAQ />
      <CTASection />
    </main>
  );
}