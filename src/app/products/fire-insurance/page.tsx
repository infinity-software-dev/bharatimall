"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

// Modular Fire Insurance Components
import FireHero from "./components/FireHero";
import FireCalculator from "./components/FireCalculator";
import FireRiskAnalysis from "./components/FireRiskAnalysis";
import FireProductsGrid, { FirePlanItem, FIRE_PLANS_DATA } from "./components/FireProductsGrid";
import FirePropertyTypes from "./components/FirePropertyTypes";
import FirePerilsCoverage from "./components/FirePerilsCoverage";
import WhyChooseFire from "./components/WhyChooseFire";
import FireClaimProcess from "./components/FireClaimProcess";
import FireFaq from "./components/FireFaq";
import FireCtaBanner from "./components/FireCtaBanner";
import FireQuoteModal from "./components/FireQuoteModal";

export default function FireInsurancePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<FirePlanItem | null>(null);

  const handleOpenQuoteModal = (plan?: FirePlanItem | null) => {
    setSelectedPlanForModal(plan || FIRE_PLANS_DATA[0]);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col selection:bg-[#2076C7]/20 selection:text-[#2076C7]">
      <Header />

      <main className="flex-1">
        {/* Top Breadcrumb Navigation */}
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
        <FireHero onApplyNow={() => handleOpenQuoteModal(null)} />

        {/* 2. Precision Premium Estimator Calculator */}
        <FireCalculator openForm={() => handleOpenQuoteModal(null)} />

        {/* 3. Data-Driven Risk Analysis (NCRB 2023 Donut & Causes Bar Chart) */}
        <FireRiskAnalysis />

        {/* 4. Fire Insurance Products Grid & 70% Stat Banner */}
        <FireProductsGrid onSelectPlan={(plan) => handleOpenQuoteModal(plan)} />

        {/* 5. Comprehensive Coverage for Every Property Type */}
        <FirePropertyTypes onSelectProperty={() => handleOpenQuoteModal(null)} />

        {/* 6. What's Covered (12 Perils) & Standard Exclusions */}
        <FirePerilsCoverage />

        {/* 7. Why Choose Fire Insurance (6 Cards & Metric Banner) */}
        <WhyChooseFire />

        {/* 8. Claim Settlement Process & Document Checklist */}
        <FireClaimProcess onTalkToExpert={() => handleOpenQuoteModal(null)} />

        {/* 9. Frequently Asked Questions (Interactive Accordion) */}
        <FireFaq />

        {/* 10. Bottom CTA Banner */}
        <FireCtaBanner onGetStarted={() => handleOpenQuoteModal(null)} />
      </main>

      {/* Quote & Application Modal */}
      <FireQuoteModal
        isOpen={isModalOpen}
        plan={selectedPlanForModal}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPlanForModal(null);
        }}
      />

      <Footer />
    </div>
  );
}
