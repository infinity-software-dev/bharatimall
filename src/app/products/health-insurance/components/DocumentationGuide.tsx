"use client";

import React from "react";
import { FileText, UserCheck, CreditCard, Users, Stethoscope, ShieldCheck } from "lucide-react";

export default function DocumentationGuide() {
  return (
    <section className="py-14 lg:py-20 bg-zinc-50/70 border-t border-zinc-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            Documentation Simplified
          </h2>
          <p className="text-sm text-gray-500">
            Everything you need to get started and claim hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: For Policy Application */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-[#1A4E8C] uppercase tracking-wider">
              <FileText className="w-4 h-4 text-[#2076C7]" />
              <span>For Policy Application</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md flex flex-col justify-center space-y-2">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#2076C7] flex items-center justify-center">
                  <UserCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-gray-900">Identity Proof</h4>
                <p className="text-xs text-gray-500">Aadhar Card / PAN Card</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md flex flex-col justify-center space-y-2">
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                  <CreditCard className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-gray-900">Bank Details</h4>
                <p className="text-xs text-gray-500">Canceled Cheque / Passbook</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md flex flex-col justify-center space-y-2">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#2076C7] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-gray-900">Nominee Info</h4>
                <p className="text-xs text-gray-500">Name, Age & Relationship</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md flex flex-col justify-center space-y-2">
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-gray-900">Medical Proof</h4>
                <p className="text-xs text-gray-500">Previous reports (if any)</p>
              </div>
            </div>
          </div>

          {/* Right Column: For Claims */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-teal-700 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>For Claims</span>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-md space-y-6 flex-1 flex flex-col justify-center">
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">CASHLESS CLAIM</h4>
                <ul className="space-y-1 text-xs text-gray-600 font-medium">
                  <li>• Health Card / Policy Number</li>
                  <li>• Valid Photo ID Proof</li>
                  <li>• Cashless Request Form</li>
                </ul>
              </div>

              <div className="h-px bg-gray-100" />

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">REIMBURSEMENT CLAIM</h4>
                <ul className="space-y-1 text-xs text-gray-600 font-medium">
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
