"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowUp, ShieldCheck } from 'lucide-react';

import FDHero from './components/FDHero';
import FDCalculator from './components/FDCalculator';
import BankList from './components/BankList';
import Features from './components/Features';
import FAQ from './components/FAQ';
import FDStepProcess from './components/FDStepProcess';
import FDEligibility from './components/FDEligibility';
import SectorComparisonMatrix from './components/BankComparisonChart';
import BankVsNBFC from './components/BankVsNBFC';
import FDConsultModal from './components/FDConsultModal';

export default function FixedDepositPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Start Your Fixed Deposit Application");
  const [selectedBank, setSelectedBank] = useState("Best Rate FD");
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

  const openModalWithBank = (bankName: string = "Best Rate FD (Up to 9.10%)") => {
    setSelectedBank(bankName);
    setModalTitle(`Apply for ${bankName} Fixed Deposit`);
    setIsModalOpen(true);
  };

  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator');
    if (calculator) calculator.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#292929] flex flex-col font-sans selection:bg-[#F4C430]/30 selection:text-[#171717]">
      <Header />

      <main className="flex-1 relative">
        {/* Top Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#E5E5E0] bg-white text-xs font-semibold text-[#6B6B6B] hover:text-[#171717] hover:border-[#F4C430] shadow-xs transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </div>

        {/* 1. Hero Section */}
        <FDHero
          onApply={() => openModalWithBank("High-Yield Fixed Deposit")}
          scrollToCalculator={scrollToCalculator}
        />

        {/* 2. Bank List Section - Compare FD Rates */}
        <section id="compare" className="pt-12 pb-12 bg-white border-b border-[#E5E5E0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <BankList onApplyBank={(bankName) => openModalWithBank(bankName)} />
          </div>
        </section>

        {/* 3. Comparison & Calculator Section */}
        <section className="pt-12 pb-4 relative z-20 scroll-mt-20 bg-[#F5F5F3] border-b border-[#E5E5E0]">
          <div className="max-w-6xl mx-auto px-4">
            <div id="calculator" className="grid grid-cols-1 gap-12 mb-16 scroll-mt-24">
              <FDCalculator />
            </div>
            <div className="mb-4">
              <SectorComparisonMatrix />
            </div>
          </div>
        </section>

        {/* 4. Bank vs NBFC Comparison */}
        <div className="bg-white border-b border-[#E5E5E0]">
          <BankVsNBFC />
        </div>

        {/* 5. Features Section - Why Choose Us */}
        <div id="about" className="bg-[#F5F5F3] border-b border-[#E5E5E0]">
          <Features />
        </div>

        {/* 6. Eligibility & Documents */}
        <FDEligibility />

        {/* 7. Process Section */}
        <div className="bg-[#F5F5F3] border-b border-[#E5E5E0]">
          <FDStepProcess onApplyClick={() => openModalWithBank("Fixed Deposit Application")} />
        </div>

        {/* 8. Disclaimer Section */}
        <section className="bg-white px-4 pt-12 pb-8">
          <div className="max-w-4xl mx-auto bg-[#FFF8D6] border border-[#F4C430]/40 rounded-2xl p-5 sm:p-6 shadow-xs flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 text-[#F4C430] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#292929] leading-relaxed font-normal">
              <strong className="text-[#171717] font-bold">Disclaimer:</strong> Fixed Deposit interest rates are subject to change based on bank policies and RBI guidelines. Deposits with scheduled banks are insured under DICGC up to ₹5 Lakhs. Please verify latest rates and terms before investing.
            </p>
          </div>
        </section>

        {/* 9. FAQs */}
        <FAQ />

        {/* 10. Bottom CTA Banner */}
        <section className="bg-[#FFF8D6] text-[#171717] py-14 sm:py-18 border-t border-[#E5E5E0]">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-[#171717] tracking-tight">
              Maximize Your Savings with High-Yield Fixed Deposits
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-8 text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed font-normal">
              Small savings today, bigger security tomorrow. Your money deserves safe and steady growth. Create your Fixed Deposit now and earn up to 9.10% guaranteed returns.
            </p>
            <button
              type="button"
              onClick={() => openModalWithBank("Expert Consultation for Fixed Deposits")}
              className="bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
            >
              Get a Free Consultation
            </button>
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

      {/* Consult & Booking Modal */}
      <FDConsultModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        defaultBank={selectedBank}
      />

      <Footer />
    </div>
  );
}
