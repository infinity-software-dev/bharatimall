"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Shield,
  Users,
  Banknote,
  PieChart,
  Search,
  ArrowLeft,
  ArrowUp,
  Plus,
  Minus,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  IndianRupee,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import GoalSelector from "./components/GoalSelector";
import Funds from "./components/Funds";
import VPRoboBanner from "./components/VPRoboBanner";
import FinancialGoalPlanner from "./components/FinancialGoalPlanner";
import MutualFundComparison from "./components/MutualFundComparison";
import SIPCalculator from "./components/SIPCalculator";
import SIPVsFDVsPPFComparison from "./components/SIPVsFDVsPPFComparison";
import FundTypeComparison from "./components/FundTypeComparison";
import IndustryInsights from "./components/IndustryInsights";

export default function MutualFundsLandingPage() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const benefits = [
    {
      title: "Expert Management",
      desc: "Your money is actively managed by seasoned fund managers with rigorous research.",
      icon: Users,
    },
    {
      title: "Diversification",
      desc: "Reduce risk by investing across various sectors and companies with 40-70 top-performing equities.",
      icon: PieChart,
    },
    {
      title: "Liquidity",
      desc: "Withdraw your money easily whenever you need it directly into your linked bank account.",
      icon: Banknote,
    },
    {
      title: "Transparency",
      desc: "Complete visibility into where your money is invested with daily NAV and monthly fact sheets.",
      icon: Search,
    },
  ];

  const faqs = [
    {
      q: "What is a mutual fund, and how does it work?",
      a: "A mutual fund pools money from multiple investors to invest in a diversified basket of stocks, bonds, or money market instruments. It is managed by professional fund managers to achieve specific financial goals, benefiting from rupee cost averaging and power of compounding.",
    },
    {
      q: "What makes your fund's philosophy different?",
      a: "Our philosophy focuses on disciplined asset allocation, rigorous research, active risk management, and long-term compounding rather than chasing short-term market momentum.",
    },
    {
      q: "How do you manage risk beyond volatility?",
      a: "We manage risk through multi-sector diversification, thorough fundamental analysis of companies, strict liquidity screening, and periodic portfolio rebalancing aligned with market cycles.",
    },
    {
      q: "Is my money safe and easily accessible?",
      a: "Yes. Mutual funds in India are strictly regulated by SEBI and AMFI. Your investments are held in segregated folios with SEBI-registered Asset Management Companies (AMCs) and registrars (CAMS/KFintech). Open-ended funds offer seamless redemption directly to your bank in T+1 to T+2 days.",
    },
    {
      q: "What is the minimum investment amount?",
      a: "You can start investing with as little as ₹500/month through a Systematic Investment Plan (SIP). Lumpsum investments typically start at ₹1,000 to ₹5,000.",
    },
    {
      q: "How are Mutual Fund gains taxed in India?",
      a: "For Equity Funds: Long-Term Capital Gains (held >1 year) above ₹1.25 Lakh per financial year are taxed at 12.5%. Short-Term Capital Gains (held <1 year) are taxed at 20%. For Debt Funds: Gains are added to your income and taxed as per your individual tax slab.",
    },
    {
      q: "Can I pause or stop my SIP at any time?",
      a: "Yes! SIPs are 100% flexible. You can pause, increase, decrease, or completely stop your SIP anytime without any penalty or lock-in fee.",
    },
    {
      q: "How does ELSS help in saving Income Tax?",
      a: "Equity Linked Savings Scheme (ELSS) qualifies for tax deductions up to ₹1.5 Lakh under Section 80C of the Income Tax Act, saving up to ₹46,800/year in taxes. It has the shortest lock-in period (3 years) among all 80C options.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#292929] flex flex-col font-sans selection:bg-[#FFF8D6] selection:text-[#171717] relative w-full overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* Navigation Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 flex items-center gap-2 text-xs">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[#E5E5E0] bg-white font-semibold text-[#6B6B6B] hover:text-[#171717] hover:border-[#F4C430] shadow-xs transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#F4C430]" />
            Back to Products
          </Link>
          <span className="text-[#6B6B6B]">/</span>
          <span className="font-semibold text-[#171717]">Mutual Funds</span>
        </div>

        {/* 1. HERO SECTION */}
        <section className="relative w-full overflow-hidden pt-4 sm:pt-6 pb-14 sm:pb-20 bg-[#FFFDF5] border-b border-[#E5E5E0]">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

              {/* Left Hero Text */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#FFF8D6] border border-[#F4C430]/40 text-[#171717] shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#F4C430] animate-pulse inline-block" />
                  AMFI Registered Mutual Fund Distributor (ARN-347839)
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#171717]">
                  Invest Smarter with <br className="hidden sm:inline" />
                  <span className="text-[#E91E63]">Mutual Funds</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-[#6B6B6B] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Start your journey towards financial freedom with our curated selection of top-performing funds and expert guidance.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full">
                  <Link
                    href="/enquiry"
                    className="w-full sm:w-auto text-[#171717] bg-[#F4C430] hover:bg-[#FFD21F] px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-center flex items-center justify-center"
                  >
                    Start Investing
                  </Link>
                  <a
                    href="#marketplace"
                    className="w-full sm:w-auto bg-white px-8 py-4 rounded-xl font-bold text-base border-2 border-[#E5E5E0] text-[#171717] hover:bg-[#FFF8D6] hover:border-[#E91E63] transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md text-center"
                  >
                    Explore Funds
                  </a>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-xs sm:text-sm text-[#6B6B6B] font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#198754]" />
                    Paperless &amp; Secure
                  </div>
                </div>
              </div>

              {/* Right Hero Metrics Preview Card (Clean, No Image) */}
              <div className="w-full lg:w-5/12 max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="/images/mutual-funds-hero.jpg"
                  alt="Mutual Funds"
                  className="w-full h-[400px] object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* 2. GOAL SELECTOR SECTION */}
        <section id="goals" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GoalSelector
              selectedGoal={selectedGoal}
              setSelectedGoal={setSelectedGoal}
              onExploreFunds={(goalId: string) => setSelectedGoal(goalId)}
            />
          </div>
        </section>

        {/* 3. MUTUAL FUND MARKETPLACE */}
        <section id="marketplace" className="bg-white border-y border-[#E5E5E0]">
          <Funds
            selectedGoal={selectedGoal}
          />
        </section>

        {/* 4. AI VP ROBO BANNER */}
        <section className="bg-white py-4">
          <VPRoboBanner />
        </section>

        {/* 5. FINANCIAL GOAL PLANNER */}
        <section className="py-12 bg-[#F5F5F3] border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FinancialGoalPlanner />
          </div>
        </section>

        {/* 6. MULTI-FUND COMPARISON TOOL */}
        <section className="bg-white border-b border-[#E5E5E0]">
          <MutualFundComparison />
        </section>

        {/* 7. SIP VS FD VS PPF COMPARISON */}
        <section className="py-12 bg-[#F5F5F3] border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SIPVsFDVsPPFComparison />
          </div>
        </section>

        {/* 8. INDUSTRY INSIGHTS & STATS */}
        <section className="bg-white border-b border-[#E5E5E0]">
          <IndustryInsights />
        </section>

        {/* 9. SIP CALCULATOR SECTION */}
        <section className="py-12 bg-[#F5F5F3] border-b border-[#E5E5E0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SIPCalculator />
          </div>
        </section>

        {/* 10. STRATEGY COMPARISON TABLE */}
        <section className="bg-white border-b border-[#E5E5E0]">
          <FundTypeComparison />
        </section>

        {/* 11. WHY CHOOSE US */}
        <section className="py-16 bg-white border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
                Why Choose <span className="text-[#E91E63]">Us</span>
              </h2>
              <div className="w-20 h-1 mx-auto rounded-full mb-4 bg-[#E91E63]" />
              <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base font-normal">
                We combine human advisory expertise with cutting-edge analytical tools to build goal-oriented wealth portfolios.
              </p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 md:p-8 rounded-3xl border border-[#E5E5E0] hover:border-[#E91E63] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-left group shadow-xs"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF8D6] border border-[#F4C430]/30 flex items-center justify-center mb-5 group-hover:bg-[#E91E63] group-hover:text-white transition">
                    <benefit.icon className="w-6 h-6 text-[#171717] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-[#171717] group-hover:text-[#E91E63] transition-colors mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed font-normal">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. REGULATORY DISCLAIMER & AMFI CARD */}
        <section className="py-10 bg-white">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <div className="bg-[#FFF8D6] border border-[#F4C430]/40 rounded-2xl p-5 shadow-xs">
              <p className="text-xs sm:text-sm text-[#292929] text-center leading-relaxed font-medium">
                <strong className="text-[#171717]">Disclaimer:</strong> Mutual fund schemes are subject to market risk. Please read all scheme-related documents carefully before investing. Past performance is not an indicator of future returns.
              </p>
            </div>
            <div className="bg-[#FFFDF5] border border-[#E5E5E0] rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-xs">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-[#E5E5E0] text-[#171717] shadow-2xs">
                <Shield className="w-5 h-5 text-[#E91E63]" />
              </div>
              <div className="text-xs text-[#6B6B6B]">
                <p className="font-bold text-[#171717] mb-0.5">
                  AMFI registered Mutual Funds distributor — Infinity Arthvishva Mutual Fund Distributor LLP
                </p>
                <p>
                  LLPIN ACP-0126 • ARN-347839 • GST Number: 27AALFI4941B1ZH
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 13. FAQ SECTION */}
        <section className="py-16 bg-[#F5F5F3] border-t border-[#E5E5E0]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                Frequently Asked <span className="text-[#E91E63]">Questions</span>
              </h2>
              <div className="w-20 h-1 mx-auto rounded-full mb-4 bg-[#E91E63]" />
              <p className="text-[#6B6B6B] text-base font-normal">
                Everything you need to know before starting your mutual fund investments.
              </p>
            </div>
            <div className="space-y-3.5">
              {(showAllFaqs ? faqs : faqs.slice(0, 5)).map((faq, idx) => (
                <div
                  key={idx}
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${expandedIdx === idx ? 'border-[#E91E63] bg-white shadow-md' : 'border-[#E5E5E0] bg-white hover:border-[#E91E63]/60'}`}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                    className={`w-full px-5 py-4 text-left flex justify-between items-center gap-3 transition-colors cursor-pointer ${expandedIdx === idx ? 'bg-[#FFF8D6]/40' : 'bg-white hover:bg-[#FFFDF5]'}`}
                  >
                    <span className={`font-bold text-sm sm:text-base ${expandedIdx === idx ? 'text-[#E91E63]' : 'text-[#292929]'}`}>
                      {faq.q}
                    </span>
                    <div className={`p-1 rounded-full border shrink-0 ${expandedIdx === idx ? 'bg-[#E91E63] border-[#E91E63] text-white' : 'bg-white border-[#E5E5E0] text-[#6B6B6B]'}`}>
                      {expandedIdx === idx ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  {expandedIdx === idx && (
                    <div className="px-5 py-4 bg-white text-[#292929] text-xs sm:text-sm leading-relaxed border-t border-[#E5E5E0] font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {faqs.length > 5 && (
              <div className="text-center mt-8">
                <button
                  type="button"
                  onClick={() => setShowAllFaqs(!showAllFaqs)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#E5E5E0] text-[#171717] font-bold text-xs hover:bg-[#FFF8D6] hover:border-[#E91E63] transition-colors cursor-pointer shadow-xs"
                >
                  {showAllFaqs ? "View Less FAQs" : "View More FAQs"}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 14. BOTTOM CTA BANNER */}
        <section className="bg-gradient-to-r from-[#171717] via-[#2A2A2A] to-[#171717] text-white py-14 sm:py-18 border-t border-[#E91E63]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E91E63]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-white">
              Ready to Secure Your <span className="text-[#E91E63]">Financial Future?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed font-normal">
              Don&apos;t wait to achieve your dreams. Whether it is your home, growing your assets, or protecting your family, we are here to guide you. Get started on your financial success today.
            </p>
            <Link
              href="/enquiry"
              className="inline-block bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer text-center"
            >
              Get a Consultation
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

      <Footer />
    </div>
  );
}