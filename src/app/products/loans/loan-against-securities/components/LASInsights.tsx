"use client";

import React, { useState } from "react";
import {
    ShieldCheck,
    BarChart3,
    TrendingUp,
    Landmark,
    Percent,
    Sparkles,
} from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function LASInsights() {
    const [activeTab, setActiveTab] = useState<"interest" | "ltv">("interest");

    const statCards = [
        {
            title: "Pledged Assets Facilitated",
            value: "₹8,500+ Cr",
            desc: "Cumulative portfolio value pledged securely across partners",
            icon: Landmark,
        },
        {
            title: "Starting APR Slab",
            value: "8.50% p.a.",
            desc: "Competitive rate for liquid mutual funds and blue-chip equities",
            icon: TrendingUp,
        },
        {
            title: "Maximum LTV Limit",
            value: "Up to 85%",
            desc: "Maximum Loan-to-Value allowed on debt funds, SGBs, and FDs",
            icon: Percent,
        },
        {
            title: "Digital Processing",
            value: "< 4 Hours",
            desc: "End-to-end paperless setup for immediate overdraft limits",
            icon: ShieldCheck,
        },
    ];

    // Chart 1: Interest Rate Comparison
    const interestChartData = {
        labels: [
            "Loan Against Securities",
            "Gold Loan",
            "Unsecured Personal Loan",
            "Credit Card Overdraft",
        ],
        datasets: [
            {
                label: "Typical Interest Rate (% p.a.)",
                data: [8.5, 11.5, 14.5, 36.0],
                backgroundColor: ["#F4C430", "#171717", "#6B6B6B", "#D64545"],
                borderRadius: 8,
                borderWidth: 0,
            },
        ],
    };

    // Chart 2: LTV Allowance by Security Type
    const ltvChartData = {
        labels: [
            "Equity Shares",
            "Equity Mutual Funds",
            "Debt Mutual Funds",
            "Govt Bonds & SGBs",
        ],
        datasets: [
            {
                label: "Max Allowed Loan-to-Value (LTV %)",
                data: [50, 50, 70, 85],
                backgroundColor: ["#6B6B6B", "#6B6B6B", "#F4C430", "#171717"],
                borderRadius: 8,
                borderWidth: 0,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: "#171717",
                padding: 12,
                titleFont: { size: 12, weight: "bold" as const },
                bodyFont: { size: 13 },
                displayColors: false,
                cornerRadius: 8,
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    font: { size: 11, weight: 600 },
                    color: "#6B6B6B",
                },
            },
            y: {
                grid: { color: "#E5E5E0" },
                ticks: {
                    font: { size: 11, weight: 600 },
                    color: "#6B6B6B",
                    callback: (value: any) => `${value}%`,
                },
            },
        },
    };

    return (
        <section className="py-14 md:py-20 bg-[#FFFFFF] font-sans border-b border-[#E5E5E0]" id="las-insights-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 font-bold text-xs mb-4 uppercase tracking-wider shadow-xs">
                        <BarChart3 size={14} className="text-[#171717]" />
                        Market Benchmarks & Metrics
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
                        LAS Insights & Statistics
                    </h2>

                    <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed">
                        Understand how Loan Against Securities compares to conventional credit options and assess the borrowing limits across each asset category.
                    </p>
                </div>

                {/* Stat Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                    {statCards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={card.title}
                                className="bg-[#FFFDF5] p-6 rounded-2xl border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#FFF8D6] border border-[#F4C430]/30 flex items-center justify-center text-[#171717] mb-4 shadow-xs">
                                    <Icon size={22} strokeWidth={2} />
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">
                                        {card.title}
                                    </h4>
                                    <p className="text-2xl font-extrabold text-[#171717] mb-1">
                                        {card.value}
                                    </p>
                                    <p className="text-xs text-[#6B6B6B] leading-relaxed">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Interactive Chart Card */}
                <div className="bg-[#FFFDF5] rounded-3xl border border-[#E5E5E0] p-6 sm:p-8 md:p-10 shadow-xs">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-[#171717]">
                                {activeTab === "interest"
                                    ? "Interest Rate Comparison Across Lending Options"
                                    : "Maximum Loan-To-Value (LTV) Ratios by Asset Class"}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#6B6B6B] mt-0.5">
                                {activeTab === "interest"
                                    ? "Annual borrowing costs comparing secured portfolio credit against unsecured options."
                                    : "Allowable financing quantum based on the regulatory haircut of the pledged instrument."}
                            </p>
                        </div>

                        {/* Tabs Switcher */}
                        <div className="flex bg-[#F5F5F3] p-1.5 rounded-2xl border border-[#E5E5E0] gap-1 shrink-0">
                            <button
                                type="button"
                                onClick={() => setActiveTab("interest")}
                                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${activeTab === "interest"
                                        ? "bg-[#F4C430] text-[#171717] shadow-xs"
                                        : "text-[#6B6B6B] hover:text-[#171717]"
                                    }`}
                            >
                                Interest Comparison
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab("ltv")}
                                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${activeTab === "ltv"
                                        ? "bg-[#F4C430] text-[#171717] shadow-xs"
                                        : "text-[#6B6B6B] hover:text-[#171717]"
                                    }`}
                            >
                                LTV Allocation
                            </button>
                        </div>
                    </div>

                    {/* Chart Canvas */}
                    <div className="h-[320px] md:h-[380px] w-full relative">
                        <Bar
                            data={activeTab === "interest" ? interestChartData : ltvChartData}
                            options={chartOptions}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}