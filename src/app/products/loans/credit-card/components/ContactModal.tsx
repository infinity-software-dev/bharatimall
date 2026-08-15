"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    User,
    Mail,
    Phone,
    MessageCircle,
    Send,
    Loader2,
    Sparkles,
    CheckCircle2,
} from "lucide-react";
import toast from "react-hot-toast";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
    source?: string;
}

export default function ContactModal({
    isOpen,
    onClose,
    onSuccess,
    source = "Credit Card Page",
}: ContactModalProps) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        let newValue = value;

        if (name === "name") {
            newValue = newValue
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase());
        }
        if (name === "email") {
            newValue = newValue.trim().toLowerCase();
        }
        if (name === "phone") {
            newValue = newValue.replace(/\D/g, "");
            if (newValue.length > 10) return;
        }

        setForm({ ...form, [name]: newValue });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setLoading(true);

        const nameRegex = /^[A-Za-z]+(?:\s+[A-Za-z]+)+$/;
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const phoneRegex = /^[6-9]\d{9}$/;

        if (!nameRegex.test(form.name)) {
            setError("Please enter your full name (first and last).");
            setLoading(false);
            return;
        }

        if (!emailRegex.test(form.email)) {
            setError("Please enter a valid email address.");
            setLoading(false);
            return;
        }

        if (!phoneRegex.test(form.phone)) {
            setError("Enter a valid 10-digit phone number.");
            setLoading(false);
            return;
        }

        if (form.message.trim().length < 5) {
            setError("Message should be at least 5 characters.");
            setLoading(false);
            return;
        }

        try {
            // Simulated mock submission without external backend dependencies
            await new Promise((resolve) => setTimeout(resolve, 800));

            setSuccess("Callback request submitted successfully!");
            toast.success("Callback request submitted successfully!");
            setForm({ name: "", email: "", phone: "", message: "" });

            if (onSuccess) onSuccess();

            setTimeout(() => {
                onClose();
                setSuccess(null);
            }, 2000);
        } catch (err: any) {
            const errorMessage = err?.message || "Something went wrong!";
            setError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-[#171717]/60 backdrop-blur-xs overflow-y-auto font-sans">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-[#FFFFFF] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-[#E5E5E0] relative my-8"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-[#E5E5E0] flex justify-between items-center bg-[#FFFDF5] sticky top-0 z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#FFF8D6] border border-[#F4C430]/40 flex items-center justify-center text-[#171717] shadow-xs">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-extrabold text-[#171717] tracking-tight">
                                        Request a Callback
                                    </h3>
                                    <p className="text-xs text-[#6B6B6B]">
                                        Source: {source}
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

                        <div className="p-6 md:p-8">
                            {!success ? (
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    {error && (
                                        <div className="bg-[#FFF2F2] text-[#D64545] text-xs font-semibold p-3.5 rounded-2xl border border-[#D64545]/20 flex items-start gap-2.5">
                                            <X size={15} className="mt-0.5 shrink-0" />
                                            <span>{error}</span>
                                        </div>
                                    )}

                                    <div className="space-y-3">
                                        <div>
                                            <label className="block text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">
                                                Full Name <span className="text-[#D64545]">*</span>
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B]" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter your full name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-2.5 bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl outline-none focus:border-[#F4C430] text-xs sm:text-sm font-semibold text-[#171717]"
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
                                                        name="email"
                                                        placeholder="name@example.com"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full pl-10 pr-4 py-2.5 bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl outline-none focus:border-[#F4C430] text-xs sm:text-sm font-semibold text-[#171717]"
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
                                                        name="phone"
                                                        placeholder="10-digit mobile number"
                                                        value={form.phone}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full pl-10 pr-4 py-2.5 bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl outline-none focus:border-[#F4C430] text-xs sm:text-sm font-semibold text-[#171717]"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">
                                                Message <span className="text-[#D64545]">*</span>
                                            </label>
                                            <div className="relative">
                                                <MessageCircle className="absolute left-3.5 top-3.5 w-4 h-4 text-[#6B6B6B]" />
                                                <textarea
                                                    name="message"
                                                    placeholder="How can we help you?"
                                                    rows={4}
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-2.5 bg-[#FFFDF5] border border-[#E5E5E0] rounded-xl outline-none focus:border-[#F4C430] text-xs sm:text-sm font-semibold text-[#171717] resize-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                <span>Sending Request...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                <span>Submit Request</span>
                                            </>
                                        )}
                                    </button>

                                    <p className="text-[11px] text-[#6B6B6B] text-center pt-2 flex items-center justify-center gap-1.5 font-medium">
                                        <CheckCircle2 size={13} className="text-[#198754]" />
                                        <span>Secure & Confidential • Expert advisor assigned within 24 hours</span>
                                    </p>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8 space-y-3"
                                >
                                    <div className="w-16 h-16 bg-[#E6F4EA] rounded-full flex items-center justify-center mx-auto text-[#198754]">
                                        <CheckCircle2 size={32} strokeWidth={2.5} />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-[#171717]">
                                        Request Sent Successfully!
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                                        Thank you! Our card advisory experts will call you back shortly.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}