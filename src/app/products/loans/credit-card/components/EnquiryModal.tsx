"use client";

import React, { useState, useEffect } from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    MessageCircle,
    Send,
    CheckCircle2,
    X,
    Loader2,
    Sparkles,
} from "lucide-react";
import toast from "react-hot-toast";

export type ProductType =
    | "SHARE"
    | "MUTUAL_FUND"
    | "BOND"
    | "NCD"
    | "PMS"
    | "AIF"
    | "NPS"
    | "Real_Estate"
    | "FIXED_DEPOSIT"
    | "CREDIT_CARD"
    | "PET_INSURANCE"
    | "MLD";

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
    productType: ProductType;
    productName?: string;
    productId?: number;
    sourcePage?: string;
    preFillMessage?: string;
    multipleProducts?: Array<{
        id: number;
        name: string;
        quantity?: number;
        price?: string;
    }>;
}

const DEFAULT_MULTIPLE_PRODUCTS: Array<{
    id: number;
    name: string;
    quantity?: number;
    price?: string;
}> = [];

export default function EnquiryModal({
    isOpen,
    onClose,
    onSuccess,
    productType,
    productName = "",
    preFillMessage = "",
    multipleProducts = DEFAULT_MULTIPLE_PRODUCTS,
}: EnquiryModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [enquiryError, setEnquiryError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
    });

    const getProductTypeLabel = (type: ProductType): string => {
        const types: Record<ProductType, string> = {
            SHARE: "Unlisted Share",
            MUTUAL_FUND: "Mutual Fund",
            BOND: "Bonds",
            NCD: "Non-Convertible Debenture",
            PMS: "Portfolio Management Services",
            AIF: "Alternative Investment Fund",
            NPS: "National Pension System",
            Real_Estate: "Real Estate",
            FIXED_DEPOSIT: "Fixed Deposit",
            CREDIT_CARD: "Credit Card",
            PET_INSURANCE: "Pet Insurance",
            MLD: "Market Linked Debentures",
        };
        return types[type] || type;
    };

    useEffect(() => {
        if (preFillMessage) {
            setFormData((prev) => ({ ...prev, message: preFillMessage }));
        }
    }, [preFillMessage]);

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (enquiryError) setEnquiryError(null);
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.full_name.trim()) {
            setEnquiryError("Full name is required");
            return;
        }
        if (!formData.email.trim()) {
            setEnquiryError("Email is required");
            return;
        }
        if (!formData.phone.trim()) {
            setEnquiryError("Phone number is required");
            return;
        }
        if (!formData.city.trim()) {
            setEnquiryError("City is required");
            return;
        }
        if (!formData.message.trim()) {
            setEnquiryError("Message is required");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            setEnquiryError("Please enter a valid email address");
            return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone.trim())) {
            setEnquiryError("Please enter a valid 10-digit phone number");
            return;
        }

        setIsSubmitting(true);
        setEnquiryError(null);

        try {
            // Simulated mock submission
            await new Promise((resolve) => setTimeout(resolve, 800));

            if (multipleProducts.length > 0) {
                toast.success(`Enquiry submitted for ${multipleProducts.length} product(s)!`);
            } else if (productName) {
                toast.success("Enquiry submitted successfully!");
            } else {
                setEnquiryError("No products selected");
                setIsSubmitting(false);
                return;
            }

            if (onSuccess) onSuccess();
            onClose();
        } catch (err: any) {
            const errorMessage =
                err?.message || "Failed to submit enquiry. Please try again.";
            setEnquiryError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[2000] bg-[#171717]/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto font-sans">
            <div className="bg-[#FFFFFF] rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden border border-[#E5E5E0] my-8 animate-in zoom-in-95 duration-200">

                {/* Modal Header */}
                <div className="bg-[#FFFDF5] p-6 border-b border-[#E5E5E0] flex justify-between items-center sticky top-0 z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FFF8D6] border border-[#F4C430]/40 flex items-center justify-center text-[#171717] shadow-xs">
                            <Sparkles size={20} />
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-[#171717] tracking-tight">
                                {getProductTypeLabel(productType)} Enquiry
                            </h3>
                            <p className="text-xs text-[#6B6B6B]">
                                {productName ? `Applying for: ${productName}` : "Complete your request"}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="w-9 h-9 rounded-full bg-[#F5F5F3] hover:bg-[#FFF8D6] border border-[#E5E5E0] flex items-center justify-center text-[#171717] transition-colors cursor-pointer"
                    >
                        <X size={16} strokeWidth={2.5} />
                    </button>
                </div>

                {/* Modal Form */}
                <form className="p-6 space-y-4 max-h-[calc(100vh-180px)] overflow-y-auto" onSubmit={handleFormSubmit}>
                    {enquiryError && (
                        <div className="bg-[#FFF2F2] text-[#D64545] text-xs font-semibold p-3.5 rounded-2xl border border-[#D64545]/20 flex items-start gap-2.5">
                            <X size={15} className="mt-0.5 shrink-0" />
                            <span>{enquiryError}</span>
                        </div>
                    )}

                    {/* Personal Information Group */}
                    <div className="bg-[#FFFDF5] p-5 rounded-2xl border border-[#E5E5E0] space-y-4">
                        <h4 className="text-xs font-extrabold text-[#171717] uppercase tracking-wider flex items-center gap-2">
                            <User size={15} className="text-[#171717]" />
                            Personal Information
                        </h4>

                        <div className="space-y-3">
                            <div>
                                <label className="block text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">
                                    Full Name <span className="text-[#D64545]">*</span>
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B]" />
                                    <input
                                        type="text"
                                        value={formData.full_name}
                                        onChange={(e) => handleInputChange("full_name", e.target.value)}
                                        required
                                        className="w-full pl-10 pr-4 py-2.5 bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl outline-none focus:border-[#F4C430] text-xs sm:text-sm font-semibold text-[#171717]"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">
                                        Email <span className="text-[#D64545]">*</span>
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B]" />
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                            required
                                            className="w-full pl-10 pr-4 py-2.5 bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl outline-none focus:border-[#F4C430] text-xs sm:text-sm font-semibold text-[#171717]"
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">
                                        Phone <span className="text-[#D64545]">*</span>
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B]" />
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange("phone", e.target.value)}
                                            required
                                            className="w-full pl-10 pr-4 py-2.5 bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl outline-none focus:border-[#F4C430] text-xs sm:text-sm font-semibold text-[#171717]"
                                            placeholder="10-digit mobile number"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">
                                    City <span className="text-[#D64545]">*</span>
                                </label>
                                <div className="relative">
                                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B]" />
                                    <input
                                        type="text"
                                        value={formData.city}
                                        onChange={(e) => handleInputChange("city", e.target.value)}
                                        required
                                        className="w-full pl-10 pr-4 py-2.5 bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl outline-none focus:border-[#F4C430] text-xs sm:text-sm font-semibold text-[#171717]"
                                        placeholder="Enter your city"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Message Section */}
                    <div>
                        <label className="block text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">
                            Your Message <span className="text-[#D64545]">*</span>
                        </label>
                        <div className="relative">
                            <MessageCircle className="absolute left-3.5 top-3.5 w-4 h-4 text-[#6B6B6B]" />
                            <textarea
                                value={formData.message}
                                onChange={(e) => handleInputChange("message", e.target.value)}
                                required
                                rows={4}
                                className="w-full pl-10 pr-4 py-2.5 bg-[#FFFDF5] border border-[#E5E5E0] rounded-xl outline-none focus:border-[#F4C430] text-xs sm:text-sm font-semibold text-[#171717] resize-none"
                                placeholder="Mention any specific preferences or requirements..."
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Submitting Request...</span>
                            </>
                        ) : (
                            <>
                                <Send className="w-4 h-4" />
                                <span>Submit Request</span>
                            </>
                        )}
                    </button>

                    {/* Security Note */}
                    <p className="text-[11px] text-[#6B6B6B] text-center pt-2 flex items-center justify-center gap-1.5 font-medium">
                        <CheckCircle2 size={13} className="text-[#198754]" />
                        <span>Secure & Confidential • Relationship Manager assigned within 24 hours</span>
                    </p>
                </form>

            </div>
        </div>
    );
}