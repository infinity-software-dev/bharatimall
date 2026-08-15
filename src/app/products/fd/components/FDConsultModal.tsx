"use client";

import React, { useState } from "react";
import { X, CheckCheck, MessageSquare, PhoneCall, ShieldCheck, Landmark } from "lucide-react";

interface FDConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  defaultBank?: string;
}

export default function FDConsultModal({
  isOpen,
  onClose,
  title = "Start Your Fixed Deposit Investment",
  defaultBank = "Best Rate FD (Up to 9.10%)",
}: FDConsultModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    investmentAmount: "₹1,00,000",
    tenure: "3 Years",
    isSeniorCitizen: false,
    selectedProvider: defaultBank,
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Please fill in your Full Name and Mobile Number.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        city: "",
        investmentAmount: "₹1,00,000",
        tenure: "3 Years",
        isSeniorCitizen: false,
        selectedProvider: defaultBank,
      });
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E5E5E0] relative animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#6B6B6B] hover:text-[#171717] hover:bg-[#F5F5F3] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#FFF8D6] text-[#198754] rounded-full flex items-center justify-center mx-auto border border-[#198754]/30 shadow-xs">
              <CheckCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-[#171717]">Application Initiated!</h3>
            <p className="text-sm text-[#6B6B6B] max-w-sm mx-auto font-normal">
              Our Fixed Deposit investment specialist will connect with you within 15 minutes to assist with 100% paperless video KYC and best rate lock-in.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFF8D6] border border-[#F4C430]/40 text-[#171717] text-[10px] font-bold uppercase tracking-wider mb-2 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F4C430]" />
                DICGC Insured up to ₹5 Lakhs
              </div>
              <h3 className="text-xl font-extrabold text-[#E91E63] tracking-tight">
                {title}
              </h3>
              <p className="text-xs text-[#6B6B6B] mt-1 font-normal">
                Book high-interest Fixed Deposits with top scheduled commercial banks and AAA-rated corporate NBFCs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Amit Patil"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-[#E5E5E0] bg-[#FFFDF5] text-xs text-[#292929] focus:ring-2 focus:ring-[#F4C430]/30 focus:border-[#F4C430] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#E5E5E0] bg-[#FFFDF5] text-xs text-[#292929] focus:ring-2 focus:ring-[#F4C430]/30 focus:border-[#F4C430] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider mb-1">
                    City / Pincode
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pune / 411001"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#E5E5E0] bg-[#FFFDF5] text-xs text-[#292929] focus:ring-2 focus:ring-[#F4C430]/30 focus:border-[#F4C430] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider mb-1">
                    Deposit Amount
                  </label>
                  <select
                    value={formData.investmentAmount}
                    onChange={(e) => setFormData({ ...formData, investmentAmount: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#E5E5E0] text-xs text-[#292929] focus:ring-2 focus:ring-[#F4C430]/30 focus:border-[#F4C430] outline-none bg-[#FFFDF5]"
                  >
                    <option>₹50,000</option>
                    <option>₹1,00,000</option>
                    <option>₹3,00,000</option>
                    <option>₹5,00,000</option>
                    <option>₹10,00,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider mb-1">
                    Tenure
                  </label>
                  <select
                    value={formData.tenure}
                    onChange={(e) => setFormData({ ...formData, tenure: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#E5E5E0] text-xs text-[#292929] focus:ring-2 focus:ring-[#F4C430]/30 focus:border-[#F4C430] outline-none bg-[#FFFDF5]"
                  >
                    <option>1 Year (Short)</option>
                    <option>2 Years (Medium)</option>
                    <option>3 Years (Long)</option>
                    <option>5 Years (Tax Saver)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 bg-[#FFF8D6]/40 border border-[#F4C430]/40 rounded-xl">
                <input
                  type="checkbox"
                  id="seniorCitizenCheck"
                  checked={formData.isSeniorCitizen}
                  onChange={(e) => setFormData({ ...formData, isSeniorCitizen: e.target.checked })}
                  className="w-4 h-4 text-[#F4C430] rounded focus:ring-0 cursor-pointer accent-[#F4C430]"
                />
                <label htmlFor="seniorCitizenCheck" className="text-xs font-semibold text-[#171717] cursor-pointer">
                  Senior Citizen (Age 60+) — Eligible for +0.50% extra interest
                </label>
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl text-[#171717] bg-[#F4C430] hover:bg-[#FFD21F] font-bold text-xs tracking-wider uppercase shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer"
              >
                Book Fixed Deposit
              </button>

              <div className="pt-2 flex items-center justify-center gap-4 text-xs text-[#6B6B6B]">
                <a
                  href="https://wa.me/9118005327600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#198754] hover:underline font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </a>
                <span>•</span>
                <a
                  href="tel:18005327600"
                  className="inline-flex items-center gap-1 text-[#171717] hover:text-[#F4C430] hover:underline font-semibold"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  1800-532-7600
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
