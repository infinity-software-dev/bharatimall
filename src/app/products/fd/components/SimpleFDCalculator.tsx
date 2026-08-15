'use client';
import React, { useState } from 'react';

// Format currency for display
const formatCurrency = (value: number): string => {
    if (value === 0) return '₹0';
    return '₹' + value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const SimpleFDCalculator: React.FC = () => {
    const [principal, setPrincipal] = useState<number>(100000);
    const [rate, setRate] = useState<number>(7.5);
    const [tenure, setTenure] = useState<number>(5); // in years

    // Simple calculation: A = P(1 + r/4)^(4t) for quarterly compounding
    const calculateReturns = () => {
        const ratePerPeriod = rate / 400; // 4 quarters, 100 percentages
        const totalPeriods = tenure * 4;
        const maturity = principal * Math.pow(1 + ratePerPeriod, totalPeriods);
        const interest = maturity - principal;

        return {
            maturity: Math.round(maturity),
            interest: Math.round(interest)
        };
    };

    const { maturity, interest } = calculateReturns();

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E5E5E0] flex flex-col md:flex-row gap-8 font-sans">
            {/* Input Section */}
            <div className="flex-1 space-y-6">
                
                <h3 className="text-lg font-bold text-[#171717] flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#FFF8D6] flex items-center justify-center text-[#171717] font-bold text-sm border border-[#F4C430]/40">
                    ₹
                  </span>
                  Quick FD Calculator
                </h3>

                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm font-semibold text-[#171717]">Total Investment</label>
                        <div className="bg-[#FFF8D6] px-3 py-1 rounded-md border border-[#F4C430]/40">
                          <span className="text-sm font-bold text-[#171717]">{formatCurrency(principal)}</span>
                        </div>
                    </div>
                    <input 
                        type="range" 
                        min="10000" 
                        max="1000000" 
                        step="10000"
                        value={principal} 
                        onChange={(e) => setPrincipal(Number(e.target.value))}
                        className="w-full h-2 bg-[#E5E5E0] rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                        style={{ background: `linear-gradient(to right, #F4C430 0%, #F4C430 ${((principal - 10000) / (1000000 - 10000)) * 100}%, #E5E5E0 ${((principal - 10000) / (1000000 - 10000)) * 100}%, #E5E5E0 100%)` }}
                    />
                </div>

                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm font-semibold text-[#171717]">Interest Rate (p.a)</label>
                        <div className="bg-[#FFF8D6] px-3 py-1 rounded-md border border-[#F4C430]/40">
                          <span className="text-sm font-bold text-[#198754]">{rate}%</span>
                        </div>
                    </div>
                    <input 
                        type="range" 
                        min="4" 
                        max="10" 
                        step="0.1"
                        value={rate} 
                        onChange={(e) => setRate(Number(e.target.value))}
                        className="w-full h-2 bg-[#E5E5E0] rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                        style={{ background: `linear-gradient(to right, #F4C430 0%, #F4C430 ${((rate - 4) / (10 - 4)) * 100}%, #E5E5E0 ${((rate - 4) / (10 - 4)) * 100}%, #E5E5E0 100%)` }}
                    />
                </div>

                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm font-semibold text-[#171717]">Time Period (Years)</label>
                        <div className="bg-[#FFF8D6] px-3 py-1 rounded-md border border-[#F4C430]/40">
                           <span className="text-sm font-bold text-[#171717]">{tenure} Yr</span>
                        </div>
                    </div>
                    <input 
                        type="range" 
                        min="1" 
                        max="10" 
                        step="1"
                        value={tenure} 
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="w-full h-2 bg-[#E5E5E0] rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                        style={{ background: `linear-gradient(to right, #F4C430 0%, #F4C430 ${((tenure - 1) / (10 - 1)) * 100}%, #E5E5E0 ${((tenure - 1) / (10 - 1)) * 100}%, #E5E5E0 100%)` }}
                    />
                </div>
            </div>

            {/* Results Section */}
            <div className="w-full md:w-64 bg-[#FFFDF5] rounded-xl p-6 flex flex-col justify-center items-center shadow-inner border border-[#E5E5E0]">
                <div className="space-y-4 w-full">
                    <div className="text-center">
                        <p className="text-xs text-[#6B6B6B] font-semibold mb-1 uppercase tracking-wider">Invested Amount</p>
                        <p className="text-lg font-bold text-[#171717]">{formatCurrency(principal)}</p>
                    </div>
                    <div className="w-full h-px bg-[#E5E5E0]" />
                    <div className="text-center">
                        <p className="text-xs text-[#6B6B6B] font-semibold mb-1 uppercase tracking-wider">Est. Returns</p>
                        <p className="text-lg font-bold text-[#198754]">+{formatCurrency(interest)}</p>
                    </div>
                    <div className="w-full h-px bg-[#E5E5E0]" />
                    <div className="text-center">
                        <p className="text-xs text-[#171717] font-bold mb-1 uppercase tracking-wider">Total Value</p>
                        <p className="text-2xl font-black text-[#171717]">{formatCurrency(maturity)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleFDCalculator;
