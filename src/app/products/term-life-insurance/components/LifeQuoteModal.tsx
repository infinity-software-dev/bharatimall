"use client";

import React, { useState } from "react";
import { X, CheckCheck, CheckCircle2 } from "lucide-react";
import { InsuranceBlueprint } from "./LifeBlueprintsGrid";

interface LifeQuoteModalProps {
  blueprint: InsuranceBlueprint | null;
  onClose: () => void;
}

export default function LifeQuoteModal({ blueprint, onClose }: LifeQuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    age: "28",
    sumAssured: "₹1 Crore",
    annualIncome: "₹10 - 15 Lakhs"
  });
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  if (!blueprint) return null;

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Please fill in your Name and Mobile Number.");
      return;
    }
    setQuoteSuccess(true);
    setTimeout(() => {
      setQuoteSuccess(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FFFFFF] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E5E5E0] relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#6B6B6B] hover:text-[#292929] bg-[#F5F5F3] hover:bg-zinc-200 rounded-full p-1.5 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {quoteSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-[#198754] rounded-full flex items-center justify-center mx-auto">
              <CheckCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#171717]">
              Quote Request Submitted!
            </h3>
            <p className="text-sm text-[#6B6B6B] max-w-sm mx-auto">
              Thank you, <strong>{formData.fullName}</strong>. Our certified insurance advisor for <strong>{blueprint.insurer}</strong> will reach out shortly with customized illustrations and quotes.
            </p>
            <div className="pt-2 text-xs text-[#6B6B6B]">
              Closing automatically...
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Title */}
            <div className="space-y-1 mb-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#F5F5F3] text-[#171717] text-[11px] font-bold uppercase">
                {blueprint.category}
              </div>
              <h3 className="text-xl font-bold text-[#171717]">
                Request Quote: {blueprint.title}
              </h3>
              <p className="text-xs text-[#6B6B6B]">
                Insurer: <strong className="text-[#292929]">{blueprint.insurer}</strong> | CSR: <strong className="text-[#198754]">{blueprint.settlementCsr}</strong>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#292929] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E5E0] text-sm focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#292929] mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E5E0] text-sm focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#292929] mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    min="18"
                    max="80"
                    placeholder="e.g. 28"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E5E0] text-sm focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#292929] mb-1">
                    Desired Coverage
                  </label>
                  <select
                    value={formData.sumAssured}
                    onChange={(e) => setFormData({ ...formData, sumAssured: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E5E0] text-sm bg-[#FFFFFF] focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none"
                  >
                    <option value="₹50 Lakhs">₹50 Lakhs</option>
                    <option value="₹1 Crore">₹1 Crore</option>
                    <option value="₹1.5 Crore">₹1.5 Crore</option>
                    <option value="₹2 Crore">₹2 Crore</option>
                    <option value="₹5 Crore">₹5 Crore</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#292929] mb-1">
                    Annual Income
                  </label>
                  <select
                    value={formData.annualIncome}
                    onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E5E0] text-sm bg-[#FFFFFF] focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none"
                  >
                    <option value="Under ₹5 Lakhs">Under ₹5 Lakhs</option>
                    <option value="₹5 - 10 Lakhs">₹5 - 10 Lakhs</option>
                    <option value="₹10 - 15 Lakhs">₹10 - 15 Lakhs</option>
                    <option value="₹15 - 25 Lakhs">₹15 - 25 Lakhs</option>
                    <option value="Above ₹25 Lakhs">Above ₹25 Lakhs</option>
                  </select>
                </div>
              </div>

              {/* Highlights in modal */}
              <div className="bg-[#F5F5F3] rounded-xl p-3 border border-[#E5E5E0] space-y-1.5 text-xs text-[#6B6B6B]">
                <div className="font-semibold text-[#292929] text-[11px] uppercase tracking-wider">
                  Selected Plan Highlights:
                </div>
                {blueprint.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#198754] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] text-sm font-bold tracking-wide uppercase shadow-md transition-all active:scale-[0.99] cursor-pointer"
                >
                  Instant Quote & Callback
                </button>
              </div>

              <p className="text-[10px] text-[#6B6B6B] text-center">
                🔒 100% confidential. No spam guarantee. Free advisor consultation.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
