"use client";

import React, { useState } from "react";
import { X, CheckCheck, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";

interface NPSConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function NPSConsultModal({ isOpen, onClose, title = "Start Your NPS Application" }: NPSConsultModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    monthlyInvestment: "₹5,000 / month",
    accountType: "Tier I (Pension Account)",
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
        monthlyInvestment: "₹5,000 / month",
        accountType: "Tier I (Pension Account)",
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
            <h3 className="text-2xl font-black text-[#171717]">Application Request Received!</h3>
            <p className="text-sm text-[#6B6B6B] max-w-sm mx-auto font-normal">
              Our PFRDA-certified retirement specialist will connect with you within 15 minutes to guide you through zero-paperwork PRAN generation.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFF8D6] border border-[#F4C430]/40 text-[#171717] text-[10px] font-bold uppercase tracking-wider mb-2 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F4C430]" />
                PFRDA Regulated Advisory
              </div>
              <h3 className="text-xl font-extrabold text-[#E91E63] tracking-tight">
                {title}
              </h3>
              <p className="text-xs text-[#6B6B6B] mt-1 font-normal">
                Open your NPS account with 100% digital KYC and maximum tax saving benefits under 80CCD.
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
                  placeholder="e.g. Rahul Sharma"
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
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#E5E5E0] bg-[#FFFDF5] text-xs text-[#292929] focus:ring-2 focus:ring-[#F4C430]/30 focus:border-[#F4C430] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pune, Maharashtra"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#E5E5E0] bg-[#FFFDF5] text-xs text-[#292929] focus:ring-2 focus:ring-[#F4C430]/30 focus:border-[#F4C430] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider mb-1">
                    Target Contribution
                  </label>
                  <select
                    value={formData.monthlyInvestment}
                    onChange={(e) => setFormData({ ...formData, monthlyInvestment: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#E5E5E0] text-xs text-[#292929] focus:ring-2 focus:ring-[#F4C430]/30 focus:border-[#F4C430] outline-none bg-[#FFFDF5]"
                  >
                    <option>₹1,000 / month</option>
                    <option>₹5,000 / month</option>
                    <option>₹10,000 / month</option>
                    <option>₹25,000 / month</option>
                    <option>₹50,000+ / month</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider mb-1">
                    Account Type
                  </label>
                  <select
                    value={formData.accountType}
                    onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#E5E5E0] text-xs text-[#292929] focus:ring-2 focus:ring-[#F4C430]/30 focus:border-[#F4C430] outline-none bg-[#FFFDF5]"
                  >
                    <option>Tier I (Pension)</option>
                    <option>Tier II (Investment)</option>
                    <option>Both Tier I &amp; II</option>
                    <option>NPS Vatsalya (Minor)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl text-[#171717] bg-[#F4C430] hover:bg-[#FFD21F] font-bold text-xs tracking-wider uppercase shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer"
              >
                Submit Application Request
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
