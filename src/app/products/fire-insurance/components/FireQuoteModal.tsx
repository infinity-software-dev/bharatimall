"use client";
import React, { useState } from "react";
import {
  X,
  Flame, CheckCircle2, Phone,
  Mail,
  User,
  MapPin,
  ArrowRight
} from "lucide-react";
import { FirePlanItem } from "./FireProductsGrid";

interface FireQuoteModalProps {
  plan?: FirePlanItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function FireQuoteModal({ plan, isOpen, onClose }: FireQuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    propertyType: "Commercial Space",
    estimatedValue: "₹50,00,000",
    policyType: plan ? plan.title : "Bharat Griha Raksha",
    pincode: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-zinc-100 overflow-hidden">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-800 transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900">Application Submitted!</h3>
            <p className="text-sm text-zinc-600 font-medium leading-relaxed">
              Thank you, <span className="font-bold text-zinc-800">{formData.fullName}</span>. Your fire insurance proposal request for{" "}
              <span className="font-bold text-[#2076C7]">{plan?.title || formData.policyType}</span> has been received. Our certified risk engineer will contact you on{" "}
              <span className="font-bold text-zinc-800">{formData.phone}</span> within 15 minutes.
            </p>

            <div className="p-4 bg-zinc-50 rounded-2xl text-left text-xs text-zinc-600 space-y-1 border border-zinc-200">
              <div className="flex justify-between">
                <span className="text-zinc-400">Reference ID:</span>
                <span className="font-bold text-zinc-800">FI-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Selected Plan:</span>
                <span className="font-bold text-[#2076C7]">{plan?.title || formData.policyType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Property Category:</span>
                <span className="font-bold text-zinc-800">{formData.propertyType}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#2076C7] to-[#1CADA3] text-white font-bold text-sm shadow-md hover:brightness-105 transition-all cursor-pointer"
            >
              Done & Return to Page
            </button>
          </div>
        ) : (
          <div>
            {/* Header Modal */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-6 text-white">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-teal-300 text-[11px] font-black uppercase tracking-wider mb-2">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>Instant Fire Cover Quote</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight">
                {plan ? plan.title : "Apply for Fire Insurance"}
              </h3>
              <p className="text-xs text-zinc-300 mt-1">
                {plan ? plan.description : "Get customized quotes with 100% replacement value guarantee"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Patil"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-semibold text-zinc-800 outline-none focus:ring-2 focus:ring-[#2076C7]/30 transition-all"
                    />
                    <User className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-semibold text-zinc-800 outline-none focus:ring-2 focus:ring-[#2076C7]/30 transition-all"
                    />
                    <Phone className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="rajesh@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-semibold text-zinc-800 outline-none focus:ring-2 focus:ring-[#2076C7]/30 transition-all"
                    />
                    <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                    City / Location *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pune, Mumbai"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-semibold text-zinc-800 outline-none focus:ring-2 focus:ring-[#2076C7]/30 transition-all"
                    />
                    <MapPin className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-bold text-zinc-700 outline-none focus:ring-2 focus:ring-[#2076C7]/30"
                  >
                    <option value="Residential Unit">Residential Home / Flat</option>
                    <option value="Commercial Space">Commercial Shop / Office</option>
                    <option value="Industrial Plant">Industrial Factory / Warehouse</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                    Estimated Property Value
                  </label>
                  <select
                    value={formData.estimatedValue}
                    onChange={(e) => setFormData({ ...formData, estimatedValue: e.target.value })}
                    className="w-full px-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-bold text-zinc-700 outline-none focus:ring-2 focus:ring-[#2076C7]/30"
                  >
                    <option value="₹25,00,000">₹25 Lakhs</option>
                    <option value="₹50,00,000">₹50 Lakhs</option>
                    <option value="₹1,00,00,000">₹1 Crore</option>
                    <option value="₹5,00,00,000">₹5 Crores</option>
                    <option value="₹10,00,00,000+">₹10+ Crores</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-[#2076C7] to-[#1CADA3] text-white font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {loading ? (
                  <span>Processing Proposal...</span>
                ) : (
                  <>
                    <span>Get Instant Customized Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[10px] text-zinc-400 text-center font-medium">
                🔒 We respect your privacy. No spam. Instant quote dispatched via SMS & Email.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
