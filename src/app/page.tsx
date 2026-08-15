"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4 max-w-4xl mx-auto text-center relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#2076C7]/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#1CADA3]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2076C7]/10 border border-[#2076C7]/20 text-[#2076C7] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Financial Literacy & Advisory Hub
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-none">
            Welcome to Bharati Mall B2C Portal
          </h1>

          <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Bharati Financial Mall brings a wide range of financial solutions together on one technology-enabled platform, helping you discover the right options for your personal, family and business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2076C7] to-[#1CADA3] hover:shadow-lg hover:shadow-[#2076C7]/15 active:scale-95 transition-all text-center"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold text-zinc-300 border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900 transition-all text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
