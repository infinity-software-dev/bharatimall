"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface Card {
    id: number;
    bank: string;
    title: string;
    image: string;
    joiningFee: string;
    annualFee: string;
    bestFor: string;
    highlights: string[];
    detailedFeatures: string[];
    tags: string[];
}

interface CompareModalProps {
    isOpen: boolean;
    onClose: () => void;
    cards: Card[];
    onApply: (title: string) => void;
}

const comparisonRows = [
    { label: "Joining Fee", key: "joiningFee" },
    { label: "Annual Fee", key: "annualFee" },
    { label: "Annual Fee Waiver", key: "waveOff", default: "Spend-based waiver available" },
    { label: "Interest Rate", key: "interestRate", default: "3.5% per month (42% p.a.)" },
    { label: "Best Suited For", key: "bestFor" },
    { label: "Primary Network", key: "network", getValue: (card: Card) => card.tags[0] || "Visa / Mastercard" },
    { label: "Interest-Free Period", key: "interestFree", default: "Up to 50 days" },
    { label: "Welcome Perks", key: "welcome", getValue: (card: Card) => card.highlights[1] || "Welcome vouchers & points" },
    {
        label: "Key Features",
        key: "features",
        getValue: (card: Card) => (
            <ul className="space-y-1.5 text-left">
                {card.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="text-xs text-[#6B6B6B] flex items-start gap-1.5">
                        <span className="text-[#171717] font-bold mt-0.5">•</span>
                        <span>{h}</span>
                    </li>
                ))}
            </ul>
        ),
    },
    { label: "Lounge Access", key: "lounge", getValue: (card: Card) => (card.tags.some((t) => t.toLowerCase().includes("lounge")) ? "Complimentary" : "Standard") },
];

export default function CompareModal({
    isOpen,
    onClose,
    cards,
    onApply,
}: CompareModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#171717]/60 backdrop-blur-xs font-sans"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="bg-[#FFFFFF] w-full max-w-6xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-[#E5E5E0]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="p-6 md:p-7 border-b border-[#E5E5E0] flex items-center justify-between bg-[#FFFDF5] sticky top-0 z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#FFF8D6] border border-[#F4C430]/40 flex items-center justify-center text-[#171717] shadow-xs">
                                <Sparkles size={20} />
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#171717] tracking-tight">
                                    Compare Credit Cards
                                </h2>
                                <p className="text-xs text-[#6B6B6B]">
                                    Side-by-side comparison of fees, rewards, and privileges.
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="w-10 h-10 rounded-full bg-[#F5F5F3] hover:bg-[#FFF8D6] border border-[#E5E5E0] flex items-center justify-center text-[#171717] transition-colors cursor-pointer"
                        >
                            <X size={18} strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* Table Container */}
                    <div className="flex-grow overflow-auto p-4 md:p-6">
                        <div className="min-w-[800px]">

                            {/* Card Header Row */}
                            <div className="grid grid-cols-[220px_1fr_1fr_1fr] bg-[#FFFDF5] rounded-2xl border border-[#E5E5E0] mb-4">
                                <div className="p-5 flex flex-col justify-center border-r border-[#E5E5E0]">
                                    <span className="text-xs font-bold text-[#6B6B6B] uppercase tracking-wider">
                                        Selected Cards
                                    </span>
                                    <span className="text-sm font-extrabold text-[#171717]">
                                        {cards.length} / 3 Compared
                                    </span>
                                </div>

                                {[0, 1, 2].map((idx) => {
                                    const card = cards[idx];
                                    return (
                                        <div
                                            key={idx}
                                            className={`p-5 flex flex-col items-center text-center justify-between ${idx < 2 ? "border-r border-[#E5E5E0]" : ""
                                                }`}
                                        >
                                            {card ? (
                                                <>
                                                    <div className="relative w-full h-24 mb-3 bg-[#F5F5F3] rounded-xl overflow-hidden flex items-center justify-center p-2">
                                                        <Image
                                                            src={card.image || "/placeholder-image.png"}
                                                            alt={card.title}
                                                            fill
                                                            sizes="200px"
                                                            className="object-contain p-1"
                                                        />
                                                    </div>
                                                    <h4 className="font-extrabold text-sm text-[#171717] mb-3 line-clamp-1">
                                                        {card.title}
                                                    </h4>
                                                    <button
                                                        type="button"
                                                        onClick={() => onApply(card.title)}
                                                        className="w-full py-2.5 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                                                    >
                                                        Apply Now
                                                    </button>
                                                </>
                                            ) : (
                                                <div className="h-full flex flex-col items-center justify-center py-6 text-center">
                                                    <div className="w-12 h-12 rounded-xl border border-dashed border-[#E5E5E0] bg-[#F5F5F3] flex items-center justify-center mb-2 text-[#6B6B6B]">
                                                        <CreditCard size={20} />
                                                    </div>
                                                    <span className="text-xs font-semibold text-[#6B6B6B]">
                                                        Select card to compare
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Comparison Rows */}
                            <div className="bg-[#FFFFFF] rounded-2xl border border-[#E5E5E0] overflow-hidden divide-y divide-[#E5E5E0]">
                                {comparisonRows.map((row) => (
                                    <div
                                        key={row.key}
                                        className="grid grid-cols-[220px_1fr_1fr_1fr] hover:bg-[#FFFDF5] transition-colors"
                                    >
                                        <div className="p-4 md:p-5 border-r border-[#E5E5E0] flex items-center">
                                            <span className="text-xs font-bold text-[#171717]">
                                                {row.label}
                                            </span>
                                        </div>

                                        {[0, 1, 2].map((idx) => {
                                            const card = cards[idx];
                                            return (
                                                <div
                                                    key={idx}
                                                    className={`p-4 md:p-5 flex items-center justify-center text-center text-xs sm:text-sm font-semibold text-[#6B6B6B] ${idx < 2 ? "border-r border-[#E5E5E0]" : ""
                                                        }`}
                                                >
                                                    {card ? (
                                                        <div>
                                                            {row.getValue
                                                                ? row.getValue(card)
                                                                : (card as any)[row.key] || row.default || "N/A"}
                                                        </div>
                                                    ) : (
                                                        <span className="text-[#E5E5E0]">—</span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-5 md:p-6 bg-[#F5F5F3] border-t border-[#E5E5E0] flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#FFF8D6] text-[#171717] border border-[#E5E5E0] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                        >
                            Close Comparison
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}