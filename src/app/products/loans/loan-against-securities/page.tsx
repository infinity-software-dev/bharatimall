"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { LASHero } from "./components/LASHero";
import { LASProductGrid } from "./components/LASProductGrid";
import { LASCalculator } from "./components/LASCalculator";
import LASInsights from "./components/LASInsights";
import CibilScoreBanner from "../personal-loan/components/CibilScoreBanner";
import { LASProcessSteps } from "./components/LASProcessSteps";
import { LASBenefitsSection } from "./components/LASBenefitsSection";
import { LASUseCasesSection } from "./components/LASUseCasesSection";
import { LASEligibility } from "./components/LASEligibility";
import { LASEducationalSection } from "./components/LASEducationalSection";
import { LASDocumentsSection } from "./components/LASDocumentsSection";
import { LASFeatures } from "./components/LASFeatures";
import { LASLenderTypes } from "./components/LASLenderTypes";
import { LASComparisonSection } from "./components/LASComparisonSection";
import CTASection from "../business-loan/components/CTASection";
import ScrollToTop from "../personal-loan/components/ScrollToTop";
import FAQSection from "./components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function LoanAgainstSecuritiesPage() {
  const router = useRouter();

  const handleBackHome = () => router.push("/");

  const handleApplyClick = ()=>{
    router.push('/enquiry');
  }

  return (
    <main className="min-h-screen bg-[#FFFFFF] flex flex-col font-sans text-[#292929] scroll-smooth">
      <Header />

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

      <LASHero openLogin={handleApplyClick} />

      <LASProductGrid openLogin={handleApplyClick} />

      <section className="py-14 md:py-20 bg-[#F5F5F3] font-sans border-b border-[#E5E5E0]" id="calculator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
              Calculate Your Loan Amount
            </h2>
            <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
              Estimate your credit line and compare the opportunity cost of borrowing against your portfolio versus selling your assets.
            </p>
          </div>
          <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 border border-[#E5E5E0] shadow-sm">
            <LASCalculator onApplyClick={handleApplyClick} />
          </div>
        </div>
      </section>

      <LASInsights />

      <CibilScoreBanner />

      <LASProcessSteps onApplyClick={handleApplyClick} />

      <LASBenefitsSection />

      <LASUseCasesSection />

      <LASEligibility onApplyClick={handleApplyClick} />

      <LASEducationalSection />

      <LASDocumentsSection onApplyClick={handleApplyClick} />

      <LASFeatures />

      <LASLenderTypes openLogin={handleApplyClick} />

      <LASComparisonSection />

      {/* 15. Regulatory & Facilitator Disclaimer */}
      <div className="bg-[#FFFFFF] py-6 md:py-8 px-4 border-b border-[#E5E5E0]">
        <div className="max-w-4xl mx-auto bg-[#FFF8D6] border border-[#F4C430]/40 rounded-2xl p-5 shadow-xs">
          <p className="text-xs sm:text-sm text-[#292929] text-center leading-relaxed font-medium">
            <strong className="text-[#171717] font-bold">Disclaimer:</strong> Loan Against Securities (LAS) is subject to approved list of scrips/mutual funds, loan-to-value (LTV) limits mandated by RBI/SEBI, and periodic market mark-to-market (MTM) margin requirements.
          </p>
        </div>
      </div>

      <FAQSection onApply={handleApplyClick} />

      <CTASection />

      <ScrollToTop />
      <Footer />
    </main>
  );
}