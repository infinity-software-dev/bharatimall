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
    { name: "Bank of India" },
    { name: "Bank of Maharashtra" },
    { name: "Bandhan Bank" },
    { name: "Central Bank of India" },
    { name: "Indian Overseas Bank" },
    { name: "Karnataka Bank" },
    { name: "Union Bank of India" },
    { name: "Saraswat Bank" },
    { name: "Punjab & Sind Bank" },
    { name: "IDBI Bank" },
    { name: "State Bank of India" },
    { name: "HDFC Bank" },
];

const itemsPerPage = 8;
const totalPages = Math.ceil(partners.length / itemsPerPage);

export default function VehicleLoanPartners() {
    const [currentPage, setCurrentPage] = useState(0);
    const [showAll, setShowAll] = useState(true);

    const next = () => setCurrentPage((p) => (p + 1) % totalPages);
    const prev = () => setCurrentPage((p) => (p - 1 + totalPages) % totalPages);

    const visiblePartners = showAll
        ? partners
        : partners.slice(
            currentPage * itemsPerPage,
            (currentPage + 1) * itemsPerPage
        );

    return (
        <section
            className="py-14 md:py-20 bg-[#FFFFFF] relative overflow-hidden font-sans border-b border-[#E5E5E0]"
            id="vehicle-loan-partners-section"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <Building2 size={14} className="text-[#171717]" />
                        Lender Network
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        Our Banking Partners
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        We collaborate with India&apos;s premier financial institutions to secure the most competitive vehicle loan interest rates and loan-to-value ratios.
                    </p>
                </motion.div>

                {/* Content Card Container */}
                <div className="relative">

                    {/* Desktop Navigation Arrows */}
                    {!showAll && totalPages > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={prev}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-11 h-11 bg-[#FFFFFF] hover:bg-[#FFF8D6] border border-[#E5E5E0] hover:border-[#F4C430] text-[#171717] rounded-full hidden md:flex items-center justify-center shadow-md transition-all z-20 cursor-pointer"
                                aria-label="Previous Partners"
                            >
                                <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
                            </button>

                            <button
                                type="button"
                                onClick={next}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-11 h-11 bg-[#FFFFFF] hover:bg-[#FFF8D6] border border-[#E5E5E0] hover:border-[#F4C430] text-[#171717] rounded-full hidden md:flex items-center justify-center shadow-md transition-all z-20 cursor-pointer"
                                aria-label="Next Partners"
                            >
                                <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                        </>
                    )}

                    <div className="bg-[#FFFDF5] rounded-3xl p-6 sm:p-10 border border-[#E5E5E0] shadow-xs">

                        {/* View Mode Switcher */}
                        {partners.length > itemsPerPage && (
                            <div className="flex justify-end mb-6">
                                <button
                                    type="button"
                                    onClick={() => setShowAll(!showAll)}
                                    className="inline-flex items-center gap-2 bg-[#FFFFFF] hover:bg-[#FFF8D6] text-[#171717] border border-[#E5E5E0] hover:border-[#F4C430] px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                                >
                                    <span>
                                        {showAll ? "Paginate View" : `View All ${partners.length} Partners`}
                                    </span>
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""
                                            }`}
                                        strokeWidth={2.5}
                                    />
                                </button>
                            </div>
                        )}

                        {/* Partners Grid */}
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
                                        className="flex items-center gap-3.5 bg-[#FFFFFF] p-4 rounded-2xl border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-xs transition-all duration-200 group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-[#FFF8D6] border border-[#F4C430]/30 flex items-center justify-center text-[#171717] shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                                            <Landmark className="w-5 h-5" strokeWidth={2} />
                                        </div>

                                        <h3 className="text-xs sm:text-sm font-bold text-[#171717] leading-snug">
                                            {partner.name}
                                        </h3>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* Pagination Dots */}
                        {!showAll && totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-8">
                                {Array.from({ length: totalPages }).map((_, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => setCurrentPage(idx)}
                                        aria-label={`Go to page ${idx + 1}`}
                                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentPage === idx
                                                ? "bg-[#F4C430] w-7"
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