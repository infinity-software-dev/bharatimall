"use client";

import React, { useState } from "react";
import {
    TrendingUp,
    ChevronDown,
    ChevronUp,
    Check,
    X,
    Percent,
    Shield,
    SlidersHorizontal,
    Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// ================= TYPES =================
export interface BankTenureRate {
    rate: string;
    senior: string;
    specialOffer: string;
    rateNum: number;
    seniorNum: number;
}

export interface BankItem {
    id: number;
    name: string;
    shortName: string;
    category: "Public Sector Banks" | "Private Sector Banks" | "Small Finance Banks" | "NBFCs";
    risk: "LOW RISK" | "MODERATE" | "HIGH RISK";
    logoBg?: string;
    logoColor?: string;
    logoType?: string;
    tenures: {
        "1 YEAR": BankTenureRate;
        "2 YEARS": BankTenureRate;
        "3 YEARS": BankTenureRate;
        "5 YEARS": BankTenureRate;
    };
}

export interface BankCategoryGroup {
    category: string;
    banks: BankItem[];
}

// ================= BANK LOGO COMPONENT =================
const BankLogo: React.FC<{ name: string; shortName: string; logoType?: string }> = ({ name, shortName, logoType }) => {
    switch (logoType) {
        // --- Public Banks ---
        case "sbi":
            return (
                <div className="w-8 h-8 rounded-full bg-[#0082cb] flex items-center justify-center text-white shrink-0 shadow-xs">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <circle cx="12" cy="12" r="10" fill="#0082cb" />
                        <circle cx="12" cy="12" r="4" fill="white" />
                        <rect x="11" y="12" width="2" height="7" fill="#0082cb" />
                    </svg>
                </div>
            );
        case "canara":
            return (
                <div className="w-8 h-8 rounded-full bg-[#0091df] flex items-center justify-center text-[#ffc600] font-black text-[11px] shrink-0 border border-blue-200 shadow-xs">
                    <span className="text-white font-extrabold text-[10px]">CB</span>
                </div>
            );
        case "union":
            return (
                <div className="w-8 h-8 rounded-full bg-[#e31837] flex items-center justify-center text-white font-black text-[10px] shrink-0 border border-red-200 shadow-xs">
                    <span className="text-[#002f6c] font-black bg-white rounded-full w-6 h-6 flex items-center justify-center text-[9px]">UBI</span>
                </div>
            );
        case "pnb":
            return (
                <div className="w-8 h-8 rounded-full bg-[#9c182f] flex items-center justify-center text-[#ffb612] font-black text-[10px] shrink-0 border border-amber-200 shadow-xs">
                    <span className="tracking-tighter font-extrabold">PNB</span>
                </div>
            );
        case "indian":
            return (
                <div className="w-8 h-8 rounded-full bg-[#003882] flex items-center justify-center text-white font-black text-[9px] shrink-0 border border-blue-200 shadow-xs">
                    <span className="text-[#ffcb05] font-extrabold">IND</span>
                </div>
            );
        case "bob":
            return (
                <div className="w-8 h-8 rounded-full bg-[#f26522] flex items-center justify-center text-white font-black text-[10px] shrink-0 border border-orange-200 shadow-xs">
                    <span className="font-extrabold">BOB</span>
                </div>
            );
        case "boi":
            return (
                <div className="w-8 h-8 rounded-full bg-[#002f6c] flex items-center justify-center text-[#f37021] font-black text-[10px] shrink-0 border border-blue-200 shadow-xs">
                    <span className="font-black text-[9px] text-[#f37021]">BOI</span>
                </div>
            );
        case "bom":
            return (
                <div className="w-8 h-8 rounded-full bg-[#005a9c] flex items-center justify-center text-white font-black text-[9px] shrink-0 border border-cyan-200 shadow-xs">
                    <span className="font-extrabold">BOM</span>
                </div>
            );

        // --- Private Banks ---
        case "rbl":
            return (
                <div className="w-8 h-8 rounded-full bg-white border border-[#cbd5e1] flex items-center justify-center text-[#1e3a8a] font-bold text-xs shrink-0 shadow-xs">
                    <span className="text-[#0284c7] font-black text-xs">r</span>
                    <span className="text-[#dc2626] font-black text-xs">b</span>
                    <span className="text-[#1e3a8a] font-black text-xs">l</span>
                </div>
            );
        case "idfc":
            return (
                <div className="w-8 h-8 rounded-lg bg-[#9c1d26] flex items-center justify-center text-white font-black text-[8px] shrink-0 shadow-xs">
                    <span className="font-extrabold tracking-tighter">IDFC</span>
                </div>
            );
        case "bandhan":
            return (
                <div className="w-8 h-8 rounded-full bg-white border border-[#dc2626]/30 flex items-center justify-center text-[#dc2626] font-black text-[9px] shrink-0 shadow-xs">
                    <span className="font-bold text-[#dc2626]">B</span>
                </div>
            );
        case "yesbank":
            return (
                <div className="w-8 h-8 rounded-md bg-[#00529b] flex items-center justify-center text-white font-black text-[8px] shrink-0 shadow-xs">
                    <span className="text-white font-bold">YES</span>
                </div>
            );
        case "indusind":
            return (
                <div className="w-8 h-8 rounded-full bg-[#85181a] flex items-center justify-center text-white font-black text-[9px] shrink-0 shadow-xs">
                    <span className="font-bold">IND</span>
                </div>
            );
        case "federal":
            return (
                <div className="w-8 h-8 rounded-md bg-[#003b71] flex items-center justify-center text-[#ffd200] font-black text-[8px] shrink-0 shadow-xs">
                    <span className="font-bold">FED</span>
                </div>
            );
        case "kotak":
            return (
                <div className="w-8 h-8 rounded-full bg-[#ed1b24] flex items-center justify-center text-white font-black text-[11px] shrink-0 shadow-xs">
                    <span className="font-extrabold">K</span>
                </div>
            );
        case "icici":
            return (
                <div className="w-8 h-8 rounded-full bg-[#ae282e] flex items-center justify-center text-[#f37e20] font-black text-[10px] shrink-0 shadow-xs">
                    <span className="text-white font-extrabold text-[9px]">i</span>
                </div>
            );
        case "axis":
            return (
                <div className="w-8 h-8 rounded-md bg-[#97144d] flex items-center justify-center text-white font-black text-[9px] shrink-0 shadow-xs">
                    <span className="font-extrabold">A</span>
                </div>
            );
        case "hdfc":
            return (
                <div className="w-8 h-8 rounded-md bg-[#004c8f] flex items-center justify-center text-white font-black text-[8px] shrink-0 shadow-xs">
                    <span className="text-[#ed232a] bg-white rounded px-0.5 font-extrabold">H</span>
                </div>
            );

        // --- Small Finance Banks ---
        case "suryoday":
            return (
                <div className="w-8 h-8 rounded-full bg-white border border-[#f97316]/30 flex items-center justify-center text-[#f97316] font-black text-[9px] shrink-0 shadow-xs">
                    <span className="text-[#ea580c] font-bold">SUR</span>
                </div>
            );
        case "jana":
            return (
                <div className="w-8 h-8 rounded-full bg-white border border-[#dc2626]/30 flex items-center justify-center text-[#dc2626] font-black text-[8px] shrink-0 shadow-xs">
                    <span className="text-[#dc2626] font-extrabold tracking-tighter">JANA</span>
                </div>
            );
        case "utkarsh":
            return (
                <div className="w-8 h-8 rounded-full bg-[#6b21a8] flex items-center justify-center text-white font-black text-[9px] shrink-0 shadow-xs">
                    <span className="font-bold">UTK</span>
                </div>
            );
        case "ujjivan":
            return (
                <div className="w-8 h-8 rounded-full bg-white border border-[#16a34a]/30 flex items-center justify-center text-[#16a34a] font-black text-[9px] shrink-0 shadow-xs">
                    <span className="text-[#15803d] font-bold">UJJ</span>
                </div>
            );
        case "equitas":
            return (
                <div className="w-8 h-8 rounded-md bg-[#005a9c] flex items-center justify-center text-white font-black text-[8px] shrink-0 shadow-xs">
                    <span className="font-bold">EQUIT</span>
                </div>
            );
        case "fincare":
            return (
                <div className="w-8 h-8 rounded-full bg-white border border-[#f97316]/30 flex items-center justify-center text-[#f97316] font-black text-[9px] shrink-0 shadow-xs">
                    <span className="text-[#ea580c] font-bold">FIN</span>
                </div>
            );
        case "au":
            return (
                <div className="w-8 h-8 rounded-full bg-[#581c87] flex items-center justify-center text-[#f97316] font-black text-[10px] shrink-0 shadow-xs border border-purple-300">
                    <span className="font-black text-white">AU</span>
                </div>
            );

        // --- NBFCs ---
        case "shriram":
            return (
                <div className="w-8 h-8 rounded-full bg-[#003882] flex items-center justify-center text-[#ffd200] font-black text-[8px] shrink-0 shadow-xs border border-blue-300">
                    <span className="font-extrabold text-[#ffd200]">SHR</span>
                </div>
            );
        case "mahindra":
            return (
                <div className="w-8 h-8 rounded-full bg-white border border-[#e31837]/30 flex items-center justify-center text-[#e31837] font-black text-[9px] shrink-0 shadow-xs">
                    <span className="font-extrabold text-[#e31837]">M&amp;M</span>
                </div>
            );
        case "tatacapital":
            return (
                <div className="w-8 h-8 rounded-full bg-[#005a9c] flex items-center justify-center text-white font-black text-[8px] shrink-0 shadow-xs">
                    <span className="font-bold tracking-tighter">TATA</span>
                </div>
            );
        case "muthoot":
            return (
                <div className="w-8 h-8 rounded-md bg-[#e31837] flex items-center justify-center text-white font-black text-[8px] shrink-0 shadow-xs">
                    <span className="font-bold tracking-tighter">MUTH</span>
                </div>
            );
        case "bajaj":
            return (
                <div className="w-8 h-8 rounded-md bg-[#006cb5] flex items-center justify-center text-white font-black text-[9px] shrink-0 shadow-xs">
                    <span className="font-bold">BAJAJ</span>
                </div>
            );
        case "sundaram":
            return (
                <div className="w-8 h-8 rounded-full bg-white border border-[#005a9c]/30 flex items-center justify-center text-[#005a9c] font-black text-[8px] shrink-0 shadow-xs">
                    <span className="font-bold text-[#005a9c]">SUN</span>
                </div>
            );
        case "pnbhousing":
            return (
                <div className="w-8 h-8 rounded-md bg-[#9c182f] flex items-center justify-center text-[#ffb612] font-black text-[8px] shrink-0 shadow-xs">
                    <span className="font-bold text-[#ffb612]">PNBH</span>
                </div>
            );
        case "lichfl":
            return (
                <div className="w-8 h-8 rounded-full bg-[#003882] flex items-center justify-center text-[#ffd200] font-black text-[8px] shrink-0 shadow-xs border border-yellow-300">
                    <span className="font-extrabold text-[#ffd200]">LIC</span>
                </div>
            );
        default:
            return (
                <div className="w-8 h-8 rounded-full bg-[#FFF8D6] border border-[#F4C430]/40 flex items-center justify-center text-[#171717] font-extrabold text-xs shrink-0 shadow-xs">
                    {shortName.charAt(0) || name.charAt(0)}
                </div>
            );
    }
};

// ================= COMPREHENSIVE BANK DATA (WITH EXACT SCREENSHOT VALUES) =================
const BANK_CATEGORIES_DATA: BankCategoryGroup[] = [
    {
        category: "Public Sector Banks",
        banks: [
            {
                id: 1,
                name: "Canara Bank",
                shortName: "Canara",
                category: "Public Sector Banks",
                risk: "LOW RISK",
                logoType: "canara",
                tenures: {
                    "1 YEAR": { rate: "6.25%", senior: "6.75%", specialOffer: "444 DAYS", rateNum: 6.25, seniorNum: 6.75 },
                    "2 YEARS": { rate: "6.85%", senior: "7.35%", specialOffer: "444 DAYS", rateNum: 6.85, seniorNum: 7.35 },
                    "3 YEARS": { rate: "6.80%", senior: "7.30%", specialOffer: "444 DAYS", rateNum: 6.80, seniorNum: 7.30 },
                    "5 YEARS": { rate: "6.70%", senior: "7.20%", specialOffer: "444 DAYS", rateNum: 6.70, seniorNum: 7.20 },
                }
            },
            {
                id: 2,
                name: "Union Bank of India",
                shortName: "Union Bank",
                category: "Public Sector Banks",
                risk: "LOW RISK",
                logoType: "union",
                tenures: {
                    "1 YEAR": { rate: "5.9%", senior: "6.40%", specialOffer: "399 DAYS", rateNum: 5.90, seniorNum: 6.40 },
                    "2 YEARS": { rate: "6.75%", senior: "7.25%", specialOffer: "399 DAYS", rateNum: 6.75, seniorNum: 7.25 },
                    "3 YEARS": { rate: "6.70%", senior: "7.20%", specialOffer: "399 DAYS", rateNum: 6.70, seniorNum: 7.20 },
                    "5 YEARS": { rate: "6.50%", senior: "7.00%", specialOffer: "399 DAYS", rateNum: 6.50, seniorNum: 7.00 },
                }
            },
            {
                id: 3,
                name: "Punjab National Bank",
                shortName: "PNB",
                category: "Public Sector Banks",
                risk: "LOW RISK",
                logoType: "pnb",
                tenures: {
                    "1 YEAR": { rate: "5.8%", senior: "6.30%", specialOffer: "444 DAYS", rateNum: 5.80, seniorNum: 6.30 },
                    "2 YEARS": { rate: "6.80%", senior: "7.30%", specialOffer: "444 DAYS", rateNum: 6.80, seniorNum: 7.30 },
                    "3 YEARS": { rate: "7.00%", senior: "7.50%", specialOffer: "444 DAYS", rateNum: 7.00, seniorNum: 7.50 },
                    "5 YEARS": { rate: "6.50%", senior: "7.30%", specialOffer: "444 DAYS", rateNum: 6.50, seniorNum: 7.30 },
                }
            },
            {
                id: 4,
                name: "Indian Bank",
                shortName: "Indian Bank",
                category: "Public Sector Banks",
                risk: "LOW RISK",
                logoType: "indian",
                tenures: {
                    "1 YEAR": { rate: "5.25%", senior: "5.75%", specialOffer: "300 DAYS", rateNum: 5.25, seniorNum: 5.75 },
                    "2 YEARS": { rate: "6.50%", senior: "7.00%", specialOffer: "300 DAYS", rateNum: 6.50, seniorNum: 7.00 },
                    "3 YEARS": { rate: "6.25%", senior: "6.75%", specialOffer: "300 DAYS", rateNum: 6.25, seniorNum: 6.75 },
                    "5 YEARS": { rate: "6.10%", senior: "6.60%", specialOffer: "300 DAYS", rateNum: 6.10, seniorNum: 6.60 },
                }
            },
            {
                id: 5,
                name: "Bank of Baroda",
                shortName: "BoB",
                category: "Public Sector Banks",
                risk: "LOW RISK",
                logoType: "bob",
                tenures: {
                    "1 YEAR": { rate: "5.75%", senior: "6.25%", specialOffer: "399 DAYS", rateNum: 5.75, seniorNum: 6.25 },
                    "2 YEARS": { rate: "6.85%", senior: "7.35%", specialOffer: "399 DAYS", rateNum: 6.85, seniorNum: 7.35 },
                    "3 YEARS": { rate: "6.80%", senior: "7.30%", specialOffer: "399 DAYS", rateNum: 6.80, seniorNum: 7.30 },
                    "5 YEARS": { rate: "6.50%", senior: "7.50%", specialOffer: "399 DAYS", rateNum: 6.50, seniorNum: 7.50 },
                }
            },
            {
                id: 6,
                name: "Bank of India",
                shortName: "BOI",
                category: "Public Sector Banks",
                risk: "LOW RISK",
                logoType: "boi",
                tenures: {
                    "1 YEAR": { rate: "6%", senior: "6.50%", specialOffer: "666 DAYS", rateNum: 6.00, seniorNum: 6.50 },
                    "2 YEARS": { rate: "6.75%", senior: "7.25%", specialOffer: "666 DAYS", rateNum: 6.75, seniorNum: 7.25 },
                    "3 YEARS": { rate: "6.50%", senior: "7.00%", specialOffer: "666 DAYS", rateNum: 6.50, seniorNum: 7.00 },
                    "5 YEARS": { rate: "6.00%", senior: "6.50%", specialOffer: "666 DAYS", rateNum: 6.00, seniorNum: 6.50 },
                }
            },
            {
                id: 7,
                name: "Bank of Maharashtra",
                shortName: "BOM",
                category: "Public Sector Banks",
                risk: "LOW RISK",
                logoType: "bom",
                tenures: {
                    "1 YEAR": { rate: "5%", senior: "5.50%", specialOffer: "200 DAYS", rateNum: 5.00, seniorNum: 5.50 },
                    "2 YEARS": { rate: "6.50%", senior: "7.00%", specialOffer: "200 DAYS", rateNum: 6.50, seniorNum: 7.00 },
                    "3 YEARS": { rate: "6.50%", senior: "7.00%", specialOffer: "200 DAYS", rateNum: 6.50, seniorNum: 7.00 },
                    "5 YEARS": { rate: "6.00%", senior: "6.50%", specialOffer: "200 DAYS", rateNum: 6.00, seniorNum: 6.50 },
                }
            },
            {
                id: 8,
                name: "SBI",
                shortName: "SBI",
                category: "Public Sector Banks",
                risk: "LOW RISK",
                logoType: "sbi",
                tenures: {
                    "1 YEAR": { rate: "6%", senior: "6.50%", specialOffer: "AMRIT VRISHTI 444 DAYS", rateNum: 6.00, seniorNum: 6.50 },
                    "2 YEARS": { rate: "6.80%", senior: "7.30%", specialOffer: "AMRIT VRISHTI 444 DAYS", rateNum: 6.80, seniorNum: 7.30 },
                    "3 YEARS": { rate: "6.75%", senior: "7.25%", specialOffer: "AMRIT VRISHTI 444 DAYS", rateNum: 6.75, seniorNum: 7.25 },
                    "5 YEARS": { rate: "6.50%", senior: "7.50%", specialOffer: "AMRIT VRISHTI 444 DAYS", rateNum: 6.50, seniorNum: 7.50 },
                }
            }
        ]
    },
    {
        category: "Private Sector Banks",
        banks: [
            {
                id: 101,
                name: "RBL Bank",
                shortName: "RBL",
                category: "Private Sector Banks",
                risk: "LOW RISK",
                logoType: "rbl",
                tenures: {
                    "1 YEAR": { rate: "6.5%", senior: "7.00%", specialOffer: "SENIOR CITIZEN", rateNum: 6.50, seniorNum: 7.00 },
                    "2 YEARS": { rate: "7.50%", senior: "8.00%", specialOffer: "SENIOR CITIZEN", rateNum: 7.50, seniorNum: 8.00 },
                    "3 YEARS": { rate: "7.10%", senior: "7.60%", specialOffer: "SENIOR CITIZEN", rateNum: 7.10, seniorNum: 7.60 },
                    "5 YEARS": { rate: "6.60%", senior: "7.10%", specialOffer: "SENIOR CITIZEN", rateNum: 6.60, seniorNum: 7.10 },
                }
            },
            {
                id: 102,
                name: "IDFC First Bank",
                shortName: "IDFC First",
                category: "Private Sector Banks",
                risk: "LOW RISK",
                logoType: "idfc",
                tenures: {
                    "1 YEAR": { rate: "6.5%", senior: "7.00%", specialOffer: "500 DAYS", rateNum: 6.50, seniorNum: 7.00 },
                    "2 YEARS": { rate: "7.25%", senior: "7.75%", specialOffer: "500 DAYS", rateNum: 7.25, seniorNum: 7.75 },
                    "3 YEARS": { rate: "7.00%", senior: "7.50%", specialOffer: "500 DAYS", rateNum: 7.00, seniorNum: 7.50 },
                    "5 YEARS": { rate: "6.50%", senior: "7.00%", specialOffer: "500 DAYS", rateNum: 6.50, seniorNum: 7.00 },
                }
            },
            {
                id: 103,
                name: "Bandhan Bank",
                shortName: "Bandhan",
                category: "Private Sector Banks",
                risk: "LOW RISK",
                logoType: "bandhan",
                tenures: {
                    "1 YEAR": { rate: "6%", senior: "6.50%", specialOffer: "SENIOR CITIZEN", rateNum: 6.00, seniorNum: 6.50 },
                    "2 YEARS": { rate: "7.25%", senior: "7.75%", specialOffer: "SENIOR CITIZEN", rateNum: 7.25, seniorNum: 7.75 },
                    "3 YEARS": { rate: "7.00%", senior: "7.50%", specialOffer: "SENIOR CITIZEN", rateNum: 7.00, seniorNum: 7.50 },
                    "5 YEARS": { rate: "5.85%", senior: "6.60%", specialOffer: "SENIOR CITIZEN", rateNum: 5.85, seniorNum: 6.60 },
                }
            },
            {
                id: 104,
                name: "YES Bank",
                shortName: "YES Bank",
                category: "Private Sector Banks",
                risk: "LOW RISK",
                logoType: "yesbank",
                tenures: {
                    "1 YEAR": { rate: "6.25%", senior: "6.75%", specialOffer: "18 MONTHS", rateNum: 6.25, seniorNum: 6.75 },
                    "2 YEARS": { rate: "7.25%", senior: "7.75%", specialOffer: "18 MONTHS", rateNum: 7.25, seniorNum: 7.75 },
                    "3 YEARS": { rate: "7.00%", senior: "7.50%", specialOffer: "18 MONTHS", rateNum: 7.00, seniorNum: 7.50 },
                    "5 YEARS": { rate: "6.50%", senior: "7.25%", specialOffer: "18 MONTHS", rateNum: 6.50, seniorNum: 7.25 },
                }
            },
            {
                id: 105,
                name: "IndusInd Bank",
                shortName: "IndusInd",
                category: "Private Sector Banks",
                risk: "LOW RISK",
                logoType: "indusind",
                tenures: {
                    "1 YEAR": { rate: "6.75%", senior: "7.25%", specialOffer: "1 YEAR 7 MONTHS", rateNum: 6.75, seniorNum: 7.25 },
                    "2 YEARS": { rate: "7.75%", senior: "8.25%", specialOffer: "1 YEAR 7 MONTHS", rateNum: 7.75, seniorNum: 8.25 },
                    "3 YEARS": { rate: "7.25%", senior: "7.75%", specialOffer: "1 YEAR 7 MONTHS", rateNum: 7.25, seniorNum: 7.75 },
                    "5 YEARS": { rate: "7.00%", senior: "7.50%", specialOffer: "1 YEAR 7 MONTHS", rateNum: 7.00, seniorNum: 7.50 },
                }
            },
            {
                id: 106,
                name: "Federal Bank",
                shortName: "Federal",
                category: "Private Sector Banks",
                risk: "LOW RISK",
                logoType: "federal",
                tenures: {
                    "1 YEAR": { rate: "6%", senior: "6.50%", specialOffer: "777 DAYS", rateNum: 6.00, seniorNum: 6.50 },
                    "2 YEARS": { rate: "7.10%", senior: "7.60%", specialOffer: "777 DAYS", rateNum: 7.10, seniorNum: 7.60 },
                    "3 YEARS": { rate: "7.00%", senior: "7.50%", specialOffer: "777 DAYS", rateNum: 7.00, seniorNum: 7.50 },
                    "5 YEARS": { rate: "6.60%", senior: "7.10%", specialOffer: "777 DAYS", rateNum: 6.60, seniorNum: 7.10 },
                }
            },
            {
                id: 107,
                name: "Kotak Mahindra Bank",
                shortName: "Kotak",
                category: "Private Sector Banks",
                risk: "LOW RISK",
                logoType: "kotak",
                tenures: {
                    "1 YEAR": { rate: "6%", senior: "6.50%", specialOffer: "23 MONTHS", rateNum: 6.00, seniorNum: 6.50 },
                    "2 YEARS": { rate: "7.15%", senior: "7.65%", specialOffer: "23 MONTHS", rateNum: 7.15, seniorNum: 7.65 },
                    "3 YEARS": { rate: "7.00%", senior: "7.60%", specialOffer: "23 MONTHS", rateNum: 7.00, seniorNum: 7.60 },
                    "5 YEARS": { rate: "6.20%", senior: "6.70%", specialOffer: "23 MONTHS", rateNum: 6.20, seniorNum: 6.70 },
                }
            },
            {
                id: 108,
                name: "ICICI Bank",
                shortName: "ICICI",
                category: "Private Sector Banks",
                risk: "LOW RISK",
                logoType: "icici",
                tenures: {
                    "1 YEAR": { rate: "6%", senior: "6.50%", specialOffer: "15 MONTHS", rateNum: 6.00, seniorNum: 6.50 },
                    "2 YEARS": { rate: "7.20%", senior: "7.75%", specialOffer: "15 MONTHS", rateNum: 7.20, seniorNum: 7.75 },
                    "3 YEARS": { rate: "7.00%", senior: "7.50%", specialOffer: "15 MONTHS", rateNum: 7.00, seniorNum: 7.50 },
                    "5 YEARS": { rate: "6.90%", senior: "7.50%", specialOffer: "15 MONTHS", rateNum: 6.90, seniorNum: 7.50 },
                }
            },
            {
                id: 109,
                name: "Axis Bank",
                shortName: "Axis",
                category: "Private Sector Banks",
                risk: "LOW RISK",
                logoType: "axis",
                tenures: {
                    "1 YEAR": { rate: "6%", senior: "6.50%", specialOffer: "TAX-SAVING FD", rateNum: 6.00, seniorNum: 6.50 },
                    "2 YEARS": { rate: "7.20%", senior: "7.75%", specialOffer: "TAX-SAVING FD", rateNum: 7.20, seniorNum: 7.75 },
                    "3 YEARS": { rate: "7.10%", senior: "7.60%", specialOffer: "TAX-SAVING FD", rateNum: 7.10, seniorNum: 7.60 },
                    "5 YEARS": { rate: "7.00%", senior: "7.75%", specialOffer: "TAX-SAVING FD", rateNum: 7.00, seniorNum: 7.75 },
                }
            },
            {
                id: 110,
                name: "HDFC Bank",
                shortName: "HDFC",
                category: "Private Sector Banks",
                risk: "LOW RISK",
                logoType: "hdfc",
                tenures: {
                    "1 YEAR": { rate: "6%", senior: "6.50%", specialOffer: "55 MONTHS", rateNum: 6.00, seniorNum: 6.50 },
                    "2 YEARS": { rate: "7.15%", senior: "7.65%", specialOffer: "55 MONTHS", rateNum: 7.15, seniorNum: 7.65 },
                    "3 YEARS": { rate: "7.00%", senior: "7.50%", specialOffer: "55 MONTHS", rateNum: 7.00, seniorNum: 7.50 },
                    "5 YEARS": { rate: "7.00%", senior: "7.50%", specialOffer: "55 MONTHS", rateNum: 7.00, seniorNum: 7.50 },
                }
            }
        ]
    },
    {
        category: "Small Finance Banks",
        banks: [
            {
                id: 201,
                name: "Suryoday Small Finance",
                shortName: "Suryoday",
                category: "Small Finance Banks",
                risk: "LOW RISK",
                logoType: "suryoday",
                tenures: {
                    "1 YEAR": { rate: "7.5%", senior: "8.00%", specialOffer: "SENIOR CITIZEN", rateNum: 7.50, seniorNum: 8.00 },
                    "2 YEARS": { rate: "8.65%", senior: "9.15%", specialOffer: "SENIOR CITIZEN", rateNum: 8.65, seniorNum: 9.15 },
                    "3 YEARS": { rate: "8.00%", senior: "8.50%", specialOffer: "SENIOR CITIZEN", rateNum: 8.00, seniorNum: 8.50 },
                    "5 YEARS": { rate: "8.25%", senior: "8.75%", specialOffer: "SENIOR CITIZEN", rateNum: 8.25, seniorNum: 8.75 },
                }
            },
            {
                id: 202,
                name: "Jana Small Finance",
                shortName: "Jana",
                category: "Small Finance Banks",
                risk: "LOW RISK",
                logoType: "jana",
                tenures: {
                    "1 YEAR": { rate: "7.25%", senior: "7.75%", specialOffer: "1 YEAR SPECIAL", rateNum: 7.25, seniorNum: 7.75 },
                    "2 YEARS": { rate: "8.25%", senior: "8.75%", specialOffer: "1 YEAR SPECIAL", rateNum: 8.25, seniorNum: 8.75 },
                    "3 YEARS": { rate: "8.25%", senior: "8.75%", specialOffer: "1 YEAR SPECIAL", rateNum: 8.25, seniorNum: 8.75 },
                    "5 YEARS": { rate: "7.25%", senior: "7.75%", specialOffer: "1 YEAR SPECIAL", rateNum: 7.25, seniorNum: 7.75 },
                }
            },
            {
                id: 203,
                name: "Utkarsh Small Finance",
                shortName: "Utkarsh",
                category: "Small Finance Banks",
                risk: "LOW RISK",
                logoType: "utkarsh",
                tenures: {
                    "1 YEAR": { rate: "7%", senior: "7.50%", specialOffer: "SENIOR CITIZEN", rateNum: 7.00, seniorNum: 7.50 },
                    "2 YEARS": { rate: "8.50%", senior: "9.10%", specialOffer: "SENIOR CITIZEN", rateNum: 8.50, seniorNum: 9.10 },
                    "3 YEARS": { rate: "8.25%", senior: "8.85%", specialOffer: "SENIOR CITIZEN", rateNum: 8.25, seniorNum: 8.85 },
                    "5 YEARS": { rate: "7.75%", senior: "8.35%", specialOffer: "SENIOR CITIZEN", rateNum: 7.75, seniorNum: 8.35 },
                }
            },
            {
                id: 204,
                name: "Ujjivan Small Finance",
                shortName: "Ujjivan",
                category: "Small Finance Banks",
                risk: "LOW RISK",
                logoType: "ujjivan",
                tenures: {
                    "1 YEAR": { rate: "7.5%", senior: "8.00%", specialOffer: "560 DAYS", rateNum: 7.50, seniorNum: 8.00 },
                    "2 YEARS": { rate: "8.25%", senior: "8.75%", specialOffer: "560 DAYS", rateNum: 8.25, seniorNum: 8.75 },
                    "3 YEARS": { rate: "7.75%", senior: "8.25%", specialOffer: "560 DAYS", rateNum: 7.75, seniorNum: 8.25 },
                    "5 YEARS": { rate: "7.20%", senior: "7.70%", specialOffer: "560 DAYS", rateNum: 7.20, seniorNum: 7.70 },
                }
            },
            {
                id: 205,
                name: "Equitas Small Finance",
                shortName: "Equitas",
                category: "Small Finance Banks",
                risk: "LOW RISK",
                logoType: "equitas",
                tenures: {
                    "1 YEAR": { rate: "7.25%", senior: "7.75%", specialOffer: "888 DAYS", rateNum: 7.25, seniorNum: 7.75 },
                    "2 YEARS": { rate: "8.25%", senior: "8.75%", specialOffer: "888 DAYS", rateNum: 8.25, seniorNum: 8.75 },
                    "3 YEARS": { rate: "8.00%", senior: "8.50%", specialOffer: "888 DAYS", rateNum: 8.00, seniorNum: 8.50 },
                    "5 YEARS": { rate: "7.25%", senior: "7.75%", specialOffer: "888 DAYS", rateNum: 7.25, seniorNum: 7.75 },
                }
            },
            {
                id: 206,
                name: "Fincare Small Finance",
                shortName: "Fincare",
                category: "Small Finance Banks",
                risk: "LOW RISK",
                logoType: "fincare",
                tenures: {
                    "1 YEAR": { rate: "7.15%", senior: "7.65%", specialOffer: "SENIOR CITIZEN", rateNum: 7.15, seniorNum: 7.65 },
                    "2 YEARS": { rate: "8.11%", senior: "8.61%", specialOffer: "SENIOR CITIZEN", rateNum: 8.11, seniorNum: 8.61 },
                    "3 YEARS": { rate: "8.00%", senior: "8.50%", specialOffer: "SENIOR CITIZEN", rateNum: 8.00, seniorNum: 8.50 },
                    "5 YEARS": { rate: "7.50%", senior: "8.00%", specialOffer: "SENIOR CITIZEN", rateNum: 7.50, seniorNum: 8.00 },
                }
            },
            {
                id: 207,
                name: "AU Small Finance Bank",
                shortName: "AU SFB",
                category: "Small Finance Banks",
                risk: "LOW RISK",
                logoType: "au",
                tenures: {
                    "1 YEAR": { rate: "6.75%", senior: "7.25%", specialOffer: "711 DAYS", rateNum: 6.75, seniorNum: 7.25 },
                    "2 YEARS": { rate: "8.00%", senior: "8.50%", specialOffer: "711 DAYS", rateNum: 8.00, seniorNum: 8.50 },
                    "3 YEARS": { rate: "7.50%", senior: "8.00%", specialOffer: "711 DAYS", rateNum: 7.50, seniorNum: 8.00 },
                    "5 YEARS": { rate: "7.25%", senior: "7.75%", specialOffer: "711 DAYS", rateNum: 7.25, seniorNum: 7.75 },
                }
            }
        ]
    },
    {
        category: "NBFCs",
        banks: [
            {
                id: 301,
                name: "Shriram Finance",
                shortName: "Shriram",
                category: "NBFCs",
                risk: "MODERATE",
                logoType: "shriram",
                tenures: {
                    "1 YEAR": { rate: "7.8%", senior: "8.30%", specialOffer: "MAHILA/SENIOR CITIZEN", rateNum: 7.80, seniorNum: 8.30 },
                    "2 YEARS": { rate: "8.40%", senior: "8.90%", specialOffer: "MAHILA/SENIOR CITIZEN", rateNum: 8.40, seniorNum: 8.90 },
                    "3 YEARS": { rate: "8.80%", senior: "9.30%", specialOffer: "MAHILA/SENIOR CITIZEN", rateNum: 8.80, seniorNum: 9.30 },
                    "5 YEARS": { rate: "8.80%", senior: "9.30%", specialOffer: "MAHILA/SENIOR CITIZEN", rateNum: 8.80, seniorNum: 9.30 },
                }
            },
            {
                id: 302,
                name: "Mahindra Finance",
                shortName: "Mahindra",
                category: "NBFCs",
                risk: "MODERATE",
                logoType: "mahindra",
                tenures: {
                    "1 YEAR": { rate: "7.5%", senior: "8.00%", specialOffer: "40 MONTHS", rateNum: 7.50, seniorNum: 8.00 },
                    "2 YEARS": { rate: "8.05%", senior: "8.30%", specialOffer: "40 MONTHS", rateNum: 8.05, seniorNum: 8.30 },
                    "3 YEARS": { rate: "8.10%", senior: "8.35%", specialOffer: "40 MONTHS", rateNum: 8.10, seniorNum: 8.35 },
                    "5 YEARS": { rate: "8.10%", senior: "8.35%", specialOffer: "40 MONTHS", rateNum: 8.10, seniorNum: 8.35 },
                }
            },
            {
                id: 303,
                name: "Tata Capital",
                shortName: "Tata Capital",
                category: "NBFCs",
                risk: "MODERATE",
                logoType: "tatacapital",
                tenures: {
                    "1 YEAR": { rate: "7.5%", senior: "8.00%", specialOffer: "SENIOR CITIZEN", rateNum: 7.50, seniorNum: 8.00 },
                    "2 YEARS": { rate: "8.10%", senior: "8.35%", specialOffer: "SENIOR CITIZEN", rateNum: 8.10, seniorNum: 8.35 },
                    "3 YEARS": { rate: "8.15%", senior: "8.40%", specialOffer: "SENIOR CITIZEN", rateNum: 8.15, seniorNum: 8.40 },
                    "5 YEARS": { rate: "7.90%", senior: "8.15%", specialOffer: "SENIOR CITIZEN", rateNum: 7.90, seniorNum: 8.15 },
                }
            },
            {
                id: 304,
                name: "Muthoot Finance",
                shortName: "Muthoot",
                category: "NBFCs",
                risk: "MODERATE",
                logoType: "muthoot",
                tenures: {
                    "1 YEAR": { rate: "7.25%", senior: "7.75%", specialOffer: "HIGH YIELD", rateNum: 7.25, seniorNum: 7.75 },
                    "2 YEARS": { rate: "8.25%", senior: "8.75%", specialOffer: "HIGH YIELD", rateNum: 8.25, seniorNum: 8.75 },
                    "3 YEARS": { rate: "8.00%", senior: "8.50%", specialOffer: "HIGH YIELD", rateNum: 8.00, seniorNum: 8.50 },
                    "5 YEARS": { rate: "7.75%", senior: "8.25%", specialOffer: "HIGH YIELD", rateNum: 7.75, seniorNum: 8.25 },
                }
            },
            {
                id: 305,
                name: "Bajaj Finance",
                shortName: "Bajaj Finance",
                category: "NBFCs",
                risk: "MODERATE",
                logoType: "bajaj",
                tenures: {
                    "1 YEAR": { rate: "7.4%", senior: "7.90%", specialOffer: "33 MONTHS", rateNum: 7.40, seniorNum: 7.90 },
                    "2 YEARS": { rate: "8.15%", senior: "8.40%", specialOffer: "33 MONTHS", rateNum: 8.15, seniorNum: 8.40 },
                    "3 YEARS": { rate: "8.60%", senior: "8.85%", specialOffer: "33 MONTHS", rateNum: 8.60, seniorNum: 8.85 },
                    "5 YEARS": { rate: "8.60%", senior: "8.85%", specialOffer: "33 MONTHS", rateNum: 8.60, seniorNum: 8.85 },
                }
            },
            {
                id: 306,
                name: "Sundaram Finance",
                shortName: "Sundaram",
                category: "NBFCs",
                risk: "MODERATE",
                logoType: "sundaram",
                tenures: {
                    "1 YEAR": { rate: "7.15%", senior: "7.65%", specialOffer: "36 MONTHS", rateNum: 7.15, seniorNum: 7.65 },
                    "2 YEARS": { rate: "7.90%", senior: "8.40%", specialOffer: "36 MONTHS", rateNum: 7.90, seniorNum: 8.40 },
                    "3 YEARS": { rate: "7.90%", senior: "8.40%", specialOffer: "36 MONTHS", rateNum: 7.90, seniorNum: 8.40 },
                    "5 YEARS": { rate: "7.90%", senior: "8.40%", specialOffer: "36 MONTHS", rateNum: 7.90, seniorNum: 8.40 },
                }
            },
            {
                id: 307,
                name: "PNB Housing Finance",
                shortName: "PNB Housing",
                category: "NBFCs",
                risk: "MODERATE",
                logoType: "pnbhousing",
                tenures: {
                    "1 YEAR": { rate: "7.25%", senior: "7.75%", specialOffer: "SPECIAL TENURE", rateNum: 7.25, seniorNum: 7.75 },
                    "2 YEARS": { rate: "7.50%", senior: "7.75%", specialOffer: "SPECIAL TENURE", rateNum: 7.50, seniorNum: 7.75 },
                    "3 YEARS": { rate: "7.70%", senior: "7.95%", specialOffer: "SPECIAL TENURE", rateNum: 7.70, seniorNum: 7.95 },
                    "5 YEARS": { rate: "7.65%", senior: "7.90%", specialOffer: "SPECIAL TENURE", rateNum: 7.65, seniorNum: 7.90 },
                }
            },
            {
                id: 308,
                name: "LIC Housing Finance",
                shortName: "LIC HFL",
                category: "NBFCs",
                risk: "MODERATE",
                logoType: "lichfl",
                tenures: {
                    "1 YEAR": { rate: "7.25%", senior: "7.75%", specialOffer: "18 MONTHS", rateNum: 7.25, seniorNum: 7.75 },
                    "2 YEARS": { rate: "7.50%", senior: "7.75%", specialOffer: "18 MONTHS", rateNum: 7.50, seniorNum: 7.75 },
                    "3 YEARS": { rate: "7.75%", senior: "8.00%", specialOffer: "18 MONTHS", rateNum: 7.75, seniorNum: 8.00 },
                    "5 YEARS": { rate: "7.75%", senior: "8.00%", specialOffer: "18 MONTHS", rateNum: 7.75, seniorNum: 8.00 },
                }
            }
        ]
    }
];

type TenureType = "1 YEAR" | "2 YEARS" | "3 YEARS" | "5 YEARS";
type RateFilterType = "ALL RATES" | "HIGH" | "LOW";
type RiskFilterType = "ALL" | "LOW RISK" | "MODERATE" | "HIGH RISK";

interface BankListProps {
    onApplyBank?: (bankName: string) => void;
}

export default function BankList({ onApplyBank }: BankListProps) {
    const [activeTenure, setActiveTenure] = useState<TenureType>("1 YEAR");
    const [rateFilter, setRateFilter] = useState<RateFilterType>("ALL RATES");
    const [riskFilter, setRiskFilter] = useState<RiskFilterType>("ALL");
    const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
        "Public Sector Banks": true,
        "Private Sector Banks": true,
        "Small Finance Banks": true,
        "NBFCs": true,
    });
    const [selectedBanks, setSelectedBanks] = useState<BankItem[]>([]);
    const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

    const toggleCategory = (cat: string) => {
        setOpenCategories((prev) => ({
            ...prev,
            [cat]: !prev[cat]
        }));
    };

    const handleToggleCompare = (bank: BankItem) => {
        setSelectedBanks((prev) => {
            const exists = prev.some((b) => b.id === bank.id);
            if (exists) {
                return prev.filter((b) => b.id !== bank.id);
            }
            if (prev.length >= 4) {
                alert("You can compare up to 4 banks at a time.");
                return prev;
            }
            return [...prev, bank];
        });
    };

    // Filter banks within each category based on selected filters
    const filterBanks = (banks: BankItem[]) => {
        return banks.filter((b) => {
            const tenureData = b.tenures[activeTenure];
            const currentRate = tenureData.rateNum;

            // Rate level filter
            if (rateFilter === "HIGH" && currentRate < 7.5) return false;
            if (rateFilter === "LOW" && currentRate >= 7.5) return false;

            // Risk filter
            if (riskFilter !== "ALL" && b.risk !== riskFilter) return false;

            return true;
        });
    };

    // Prepare chart data for compare modal
    const compareChartData = selectedBanks.map((b) => {
        const tenureData = b.tenures[activeTenure];
        return {
            name: b.shortName || b.name,
            regular: tenureData.rateNum,
            senior: tenureData.seniorNum,
        };
    });

    return (
        <div className="w-full font-sans">
            {/* 1. TOP HEADER & TITLE (Page Matching Gold / Neutral Theme) */}
            <div className="text-center max-w-4xl mx-auto mb-8">
                {/* Badge: COMPARE & SAVE */}
                <div className="inline-flex items-center justify-center mb-4">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFF8D6] border border-[#F4C430]/40 text-[#171717] text-xs font-bold uppercase tracking-wider shadow-xs">
                        <TrendingUp className="w-3.5 h-3.5 text-[#F4C430]" />
                        Compare &amp; Save
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#171717] tracking-tight leading-tight mb-2">
                    Compare <span className="text-[#F4C430]">FD Rates</span> Across Banks
                </h2>

                {/* Underline Bar */}
                <div className="w-16 h-1.5 mx-auto rounded-full bg-[#F4C430] mb-4" />

                {/* Subtitle */}
                <p className="text-[#6B6B6B] max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
                    Find the best interest rates from top-rated banks and NBFCs, tailored to your financial goals.
                </p>
            </div>

            {/* 2. TENURE SELECTOR PILLS */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 flex-wrap">
                {(["1 YEAR", "2 YEARS", "3 YEARS", "5 YEARS"] as TenureType[]).map((tenure) => {
                    const isActive = activeTenure === tenure;
                    return (
                        <button
                            key={tenure}
                            type="button"
                            onClick={() => setActiveTenure(tenure)}
                            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                                isActive
                                    ? "bg-[#F4C430] text-[#171717] shadow-md shadow-[#F4C430]/30 scale-105 border border-[#F4C430]"
                                    : "bg-white border border-[#E5E5E0] text-[#6B6B6B] hover:border-[#F4C430] hover:text-[#171717] shadow-xs"
                            }`}
                        >
                            {tenure}
                        </button>
                    );
                })}
            </div>

            {/* 3. FILTER BOX (RATE LEVEL & RISK RATING) */}
            <div className="bg-white border border-[#E5E5E0] rounded-2xl p-4 sm:p-5 shadow-xs max-w-4xl mx-auto mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E0]">
                    {/* Left: RATE LEVEL */}
                    <div className="flex flex-col gap-3 md:pr-4">
                        <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#171717]">
                            <Percent className="w-3.5 h-3.5 text-[#F4C430]" />
                            <span>Rate Level</span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <button
                                type="button"
                                onClick={() => setRateFilter("ALL RATES")}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                                    rateFilter === "ALL RATES"
                                        ? "bg-[#F4C430] text-[#171717] font-extrabold shadow-xs border border-[#F4C430]"
                                        : "bg-white border border-[#E5E5E0] text-[#6B6B6B] hover:border-[#F4C430] hover:text-[#171717]"
                                }`}
                            >
                                ALL RATES
                            </button>
                            <button
                                type="button"
                                onClick={() => setRateFilter("HIGH")}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                                    rateFilter === "HIGH"
                                        ? "bg-[#F4C430] text-[#171717] font-extrabold shadow-xs border border-[#F4C430]"
                                        : "bg-white border border-[#E5E5E0] text-[#6B6B6B] hover:border-[#F4C430] hover:text-[#171717]"
                                }`}
                            >
                                ≥ 7.5% (HIGH)
                            </button>
                            <button
                                type="button"
                                onClick={() => setRateFilter("LOW")}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                                    rateFilter === "LOW"
                                        ? "bg-[#F4C430] text-[#171717] font-extrabold shadow-xs border border-[#F4C430]"
                                        : "bg-white border border-[#E5E5E0] text-[#6B6B6B] hover:border-[#F4C430] hover:text-[#171717]"
                                }`}
                            >
                                &lt; 7.5% (LOW)
                            </button>
                        </div>
                    </div>

                    {/* Right: RISK RATING */}
                    <div className="flex flex-col gap-3 pt-4 md:pt-0 md:pl-6">
                        <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#171717]">
                            <Shield className="w-3.5 h-3.5 text-[#F4C430]" />
                            <span>Risk Rating</span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <button
                                type="button"
                                onClick={() => setRiskFilter("ALL")}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                                    riskFilter === "ALL"
                                        ? "bg-[#F4C430] text-[#171717] font-extrabold shadow-xs border border-[#F4C430]"
                                        : "bg-white border border-[#E5E5E0] text-[#6B6B6B] hover:border-[#F4C430] hover:text-[#171717]"
                                }`}
                            >
                                <span className={`w-2 h-2 rounded-full ${riskFilter === "ALL" ? "bg-[#171717]" : "border border-[#6B6B6B]"}`} />
                                ALL
                            </button>
                            <button
                                type="button"
                                onClick={() => setRiskFilter("LOW RISK")}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                                    riskFilter === "LOW RISK"
                                        ? "bg-[#F4C430] text-[#171717] font-extrabold shadow-xs border border-[#F4C430]"
                                        : "bg-white border border-[#E5E5E0] text-[#6B6B6B] hover:border-[#F4C430] hover:text-[#171717]"
                                }`}
                            >
                                <span className={`w-2 h-2 rounded-full ${riskFilter === "LOW RISK" ? "bg-[#171717]" : "border border-[#6B6B6B]"}`} />
                                LOW RISK
                            </button>
                            <button
                                type="button"
                                onClick={() => setRiskFilter("MODERATE")}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                                    riskFilter === "MODERATE"
                                        ? "bg-[#F4C430] text-[#171717] font-extrabold shadow-xs border border-[#F4C430]"
                                        : "bg-white border border-[#E5E5E0] text-[#6B6B6B] hover:border-[#F4C430] hover:text-[#171717]"
                                }`}
                            >
                                <span className={`w-2 h-2 rounded-full ${riskFilter === "MODERATE" ? "bg-[#171717]" : "border border-[#6B6B6B]"}`} />
                                MODERATE
                            </button>
                            <button
                                type="button"
                                onClick={() => setRiskFilter("HIGH RISK")}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                                    riskFilter === "HIGH RISK"
                                        ? "bg-[#F4C430] text-[#171717] font-extrabold shadow-xs border border-[#F4C430]"
                                        : "bg-white border border-[#E5E5E0] text-[#6B6B6B] hover:border-[#F4C430] hover:text-[#171717]"
                                }`}
                            >
                                <span className={`w-2 h-2 rounded-full ${riskFilter === "HIGH RISK" ? "bg-[#171717]" : "border border-[#6B6B6B]"}`} />
                                HIGH RISK
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. CATEGORIES ACCORDIONS */}
            <div className="space-y-6 max-w-5xl mx-auto">
                {BANK_CATEGORIES_DATA.map((catGroup) => {
                    const filteredBanks = filterBanks(catGroup.banks);
                    const isOpen = openCategories[catGroup.category] ?? false;

                    return (
                        <div
                            key={catGroup.category}
                            className="bg-white rounded-2xl shadow-sm border border-[#E5E5E0] overflow-hidden transition-all"
                        >
                            {/* Accordion Header Banner (Page-Aligned Dark Charcoal + Bharati Gold Badge) */}
                            <button
                                type="button"
                                onClick={() => toggleCategory(catGroup.category)}
                                className="w-full px-6 py-4.5 bg-[#171717] flex items-center justify-between text-white cursor-pointer hover:bg-[#222222] transition-all border-b border-[#292929]"
                            >
                                <div className="flex items-center gap-3">
                                    <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
                                        {catGroup.category}
                                    </h3>
                                    <span className="px-3 py-0.5 rounded-full bg-[#FFF8D6] text-[#171717] font-bold text-xs uppercase tracking-wider border border-[#F4C430]/40">
                                        {catGroup.banks.length} PLANS
                                    </span>
                                </div>

                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#F4C430]" /> : <ChevronDown className="w-5 h-5 text-white" />}
                                </div>
                            </button>

                            {/* Table Content */}
                            {isOpen && (
                                <div className="p-2 sm:p-4 bg-white overflow-x-auto">
                                    {filteredBanks.length === 0 ? (
                                        <div className="py-12 text-center text-[#6B6B6B]">
                                            <p className="text-sm font-semibold">No plans match the selected filters in this category.</p>
                                            <button
                                                type="button"
                                                onClick={() => { setRateFilter("ALL RATES"); setRiskFilter("ALL"); }}
                                                className="mt-2 text-xs font-bold text-[#F4C430] hover:underline cursor-pointer"
                                            >
                                                Reset Filters
                                            </button>
                                        </div>
                                    ) : (
                                        <table className="w-full text-left border-collapse min-w-[700px]">
                                            <thead>
                                                <tr className="border-b border-[#E5E5E0] bg-[#F5F5F3] text-[11px] font-extrabold uppercase tracking-wider text-[#6B6B6B]">
                                                    <th className="py-4 px-4">Bank Name</th>
                                                    <th className="py-4 px-4">Regular Rate</th>
                                                    <th className="py-4 px-4">Senior Citizen</th>
                                                    <th className="py-4 px-4">Special Offer</th>
                                                    <th className="py-4 px-4 text-center">Compare</th>
                                                    <th className="py-4 px-4 text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-[#E5E5E0] text-sm">
                                                {filteredBanks.map((bank) => {
                                                    const tenureInfo = bank.tenures[activeTenure];
                                                    const isChecked = selectedBanks.some((b) => b.id === bank.id);

                                                    return (
                                                        <tr key={bank.id} className="hover:bg-[#FFFDF5] transition-colors group">
                                                            {/* Bank Name + Logo */}
                                                            <td className="py-4 px-4">
                                                                <div className="flex items-center gap-3">
                                                                    <BankLogo name={bank.name} shortName={bank.shortName} logoType={bank.logoType} />
                                                                    <div>
                                                                        <span className="font-bold text-[#E91E63] block group-hover:text-[#E91E63] transition-colors">
                                                                            {bank.name}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </td>

                                                            {/* Regular Rate */}
                                                            <td className="py-4 px-4 font-black text-[#171717] text-base">
                                                                {tenureInfo.rate}
                                                            </td>

                                                            {/* Senior Citizen */}
                                                            <td className="py-4 px-4 font-black text-[#198754] text-base">
                                                                {tenureInfo.senior}
                                                            </td>

                                                            {/* Special Offer */}
                                                            <td className="py-4 px-4">
                                                                <span className="inline-block px-3 py-1.5 rounded-lg bg-[#FFF8D6] border border-[#F4C430]/40 text-[#171717] font-bold text-xs uppercase tracking-tight">
                                                                    {tenureInfo.specialOffer}
                                                                </span>
                                                            </td>

                                                            {/* Compare Checkbox */}
                                                            <td className="py-4 px-4 text-center">
                                                                <div className="flex justify-center items-center">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={isChecked}
                                                                        onChange={() => handleToggleCompare(bank)}
                                                                        aria-label={`Compare ${bank.name}`}
                                                                        className="w-5 h-5 rounded-md border-2 border-slate-300 text-[#F4C430] focus:ring-[#F4C430] focus:ring-offset-0 cursor-pointer accent-[#F4C430] transition-all"
                                                                    />
                                                                </div>
                                                            </td>

                                                            {/* Action Button */}
                                                            <td className="py-4 px-4 text-center">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        if (onApplyBank) {
                                                                            onApplyBank(bank.name);
                                                                        }
                                                                    }}
                                                                    className="px-5 py-2.5 rounded-xl font-extrabold text-xs text-[#171717] uppercase tracking-wider bg-[#F4C430] hover:bg-[#FFD21F] shadow-xs hover:shadow-md active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                                                                >
                                                                    Apply Now
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* 5. FLOATING COMPARE BOTTOM BAR */}
            {selectedBanks.length > 0 && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md px-6 py-3.5 rounded-2xl shadow-2xl border border-[#E5E5E0] flex items-center gap-4 max-w-lg w-[90%]">
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-[#171717]">
                            {selectedBanks.length} of 4 Banks Selected
                        </p>
                        <div className="flex items-center gap-1.5 mt-1 overflow-x-auto no-scrollbar py-0.5">
                            {selectedBanks.map((b) => (
                                <span
                                    key={b.id}
                                    className="text-[11px] font-semibold bg-[#FFF8D6] text-[#171717] px-2.5 py-0.5 rounded-full border border-[#F4C430]/40 shrink-0"
                                >
                                    {b.shortName || b.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            type="button"
                            onClick={() => setSelectedBanks([])}
                            aria-label="Clear selection"
                            className="p-2 rounded-xl text-[#6B6B6B] hover:text-[#171717] hover:bg-[#F5F5F3] transition-colors cursor-pointer"
                        >
                            <X className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsCompareModalOpen(true)}
                            className="px-4 py-2 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl font-bold text-xs shadow-md cursor-pointer whitespace-nowrap active:scale-95 transition-all"
                        >
                            Compare Now
                        </button>
                    </div>
                </div>
            )}

            {/* 6. COMPARISON SIDE-BY-SIDE MODAL */}
            {isCompareModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E5E0] relative max-h-[90vh] overflow-y-auto">
                        <button
                            type="button"
                            onClick={() => setIsCompareModalOpen(false)}
                            className="absolute top-4 right-4 p-2 rounded-full text-[#6B6B6B] hover:text-[#171717] hover:bg-[#F5F5F3] cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="mb-6">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#171717] bg-[#FFF8D6] px-3 py-1 rounded-full border border-[#F4C430]/40 inline-block">
                                Selected Tenure: {activeTenure}
                            </span>
                            <h3 className="text-2xl font-black text-[#171717] mt-2">
                                Bank FD Rate Comparison
                            </h3>
                        </div>

                        {/* Visual Bar Chart */}
                        <div className="h-60 w-full mb-6">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={compareChartData} margin={{ top: 20, right: 20, left: -20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E0" />
                                    <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6B6B6B' }} />
                                    <YAxis domain={[4, 10]} tick={{ fontSize: 11, fill: '#6B6B6B' }} unit="%" />
                                    <Tooltip formatter={(value) => [`${value}%`, 'Interest Rate']} />
                                    <Bar dataKey="regular" name="Regular Rate" fill="#171717" radius={[6, 6, 0, 0]} />
                                    <Bar dataKey="senior" name="Senior Citizen Rate" fill="#E91E63" radius={[6, 6, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Side by Side Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {selectedBanks.map((b) => {
                                const tenureInfo = b.tenures[activeTenure];
                                return (
                                    <div key={b.id} className="p-4 rounded-2xl bg-[#FFFDF5] border border-[#E5E5E0] flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <BankLogo name={b.name} shortName={b.shortName} logoType={b.logoType} />
                                                <h4 className="font-bold text-sm text-[#E91E63]">{b.name}</h4>
                                            </div>
                                            <div className="space-y-1.5 text-xs">
                                                <div className="flex justify-between text-[#6B6B6B]">
                                                    <span>Regular Rate:</span>
                                                    <span className="font-bold text-[#171717]">{tenureInfo.rate}</span>
                                                </div>
                                                <div className="flex justify-between text-[#6B6B6B]">
                                                    <span>Senior Citizen:</span>
                                                    <span className="font-bold text-[#198754]">{tenureInfo.senior}</span>
                                                </div>
                                                <div className="flex justify-between text-[#6B6B6B]">
                                                    <span>Special Plan:</span>
                                                    <span className="font-semibold text-[#171717]">{tenureInfo.specialOffer}</span>
                                                </div>
                                                <div className="flex justify-between text-[#6B6B6B]">
                                                    <span>Risk Profile:</span>
                                                    <span className="font-bold text-[#171717]">{b.risk}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setIsCompareModalOpen(false);
                                                if (onApplyBank) onApplyBank(b.name);
                                            }}
                                            className="w-full mt-4 py-2.5 rounded-xl text-[#171717] font-bold text-xs bg-[#F4C430] hover:bg-[#FFD21F] shadow-xs cursor-pointer active:scale-95 transition-all"
                                        >
                                            Apply for this FD
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
