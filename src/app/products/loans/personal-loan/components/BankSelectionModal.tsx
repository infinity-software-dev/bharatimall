"use client";

import React, { useState } from "react";
import { X, Landmark, ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export interface PersonalLoanBank {
  name: string;
  idealProfile: string;
  description: string;
}

const HARDCODED_BANKS: PersonalLoanBank[] = [
  {
    name: "HDFC Bank",
    idealProfile: "Salaried professionals with monthly income > ₹25,000 and CIBIL score 720+",
    description: "Instant disbursal for pre-approved customers, competitive interest rates starting at 10.50% p.a., and flexible tenures up to 72 months.",
  },
  {
    name: "State Bank of India",
    idealProfile: "Government & PSU employees or salaried individuals with existing SBI accounts",
    description: "Low processing charges, transparent pricing, zero prepayment penalty options, and repayment tenures up to 84 months.",
  },
  {
    name: "ICICI Bank",
    idealProfile: "Salaried and self-employed individuals looking for rapid digital approvals",
    description: "100% paperless digital journey, instant funds transfer, and customized loan amounts up to ₹50 Lakhs.",
  },
  {
    name: "Axis Bank",
    idealProfile: "Corporate salaried employees with a minimum of 1 year of employment history",
    description: "Minimal documentation, quick online KYC verification, and attractive interest rates with flexible EMI options.",
  },
  {
    name: "Kotak Mahindra Bank",
    idealProfile: "Salaried employees in metropolitan & tier-1 cities with CIBIL score > 700",
    description: "Quick sanctioning, quick turnaround times, and hassle-free online balance transfer options.",
  },
  {
    name: "Bajaj Finserv",
    idealProfile: "Individuals seeking high-ticket personal loans with flexi-hybrid repayment options",
    description: "Flexi Loan facility allowing multiple withdrawals and repayments with interest charged only on utilized amounts.",
  },
];

interface BankSelectionModalProps {
  onClose: () => void;
  onApply: (bankName: string) => void;
  initialBankName?: string;
}

export default function BankSelectionModal({
  onClose,
  onApply,
  initialBankName,
}: BankSelectionModalProps) {
  const [selectedBank, setSelectedBank] = useState<PersonalLoanBank | null>(() => {
    if (initialBankName) {
      return HARDCODED_BANKS.find((b) => b.name === initialBankName) || null;
    }
    return null;
  });

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose}></div>

      {/* Modal Dialog */}
      <div className="relative bg-[#FFFFFF] w-full max-w-3xl rounded-3xl border border-[#E5E5E0] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 md:p-7 border-b border-[#E5E5E0] bg-[#FFFFFF] shrink-0">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#171717]">
              {selectedBank ? "Lending Partner Details" : "Choose Your Preferred Partner"}
            </h2>
            <p className="text-xs md:text-sm text-[#6B6B6B] mt-0.5">
              {selectedBank
                ? selectedBank.name
                : "Select a financial institution to view specific terms & offers"}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 rounded-full bg-[#F5F5F3] hover:bg-[#D64545]/10 flex items-center justify-center text-[#292929] hover:text-[#D64545] transition-colors cursor-pointer border border-[#E5E5E0]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-7 bg-[#FFFDF5]">
          {!selectedBank ? (
            /* Bank List View */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HARDCODED_BANKS.map((bank, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedBank(bank)}
                  className="group bg-[#FFFFFF] rounded-2xl border border-[#E5E5E0] p-5 flex items-center justify-between hover:shadow-md hover:border-[#F4C430] transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF8D6] border border-[#E5E5E0] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-[#171717]">
                      <Landmark size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#171717] text-sm md:text-base leading-tight">
                        {bank.name}
                      </h3>
                      <span className="text-xs text-[#6B6B6B] mt-0.5 inline-block font-medium">
                        Verified Partner
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#171717] bg-[#FFF8D6] border border-[#F4C430]/40 px-2.5 py-1 rounded-lg">
                    Details →
                  </span>
                </div>
              ))}
            </div>
          ) : (
            /* Selected Bank Detail View */
            <div className="max-w-2xl mx-auto">
              <div className="bg-[#FFFFFF] rounded-2xl border border-[#E5E5E0] p-6 md:p-8 shadow-xs">
                
                {/* Bank Heading */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#E5E5E0]">
                  <div className="w-14 h-14 rounded-xl bg-[#FFF8D6] border border-[#E5E5E0] flex items-center justify-center shrink-0 text-[#171717]">
                    <Landmark size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-[#171717]">
                      {selectedBank.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[#198754] text-xs md:text-sm font-semibold mt-0.5">
                      <ShieldCheck size={16} /> Official Lending Partner
                    </div>
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-[#FFF8D6] rounded-xl border border-[#F4C430]/40">
                    <h4 className="text-[#171717] font-bold text-xs uppercase tracking-wider mb-1.5 flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#198754]" /> Ideal Profile
                    </h4>
                    <p className="text-[#292929] text-xs sm:text-sm leading-relaxed">
                      {selectedBank.idealProfile}
                    </p>
                  </div>

                  <div className="p-4 bg-[#F5F5F3] rounded-xl border border-[#E5E5E0]">
                    <h4 className="text-[#171717] font-bold text-xs uppercase tracking-wider mb-1.5 flex items-center gap-2">
                      <Zap size={15} className="text-[#F4C430]" /> Key Highlights
                    </h4>
                    <p className="text-[#6B6B6B] text-xs sm:text-sm leading-relaxed">
                      {selectedBank.description}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => onApply(selectedBank.name)}
                    className="flex-1 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] py-3.5 rounded-xl font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Proceed with {selectedBank.name.split(" ")[0]}</span>
                    <ArrowRight size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedBank(null)}
                    className="px-6 py-3.5 bg-[#F5F5F3] hover:bg-[#E5E5E0] text-[#292929] rounded-xl font-semibold border border-[#E5E5E0] transition-colors cursor-pointer text-sm"
                  >
                    Back
                  </button>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* Security Footer */}
        <div className="p-4 bg-[#FFFFFF] border-t border-[#E5E5E0] text-center shrink-0">
          <p className="text-[11px] text-[#6B6B6B] font-bold uppercase tracking-widest">
            Your Information is Protected with 256-bit AES Encryption
          </p>
        </div>

      </div>
    </div>
  );
}