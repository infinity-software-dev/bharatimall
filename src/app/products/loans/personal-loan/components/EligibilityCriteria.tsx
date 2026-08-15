"use client";

import React from "react";
import { CheckCircle2, Briefcase, Calendar, CreditCard, ArrowRight } from "lucide-react";

interface EligibilityCriteriaProps {
    openForm?: () => void;
}

export default function EligibilityCriteria({ openForm }: EligibilityCriteriaProps) {
    const criteria = [
        {
            icon: Briefcase,
            title: "Employment Status",
            desc: "Salaried employee with a reputed public, private, or multinational company.",
        },
        {
            icon: Calendar,
            title: "Age Requirements",
            desc: "Between 21 and 60 years of age at the time of application.",
        },
        {
            icon: CreditCard,
            title: "Monthly Income",
            desc: "Minimum net take-home monthly income of ₹15,000.",
        },
        {
            icon: CheckCircle2,
            title: "CIBIL Score",
            desc: "A healthy credit score of 700 or above for swift processing.",
        },
    ];

    const documents = [
        "PAN Card / Identity Proof",
        "3 Months Salary Slips",
        "6 Months Bank Statement",
        "Passport Size Photograph",
        "Current Address Proof",
        "Company ID Card",
    ];

    return (
        <section className="py-14 md:py-20 bg-[#F5F5F3] font-sans border-b border-[#E5E5E0]">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
                    <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs uppercase tracking-wider mb-4 shadow-xs">
                        Simple Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
                        Easy Eligibility & Documents
                    </h2>
                    <p className="text-sm md:text-base text-[#6B6B6B] leading-relaxed">
                        We prioritize minimal documentation and clear eligibility criteria so you get access to funds without unnecessary delays.
                    </p>
                </div>

                {/* Content Columns */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-12 text-left">

                    {/* Eligibility Criteria */}
                    <div className="lg:w-1/2">
                        <h3 className="text-lg md:text-xl font-bold text-[#171717] mb-5 pb-3 border-b border-[#E5E5E0]">
                            Eligibility Criteria
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {criteria.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#FFFFFF] p-5 rounded-xl border border-[#E5E5E0] shadow-xs flex flex-col items-start text-left"
                                >
                                    <div className="w-10 h-10 bg-[#FFF8D6] rounded-lg flex items-center justify-center text-[#171717] mb-3.5 shrink-0">
                                        <item.icon size={18} className="text-[#171717]" />
                                    </div>
                                    <h4 className="font-bold text-[#171717] mb-1.5 text-sm md:text-base">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs md:text-sm text-[#6B6B6B] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Documents Required */}
                    <div className="lg:w-1/2">
                        <h3 className="text-lg md:text-xl font-bold text-[#171717] mb-5 pb-3 border-b border-[#E5E5E0]">
                            Documents Required
                        </h3>
                        <div className="bg-[#FFFFFF] rounded-xl p-6 md:p-7 border border-[#E5E5E0] shadow-xs">
                            <p className="text-sm text-[#6B6B6B] mb-5 font-medium">
                                Keep these handy for digital verification:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5 mb-6">
                                {documents.map((doc, idx) => (
                                    <div key={idx} className="flex items-center text-left">
                                        <CheckCircle2 className="text-[#198754] mr-2.5 shrink-0" size={17} />
                                        <span className="text-[#292929] font-medium text-xs md:text-sm">
                                            {doc}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Note */}
                            <div className="p-4 bg-[#FFF8D6] border border-[#F4C430]/40 rounded-lg text-xs md:text-sm text-[#292929] flex items-start">
                                <span className="font-bold mr-2 text-[#171717] shrink-0">Note:</span>
                                <span>Existing banking customers may require minimal or zero extra physical paperwork.</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={() => openForm?.()}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-base md:text-lg cursor-pointer"
                    >
                        <span>Check Your Eligibility Now</span>
                        <ArrowRight size={20} />
                    </button>
                </div>

            </div>
        </section>
    );
}