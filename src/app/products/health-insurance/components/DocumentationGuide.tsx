"use client";

import React from "react";
import { FileText, UserCheck, CreditCard, Users, Stethoscope, ShieldCheck } from "lucide-react";

export default function DocumentationGuide() {
  return (
    <section className="py-14 lg:py-20 bg-[#F5F5F3] border-t border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Documentation Simplified
          </h2>
          <p className="text-sm text-[#6B6B6B]">
            Everything you need to get started and claim hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: For Policy Application */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-[#171717] uppercase tracking-wider">
              <FileText className="w-4 h-4 text-[#171717]" />
              <span>For Policy Application</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E0] shadow-md flex flex-col justify-center space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center">
                  <UserCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#171717]">Identity Proof</h4>
                <p className="text-xs text-[#6B6B6B]">Aadhar Card / PAN Card</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E0] shadow-md flex flex-col justify-center space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center">
                  <CreditCard className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#171717]">Bank Details</h4>
                <p className="text-xs text-[#6B6B6B]">Canceled Cheque / Passbook</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E0] shadow-md flex flex-col justify-center space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#171717]">Nominee Info</h4>
                <p className="text-xs text-[#6B6B6B]">Name, Age & Relationship</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E0] shadow-md flex flex-col justify-center space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#171717]">Medical Proof</h4>
                <p className="text-xs text-[#6B6B6B]">Previous reports (if any)</p>
              </div>
            </div>
          </div>

          {/* Right Column: For Claims */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-[#171717] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#171717]" />
              <span>For Claims</span>
            </div>

            <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-[#E5E5E0] shadow-md space-y-6 flex-1 flex flex-col justify-center">
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#171717] uppercase tracking-wider">CASHLESS CLAIM</h4>
                <ul className="space-y-1 text-xs text-[#292929] font-medium">
                  <li>• Health Card / Policy Number</li>
                  <li>• Valid Photo ID Proof</li>
                  <li>• Cashless Request Form</li>
                </ul>
              </div>

              <div className="h-px bg-[#F5F5F3]" />

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#171717] uppercase tracking-wider">REIMBURSEMENT CLAIM</h4>
                <ul className="space-y-1 text-xs text-[#292929] font-medium">
                  <li>• Hospital Bills & Receipts</li>
                  <li>• Discharge Summary</li>
                  <li>• Doctor&apos;s Prescriptions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
