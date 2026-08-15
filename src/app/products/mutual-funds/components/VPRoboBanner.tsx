"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface VPRoboBannerProps {
  onConsultRobo?: () => void;
}

export default function VPRoboBanner({ onConsultRobo }: VPRoboBannerProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full relative rounded-[2rem] overflow-hidden bg-gradient-to-r from-[#171717] via-[#2A2A2A] to-[#171717] p-8 md:p-12 shadow-2xl border border-[#E91E63]/30 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E91E63]/15 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F4C430]/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 relative z-10 w-full md:w-2/3">
          {/* Avatar Icon */}
          <div className="w-16 h-16 shrink-0 rounded-2xl overflow-hidden border-2 border-[#E91E63] shadow-lg bg-[#FFF8D6] flex items-center justify-center text-[#171717]">
            <Bot className="w-10 h-10 text-[#E91E63]" strokeWidth={2} />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-3 rounded-full bg-[#E91E63]/20 border border-[#E91E63]/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#E91E63]" />
              <span className="text-xs font-bold tracking-wide text-[#E91E63] uppercase">
                AI-Powered Assistance
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
              Want detailed suggestions for <span className="text-[#E91E63]">funds?</span>
            </h3>
            <p className="text-white/80 font-normal text-sm md:text-base leading-relaxed">
              Consult our VP Robo to get personalized mutual fund recommendations tailored to your unique financial goals and risk appetite.
            </p>
          </div>
        </div>

        <div className="relative z-10 w-full md:w-auto shrink-0 flex justify-center md:justify-end">
          <Link
            href="/enquiry"
            className="group flex items-center gap-3 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] px-8 py-4 rounded-xl font-extrabold uppercase tracking-widest text-sm transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer text-center"
          >
            Consult VP Robo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
