"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

// Modular Health Insurance Components
import HealthHero from "./components/HealthHero";
import HealthPlansGrid, { HealthPlan, HEALTH_PLANS_DATA } from "./components/HealthPlansGrid";
import HealthInsuranceCalculator from "./components/HealthInsuranceCalculator";
import HealthComparisonTable from "./components/HealthComparisonTable";
import MarketInsights from "./components/MarketInsights";
import CoverageDetails from "./components/CoverageDetails";
import DocumentationGuide from "./components/DocumentationGuide";
import ProcessAndEligibility from "./components/ProcessAndEligibility";
import HealthFaq from "./components/HealthFaq";
import HealthCtaBanner from "./components/HealthCtaBanner";

export default function HealthInsurancePage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#171717] flex flex-col selection:bg-[#F4C430] selection:text-[#171717]">
      <Header />

      <main className="flex-1">
        {/* Top Breadcrumb Navigation */}
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
        <HealthHero />

        {/* 2. Health Plans Grid */}
        <HealthPlansGrid />

        {/* 3. Premium Calculator Section */}
        <section id="calculator-section" className="py-14 lg:py-20 bg-gradient-to-b from-white via-sky-50/30 to-[#FFF8D6] border-t border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
                Premium Calculator
              </h2>
              <p className="text-sm sm:text-base text-[#6B6B6B]">
                Get instant premium estimates for you and your family
              </p>
            </div>

            <div className="pt-4">
              <HealthInsuranceCalculator />
            </div>
          </div>
        </section>

        {/* 4. Side-by-Side Comparison */}
        <HealthComparisonTable />

        {/* 5. Market Insights & Claim Transparency */}
        <MarketInsights />

        {/* 6. Coverage Details & Types */}
        <CoverageDetails />

        {/* 7. Documentation Simplified */}
        <DocumentationGuide />

        {/* 8. Process & Eligibility Criteria */}
        <ProcessAndEligibility />

        {/* 9. Frequently Asked Questions */}
        <HealthFaq />

        {/* 10. Bottom Call to Action Banner */}
        <HealthCtaBanner />
      </main>

      <Footer />
    </div>
  );
}
