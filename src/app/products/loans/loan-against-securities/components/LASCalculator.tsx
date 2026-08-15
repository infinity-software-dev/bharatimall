"use client";

import React, { useState, useMemo } from "react";
import {
    Building2,
    Plus,
    Minus,
    TrendingUp,
    PieChart as PieChartIcon,
    ShieldCheck,
    ArrowLeftRight,
    Scale,
    AlertTriangle,
    ArrowRight,
    Calculator,
} from "lucide-react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

interface LASCalculatorProps {
    onApplyClick?: () => void;
}

const SECURITY_TYPES = [
    { id: "equity", name: "Equity Shares", ltv: 50, rate: 10.5, icon: TrendingUp },
    { id: "mf_equity", name: "Equity MF", ltv: 50, rate: 9.5, icon: PieChartIcon },
    { id: "mf_debt", name: "Debt MF", ltv: 80, rate: 9.0, icon: Building2 },
    { id: "bonds", name: "Bonds / G-Sec", ltv: 80, rate: 8.5, icon: ShieldCheck },
];

const TAX_RATES = {
    shortTerm: 15,
    longTerm: 10,
};

export const LASCalculator: React.FC<LASCalculatorProps> = ({ onApplyClick }) => {
    const [activeTab, setActiveTab] = useState<"eligibility" | "sell_vs_borrow">("eligibility");

    // Eligibility State
    const [securityType, setSecurityType] = useState(SECURITY_TYPES[0]);
    const [portfolioValue, setPortfolioValue] = useState<number>(1000000);
    const [ltv, setLtv] = useState<number>(50);
    const [interestRate, setInterestRate] = useState<number>(10.5);
    const [tenure, setTenure] = useState<number>(1);
    const [isInterestOnly, setIsInterestOnly] = useState<boolean>(true);

    // Sell vs Borrow State
    const [requiredFunds, setRequiredFunds] = useState<number>(300000);
    const [horizonYears, setHorizonYears] = useState<number>(3);
    const [expectedGrowthRate, setExpectedGrowthRate] = useState<number>(12);
    const [capitalGainsTaxRate, setCapitalGainsTaxRate] = useState<number>(TAX_RATES.longTerm);
    const [showTaxConfig, setShowTaxConfig] = useState<boolean>(false);

    const maxRequiredFunds = portfolioValue * 0.8;

    // Eligibility Calculations
    const { maxLoan, monthlyPayment, totalInterest, totalPayment } = useMemo(() => {
        const loan = portfolioValue * (ltv / 100);
        const r = interestRate / 100 / 12;
        const n = tenure * 12;

        if (loan === 0 || r === 0) {
            return { maxLoan: 0, monthlyPayment: 0, totalInterest: 0, totalPayment: 0 };
        }

        if (isInterestOnly) {
            const emi = loan * r;
            return {
                maxLoan: loan,
                monthlyPayment: emi,
                totalInterest: emi * n,
                totalPayment: loan + emi * n,
            };
        } else {
            const emi = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            const totalPay = emi * n;
            return {
                maxLoan: loan,
                monthlyPayment: emi,
                totalInterest: totalPay - loan,
                totalPayment: totalPay,
            };
        }
    }, [portfolioValue, ltv, interestRate, tenure, isInterestOnly]);

    // Sell vs Borrow Calculations
    const { sellEndWealth, borrowEndWealth, netSavings, capitalGainsTax } = useMemo(() => {
        const taxOnSell = requiredFunds * (capitalGainsTaxRate / 100);
        const remainingPortfolio = portfolioValue - requiredFunds;
        const valAfterSell = remainingPortfolio * Math.pow(1 + expectedGrowthRate / 100, horizonYears);

        const fullPortfolioVal = portfolioValue * Math.pow(1 + expectedGrowthRate / 100, horizonYears);

        let totalLasInterest = 0;
        if (isInterestOnly || horizonYears <= 1) {
            totalLasInterest = requiredFunds * (interestRate / 100) * horizonYears;
        } else {
            totalLasInterest = requiredFunds * Math.pow(1 + interestRate / 100, horizonYears) - requiredFunds;
        }

        const valAfterBorrow = fullPortfolioVal - requiredFunds - totalLasInterest;

        return {
            sellEndWealth: Math.max(0, valAfterSell),
            borrowEndWealth: Math.max(0, valAfterBorrow),
            netSavings: valAfterBorrow - valAfterSell,
            capitalGainsTax: taxOnSell,
        };
    }, [
        portfolioValue,
        requiredFunds,
        horizonYears,
        expectedGrowthRate,
        interestRate,
        capitalGainsTaxRate,
        isInterestOnly,
    ]);

    const eligibilityChartData = [
        { name: "Principal Limit", value: maxLoan },
        { name: "Total Interest", value: Math.round(totalInterest) },
    ];

    const compareChartData = [
        { name: "Sell Assets", value: Math.round(sellEndWealth) },
        { name: "Pledge & Borrow", value: Math.round(borrowEndWealth) },
    ];

    const COLORS = ["#F4C430", "#292929"];
    const COMPARE_COLORS = ["#D64545", "#198754"];

    const fmt = (n: number) =>
        new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
            isNaN(n) ? 0 : n
        );

    const getSliderStyle = (value: number, min: number, max: number) => {
        const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
        return {
            background: `linear-gradient(to right, #F4C430 0%, #F4C430 ${percentage}%, #E5E5E0 ${percentage}%, #E5E5E0 100%)`,
        };
    };

    const handleApply =
        onApplyClick ||
        (() => {
            console.log("LAS Apply Clicked from Calculator");
        });

    return (
        <div className="w-full font-sans text-[#292929]">

            {/* Mode Switcher Tabs */}
            <div className="flex justify-center mb-8 md:mb-10">
                <div className="inline-flex bg-[#F5F5F3] p-1.5 rounded-2xl border border-[#E5E5E0] shadow-inner gap-1.5">
                    <button
                        type="button"
                        onClick={() => setActiveTab("eligibility")}
                        className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${activeTab === "eligibility"
                                ? "bg-[#F4C430] text-[#171717] shadow-sm"
                                : "text-[#6B6B6B] hover:text-[#171717]"
                            }`}
                    >
                        <Building2 size={16} />
                        <span>Check Credit Limit</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab("sell_vs_borrow")}
                        className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${activeTab === "sell_vs_borrow"
                                ? "bg-[#F4C430] text-[#171717] shadow-sm"
                                : "text-[#6B6B6B] hover:text-[#171717]"
                            }`}
                    >
                        <Scale size={16} />
                        <span>Sell vs. Borrow Analysis</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                {/* Left Column: Sliders & Parameter Controls */}
                <div className="space-y-6 lg:pr-8 lg:border-r border-[#E5E5E0]">
                    {activeTab === "eligibility" ? (
                        <>
                            {/* Asset Class Selector */}
                            <div className="space-y-2.5">
                                <label className="block text-sm font-bold text-[#171717]">
                                    Select Collateral Asset Class
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                    {SECURITY_TYPES.map((type) => {
                                        const Icon = type.icon;
                                        return (
                                            <button
                                                key={type.id}
                                                type="button"
                                                onClick={() => {
                                                    setSecurityType(type);
                                                    setLtv(type.ltv);
                                                    setInterestRate(type.rate);
                                                }}
                                                className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-200 cursor-pointer ${securityType.id === type.id
                                                        ? "border-[#F4C430] bg-[#FFF8D6] text-[#171717] shadow-xs"
                                                        : "border-[#E5E5E0] bg-[#FFFFFF] text-[#6B6B6B] hover:border-[#F4C430]"
                                                    }`}
                                            >
                                                <Icon size={20} className="mb-1.5 text-[#171717]" />
                                                <span className="text-[11px] font-bold text-center leading-tight">
                                                    {type.name}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Portfolio Valuation */}
                            <div className="space-y-2.5">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-bold text-[#171717]">
                                        Total Portfolio Value (₹)
                                    </label>
                                    <span className="text-base font-extrabold text-[#171717]">
                                        ₹{fmt(portfolioValue)}
                                    </span>
                                </div>

                                <div className="relative pt-1">
                                    <input
                                        type="range"
                                        min="100000"
                                        max="50000000"
                                        step="100000"
                                        value={portfolioValue}
                                        onChange={(e) => setPortfolioValue(Number(e.target.value))}
                                        className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                                        style={getSliderStyle(portfolioValue, 100000, 50000000)}
                                    />
                                    <div className="flex justify-between mt-2 text-xs font-semibold text-[#6B6B6B]">
                                        <span>₹1 Lakh</span>
                                        <span>₹5 Crore</span>
                                    </div>
                                </div>

                                <div className="relative pt-1">
                                    <input
                                        type="text"
                                        value={portfolioValue ? portfolioValue.toLocaleString("en-IN") : ""}
                                        onChange={(e) => {
                                            const rawVal = e.target.value.replace(/,/g, "").replace(/\D/g, "");
                                            setPortfolioValue(rawVal === "" ? 0 : Number(rawVal));
                                        }}
                                        className="w-full bg-[#FFFDF5] border border-[#E5E5E0] rounded-xl pl-4 pr-10 py-2 text-sm font-bold text-[#171717] focus:outline-none focus:border-[#F4C430] text-center"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B6B6B] font-bold text-xs">
                                        ₹
                                    </span>
                                </div>
                            </div>

                            {/* LTV and Interest Rate Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider">
                                        LTV Ratio (%)
                                    </label>
                                    <input
                                        type="number"
                                        value={ltv}
                                        onChange={(e) =>
                                            setLtv(Math.min(100, Math.max(1, Number(e.target.value))))
                                        }
                                        className="w-full bg-[#FFFDF5] border border-[#E5E5E0] rounded-xl py-2 text-center text-sm font-bold text-[#171717] focus:outline-none focus:border-[#F4C430]"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider">
                                        Interest Rate (% p.a.)
                                    </label>
                                    <input
                                        type="number"
                                        step="0.25"
                                        value={interestRate}
                                        onChange={(e) =>
                                            setInterestRate(Math.min(30, Math.max(1, Number(e.target.value))))
                                        }
                                        className="w-full bg-[#FFFDF5] border border-[#E5E5E0] rounded-xl py-2 text-center text-sm font-bold text-[#171717] focus:outline-none focus:border-[#F4C430]"
                                    />
                                </div>
                            </div>

                            {/* Repayment Method & Tenure */}
                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div className="space-y-2">
                                    <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider">
                                        Servicing Mode
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() => setIsInterestOnly(!isInterestOnly)}
                                        className="w-full flex items-center justify-between p-2.5 bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl hover:border-[#F4C430] transition-colors cursor-pointer"
                                    >
                                        <span className="text-xs font-bold text-[#171717]">
                                            {isInterestOnly ? "Interest-Only" : "Standard EMI"}
                                        </span>
                                        <ArrowLeftRight size={14} className="text-[#171717]" />
                                    </button>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider">
                                        Tenure (Years)
                                    </label>
                                    <div className="flex items-center gap-1.5">
                                        <button
                                            type="button"
                                            onClick={() => setTenure(Math.max(1, tenure - 1))}
                                            className="w-9 h-9 flex items-center justify-center bg-[#F5F5F3] hover:bg-[#FFF8D6] border border-[#E5E5E0] rounded-xl transition-colors cursor-pointer"
                                        >
                                            <Minus size={13} strokeWidth={2.5} />
                                        </button>
                                        <div className="flex-grow text-center font-bold text-sm text-[#171717] border border-[#E5E5E0] bg-[#FFFDF5] rounded-xl py-2">
                                            {tenure} {tenure === 1 ? "Year" : "Years"}
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setTenure(Math.min(10, tenure + 1))}
                                            className="w-9 h-9 flex items-center justify-center bg-[#F5F5F3] hover:bg-[#FFF8D6] border border-[#E5E5E0] rounded-xl transition-colors cursor-pointer"
                                        >
                                            <Plus size={13} strokeWidth={2.5} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Warning for Exceeding Limit */}
                            {requiredFunds > maxLoan && (
                                <div className="flex items-center gap-2.5 p-3.5 bg-[#FFF8D6] border border-[#F4C430]/50 rounded-xl text-xs font-semibold text-[#171717]">
                                    <AlertTriangle size={16} className="text-[#171717] shrink-0" />
                                    <span>
                                        Requested funding exceeds maximum permissible LTV limit (₹{fmt(maxLoan)}).
                                    </span>
                                </div>
                            )}

                            {/* Portfolio Value (Sell vs Borrow) */}
                            <div className="space-y-2.5">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-bold text-[#171717]">
                                        Current Portfolio Value (₹)
                                    </label>
                                    <span className="text-base font-extrabold text-[#171717]">
                                        ₹{fmt(portfolioValue)}
                                    </span>
                                </div>

                                <div className="relative pt-1">
                                    <input
                                        type="range"
                                        min="100000"
                                        max="50000000"
                                        step="100000"
                                        value={portfolioValue}
                                        onChange={(e) => {
                                            const newValue = Number(e.target.value);
                                            setPortfolioValue(newValue);
                                            if (requiredFunds > newValue * 0.8) setRequiredFunds(newValue * 0.8);
                                        }}
                                        className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                                        style={getSliderStyle(portfolioValue, 100000, 50000000)}
                                    />
                                </div>
                            </div>

                            {/* Funds Required */}
                            <div className="space-y-2.5">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-bold text-[#171717]">
                                        Immediate Liquidity Needed (₹)
                                    </label>
                                    <span className="text-base font-extrabold text-[#171717]">
                                        ₹{fmt(requiredFunds)}
                                    </span>
                                </div>

                                <div className="relative pt-1">
                                    <input
                                        type="range"
                                        min="50000"
                                        max={maxRequiredFunds}
                                        step="50000"
                                        value={requiredFunds}
                                        onChange={(e) => setRequiredFunds(Number(e.target.value))}
                                        className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                                        style={getSliderStyle(requiredFunds, 50000, maxRequiredFunds)}
                                    />
                                </div>
                            </div>

                            {/* Horizon & Expected Return */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider">
                                        Investment Horizon (Yrs)
                                    </label>
                                    <div className="flex items-center gap-1.5">
                                        <button
                                            type="button"
                                            onClick={() => setHorizonYears(Math.max(1, horizonYears - 1))}
                                            className="w-9 h-9 flex items-center justify-center bg-[#F5F5F3] hover:bg-[#FFF8D6] border border-[#E5E5E0] rounded-xl transition-colors cursor-pointer"
                                        >
                                            <Minus size={13} strokeWidth={2.5} />
                                        </button>
                                        <div className="flex-grow text-center font-bold text-sm text-[#171717] border border-[#E5E5E0] bg-[#FFFDF5] rounded-xl py-2">
                                            {horizonYears} {horizonYears === 1 ? "Yr" : "Yrs"}
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setHorizonYears(Math.min(10, horizonYears + 1))}
                                            className="w-9 h-9 flex items-center justify-center bg-[#F5F5F3] hover:bg-[#FFF8D6] border border-[#E5E5E0] rounded-xl transition-colors cursor-pointer"
                                        >
                                            <Plus size={13} strokeWidth={2.5} />
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider">
                                        Expected Growth (% p.a.)
                                    </label>
                                    <input
                                        type="number"
                                        step="0.5"
                                        value={expectedGrowthRate}
                                        onChange={(e) =>
                                            setExpectedGrowthRate(Math.min(50, Math.max(1, Number(e.target.value))))
                                        }
                                        className="w-full bg-[#FFFDF5] border border-[#E5E5E0] rounded-xl py-2 text-center text-sm font-bold text-[#171717] focus:outline-none focus:border-[#F4C430]"
                                    />
                                </div>
                            </div>

                            {/* Tax Configuration Toggle */}
                            <div className="pt-2">
                                <button
                                    type="button"
                                    onClick={() => setShowTaxConfig(!showTaxConfig)}
                                    className="text-xs text-[#171717] font-bold underline cursor-pointer"
                                >
                                    {showTaxConfig ? "Hide" : "Show"} Tax Assumptions
                                </button>

                                {showTaxConfig && (
                                    <div className="mt-3 p-3.5 bg-[#FFFDF5] rounded-xl border border-[#E5E5E0] space-y-3 text-xs">
                                        <label className="block font-bold text-[#171717]">
                                            Capital Gains Tax Slab
                                        </label>
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setCapitalGainsTaxRate(TAX_RATES.shortTerm)}
                                                className={`px-3 py-1.5 rounded-lg font-bold border transition-colors cursor-pointer ${capitalGainsTaxRate === TAX_RATES.shortTerm
                                                        ? "bg-[#F4C430] border-[#F4C430] text-[#171717]"
                                                        : "bg-[#FFFFFF] border-[#E5E5E0] text-[#6B6B6B]"
                                                    }`}
                                            >
                                                STCG (15%)
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setCapitalGainsTaxRate(TAX_RATES.longTerm)}
                                                className={`px-3 py-1.5 rounded-lg font-bold border transition-colors cursor-pointer ${capitalGainsTaxRate === TAX_RATES.longTerm
                                                        ? "bg-[#F4C430] border-[#F4C430] text-[#171717]"
                                                        : "bg-[#FFFFFF] border-[#E5E5E0] text-[#6B6B6B]"
                                                    }`}
                                            >
                                                LTCG (10%)
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>

                {/* Right Column: Visuals & Breakdown */}
                <div className="flex flex-col justify-between">
                    {activeTab === "eligibility" ? (
                        <>
                            {/* Donut Chart */}
                            <div className="h-[220px] md:h-[250px] w-full relative flex items-center justify-center mb-4">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={eligibilityChartData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius="68%"
                                            outerRadius="84%"
                                            dataKey="value"
                                            stroke="none"
                                            animationDuration={600}
                                        >
                                            {eligibilityChartData.map((entry, index) => (
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

                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-6">
                                    <div className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider">
                                        {isInterestOnly ? "Monthly Interest" : "Monthly EMI"}
                                    </div>
                                    <div className="text-xl font-extrabold text-[#171717]">
                                        ₹{fmt(monthlyPayment)}
                                    </div>
                                </div>
                            </div>

                            {/* Summary Card */}
                            <div className="bg-[#FFFDF5] rounded-2xl border border-[#E5E5E0] p-5 shadow-xs flex flex-col">
                                <h4 className="text-sm font-bold text-[#171717] mb-3 pb-2 border-b border-[#E5E5E0] uppercase tracking-wider">
                                    Sanction Summary
                                </h4>

                                <div className="space-y-2.5 text-xs sm:text-sm mb-5">
                                    <div className="flex justify-between items-center py-1 border-b border-[#E5E5E0]">
                                        <span className="text-[#6B6B6B]">Pledged Portfolio Value</span>
                                        <span className="font-bold text-[#171717]">₹{fmt(portfolioValue)}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-1 border-b border-[#E5E5E0]">
                                        <span className="text-[#6B6B6B]">Sanctioned Credit Limit</span>
                                        <span className="font-bold text-[#171717]">₹{fmt(maxLoan)}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-1 border-b border-[#E5E5E0]">
                                        <span className="text-[#6B6B6B]">Total Interest Outflow</span>
                                        <span className="font-bold text-[#171717]">₹{fmt(totalInterest)}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-1">
                                        <span className="text-[#171717] font-bold">Total Repayment Outflow</span>
                                        <span className="font-extrabold text-[#171717]">₹{fmt(totalPayment)}</span>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleApply}
                                    className="w-full py-3.5 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl font-bold uppercase tracking-wider text-xs md:text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span>Check Exact Scrip Limit</span>
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Bar Chart for Wealth Comparison */}
                            <div className="h-[220px] md:h-[250px] w-full relative mb-4">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={compareChartData} margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E0" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#6B6B6B", fontSize: 11, fontWeight: 700 }} />
                                        <YAxis hide domain={[0, "dataMax + 200000"]} />
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
                                        <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                                            {compareChartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COMPARE_COLORS[index]} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Wealth Projection Card */}
                            <div className="bg-[#FFFDF5] rounded-2xl border border-[#E5E5E0] p-5 shadow-xs flex flex-col">
                                <h4 className="text-sm font-bold text-[#171717] mb-3 pb-2 border-b border-[#E5E5E0] uppercase tracking-wider">
                                    Wealth Projection After {horizonYears} Years
                                </h4>

                                <div className="space-y-2.5 text-xs sm:text-sm mb-5">
                                    <div className="flex justify-between items-center py-1 border-b border-[#E5E5E0]">
                                        <span className="text-[#6B6B6B]">Scenario A: Liquidating Assets</span>
                                        <span className="font-bold text-[#D64545]">₹{fmt(sellEndWealth)}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-1 border-b border-[#E5E5E0]">
                                        <span className="text-[#6B6B6B]">Scenario B: Pledging with LAS</span>
                                        <span className="font-bold text-[#198754]">₹{fmt(borrowEndWealth)}</span>
                                    </div>
                                </div>

                                <div className="p-4 bg-[#FFF8D6] rounded-xl border border-[#F4C430]/40 text-center mb-4">
                                    <span className="block text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-0.5">
                                        {netSavings >= 0 ? "Net Wealth Retained via LAS" : "Net Difference"}
                                    </span>
                                    <span className="text-2xl font-extrabold text-[#171717]">
                                        ₹{fmt(Math.abs(netSavings))}
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleApply}
                                    className="w-full py-3.5 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl font-bold uppercase tracking-wider text-xs md:text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span>Apply for LAS Facility</span>
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </>
                    )}
                </div>

            </div>

            {/* Advisory Footnote */}
            <div className="mt-8 p-4 bg-[#FFFDF5] border border-[#E5E5E0] rounded-2xl text-xs leading-relaxed text-[#6B6B6B]">
                <p>
                    * Note: Credit limits are determined based on the approved list of scrips, regulatory haircuts, and LTV ratios defined by individual lenders. Wealth calculations assume continuous compounding and constant annual return rates.
                </p>
            </div>
        </div>
    );
};