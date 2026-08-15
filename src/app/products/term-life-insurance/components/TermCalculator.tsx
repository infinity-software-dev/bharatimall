"use client";

import React, { useState, useMemo } from "react";
import {
    ChevronDown,
    ShieldCheck,
    Zap,
    ArrowRight,
    User,
    Wind,
    Calendar,
    Target,
    Activity
} from "lucide-react";

export default function TermCalculator() {
    const [gender, setGender] = useState<"male" | "female">("male");
    const [isSmoker, setIsSmoker] = useState<boolean>(false);
    const [age, setAge] = useState<number>(18);
    const [coverage, setCoverage] = useState<number>(10000000); // 1 Crore
    const [coverTillAge, setCoverTillAge] = useState<number>(28);

    // Calculate the minimum allowed cover till age based on current age
    const minCoverTillAge = useMemo(() => Math.max(28, age + 2), [age]);

    // Ensure coverTillAge is always at least minCoverTillAge
    const effectiveCoverTillAge = useMemo(() => {
        return Math.max(coverTillAge, minCoverTillAge);
    }, [coverTillAge, minCoverTillAge]);

    // Calculate premium using useMemo
    const premium = useMemo(() => {
        // Base monthly for 18yr female, non-smoker, 1Cr
        const baseMonthly = 370;

        // 1. Age Factor: Real-world premiums grow exponentially, not linearly.
        // Approx 5.2% compounded growth per year of age.
        const ageEffect = Math.pow(1.052, age - 18);

        // 2. Gender factor: Females get a discount because of higher longevity.
        const genderEffect = gender === "male" ? 1.15 : 1.0;

        // 3. Smoker factor: Massive loading for tobacco users (Market standard ~60%)
        const smokerEffect = isSmoker ? 1.60 : 1.0;

        // 4. Coverage Factor with "Volume Discount":
        const baseCoverage = 10000000;
        let coverageEffect = 1.0;

        if (coverage > baseCoverage) {
            const excess = coverage - baseCoverage;
            coverageEffect = 1 + (excess / baseCoverage) * 0.85;
        } else if (coverage < baseCoverage) {
            coverageEffect = coverage / baseCoverage;
        }

        // 5. Term factor: Longer terms increase the risk pool duration
        const term = effectiveCoverTillAge - age;
        const termEffect = 1 + (term > 50 ? 0.25 : term > 35 ? 0.15 : 0);

        const totalPremium = Math.round(baseMonthly * ageEffect * genderEffect * smokerEffect * coverageEffect * termEffect);

        return Math.max(350, totalPremium);
    }, [gender, isSmoker, age, coverage, effectiveCoverTillAge]);

    const formatCurrency = (num: number) => {
        return new Intl.NumberFormat('en-IN', {
            maximumFractionDigits: 0
        }).format(num);
    };

    const coverageOptions = (() => {
        const options = [];
        for (let val = 2000000; val <= 200000000; val += 500000) {
            let label = "";
            if (val >= 10000000) {
                label = `${val / 10000000} Cr`;
            } else {
                label = `${val / 100000} Lacs`;
            }
            options.push({ label, value: val });
        }
        return options;
    })();

    // Handle coverTillAge change with validation
    const handleCoverTillAgeChange = (value: number) => {
        setCoverTillAge(Math.max(value, minCoverTillAge));
    };

    // Generate options for cover till age dropdown
    const coverTillAgeOptions = useMemo(() => {
        const options = [];
        for (let i = minCoverTillAge; i <= 100; i++) {
            options.push(i);
        }
        return options;
    }, [minCoverTillAge]);

    return (
        <section className="py-16 md:py-24 bg-[#FFFFFF] relative overflow-hidden font-sans" id="calculator">
            <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <h2 className="text-3xl md:text-4xl font-extrabold font-sans drop-shadow-xs text-[#171717]">
                        Term Insurance Calculator
                    </h2>
                    <p className="text-[#6B6B6B] text-base sm:text-lg font-normal leading-relaxed">
                        Calculate the exact premium for your family&apos;s protection. Our tool analyzes age, lifestyle, and coverage needs to give you the most accurate market rates.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="bg-[#FFFFFF] rounded-[2.5rem] lg:rounded-[3rem] border border-[#E5E5E0] border-b-[6px] border-b-slate-200/50 shadow-[0_30px_80px_rgba(32,118,199,0.08)] hover:-translate-y-1 hover:shadow-[0_40px_100px_rgba(32,118,199,0.12)] transition-all duration-500 overflow-hidden flex flex-col lg:flex-row">
                        {/* Left Side: Inputs */}
                        <div className="lg:w-7/12 p-8 md:p-12 space-y-10">
                            {/* Special Offer Badge */}
                            <div className="flex">
                                <span className="px-4 py-1.5 bg-[#FFF8D6] text-[#171717] text-[10px] font-black uppercase tracking-widest rounded-full shadow-md shadow-[#FFD21F]/20">
                                    Now 18% Cheaper (NO GST Benefit)
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Gender Selection */}
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black text-[#6B6B6B] uppercase tracking-widest flex items-center gap-2">
                                        <User className="w-3.5 h-3.5 text-[#171717]" /> Gender
                                    </label>
                                    <div className="flex gap-6">
                                        {(["male", "female"] as const).map((g) => (
                                            <label
                                                key={g}
                                                className="flex items-center gap-3 cursor-pointer group"
                                            >
                                                <div className="relative flex items-center justify-center">
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        checked={gender === g}
                                                        onChange={() => setGender(g)}
                                                        className="appearance-none w-5 h-5 rounded-full border-2 border-[#E5E5E0] checked:border-[#F4C430] transition-all cursor-pointer"
                                                    />
                                                    {gender === g && (
                                                        <div className="absolute w-2.5 h-2.5 rounded-full bg-[#F4C430] transition-transform pointer-events-none" />
                                                    )}
                                                </div>
                                                <span className={`font-sans text-sm font-bold capitalize transition-colors ${gender === g ? "text-[#171717]" : "text-[#6B6B6B] group-hover:text-[#292929]"}`}>
                                                    {g}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Tobacco Selection */}
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black text-[#6B6B6B] uppercase tracking-widest flex items-center gap-2">
                                        <Wind className="w-3.5 h-3.5 text-[#171717]" /> Consume Tobacco?
                                    </label>
                                    <div className="flex gap-6">
                                        {[false, true].map((s) => (
                                            <label
                                                key={String(s)}
                                                className="flex items-center gap-3 cursor-pointer group"
                                            >
                                                <div className="relative flex items-center justify-center">
                                                    <input
                                                        type="radio"
                                                        name="smoker"
                                                        checked={isSmoker === s}
                                                        onChange={() => setIsSmoker(s)}
                                                        className="appearance-none w-5 h-5 rounded-full border-2 border-[#E5E5E0] checked:border-[#F4C430] transition-all cursor-pointer"
                                                    />
                                                    {isSmoker === s && (
                                                        <div className="absolute w-2.5 h-2.5 rounded-full bg-[#F4C430] transition-transform pointer-events-none" />
                                                    )}
                                                </div>
                                                <span className={`font-sans text-sm font-bold capitalize transition-colors ${isSmoker === s ? "text-[#171717]" : "text-[#6B6B6B] group-hover:text-[#292929]"}`}>
                                                    {s ? "Yes" : "No"}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Dropdowns */}
                            <div className="space-y-6 sm:space-y-8">
                                {/* Age */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 sm:p-6 bg-[#F5F5F3] rounded-[2rem] border border-[#E5E5E0] hover:border-[#E5E5E0] transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-[#FFFFFF] rounded-xl shadow-xs flex items-center justify-center text-[#171717] border border-[#E5E5E0]">
                                            <Calendar className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-[#6B6B6B] uppercase tracking-widest">Current Age</p>
                                            <p className="text-sm font-bold text-[#171717]">What is your age?</p>
                                        </div>
                                    </div>
                                    <div className="relative min-w-[140px]">
                                        <select
                                            value={age}
                                            onChange={(e) => {
                                                const newAge = parseInt(e.target.value);
                                                setAge(newAge);
                                                const newMinCoverAge = Math.max(28, newAge + 2);
                                                if (coverTillAge < newMinCoverAge) {
                                                    setCoverTillAge(newMinCoverAge);
                                                }
                                            }}
                                            className="w-full font-sans bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl px-4 py-3 text-sm font-bold text-[#292929] appearance-none focus:outline-hidden focus:border-[#F4C430] transition-all cursor-pointer shadow-2xs"
                                        >
                                            {[...Array(48)].map((_, i) => (
                                                <option key={i} value={i + 18}>{i + 18} Years</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B] pointer-events-none" />
                                    </div>
                                </div>

                                {/* Life Cover */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 sm:p-6 bg-[#F5F5F3] rounded-[2rem] border border-[#E5E5E0] hover:border-[#E5E5E0] transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-[#FFFFFF] rounded-xl shadow-xs flex items-center justify-center text-[#171717] border border-[#E5E5E0]">
                                            <Target className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-[#6B6B6B] uppercase tracking-widest">Sum Assured</p>
                                            <p className="text-sm font-bold text-[#171717]">Life Cover Required</p>
                                        </div>
                                    </div>
                                    <div className="relative min-w-[140px]">
                                        <select
                                            value={coverage}
                                            onChange={(e) => setCoverage(parseInt(e.target.value))}
                                            className="w-full font-sans bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl px-4 py-3 text-sm font-bold text-[#292929] appearance-none focus:outline-hidden focus:border-[#F4C430] transition-all cursor-pointer shadow-2xs"
                                        >
                                            {coverageOptions.map((opt) => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B] pointer-events-none" />
                                    </div>
                                </div>

                                {/* Cover Till Age */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 sm:p-6 bg-[#F5F5F3] rounded-[2rem] border border-[#E5E5E0] hover:border-[#E5E5E0] transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-[#FFFFFF] rounded-xl shadow-xs flex items-center justify-center text-[#171717] border border-[#E5E5E0]">
                                            <Activity className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-[#6B6B6B] uppercase tracking-widest">Policy Term</p>
                                            <p className="text-sm font-bold text-[#171717]">Cover till age?</p>
                                        </div>
                                    </div>
                                    <div className="relative min-w-[140px]">
                                        <select
                                            value={effectiveCoverTillAge}
                                            onChange={(e) => handleCoverTillAgeChange(parseInt(e.target.value))}
                                            className="w-full font-sans bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl px-4 py-3 text-sm font-bold text-[#292929] appearance-none focus:outline-hidden focus:border-[#F4C430] transition-all cursor-pointer shadow-2xs"
                                        >
                                            {coverTillAgeOptions.map((val) => (
                                                <option key={val} value={val}>{val} Years</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B] pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            <p className="text-[10px] text-[#6B6B6B] font-medium italic">
                                *Price is calculated for salaried individuals, annual income 10 Lacs &amp; education is graduate and above.
                            </p>
                        </div>

                        {/* Right Side: Results */}
                        <div className="lg:w-5/12 bg-[#EBF3FC]/60 p-8 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
                            {/* Decorative Grid */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FFD21F_1px,transparent_1px)] [background-size:20px_20px]" />

                            <div className="relative z-10 space-y-8 w-full">
                                {/* 3D-ish Illustration Container */}
                                <div className="relative w-32 h-32 mx-auto mb-6">
                                    <div className="absolute inset-0 bg-[#F4C430] rounded-3xl blur-2xl opacity-40 animate-pulse" />
                                    <div className="relative w-full h-full bg-[#FFFFFF] rounded-[2rem] shadow-xl flex items-center justify-center border border-[#F4C430]">
                                        <div className="relative">
                                            <Zap className="w-12 h-12 text-[#171717] fill-[#FFD21F]/10" />
                                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#F4C430] rounded-full border-2 border-[#E5E5E0] animate-ping" />
                                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#F4C430] rounded-full border-2 border-[#E5E5E0]" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-sans text-sm font-bold text-[#6B6B6B] mb-2">
                                        Your personalized monthly premium starts from
                                    </p>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-5xl md:text-6xl font-black text-[#171717]">
                                            ₹{formatCurrency(premium)}
                                        </span>
                                        <span className="text-xl font-bold text-[#6B6B6B]">/month*</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <button
                                        onClick={() => {
                                            const el = document.getElementById("blueprints-section");
                                            if (el) {
                                                el.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                        className="w-full py-4 md:py-5 bg-[#FFF8D6] hover:from-[#F4C430] hover:to-[#FFD21F] text-[#171717] rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 md:gap-3 cursor-pointer"
                                    >
                                        <span>Check Your Premium</span>
                                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                                    </button>
                                    <p className="text-[10px] text-[#6B6B6B] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-[#171717]" /> Secure SSL Connection
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 p-3.5 bg-[#FFFFFF]/60 backdrop-blur-md rounded-2xl border border-[#E5E5E0] w-full max-w-sm">
                                <p className="text-[9px] text-[#6B6B6B] font-bold leading-relaxed">
                                    Final quote may vary based on medical results &amp; insurer&apos;s final underwriting. Subject to T&amp;C.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
