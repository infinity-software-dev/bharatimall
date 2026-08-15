"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Award
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-[#A3A3A3] pt-18 pb-12 border-t border-[#292929] mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top 3-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16 items-start">

          {/* Col 1: Brand & Identity (In Focus, Increased font & prominence) */}
          {/* <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#292929] border border-[#383838] text-[#F4C430] text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Trusted Financial Enterprise
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                BHARTI SHARE MARKET
              </h2>
              <div className="w-14 h-1 bg-[#F4C430] rounded-full" />
            </div>

            <p className="text-sm sm:text-[15px] text-[#D4D4D4] leading-relaxed max-w-md font-normal">
              India's trusted financial services and investment consulting enterprise empowering individuals and organizations with smart financial solutions, wealth preservation, and long-term financial growth.
            </p>
          </div> */}

          {/* Col 1: Our Products (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative">
              <h3 className="text-white font-bold text-base tracking-wide">
                Our Products
              </h3>
              <div className="w-10 h-0.5 bg-[#F4C430] mt-2 rounded-full" />
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products/term-life-insurance" className="hover:text-[#F4C430] transition-colors">
                  Term Life Insurance
                </Link>
              </li>
              <li>
                <Link href="/products/health-insurance" className="hover:text-[#F4C430] transition-colors">
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link href="/products/motor-insurance" className="hover:text-[#F4C430] transition-colors">
                  Motor Insurance
                </Link>
              </li>
              <li>
                <Link href="/products/general-insurance" className="hover:text-[#F4C430] transition-colors">
                  General Insurance
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F4C430] transition-colors">
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F4C430] transition-colors">
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F4C430] transition-colors">
                  Fixed Deposit
                </Link>
              </li>
              <li>
                <Link href="/products/unlisted" className="hover:text-[#F4C430] transition-colors">
                  Unlisted Shares
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Quick Links & Legal (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative">
              <h3 className="text-white font-bold text-base tracking-wide">
                Quick Links & Legal
              </h3>
              <div className="w-10 h-0.5 bg-[#F4C430] mt-2 rounded-full" />
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#F4C430] transition-colors">
                  About Bharti Share Market
                </Link>
              </li>
              <li>
                <Link href="/media-center" className="hover:text-[#F4C430] transition-colors flex items-center gap-1.5">
                  <span>Media Center & Awards</span>
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-[#F4C430] transition-colors">
                  Calculators
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F4C430] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#F4C430] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#F4C430] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-[#F4C430] transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Reach Us / Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative">
              <h3 className="text-white font-bold text-base tracking-wide">
                Reach Us
              </h3>
              <div className="w-10 h-0.5 bg-[#F4C430] mt-2 rounded-full" />
            </div>
            <ul className="space-y-4 text-xs">
              <li className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#292929] border border-[#383838] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#F4C430]" />
                </div>
                <div>
                  <span className="text-[11px] text-[#8E8E8E] block">Toll-Free Helpline</span>
                  <a href="tel:+917057101010" className="text-white font-bold text-sm hover:text-[#F4C430] transition-colors">
                    +91 7057101010
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#292929] border border-[#383838] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#F4C430]" />
                </div>
                <div>
                  <span className="text-[11px] text-[#8E8E8E] block">Official Email</span>
                  <a href="mailto:support@bhartisharemarket.com" className="text-white font-semibold text-xs hover:text-[#F4C430] transition-colors">
                    support@bhartisharemarket.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#292929] border border-[#383838] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#F4C430]" />
                </div>
                <div className="text-xs text-[#A3A3A3] leading-relaxed">
                  <span className="text-white font-semibold block mb-0.5">Head Office</span>
                  No 4110, 4th Floor, Marvel Fuego, Near Amanora Mall, Opp Seasons Mall, Magarpatta, Pune 411036.
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Compliance Box */}
        <div className="pt-8 border-t border-[#292929] space-y-3 text-xs text-[#8E8E8E] leading-relaxed">
          <p>
            <strong className="text-white">Disclaimer:</strong> We do not provide any stock tips, speculative recommendations, or guaranteed returns. Investments in financial markets are subject to market risks. Read all scheme and offer documents carefully before investing.
          </p>
          <p className="flex items-center gap-1.5 text-[11px] text-[#A3A3A3]">
            <strong className="text-white">
              Important Compliance:
            </strong>
            All products and services comply with applicable regulatory guidelines and standards.
          </p>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-[#292929] flex flex-col items-center justify-center text-center gap-2 text-xs text-[#737373]">
          <p>
            Copyright 2026 Bharti Share Market. All Rights Reserved
          </p>
        </div>

      </div>

      {/* Top Accent Strip */}
      <div className="h-1 bg-[#F4C430] w-full mt-8" />
    </footer>
  );
}
