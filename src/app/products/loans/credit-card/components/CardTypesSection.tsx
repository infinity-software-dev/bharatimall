"use client";

import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    CreditCard,
    Search,
    X,
    ChevronDown,
    ChevronUp,
    Check,
    Star,
    Gift,
    Plane,
    ShoppingBag,
    Sparkles,
    CheckCircle2,
    ShieldCheck,
    FileText,
    Building2,
} from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

import CompareModal from "./CompareModal";

export interface CreditCardData {
    id: number;
    bank: string;
    category: string;
    title: string;
    subtitle: string;
    image: string;
    highlights: string[];
    detailedFeatures: string[];
    joiningFee: string;
    annualFee: string;
    bestFor: string;
    tags: string[];
    featured?: boolean;
}

const MOCK_CREDIT_CARDS: CreditCardData[] = [
    {
        id: 1,
        bank: "HDFC Bank",
        category: "rewards",
        title: "HDFC Regalia Gold Credit Card",
        subtitle: "Premium Lifestyle & Travel Rewards",
        image: "/credit-card/credit-card-hero.png",
        highlights: [
            "Complimentary Club Vistara Silver & Accor Plus tier membership",
            "4 Reward Points on every ₹150 spent across retail",
            "Unlimited domestic & international airport lounge access",
        ],
        detailedFeatures: [
            "12 complimentary airport lounge accesses within India per calendar year",
            "6 complimentary international lounge accesses via Priority Pass",
            "Low foreign currency mark-up of 2% on international spends",
            "Milestone benefit: Voucher worth ₹2,500 on quarterly spends of ₹1.5 Lakhs",
        ],
        joiningFee: "₹2,500 + GST",
        annualFee: "₹2,500 + GST (Waiver on ₹4 Lakhs annual spend)",
        bestFor: "Travel & Fine Dining",
        tags: ["Rewards", "Lounge Access", "Travel"],
        featured: true,
    },
    {
        id: 2,
        bank: "ICICI Bank",
        category: "cashback",
        title: "Amazon Pay ICICI Credit Card",
        subtitle: "Lifetime Free Daily Cashback",
        image: "/credit-card/credit-card-hero.png",
        highlights: [
            "Lifetime Free card with zero joining and annual fees",
            "5% unlimited cashback for Amazon Prime members",
            "2% cashback on partner merchants and 1% on general spends",
        ],
        detailedFeatures: [
            "Direct cashback credited automatically to your Amazon Pay balance monthly",
            "Complimentary fuel surcharge waiver of 1% across all petrol pumps",
            "Zero minimum redemption threshold for accumulated cashback",
            "Secure chip & PIN enabled contactless payments",
        ],
        joiningFee: "₹0 (Lifetime Free)",
        annualFee: "₹0 (Lifetime Free)",
        bestFor: "Online Shopping & Daily Spends",
        tags: ["Cashback", "Shopping", "Lifetime Free"],
        featured: true,
    },
    {
        id: 3,
        bank: "SBI Card",
        category: "shopping",
        title: "SBI Card Elite",
        subtitle: "Luxury Perks & Welcome Vouchers",
        image: "/credit-card/credit-card-hero.png",
        highlights: [
            "Welcome e-voucher worth ₹5,000 from leading brands",
            "Complimentary Trident Privilege Red Tier & Club Marriott membership",
            "Free movie tickets worth up to ₹6,000 annually via BookMyShow",
        ],
        detailedFeatures: [
            "2 Reward Points per ₹100 spent on dining, department stores, and groceries",
            "Complimentary domestic and international airport lounge visits",
            "Dedicated 24/7 concierge assistance for travel and dining reservations",
            "Annual fee reversal upon crossing ₹10 Lakhs in annual spends",
        ],
        joiningFee: "₹4,999 + GST",
        annualFee: "₹4,999 + GST",
        bestFor: "Luxury Living & Entertainment",
        tags: ["Shopping", "Movies", "Premium"],
        featured: false,
    },
    {
        id: 4,
        bank: "Axis Bank",
        category: "rewards",
        title: "Axis Bank Ace Credit Card",
        subtitle: "Simplified Utility & Bill Cashback",
        image: "/credit-card/credit-card-hero.png",
        highlights: [
            "2% flat cashback on utility bill payments via Google Pay",
            "4% cashback on Swiggy, Zomato, and Ola transactions",
            "1.5% unlimited cashback on all other eligible retail spends",
        ],
        detailedFeatures: [
            "Auto-credit of cashback directly into your card account every statement cycle",
            "4 complimentary domestic airport lounge accesses per year",
            "1% fuel surcharge waiver across all fuel stations in India",
            "Low annual fee of ₹499, waived on spends over ₹2 Lakhs",
        ],
        joiningFee: "₹499 + GST",
        annualFee: "₹499 + GST",
        bestFor: "Utility Bills & Food Delivery",
        tags: ["Cashback", "Dining", "Utilities"],
        featured: false,
    },
];

const BANK_LIST = [
    { name: "HDFC Bank" },
    { name: "ICICI Bank" },
    { name: "SBI Card" },
    { name: "Axis Bank" },
    { name: "Kotak Mahindra Bank" },
    { name: "IndusInd Bank" },
];

const CATEGORY_LIST = [
    { id: "rewards", title: "Rewards & Travel" },
    { id: "cashback", title: "Cashback & Spends" },
    { id: "shopping", title: "Shopping & Lifestyle" },
];

const ELIGIBILITY_CRITERIA = [
    "Minimum age: 21 years (Maximum 60 years)",
    "Stable monthly income above ₹25,000 (Salaried or Self-Employed)",
    "Good CIBIL credit score of 700 and above",
    "Indian resident with valid PAN and Aadhaar card",
];

const REQUIRED_DOCS = [
    "Identity Proof (PAN Card, Voter ID, or Passport)",
    "Address Proof (Aadhaar, Utility Bill, or Passport)",
    "Income Proof: Last 2 months salary slips or latest ITR",
    "Last 3 months bank statement reflecting salary credits",
];

interface CardTypesSectionProps {
    onApplyClick?: (title: string) => void;
    onContactClick?: () => void;
    topContent?: React.ReactNode;
    isDashboard?: boolean;
}

export default function CardTypesSection({
    onApplyClick,
    topContent,
    isDashboard = false,
}: CardTypesSectionProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBank, setSelectedBank] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [showAll, setShowAll] = useState(false);
    const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
    const [activeDetailsTab, setActiveDetailsTab] = useState<
        Record<number, "features" | "eligibility" | "docs">
    >({});
    const [selectedCompare, setSelectedCompare] = useState<number[]>([]);
    const [isCompareOpen, setIsCompareOpen] = useState(false);
    const [sortBy, setSortBy] = useState<
        "default" | "fee-asc" | "fee-desc" | "name-asc" | "name-desc"
    >("default");

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const parseFee = (fee: string): number => {
        if (!fee || /zero|nil|free|lifetime/i.test(fee)) return 0;
        const num = parseInt(fee.replace(/[^0-9]/g, ""), 10);
        return isNaN(num) ? 0 : num;
    };

    const filteredCards = useMemo(() => {
        const filtered = MOCK_CREDIT_CARDS.filter((card) => {
            const matchesSearch =
                !searchQuery ||
                card.title.toLowerCase().includes(searchQuery.toLowerCase().trim());
            const matchesBank = !selectedBank || card.bank === selectedBank;
            const matchesCategory =
                !selectedCategory || card.category === selectedCategory;
            return matchesSearch && matchesBank && matchesCategory;
        });

        return [...filtered].sort((a, b) => {
            switch (sortBy) {
                case "fee-asc":
                    return parseFee(a.joiningFee) - parseFee(b.joiningFee);
                case "fee-desc":
                    return parseFee(b.joiningFee) - parseFee(a.joiningFee);
                case "name-asc":
                    return a.title.localeCompare(b.title);
                case "name-desc":
                    return b.title.localeCompare(a.title);
                default:
                    return 0;
            }
        });
    }, [searchQuery, selectedBank, selectedCategory, sortBy]);

    const handleShowAllToggle = () => {
        setShowAll(!showAll);
        if (!isDashboard) {
            setTimeout(() => {
                if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
                }
            }, 150);
        }
    };

    const toggleCompare = (id: number) => {
        setSelectedCompare((prev) => {
            if (prev.includes(id)) {
                return prev.filter((i) => i !== id);
            }
            if (prev.length >= 3) {
                toast.error("You can compare up to 3 cards at a time");
                return prev;
            }
            return [...prev, id];
        });
    };

    const selectedCardsForCompare = useMemo(() => {
        return MOCK_CREDIT_CARDS.filter((card) => selectedCompare.includes(card.id));
    }, [selectedCompare]);

    const visibleCards = showAll ? filteredCards : filteredCards.slice(0, 3);

    const handleApply = (title: string) => {
        if (onApplyClick) {
            onApplyClick(title);
        } else {
            console.log("Apply clicked for:", title);
        }
    };

    return (
        <section className="py-14 md:py-20 bg-[#FFFFFF] font-sans border-b border-[#E5E5E0]" id="types">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {topContent}

                {!isDashboard && (
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                            <Sparkles size={14} className="text-[#171717]" />
                            Curated Portfolio
                        </div>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                            Explore Premium Credit Cards
                        </h2>

                        <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                            Compare benefits, reward rates, annual fees, and milestone perks across India&apos;s leading bank issuers.
                        </p>
                    </div>
                )}

                {/* Search & Filters Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

                    {/* Search Bar */}
                    <div className="relative flex-grow max-w-md">
                        <input
                            type="text"
                            placeholder="Search credit cards by name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-10 py-3 bg-[#FFFDF5] border border-[#E5E5E0] rounded-xl text-sm text-[#171717] placeholder:text-[#6B6B6B] focus:outline-none focus:border-[#F4C430] font-bold shadow-xs transition-all"
                        />
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B6B6B]" size={16} />
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6B6B6B] hover:text-[#171717] cursor-pointer"
                            >
                                <X size={16} strokeWidth={2.5} />
                            </button>
                        )}
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center gap-3">

                        {/* Category Filter */}
                        <div className="relative">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="appearance-none bg-[#FFFDF5] border border-[#E5E5E0] text-[#171717] text-xs font-bold rounded-xl px-4 py-3 pr-8 focus:outline-none focus:border-[#F4C430] transition-all shadow-xs cursor-pointer"
                            >
                                <option value="">Category: All</option>
                                {CATEGORY_LIST.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.title}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] pointer-events-none" />
                        </div>

                        {/* Sort Dropdown */}
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                                className="appearance-none bg-[#FFFDF5] border border-[#E5E5E0] text-[#171717] text-xs font-bold rounded-xl px-4 py-3 pr-8 focus:outline-none focus:border-[#F4C430] transition-all shadow-xs cursor-pointer"
                            >
                                <option value="default">Sort: Default</option>
                                <option value="fee-asc">Fee: Low → High</option>
                                <option value="fee-desc">Fee: High → Low</option>
                                <option value="name-asc">Name: A → Z</option>
                                <option value="name-desc">Name: Z → A</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] pointer-events-none" />
                        </div>

                        {/* Bank Filter */}
                        <div className="relative">
                            <select
                                value={selectedBank}
                                onChange={(e) => setSelectedBank(e.target.value)}
                                className="appearance-none bg-[#FFFDF5] border border-[#E5E5E0] text-[#171717] text-xs font-bold rounded-xl px-4 py-3 pr-8 focus:outline-none focus:border-[#F4C430] transition-all shadow-xs cursor-pointer"
                            >
                                <option value="">All Banks</option>
                                {BANK_LIST.map((bank) => (
                                    <option key={bank.name} value={bank.name}>
                                        {bank.name}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] pointer-events-none" />
                        </div>

                    </div>
                </div>

                {/* Results Counter */}
                <div className="mb-6">
                    <p className="text-xs font-bold text-[#6B6B6B]">
                        Showing <span className="text-[#171717] font-extrabold">{filteredCards.length}</span> of <span className="font-extrabold">{MOCK_CREDIT_CARDS.length}</span> cards
                    </p>
                </div>

                {/* Cards List */}
                <div ref={scrollContainerRef} className="space-y-6">
                    <AnimatePresence mode="popLayout">
                        {visibleCards.map((card) => (
                            <motion.div
                                key={card.id}
                                layout
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                className="bg-[#FFFDF5] rounded-3xl border border-[#E5E5E0] hover:border-[#F4C430] shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden group"
                            >
                                <div className="flex flex-col lg:flex-row items-stretch">

                                    {/* Card Image Column */}
                                    <div className="w-full lg:w-72 shrink-0 relative bg-[#FFFFFF] p-5 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#E5E5E0]">
                                        {card.featured && (
                                            <div className="absolute top-4 left-4 bg-[#F4C430] text-[#171717] text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs border border-[#FFFFFF] z-20">
                                                Featured
                                            </div>
                                        )}

                                        <div className="relative w-full aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-[#F5F5F3] flex items-center justify-center">
                                            <Image
                                                src={card.image || "/credit-card/credit-card-hero.png"}
                                                alt={card.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 280px"
                                                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Card Details Column */}
                                    <div className="flex-grow flex flex-col xl:flex-row gap-6 p-6 md:p-7 justify-between">
                                        <div className="flex-grow space-y-4">
                                            <h3 className="text-xl font-extrabold text-[#171717] tracking-tight">
                                                {card.title}
                                            </h3>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {card.tags.map((tag: string) => (
                                                    <div
                                                        key={tag}
                                                        className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-[#E5E5E0] text-xs font-bold text-[#171717] bg-[#FFFFFF] shadow-xs"
                                                    >
                                                        <Sparkles size={12} className="text-[#171717]" />
                                                        <span>{tag}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Fees */}
                                            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm pt-1">
                                                <div>
                                                    <span className="text-[#6B6B6B] font-medium">Joining Fee: </span>
                                                    <strong className="text-[#171717] font-extrabold">{card.joiningFee}</strong>
                                                </div>
                                                <div className="w-px h-4 bg-[#E5E5E0] hidden sm:block" />
                                                <div>
                                                    <span className="text-[#6B6B6B] font-medium">Annual Fee: </span>
                                                    <strong className="text-[#171717] font-extrabold">{card.annualFee}</strong>
                                                </div>
                                            </div>

                                            {/* Highlights */}
                                            <ul className="space-y-2 pt-1">
                                                {card.highlights.map((h: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-[#292929] leading-snug">
                                                        <div className="w-4 h-4 rounded-full bg-[#FFF8D6] text-[#171717] flex items-center justify-center shrink-0 mt-0.5 border border-[#F4C430]/40">
                                                            <Check size={11} strokeWidth={3} className="text-[#171717]" />
                                                        </div>
                                                        <span>{h}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Action Buttons Column */}
                                        <div className="flex flex-col gap-3 w-full xl:w-44 shrink-0 justify-center">
                                            <label className="flex items-center gap-2 cursor-pointer px-1">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedCompare.includes(card.id)}
                                                    onChange={() => toggleCompare(card.id)}
                                                    disabled={!selectedCompare.includes(card.id) && selectedCompare.length >= 3}
                                                    className="w-4 h-4 rounded border border-[#E5E5E0] accent-[#F4C430] cursor-pointer"
                                                />
                                                <span className="text-xs font-bold text-[#171717] uppercase tracking-wider">
                                                    Compare
                                                </span>
                                            </label>

                                            <button
                                                type="button"
                                                onClick={() => handleApply(card.title)}
                                                className="w-full py-3.5 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl text-xs font-bold uppercase tracking-wider shadow-xs hover:shadow transition-all cursor-pointer"
                                            >
                                                Apply Now
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => setExpandedCardId(expandedCardId === card.id ? null : card.id)}
                                                className="w-full py-3 bg-[#FFFFFF] hover:bg-[#FFF8D6] text-[#171717] rounded-xl text-xs font-bold uppercase tracking-wider border border-[#E5E5E0] hover:border-[#F4C430] transition-all cursor-pointer"
                                            >
                                                {expandedCardId === card.id ? "Hide Details" : "View Details"}
                                            </button>
                                        </div>

                                    </div>
                                </div>

                                {/* Expanded Details Section */}
                                <AnimatePresence>
                                    {expandedCardId === card.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden border-t border-[#E5E5E0] bg-[#FFFFFF]"
                                        >
                                            <div className="p-6 md:p-8">
                                                {/* Tabs */}
                                                <div className="flex gap-6 mb-6 border-b border-[#E5E5E0] overflow-x-auto no-scrollbar">
                                                    {(["features", "eligibility", "docs"] as const).map((tab) => {
                                                        const isActive = (activeDetailsTab[card.id] || "features") === tab;
                                                        return (
                                                            <button
                                                                key={tab}
                                                                type="button"
                                                                onClick={() =>
                                                                    setActiveDetailsTab((prev) => ({ ...prev, [card.id]: tab }))
                                                                }
                                                                className={`pb-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all relative whitespace-nowrap cursor-pointer ${isActive
                                                                        ? "text-[#171717] border-b-2 border-[#F4C430]"
                                                                        : "text-[#6B6B6B] hover:text-[#171717]"
                                                                    }`}
                                                            >
                                                                {tab}
                                                            </button>
                                                        );
                                                    })}
                                                </div>

                                                {/* Tab Content */}
                                                <div>
                                                    {(activeDetailsTab[card.id] || "features") === "features" && (
                                                        <div className="space-y-3">
                                                            <h4 className="text-sm font-bold text-[#171717]">Key Features & Benefits</h4>
                                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                {card.detailedFeatures.map((feature: string, idx: number) => (
                                                                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6B6B6B]">
                                                                        <CheckCircle2 size={15} className="text-[#171717] shrink-0 mt-0.5" />
                                                                        <span>{feature}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {(activeDetailsTab[card.id] || "features") === "eligibility" && (
                                                        <div className="space-y-3">
                                                            <h4 className="text-sm font-bold text-[#171717]">Eligibility Criteria</h4>
                                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                {ELIGIBILITY_CRITERIA.map((item, idx) => (
                                                                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6B6B6B]">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] mt-2 shrink-0" />
                                                                        <span>{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {(activeDetailsTab[card.id] || "features") === "docs" && (
                                                        <div className="space-y-3">
                                                            <h4 className="text-sm font-bold text-[#171717]">Required Documents</h4>
                                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                {REQUIRED_DOCS.map((item, idx) => (
                                                                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6B6B6B]">
                                                                        <ShieldCheck size={15} className="text-[#171717] shrink-0 mt-0.5" />
                                                                        <span>{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All / View Less Toggle */}
                {filteredCards.length > 3 && (
                    <div className="text-center mt-10">
                        <button
                            type="button"
                            onClick={handleShowAllToggle}
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#FFF8D6] hover:bg-[#FFD21F] text-[#171717] border border-[#F4C430]/40 font-bold text-sm transition-colors cursor-pointer shadow-xs"
                        >
                            <span>{showAll ? "View Less Cards" : `View All ${filteredCards.length} Cards`}</span>
                            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                    </div>
                )}

                {filteredCards.length === 0 && (
                    <div className="py-16 text-center bg-[#FFFDF5] rounded-3xl border border-[#E5E5E0]">
                        <Search size={32} className="text-[#6B6B6B] mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-[#171717] mb-1">No credit cards found</h3>
                        <p className="text-xs sm:text-sm text-[#6B6B6B]">Try adjusting your search query or filter options.</p>
                    </div>
                )}

                {/* Floating Compare Bar */}
                <AnimatePresence>
                    {selectedCompare.length > 0 && (
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl"
                        >
                            <div className="bg-[#FFFFFF] border border-[#F4C430] rounded-3xl p-4 md:p-5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    {selectedCompare.map((id) => {
                                        const card = MOCK_CREDIT_CARDS.find((c) => c.id === id);
                                        return (
                                            <div key={id} className="relative group">
                                                <div className="w-14 h-10 bg-[#F5F5F3] rounded-xl border border-[#E5E5E0] p-1 flex items-center justify-center">
                                                    <Image
                                                        src={card?.image || "/credit-card/credit-card-hero.png"}
                                                        alt={card?.title || "Card"}
                                                        width={40}
                                                        height={30}
                                                        className="object-contain max-h-full"
                                                    />
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => toggleCompare(id)}
                                                    className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#171717] text-[#FFFFFF] rounded-full flex items-center justify-center text-xs hover:bg-[#F4C430] hover:text-[#171717] transition-colors cursor-pointer"
                                                >
                                                    <X size={10} strokeWidth={3} />
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="flex items-center gap-3 w-full md:w-auto">
                                    <button
                                        type="button"
                                        onClick={() => setIsCompareOpen(true)}
                                        disabled={selectedCompare.length < 2}
                                        className="flex-grow md:flex-none px-6 py-3 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl text-xs font-bold uppercase tracking-wider shadow-xs disabled:opacity-50 cursor-pointer"
                                    >
                                        Compare Now ({selectedCompare.length}/3)
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedCompare([])}
                                        className="p-3 bg-[#F5F5F3] hover:bg-[#E5E5E0] text-[#171717] rounded-xl transition-colors cursor-pointer"
                                    >
                                        <X size={16} strokeWidth={2.5} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <CompareModal
                    isOpen={isCompareOpen}
                    onClose={() => setIsCompareOpen(false)}
                    cards={selectedCardsForCompare}
                    onApply={handleApply}
                />

            </div>
        </section>
    );
}