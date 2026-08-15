"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  ALL_PRODUCTS_DATA, 
  OTHER_PRODUCTS_DATA, 
  InsuranceProduct 
} from "@/lib/productsData";
import { 
  saveEnquiry, 
  getStoredEnquiries, 
  deleteEnquiry, 
  clearAllEnquiries,
  ProductEnquiry 
} from "@/lib/enquiryStorage";
import { 
  CheckCircle2, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  Copy, 
  Check, 
  Trash2, 
  Download, 
  Search, 
  X, 
  Database,
  User,
  MessageSquare
} from "lucide-react";

interface ProductEnquiryFormProps {
  preselectedProduct?: InsuranceProduct | null;
  onSuccess?: (enquiry: ProductEnquiry) => void;
  onCancel?: () => void;
  className?: string;
  isModal?: boolean;
}

export default function ProductEnquiryForm({
  preselectedProduct,
  onSuccess,
  onCancel,
  className = "",
}: ProductEnquiryFormProps) {
  // Form State (Only Name, Email, Phone, Message)
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // UI State
  const [submittedEnquiry, setSubmittedEnquiry] = useState<ProductEnquiry | null>(null);
  const [copiedId, setCopiedId] = useState(false);
  const [showSavedList, setShowSavedList] = useState(false);
  const [storedList, setStoredList] = useState<ProductEnquiry[]>([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Auto-fill logged in user info if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      const active = sessionStorage.getItem("bharatimall_active_user");
      if (active) {
        try {
          const parsed = JSON.parse(active);
          if (parsed.fullName && !fullName) setFullName(parsed.fullName);
          if (parsed.email && !email) setEmail(parsed.email);
        } catch (e) {
          // ignore
        }
      }
    }
  }, []);

  // Load stored enquiries list when drawer is opened
  const refreshStoredList = () => {
    setStoredList(getStoredEnquiries());
  };

  useEffect(() => {
    if (showSavedList) {
      refreshStoredList();
    }
  }, [showSavedList]);

  // Form validation for required fields
  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = "Full Name is required";
    
    if (!phone.trim()) {
      errs.phone = "Mobile phone number is required";
    } else if (!/^[0-9+\-\s]{8,15}$/.test(phone.trim())) {
      errs.phone = "Enter a valid 10-digit mobile number";
    }

    if (!email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = "Enter a valid email address";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const productTitleToSave = preselectedProduct?.title || "General Enquiry";

    const saved = saveEnquiry({
      productTitle: productTitleToSave,
      productId: preselectedProduct?.id || "general-enquiry",
      category: preselectedProduct?.category || "General",
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      city: "Not Specified",
      preferredContact: "Phone Call",
      preferredTime: "Anytime",
      budgetOrCoverage: "Standard",
      message: message.trim(),
    });

    setSubmittedEnquiry(saved);
    if (onSuccess) onSuccess(saved);
  };

  // Copy reference ID
  const handleCopyId = () => {
    if (!submittedEnquiry) return;
    navigator.clipboard.writeText(submittedEnquiry.id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  // Delete stored enquiry
  const handleDeleteEnquiry = (id: string) => {
    deleteEnquiry(id);
    refreshStoredList();
  };

  // Clear all stored
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all stored product enquiries from Local Storage?")) {
      clearAllEnquiries();
      refreshStoredList();
    }
  };

  // Export JSON
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(storedList, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `bharatimall_enquiries_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const filteredStoredList = useMemo(() => {
    if (!searchFilter.trim()) return storedList;
    const term = searchFilter.toLowerCase();
    return storedList.filter(item => 
      item.id.toLowerCase().includes(term) ||
      item.fullName.toLowerCase().includes(term) ||
      item.email.toLowerCase().includes(term) ||
      item.phone.includes(term)
    );
  }, [storedList, searchFilter]);

  return (
    <div className={`w-full ${className}`}>
      
      {/* SUCCESS CONFIRMATION VIEW */}
      {submittedEnquiry ? (
        <div className="bg-gradient-to-br from-[#FFFDF5] via-white to-[#FFF8D6]/40 border border-[#F4C430]/30 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-xl relative overflow-hidden animate-scale-in">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFF8D6] rounded-full blur-3xl opacity-80" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#F4C430]/10 rounded-full blur-3xl opacity-60" />

          {/* Success Icon Badge */}
          <div className="w-16 h-16 rounded-3xl bg-[#FFF8D6] border border-[#F4C430] text-[#198754] flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF8D6] border border-[#F4C430]/40 text-[#171717] text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#198754]" />
              Inquiry Registered Successfully
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight">
              Enquiry Submitted!
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1.5 max-w-md mx-auto leading-relaxed">
              Thank you for choosing Bharati Share Market. Our specialist will review your inquiry and contact you shortly.
            </p>
          </div>

          {/* Reference Card */}
          <div className="bg-white border border-[#E5E5E0] rounded-2xl p-5 text-left space-y-3.5 max-w-md mx-auto shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E0]">
              <div>
                <span className="text-[10px] text-[#6B6B6B] uppercase tracking-widest block font-bold">Enquiry Reference ID</span>
                <span className="text-base font-mono font-bold text-[#171717] bg-[#FFF8D6] px-2.5 py-0.5 rounded border border-[#F4C430]/40">{submittedEnquiry.id}</span>
              </div>
              <button
                onClick={handleCopyId}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#F5F5F3] border border-[#E5E5E0] text-xs text-[#292929] hover:bg-[#FFF8D6] hover:border-[#F4C430]/40 transition-colors shadow-sm"
                title="Copy Reference ID"
              >
                {copiedId ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#198754]" />
                    <span className="text-[#198754] font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#6B6B6B]" />
                    <span className="font-medium">Copy ID</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-[#6B6B6B] text-[10px] block font-medium">Applicant Name</span>
                <span className="font-semibold text-[#292929]">{submittedEnquiry.fullName}</span>
              </div>
              <div>
                <span className="text-[#6B6B6B] text-[10px] block font-medium">Phone / Mobile</span>
                <span className="font-semibold text-[#292929]">{submittedEnquiry.phone}</span>
              </div>
              <div className="col-span-2">
                <span className="text-[#6B6B6B] text-[10px] block font-medium">Email Address</span>
                <span className="font-semibold text-[#292929]">{submittedEnquiry.email}</span>
              </div>
              {submittedEnquiry.message && (
                <div className="col-span-2">
                  <span className="text-[#6B6B6B] text-[10px] block font-medium">Message</span>
                  <span className="font-normal text-[#6B6B6B]">{submittedEnquiry.message}</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => {
                setSubmittedEnquiry(null);
                setMessage("");
              }}
              className="px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#171717] bg-[#F4C430] hover:bg-[#FFD21F] shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (

        /* CLEAN ENQUIRY FORM (Only Name, Phone, Email, Message) */
        <form 
          onSubmit={handleSubmit}
          className="bg-white border border-[#E5E5E0] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 space-y-6 shadow-xl shadow-gray-200/50 relative"
        >
          {/* Header Section */}
          <div className="pb-4 border-b border-[#E5E5E0]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF8D6] border border-[#F4C430]/50 text-[#171717] text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#198754]" />
              BHARATI SHARE MARKET ENQUIRY
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight">
              Get in Touch with Us
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 font-normal">
              Fill out your details below and our specialist team will contact you directly.
            </p>
          </div>

          {/* 4 Form Fields Grid */}
          <div className="space-y-4 sm:space-y-5">
            
            {/* Full Name Field */}
            <div>
              <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full bg-[#FFFFFF] text-[#292929] border rounded-xl px-4 py-3 pl-10 text-xs sm:text-sm placeholder-[#6B6B6B]/60 focus:bg-white focus:outline-none focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/25 transition-all ${
                    errors.fullName ? "border-[#D64545] bg-red-50/30" : "border-[#E5E5E0]"
                  }`}
                />
                <User className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-3.5 pointer-events-none" />
              </div>
              {errors.fullName && <p className="text-[11px] text-[#D64545] font-semibold mt-1">{errors.fullName}</p>}
            </div>

            {/* Mobile Phone Number & Email Address Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1.5">
                  Mobile Phone Number *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full bg-[#FFFFFF] text-[#292929] border rounded-xl px-4 py-3 pl-10 text-xs sm:text-sm placeholder-[#6B6B6B]/60 focus:bg-white focus:outline-none focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/25 transition-all ${
                      errors.phone ? "border-[#D64545] bg-red-50/30" : "border-[#E5E5E0]"
                    }`}
                  />
                  <PhoneCall className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-3.5 pointer-events-none" />
                </div>
                {errors.phone && <p className="text-[11px] text-[#D64545] font-semibold mt-1">{errors.phone}</p>}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full bg-[#FFFFFF] text-[#292929] border rounded-xl px-4 py-3 pl-10 text-xs sm:text-sm placeholder-[#6B6B6B]/60 focus:bg-white focus:outline-none focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/25 transition-all ${
                      errors.email ? "border-[#D64545] bg-red-50/30" : "border-[#E5E5E0]"
                    }`}
                  />
                  <Mail className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-3.5 pointer-events-none" />
                </div>
                {errors.email && <p className="text-[11px] text-[#D64545] font-semibold mt-1">{errors.email}</p>}
              </div>

            </div>

            {/* Message / Requirement Field */}
            <div>
              <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1.5">
                Message / Details
              </label>
              <div className="relative">
                <textarea
                  rows={4}
                  placeholder="Write your enquiry message or requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#FFFFFF] text-[#292929] border border-[#E5E5E0] rounded-xl p-3.5 pl-10 text-xs sm:text-sm placeholder-[#6B6B6B]/60 focus:bg-white focus:outline-none focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/25 transition-all resize-y"
                />
                <MessageSquare className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-4 pointer-events-none" />
              </div>
            </div>

          </div>

          {/* Security Guarantee & Submit Button */}
          <div className="pt-3 border-t border-[#E5E5E0] space-y-4">
            <div className="flex items-center gap-2 text-[11px] text-[#6B6B6B] font-medium bg-[#FFFDF5] p-3 rounded-xl border border-[#E5E5E0]">
              <ShieldCheck className="w-4 h-4 text-[#198754] shrink-0" />
              <span>
                🔒 100% Data Protection: Your details are confidential and used exclusively for your enquiry.
              </span>
            </div>

            <div className="flex items-center justify-end gap-3">
              {onCancel && (
                <button
                  type="button"
                  onClick={onCancel}
                  className="px-5 py-3 rounded-xl text-xs font-bold text-[#6B6B6B] hover:text-[#171717] hover:bg-[#F5F5F3] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto px-9 py-4 rounded-xl text-xs sm:text-sm font-bold text-[#171717] bg-[#F4C430] hover:bg-[#FFD21F] shadow-md hover:shadow-lg active:scale-99 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enquiry</span>
              </button>
            </div>
          </div>
        </form>
      )}

      {/* SAVED LOCAL ENQUIRIES DRAWER / MODAL */}
      {showSavedList && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setShowSavedList(false)}
            className="absolute inset-0 bg-[#171717]/60 backdrop-blur-sm" 
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-[#E5E5E0] rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10 animate-scale-in">
            {/* Drawer Header */}
            <div className="p-5 sm:p-6 bg-[#FFFDF5] border-b border-[#E5E5E0] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-[#FFF8D6] border border-[#F4C430] text-[#171717] flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#171717]">
                    Saved Local Enquiries
                  </h3>
                  <p className="text-xs text-[#6B6B6B]">
                    Stored locally in your browser storage ({storedList.length} total)
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowSavedList(false)}
                className="w-8 h-8 rounded-xl bg-white border border-[#E5E5E0] flex items-center justify-center text-[#6B6B6B] hover:text-[#171717] hover:bg-[#FFF8D6] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Filter bar */}
            <div className="p-4 bg-white border-b border-[#E5E5E0] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-auto flex-1">
                <Search className="w-4 h-4 text-[#6B6B6B] absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search saved enquiries..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full bg-[#F5F5F3] border border-[#E5E5E0] rounded-xl pl-9 pr-4 py-2 text-xs text-[#171717] focus:outline-none focus:border-[#F4C430]"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={handleExportJSON}
                  disabled={storedList.length === 0}
                  className="px-3 py-2 rounded-xl bg-white border border-[#E5E5E0] text-xs font-bold text-[#171717] hover:bg-[#FFF8D6] disabled:opacity-50 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export JSON</span>
                </button>

                <button
                  onClick={handleClearAll}
                  disabled={storedList.length === 0}
                  className="px-3 py-2 rounded-xl bg-red-50 border border-red-200 text-xs font-bold text-[#D64545] hover:bg-red-100 disabled:opacity-50 transition-colors flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
              </div>
            </div>

            {/* Enquiries List */}
            <div className="p-5 overflow-y-auto max-h-[60vh] space-y-3 custom-scrollbar bg-[#FFFDF5]">
              {filteredStoredList.length > 0 ? (
                filteredStoredList.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white border border-[#E5E5E0] rounded-2xl space-y-2 text-xs hover:border-[#F4C430] transition-colors relative group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-[#171717] bg-[#FFF8D6] px-2 py-0.5 rounded border border-[#F4C430]/40">
                          {item.id}
                        </span>
                        <span className="text-[10px] text-[#6B6B6B]">
                          {new Date(item.createdAt).toLocaleString()}
                        </span>
                      </div>

                      <button
                        onClick={() => handleDeleteEnquiry(item.id)}
                        className="text-[#6B6B6B] hover:text-[#D64545] p-1 rounded-lg hover:bg-red-50 transition-colors"
                        title="Delete Enquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-[#6B6B6B] text-[10px] block">Name</span>
                        <span className="font-bold text-[#171717]">{item.fullName}</span>
                      </div>
                      <div>
                        <span className="text-[#6B6B6B] text-[10px] block">Phone</span>
                        <span className="font-semibold text-[#292929]">{item.phone}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-[#6B6B6B] text-[10px] block">Email</span>
                        <span className="font-semibold text-[#292929]">{item.email}</span>
                      </div>
                      {item.message && (
                        <div className="col-span-2 pt-1 border-t border-[#E5E5E0]">
                          <span className="text-[#6B6B6B] text-[10px] block">Message</span>
                          <p className="text-[#292929] font-normal text-xs">{item.message}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 space-y-2">
                  <Database className="w-8 h-8 text-[#6B6B6B] mx-auto opacity-50" />
                  <p className="text-xs text-[#6B6B6B] font-medium">No stored enquiries found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
