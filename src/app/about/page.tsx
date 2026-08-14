"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 space-y-12">
        <div className="space-y-4 text-center">
          <span className="text-xs font-bold text-[#2076C7] uppercase tracking-widest">Our Legacy & Mission</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Democratizing Stock Market Success
          </h1>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            At Bharti Share Market, our core vision is **आर्थिक साक्षरता** (Financial Literacy).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <div className="bg-zinc-900/40 border border-zinc-900 p-6 rounded-2xl space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Our Vision
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              To integrate advanced financial intelligence into everyday life — empowering families across India to achieve stability, growth, and prosperity.
            </p>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-900 p-6 rounded-2xl space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#2076C7]" />
              Structured Approach
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We provide simplified e-learning courses, strategic trading handbooks, daily interactive webinars, and analytical dashboards.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
