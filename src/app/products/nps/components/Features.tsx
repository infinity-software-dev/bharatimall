"use client";

import { motion } from "framer-motion";
import {
    PiggyBank,
    BarChart3,
    Unlock,
    Briefcase,
    Globe,
    HeartHandshake,
} from "lucide-react";
import React from "react";

const features = [
    {
        title: "Tax Benefit",
        description: "Save tax up to ₹50,000 u/s 80CCD(1B) over and above ₹1.5 Lakhs u/s 80C.",
        icon: <PiggyBank />,
    },
    {
        title: "Market Linked Returns",
        description: "Earn market-linked returns over the long term, outperforming traditional savings.",
        icon: <BarChart3 />,
    },
    {
        title: "Flexibility",
        description: "Choice to decide asset allocation and pension fund manager as per your risk appetite.",
        icon: <Unlock />,
    },
    {
        title: "Portability",
        description: "Seamlessly transfer your NPS account across jobs and locations anywhere in India.",
        icon: <Briefcase />,
    },
    {
        title: "Online Access",
        description: "Full online access 24/7 through app and web portal to track and manage your investments.",
        icon: <Globe />,
    },
    {
        title: "Superannuation",
        description: "Ideal retirement planning tool to ensure financial independence post-retirement.",
        icon: <HeartHandshake />,
    },
];

export default function Features() {
    return (
        <section id="features" className="py-12 md:py-16 bg-[#F5F5F3] relative overflow-hidden font-sans border-b border-[#E5E5E0]">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight"
                    >
                        Unmatched Benefits of NPS
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#6B6B6B] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal"
                    >
                        Secure your future with India&apos;s most flexible and tax-efficient retirement saving scheme.
                    </motion.p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="relative p-7 rounded-[2.25rem] bg-white border border-[#E5E5E0] shadow-md hover:shadow-xl hover:border-[#F4C430] transition-all duration-300 overflow-hidden flex flex-col items-center text-center h-full">

                                {/* Icon */}
                                <div className="w-16 h-16 rounded-full bg-[#F4C430] flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:bg-[#FFD21F] transition-all duration-300 shadow-md">
                                    {React.cloneElement(feature.icon as any, {
                                        size: 28,
                                        className: "text-[#171717]",
                                    })}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold mb-3 text-[#171717] group-hover:text-[#E91E63] transition-colors relative z-10">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#6B6B6B] font-normal leading-relaxed text-sm relative z-10 mb-2">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
