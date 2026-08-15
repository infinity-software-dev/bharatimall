'use client';

import { motion } from 'framer-motion';
import {
    Lock,
    Calendar,
    ArrowRightCircle,
} from 'lucide-react';


const withdrawalRules = [
    {
        category: "At Retirement (60+)",
        rules: [
            "Minimum 40% must be used for Annuity (Monthly Pension).",
            "Up to 60% can be withdrawn as a tax-free Lump Sum.",
            "If corpus is ≤ ₹5 Lakh, 100% can be withdrawn as a lump sum."
        ],
        icon: Calendar,
    },
    {
        category: "Partial Withdrawal",
        rules: [
            "Allowed after 3 years of joining NPS.",
            "Maximum 25% of self-contribution can be withdrawn.",
            "Reasons: Higher education, marriage, home purchase, or medical emergencies."
        ],
        icon: ArrowRightCircle,
    },
    {
        category: "Premature Exit (Before 60)",
        rules: [
            "Allowed after 5 or 10 years depending on sector.",
            "Minimum 80% must be used for Annuity.",
            "If corpus is ≤ ₹2.5 Lakh, 100% can be withdrawn."
        ],
        icon: Lock,
    }
];

export default function NPSWithdrawal() {
    return (
        <section id="withdrawal-rules" className="relative py-12 md:py-16 bg-white overflow-hidden border-b border-[#E5E5E0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* NPS Withdrawal Section */}
                <div>
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight"
                        >
                            NPS Withdrawal &amp; Exit Rules
                        </motion.h2>
                        <p className="text-[#6B6B6B] max-w-2xl mx-auto font-normal text-base sm:text-lg leading-relaxed">
                            Transparent and flexible exit rules tailored for your financial milestones.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 sm:gap-10">
                        {withdrawalRules.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -8 }}
                                className="relative overflow-hidden bg-white rounded-[2rem] p-8 sm:p-10 shadow-lg border border-[#E5E5E0] group transition-all duration-300 hover:border-[#F4C430] hover:shadow-2xl"
                            >
                                <div className="relative z-20 w-16 h-16 bg-[#FFF8D6] border border-[#F4C430]/40 rounded-2xl flex items-center justify-center mb-8 shadow-md group-hover:scale-110 group-hover:bg-[#F4C430] transition-all duration-300 mx-auto">
                                    <section.icon className="w-8 h-8 text-[#171717]" />
                                </div>

                                <h3 className="relative z-20 text-xl font-bold text-[#171717] mb-6 text-center tracking-tight">{section.category}</h3>

                                <ul className="space-y-4">
                                    {section.rules.map((rule, idx) => (
                                        <li key={idx} className="flex items-start gap-3.5">
                                            <div className="mt-1.5 w-2 h-2 rounded-full bg-[#F4C430] shrink-0" />
                                            <p className="text-[#292929] text-sm leading-relaxed font-normal">{rule}</p>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
