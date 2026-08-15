'use client';

import React, { useState, useMemo } from 'react';
import {
    ChevronRight, Lightbulb, Coins, Building2,
    CheckCircle2, TrendingUp, DollarSign, PieChart, ShieldCheck
} from 'lucide-react';

const sliderStyle = `
  input[type=range].nps-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #F4C430;
    cursor: pointer;
    border: 2.5px solid #fff;
    box-shadow: 0 2px 6px rgba(244, 196, 48, 0.4);
    transition: transform 0.15s ease, background 0.15s ease;
  }
  input[type=range].nps-slider::-webkit-slider-thumb:hover {
    transform: scale(1.15);
    background: #FFD21F;
  }
  input[type=range].nps-slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #F4C430;
    cursor: pointer;
    border: 2.5px solid #fff;
    box-shadow: 0 2px 6px rgba(244, 196, 48, 0.4);
  }
  input[type=range].nps-slider {
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

// Reusable slider + input field
const SliderField = ({
    label, value, min, max, step, onChange, unit
}: {
    label: string; value: number; min: number; max: number; step: number;
    onChange: (v: number) => void; unit: string;
}) => (
    <div className="mb-4">
        <div className="flex items-center justify-between gap-1.5 mb-1.5">
            <label className="block text-[#171717] font-bold text-xs sm:text-sm">{label}</label>
            <span className="text-xs font-extrabold text-[#171717] bg-[#FFF8D6] px-2.5 py-1 rounded-md border border-[#F4C430]/40">
                {unit === '₹' ? `₹${value.toLocaleString('en-IN')}` : `${value} ${unit}`}
            </span>
        </div>
        <div className="slider-container mb-2">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full h-2 rounded-lg cursor-pointer nps-slider accent-[#F4C430]"
                style={{ background: getSliderBg(value, min, max) }}
            />
            <div className="flex justify-between text-[11px] text-[#6B6B6B] font-medium mt-1">
                <span>{unit === '₹' ? `₹${min.toLocaleString('en-IN')}` : unit === '%' ? `${min}%` : `${min} Yrs`}</span>
                <span>{unit === '₹' ? (max >= 100000 ? `₹${(max / 100000).toFixed(0)}L` : `₹${max.toLocaleString('en-IN')}`) : unit === '%' ? `${max}%` : `${max} Yrs`}</span>
            </div>
        </div>
        <div className="relative">
            <input
                type="number"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => {
                    const v = Number(e.target.value);
                    if (!isNaN(v)) onChange(v);
                }}
                className="w-full px-3 py-2 border border-[#E5E5E0] rounded-lg focus:outline-none focus:border-[#F4C430] bg-[#FFFDF5] focus:bg-white focus:ring-2 focus:ring-[#F4C430]/20 transition-all pr-10 text-[#292929] placeholder:text-[#6B6B6B] text-xs sm:text-sm font-medium"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B6B6B] font-medium text-xs">{unit}</span>
        </div>
    </div>
);

export default function NPSCalculator() {
    const [activeTab, setActiveTab] = useState<'retirement' | 'tax' | 'corpus'>('retirement');

    // --- RETIREMENT CALCULATOR STATE ---
    const [age, setAge] = useState(25);
    const [retirementAge, setRetirementAge] = useState(60);
    const [contribution, setContribution] = useState(5000);
    const [returnRate, setReturnRate] = useState(10);
    const [annuityPercentage, setAnnuityPercentage] = useState(40);

    // --- CORPUS CALCULATOR STATE ---
    const [corpusAge, setCorpusAge] = useState(30);
    const [corpusRetirementAge, setCorpusRetirementAge] = useState(60);
    const [corpusLifeExpectancy, setCorpusLifeExpectancy] = useState(85);
    const [currentExpenses, setCurrentExpenses] = useState(50000);
    const [inflationRate, setInflationRate] = useState(6);
    const [preRetirementReturn, setPreRetirementReturn] = useState(12);
    const [postRetirementReturn, setPostRetirementReturn] = useState(7);

    // --- TAX CALCULATOR STATE ---
    const [basicSalary, setBasicSalary] = useState(50000); // Monthly
    const [npsTaxContribution, setNpsTaxContribution] = useState(60000); // Annual direct contribution
    const [other80C, setOther80C] = useState(100000); // Other 80C investments
    const [hasEmployerContribution, setHasEmployerContribution] = useState(true);
    const [employerSector, setEmployerSector] = useState<'corporate' | 'govt'>('corporate');
    const [taxSlab, setTaxSlab] = useState<number>(30); // 5, 10, 15, 20, 30

    const formatCurrency = (value: number): string => {
        return '₹' + Math.round(value).toLocaleString('en-IN');
    };

    // --- RETIREMENT CALCULATIONS ---
    const retirementResults = useMemo(() => {
        const years = Math.max(1, retirementAge - age);
        const months = years * 12;
        const monthlyRate = returnRate / 12 / 100;

        let corpus = 0;
        if (monthlyRate > 0) {
            corpus = contribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        } else {
            corpus = contribution * months;
        }

        const invested = contribution * months;
        const wealth = Math.max(0, corpus - invested);
        const annuityAmt = corpus * (annuityPercentage / 100);
        const lump = corpus - annuityAmt;
        const pension = (annuityAmt * 0.06) / 12;

        return {
            totalInvested: Math.round(invested),
            totalCorpus: Math.round(corpus),
            wealthGained: Math.round(wealth),
            monthlyPension: Math.round(pension),
            lumpSum: Math.round(lump),
            investmentRatio: corpus > 0 ? (invested / corpus) * 100 : 50,
            wealthRatio: corpus > 0 ? (wealth / corpus) * 100 : 50,
            years,
        };
    }, [age, retirementAge, contribution, returnRate, annuityPercentage]);

    // --- CORPUS CALCULATIONS ---
    const corpusResults = useMemo(() => {
        const yearsToRetire = Math.max(1, corpusRetirementAge - corpusAge);
        const yearsInRetirement = Math.max(1, corpusLifeExpectancy - corpusRetirementAge);

        const futureMonthlyExpenses = currentExpenses * Math.pow(1 + inflationRate / 100, yearsToRetire);
        const futureAnnualExpenses = futureMonthlyExpenses * 12;
        const realReturn = ((1 + postRetirementReturn / 100) / (1 + inflationRate / 100)) - 1;

        let requiredCorpus = 0;
        if (realReturn > 0) {
            requiredCorpus = futureAnnualExpenses * ((1 - Math.pow(1 + realReturn, -yearsInRetirement)) / realReturn);
        } else if (realReturn === 0) {
            requiredCorpus = futureAnnualExpenses * yearsInRetirement;
        } else {
            const r = Math.abs(realReturn);
            requiredCorpus = futureAnnualExpenses * ((Math.pow(1 + r, yearsInRetirement) - 1) / r);
        }

        const preRetirementMonthlyRate = preRetirementReturn / 12 / 100;
        const monthsToRetire = yearsToRetire * 12;
        let monthlySavingNeeded = 0;
        if (preRetirementMonthlyRate > 0 && monthsToRetire > 0) {
            monthlySavingNeeded = (requiredCorpus * preRetirementMonthlyRate) / (Math.pow(1 + preRetirementMonthlyRate, monthsToRetire) - 1);
        }

        const totalInvested = monthlySavingNeeded * monthsToRetire;
        const wealthGained = Math.max(0, requiredCorpus - totalInvested);

        return {
            futureMonthlyExpenses: Math.round(futureMonthlyExpenses),
            requiredCorpus: Math.round(requiredCorpus),
            monthlySavingNeeded: Math.round(monthlySavingNeeded),
            totalInvested: Math.round(totalInvested),
            wealthGained: Math.round(wealthGained),
            investmentRatio: requiredCorpus > 0 ? (totalInvested / requiredCorpus) * 100 : 30,
            wealthRatio: requiredCorpus > 0 ? (wealthGained / requiredCorpus) * 100 : 70,
        };
    }, [corpusAge, corpusRetirementAge, corpusLifeExpectancy, currentExpenses, inflationRate, preRetirementReturn, postRetirementReturn]);

    // --- TAX CALCULATIONS ---
    const taxResults = useMemo(() => {
        const annualBasic = basicSalary * 12;

        // 80CCD(1) - up to 10% of basic salary, subject to remaining 80C limit (overall 1.5L)
        const limit80CCD1 = annualBasic * 0.10;
        const remaining80C = Math.max(0, 150000 - other80C);
        const eligible80CCD1 = Math.min(npsTaxContribution, limit80CCD1);
        const claimed80CCD1 = Math.min(eligible80CCD1, remaining80C);

        // 80CCD(1B) - Additional deduction up to ₹50,000 for self contribution
        const remainingFor1B = npsTaxContribution - claimed80CCD1;
        const claimed80CCD1B = Math.min(Math.max(0, remainingFor1B), 50000);

        // 80CCD(2) - Employer contribution (10% of basic for corporate, 14% for govt)
        const sectorRate = employerSector === 'corporate' ? 0.10 : 0.14;
        const claimed80CCD2 = hasEmployerContribution ? (annualBasic * sectorRate) : 0;

        const totalDeduction = claimed80CCD1 + claimed80CCD1B + claimed80CCD2;

        // Calculate tax saved including 4% cess
        const effectiveTaxRate = taxSlab * 1.04;
        const totalTaxSaved = totalDeduction * (effectiveTaxRate / 100);

        return {
            annualBasic,
            claimed80CCD1: Math.round(claimed80CCD1),
            claimed80CCD1B: Math.round(claimed80CCD1B),
            claimed80CCD2: Math.round(claimed80CCD2),
            totalDeduction: Math.round(totalDeduction),
            totalTaxSaved: Math.round(totalTaxSaved),
            effectiveTaxRate: effectiveTaxRate.toFixed(1),
        };
    }, [basicSalary, npsTaxContribution, other80C, hasEmployerContribution, employerSector, taxSlab]);

    // Circumference for SVG doughnut (r = 65) -> 2 * PI * 65 = 408.407
    const C = 408.4;

    return (
        <section id="calculator" className="relative py-12 md:py-16 bg-[#F5F5F3] border-b border-[#E5E5E0] overflow-hidden font-sans">
            <style dangerouslySetInnerHTML={{ __html: sliderStyle }} />
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E5E5E0]">

                    {/* Header Card / Tab Controller */}
                    <div className="bg-white text-[#171717] py-8 px-6 sm:px-10 border-b border-[#E5E5E0]">
                        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
                            <div className="text-center xl:text-left">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 tracking-tight text-[#171717]">
                                    {activeTab === 'retirement' ? (
                                        <>NPS Retirement <span className="text-[#F4C430]">Calculator</span></>
                                    ) : activeTab === 'tax' ? (
                                        <>NPS Tax Savings <span className="text-[#F4C430]">Calculator</span></>
                                    ) : (
                                        <>Retirement Corpus <span className="text-[#F4C430]">Calculator</span></>
                                    )}
                                </h2>
                                <p className="text-[#6B6B6B] text-xs sm:text-sm max-w-xl mx-auto xl:mx-0 font-normal">
                                    {activeTab === 'retirement'
                                        ? 'Visualize your financial future. Estimate retirement corpus and monthly pension.'
                                        : activeTab === 'tax'
                                            ? 'Find out how much income tax you can save annually by choosing NPS.'
                                            : 'Calculate the total corpus you need to maintain your lifestyle post-retirement.'
                                    }
                                </p>
                            </div>

                            {/* Tab Toggles */}
                            <div className="p-1.5 bg-[#F5F5F3] rounded-2xl flex flex-wrap justify-center gap-1 border border-[#E5E5E0] self-center xl:self-auto shrink-0 shadow-xs w-full sm:w-auto">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('retirement')}
                                    className={`px-3 sm:px-5 py-2.5 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 flex-1 sm:flex-none whitespace-nowrap cursor-pointer ${activeTab === 'retirement'
                                        ? 'bg-[#F4C430] text-[#171717] shadow-xs'
                                        : 'text-[#6B6B6B] hover:text-[#171717]'
                                        }`}
                                >
                                    Retirement Planner
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('tax')}
                                    className={`px-3 sm:px-5 py-2.5 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 flex-1 sm:flex-none whitespace-nowrap cursor-pointer ${activeTab === 'tax'
                                        ? 'bg-[#F4C430] text-[#171717] shadow-xs'
                                        : 'text-[#6B6B6B] hover:text-[#171717]'
                                        }`}
                                >
                                    Tax Savings
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('corpus')}
                                    className={`px-3 sm:px-5 py-2.5 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 flex-1 sm:flex-none whitespace-nowrap cursor-pointer ${activeTab === 'corpus'
                                        ? 'bg-[#F4C430] text-[#171717] shadow-xs'
                                        : 'text-[#6B6B6B] hover:text-[#171717]'
                                        }`}
                                >
                                    Corpus Calculator
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row">
                        {/* Left: Inputs */}
                        <div className="flex-1 p-6 sm:p-8 lg:p-10 lg:border-r border-[#E5E5E0] space-y-6 bg-white">

                            {activeTab === 'retirement' && (
                                <>
                                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#E5E5E0]">
                                        <Coins className="text-[#F4C430] w-5 h-5" />
                                        <h3 className="text-sm font-black text-[#171717] uppercase tracking-wider">Retirement Variables</h3>
                                    </div>

                                    <SliderField
                                        label="Current Age"
                                        value={age} min={18} max={60} step={1}
                                        onChange={setAge}
                                        unit="Yrs"
                                    />
                                    <SliderField
                                        label="Monthly Contribution"
                                        value={contribution} min={500} max={150000} step={500}
                                        onChange={setContribution}
                                        unit="₹"
                                    />
                                    <SliderField
                                        label="Expected Annual Return"
                                        value={returnRate} min={5} max={15} step={0.5}
                                        onChange={setReturnRate}
                                        unit="%"
                                    />
                                    <SliderField
                                        label="Annuity Reinvestment"
                                        value={annuityPercentage} min={40} max={100} step={5}
                                        onChange={setAnnuityPercentage}
                                        unit="%"
                                    />
                                </>
                            )}

                            {activeTab === 'tax' && (
                                <>
                                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#E5E5E0]">
                                        <Coins className="text-[#F4C430] w-5 h-5" />
                                        <h3 className="text-sm font-black text-[#171717] uppercase tracking-wider">Income &amp; Tax Parameters</h3>
                                    </div>

                                    <SliderField
                                        label="Monthly Basic Salary (+ DA)"
                                        value={basicSalary} min={10000} max={500000} step={5000}
                                        onChange={setBasicSalary}
                                        unit="₹"
                                    />
                                    <SliderField
                                        label="Your Annual NPS Contribution"
                                        value={npsTaxContribution} min={0} max={250000} step={5000}
                                        onChange={setNpsTaxContribution}
                                        unit="₹"
                                    />
                                    <SliderField
                                        label="Other 80C Investments (PPF, ELSS, EPF)"
                                        value={other80C} min={0} max={150000} step={5000}
                                        onChange={setOther80C}
                                        unit="₹"
                                    />

                                    {/* Tax Slab Selection */}
                                    <div className="mb-4">
                                        <label className="block text-[#171717] font-semibold text-xs sm:text-sm mb-2">
                                            Applicable Tax Slab (Old/New Regime)
                                        </label>
                                        <div className="grid grid-cols-4 gap-2">
                                            {[5, 10, 20, 30].map((slab) => (
                                                <button
                                                    key={slab}
                                                    type="button"
                                                    onClick={() => setTaxSlab(slab)}
                                                    className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer border ${taxSlab === slab
                                                        ? 'bg-[#F4C430] border-[#F4C430] text-[#171717] shadow-xs'
                                                        : 'bg-[#F5F5F3] border-[#E5E5E0] text-[#6B6B6B] hover:bg-[#FFF8D6] hover:text-[#171717] hover:border-[#F4C430]/40'
                                                        }`}
                                                >
                                                    {slab}%
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Employer Sector Toggle */}
                                    <div className="pt-2 border-t border-[#E5E5E0] flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Building2 className="w-4 h-4 text-[#F4C430]" />
                                            <span className="text-xs font-semibold text-[#171717]">Employer Sector</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setEmployerSector('corporate')}
                                                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer border ${employerSector === 'corporate'
                                                    ? 'bg-[#F4C430] border-[#F4C430] text-[#171717] shadow-xs'
                                                    : 'bg-[#F5F5F3] border-[#E5E5E0] text-[#6B6B6B] hover:bg-white hover:text-[#171717]'
                                                    }`}
                                            >
                                                Corporate (10%)
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setEmployerSector('govt')}
                                                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer border ${employerSector === 'govt'
                                                    ? 'bg-[#F4C430] border-[#F4C430] text-[#171717] shadow-xs'
                                                    : 'bg-[#F5F5F3] border-[#E5E5E0] text-[#6B6B6B] hover:bg-white hover:text-[#171717]'
                                                    }`}
                                            >
                                                Govt (14%)
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === 'corpus' && (
                                <>
                                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#E5E5E0]">
                                        <TrendingUp className="text-[#F4C430] w-5 h-5" />
                                        <h3 className="text-sm font-black text-[#171717] uppercase tracking-wider">Lifestyle &amp; Inflation Variables</h3>
                                    </div>

                                    <SliderField
                                        label="Current Age"
                                        value={corpusAge} min={18} max={60} step={1}
                                        onChange={setCorpusAge}
                                        unit="Yrs"
                                    />
                                    <SliderField
                                        label="Current Monthly Expenses"
                                        value={currentExpenses} min={10000} max={300000} step={5000}
                                        onChange={setCurrentExpenses}
                                        unit="₹"
                                    />
                                    <SliderField
                                        label="Expected Inflation Rate"
                                        value={inflationRate} min={4} max={10} step={0.5}
                                        onChange={setInflationRate}
                                        unit="%"
                                    />
                                    <SliderField
                                        label="Pre-Retirement Investment Return"
                                        value={preRetirementReturn} min={8} max={16} step={0.5}
                                        onChange={setPreRetirementReturn}
                                        unit="%"
                                    />
                                </>
                            )}
                        </div>

                        {/* Right: Output Results & Self-Contained SVG Chart */}
                        <div className="flex-1 p-6 sm:p-8 lg:p-10 bg-[#FFFDF5] flex flex-col justify-between items-center">

                            {/* Self Contained Pure SVG Doughnut Chart */}
                            <div className="relative w-56 h-56 my-2 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                                    {/* Track / Base Circle */}
                                    <circle
                                        cx="80"
                                        cy="80"
                                        r="65"
                                        fill="transparent"
                                        stroke="#171717"
                                        strokeWidth="18"
                                    />

                                    {/* Segment 1: Invested / Primary */}
                                    {activeTab === 'retirement' && (
                                        <circle
                                            cx="80"
                                            cy="80"
                                            r="65"
                                            fill="transparent"
                                            stroke="#F4C430"
                                            strokeWidth="18"
                                            strokeDasharray={`${(retirementResults.wealthRatio / 100) * C} ${C}`}
                                            strokeDashoffset="0"
                                            strokeLinecap="round"
                                            className="transition-all duration-500 ease-out"
                                        />
                                    )}

                                    {activeTab === 'corpus' && (
                                        <circle
                                            cx="80"
                                            cy="80"
                                            r="65"
                                            fill="transparent"
                                            stroke="#F4C430"
                                            strokeWidth="18"
                                            strokeDasharray={`${(corpusResults.wealthRatio / 100) * C} ${C}`}
                                            strokeDashoffset="0"
                                            strokeLinecap="round"
                                            className="transition-all duration-500 ease-out"
                                        />
                                    )}

                                    {activeTab === 'tax' && (
                                        <>
                                            <circle
                                                cx="80"
                                                cy="80"
                                                r="65"
                                                fill="transparent"
                                                stroke="#F4C430"
                                                strokeWidth="18"
                                                strokeDasharray={`${(taxResults.totalDeduction > 0 ? (taxResults.claimed80CCD1B / taxResults.totalDeduction) * C : 0)} ${C}`}
                                                strokeDashoffset="0"
                                                className="transition-all duration-500 ease-out"
                                            />
                                            <circle
                                                cx="80"
                                                cy="80"
                                                r="65"
                                                fill="transparent"
                                                stroke="#171717"
                                                strokeWidth="18"
                                                strokeDasharray={`${(taxResults.totalDeduction > 0 ? (taxResults.claimed80CCD2 / taxResults.totalDeduction) * C : 0)} ${C}`}
                                                strokeDashoffset={`-${(taxResults.totalDeduction > 0 ? (taxResults.claimed80CCD1B / taxResults.totalDeduction) * C : 0)}`}
                                                className="transition-all duration-500 ease-out"
                                            />
                                        </>
                                    )}
                                </svg>

                                {/* Center Label */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4">
                                    <p className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest leading-tight">
                                        {activeTab === 'retirement' ? 'Monthly Pension' : activeTab === 'tax' ? 'Annual Tax Saved' : 'Monthly Saving Needed'}
                                    </p>
                                    <p className="text-xl sm:text-2xl font-black text-[#171717] mt-0.5">
                                        {activeTab === 'retirement'
                                            ? formatCurrency(retirementResults.monthlyPension)
                                            : activeTab === 'tax'
                                                ? formatCurrency(taxResults.totalTaxSaved)
                                                : formatCurrency(corpusResults.monthlySavingNeeded)}
                                    </p>
                                </div>
                            </div>

                            {/* Legend */}
                            <div className="flex flex-wrap items-center justify-center gap-4 my-3">
                                {activeTab === 'retirement' && (
                                    <>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-3 h-3 rounded-full bg-[#171717] inline-block" />
                                            <span className="text-xs text-[#292929] font-semibold">Invested Amount</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-3 h-3 rounded-full bg-[#F4C430] inline-block" />
                                            <span className="text-xs text-[#292929] font-semibold">Wealth Gained</span>
                                        </div>
                                    </>
                                )}
                                {activeTab === 'tax' && (
                                    <>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-3 h-3 rounded-full bg-[#E5E5E0] inline-block" />
                                            <span className="text-xs text-[#6B6B6B] font-semibold">80CCD(1)</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-3 h-3 rounded-full bg-[#F4C430] inline-block" />
                                            <span className="text-xs text-[#292929] font-semibold">80CCD(1B) Extra</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-3 h-3 rounded-full bg-[#171717] inline-block" />
                                            <span className="text-xs text-[#292929] font-semibold">80CCD(2) Employer</span>
                                        </div>
                                    </>
                                )}
                                {activeTab === 'corpus' && (
                                    <>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-3 h-3 rounded-full bg-[#171717] inline-block" />
                                            <span className="text-xs text-[#292929] font-semibold">Total Invested</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-3 h-3 rounded-full bg-[#F4C430] inline-block" />
                                            <span className="text-xs text-[#292929] font-semibold">Compounded Growth</span>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Summary Rows */}
                            <div className="w-full space-y-2.5 mt-2">
                                {activeTab === 'retirement' && (
                                    <>
                                        <div className="flex justify-between items-center py-2 border-b border-[#E5E5E0] text-left">
                                            <span className="text-xs sm:text-sm text-[#6B6B6B] font-medium">Total Investment</span>
                                            <span className="text-xs sm:text-sm font-black text-[#171717]">{formatCurrency(retirementResults.totalInvested)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-[#E5E5E0] text-left">
                                            <span className="text-xs sm:text-sm text-[#6B6B6B] font-medium">Est. Wealth Gained</span>
                                            <span className="text-xs sm:text-sm font-black text-[#198754]">+{formatCurrency(retirementResults.wealthGained)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-[#E5E5E0] text-left">
                                            <span className="text-xs sm:text-sm text-[#6B6B6B] font-medium">Lump Sum ({100 - annuityPercentage}%)</span>
                                            <span className="text-xs sm:text-sm font-black text-[#171717]">{formatCurrency(retirementResults.lumpSum)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 bg-[#FFF8D6] rounded-xl px-3.5 text-left border border-[#F4C430]/40">
                                            <span className="text-xs sm:text-sm text-[#171717] font-bold">Total Expected Corpus</span>
                                            <span className="text-base sm:text-xl font-black text-[#171717]">{formatCurrency(retirementResults.totalCorpus)}</span>
                                        </div>
                                    </>
                                )}

                                {activeTab === 'tax' && (
                                    <>
                                        <div className="flex justify-between items-center py-2 border-b border-[#E5E5E0] text-left">
                                            <span className="text-xs sm:text-sm text-[#6B6B6B] font-medium">80CCD(1B) Self Deduct</span>
                                            <span className="text-xs sm:text-sm font-black text-[#171717]">{formatCurrency(taxResults.claimed80CCD1B)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-[#E5E5E0] text-left">
                                            <span className="text-xs sm:text-sm text-[#6B6B6B] font-medium">80CCD(2) Employer Deduct</span>
                                            <span className="text-xs sm:text-sm font-black text-[#171717]">{formatCurrency(taxResults.claimed80CCD2)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-[#E5E5E0] text-left">
                                            <span className="text-xs sm:text-sm text-[#6B6B6B] font-medium">Total Tax Deduction</span>
                                            <span className="text-xs sm:text-sm font-black text-[#171717]">{formatCurrency(taxResults.totalDeduction)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 bg-[#FFF8D6] rounded-xl px-3.5 text-left border border-[#198754]/30">
                                            <span className="text-xs sm:text-sm text-[#171717] font-bold">Direct Annual Tax Saved</span>
                                            <span className="text-base sm:text-xl font-black text-[#198754]">+{formatCurrency(taxResults.totalTaxSaved)}</span>
                                        </div>
                                    </>
                                )}

                                {activeTab === 'corpus' && (
                                    <>
                                        <div className="flex justify-between items-center py-2 border-b border-[#E5E5E0] text-left">
                                            <span className="text-xs sm:text-sm text-[#6B6B6B] font-medium">Monthly Cost in Retirement</span>
                                            <span className="text-xs sm:text-sm font-black text-[#171717]">{formatCurrency(corpusResults.futureMonthlyExpenses)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-[#E5E5E0] text-left">
                                            <span className="text-xs sm:text-sm text-[#6B6B6B] font-medium">Total Invested Principal</span>
                                            <span className="text-xs sm:text-sm font-black text-[#171717]">{formatCurrency(corpusResults.totalInvested)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 bg-[#FFF8D6] rounded-xl px-3.5 text-left border border-[#F4C430]/40">
                                            <span className="text-xs sm:text-sm text-[#171717] font-bold">Target Retirement Corpus</span>
                                            <span className="text-base sm:text-xl font-black text-[#171717]">{formatCurrency(corpusResults.requiredCorpus)}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Insights Footer Box */}
                    <div className="border-t border-[#E5E5E0] bg-white p-6 sm:p-8 lg:p-10">
                        <div className="flex items-center gap-3 mb-6 text-left">
                            <div className="p-2 bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 rounded-xl shrink-0">
                                <Lightbulb className="w-5 h-5 text-[#171717]" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-extrabold text-[#171717] tracking-tight">
                                Key Retirement <span className="text-[#F4C430]">Insights</span>
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 text-left">
                            <div className="flex gap-3">
                                <ChevronRight className="mt-0.5 text-[#F4C430] shrink-0 w-4 h-4" />
                                <p className="text-[#292929] font-medium text-xs sm:text-sm leading-relaxed">
                                    By investing <span className="bg-[#F5F5F3] text-[#171717] font-bold px-1.5 py-0.5 rounded border border-[#E5E5E0]">{formatCurrency(contribution)}</span> monthly for {retirementResults.years} years, you accumulate a corpus of <span className="bg-[#FFF8D6] text-[#171717] font-bold px-1.5 py-0.5 rounded border border-[#F4C430]/40">{formatCurrency(retirementResults.totalCorpus)}</span>.
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <ChevronRight className="mt-0.5 text-[#F4C430] shrink-0 w-4 h-4" />
                                <p className="text-[#292929] font-medium text-xs sm:text-sm leading-relaxed">
                                    With {annuityPercentage}% annuity, you secure a monthly pension of <span className="bg-[#FFF8D6] text-[#198754] font-bold px-1.5 py-0.5 rounded border border-[#198754]/30">{formatCurrency(retirementResults.monthlyPension)}</span> for life post-retirement.
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <ChevronRight className="mt-0.5 text-[#F4C430] shrink-0 w-4 h-4" />
                                <p className="text-[#292929] font-medium text-xs sm:text-sm leading-relaxed">
                                    NPS offers an exclusive additional tax deduction of <span className="bg-[#FFF8D6] text-[#171717] font-bold px-1.5 py-0.5 rounded border border-[#F4C430]/40">₹50,000</span> under Section 80CCD(1B) over and above 80C.
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <ChevronRight className="mt-0.5 text-[#F4C430] shrink-0 w-4 h-4" />
                                <p className="text-[#292929] font-medium text-xs sm:text-sm leading-relaxed">
                                    Starting earlier gives you the greatest advantage of compounding, growing exponentially over long horizons.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}