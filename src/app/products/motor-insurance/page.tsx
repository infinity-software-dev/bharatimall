"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

// Modular Motor Insurance Components
import MotorHero from "./components/MotorHero";
import MotorProductCategories from "./components/MotorProductCategories";
import MotorPriceComparison, { MotorPlan, MOTOR_PLANS_DATA } from "./components/MotorPriceComparison";
import MotorInsuranceCalculator from "./components/MotorInsuranceCalculator";
import MotorKeyFeatures from "./components/MotorKeyFeatures";
import MotorCoverageComparison from "./components/MotorCoverageComparison";
import MotorClaimsProcess from "./components/MotorClaimsProcess";
import MotorFaq from "./components/MotorFaq";
import MotorCtaBanner from "./components/MotorCtaBanner";
export default function MotorInsurancePage() {
  const [selectedVehicleType, setSelectedVehicleType] = useState<"Two Wheeler" | "Car" | "Commercial" | "Misc D">("Two Wheeler");

  const handleHeroGetQuote = () => {
    // Left empty since modal is removed
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#171717] flex flex-col selection:bg-[#F4C430] selection:text-[#171717]">
      <Header />

      <main className="flex-1">
        {/* Top Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] text-xs font-semibold text-[#6B6B6B] hover:text-[#171717] hover:border-[#F4C430] shadow-xs transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </div>

        {/* 1. Hero Section */}
        <MotorHero />

        {/* 2. Our Motor Insurance Products (4 Cards) */}
        <MotorProductCategories
          onSelectCategory={(cat) => setSelectedVehicleType(cat)}
        />

        {/* 3. Compare Insurance Starting Prices (Sidebar + 11 Insurer Cards) */}
        <MotorPriceComparison
          selectedVehicleType={selectedVehicleType}
          onSelectVehicleType={(type) => setSelectedVehicleType(type)}
        />

        {/* 4. Estimated Premium Calculator */}
        <MotorInsuranceCalculator
          vehicleType={selectedVehicleType === "Car" ? "car" : selectedVehicleType === "Commercial" ? "commercial" : "bike"}
        />

        {/* 5. Key Advantages & Add-on Covers */}
        <MotorKeyFeatures />

        {/* 6. Compare Policy Coverages Table */}
        <MotorCoverageComparison />

        {/* 7. How Cashless Claims Work */}
        <MotorClaimsProcess />

        {/* 8. Frequently Asked Questions */}
        <MotorFaq />

        {/* 9. Bottom Call to Action Banner */}
        <MotorCtaBanner />
      </main>

      <Footer />
    </div>
  );
}
