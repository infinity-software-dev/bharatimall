'use client';

import React, { useState, useMemo } from 'react';
import {
    Calculator, Lightbulb, Percent, TrendingUp,
    ShieldCheck, Calendar, DollarSign, ChevronRight
} from 'lucide-react';

const formatCurrency = (value: number): string => {
    if (value === 0) return '₹0';
    return '₹' + Math.round(value).toLocaleString('en-IN');
};

const sliderStyle = `
  input[type=range].fd-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #F4C430;
    cursor: pointer;
    border: 2.5px solid #ffffff;
    box-shadow: 0 2px 6px rgba(244, 196, 48, 0.4);
    transition: transform 0.15s ease;
  }
  input[type=range].fd-slider::-webkit-slider-thumb:hover {
    transform: scale(1.15);
  }
  input[type=range].fd-slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #F4C430;
    cursor: pointer;
    border: 2.5px solid #ffffff;
    box-shadow: 0 2px 6px rgba(244, 196, 48, 0.4);
  }
  input[type=range].fd-slider {
    -webkit-appearance: none;
    appearance: none;
    height: 6px;
    border-radius: 9999px;
    outline: none;
    cursor: pointer;
  }
`;

const getSliderBg = (value: number, min: number, max: number) => {
    const pct = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
    return `linear-gradient(to right, #F4C430 0%, #F4C430 ${pct}%, #E5E5E0 ${pct}%, #E5E5E0 100%)`;
};

export default function FDCalculator() {
    // State for FD parameters
    const [principalAmount, setPrincipalAmount] = useState<number>(100000);
    const [interestRate, setInterestRate] = useState<number>(7.5);
    const [tenureYears, setTenureYears] = useState<number>(5);
    const [compoundingFrequency, setCompoundingFrequency] = useState<'monthly' | 'quarterly' | 'annually'>('quarterly');
    const [isSeniorCitizen, setIsSeniorCitizen] = useState<boolean>(false);

    // Preset quick amounts
    const amountPresets = [50000, 100000, 300000, 500000, 1000000];

    // Effective Rate based on Senior Citizen
    const effectiveRate = useMemo(() => {
        return isSeniorCitizen ? interestRate + 0.5 : interestRate;
    }, [interestRate, isSeniorCitizen]);

    // Compounding Calculations
    const fdResults = useMemo(() => {
        let periodsPerYear = 4;
        if (compoundingFrequency === 'monthly') periodsPerYear = 12;
        if (compoundingFrequency === 'annually') periodsPerYear = 1;

        // A = P * (1 + r/n)^(n*t)
        const r = effectiveRate / 100;
        const totalPeriods = periodsPerYear * tenureYears;
        const maturity = principalAmount * Math.pow(1 + r / periodsPerYear, totalPeriods);
        const totalInterest = Math.max(0, maturity - principalAmount);

        const principalRatio = maturity > 0 ? (principalAmount / maturity) * 100 : 50;
        const interestRatio = maturity > 0 ? (totalInterest / maturity) * 100 : 50;

        // Extra interest with 1% higher rate
        const rHigher = (effectiveRate + 1) / 100;
        const maturityHigher = principalAmount * Math.pow(1 + rHigher / periodsPerYear, totalPeriods);
        const extraInterest1Pct = Math.max(0, Math.round(maturityHigher - maturity));

        // Rule of 72 for doubling
        const doublingYears = effectiveRate > 0 ? (72 / effectiveRate).toFixed(1) : '0';
        const dailyInterest = totalInterest > 0 && tenureYears > 0 ? Math.round(totalInterest / (tenureYears * 365)) : 0;
        const annualAverage = totalInterest > 0 && tenureYears > 0 ? Math.round(totalInterest / tenureYears) : 0;
        const interestPercentOfPrincipal = principalAmount > 0 ? ((totalInterest / principalAmount) * 100).toFixed(1) : '0';

        return {
            principalAmount: Math.round(principalAmount),
            maturityAmount: Math.round(maturity),
            totalInterest: Math.round(totalInterest),
            principalRatio,
            interestRatio,
            extraInterest1Pct,
            doublingYears,
            dailyInterest,
            annualAverage,
            interestPercentOfPrincipal,
        };
    }, [principalAmount, effectiveRate, tenureYears, compoundingFrequency]);

    // Circumference for SVG Doughnut (r = 65) -> 408.4
    const C = 408.4;

    return (
        <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E5E5E0] font-sans">
            <style dangerouslySetInnerHTML={{ __html: sliderStyle }} />

            {/* Header Banner */}
            <div className="bg-white text-[#171717] py-8 px-6 sm:px-10 border-b border-[#E5E5E0]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-[#171717]">
                            Fixed Deposit <span className="text-[#F4C430]">Calculator</span>
                        </h2>
                        <p className="text-[#6B6B6B] text-xs sm:text-sm max-w-xl font-normal">
                            Calculate your Fixed Deposit compounding returns, interest earnings, and maturity values.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 p-1.5 bg-[#F5F5F3] rounded-2xl border border-[#E5E5E0] self-start md:self-auto shrink-0">
                        <button
                            type="button"
                            onClick={() => setIsSeniorCitizen(false)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${!isSeniorCitizen ? 'bg-[#F4C430] text-[#171717] shadow-xs' : 'text-[#6B6B6B] hover:text-[#171717]'}`}
                        >
                            Regular Citizen
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsSeniorCitizen(true)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${isSeniorCitizen ? 'bg-[#F4C430] text-[#171717] shadow-xs' : 'text-[#6B6B6B] hover:text-[#171717]'}`}
                        >
                            <span>Senior Citizen (+0.5%)</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Calculator Grid */}
            <div className="flex flex-col lg:flex-row">
                {/* Inputs Column */}
                <div className="flex-1 p-6 sm:p-8 lg:p-10 lg:border-r border-[#E5E5E0] space-y-6 bg-white">

                    {/* Deposit Amount */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-xs sm:text-sm font-bold text-[#171717]">Total Investment Amount</label>
                            <span className="text-xs font-extrabold text-[#171717] bg-[#FFF8D6] px-2.5 py-1 rounded-md border border-[#F4C430]/40">
                                {formatCurrency(principalAmount)}
                            </span>
                        </div>
                        <input
                            type="range"
                            min={10000}
                            max={5000000}
                            step={10000}
                            value={principalAmount}
                            onChange={(e) => setPrincipalAmount(Number(e.target.value))}
                            className="w-full h-2 rounded-lg cursor-pointer fd-slider"
                            style={{ background: getSliderBg(principalAmount, 10000, 5000000) }}
                        />
                        <div className="flex justify-between text-[11px] text-[#6B6B6B] font-medium">
                            <span>₹10,000</span>
                            <span>₹50 Lakh</span>
                        </div>

                        {/* Quick Preset Buttons */}
                        <div className="flex flex-wrap gap-2 pt-1">
                            {amountPresets.map((preset) => (
                                <button
                                    key={preset}
                                    type="button"
                                    onClick={() => setPrincipalAmount(preset)}
                                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${principalAmount === preset
                                        ? 'bg-[#F4C430] border-[#F4C430] text-[#171717] shadow-xs'
                                        : 'bg-[#F5F5F3] border-[#E5E5E0] text-[#6B6B6B] hover:bg-[#FFF8D6] hover:text-[#171717] hover:border-[#F4C430]/40'
                                        }`}
                                >
                                    {preset >= 100000 ? `₹${preset / 100000}L` : `₹${preset / 1000}K`}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Interest Rate */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-xs sm:text-sm font-bold text-[#171717]">Annual Interest Rate (p.a.)</label>
                            <span className="text-xs font-extrabold text-[#198754] bg-[#FFF8D6] px-2.5 py-1 rounded-md border border-[#198754]/30">
                                {effectiveRate.toFixed(2)}% {isSeniorCitizen && '(+0.5% Sr)'}
                            </span>
                        </div>
                        <input
                            type="range"
                            min={4.0}
                            max={10.0}
                            step={0.1}
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full h-2 rounded-lg cursor-pointer fd-slider"
                            style={{ background: getSliderBg(interestRate, 4.0, 10.0) }}
                        />
                        <div className="flex justify-between text-[11px] text-[#6B6B6B] font-medium">
                            <span>4.0%</span>
                            <span>10.0%</span>
                        </div>
                    </div>

                    {/* Tenure */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-xs sm:text-sm font-bold text-[#171717]">Tenure Duration</label>
                            <span className="text-xs font-extrabold text-[#171717] bg-[#FFF8D6] px-2.5 py-1 rounded-md border border-[#F4C430]/40">
                                {tenureYears} {tenureYears === 1 ? 'Year' : 'Years'}
                            </span>
                        </div>
                        <input
                            type="range"
                            min={1}
                            max={10}
                            step={1}
                            value={tenureYears}
                            onChange={(e) => setTenureYears(Number(e.target.value))}
                            className="w-full h-2 rounded-lg cursor-pointer fd-slider"
                            style={{ background: getSliderBg(tenureYears, 1, 10) }}
                        />
                        <div className="flex justify-between text-[11px] text-[#6B6B6B] font-medium">
                            <span>1 Year</span>
                            <span>10 Years</span>
                        </div>
                    </div>

                    {/* Compounding Frequency */}
                    <div className="pt-2">
                        <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider mb-2">
                            Compounding Frequency
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            {(['monthly', 'quarterly', 'annually'] as const).map((freq) => (
                                <button
                                    key={freq}
                                    type="button"
                                    onClick={() => setCompoundingFrequency(freq)}
                                    className={`py-2 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer border ${compoundingFrequency === freq
                                        ? 'bg-[#F4C430] border-[#F4C430] text-[#171717] shadow-xs'
                                        : 'bg-[#F5F5F3] border-[#E5E5E0] text-[#6B6B6B] hover:bg-white hover:text-[#171717]'
                                        }`}
                                >
                                    {freq}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Output & SVG Doughnut Chart Column */}
                <div className="flex-1 p-6 sm:p-8 lg:p-10 bg-[#FFFDF5] flex flex-col justify-between items-center">

                    {/* Pure SVG Doughnut Chart */}
                    <div className="relative w-56 h-56 my-2 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                            {/* Principal Track Circle */}
                            <circle
                                cx="80"
                                cy="80"
                                r="65"
                                fill="transparent"
                                stroke="#171717"
                                strokeWidth="18"
                            />
                            {/* Interest Slice */}
                            <circle
                                cx="80"
                                cy="80"
                                r="65"
                                fill="transparent"
                                stroke="#F4C430"
                                strokeWidth="18"
                                strokeDasharray={`${(fdResults.interestRatio / 100) * C} ${C}`}
                                strokeDashoffset="0"
                                strokeLinecap="round"
                                className="transition-all duration-500 ease-out"
                            />
                        </svg>

                        {/* Center Value */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4">
                            <p className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest leading-tight">
                                Maturity Amount
                            </p>
                            <p className="text-xl sm:text-2xl font-black text-[#171717] mt-0.5">
                                {formatCurrency(fdResults.maturityAmount)}
                            </p>
                        </div>
                    </div>

                    {/* Chart Legend */}
                    <div className="flex items-center justify-center gap-6 my-3">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#171717] inline-block" />
                            <span className="text-xs text-[#292929] font-semibold">Principal ({fdResults.principalRatio.toFixed(0)}%)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#F4C430] inline-block" />
                            <span className="text-xs text-[#292929] font-semibold">Interest ({fdResults.interestRatio.toFixed(0)}%)</span>
                        </div>
                    </div>

                    {/* Detailed Metric Cards */}
                    <div className="w-full space-y-2.5 mt-2">
                        <div className="flex justify-between items-center py-2 border-b border-[#E5E5E0] text-left">
                            <span className="text-xs sm:text-sm text-[#6B6B6B] font-medium">Total Principal Deposit</span>
                            <span className="text-xs sm:text-sm font-black text-[#171717]">{formatCurrency(fdResults.principalAmount)}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-[#E5E5E0] text-left">
                            <span className="text-xs sm:text-sm text-[#6B6B6B] font-medium">Total Interest Earned</span>
                            <span className="text-xs sm:text-sm font-black text-[#198754]">+{formatCurrency(fdResults.totalInterest)}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-[#E5E5E0] text-left">
                            <span className="text-xs sm:text-sm text-[#6B6B6B] font-medium">Average Annual Interest</span>
                            <span className="text-xs sm:text-sm font-black text-[#171717]">{formatCurrency(fdResults.annualAverage)} / yr</span>
                        </div>
                        <div className="flex justify-between items-center py-3 bg-[#FFF8D6] rounded-xl px-3.5 text-left border border-[#F4C430]/40">
                            <span className="text-xs sm:text-sm text-[#171717] font-bold">Total Maturity Value</span>
                            <span className="text-base sm:text-xl font-black text-[#171717]">{formatCurrency(fdResults.maturityAmount)}</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Key Investment Insights Section */}
            <div className="border-t border-[#E5E5E0] bg-white p-6 sm:p-8 lg:p-10 text-left">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#171717] tracking-tight mb-6">
                    Key Investment <span className="text-[#F4C430]">Insights</span>
                </h3>

                {/* 2-Column Insights Bullets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-xs sm:text-sm text-[#292929] leading-relaxed mb-8">
                    {/* Bullet 1 */}
                    <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F4C430] shrink-0 mt-1.5" />
                        <p>
                            Your investment of <span className="bg-[#F5F5F3] text-[#171717] font-extrabold px-2 py-0.5 rounded border border-[#E5E5E0]">{formatCurrency(principalAmount)}</span> will grow to <span className="bg-[#FFF8D6] text-[#171717] font-extrabold px-2 py-0.5 rounded border border-[#F4C430]/40">{formatCurrency(fdResults.maturityAmount)}</span> in {tenureYears} years at {effectiveRate}% interest
                        </p>
                    </div>

                    {/* Bullet 2 */}
                    <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F4C430] shrink-0 mt-1.5" />
                        <p>
                            You will earn <span className="bg-[#FFF8D6] text-[#198754] font-extrabold px-2 py-0.5 rounded border border-[#198754]/30">{formatCurrency(fdResults.totalInterest)}</span> in interest, which is <span className="bg-[#FFF8D6] text-[#198754] font-extrabold px-2 py-0.5 rounded border border-[#198754]/30">{fdResults.interestPercentOfPrincipal}%</span> of your principal amount
                        </p>
                    </div>

                    {/* Bullet 3 */}
                    <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F4C430] shrink-0 mt-1.5" />
                        <p>
                            Your FD will generate <span className="bg-[#FFF8D6] text-[#171717] font-extrabold px-2 py-0.5 rounded border border-[#F4C430]/40">{formatCurrency(fdResults.annualAverage)}</span> average annual interest
                        </p>
                    </div>

                    {/* Bullet 4 */}
                    <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F4C430] shrink-0 mt-1.5" />
                        <p>
                            A 1% higher interest rate could earn you an extra <span className="bg-[#FFF8D6] text-[#198754] font-extrabold px-2 py-0.5 rounded border border-[#198754]/30">{formatCurrency(fdResults.extraInterest1Pct)}</span>
                        </p>
                    </div>

                    {/* Bullet 5 */}
                    <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F4C430] shrink-0 mt-1.5" />
                        <p>
                            Your FD generates <span className="bg-[#FFF8D6] text-[#171717] font-extrabold px-2 py-0.5 rounded border border-[#F4C430]/40">₹{fdResults.dailyInterest}</span> per day in interest income
                        </p>
                    </div>

                    {/* Bullet 6 */}
                    <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F4C430] shrink-0 mt-1.5" />
                        <p>
                            At this rate, your money will double in <span className="bg-[#F5F5F3] text-[#171717] font-extrabold px-2 py-0.5 rounded border border-[#E5E5E0]">{fdResults.doublingYears} years</span> (using the Rule of 72)
                        </p>
                    </div>
                </div>

                {/* Bottom 2 Callout Cards: Investment Tip & Note */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Left: Investment Tip */}
                    <div className="bg-[#FFF8D6] border border-[#F4C430]/40 rounded-2xl p-4 sm:p-5 shadow-xs text-xs sm:text-sm text-[#292929] leading-relaxed">
                        <span className="font-bold text-[#171717]">💡 Investment Tip:</span> Senior citizens (above 60 years) typically get 0.5% higher FD rates. Consider splitting large FDs into smaller ones to maintain liquidity and avoid breaking the entire FD for partial withdrawals.
                    </div>

                    {/* Right: Note */}
                    <div className="bg-[#F5F5F3] border border-[#E5E5E0] rounded-2xl p-4 sm:p-5 shadow-xs text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                        <span className="font-bold text-[#171717]">📋 Note:</span> FD interest is fully taxable. TDS is deducted at 10% if interest exceeds ₹40,000 (₹50,000 for senior citizens). Interest rates vary between banks and change periodically.
                    </div>
                </div>
            </div>

        </div>
    );
}
