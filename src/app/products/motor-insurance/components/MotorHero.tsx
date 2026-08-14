"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface MotorHeroProps {
  onGetQuote: (data: { regNo: string; email: string; phone: string }) => void;
}

export default function MotorHero({ onGetQuote }: MotorHeroProps) {
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regNo) {
      alert("Please enter your vehicle registration number.");
      return;
    }
    if (!agreed) {
      alert("Please accept the terms and conditions.");
      return;
    }
    onGetQuote({ regNo, email, phone });
  };

  const scrollToComparison = () => {
    document.getElementById("price-comparison")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-14 lg:pb-20">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-[#127083] text-xs font-bold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>Trusted by 10 Lakhs+ Happy Customers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#1660A7] leading-[1.12]">
              Save up to 50%* on<br />
              Motor Insurance
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 max-w-xl font-normal leading-relaxed">
              We don&apos;t just sell policies; we provide peace of mind. Experience the fastest, most transparent way to secure your vehicle.
            </p>

            {/* Custom SVG Vehicle & Shield Illustration */}
            <div className="pt-2 max-w-md">
              <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-sky-50 to-teal-50/50 rounded-2xl border border-sky-100 p-4 flex items-center justify-center overflow-hidden shadow-inner">
                {/* Shield background */}
                <div className="absolute z-0 w-32 h-36 bg-gradient-to-b from-[#2076C7] to-[#1CADA3] rounded-t-full rounded-b-2xl border-4 border-amber-300 flex items-center justify-center shadow-lg transform -translate-y-2">
                  <div className="text-white text-3xl font-black tracking-tighter">
                    ∞
                  </div>
                </div>

                {/* Policy Document Badge */}
                <div className="absolute top-3 right-5 z-10 bg-white rounded-lg border border-gray-200 p-2 shadow-md flex flex-col items-center">
                  <span className="text-[8px] font-black uppercase text-[#2076C7] bg-blue-50 px-1.5 py-0.5 rounded">POLICY</span>
                  <div className="w-6 h-0.5 bg-gray-200 my-1" />
                  <div className="w-5 h-0.5 bg-gray-200" />
                  <div className="w-4 h-4 rounded-full bg-amber-400 text-white flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Car Graphic */}
                <div className="relative z-10 w-full mt-auto flex justify-center">
                  <svg viewBox="0 0 340 120" className="w-full max-w-[280px] drop-shadow-md">
                    <path
                      d="M20,85 C20,70 35,65 50,65 L85,65 L115,35 L215,35 L245,65 L310,65 C325,65 335,75 335,85 L335,95 L20,95 Z"
                      fill="#2563eb"
                    />
                    <path
                      d="M90,62 L118,38 L165,38 L165,62 Z"
                      fill="#93c5fd"
                    />
                    <path
                      d="M175,38 L212,38 L238,62 L175,62 Z"
                      fill="#93c5fd"
                    />
                    {/* Headlights */}
                    <path d="M320,72 L334,75 L320,82 Z" fill="#fef08a" />
                    {/* Wheels */}
                    <circle cx="75" cy="95" r="18" fill="#1e293b" stroke="#cbd5e1" strokeWidth="4" />
                    <circle cx="75" cy="95" r="7" fill="#64748b" />
                    <circle cx="270" cy="95" r="18" fill="#1e293b" stroke="#cbd5e1" strokeWidth="4" />
                    <circle cx="270" cy="95" r="7" fill="#64748b" />
                    <line x1="10" y1="113" x2="330" y2="113" stroke="#94a3b8" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Get Instant Quote Form */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl w-full max-w-[430px] space-y-5">
              <h3 className="text-xl font-extrabold text-zinc-900 tracking-tight">
                Get Instant Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Vehicle Registration Number */}
                <div>
                  <div className="relative border-2 border-[#2076C7] rounded-xl px-4 py-2 bg-white">
                    <label className="absolute -top-2.5 left-3 bg-white px-1.5 text-[10px] font-bold uppercase tracking-wider text-[#2076C7]">
                      Vehicle registration number
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="E.G. MH01AA1234"
                      value={regNo}
                      onChange={(e) => setRegNo(e.target.value.toUpperCase())}
                      className="w-full text-sm sm:text-base font-bold text-gray-800 tracking-wider outline-none placeholder:text-gray-300 uppercase"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#2076C7] font-semibold mt-1 px-1">
                    <button
                      type="button"
                      onClick={scrollToComparison}
                      className="hover:underline cursor-pointer"
                    >
                      Got a new vehicle
                    </button>
                    <button
                      type="button"
                      onClick={scrollToComparison}
                      className="hover:underline cursor-pointer"
                    >
                      View prices
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Enter Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#2076C7]/20 focus:border-[#2076C7] outline-none transition-all"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <input
                    type="tel"
                    placeholder="Enter Mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#2076C7]/20 focus:border-[#2076C7] outline-none transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-13 text-white rounded-xl font-bold text-sm tracking-wider uppercase shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 overflow-hidden"
                  style={{ background: "linear-gradient(to right, #2076C7, #1CADA3)" }}
                >
                  <span>Get Your Quote Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Agreement Checkbox */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="motor-terms"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 rounded text-[#2076C7] focus:ring-[#2076C7]"
                  />
                  <label htmlFor="motor-terms" className="text-[11px] text-gray-500 leading-snug">
                    I agree to the <span className="text-[#2076C7] underline cursor-pointer">terms and conditions</span> and <span className="text-[#2076C7] underline cursor-pointer">privacy policy</span>.
                  </label>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
