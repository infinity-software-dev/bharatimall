"use client";

import React, { useState } from "react";
import { X, CheckCheck, MessageSquare, PhoneCall, CheckCircle2 } from "lucide-react";
export interface SelectedMotorQuotePlan {
  name: string;
  price: number;
  planType: string;
  features: string[];
}

interface MotorQuoteModalProps {
  plan: SelectedMotorQuotePlan | null;
  initialRegNo?: string;
  onClose: () => void;
}

export default function MotorQuoteModal({ plan, initialRegNo, onClose }: MotorQuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    regNo: initialRegNo || "",
    vehicleModel: "Maruti Swift / Honda Activa"
  });
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  if (!plan) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Please enter your Name and Mobile Number.");
      return;
    }
    setQuoteSuccess(true);
    setTimeout(() => {
      setQuoteSuccess(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FFFFFF] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E5E5E0] relative max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#6B6B6B] hover:text-[#292929] hover:bg-[#F5F5F3] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {quoteSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#F5F5F3] text-[#171717] rounded-full flex items-center justify-center mx-auto border border-[#E5E5E0]">
              <CheckCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-[#171717]">Quote Request Confirmed!</h3>
            <p className="text-sm text-[#6B6B6B] max-w-sm mx-auto">
              Our motor insurance specialist for <strong>{plan.name}</strong> will send the customized policy quote and payment link within 5 minutes.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <span className="text-[10px] font-bold text-[#171717] uppercase tracking-widest">
                MOTOR POLICY DETAILS
              </span>
              <h3 className="text-xl font-extrabold text-[#171717] tracking-tight mt-1">
                <span className="text-[#E91E63]">{plan.name}</span> {plan.planType}
              </h3>
              <p className="text-xs text-[#6B6B6B] mt-1">
                Starting from <strong className="text-[#171717] font-bold">₹{plan.price.toLocaleString('en-IN')}/year</strong> with instant cashless garage access.
              </p>
            </div>

            {/* Plan Key features */}
            <div className="bg-[#F5F5F3] p-3.5 rounded-2xl border border-[#E5E5E0] space-y-1.5 text-xs text-[#292929]">
              {plan.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#171717] shrink-0" />
                  <span className="font-medium">{feat}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Joshi"
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
                    Registration No
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. MH02CD5678"
                    value={formData.regNo}
                    onChange={(e) => setFormData({ ...formData, regNo: e.target.value.toUpperCase() })}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#E5E5E0] text-xs focus:ring-2 focus:ring-[#F4C430]/20 focus:border-[#F4C430] outline-none uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. vikram@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-[#E5E5E0] text-xs focus:ring-2 focus:ring-[#F4C430]/20 focus:border-[#F4C430] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl text-[#171717] font-bold text-xs tracking-wider uppercase shadow-md hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                style={{ background: "#FFF8D6" }}
              >
                Get Exact Quote & Payment Link
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
