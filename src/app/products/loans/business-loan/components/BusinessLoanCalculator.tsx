"use client";

import React, { useState, useEffect, useRef } from "react";
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from "chart.js";
import { Lightbulb, Info } from "lucide-react";

// Register Chart.js components
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

type PaymentFrequency =
    | "daily"
    | "weekly"
    | "biweekly"
    | "semimonthly"
    | "monthly"
    | "bimonthly"
    | "quarterly"
    | "semiannually"
    | "annually";

const frequencyMap: Record<PaymentFrequency, number> = {
    daily: 365,
    weekly: 52,
    biweekly: 26,
    semimonthly: 24,
    monthly: 12,
    bimonthly: 6,
    quarterly: 4,
    semiannually: 2,
    annually: 1,
};

const frequencyOptions: { value: PaymentFrequency; label: string }[] = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "biweekly", label: "Bi-Weekly" },
    { value: "semimonthly", label: "Semi-Monthly" },
    { value: "monthly", label: "Monthly (APR)" },
    { value: "bimonthly", label: "Bi-Monthly" },
    { value: "quarterly", label: "Quarterly" },
    { value: "semiannually", label: "Semi-Annually" },
    { value: "annually", label: "Annually" },
];

const formatCurrency = (value: number): string => {
    if (isNaN(value) || value === 0) return "₹0";
    return "₹" + value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function BusinessLoanCalculator() {
    const [loanAmount, setLoanAmount] = useState<number>(500000);
    const [interestRate, setInterestRate] = useState<number>(8.5);
    const [loanTermMonths, setLoanTermMonths] = useState<number>(60);
    const [paymentFrequency, setPaymentFrequency] = useState<PaymentFrequency>("monthly");

    const calculateLoan = () => {
        if (
            !loanAmount ||
            loanAmount < 10000 ||
            !interestRate ||
            interestRate < 0.1 ||
            !loanTermMonths ||
            loanTermMonths < 1
        ) {
            return {
                paymentAmount: 0,
                totalInterest: 0,
                totalPayment: 0,
                effectiveAnnualRate: 0,
            };
        }

        const paymentsPerYear = frequencyMap[paymentFrequency];
        const annualRateDecimal = interestRate / 100;
        const loanTermYears = loanTermMonths / 12;

        const totalPayments = Math.ceil(loanTermYears * paymentsPerYear);
        const periodicInterestRate = annualRateDecimal / paymentsPerYear;

        let calculatedPaymentAmount: number;

        if (periodicInterestRate === 0) {
            calculatedPaymentAmount = loanAmount / totalPayments;
        } else {
            const rateFactor = Math.pow(1 + periodicInterestRate, totalPayments);
            calculatedPaymentAmount =
                (loanAmount * periodicInterestRate * rateFactor) / (rateFactor - 1);
        }

        const calculatedTotalPayment = calculatedPaymentAmount * totalPayments;
        const calculatedTotalInterest = calculatedTotalPayment - loanAmount;
        const calculatedEffectiveAnnualRate =
            (Math.pow(1 + periodicInterestRate, paymentsPerYear) - 1) * 100;

        return {
            paymentAmount: calculatedPaymentAmount,
            totalInterest: calculatedTotalInterest,
            totalPayment: calculatedTotalPayment,
            effectiveAnnualRate: calculatedEffectiveAnnualRate,
        };
    };

    const { paymentAmount, totalInterest, totalPayment, effectiveAnnualRate } = calculateLoan();

    const chartRef = useRef<Chart<"doughnut"> | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const calculateHypotheticalInterest = (
        p: number,
        r: number,
        t_months: number,
        freq: PaymentFrequency
    ) => {
        if (p <= 0 || r <= 0 || t_months <= 0) return 0;
        const pperyear = frequencyMap[freq];
        const r_dec = r / 100;
        const t_yrs = t_months / 12;
        const total_p = Math.ceil(t_yrs * pperyear);
        const periodic_r = r_dec / pperyear;

        if (periodic_r === 0) return 0;
        const r_fact = Math.pow(1 + periodic_r, total_p);
        const emi = (p * periodic_r * r_fact) / (r_fact - 1);
        return emi * total_p - p;
    };

    // Derived Insights
    const interestPercentage = loanAmount > 0 ? (totalInterest / loanAmount) * 100 : 0;
    const interestPer100 = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0;
    const principalPer100 = 100 - interestPer100;

    const tenureReducedInterest = calculateHypotheticalInterest(
        loanAmount,
        interestRate,
        Math.max(12, loanTermMonths - 12),
        paymentFrequency
    );
    const tenureSavings = loanTermMonths > 12 ? totalInterest - tenureReducedInterest : 0;

    const rateReducedInterest = calculateHypotheticalInterest(
        loanAmount,
        Math.max(0.1, interestRate - 2),
        loanTermMonths,
        paymentFrequency
    );
    const rateSavings = interestRate > 2 ? totalInterest - rateReducedInterest : 0;

    const taxSavings = totalInterest * 0.3;
    const quarterlyExtraSavings = totalInterest * 0.15;

    useEffect(() => {
        if (!canvasRef.current) return;

        if (!chartRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
                chartRef.current = new Chart(ctx, {
                    type: "doughnut",
                    data: {
                        labels: ["Loan Amount", "Total Interest"],
                        datasets: [
                            {
                                data: [loanAmount, totalInterest],
                                backgroundColor: ["#F4C430", "#292929"],
                                borderWidth: 0,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        cutout: "80%",
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                backgroundColor: "#171717",
                                titleColor: "#FFFFFF",
                                bodyColor: "#FFFFFF",
                                callbacks: {
                                    label: function (context) {
                                        let label = context.label || "";
                                        if (label) label += ": ";
                                        if (context.parsed !== null) label += formatCurrency(context.parsed);
                                        return label;
                                    },
                                },
                            },
                        },
                    },
                });
            }
        } else {
            chartRef.current.data.datasets[0].data = [loanAmount, totalInterest];
            chartRef.current.update();
        }
    }, [loanAmount, totalInterest]);

    const handleSliderChange = (field: string, value: number) => {
        switch (field) {
            case "loanAmount":
                setLoanAmount(value);
                break;
            case "interestRate":
                setInterestRate(value);
                break;
            case "loanTermMonths":
                setLoanTermMonths(value);
                break;
        }
    };

    const handleInputChange = (field: string, value: string) => {
        if (value === "") {
            switch (field) {
                case "loanAmount":
                    setLoanAmount(0);
                    break;
                case "interestRate":
                    setInterestRate(0);
                    break;
                case "loanTermMonths":
                    setLoanTermMonths(0);
                    break;
            }
            return;
        }

        const cleanValue = value.replace(/[^\d.]/g, "");
        const numValue = parseFloat(cleanValue);
        if (!isNaN(numValue)) {
            switch (field) {
                case "loanAmount":
                    setLoanAmount(numValue);
                    break;
                case "interestRate":
                    setInterestRate(numValue);
                    break;
                case "loanTermMonths":
                    setLoanTermMonths(numValue);
                    break;
            }
        }
    };

    const handleReset = () => {
        setLoanAmount(500000);
        setInterestRate(8.5);
        setLoanTermMonths(60);
        setPaymentFrequency("monthly");
    };

    const formatLoanTerm = (months: number) => {
        if (months === 0) return "0 months";
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        if (years > 0) {
            return `${years} year${years !== 1 ? "s" : ""}${remainingMonths > 0 ? `, ${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}` : ""
                }`;
        }
        return `${months} month${months !== 1 ? "s" : ""}`;
    };

    return (
        <section className="bg-[#F5F5F3] font-sans py-12 border-b border-[#E5E5E0]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-[#FFFFFF] rounded-2xl shadow-sm border border-[#E5E5E0] overflow-hidden max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="bg-[#FFF8D6] text-[#171717] py-6 px-8 text-center border-b border-[#E5E5E0]">
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-1.5 text-[#171717]">
                            Business Loan Calculator
                        </h2>
                        <p className="text-sm md:text-base text-[#6B6B6B]">
                            Calculate your business loan EMI and structured repayment schedule
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row p-6 lg:p-8">

                        {/* Input Section */}
                        <div className="flex-1 min-w-0 lg:pr-8 lg:border-r border-[#E5E5E0]">

                            {/* Loan Amount */}
                            <div className="mb-6">
                                <label className="block text-[#171717] font-bold text-sm mb-2">
                                    Loan Amount (₹)
                                </label>
                                <div className="mb-2">
                                    <input
                                        type="range"
                                        min="10000"
                                        max="10000000"
                                        step="10000"
                                        value={loanAmount}
                                        onChange={(e) => handleSliderChange("loanAmount", Number(e.target.value))}
                                        className="w-full h-2 bg-[#E5E5E0] rounded-lg cursor-pointer accent-[#F4C430]"
                                    />
                                    <div className="flex justify-between text-xs text-[#6B6B6B] mt-1 font-medium">
                                        <span>₹10,000</span>
                                        <span>₹1,00,00,000</span>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={loanAmount === 0 ? "" : loanAmount}
                                        onChange={(e) => handleInputChange("loanAmount", e.target.value)}
                                        className="w-full px-4 py-3 border border-[#E5E5E0] rounded-lg bg-[#FFFDF5] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#F4C430] transition-colors pr-12 text-[#292929] placeholder:text-[#6B6B6B]"
                                        placeholder="e.g., 500000"
                                    />
                                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6B6B6B] font-bold">
                                        ₹
                                    </span>
                                </div>
                            </div>

                            {/* Interest Rate */}
                            <div className="mb-6">
                                <label className="block text-[#171717] font-bold text-sm mb-2">
                                    Interest Rate (% p.a.)
                                </label>
                                <div className="mb-2">
                                    <input
                                        type="range"
                                        min="0.1"
                                        max="30"
                                        step="0.1"
                                        value={interestRate}
                                        onChange={(e) => handleSliderChange("interestRate", Number(e.target.value))}
                                        className="w-full h-2 bg-[#E5E5E0] rounded-lg cursor-pointer accent-[#F4C430]"
                                    />
                                    <div className="flex justify-between text-xs text-[#6B6B6B] mt-1 font-medium">
                                        <span>0.1%</span>
                                        <span>30%</span>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={interestRate === 0 ? "" : interestRate}
                                        onChange={(e) => handleInputChange("interestRate", e.target.value)}
                                        className="w-full px-4 py-3 border border-[#E5E5E0] rounded-lg bg-[#FFFDF5] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#F4C430] transition-colors pr-12 text-[#292929] placeholder:text-[#6B6B6B]"
                                        placeholder="e.g., 8.5"
                                    />
                                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6B6B6B] font-bold">
                                        %
                                    </span>
                                </div>
                            </div>

                            {/* Loan Tenure */}
                            <div className="mb-6">
                                <label className="block text-[#171717] font-bold text-sm mb-2">
                                    Loan Tenure (Months)
                                </label>
                                <div className="mb-2">
                                    <input
                                        type="range"
                                        min="1"
                                        max="120"
                                        step="1"
                                        value={loanTermMonths}
                                        onChange={(e) => handleSliderChange("loanTermMonths", Number(e.target.value))}
                                        className="w-full h-2 bg-[#E5E5E0] rounded-lg cursor-pointer accent-[#F4C430]"
                                    />
                                    <div className="flex justify-between text-xs text-[#6B6B6B] mt-1 font-medium">
                                        <span>1 Month</span>
                                        <span>120 Months</span>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={loanTermMonths === 0 ? "" : loanTermMonths}
                                        onChange={(e) => handleInputChange("loanTermMonths", e.target.value)}
                                        className="w-full px-4 py-3 border border-[#E5E5E0] rounded-lg bg-[#FFFDF5] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#F4C430] transition-colors pr-24 text-[#292929] placeholder:text-[#6B6B6B]"
                                        placeholder="e.g., 60"
                                    />
                                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6B6B6B] font-medium text-sm">
                                        Months
                                    </span>
                                </div>
                            </div>

                            {/* Payment Frequency */}
                            <div className="mb-6">
                                <label className="block text-[#171717] font-bold text-sm mb-3">
                                    Payment Frequency
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                                    {frequencyOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => setPaymentFrequency(option.value)}
                                            className={`py-2.5 px-3 rounded-lg border transition-all text-xs md:text-sm font-semibold cursor-pointer ${paymentFrequency === option.value
                                                    ? "border-[#F4C430] bg-[#FFF8D6] text-[#171717] font-bold shadow-xs"
                                                    : "border-[#E5E5E0] bg-[#FFFFFF] hover:border-[#F4C430] text-[#292929]"
                                                }`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Reset Action */}
                            <button
                                type="button"
                                onClick={handleReset}
                                className="w-full py-2.5 bg-[#FFFFFF] hover:bg-[#FFF8D6] text-[#171717] rounded-xl transition-colors font-bold border border-[#E5E5E0] hover:border-[#F4C430] text-xs cursor-pointer shadow-xs"
                            >
                                Reset to Default Values
                            </button>

                        </div>

                        {/* Results & Visuals */}
                        <div className="flex-1 min-w-0 lg:pl-8 mt-8 lg:mt-0 flex flex-col justify-center">

                            {/* Doughnut Chart */}
                            <div className="h-52 sm:h-60 mb-4 relative flex items-center justify-center">
                                <canvas ref={canvasRef}></canvas>
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                    <div className="text-[10px] sm:text-xs font-bold text-[#6B6B6B] uppercase tracking-wider mb-0.5">
                                        Monthly EMI
                                    </div>
                                    <div className="text-xl sm:text-2xl font-extrabold text-[#171717]">
                                        {formatCurrency(paymentAmount)}
                                    </div>
                                </div>
                            </div>

                            {/* Chart Legend */}
                            <div className="flex justify-center gap-6 mb-5">
                                <div className="flex items-center gap-2">
                                    <div className="w-3.5 h-3.5 rounded-full bg-[#F4C430]"></div>
                                    <span className="text-xs font-bold text-[#292929]">Loan Principal</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3.5 h-3.5 rounded-full bg-[#292929]"></div>
                                    <span className="text-xs font-bold text-[#292929]">Total Interest</span>
                                </div>
                            </div>

                            {/* EMI Highlight Card */}
                            <div className="bg-[#FFFDF5] p-5 rounded-xl border border-[#E5E5E0] border-l-4 border-l-[#F4C430] mb-5 shadow-xs">
                                <div className="text-center mb-4">
                                    <div className="text-xs text-[#6B6B6B] font-semibold uppercase tracking-wider mb-1">
                                        Monthly Payment (EMI)
                                    </div>
                                    <div className="text-3xl font-extrabold text-[#171717]">
                                        {formatCurrency(paymentAmount)}
                                    </div>
                                </div>
                                <div className="flex justify-between divide-x divide-[#E5E5E0] pt-2 border-t border-[#E5E5E0]">
                                    <div className="text-center flex-1 px-3">
                                        <div className="text-base font-bold text-[#171717]">
                                            {formatCurrency(totalInterest)}
                                        </div>
                                        <div className="text-xs text-[#6B6B6B] mt-0.5">Total Interest</div>
                                    </div>
                                    <div className="text-center flex-1 px-3">
                                        <div className="text-base font-bold text-[#171717]">
                                            {formatCurrency(totalPayment)}
                                        </div>
                                        <div className="text-xs text-[#6B6B6B] mt-0.5">Total Payable</div>
                                    </div>
                                </div>
                            </div>

                            {/* Loan Summary */}
                            <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#E5E5E0] mb-4 shadow-xs">
                                <h3 className="text-[#171717] font-bold mb-3.5 text-base">Loan Summary</h3>
                                <div className="space-y-2.5 text-sm">
                                    <div className="flex justify-between pb-2 border-b border-[#E5E5E0]">
                                        <span className="text-[#6B6B6B]">Loan Amount</span>
                                        <span className="font-bold text-[#171717]">{formatCurrency(loanAmount)}</span>
                                    </div>
                                    <div className="flex justify-between pb-2 border-b border-[#E5E5E0]">
                                        <span className="text-[#6B6B6B]">Interest Rate</span>
                                        <span className="font-bold text-[#171717]">{interestRate.toFixed(1)}%</span>
                                    </div>
                                    <div className="flex justify-between pb-2 border-b border-[#E5E5E0]">
                                        <span className="text-[#6B6B6B]">Tenure</span>
                                        <span className="font-bold text-[#171717]">{formatLoanTerm(loanTermMonths)}</span>
                                    </div>
                                    <div className="flex justify-between pb-2 border-b border-[#E5E5E0]">
                                        <span className="text-[#6B6B6B]">Frequency</span>
                                        <span className="font-bold text-[#171717] capitalize">{paymentFrequency}</span>
                                    </div>
                                    <div className="flex justify-between pt-1">
                                        <span className="text-[#171717] font-bold">Total Interest</span>
                                        <span className="font-extrabold text-[#171717]">
                                            {formatCurrency(totalInterest)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Small Note */}
                            <div className="p-3.5 bg-[#FFF8D6] border border-[#F4C430]/40 rounded-xl">
                                <p className="text-xs text-[#292929] leading-relaxed">
                                    <strong className="text-[#171717]">Note:</strong> Estimates provided are indicative. Actual schedules depend on underwriting criteria and taxes.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Key Insights Section */}
                    <div className="border-t border-[#E5E5E0] p-6 lg:p-8 bg-[#FFFDF5]">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#171717]">
                            <Lightbulb size={20} className="text-[#F4C430]" />
                            Key Insights
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3.5 mb-6 text-xs sm:text-sm text-[#292929]">
                            {/* Column 1 */}
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] mt-2 shrink-0"></div>
                                    <span>
                                        Your business will pay{" "}
                                        <span className="bg-[#FFF8D6] px-1.5 py-0.5 rounded font-bold text-[#171717]">
                                            {formatCurrency(paymentAmount)}
                                        </span>{" "}
                                        monthly for {formatLoanTerm(loanTermMonths)}
                                    </span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] mt-2 shrink-0"></div>
                                    <span>
                                        For every ₹100 repaid,{" "}
                                        <span className="bg-[#FFF8D6] px-1.5 py-0.5 rounded font-bold text-[#171717]">
                                            ₹{Math.round(interestPer100)}
                                        </span>{" "}
                                        goes towards interest and{" "}
                                        <span className="bg-[#FFF8D6] px-1.5 py-0.5 rounded font-bold text-[#171717]">
                                            ₹{Math.round(principalPer100)}
                                        </span>{" "}
                                        reduces principal
                                    </span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] mt-2 shrink-0"></div>
                                    <span>
                                        Interest payments may be tax deductible, potentially saving your business{" "}
                                        <span className="bg-[#FFF8D6] px-1.5 py-0.5 rounded font-bold text-[#171717]">
                                            {formatCurrency(taxSavings)}
                                        </span>{" "}
                                        in taxes
                                    </span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] mt-2 shrink-0"></div>
                                    <span>
                                        Making quarterly extra payments could reduce interest by{" "}
                                        <span className="bg-[#FFF8D6] px-1.5 py-0.5 rounded font-bold text-[#171717]">
                                            {formatCurrency(quarterlyExtraSavings)}
                                        </span>
                                    </span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] mt-2 shrink-0"></div>
                                    <span>
                                        Business loans offer flexible repayment structures like EMI holidays during seasonal dips
                                    </span>
                                </li>
                            </ul>

                            {/* Column 2 */}
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] mt-2 shrink-0"></div>
                                    <span>
                                        Total interest cost will be{" "}
                                        <span className="bg-[#FFF8D6] px-1.5 py-0.5 rounded font-bold text-[#171717]">
                                            {formatCurrency(totalInterest)}
                                        </span>{" "}
                                        ({interestPercentage.toFixed(1)}% of loan amount)
                                    </span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] mt-2 shrink-0"></div>
                                    <span>
                                        Reducing tenure by 1 year could save{" "}
                                        <span className="bg-[#FFF8D6] px-1.5 py-0.5 rounded font-bold text-[#171717]">
                                            {formatCurrency(tenureSavings)}
                                        </span>{" "}
                                        in total interest
                                    </span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] mt-2 shrink-0"></div>
                                    <span>
                                        A 2% lower interest rate could save{" "}
                                        <span className="bg-[#FFF8D6] px-1.5 py-0.5 rounded font-bold text-[#171717]">
                                            {formatCurrency(rateSavings)}
                                        </span>{" "}
                                        in financing costs
                                    </span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] mt-2 shrink-0"></div>
                                    <span>
                                        Effective annual borrowing cost is{" "}
                                        <span className="bg-[#FFF8D6] px-1.5 py-0.5 rounded font-bold text-[#171717]">
                                            {effectiveAnnualRate.toFixed(2)}%
                                        </span>{" "}
                                        (considering compounding)
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Strategy & Note Boxes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="p-4 bg-[#FFF8D6] border border-[#F4C430]/40 rounded-xl">
                                <h4 className="flex items-center gap-2 text-[#171717] font-bold text-xs md:text-sm mb-1.5">
                                    <Lightbulb size={16} className="text-[#F4C430]" />
                                    Business Strategy Tip:
                                </h4>
                                <p className="text-[#292929] text-xs leading-relaxed">
                                    Align your loan repayment schedule with your seasonal cash flow cycles. Interest on commercial borrowing is often tax deductible—consult your financial advisor.
                                </p>
                            </div>

                            <div className="p-4 bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl shadow-xs">
                                <h4 className="flex items-center gap-2 text-[#171717] font-bold text-xs md:text-sm mb-1.5">
                                    <Info size={16} className="text-[#171717]" />
                                    Commercial Underwriting Note:
                                </h4>
                                <p className="text-[#6B6B6B] text-xs leading-relaxed">
                                    Business loans are appraised on enterprise vintage, turnover, and balance sheet strength. Rates vary based on credit profile and collateral terms.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}