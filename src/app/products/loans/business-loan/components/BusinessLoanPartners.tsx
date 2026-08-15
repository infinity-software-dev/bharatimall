"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Landmark,
  Building2,
} from "lucide-react";

interface Partner {
  name: string;
}

const partners: Partner[] = [
  { name: "Aditya Birla Capital Limited" },
  { name: "Ambit Finvest Pvt. Ltd." },
  { name: "ARKA FINCAP LIMITED" },
  { name: "Axis Bank Limited" },
  { name: "Axis Finance Ltd" },
  { name: "Bajaj Finance Limited" },
  { name: "Cholamandalam Investment And Finance Company Limited" },
  { name: "Clix Capital Services Private Limited" },
  { name: "Credit Saison (Kisetu Saison Finance India Pvt Ltd)" },
  { name: "Deutsche Bank AG" },
  { name: "Godrej Capital" },
  { name: "Growth Source Financial Technologies Private Limited (Protium)" },
  { name: "HDFC Bank Limited" },
  { name: "Hero Fincorp Limited" },
  { name: "ICICI Bank Limited" },
  { name: "IDFC First Bank Limited" },
  { name: "Indifi Technologies Pvt Ltd" },
  { name: "IndusInd Bank Limited" },
  { name: "Kotak Mahindra Bank Limited" },
  { name: "Krazybee Services Private Limited" },
  { name: "L&T Finance Limited" },
  { name: "Lendingkart Finance Limited" },
  { name: "Muthoot Finance Ltd" },
  { name: "Piramal Capital & Housing Finance Ltd" },
  { name: "Poonawalla Fincorp Limited" },
  { name: "Shriram Finance Limited" },
  {
    name: "SMFG India Credit Company Limited (Sumitomo Mitsui Financial Group)",
  },
  { name: "Standard Chartered Bank" },
  { name: "Svakarma Finance" },
  { name: "Tata Capital Limited" },
  { name: "U Gro Capital Ltd" },
  { name: "Yes Bank Limited" },
];

interface BusinessLoanPartnersProps {
  openBankModal?: (bankName: string) => void;
}

const itemsPerPage = 8;
const totalPages = Math.ceil(partners.length / itemsPerPage);

export default function BusinessLoanPartners({
  openBankModal,
}: BusinessLoanPartnersProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const next = () => setCurrentPage((p) => (p + 1) % totalPages);
  const prev = () => setCurrentPage((p) => (p - 1 + totalPages) % totalPages);

  const visiblePartners = showAll
    ? partners
    : partners.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className="py-14 md:py-20 bg-[#FFFFFF] relative overflow-hidden font-sans border-b border-[#E5E5E0]" id="business-partners">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
            <Building2 size={14} className="text-[#171717]" />
            Our Network
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
            Our Banking Partners &amp; NBFCs
          </h2>

          <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Collaborating with leading Indian banks and premier financial institutions to secure the most competitive interest rates and customized business credit.
          </p>
        </motion.div>

        {/* Slider Wrapper */}
        <div className="relative">

          {/* Left Arrow */}
          {!showAll && totalPages > 1 && (
            <button
              type="button"
              onClick={prev}
              aria-label="Previous page"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-12 w-11 h-11 bg-[#FFFFFF] hover:bg-[#FFF8D6] text-[#171717] rounded-full hidden md:flex items-center justify-center shadow-md border border-[#E5E5E0] transition-all z-20 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>
          )}

          {/* Right Arrow */}
          {!showAll && totalPages > 1 && (
            <button
              type="button"
              onClick={next}
              aria-label="Next page"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-12 w-11 h-11 bg-[#FFFFFF] hover:bg-[#FFF8D6] text-[#171717] rounded-full hidden md:flex items-center justify-center shadow-md border border-[#E5E5E0] transition-all z-20 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          )}

          {/* Card Container */}
          <div className="bg-[#FFFDF5] rounded-3xl p-6 py-8 md:p-10 shadow-xs border border-[#E5E5E0] relative z-10">

            {/* Toggle View Button */}
            <div className="flex justify-end mb-6">
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 bg-[#FFF8D6] hover:bg-[#FFD21F] text-[#171717] border border-[#F4C430]/40 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
              >
                <span>{showAll ? "Show Paginated" : `View All ${partners.length} Partners`}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                  strokeWidth={2.5}
                />
              </button>
            </div>

            {/* Partners Grid */}
            <div className="px-1 md:px-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={showAll ? "all" : currentPage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {visiblePartners.map((partner) => (
                    <div
                      key={partner.name}
                      onClick={() => openBankModal?.(partner.name)}
                      className="group flex items-center gap-3.5 bg-[#FFFFFF] p-4 rounded-xl border border-[#E5E5E0] shadow-xs hover:shadow-md hover:border-[#F4C430] transition-all duration-200 cursor-pointer"
                    >
                      <div className="w-11 h-11 rounded-lg bg-[#FFF8D6] flex items-center justify-center flex-shrink-0 text-[#171717] group-hover:scale-105 transition-transform">
                        <Landmark className="w-5 h-5 text-[#171717]" strokeWidth={2} />
                      </div>

                      <h3 className="text-xs sm:text-sm font-bold text-[#292929] leading-tight group-hover:text-[#171717] transition-colors line-clamp-2">
                        {partner.name}
                      </h3>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            {!showAll && totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentPage(idx)}
                    aria-label={`Go to page ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                      currentPage === idx
                        ? "bg-[#F4C430] w-6"
                        : "bg-[#E5E5E0] hover:bg-[#6B6B6B] w-2.5"
                    }`}
                  />
                ))}
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}