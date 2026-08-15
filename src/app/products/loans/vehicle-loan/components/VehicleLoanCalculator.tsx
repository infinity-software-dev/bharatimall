"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
    Calculator,
    Plus,
    Minus,
    Sparkles,
    Zap,
    ShieldCheck,
    TrendingUp,
    ArrowRight,
    Info,
} from "lucide-react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";

type PaymentFrequency =
    | "monthly"
    | "biweekly"
    | "quarterly"
    | "annually";

interface VehicleLoanCalculatorProps {
    onApplyClick?: () => void;
}

const frequencyMap: Record<PaymentFrequency, number> = {
    biweekly: 26,
    monthly: 12,
    quarterly: 4,
    annually: 1,
};

const frequencyOptions: { value: PaymentFrequency; label: string }[] = [
    { value: "monthly", label: "Monthly" },
    { value: "biweekly", label: "Bi-Weekly" },
    { value: "quarterly", label: "Quarterly" },
    { value: "annually", label: "Annually" },
];

export default function VehicleLoanCalculator({
    onApplyClick,
}: VehicleLoanCalculatorProps) {
    const [loanAmount, setLoanAmount] = useState<number>(800000);
    const [annualInterestRate, setAnnualInterestRate] = useState<number>(8.5);
    const [loanTermMonths, setLoanTermMonths] = useState<number>(60);
    const [paymentFrequency, setPaymentFrequency] = useState<PaymentFrequency>("monthly");

    const { paymentAmount, totalInterest, totalPayment, effectiveAnnualRate, totalPayments } =
        useMemo(() => {
            if (!loanAmount || loanAmount < 10000) {
                return {
                    paymentAmount: 0,
                    totalInterest: 0,
                    totalPayment: 0,
                    effectiveAnnualRate: 0,
                    totalPayments: 0,
                };
            }

            const annualRateDecimal = annualInterestRate / 100;
            const loanTermYears = loanTermMonths / 12;
            const paymentsPerYear = frequencyMap[paymentFrequency];
            const count = Math.ceil(loanTermYears * paymentsPerYear);
            const periodicRate = annualRateDecimal / paymentsPerYear;

            let calcPayment = 0;
            let calcTotalPay = 0;
            let calcTotalInt = 0;
            let calcEAR = 0;

            if (periodicRate === 0) {
                calcPayment = loanAmount / count;
                calcTotalPay = loanAmount;
                calcTotalInt = 0;
            } else {
                const rateFactor = Math.pow(1 + periodicRate, count);
                calcPayment =
                    (loanAmount * periodicRate * rateFactor) / (rateFactor - 1);
                calcTotalPay = calcPayment * count;
                calcTotalInt = calcTotalPay - loanAmount;
                calcEAR = (Math.pow(1 + periodicRate, paymentsPerYear) - 1) * 100;
            }

            return {
                paymentAmount: calcPayment,
                totalInterest: Math.max(0, calcTotalInt),
                totalPayment: Math.max(0, calcTotalPay),
                effectiveAnnualRate: calcEAR,
                totalPayments: count,
            };
        }, [loanAmount, annualInterestRate, loanTermMonths, paymentFrequency]);

    const chartData = [
        { name: "Principal Amount", value: loanAmount },
        { name: "Total Interest", value: Math.round(totalInterest) },
    ];

    const COLORS = ["#F4C430", "#292929"];

    const fmt = (val: number) =>
        new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
            isNaN(val) ? 0 : val
        );

    const formatLoanTerm = (months: number) => {
        if (months === 0) return "0 months";
        const years = Math.floor(months / 12);
        const remMonths = months % 12;
        if (years > 0) {
            return `${years} yr${years !== 1 ? "s" : ""}${remMonths > 0 ? ` ${remMonths} mo${remMonths !== 1 ? "s" : ""}` : ""
                }`;
        }
        return `${months} month${months !== 1 ? "s" : ""}`;
    };

    const getSliderStyle = (value: number, min: number, max: number) => {
        const percentage = ((value - min) / (max - min)) * 100;
        return {
            background: `linear-gradient(to right, #F4C430 0%, #F4C430 ${percentage}%, #E5E5E0 ${percentage}%, #E5E5E0 100%)`,
        };
    };

    return (
        <section className="py-14 md:py-20 bg-[#F5F5F3] font-sans border-b border-[#E5E5E0]" id="calculator">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <Calculator size={14} className="text-[#171717]" />
                        EMI Forecasting
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        Vehicle Loan EMI Calculator
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        Plan your vehicle purchase accurately with real-time interest projections and payment schedules.
                    </p>
                </div>

                {/* Main Calculator Card */}
                <div className="bg-[#FFFFFF] rounded-3xl shadow-sm border border-[#E5E5E0] overflow-hidden max-w-6xl mx-auto">

                    {/* Header Banner */}
                    <div className="bg-[#FFF8D6] border-b border-[#E5E5E0] py-5 px-6 sm:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-2">
                        <div>
                            <h3 className="text-lg sm:text-xl font-extrabold text-[#171717]">
                                Estimate Your Periodic Installment
                            </h3>
                            <p className="text-xs sm:text-sm text-[#6B6B6B]">
                                Adjust principal, APR, and term to configure your optimal budget
                            </p>
                        </div>
                        <span className="px-3 py-1 bg-[#FFFFFF] border border-[#E5E5E0] rounded-full text-xs font-bold text-[#171717]">
                            {formatLoanTerm(loanTermMonths)} Plan
                        </span>
                    </div>

                    <div className="p-6 lg:p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                            {/* Left Column: Sliders and Inputs */}
                            <div className="space-y-6 lg:pr-8 lg:border-r border-[#E5E5E0]">

                                {/* 1. Loan Amount */}
                                <div className="space-y-2.5">
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
                                            min="50000"
                                            max="5000000"
                                            step="25000"
                                            value={loanAmount}
                                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                                            className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                                            style={getSliderStyle(loanAmount, 50000, 5000000)}
                                        />
                                        <div className="flex justify-between mt-2 text-xs font-semibold text-[#6B6B6B]">
                                            <span>₹50,000</span>
                                            <span>₹50,00,000</span>
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
                                            onClick={() => setLoanAmount(Math.max(50000, loanAmount - 25000))}
                                            className="w-10 h-10 flex items-center justify-center bg-[#F5F5F3] hover:bg-[#FFF8D6] text-[#171717] border border-[#E5E5E0] rounded-xl transition-colors cursor-pointer"
                                        >
                                            <Minus size={14} strokeWidth={2.5} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setLoanAmount(Math.min(5000000, loanAmount + 25000))}
                                            className="w-10 h-10 flex items-center justify-center bg-[#F5F5F3] hover:bg-[#FFF8D6] text-[#171717] border border-[#E5E5E0] rounded-xl transition-colors cursor-pointer"
                                        >
                                            <Plus size={14} strokeWidth={2.5} />
                                        </button>
                                    </div>
                                </div>

                                {/* 2. Annual Interest Rate */}
                                <div className="space-y-2.5">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-bold text-[#171717]">
                                            Interest Rate (% p.a.)
                                        </label>
                                        <span className="text-base font-extrabold text-[#171717]">
                                            {annualInterestRate.toFixed(1)}%
                                        </span>
                                    </div>

                                    <div className="relative pt-1">
                                        <input
                                            type="range"
                                            min="5"
                                            max="25"
                                            step="0.1"
                                            value={annualInterestRate}
                                            onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
                                            className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                                            style={getSliderStyle(annualInterestRate, 5, 25)}
                                        />
                                        <div className="flex justify-between mt-2 text-xs font-semibold text-[#6B6B6B]">
                                            <span>5.0%</span>
                                            <span>25.0%</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 pt-1">
                                        <div className="relative flex-grow">
                                            <input
                                                type="number"
                                                step="0.1"
                                                value={annualInterestRate === 0 ? "" : annualInterestRate}
                                                onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
                                                className="w-full bg-[#FFFDF5] border border-[#E5E5E0] rounded-xl pl-3 pr-8 py-2 text-sm font-bold text-[#171717] focus:outline-none focus:border-[#F4C430] text-center"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] font-bold text-xs">
                                                %
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setAnnualInterestRate(Math.max(5, Number((annualInterestRate - 0.1).toFixed(1))))}
                                            className="w-10 h-10 flex items-center justify-center bg-[#F5F5F3] hover:bg-[#FFF8D6] text-[#171717] border border-[#E5E5E0] rounded-xl transition-colors cursor-pointer"
                                        >
                                            <Minus size={14} strokeWidth={2.5} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setAnnualInterestRate(Math.min(25, Number((annualInterestRate + 0.1).toFixed(1))))}
                                            className="w-10 h-10 flex items-center justify-center bg-[#F5F5F3] hover:bg-[#FFF8D6] text-[#171717] border border-[#E5E5E0] rounded-xl transition-colors cursor-pointer"
                                        >
                                            <Plus size={14} strokeWidth={2.5} />
                                        </button>
                                    </div>
                                </div>

                                {/* 3. Loan Tenure */}
                                <div className="space-y-2.5">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-bold text-[#171717]">
                                            Loan Tenure (Months)
                                        </label>
                                        <span className="text-base font-extrabold text-[#171717]">
                                            {loanTermMonths} Months ({formatLoanTerm(loanTermMonths)})
                                        </span>
                                    </div>

                                    <div className="relative pt-1">
                                        <input
                                            type="range"
                                            min="6"
                                            max="84"
                                            step="6"
                                            value={loanTermMonths}
                                            onChange={(e) => setLoanTermMonths(Number(e.target.value))}
                                            className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                                            style={getSliderStyle(loanTermMonths, 6, 84)}
                                        />
                                        <div className="flex justify-between mt-2 text-xs font-semibold text-[#6B6B6B]">
                                            <span>6 Months</span>
                                            <span>84 Months (7 Yrs)</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 pt-1">
                                        <div className="relative flex-grow">
                                            <input
                                                type="number"
                                                value={loanTermMonths === 0 ? "" : loanTermMonths}
                                                onChange={(e) => setLoanTermMonths(Number(e.target.value))}
                                                className="w-full bg-[#FFFDF5] border border-[#E5E5E0] rounded-xl pl-3 pr-8 py-2 text-sm font-bold text-[#171717] focus:outline-none focus:border-[#F4C430] text-center"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] font-bold text-xs">
                                                Mo
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setLoanTermMonths(Math.max(6, loanTermMonths - 6))}
                                            className="w-10 h-10 flex items-center justify-center bg-[#F5F5F3] hover:bg-[#FFF8D6] text-[#171717] border border-[#E5E5E0] rounded-xl transition-colors cursor-pointer"
                                        >
                                            <Minus size={14} strokeWidth={2.5} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setLoanTermMonths(Math.min(84, loanTermMonths + 6))}
                                            className="w-10 h-10 flex items-center justify-center bg-[#F5F5F3] hover:bg-[#FFF8D6] text-[#171717] border border-[#E5E5E0] rounded-xl transition-colors cursor-pointer"
                                        >
                                            <Plus size={14} strokeWidth={2.5} />
                                        </button>
                                    </div>
                                </div>

                                {/* 4. Payment Frequency */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#171717] block">
                                        Payment Frequency
                                    </label>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                        {frequencyOptions.map((opt) => (
                                            <button
                                                key={opt.value}
                                                type="button"
                                                onClick={() => setPaymentFrequency(opt.value)}
                                                className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${paymentFrequency === opt.value
                                                        ? "bg-[#FFF8D6] border-[#F4C430] text-[#171717] shadow-xs"
                                                        : "bg-[#FFFFFF] border-[#E5E5E0] text-[#6B6B6B] hover:border-[#F4C430]"
                                                    }`}
                                            >
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* Right Column: Visualization & Summary */}
                            <div className="flex flex-col justify-between">

                                {/* Donut Chart */}
                                <div className="h-[210px] md:h-[240px] w-full relative flex items-center justify-center mb-4">
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
                                                animationDuration={600}
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

                                    {/* Central Display */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-6">
                                        <div className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider">
                                            {paymentFrequency} EMI
                                        </div>
                                        <div className="text-xl font-extrabold text-[#171717]">
                                            ₹{fmt(paymentAmount)}
                                        </div>
                                    </div>
                                </div>

                                {/* Summary Box */}
                                <div className="bg-[#FFFDF5] rounded-2xl border border-[#E5E5E0] p-5 shadow-xs">
                                    <h4 className="text-sm font-bold text-[#171717] mb-3 pb-2 border-b border-[#E5E5E0] uppercase tracking-wider">
                                        Breakdown Summary
                                    </h4>

                                    <div className="space-y-2.5 text-xs sm:text-sm mb-5">
                                        <div className="flex justify-between items-center py-1 border-b border-[#E5E5E0]">
                                            <span className="text-[#6B6B6B]">Principal Sanction</span>
                                            <span className="font-bold text-[#171717]">₹{fmt(loanAmount)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-1 border-b border-[#E5E5E0]">
                                            <span className="text-[#6B6B6B]">Total Interest Outflow</span>
                                            <span className="font-bold text-[#171717]">₹{fmt(totalInterest)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-1 border-b border-[#E5E5E0]">
                                            <span className="text-[#6B6B6B]">Total Amount Payable</span>
                                            <span className="font-extrabold text-[#171717]">₹{fmt(totalPayment)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-1">
                                            <span className="text-[#6B6B6B]">Effective Annual Rate (EAR)</span>
                                            <span className="font-bold text-[#198754]">
                                                {effectiveAnnualRate > 0 ? `${effectiveAnnualRate.toFixed(2)}%` : "0.00%"}
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={onApplyClick}
                                        className="w-full py-3.5 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl font-bold uppercase tracking-wider text-xs md:text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <span>Apply for this Vehicle Loan</span>
                                        <ArrowRight size={16} />
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* Integrated Key Insights Bar */}
                    <div className="border-t border-[#E5E5E0] p-6 bg-[#FFFDF5]">
                        <div className="flex items-center gap-2 mb-3">
                            <Sparkles size={16} className="text-[#171717]" />
                            <h4 className="text-sm font-extrabold text-[#171717] uppercase tracking-wider">
                                Financial Insights
                            </h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-[#FFFFFF] border border-[#E5E5E0] rounded-2xl">
                                <p className="text-xs text-[#292929] leading-relaxed">
                                    <strong className="text-[#171717] block mb-0.5">Credit Score Leverage:</strong>
                                    A CIBIL rating of 750+ can help you negotiate lower interest slabs, saving approximately{" "}
                                    <strong className="text-[#171717]">₹{fmt(totalInterest * 0.1)}</strong> over your {formatLoanTerm(loanTermMonths)} tenure.
                                </p>
                            </div>

                            <div className="p-4 bg-[#FFFFFF] border border-[#E5E5E0] rounded-2xl">
                                <p className="text-xs text-[#292929] leading-relaxed">
                                    <strong className="text-[#171717] block mb-0.5">Electric Vehicle (EV) Benefit:</strong>
                                    If purchasing an eligible EV, you can claim dedicated tax relief under Section 80EEB on interest paid up to ₹1.5 Lakhs per financial year.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}