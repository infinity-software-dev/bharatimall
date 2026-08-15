"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ChevronDown,
    Plus,
    Minus,
    Landmark,
    Calculator,
} from "lucide-react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";

interface EMICalculatorProps {
    onApplyClick?: () => void;
    hidePartners?: boolean;
    isDashboard?: boolean;
}

const PARTNER_BANKS = [
    { name: "Avanse Financial Services" },
    { name: "Auxilo Finserve" },
    { name: "Axis Bank" },
    { name: "Bank of Baroda" },
    { name: "State Bank of India" },
    { name: "Bank of Maharashtra" },
    { name: "Central Bank of India" },
    { name: "HDFC Credila" },
    { name: "InCred Financial" },
    { name: "Tata Capital" },
    { name: "IDFC FIRST Bank" },
    { name: "Union Bank of India" },
    { name: "ICICI Bank" },
    { name: "SVC Co-operative Bank" },
    { name: "Yes Bank" },
    { name: "Saraswat Bank" },
    { name: "Kotak Mahindra Bank" },
    { name: "Punjab National Bank" },
];

export default function EMICalculator({
    onApplyClick,
    hidePartners = false,
    isDashboard = false,
}: EMICalculatorProps) {
    const [loanAmount, setLoanAmount] = useState(1000000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [tenure, setTenure] = useState(15);
    const [showAllBanks, setShowAllBanks] = useState(false);

    const { emi, totalInterest, totalPayment } = useMemo(() => {
        const r = interestRate / 100 / 12;
        const n = tenure * 12;

        if (r === 0 || n === 0) {
            return {
                emi: loanAmount / (n || 1),
                totalPayment: loanAmount,
                totalInterest: 0,
            };
        }

        const e =
            (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

        return {
            emi: e,
            totalPayment: e * n,
            totalInterest: e * n - loanAmount,
        };
    }, [loanAmount, interestRate, tenure]);

    const chartData = [
        { name: "Principal Amount", value: loanAmount },
        { name: "Total Interest", value: Math.max(0, totalInterest) },
    ];

    const COLORS = ["#F4C430", "#292929"];

    const fmt = (n: number) =>
        new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
            isNaN(n) ? 0 : n
        );

    const getSliderStyle = (value: number, min: number, max: number) => {
        const percentage = ((value - min) / (max - min)) * 100;
        return {
            background: `linear-gradient(to right, #F4C430 0%, #F4C430 ${percentage}%, #E5E5E0 ${percentage}%, #E5E5E0 100%)`,
        };
    };

    return (
        <section
            className={
                isDashboard
                    ? "pt-0 pb-6 relative font-sans"
                    : "py-14 md:py-20 bg-[#F5F5F3] font-sans border-b border-[#E5E5E0]"
            }
            id="emi-calculator"
        >
            <div
                className={
                    isDashboard
                        ? "max-w-full"
                        : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                }
            >
                <div className="bg-[#FFFFFF] rounded-3xl shadow-sm border border-[#E5E5E0] overflow-hidden">

                    {/* Header */}
                    {!isDashboard && (
                        <div className="bg-[#FFF8D6] border-b border-[#E5E5E0] py-6 px-6 text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#F4C430]/40 text-[#171717] font-bold text-xs mb-2 uppercase tracking-wider shadow-xs">
                                <Calculator size={13} className="text-[#171717]" />
                                Estimate Repayment
                            </div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#171717] tracking-tight">
                                Education Loan EMI Calculator
                            </h2>
                            <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1">
                                Estimate your monthly installments and structured course repayment schedule
                            </p>
                        </div>
                    )}

                    <div className="p-6 lg:p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                            {/* Left Column: Sliders & Adjusters */}
                            <div className="space-y-7 lg:pr-8 lg:border-r border-[#E5E5E0]">

                                {/* Loan Amount */}
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-bold text-[#171717]">
                                            Loan Amount (₹)
                                        </label>
                                        <span className="text-base font-extrabold text-[#171717]">
                                            ₹{fmt(loanAmount)}
                                        </span>
                                    </div>

                                    <div className="relative pt-1">
                                        <input
                                            type="range"
                                            min="100000"
                                            max="50000000"
                                            step="50000"
                                            value={loanAmount}
                                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                                            className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                                            style={getSliderStyle(loanAmount, 100000, 50000000)}
                                        />
                                        <div className="flex justify-between mt-2 text-xs font-semibold text-[#6B6B6B]">
                                            <span>₹1,00,000</span>
                                            <span>₹5,00,00,000</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 pt-1">
                                        <div className="relative flex-grow">
                                            <input
                                                type="number"
                                                value={loanAmount === 0 ? "" : loanAmount}
                                                onChange={(e) => setLoanAmount(Number(e.target.value))}
                                                className="w-full bg-[#FFFDF5] border border-[#E5E5E0] rounded-xl pl-3 pr-8 py-2 text-sm font-bold text-[#171717] focus:outline-none focus:border-[#F4C430] text-center"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] font-bold text-xs">
                                                ₹
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setLoanAmount(Math.max(100000, loanAmount - 50000))}
                                            className="w-10 h-10 flex items-center justify-center bg-[#F5F5F3] hover:bg-[#FFF8D6] text-[#171717] border border-[#E5E5E0] rounded-xl transition-colors cursor-pointer"
                                        >
                                            <Minus size={14} strokeWidth={2.5} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setLoanAmount(Math.min(50000000, loanAmount + 50000))}
                                            className="w-10 h-10 flex items-center justify-center bg-[#F5F5F3] hover:bg-[#FFF8D6] text-[#171717] border border-[#E5E5E0] rounded-xl transition-colors cursor-pointer"
                                        >
                                            <Plus size={14} strokeWidth={2.5} />
                                        </button>
                                    </div>
                                </div>

                                {/* Interest Rate */}
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-bold text-[#171717]">
                                            Interest Rate (% p.a.)
                                        </label>
                                        <span className="text-base font-extrabold text-[#171717]">
                                            {interestRate.toFixed(1)}%
                                        </span>
                                    </div>

                                    <div className="relative pt-1">
                                        <input
                                            type="range"
                                            min="1"
                                            max="30"
                                            step="0.1"
                                            value={interestRate}
                                            onChange={(e) => setInterestRate(Number(e.target.value))}
                                            className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                                            style={getSliderStyle(interestRate, 1, 30)}
                                        />
                                        <div className="flex justify-between mt-2 text-xs font-semibold text-[#6B6B6B]">
                                            <span>1%</span>
                                            <span>30%</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 pt-1">
                                        <div className="relative flex-grow">
                                            <input
                                                type="number"
                                                value={interestRate === 0 ? "" : interestRate}
                                                step="0.1"
                                                onChange={(e) => setInterestRate(Number(e.target.value))}
                                                className="w-full bg-[#FFFDF5] border border-[#E5E5E0] rounded-xl pl-3 pr-8 py-2 text-sm font-bold text-[#171717] focus:outline-none focus:border-[#F4C430] text-center"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] font-bold text-xs">
                                                %
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setInterestRate(Math.max(1, Number((interestRate - 0.1).toFixed(1))))}
                                            className="w-10 h-10 flex items-center justify-center bg-[#F5F5F3] hover:bg-[#FFF8D6] text-[#171717] border border-[#E5E5E0] rounded-xl transition-colors cursor-pointer"
                                        >
                                            <Minus size={14} strokeWidth={2.5} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setInterestRate(Math.min(30, Number((interestRate + 0.1).toFixed(1))))}
                                            className="w-10 h-10 flex items-center justify-center bg-[#F5F5F3] hover:bg-[#FFF8D6] text-[#171717] border border-[#E5E5E0] rounded-xl transition-colors cursor-pointer"
                                        >
                                            <Plus size={14} strokeWidth={2.5} />
                                        </button>
                                    </div>
                                </div>

                                {/* Tenure */}
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-bold text-[#171717]">
                                            Loan Tenure (Years)
                                        </label>
                                        <span className="text-base font-extrabold text-[#171717]">
                                            {tenure} {tenure === 1 ? "Year" : "Years"}
                                        </span>
                                    </div>

                                    <div className="relative pt-1">
                                        <input
                                            type="range"
                                            min="1"
                                            max="30"
                                            step="1"
                                            value={tenure}
                                            onChange={(e) => setTenure(Number(e.target.value))}
                                            className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                                            style={getSliderStyle(tenure, 1, 30)}
                                        />
                                        <div className="flex justify-between mt-2 text-xs font-semibold text-[#6B6B6B]">
                                            <span>1 Year</span>
                                            <span>30 Years</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 pt-1">
                                        <div className="relative flex-grow">
                                            <input
                                                type="number"
                                                value={tenure === 0 ? "" : tenure}
                                                onChange={(e) => setTenure(Number(e.target.value))}
                                                className="w-full bg-[#FFFDF5] border border-[#E5E5E0] rounded-xl pl-3 pr-8 py-2 text-sm font-bold text-[#171717] focus:outline-none focus:border-[#F4C430] text-center"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] font-bold text-xs">
                                                Y
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setTenure(Math.max(1, tenure - 1))}
                                            className="w-10 h-10 flex items-center justify-center bg-[#F5F5F3] hover:bg-[#FFF8D6] text-[#171717] border border-[#E5E5E0] rounded-xl transition-colors cursor-pointer"
                                        >
                                            <Minus size={14} strokeWidth={2.5} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setTenure(Math.min(30, tenure + 1))}
                                            className="w-10 h-10 flex items-center justify-center bg-[#F5F5F3] hover:bg-[#FFF8D6] text-[#171717] border border-[#E5E5E0] rounded-xl transition-colors cursor-pointer"
                                        >
                                            <Plus size={14} strokeWidth={2.5} />
                                        </button>
                                    </div>
                                </div>

                                {/* EMI Highlight Card */}
                                <div className="p-6 rounded-2xl border border-[#F4C430]/40 bg-[#FFF8D6] text-center shadow-xs">
                                    <div className="text-xs uppercase tracking-wider font-bold text-[#6B6B6B] mb-1">
                                        Calculated Monthly EMI
                                    </div>
                                    <div className="text-3xl md:text-4xl font-extrabold text-[#171717] mb-4">
                                        ₹{fmt(emi)}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 border-t border-[#E5E5E0] pt-4">
                                        <div>
                                            <div className="text-sm md:text-base font-bold text-[#171717]">
                                                ₹{fmt(totalPayment)}
                                            </div>
                                            <div className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider mt-0.5">
                                                Total Payable
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm md:text-base font-bold text-[#171717]">
                                                ₹{fmt(totalInterest)}
                                            </div>
                                            <div className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider mt-0.5">
                                                Total Interest
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Right Column: Chart & Breakdown */}
                            <div className="flex flex-col justify-between">

                                {/* Donut Chart */}
                                <div className="h-[220px] md:h-[260px] w-full relative flex items-center justify-center mb-4">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={chartData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius="68%"
                                                outerRadius="84%"
                                                dataKey="value"
                                                stroke="none"
                                                animationDuration={800}
                                            >
                                                {chartData.map((entry, index) => (
                                                    <Cell
                                                        key={`cell-${index}`}
                                                        fill={COLORS[index % COLORS.length]}
                                                    />
                                                ))}
                                            </Pie>
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: "#171717",
                                                    borderRadius: "0.75rem",
                                                    border: "none",
                                                    color: "#FFFFFF",
                                                    fontSize: "12px",
                                                }}
                                                formatter={(value: any) => `₹${fmt(Number(value) || 0)}`}
                                            />
                                            <Legend
                                                verticalAlign="bottom"
                                                height={32}
                                                iconType="circle"
                                                formatter={(value) => (
                                                    <span className="text-xs font-bold text-[#292929] ml-1">
                                                        {value}
                                                    </span>
                                                )}
                                            />
                                        </PieChart>
                                    </ResponsiveContainer>

                                    {/* Central EMI Display */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-6">
                                        <div className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider">
                                            Monthly EMI
                                        </div>
                                        <div className="text-xl font-extrabold text-[#171717]">
                                            ₹{fmt(emi)}
                                        </div>
                                    </div>
                                </div>

                                {/* Loan Summary Breakdown */}
                                <div className="bg-[#FFFDF5] rounded-2xl border border-[#E5E5E0] p-5 md:p-6 shadow-xs flex flex-col">
                                    <h3 className="text-base font-bold text-[#171717] mb-3.5 pb-2 border-b border-[#E5E5E0]">
                                        Payment Summary
                                    </h3>

                                    <div className="space-y-3 mb-5 text-xs sm:text-sm">
                                        <div className="flex justify-between items-center py-1 border-b border-[#E5E5E0]">
                                            <span className="text-[#6B6B6B]">Principal Loan Amount</span>
                                            <span className="font-bold text-[#171717]">₹{fmt(loanAmount)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-1 border-b border-[#E5E5E0]">
                                            <span className="text-[#6B6B6B]">Total Interest Accrued</span>
                                            <span className="font-bold text-[#171717]">₹{fmt(totalInterest)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-1">
                                            <span className="text-[#171717] font-bold">Total Amount Payable</span>
                                            <span className="font-extrabold text-[#171717]">₹{fmt(totalPayment)}</span>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={onApplyClick}
                                        className="w-full py-3.5 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl font-bold uppercase tracking-wider text-xs md:text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <span>Apply For This Loan</span>
                                        <ArrowRight size={16} />
                                    </button>
                                </div>

                                {/* Disclaimer Note */}
                                <p className="text-[11px] text-[#6B6B6B] mt-4 text-center italic">
                                    *Note: Figures are indicative. Actual schedules depend on course moratorium policies and lender terms.
                                </p>

                            </div>

                        </div>
                    </div>
                </div>

                {/* Partner Banks Grid */}
                {!hidePartners && (
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-14"
                    >
                        <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 border border-[#E5E5E0] shadow-xs">
                            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 text-center sm:text-left">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#171717]">
                                        Education Loan Lending Partners
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#6B6B6B] mt-0.5">
                                        Strategic tie-ups with leading Indian banks and specialized NBFCs
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setShowAllBanks(!showAllBanks)}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFF8D6] hover:bg-[#FFD21F] text-[#171717] border border-[#F4C430]/40 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                                >
                                    <span>{showAllBanks ? "Show Fewer Banks" : `View All ${PARTNER_BANKS.length} Partners`}</span>
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-300 ${showAllBanks ? "rotate-180" : ""}`}
                                    />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                                {PARTNER_BANKS.slice(0, showAllBanks ? PARTNER_BANKS.length : 8).map((bank) => (
                                    <div
                                        key={bank.name}
                                        className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFDF5] border border-[#E5E5E0] hover:border-[#F4C430] transition-colors"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-[#FFF8D6] flex items-center justify-center text-[#171717] shrink-0">
                                            <Landmark size={18} strokeWidth={2} />
                                        </div>
                                        <span className="font-bold text-xs sm:text-sm text-[#292929] leading-tight">
                                            {bank.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

            </div>
        </section>
    );
}