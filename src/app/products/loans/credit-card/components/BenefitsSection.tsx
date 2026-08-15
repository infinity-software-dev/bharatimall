"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
    Gift,
    Plane,
    ShieldCheck,
    Lock,
    CreditCard,
    Clock,
    Building2,
    ShoppingBag,
    Briefcase,
    Globe,
    Smartphone,
    ChevronLeft,
    ChevronRight,
    Sparkles,
} from "lucide-react";

const benefits = [
    {
        icon: Gift,
        title: "Generous Reward Points",
        desc: "Earn accelerated reward points on every swipe. Redeem instantly for flights, hotel bookings, or direct statement credit.",
    },
    {
        icon: Plane,
        title: "Global Lounge Access",
        desc: "Travel in comfort with complimentary access to 1,000+ luxury airport and railway lounges worldwide.",
    },
    {
        icon: ShieldCheck,
        title: "Zero Lost Card Liability",
        desc: "100% financial protection against unauthorized transactions immediately upon reporting a lost or stolen card.",
    },
    {
        icon: Lock,
        title: "Advanced Security & 2FA",
        desc: "Secure EMV chip technology and two-factor authentication safeguards every online and offline transaction.",
    },
    {
        icon: CreditCard,
        title: "Instant Liquidity Buffer",
        desc: "Manage sudden cash flow gaps smoothly by leveraging your pre-approved credit limit with ease.",
    },
    {
        icon: Clock,
        title: "Interest-Free Credit Window",
        desc: "Enjoy up to 55 days of interest-free credit depending on your billing cycle and prompt repayment habits.",
    },
    {
        icon: Building2,
        title: "Emergency Cash Advance",
        desc: "Withdraw emergency cash from ATMs worldwide against your credit card line when cash is indispensable.",
    },
    {
        icon: ShoppingBag,
        title: "Exclusive Dining Discounts",
        desc: "Save up to 20% on your restaurant bills at 4,000+ partner dining outlets across India.",
    },
    {
        icon: Briefcase,
        title: "Complimentary Insurance Covers",
        desc: "Enjoy built-in travel insurance, air accident cover, and purchase protection on premium variants.",
    },
    {
        icon: Globe,
        title: "Zero Forex Markup Options",
        desc: "Save significantly on international travel and online foreign currency spends with zero markup cards.",
    },
    {
        icon: Smartphone,
        title: "UPI on Credit Card",
        desc: "Link your RuPay credit card to any UPI app to pay merchants directly from your credit limit.",
    },
];

export default function BenefitsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const scrollAmount = clientWidth * 0.8;
            const targetScroll =
                direction === "left"
                    ? scrollLeft - scrollAmount
                    : scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: targetScroll,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            className="py-14 md:py-20 bg-[#FFFFFF] relative overflow-hidden font-sans border-b border-[#E5E5E0]"
            id="benefits"
        >
            <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <Sparkles size={14} className="text-[#171717]" />
                        Lifestyle & Privileges
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        Features & Benefits of Our Credit Cards
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        Experience a seamless financial journey with rewards and security designed for every lifestyle.
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative group/carousel">

                    {/* Left Arrow */}
                    <button
                        type="button"
                        onClick={() => scroll("left")}
                        aria-label="Scroll Left"
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-20 w-11 h-11 rounded-full bg-[#FFF8D6] border border-[#F4C430] text-[#171717] flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-200 shadow-md hover:scale-105 cursor-pointer md:flex hidden"
                    >
                        <ChevronLeft size={20} strokeWidth={2.5} />
                    </button>

                    {/* Right Arrow */}
                    <button
                        type="button"
                        onClick={() => scroll("right")}
                        aria-label="Scroll Right"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-20 w-11 h-11 rounded-full bg-[#FFF8D6] border border-[#F4C430] text-[#171717] flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-200 shadow-md hover:scale-105 cursor-pointer md:flex hidden"
                    >
                        <ChevronRight size={20} strokeWidth={2.5} />
                    </button>

                    {/* Scrollable Benefits List */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 px-2"
                    >
                        {benefits.map((b, i) => {
                            const Icon = b.icon;
                            return (
                                <motion.div
                                    key={b.title}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: i * 0.04 }}
                                    className="flex-none w-[280px] sm:w-[310px] snap-center bg-[#FFFDF5] p-7 rounded-3xl border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group"
                                >
                                    <div className="w-14 h-14 bg-[#FFF8D6] border border-[#F4C430]/30 rounded-2xl flex items-center justify-center text-[#171717] mb-5 shadow-xs group-hover:scale-105 transition-transform duration-200">
                                        <Icon size={26} strokeWidth={2} />
                                    </div>

                                    <h3 className="text-lg font-bold text-[#171717] mb-2.5 leading-snug">
                                        {b.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                                        {b.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}