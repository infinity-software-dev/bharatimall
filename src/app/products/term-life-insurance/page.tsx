"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ChevronUp } from "lucide-react";

// Modular Life Insurance Components
import LifeHero from "./components/LifeHero";
import TermCalculator from "./components/TermCalculator";
import VisualizingDelay from "./components/VisualizingDelay";
import LifeBlueprintsGrid, { InsuranceBlueprint, BLUEPRINTS_DATA } from "./components/LifeBlueprintsGrid";
import BlueprintComparison from "./components/BlueprintComparison";
import CategoryGrid from "./components/CategoryGrid";
import SimpleSteps from "./components/SimpleSteps";
import TrustedInsurers from "./components/TrustedInsurers";
import LifeFaq from "./components/LifeFaq";
import LifeCtaBanner from "./components/LifeCtaBanner";

export default function TermLifeInsurancePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const scrollToBlueprints = () => {
    const el = document.getElementById("blueprints-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <LifeHero onApplyNow={scrollToBlueprints} />

        {/* 2. Term Insurance Calculator */}
        <TermCalculator />

        {/* 3. Visualizing Delay */}
        <VisualizingDelay />

        {/* 4. Blueprints Grid */}
        <LifeBlueprintsGrid
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 5. Blueprints Comparison */}
        <BlueprintComparison />

        {/* 6. 10 Category Grid */}
        <CategoryGrid
          onSelectCategory={(category) => {
            setSelectedCategory(category);
            scrollToBlueprints();
          }}
        />

        {/* 7. Simple Steps to Secure Life */}
        <SimpleSteps />

        {/* 8. Supported by India's Trusted Insurers */}
        <TrustedInsurers />

        {/* 9. Frequently Asked Questions */}
        <LifeFaq />

        {/* 10. Bottom Call to Action Banner */}
        <LifeCtaBanner />
      </main>

      {/* Floating Scroll to Top */}
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
        title="Scroll to Top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      <Footer />
    </div>
  );
}
