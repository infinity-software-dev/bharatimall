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
import MotorQuoteModal, { SelectedMotorQuotePlan } from "./components/MotorQuoteModal";

export default function MotorInsurancePage() {
  const [selectedVehicleType, setSelectedVehicleType] = useState<"Two Wheeler" | "Car" | "Commercial" | "Misc D">("Two Wheeler");
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<SelectedMotorQuotePlan | null>(null);
  const [initialRegNo, setInitialRegNo] = useState("");

  const handleHeroGetQuote = (data: { regNo: string; email: string; phone: string }) => {
    setInitialRegNo(data.regNo);
    if (MOTOR_PLANS_DATA.length > 0) {
      setSelectedPlanForModal({
        name: MOTOR_PLANS_DATA[0].name,
        price: MOTOR_PLANS_DATA[0].twoWheelerCompPrice,
        planType: "Comprehensive",
        features: MOTOR_PLANS_DATA[0].features
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-zinc-900 flex flex-col selection:bg-[#2076C7]/20 selection:text-[#2076C7]">
      <Header />

      <main className="flex-1">
        {/* Top Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-zinc-200 bg-white text-xs font-semibold text-zinc-600 hover:text-[#2076C7] hover:border-[#2076C7]/40 shadow-xs transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </div>

        {/* 1. Hero Section */}
        <MotorHero onGetQuote={handleHeroGetQuote} />

        {/* 2. Our Motor Insurance Products (4 Cards) */}
        <MotorProductCategories
          onSelectCategory={(cat) => setSelectedVehicleType(cat)}
        />

        {/* 3. Compare Insurance Starting Prices (Sidebar + 11 Insurer Cards) */}
        <MotorPriceComparison
          selectedVehicleType={selectedVehicleType}
          onSelectVehicleType={(type) => setSelectedVehicleType(type)}
          onSelectPlanForDetails={(plan) => setSelectedPlanForModal(plan)}
        />

        {/* 4. Estimated Premium Calculator */}
        <MotorInsuranceCalculator
          vehicleType={selectedVehicleType === "Car" ? "car" : selectedVehicleType === "Commercial" ? "commercial" : "bike"}
          onGetDetailedQuote={() => {
            if (MOTOR_PLANS_DATA.length > 0) {
              setSelectedPlanForModal({
                name: MOTOR_PLANS_DATA[0].name,
                price: MOTOR_PLANS_DATA[0].twoWheelerCompPrice,
                planType: "Comprehensive",
                features: MOTOR_PLANS_DATA[0].features
              });
            }
          }}
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
        <MotorCtaBanner
          onGetQuoteClick={() => {
            if (MOTOR_PLANS_DATA.length > 0) {
              setSelectedPlanForModal({
                name: MOTOR_PLANS_DATA[0].name,
                price: MOTOR_PLANS_DATA[0].twoWheelerCompPrice,
                planType: "Comprehensive",
                features: MOTOR_PLANS_DATA[0].features
              });
            }
          }}
        />
      </main>

      {/* Quote Details & Callback Modal */}
      <MotorQuoteModal
        plan={selectedPlanForModal}
        initialRegNo={initialRegNo}
        onClose={() => setSelectedPlanForModal(null)}
      />

      <Footer />
    </div>
  );
}
