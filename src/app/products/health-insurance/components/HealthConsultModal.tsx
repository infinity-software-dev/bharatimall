"use client";

import React, { useState } from "react";
import { X, CheckCheck, MessageSquare, PhoneCall } from "lucide-react";
import { HealthPlan } from "./HealthPlansGrid";

interface HealthConsultModalProps {
  plan: HealthPlan | null;
  onClose: () => void;
}

export default function HealthConsultModal({ plan, onClose }: HealthConsultModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    coverageAmount: "₹10 Lakh"
  });
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  if (!plan) return null;

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Please fill in your Full Name and Mobile Number.");
      return;
    }
    setQuoteSuccess(true);
    setTimeout(() => {
      setQuoteSuccess(false);
      onClose();
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        city: "",
        coverageAmount: "₹10 Lakh"
      });
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FFFFFF] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E5E5E0] relative animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#6B6B6B] hover:text-[#292929] hover:bg-[#F5F5F3] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {quoteSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#F5F5F3] text-[#171717] rounded-full flex items-center justify-center mx-auto border border-[#E5E5E0]">
              <CheckCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-[#171717]">Request Received!</h3>
            <p className="text-sm text-[#6B6B6B] max-w-sm mx-auto">
              Our certified Health Insurance expert will connect with you within 15 minutes to share customized quotes.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <span className="text-[10px] font-bold text-[#171717] uppercase tracking-widest">
                FREE EXPERT CONSULTATION
              </span>
              <h3 className="text-xl font-extrabold text-[#171717] tracking-tight mt-1">
                Get Quotes for <span className="text-[#E91E63]">{plan.title}</span>
              </h3>
              <p className="text-xs text-[#6B6B6B] mt-1">
                Starting from {plan.startingAt}/mo with {plan.cashlessHospitals} cashless hospitals.
              </p>
            </div>

            <form onSubmit={handleConsultSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-[#E5E5E0] text-xs focus:ring-2 focus:ring-[#F4C430]/20 focus:border-[#F4C430] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#E5E5E0] text-xs focus:ring-2 focus:ring-[#F4C430]/20 focus:border-[#F4C430] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1">
                    City / Pincode
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai / 400001"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#E5E5E0] text-xs focus:ring-2 focus:ring-[#F4C430]/20 focus:border-[#F4C430] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1">
                  Desired Sum Insured
                </label>
                <select
                  value={formData.coverageAmount}
                  onChange={(e) => setFormData({ ...formData, coverageAmount: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-[#E5E5E0] text-xs focus:ring-2 focus:ring-[#F4C430]/20 focus:border-[#F4C430] outline-none bg-[#F5F5F3]"
                >
                  <option>₹5 Lakh</option>
                  <option>₹10 Lakh</option>
                  <option>₹20 Lakh</option>
                  <option>₹50 Lakh</option>
                  <option>₹1 Crore</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl text-[#171717] font-bold text-xs tracking-wider uppercase shadow-md hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                style={{ background: "#FFF8D6" }}
              >
                Request Callback & Quote
              </button>

              <div className="pt-2 flex items-center justify-center gap-4 text-xs text-[#6B6B6B]">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#198754] hover:underline font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </a>
                <span>•</span>
                <a
                  href="tel:18001234567"
                  className="inline-flex items-center gap-1 text-[#171717] hover:underline font-semibold"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  1800-123-4567
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
