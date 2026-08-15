"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowUp } from "lucide-react";

import Hero from "./components/Hero";
import NPSCalculator from "./components/NPSCalculator";
import AccountTypes from "./components/AccountTypes";
import NPSVatsalya from "./components/NPSVatsalya";
import Features from "./components/Features";
import NPSWithdrawal from "./components/NPSWithdrawal";
import Eligibility from "./components/Eligibility";
import ApplicationProcess from "./components/ApplicationProcess";
import FAQ from "./components/FAQ";
import NPSConsultModal from "./components/NPSConsultModal";

export default function NPSProductPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Start Your NPS Application");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModalWithTitle = (title: string) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#292929] flex flex-col font-sans selection:bg-[#FFF8D6] selection:text-[#171717]">
      <Header />

      <main className="flex-1 relative">
        {/* Top Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 flex items-center gap-2 text-xs">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#E5E5E0] bg-white font-semibold text-[#6B6B6B] hover:text-[#171717] hover:border-[#F4C430] shadow-xs transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Products
          </Link>
          <span className="text-[#6B6B6B]">/</span>
          <span className="font-semibold text-[#171717]">National Pension System (NPS)</span>
        </div>

        {/* 1. Hero Section */}
        <Hero onApply={() => openModalWithTitle("Apply for National Pension System (NPS)")} />

        {/* 2. Interactive NPS Calculator (Zero-Dependency SVG Chart) */}
        <NPSCalculator />

        {/* 3. Account Types Comparison */}
        <AccountTypes />

        {/* 4. NPS Vatsalya (Minor Child Scheme) */}
        <NPSVatsalya onPlan={() => openModalWithTitle("Plan Child's Future with NPS Vatsalya")} />

        {/* 5. Benefits & Features */}
        <Features />

        {/* 6. Withdrawal & Exit Rules */}
        <NPSWithdrawal />

        {/* 7. Eligibility & Documents */}
        <Eligibility />

        {/* 8. Application Process */}
        <ApplicationProcess onApply={() => openModalWithTitle("Start Your NPS Registration")} />

        {/* 9. PFRDA Regulatory & Legal Disclaimer */}
        <div className="bg-white py-6 md:py-8 px-4">
          <div className="max-w-4xl mx-auto bg-[#FFF8D6] border border-[#F4C430]/40 rounded-xl p-6 shadow-xs">
            <p className="text-xs sm:text-sm text-[#292929] text-center leading-relaxed font-medium">
              ⚠️ * Rules are subject to PFRDA guidelines and may change. Please refer to official documentation.
            </p>
          </div>
        </div>

        {/* 10. Frequently Asked Questions */}
        <FAQ />

        {/* 11. Bottom CTA Banner */}
        <section className="bg-[#FFF8D6] border-y border-[#E5E5E0] text-[#171717] py-14 sm:py-18">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-[#171717]">
              Secure Your Golden Years with NPS
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-8 text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed font-normal">
              Start your journey towards a stress-free retirement. Invest in National Pension System today for better returns and maximum tax benefits.
            </p>
            <Link
              href="/enquiry"
              className="inline-block bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            >
              Request a Callback
            </Link>
          </div>
        </section>

        {/* Floating Scroll to Top */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 p-3 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
          </button>
        )}
      </main>

      {/* Consult / Application Modal */}
      <NPSConsultModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      />

      <Footer />
    </div>
  );
}
