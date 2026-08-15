"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAProps {
    onClick?: () => void;
    buttonText?: string;
    title?: string;
    description?: string;
    buttonLink?: string;
}

export default function CTASection({
    onClick,
    buttonText = "Get a Consultation",
    title = "Ready to Secure Your Financial Future?",
    description = "Don't wait to achieve your dreams. Whether it is expanding your business, managing working capital, or investing in infrastructure, we are here to guide you every step of the way.",
    buttonLink = "/#contact",
}: CTAProps) {
    return (
        <section className="bg-[#FFF8D6] font-sans py-16 md:py-20 border-b border-[#E5E5E0]">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#171717] mb-4 tracking-tight">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-[#292929] mb-8 max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>

                {/* CTA Button */}
                <div className="flex justify-center">
                    {onClick ? (
                        <button
                            type="button"
                            onClick={onClick}
                            className="inline-flex items-center gap-2.5 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] px-9 py-4 rounded-xl font-bold text-base md:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                        >
                            <span>{buttonText}</span>
                            <ArrowRight size={20} className="stroke-[2.5]" />
                        </button>
                    ) : (
                        <Link href={buttonLink}>
                            <button
                                type="button"
                                className="inline-flex items-center gap-2.5 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] px-9 py-4 rounded-xl font-bold text-base md:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                            >
                                <span>{buttonText}</span>
                                <ArrowRight size={20} className="stroke-[2.5]" />
                            </button>
                        </Link>
                    )}
                </div>

            </div>
        </section>
    );
}