"use client";

import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// IMPORTANT: Adjust these import paths to match exactly where your components are located
import BusinessLoanCalculator from '../products/loans/business-loan/components/BusinessLoanCalculator';
import PersonalLoanCalculator from '../products/loans/personal-loan/components/LoanCalculator';
import EducationLoanCalculator from '../products/loans/education-loan/components/EMICalculator';
import VehicleLoanCalculator from '../products/loans/vehicle-loan/components/VehicleLoanCalculator';
import FDCalculator from '../products/fd/components/FDCalculator';
import NPSCalculator from '../products/nps/components/NPSCalculator';
import SIPCalculator from '../products/mutual-funds/components/SIPCalculator';

export default function CalculatorPage() {
    // State to track the currently selected calculator
    const [activeCalculator, setActiveCalculator] = useState('business');

    // Function to render the correct component based on state
    const renderCalculator = () => {
        switch (activeCalculator) {
            case 'business':
                return <BusinessLoanCalculator />;
            case 'personal':
                return <PersonalLoanCalculator />;
            case 'education':
                return <EducationLoanCalculator />;
            case 'vehicle':
                return <VehicleLoanCalculator />;
            case 'fd':
                return <FDCalculator />;
            case 'nps':
                return <NPSCalculator />;
                case 'sip':
                return <SIPCalculator />;
            default:
                return null;
        }
    };

    // Helper function for tab styling
    const getTabClass = (calculatorType: string) => {
        return `px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-semibold transition-all text-sm md:text-base ${activeCalculator === calculatorType
                ? 'bg-[#171717] text-white shadow-md'
                : 'bg-white text-[#171717] border border-[#E5E5E0] hover:bg-slate-100'
            }`;
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FFFDF5] text-[#292929] font-sans antialiased">
            <Header />

            {/* Main Content Area */}
            <main className="flex-1 w-full pt-20 pb-12 sm:pt-24 sm:pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header Title & Icon */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-blue-100 rounded-full">
                                <Calculator className="w-8 h-8 text-blue-600" />
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-[#171717] tracking-tight mb-4">
                            Financial Calculators
                        </h1>
                        <p className="text-sm sm:text-base text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
                            Plan your finances with our easy-to-use calculation tools.
                        </p>
                    </div>

                    {/* Calculator Option Selector (Dropdown) */}
                    <div className="max-w-xs mx-auto mb-10">
                        <label htmlFor="calculator-select" className="sr-only">Choose a calculator</label>
                        <div className="relative">
                            <select
                                id="calculator-select"
                                value={activeCalculator}
                                onChange={(e) => setActiveCalculator(e.target.value)}
                                className="block w-full appearance-none bg-white border border-[#E5E5E0] text-[#171717] font-semibold py-3.5 pl-4 pr-10 rounded-xl shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
                            >
                                <option value="business">Business Loan Calculator</option>
                                <option value="personal">Personal Loan Calculator</option>
                                <option value="education">Education Loan Calculator</option>
                                <option value="vehicle">Vehicle Loan Calculator</option>
                                <option value="fd">FD Calculator</option>
                                <option value="sip">SIP</option>
                                <option value="nps">NPS Calculator</option>
                            </select>
                            {/* Custom Dropdown Arrow */}
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#6B6B6B]">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Calculator Display Area */}
                    <div className="bg-white rounded-2xl shadow-sm border border-[#E5E5E0] p-4 md:p-8 min-h-[400px]">
                        {renderCalculator()}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}