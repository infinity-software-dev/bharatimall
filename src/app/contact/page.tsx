"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {


  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  Tv,
  MessageSquare,
  Clock,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

// Crisp SVG social icons matching the design
const YouTubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const VideoPlayIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm6 4v10l8-5-8-5z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const socialLinks = [
  { name: "YouTube", icon: YouTubeIcon, href: "https://www.youtube.com/@bhartisharemarket" },
  { name: "Media Center", icon: VideoPlayIcon, href: "/media-center" },
  { name: "Facebook", icon: FacebookIcon, href: "https://www.facebook.com/bhartisharemarket" },
  { name: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/bhartisharemarket" },
  { name: "LinkedIn", icon: LinkedInIcon, href: "https://www.linkedin.com/company/bhartisharemarket" },
];

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [advisoryTopic, setAdvisoryTopic] = useState("Share Market Online Course");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !mobileNumber.trim()) {
      toast.error("Please provide at least your first name and mobile number.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Thank you! Your advising session request has been received. Our team will contact you shortly.");
    }, 900);
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNumber("");
    setMessage("");
    setIsSuccess(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] text-[#4B5563] selection:bg-[#FDF2F8] selection:text-[#E91E63] font-sans">
      <Header />

      <main className="flex-1">
        {/* Top Decorative Breadcrumb Bar */}

        {/* Main Content Grid Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left Column: Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#FBCFE8] text-[#E91E63] text-xs font-bold shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#E91E63]" />
                  <span>Get In Touch With Us</span>
                </motion.div>

                <h1 className="text-3xl sm:text-4xl font-black text-[#374151] tracking-tight leading-tight">
                  We&apos;re Always Eager to <span className="text-[#E91E63]">Hear From You!</span>
                </h1>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Have questions about our share market courses, advisory sessions, or financial products? Reach out directly to our team.
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-6 pt-2">

                {/* Address */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#FFF8D6] flex items-center justify-center text-[#D97706] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <h2 className="text-base font-bold text-[#374151]">Address</h2>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4B5563] pl-9 leading-relaxed">
                    Head Office: No 4110, 4th Floor, Marvel Fuego, Near Amanora Mall, Opp Seasons Mall, Magarpatta, Pune 411036.
                  </p>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#FDF2F8] flex items-center justify-center text-[#E91E63] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <h2 className="text-base font-bold text-[#374151]">Email</h2>
                  </div>
                  <p className="pl-9">
                    <a
                      href="mailto:support@bhartisharemarket.com"
                      className="text-xs sm:text-sm text-[#4B5563] hover:text-[#E91E63] font-medium transition-colors"
                    >
                      support@bhartisharemarket.com
                    </a>
                  </p>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#E8F8F5] flex items-center justify-center text-[#198754] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <h2 className="text-base font-bold text-[#374151]">Phone</h2>
                  </div>
                  <p className="pl-9">
                    <a
                      href="tel:+917057101010"
                      className="text-xs sm:text-sm text-[#4B5563] hover:text-[#198754] font-semibold transition-colors"
                    >
                      +91 7057101010
                    </a>
                  </p>
                </div>

              </div>

              {/* Assurance Callout */}
              <div className="bg-[#FFFDF5] border border-[#E5E5E0] rounded-2xl p-4 flex items-center gap-3 shadow-xs">
                <ShieldCheck className="w-6 h-6 text-[#198754] shrink-0" />
                <div className="text-xs text-[#64748B]">
                  <span className="font-bold text-[#374151]">Verified Privacy Guarantee:</span> Your details are confidential and used exclusively for scheduling your session.
                </div>
              </div>

            </motion.div>

            {/* Right Column: Form Card ("Get In Touch") */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-7"
            >
              <div className="bg-[#FFFFFF] border border-[#E5E5E0] rounded-3xl shadow-xl p-6 sm:p-10 relative overflow-hidden card-shadow">

                {/* Top Subtle Ambient Magenta & Yellow Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#E91E63]/10 rounded-full blur-3xl pointer-events-none -z-0" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFF8D6] rounded-full blur-3xl pointer-events-none -z-0" />

                {/* Form Card Header */}
                <div className="space-y-1 mb-6 relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-black text-[#374151] tracking-tight">
                    Get In Touch
                  </h2>
                  <p className="text-xs sm:text-sm text-[#64748B]">
                    Fill out this form for booking a consultant advising session.
                  </p>
                </div>

                {/* Circular Emblem Icon from screenshot */}
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#FFF8D6] border-2 border-[#F4C430] hover:border-[#E91E63] p-1 shadow-md flex items-center justify-center hover:scale-105 transition-all">
                    <img
                      src="/bharti_logo.png"
                      alt="Bharti Share Market Emblem"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-10 space-y-4"
                    >
                      <div className="w-16 h-16 bg-[#198754]/10 border border-[#198754]/30 rounded-full flex items-center justify-center mx-auto text-[#198754]">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-[#374151]">Session Request Submitted!</h3>
                        <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
                          Thank you, <strong>{firstName} {lastName}</strong>. Our senior market counselor will contact you at <strong>{mobileNumber}</strong> to confirm your advising session.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#E91E63] bg-[#FDF2F8] border border-[#FBCFE8] hover:bg-[#E91E63] hover:text-white transition-colors cursor-pointer"
                      >
                        Submit Another Request
                      </button>
                    </motion.div>
                  ) : (
                    <form key="form" onSubmit={handleSubmit} className="space-y-5 relative z-10">

                      {/* First Name & Last Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-bold text-[#374151]">
                            First Name :
                          </label>
                          <input
                            type="text"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#E5E5E0] focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 text-xs sm:text-sm text-[#374151] placeholder-[#94A3B8] outline-none transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-xs font-bold text-[#374151]">
                            Last Name :
                          </label>
                          <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                            className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#E5E5E0] focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 text-xs sm:text-sm text-[#374151] placeholder-[#94A3B8] outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#374151]">
                          Email Address :
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#E5E5E0] focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 text-xs sm:text-sm text-[#374151] placeholder-[#94A3B8] outline-none transition-all"
                        />
                      </div>

                      {/* Mobile Number */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#374151]">
                          Mobile Number :
                        </label>
                        <input
                          type="tel"
                          required
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          placeholder="+91 7057101010"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#E5E5E0] focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 text-xs sm:text-sm text-[#374151] placeholder-[#94A3B8] outline-none transition-all"
                        />
                      </div>

                      {/* Topic of Interest */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#374151]">
                          Topic of Interest :
                        </label>
                        <select
                          value={advisoryTopic}
                          onChange={(e) => setAdvisoryTopic(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#E5E5E0] focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 text-xs sm:text-sm text-[#374151] outline-none transition-all cursor-pointer"
                        >
                          <option value="Share Market Online Course">Share Market Mastery - Online Course</option>
                          <option value="Share Market Offline Classroom">Share Market Mastery - Offline Classroom</option>
                          <option value="Mutual Funds & Systematic SIPs">Mutual Funds &amp; Systematic SIPs</option>
                          <option value="NPS & Retirement Planning">NPS &amp; Retirement Planning</option>
                          <option value="Unlisted Shares & Pre-IPO">Unlisted Shares &amp; Pre-IPO Investment</option>
                          <option value="Insurance Advisory">Life &amp; Health Insurance Advisory</option>
                          <option value="General Financial Consultation">General Financial Consultation</option>
                        </select>
                      </div>

                      {/* Message / Remarks */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#374151]">
                          Message / Query (Optional) :
                        </label>
                        <textarea
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us what you would like to discuss..."
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#E5E5E0] focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 text-xs sm:text-sm text-[#374151] placeholder-[#94A3B8] outline-none transition-all resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-4 rounded-xl text-sm font-bold text-[#2A2E33] bg-[#F4C430] hover:bg-[#FFD21F] btn-brand-shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="w-4 h-4 border-2 border-[#2A2E33] border-t-transparent rounded-full animate-spin"></span>
                              <span>Submitting Request...</span>
                            </>
                          ) : (
                            <>
                              <span>Book Advising Session</span>
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </motion.button>
                      </div>

                    </form>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}