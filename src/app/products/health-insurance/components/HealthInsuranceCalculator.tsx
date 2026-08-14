'use client';
import React, { useState } from 'react';
import { Calculator, Shield, ArrowRight } from 'lucide-react';

const HealthInsuranceCalculator = () => {
    const [age, setAge] = useState('26-35');
    const [sumInsured, setSumInsured] = useState('₹10 Lakh');
    const [coverageType, setCoverageType] = useState('Individual');
    const [familyMembers, setFamilyMembers] = useState('2 Members');
    const [isCalculated, setIsCalculated] = useState(false);
    const [monthlyPremium, setMonthlyPremium] = useState(0);
    const [yearlyPremium, setYearlyPremium] = useState(0);

    const calculatePremium = () => {
        // Base premium for 18-25, 3L, Individual
        const base = 399;
        // Age Multiplier
        const ageMultipliers: { [key: string]: number } = {
            '18-25': 1.0, '26-35': 1.2, '36-45': 1.6, '46-55': 2.2, '56-65': 3.5, '65+': 5.0
        };
        // Sum Insured Multiplier
        const sumMultipliers: { [key: string]: number } = {
            '₹5 Lakh': 1.0, '₹10 Lakh': 1.5, '₹20 Lakh': 2.2, '₹50 Lakh': 3.5, '₹1 Crore': 5.5, '₹2 Crore': 8.5, '₹3 Crore': 12.0
        };

        let result = base * (ageMultipliers[age] || 1) * (sumMultipliers[sumInsured] || 1);

        if (coverageType === 'Family Floater') {
            const memberCount = parseInt(familyMembers) || 2;
            result = result * (1.5 + (memberCount - 2) * 0.3);
        }

        setMonthlyPremium(Math.round(result));
        setYearlyPremium(Math.round(result * 11.2)); // Slight discount for yearly
        setIsCalculated(true);
    };

    return (
        <div className="w-full font-sans">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative group max-w-4xl mx-auto">
                {/* Content Container */}
                <div className="p-4 sm:p-6 md:p-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* Inputs */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Your Age</label>
                                <select
                                    className="w-full h-13 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2076C7]/20 focus:border-[#2076C7] transition-all outline-none text-gray-700 font-medium cursor-pointer"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                >
                                    {['18-25', '26-35', '36-45', '46-55', '56-65', '65+'].map(a => (
                                        <option key={a} value={a}>{a} Years</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Sum Insured</label>
                                <select
                                    className="w-full h-13 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2076C7]/20 focus:border-[#2076C7] transition-all outline-none text-gray-700 font-medium cursor-pointer"
                                    value={sumInsured}
                                    onChange={(e) => setSumInsured(e.target.value)}
                                >
                                    {['₹5 Lakh', '₹10 Lakh', '₹20 Lakh', '₹50 Lakh', '₹1 Crore', '₹2 Crore', '₹3 Crore'].map(s => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Coverage Type</label>
                                <div className="flex gap-3">
                                    {['Individual', 'Family Floater'].map(type => (
                                        <button
                                            type="button"
                                            key={type}
                                            onClick={() => setCoverageType(type)}
                                            className={`flex-1 h-13 rounded-xl font-bold text-sm transition-all border cursor-pointer ${coverageType === type
                                                ? 'border-transparent text-white shadow-md'
                                                : 'bg-white border-gray-200 text-gray-600 hover:border-[#1CADA3]/40 hover:bg-[#1CADA3]/5'
                                                }`}
                                            style={coverageType === type ? { background: 'linear-gradient(to right, #2076C7, #1CADA3)' } : {}}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {coverageType === 'Family Floater' && (
                                <div className="space-y-2 animate-fadeIn">
                                    <label className="block text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">Family Members</label>
                                    <select
                                        className="w-full h-13 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2076C7]/20 focus:border-[#2076C7] transition-all outline-none text-gray-700 font-medium cursor-pointer"
                                        value={familyMembers}
                                        onChange={(e) => setFamilyMembers(e.target.value)}
                                    >
                                        {['2 Members', '3 Members', '4 Members', '5+ Members'].map(m => (
                                            <option key={m} value={m}>{m}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                            <button
                                type="button"
                                onClick={calculatePremium}
                                className="group relative w-full h-14 text-white rounded-xl font-bold text-sm sm:text-base tracking-wider shadow-lg hover:brightness-110 transform hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden uppercase"
                                style={{ background: 'linear-gradient(to right, #2076C7, #1CADA3)' }}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    CALCULATE PREMIUM
                                    <Calculator size={18} />
                                </span>
                            </button>
                        </div>
                        {/* Results */}
                        <div className="relative mt-2 md:mt-0 flex flex-col">
                            <div className="bg-gray-50/70 backdrop-blur-sm rounded-xl p-5 sm:p-6 md:p-8 h-full border border-dashed border-gray-200 flex flex-col justify-center">
                                {!isCalculated ? (
                                    <div className="text-center space-y-3 py-10">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto text-[#2076C7] shadow-sm border border-gray-100">
                                            <Shield size={28} />
                                        </div>
                                        <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                            Enter your coverage details to see <br /> instant estimated premiums
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-6 animate-fadeIn">
                                        <div className="text-center">
                                            <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 border border-teal-200/60 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2">
                                                Best Estimate
                                            </span>
                                            <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-gray-900">
                                                Your Estimated Premium
                                            </h3>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="bg-white p-4 sm:p-5 rounded-xl shadow-xs border border-gray-100">
                                                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Monthly Premium</p>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-2xl sm:text-3xl font-extrabold text-[#2076C7]">₹{monthlyPremium.toLocaleString('en-IN')}</span>
                                                    <span className="text-gray-400 text-xs font-medium">/month*</span>
                                                </div>
                                            </div>
                                            <div className="p-4 sm:p-5 rounded-xl shadow-md text-white"
                                                style={{ background: 'linear-gradient(135deg, #2076C7, #1CADA3)' }}
                                            >
                                                <p className="text-white/80 text-[11px] font-bold uppercase tracking-wider mb-1">Yearly Premium (Save ~7%)</p>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-2xl sm:text-3xl font-extrabold text-white">₹{yearlyPremium.toLocaleString('en-IN')}</span>
                                                    <span className="text-white/70 text-xs font-medium">/year*</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const el = document.getElementById('plans-grid');
                                                if (el) {
                                                    el.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }}
                                            className="group relative w-full h-12 text-white rounded-xl text-xs sm:text-sm font-bold tracking-wider shadow-md hover:brightness-110 transform hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 overflow-hidden"
                                            style={{ background: 'linear-gradient(to right, #2076C7, #1CADA3)' }}
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                VIEW DETAILED PLANS
                                                <ArrowRight size={16} />
                                            </span>
                                        </button>
                                        <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                                            *This is an estimate. Final premium depends on medical history, age of members, and insurer underwriting.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthInsuranceCalculator;
