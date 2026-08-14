"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

// Modular Travel Insurance Components
import TravelHero from "./components/TravelHero";
import VisaRiskGuide from "./components/VisaRiskGuide";
import TailoredTravelPlans, { TailoredPlan, TAILORED_PLANS_DATA } from "./components/TailoredTravelPlans";
import KeyCoverageHighlights from "./components/KeyCoverageHighlights";
import HowItWorks from "./components/HowItWorks";
import WhyChooseTravel from "./components/WhyChooseTravel";
import SimpleClaimsProcess from "./components/SimpleClaimsProcess";
import TravelFaq from "./components/TravelFaq";
import TravelCtaBanner from "./components/TravelCtaBanner";
import TravelQuoteModal from "./components/TravelQuoteModal";
import { TravelPlan } from "./components/TravelPlansGrid";

export default function TravelInsurancePage() {
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<TravelPlan | null>(null);
  const [selectedDestination, setSelectedDestination] = useState("Schengen Area (Europe)");

  const handleHeroGetQuote = (data: { destination: string; region: string; dates: string }) => {
    setSelectedDestination(data.destination);
    setSelectedPlanForModal({
      id: "tailored-single",
      name: "Single Trip Full Protection",
      insurer: "Tata AIG / Care",
      medicalCoverage: "$500,000",
      startingPrice: 399,
      category: "Solo",
      features: [
        "Medical up to ₹2 Cr",
        "Cancellation 100%",
        "Baggage up to ₹50k",
        "24/7 Support"
      ]
    });
  };

  const handleApplyTailoredPlan = (plan: TailoredPlan) => {
    setSelectedPlanForModal({
      id: plan.id,
      name: plan.title,
      insurer: "Top Global Insurer",
      medicalCoverage: plan.features[0] || "$500,000",
      startingPrice: parseInt(plan.price.replace(/[^\d]/g, "")) || 399,
      category: plan.id === "family-floater" ? "Family" : plan.id === "student-travel" ? "Student" : "Solo",
      features: plan.features
    });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-zinc-900 flex flex-col selection:bg-[#2076C7]/20 selection:text-[#2076C7]">
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

        {/* 1. Hero Section with User Travel Image & Quote Strip */}
        <TravelHero onGetQuote={handleHeroGetQuote} />

        {/* 2. Visa & Destination Risk Guide */}
        <VisaRiskGuide />

        {/* 3. Tailored Travel Insurance Plans (4 Cards: Single Trip, Multi-Trip, Student, Family) */}
        <TailoredTravelPlans onApplyPlan={handleApplyTailoredPlan} />

        {/* 4. Key Coverage Highlights (4 Cards: Medical Emergency, Trip Assistance, Personal Liability, Global Support) */}
        <KeyCoverageHighlights />

        {/* 5. How It Works (4 Steps: Enter Details, Compare Plans, Submit Details, Instant Policy) */}
        <HowItWorks />

        {/* 6. Why Choose Our Travel Insurance? (Who Can Apply + Quick Checklist & Protected Everywhere Box) */}
        <WhyChooseTravel />

        {/* 7. Simple 4-Step Claims Process */}
        <SimpleClaimsProcess />

        {/* 8. Frequently Asked Questions */}
        <TravelFaq />

        {/* 9. Bottom Call to Action Banner */}
        <TravelCtaBanner
          onGetQuoteClick={() => {
            if (TAILORED_PLANS_DATA.length > 0) {
              handleApplyTailoredPlan(TAILORED_PLANS_DATA[0]);
            }
          }}
        />
      </main>

      {/* Quote Booking Modal */}
      <TravelQuoteModal
        plan={selectedPlanForModal}
        initialDestination={selectedDestination}
        onClose={() => setSelectedPlanForModal(null)}
      />

      <Footer />
    </div>
  );
}
