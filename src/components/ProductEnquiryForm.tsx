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
  MapPin, 
  Copy, 
  Check, 
  Trash2, 
  Download, 
  Search, 
  FolderKanban, 
  X, 
  Database
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
  // Combine all products for product selection dropdown
  const allProducts = useMemo(() => [...ALL_PRODUCTS_DATA, ...OTHER_PRODUCTS_DATA], []);

  // Form State
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState<string>(preselectedProduct?.category || "Insurance");
  const [selectedProductId, setSelectedProductId] = useState<string>(preselectedProduct?.id || "");
  const [customProductTitle, setCustomProductTitle] = useState<string>(preselectedProduct?.title || "");
  const [city, setCity] = useState("");
  const [preferredContact, setPreferredContact] = useState<"WhatsApp" | "Phone Call" | "Email">("WhatsApp");
  const [preferredTime, setPreferredTime] = useState("Morning (9 AM - 12 PM)");
  const [budgetOrCoverage, setBudgetOrCoverage] = useState("Standard (₹1 Crore / Max Protection)");
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

  // Update selected product title when dropdown changes
  useEffect(() => {
    if (selectedProductId) {
      const found = allProducts.find(p => p.id === selectedProductId);
      if (found) {
        setCustomProductTitle(found.title);
        setCategory(found.category);
      }
    }
  }, [selectedProductId, allProducts]);

  // Sync preselectedProduct if prop changes
  useEffect(() => {
    if (preselectedProduct) {
      setCategory(preselectedProduct.category);
      setSelectedProductId(preselectedProduct.id);
      setCustomProductTitle(preselectedProduct.title);
    }
  }, [preselectedProduct]);

  // Load stored enquiries list when drawer is opened
  const refreshStoredList = () => {
    setStoredList(getStoredEnquiries());
  };

  useEffect(() => {
    if (showSavedList) {
      refreshStoredList();
    }
  }, [showSavedList]);

  // Available categories
  const categories = [
    "Insurance",
    "Loans",
    "Mutual Fund",
    "Investments",
    "Real Estate",
    "Unlisted",
    "Courses & E-Books",
    "General Product Enquiry"
  ];

  // Products filtered by selected category
  const filteredProductsByCategory = useMemo(() => {
    if (category === "General Product Enquiry") return [];
    return allProducts.filter(p => p.category === category);
  }, [allProducts, category]);

  // Form validation
  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = "Full name is required";
    
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

    if (!customProductTitle.trim() && !selectedProductId) {
      errs.product = "Please select or type a product name";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const productTitleToSave = customProductTitle.trim() || 
      allProducts.find(p => p.id === selectedProductId)?.title || 
      "General Product Enquiry";

    const saved = saveEnquiry({
      productTitle: productTitleToSave,
      productId: selectedProductId,
      category,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      city: city.trim() || "Not Specified",
      preferredContact,
      preferredTime,
      budgetOrCoverage,
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
      item.productTitle.toLowerCase().includes(term) ||
      item.fullName.toLowerCase().includes(term) ||
      item.email.toLowerCase().includes(term) ||
      item.phone.includes(term) ||
      item.category.toLowerCase().includes(term)
    );
  }, [storedList, searchFilter]);

  return (
    <div className={`w-full ${className}`}>
      
      {/* SUCCESS CONFIRMATION VIEW - Official Brand Yellow & Light Theme */}
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
              <ShieldCheck className="w-3.5 h-3.5 text-[#E91E63]" />
              Official Inquiry Registered
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#171717] tracking-tight">
              Enquiry Successfully Submitted!
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1.5 max-w-md mx-auto leading-relaxed">
              Thank you for choosing Bharati Share Market. Our certified financial specialist will review your inquiry and contact you via <span className="text-[#171717] font-bold">{submittedEnquiry.preferredContact}</span> during your preferred time ({submittedEnquiry.preferredTime}).
            </p>
          </div>

          {/* Reference Card */}
          <div className="bg-white border border-[#E5E5E0] rounded-2xl p-5 text-left space-y-3.5 max-w-md mx-auto shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E0]">
              <div>
                <span className="text-[10px] text-[#6B6B6B] uppercase tracking-widest block font-bold">Enquiry Reference ID</span>
                <span className="text-base font-mono font-black text-[#171717] bg-[#FFF8D6] px-2.5 py-0.5 rounded border border-[#F4C430]/40">{submittedEnquiry.id}</span>
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
                <span className="text-[#6B6B6B] text-[10px] block font-medium">Product</span>
                <span className="font-bold text-[#171717] truncate block">{submittedEnquiry.productTitle}</span>
              </div>
              <div>
                <span className="text-[#6B6B6B] text-[10px] block font-medium">Category</span>
                <span className="font-bold text-[#171717]">{submittedEnquiry.category}</span>
              </div>
              <div>
                <span className="text-[#6B6B6B] text-[10px] block font-medium">Applicant Name</span>
                <span className="font-semibold text-[#292929]">{submittedEnquiry.fullName}</span>
              </div>
              <div>
                <span className="text-[#6B6B6B] text-[10px] block font-medium">Phone / Mobile</span>
                <span className="font-semibold text-[#292929]">{submittedEnquiry.phone}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => {
                setSubmittedEnquiry(null);
                setMessage("");
              }}
              className="px-8 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#171717] bg-[#F4C430] hover:bg-[#FFD21F] shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (

        /* MAIN ENQUIRY FORM - Official Brand Yellow & Light Theme */
        <form 
          onSubmit={handleSubmit}
          className="bg-white border border-[#E5E5E0] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 space-y-6 shadow-xl shadow-gray-300/40 relative"
        >
          {/* Header section */}
          <div className="pb-5 border-b border-[#E5E5E0]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF8D6] border border-[#F4C430]/40 text-[#171717] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E91E63]" />
              Bharati Share Market Product Enquiry
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#171717] tracking-tight">
              Product Details Enquiry Form
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 font-medium">
              Fill out the details below to receive official product quotes, policy brochures, and personalized pricing.
            </p>
          </div>

          {/* Form Grid */}
          <div className="space-y-4 sm:space-y-5">
            
            {/* Category & Product Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1.5">
                  Product Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setSelectedProductId("");
                    setCustomProductTitle("");
                  }}
                  className="w-full bg-[#FFFFFF] text-[#292929] border border-[#E5E5E0] rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/25 transition-all"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1.5">
                  Select Specific Product / Plan *
                </label>
                {filteredProductsByCategory.length > 0 ? (
                  <select
                    value={selectedProductId}
                    onChange={(e) => {
                      setSelectedProductId(e.target.value);
                    }}
                    className={`w-full bg-[#FFFFFF] text-[#292929] border rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/25 transition-all ${
                      errors.product ? "border-[#D64545] bg-red-50/30" : "border-[#E5E5E0]"
                    }`}
                  >
                    <option value="">-- Choose a Product --</option>
                    {filteredProductsByCategory.map(prod => (
                      <option key={prod.id} value={prod.id}>
                        {prod.title}
                      </option>
                    ))}
                    <option value="custom">Other / Custom Query</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    placeholder="Enter product title or topic"
                    value={customProductTitle}
                    onChange={(e) => setCustomProductTitle(e.target.value)}
                    className={`w-full bg-[#FFFFFF] text-[#292929] border rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm placeholder-[#6B6B6B]/60 focus:bg-white focus:outline-none focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/25 transition-all ${
                      errors.product ? "border-[#D64545] bg-red-50/30" : "border-[#E5E5E0]"
                    }`}
                  />
                )}
                {errors.product && <p className="text-[11px] text-[#D64545] font-semibold mt-1">{errors.product}</p>}
              </div>
            </div>

            {/* Custom Product Title override if 'custom' selected */}
            {selectedProductId === "custom" && (
              <div>
                <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1.5">
                  Custom Product / Service Name *
                </label>
                <input
                  type="text"
                  placeholder="Specify product name (e.g. Commercial Fire Policy, Pre-IPO Shares)"
                  value={customProductTitle}
                  onChange={(e) => setCustomProductTitle(e.target.value)}
                  className="w-full bg-[#FFFFFF] text-[#292929] border border-[#E5E5E0] rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm placeholder-[#6B6B6B]/60 focus:bg-white focus:outline-none focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/25 transition-all"
                />
              </div>
            )}

            {/* User Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full bg-[#FFFFFF] text-[#292929] border rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm placeholder-[#6B6B6B]/60 focus:bg-white focus:outline-none focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/25 transition-all ${
                    errors.fullName ? "border-[#D64545] bg-red-50/30" : "border-[#E5E5E0]"
                  }`}
                />
                {errors.fullName && <p className="text-[11px] text-[#D64545] font-semibold mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1.5">
                  Mobile Phone Number *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="10-digit Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full bg-[#FFFFFF] text-[#292929] border rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 pl-10 text-xs sm:text-sm placeholder-[#6B6B6B]/60 focus:bg-white focus:outline-none focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/25 transition-all ${
                      errors.phone ? "border-[#D64545] bg-red-50/30" : "border-[#E5E5E0]"
                    }`}
                  />
                  <PhoneCall className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-3 sm:top-3.5" />
                </div>
                {errors.phone && <p className="text-[11px] text-[#D64545] font-semibold mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="rahul@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full bg-[#FFFFFF] text-[#292929] border rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 pl-10 text-xs sm:text-sm placeholder-[#6B6B6B]/60 focus:bg-white focus:outline-none focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/25 transition-all ${
                      errors.email ? "border-[#D64545] bg-red-50/30" : "border-[#E5E5E0]"
                    }`}
                  />
                  <Mail className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-3 sm:top-3.5" />
                </div>
                {errors.email && <p className="text-[11px] text-[#D64545] font-semibold mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1.5">
                  City / State / Pincode
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Pune, Maharashtra (411001)"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#FFFFFF] text-[#292929] border border-[#E5E5E0] rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 pl-10 text-xs sm:text-sm placeholder-[#6B6B6B]/60 focus:bg-white focus:outline-none focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/25 transition-all"
                  />
                  <MapPin className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-3 sm:top-3.5" />
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1.5">
                  Preferred Contact Mode
                </label>
                <select
                  value={preferredContact}
                  onChange={(e) => setPreferredContact(e.target.value as any)}
                  className="w-full bg-[#FFFFFF] text-[#292929] border border-[#E5E5E0] rounded-xl px-3 py-2.5 text-xs text-[#292929] font-medium focus:bg-white focus:outline-none focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/25 transition-all"
                >
                  <option value="WhatsApp">💬 WhatsApp Message</option>
                  <option value="Phone Call">📞 Phone Call</option>
                  <option value="Email">✉️ Email Document</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1.5">
                  Preferred Contact Time
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full bg-[#FFFFFF] text-[#292929] border border-[#E5E5E0] rounded-xl px-3 py-2.5 text-xs text-[#292929] font-medium focus:bg-white focus:outline-none focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/25 transition-all"
                >
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  <option value="Anytime / Urgent">Anytime / Urgent</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1.5">
                  Coverage / Budget Level
                </label>
                <select
                  value={budgetOrCoverage}
                  onChange={(e) => setBudgetOrCoverage(e.target.value)}
                  className="w-full bg-[#FFFFFF] text-[#292929] border border-[#E5E5E0] rounded-xl px-3 py-2.5 text-xs text-[#292929] font-medium focus:bg-white focus:outline-none focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/25 transition-all"
                >
                  <option value="Standard (₹1 Crore / Max Protection)">Standard (₹1 Crore Cover / Max Benefit)</option>
                  <option value="Enhanced (₹2 Crore + Riders)">Enhanced (₹2 Crore + Extra Riders)</option>
                  <option value="Basic Entry Level (₹25-50 Lakhs)">Basic Entry Level (₹25-50 Lakhs)</option>
                  <option value="Commercial / High Net Worth">Commercial / High Net Worth</option>
                </select>
              </div>
            </div>

            {/* Message / Remarks */}
            <div>
              <label className="block text-xs font-bold text-[#292929] uppercase tracking-wider mb-1.5">
                Specific Enquiries / Questions / Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Ask specific questions about terms, claim ratios, discounts, tax benefits, or policy options..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#FFFFFF] text-[#292929] border border-[#E5E5E0] rounded-xl p-3 text-xs sm:text-sm placeholder-[#6B6B6B]/60 focus:bg-white focus:outline-none focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/25 transition-all"
              />
            </div>
          </div>

          {/* Privacy Note & Actions */}
          <div className="pt-2 border-t border-[#E5E5E0] space-y-4">
            <div className="flex items-center gap-2 text-[11px] text-[#6B6B6B] font-medium bg-[#F5F5F3] p-3 rounded-xl border border-[#E5E5E0]">
              <ShieldCheck className="w-4 h-4 text-[#198754] shrink-0" />
              <span>
                🔒 100% Data Confidentiality: Your details are strictly protected and used exclusively to process your product inquiry.
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
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-extrabold text-[#171717] bg-[#F4C430] hover:bg-[#FFD21F] shadow-md hover:shadow-lg active:scale-99 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Product Enquiry</span>
              </button>
            </div>
          </div>
        </form>
      )}

      {/* SAVED LOCAL ENQUIRIES DRAWER / MODAL - Light Theme */}
      {showSavedList && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setShowSavedList(false)}
            className="absolute inset-0 bg-[#171717]/60 backdrop-blur-sm" 
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-[#E5E5E0] rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10 animate-scale-in">
            {/* Drawer Header */}
            <div className="px-6 py-5 bg-[#FFFDF5] border-b border-[#E5E5E0] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFF8D6] border border-[#F4C430]/40 flex items-center justify-center text-[#171717]">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#171717]">
                    Saved Product Enquiries
                  </h3>
                  <p className="text-xs text-[#6B6B6B]">
                    Stored in Browser LocalStorage ({storedList.length} total entries)
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowSavedList(false)}
                className="p-2 rounded-full bg-[#F5F5F3] text-[#6B6B6B] hover:text-[#171717] hover:bg-[#E5E5E0] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Filter & Actions Bar */}
            <div className="p-4 bg-[#F5F5F3] border-b border-[#E5E5E0] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="relative w-full sm:w-72">
                <input
                  type="text"
                  placeholder="Search by ID, name, email, product..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full bg-white border border-[#E5E5E0] rounded-xl py-2 pl-9 pr-3 text-xs text-[#292929] placeholder-[#6B6B6B]/60 focus:outline-none focus:border-[#F4C430]"
                />
                <Search className="w-3.5 h-3.5 text-[#6B6B6B] absolute left-3 top-3" />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                {storedList.length > 0 && (
                  <>
                    <button
                      onClick={handleExportJSON}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-[#E5E5E0] text-xs font-bold text-[#292929] hover:bg-[#FFF8D6] transition-colors shadow-sm"
                      title="Export stored enquiries as JSON"
                    >
                      <Download className="w-3.5 h-3.5 text-[#198754]" />
                      <span>Export JSON</span>
                    </button>

                    <button
                      onClick={handleClearAll}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-50 border border-red-200 text-xs font-bold text-[#D64545] hover:bg-red-100 transition-colors"
                      title="Clear all local storage enquiries"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Clear All</span>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* List Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-4 custom-scrollbar">
              {filteredStoredList.length > 0 ? (
                filteredStoredList.map((enq) => (
                  <div 
                    key={enq.id}
                    className="bg-white border border-[#E5E5E0] rounded-2xl p-4 sm:p-5 hover:border-[#F4C430] transition-all space-y-3 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#E5E5E0]">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs font-bold text-[#171717] bg-[#FFF8D6] px-2 py-0.5 rounded border border-[#F4C430]/40">
                            {enq.id}
                          </span>
                          <span className="text-[11px] font-extrabold text-[#171717] bg-[#F5F5F3] px-2.5 py-0.5 rounded-full border border-[#E5E5E0]">
                            {enq.category}
                          </span>
                          <span className="text-[10px] text-[#6B6B6B] font-medium">
                            {new Date(enq.createdAt).toLocaleString()}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#171717]">
                          {enq.productTitle}
                        </h4>
                      </div>

                      <button
                        onClick={() => handleDeleteEnquiry(enq.id)}
                        className="p-1.5 rounded-lg text-[#6B6B6B] hover:text-[#D64545] hover:bg-red-50 transition-colors cursor-pointer"
                        title="Delete enquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-[#6B6B6B] text-[10px] block font-medium">Contact Person</span>
                        <span className="font-bold text-[#171717]">{enq.fullName}</span>
                      </div>

                      <div>
                        <span className="text-[#6B6B6B] text-[10px] block font-medium">Phone / Email</span>
                        <span className="text-[#292929] font-semibold block">{enq.phone}</span>
                        <span className="text-[#6B6B6B] text-[11px] truncate block">{enq.email}</span>
                      </div>

                      <div>
                        <span className="text-[#6B6B6B] text-[10px] block font-medium">Preference</span>
                        <span className="text-[#292929] font-semibold">{enq.preferredContact} ({enq.preferredTime})</span>
                      </div>
                    </div>

                    {enq.message && (
                      <div className="p-3 rounded-xl bg-[#F5F5F3] border border-[#E5E5E0] text-xs text-[#292929]">
                        <span className="text-[#6B6B6B] font-bold text-[10px] uppercase block mb-0.5">Enquiry Details / Message:</span>
                        {enq.message}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12 space-y-3">
                  <Database className="w-10 h-10 text-[#6B6B6B] mx-auto" />
                  <p className="text-sm font-bold text-[#171717]">No stored enquiries found</p>
                  <p className="text-xs text-[#6B6B6B] max-w-xs mx-auto">
                    {searchFilter ? "No records match your search criteria." : "Submit an enquiry form to store product details in your browser."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
