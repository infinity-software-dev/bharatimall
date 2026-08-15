"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import VehicleLoanHero from './components/VehicleLoanHero';
import VehicleLoanFeatures from './components/VehicleLoanFeatures';
import VehicleLoanTypes from './components/VehicleLoanTypes';
import VehicleLoanCalculator from './components/VehicleLoanCalculator';
import VehicleLoanEligibility from './components/VehicleLoanEligibility';
import VehicleLoanProcess from './components/VehicleLoanProcess';
import VehicleLoanPartners from './components/VehicleLoanPartners';
import VehicleLoanFAQ from './components/VehicleLoanFAQ';

export default function VehicleLoanPage() {
  const router = useRouter();
  const handleBackHome = () => router.push("/");

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

      <VehicleLoanHero />
      <VehicleLoanFeatures />
      <VehicleLoanTypes />
      <VehicleLoanCalculator />
      <VehicleLoanEligibility />
      <VehicleLoanProcess />
      <VehicleLoanPartners />
      <VehicleLoanFAQ />
    </main>
  );
}