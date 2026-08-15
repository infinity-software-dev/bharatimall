"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from "chart.js";
import { Lightbulb } from "lucide-react";

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
    | "annually"
    | "continuous";

interface PaymentScheduleEntry {
    period: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
}

interface LoanCalculationResult {
    paymentAmount: number;
    totalInterest: number;
    totalPayment: number;
    effectiveAnnualRate: number;
    fullSchedule: PaymentScheduleEntry[];
}

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
    continuous: 0,
};

const frequencyOptions: { value: PaymentFrequency; label: string }[] = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "biweekly", label: "Bi-Weekly (Every 2 weeks)" },
    { value: "semimonthly", label: "Semi-Monthly (Twice a month)" },
    { value: "monthly", label: "Monthly (APR)" },
    { value: "bimonthly", label: "Bi-Monthly (Every 2 months)" },
    { value: "quarterly", label: "Quarterly" },
    { value: "semiannually", label: "Semi-Annually" },
    { value: "annually", label: "Annually (APY)" },
    { value: "continuous", label: "Continuously" },
];

export default function LoanCalculator() {
    const [loanAmount, setLoanAmount] = useState<number>(500000);
    const [annualInterestRate, setAnnualInterestRate] = useState<number>(8.5);
    const [loanTermMonths, setLoanTermMonths] = useState<number>(60);
    const [paymentFrequency, setPaymentFrequency] = useState<PaymentFrequency>("monthly");

    const chartRef = useRef<Chart<"doughnut"> | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const generateSchedule = (
        initialLoanAmount: number,
        monthlyPayment: number,
        annualRateDecimal: number,
        totalPayments: number,
        paymentsPerYear: number,
        frequency: PaymentFrequency
    ): PaymentScheduleEntry[] => {
        const schedule: PaymentScheduleEntry[] = [];
        let balance = initialLoanAmount;

        for (let period = 1; period <= totalPayments; period++) {
            let interestPayment: number;
            let principalPayment: number;

            if (frequency === "continuous") {
                if (period === 1) {
                    interestPayment = balance * (Math.exp(annualRateDecimal * (totalPayments / 12)) - 1);
                    principalPayment = initialLoanAmount;
                    balance = 0;
                } else {
                    break;
                }
            } else {
                const periodicInterestRate = annualRateDecimal / paymentsPerYear;
                interestPayment = balance * periodicInterestRate;
                principalPayment = monthlyPayment - interestPayment;

                if (balance - principalPayment < 0) {
                    principalPayment = balance;
                    interestPayment = monthlyPayment - principalPayment;
                }

                balance -= principalPayment;

                if (balance < 0) {
                    principalPayment += balance;
                    balance = 0;
                }
            }

            schedule.push({
                period,
                payment: monthlyPayment,
                principal: principalPayment,
                interest: interestPayment,
                balance: Math.max(0, balance),
            });

            if (balance <= 0) break;
        }

        return schedule;
    };

    const calculateLoanDetails = useCallback(
        (amount: number, rate: number, termMonths: number, frequency: PaymentFrequency): LoanCalculationResult => {
            if (amount < 10000 || rate < 0.1 || termMonths < 1) {
                return {
                    paymentAmount: 0,
                    totalInterest: 0,
                    totalPayment: 0,
                    effectiveAnnualRate: 0,
                    fullSchedule: [],
                };
            }

            const paymentsPerYear = frequencyMap[frequency];
            const annualRateDecimal = rate / 100;
            const loanTermYears = termMonths / 12;

            let paymentAmount: number;
            let totalPayment: number;
            let totalInterest: number;
            let effectiveAnnualRate: number;
            let totalPayments: number;

            if (frequency === "continuous") {
                totalPayment = amount * Math.exp(annualRateDecimal * loanTermYears);
                totalInterest = totalPayment - amount;
                paymentAmount = totalPayment;
                effectiveAnnualRate = (Math.exp(annualRateDecimal) - 1) * 100;
                totalPayments = 1;
            } else {
                totalPayments = Math.ceil(loanTermYears * paymentsPerYear);
                const periodicInterestRate = annualRateDecimal / paymentsPerYear;

                if (periodicInterestRate === 0) {
                    paymentAmount = amount / totalPayments;
                } else {
                    const rateFactor = Math.pow(1 + periodicInterestRate, totalPayments);
                    paymentAmount = (amount * periodicInterestRate * rateFactor) / (rateFactor - 1);
                }

                totalPayment = paymentAmount * totalPayments;
                totalInterest = totalPayment - amount;
                effectiveAnnualRate = (Math.pow(1 + periodicInterestRate, paymentsPerYear) - 1) * 100;
            }

            const fullSchedule = generateSchedule(
                amount,
                paymentAmount,
                annualRateDecimal,
                totalPayments,
                paymentsPerYear,
                frequency
            );

            return {
                paymentAmount,
                totalInterest,
                totalPayment,
                effectiveAnnualRate,
                fullSchedule,
            };
        },
        []
    );

    const calculationResult = useMemo(
        () => calculateLoanDetails(loanAmount, annualInterestRate, loanTermMonths, paymentFrequency),
        [loanAmount, annualInterestRate, loanTermMonths, paymentFrequency, calculateLoanDetails]
    );

    const { paymentAmount, totalInterest, totalPayment, effectiveAnnualRate } = calculationResult;

    const formatCurrency = useCallback((value: number): string => {
        if (isNaN(value) || value === 0) return "₹0";
        return "₹" + value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }, []);

    const formatLoanTerm = useCallback((months: number) => {
        if (months === 0) return "0 months";
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        if (years > 0) {
            return `${years} year${years !== 1 ? "s" : ""}${remainingMonths > 0 ? `, ${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}` : ""
                }`;
        }
        return `${months} month${months !== 1 ? "s" : ""}`;
    }, []);

    const calculateTotalPayments = useCallback(() => {
        if (paymentFrequency === "continuous") return 1;
        const paymentsPerYear = frequencyMap[paymentFrequency];
        const loanTermYears = loanTermMonths / 12;
        return Math.ceil(loanTermYears * paymentsPerYear);
    }, [paymentFrequency, loanTermMonths]);

    // Chart initialization with theme colors
    useEffect(() => {
        if (canvasRef.current) {
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
                                hoverBackgroundColor: ["#FFD21F", "#171717"],
                                borderWidth: 0,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: "bottom" as const,
                                labels: {
                                    color: "#292929",
                                    font: {
                                        weight: "bold",
                                    },
                                },
                            },
                            tooltip: {
                                backgroundColor: "#171717",
                                titleColor: "#FFFFFF",
                                bodyColor: "#FFFFFF",
                                callbacks: {
                                    label: (context) => {
                                        const label = context.label || "";
                                        const value = context.parsed;
                                        return `${label}: ${formatCurrency(value)}`;
                                    },
                                },
                            },
                        },
                    },
                });
            }
        }

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (chartRef.current && loanAmount > 0 && totalInterest > 0) {
            chartRef.current.data.datasets[0].data = [loanAmount, totalInterest];
            chartRef.current.update();
        }
    }, [loanAmount, totalInterest]);

    const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoanAmount(Number(e.target.value));
    };

    const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnnualInterestRate(Number(e.target.value));
    };

    const handleTenureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoanTermMonths(Number(e.target.value));
    };

    const handleInputChange = (field: string, value: string) => {
        if (value === "") {
            switch (field) {
                case "loanAmount":
                    setLoanAmount(0);
                    break;
                case "annualInterestRate":
                    setAnnualInterestRate(0);
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
                case "annualInterestRate":
                    setAnnualInterestRate(numValue);
                    break;
                case "loanTermMonths":
                    setLoanTermMonths(numValue);
                    break;
            }
        }
    };

    return (
        <section className="bg-[#F5F5F3] font-sans py-12 border-b border-[#E5E5E0]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-[#FFFFFF] rounded-2xl shadow-sm border border-[#E5E5E0] overflow-hidden max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="bg-[#FFF8D6] text-[#171717] py-6 px-8 text-center border-b border-[#E5E5E0]">
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-1.5">Personal Loan Calculator</h2>
                        <p className="text-sm md:text-base text-[#6B6B6B]">Calculate your Loan EMI and Payment Schedule accurately</p>
                    </div>

                    <div className="flex flex-col lg:flex-row p-6 lg:p-8">

                        {/* Input Controls */}
                        <div className="flex-1 min-w-0 lg:pr-8 lg:border-r border-[#E5E5E0]">

                            {/* Loan Amount */}
                            <div className="mb-6">
                                <label htmlFor="loanAmount" className="block text-[#171717] font-bold text-sm mb-2">
                                    Loan Amount (₹)
                                </label>
                                <div className="mb-2">
                                    <input
                                        type="range"
                                        id="loanAmount"
                                        min="10000"
                                        max="10000000"
                                        step="10000"
                                        value={loanAmount}
                                        onChange={handleLoanAmountChange}
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
                                        id="loanAmountInput"
                                        value={loanAmount === 0 ? "" : loanAmount.toString()}
                                        onChange={(e) => handleInputChange("loanAmount", e.target.value)}
                                        className="w-full px-4 py-3 border border-[#E5E5E0] rounded-lg bg-[#FFFDF5] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#F4C430] transition-colors pr-12 text-[#292929] placeholder:text-[#6B6B6B]"
                                        placeholder="Enter loan amount"
                                    />
                                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6B6B6B] font-bold">₹</span>
                                </div>
                            </div>

                            {/* Interest Rate */}
                            <div className="mb-6">
                                <label htmlFor="interestRate" className="block text-[#171717] font-bold text-sm mb-2">
                                    Annual Interest Rate (%)
                                </label>
                                <div className="mb-2">
                                    <input
                                        type="range"
                                        id="interestRate"
                                        min="0.1"
                                        max="30"
                                        step="0.1"
                                        value={annualInterestRate}
                                        onChange={handleInterestRateChange}
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
                                        id="interestRateInput"
                                        min="0.1"
                                        max="30"
                                        step="0.1"
                                        value={annualInterestRate === 0 ? "" : annualInterestRate.toString()}
                                        onChange={(e) => handleInputChange("annualInterestRate", e.target.value)}
                                        className="w-full px-4 py-3 border border-[#E5E5E0] rounded-lg bg-[#FFFDF5] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#F4C430] transition-colors pr-12 text-[#292929] placeholder:text-[#6B6B6B]"
                                    />
                                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6B6B6B] font-bold">%</span>
                                </div>
                            </div>

                            {/* Loan Tenure */}
                            <div className="mb-6">
                                <label htmlFor="loanTerm" className="block text-[#171717] font-bold text-sm mb-2">
                                    Loan Tenure (Months)
                                </label>
                                <div className="mb-2">
                                    <input
                                        type="range"
                                        id="loanTerm"
                                        min="1"
                                        max="120"
                                        step="1"
                                        value={loanTermMonths}
                                        onChange={handleTenureChange}
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
                                        id="loanTermInput"
                                        min="1"
                                        max="120"
                                        step="1"
                                        value={loanTermMonths === 0 ? "" : loanTermMonths.toString()}
                                        onChange={(e) => handleInputChange("loanTermMonths", e.target.value)}
                                        className="w-full px-4 py-3 border border-[#E5E5E0] rounded-lg bg-[#FFFDF5] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#F4C430] transition-colors pr-24 text-[#292929] placeholder:text-[#6B6B6B]"
                                    />
                                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6B6B6B] font-medium text-sm">
                                        Months
                                    </span>
                                </div>
                            </div>

                            {/* Payment Frequency */}
                            <div className="mb-6">
                                <label className="block text-[#171717] font-bold text-sm mb-3">Payment Frequency</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                                    {frequencyOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => setPaymentFrequency(option.value)}
                                            className={`py-2.5 px-3 rounded-lg border transition-all flex flex-col items-center justify-center text-center cursor-pointer ${paymentFrequency === option.value
                                                    ? "border-[#F4C430] bg-[#FFF8D6] text-[#171717] font-bold shadow-xs"
                                                    : "border-[#E5E5E0] bg-[#FFFFFF] hover:border-[#F4C430] text-[#292929]"
                                                }`}
                                        >
                                            <div className="text-xs md:text-sm leading-tight">
                                                {option.label.split("(")[0].trim()}
                                            </div>
                                            {option.label.includes("(") && (
                                                <div className="text-[10px] mt-0.5 text-[#6B6B6B]">
                                                    {option.label.split("(")[1].replace(")", "").trim()}
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Results & Visuals */}
                        <div className="flex-1 min-w-0 lg:pl-8 mt-8 lg:mt-0">

                            {/* Doughnut Chart */}
                            <div className="h-60 mb-6 relative">
                                <canvas ref={canvasRef}></canvas>
                            </div>

                            {/* EMI Highlight Card */}
                            <div className="bg-[#FFFDF5] p-5 rounded-xl border border-[#E5E5E0] border-l-4 border-l-[#F4C430] mb-6 shadow-xs">
                                <div className="text-center mb-5">
                                    <div className="text-xs text-[#6B6B6B] font-semibold uppercase tracking-wider mb-1">
                                        Monthly Payment (EMI)
                                    </div>
                                    <div className="text-3xl font-extrabold text-[#171717]">
                                        {paymentAmount > 0 ? formatCurrency(paymentAmount) : "₹0"}
                                    </div>
                                </div>
                                <div className="flex justify-between divide-x divide-[#E5E5E0] pt-2 border-t border-[#E5E5E0]">
                                    <div className="text-center flex-1 px-3">
                                        <div className="text-base font-bold text-[#171717]">
                                            {totalInterest > 0 ? formatCurrency(totalInterest) : "₹0"}
                                        </div>
                                        <div className="text-xs text-[#6B6B6B] mt-0.5">Total Interest</div>
                                    </div>
                                    <div className="text-center flex-1 px-3">
                                        <div className="text-base font-bold text-[#171717]">
                                            {totalPayment > 0 ? formatCurrency(totalPayment) : "₹0"}
                                        </div>
                                        <div className="text-xs text-[#6B6B6B] mt-0.5">Total Payment</div>
                                    </div>
                                </div>
                            </div>

                            {/* Loan Summary */}
                            <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#E5E5E0]">
                                <h3 className="text-[#171717] font-bold mb-3.5 text-base">Loan Summary</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between pb-2 border-b border-[#E5E5E0]">
                                        <span className="text-[#6B6B6B]">Loan Amount</span>
                                        <span className="font-bold text-[#171717]">
                                            {loanAmount > 0 ? formatCurrency(loanAmount) : "₹0"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between pb-2 border-b border-[#E5E5E0]">
                                        <span className="text-[#6B6B6B]">Interest Rate</span>
                                        <span className="font-bold text-[#171717]">
                                            {annualInterestRate > 0 ? `${annualInterestRate}%` : "0%"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between pb-2 border-b border-[#E5E5E0]">
                                        <span className="text-[#6B6B6B]">Loan Tenure</span>
                                        <span className="font-bold text-[#171717]">
                                            {loanTermMonths > 0 ? formatLoanTerm(loanTermMonths) : "0"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between pb-2 border-b border-[#E5E5E0]">
                                        <span className="text-[#6B6B6B]">Payment Frequency</span>
                                        <span className="font-bold text-[#171717] capitalize">{paymentFrequency}</span>
                                    </div>
                                    <div className="flex justify-between pb-2 border-b border-[#E5E5E0]">
                                        <span className="text-[#6B6B6B]">Total Payments</span>
                                        <span className="font-bold text-[#171717]">{calculateTotalPayments()}</span>
                                    </div>
                                    <div className="flex justify-between pb-2 border-b border-[#E5E5E0]">
                                        <span className="text-[#6B6B6B]">Effective Annual Rate</span>
                                        <span className="font-bold text-[#171717]">
                                            {effectiveAnnualRate > 0 ? `${effectiveAnnualRate.toFixed(2)}%` : "0%"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between pt-1">
                                        <span className="text-[#171717] font-bold">Total Interest</span>
                                        <span className="font-extrabold text-[#171717]">
                                            {totalInterest > 0 ? formatCurrency(totalInterest) : "₹0"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Loan Insights */}
                    <div className="border-t border-[#E5E5E0] p-6 lg:p-8 bg-[#FFFDF5]">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#171717]">
                            <Lightbulb size={20} className="text-[#F4C430]" />
                            Key Loan Insights
                        </h3>

                        <div className="text-xs sm:text-sm text-[#292929] leading-relaxed">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3.5 list-none pl-0 mb-2">
                                <li className="flex items-start gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] mt-2 shrink-0"></div>
                                    <span>
                                        Monthly EMI of{" "}
                                        <span className="bg-[#FFF8D6] px-1.5 py-0.5 rounded font-bold text-[#171717]">
                                            {paymentAmount > 0 ? formatCurrency(paymentAmount) : "₹0"}
                                        </span>{" "}
                                        for {loanTermMonths > 0 ? formatLoanTerm(loanTermMonths) : "0 months"}
                                    </span>
                                </li>

                                <li className="flex items-start gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] mt-2 shrink-0"></div>
                                    <span>
                                        Total Interest is{" "}
                                        <span className="bg-[#FFF8D6] px-1.5 py-0.5 rounded font-bold text-[#171717]">
                                            {loanAmount > 0 ? ((totalInterest / loanAmount) * 100).toFixed(1) : "0"}%
                                        </span>{" "}
                                        ({totalInterest > 0 ? formatCurrency(totalInterest) : "₹0"})
                                    </span>
                                </li>

                                <li className="flex items-start gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] mt-2 shrink-0"></div>
                                    <span>
                                        For every ₹100 you repay,{" "}
                                        <span className="bg-[#FFF8D6] px-1.5 py-0.5 rounded font-bold text-[#171717]">
                                            ₹{totalPayment > 0 ? ((totalInterest / totalPayment) * 100).toFixed(0) : "0"}
                                        </span>{" "}
                                        goes towards interest
                                    </span>
                                </li>

                                <li className="flex items-start gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] mt-2 shrink-0"></div>
                                    <span>
                                        Effective annual rate is{" "}
                                        <span className="bg-[#FFF8D6] px-1.5 py-0.5 rounded font-bold text-[#171717]">
                                            {effectiveAnnualRate > 0 ? effectiveAnnualRate.toFixed(2) : "0.00"}%
                                        </span>
                                    </span>
                                </li>

                                <li className="flex items-start gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] mt-2 shrink-0"></div>
                                    <span>Personal loans are unsecured with no collateral required</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pro Tip */}
                        <div className="mt-6 p-4 bg-[#FFF8D6] border border-[#F4C430]/40 rounded-xl flex items-start gap-3.5">
                            <div className="w-8 h-8 bg-[#FFFFFF] rounded-lg flex items-center justify-center text-[#171717] shrink-0 shadow-2xs">
                                <Lightbulb size={18} className="text-[#F4C430]" />
                            </div>
                            <p className="text-xs sm:text-sm text-[#292929] leading-relaxed">
                                <strong className="text-[#171717]">Pro Tip for Personal Loans:</strong> Early repayments can save significant interest costs. Even a single extra EMI payment can make a noticeable difference.
                            </p>
                        </div>

                        <p className="text-xs text-[#6B6B6B] mt-5 text-center italic">
                            *Note: Processing fees (1-3%) and other charges may apply. Actual terms vary by lender.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}