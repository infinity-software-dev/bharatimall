"use client";

import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin,
  Sparkles
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 mt-auto text-zinc-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Logo & Pitch */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-800 bg-zinc-900 flex items-center justify-center p-0.5">
              <img 
                src="/logo.png" 
                alt="Bharti Share Market Footer Logo" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="text-base font-bold tracking-tight text-white">BHARATI MALL</span>
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Bharati Mall's B2C client panel provides state-of-the-art retail e-books, advisory trackers, and financial training. Driven by the mission of Bharti Share Market.
          </p>
          <div className="text-[10px] text-amber-500 font-bold uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            आर्थिक साक्षरता (Financial Literacy)
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-xs font-extrabold uppercase tracking-widest text-zinc-300 mb-4">Quick Links</h5>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/" className="hover:text-[#2076C7] transition-colors">Home Landing</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#2076C7] transition-colors">About Mission</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#2076C7] transition-colors">Buy Products</Link>
            </li>
            <li>
              <Link href="/media-center" className="hover:text-[#2076C7] transition-colors">Media Bulletins</Link>
            </li>
          </ul>
        </div>

        {/* Legal / Policy */}
        <div>
          <h5 className="text-xs font-extrabold uppercase tracking-widest text-zinc-300 mb-4">Customer Care</h5>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/" className="hover:text-[#2076C7] transition-colors">Terms of Service</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#2076C7] transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#2076C7] transition-colors">Refund Guidelines</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#2076C7] transition-colors">Disclaimer</Link>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="space-y-3.5 text-xs">
          <h5 className="text-xs font-extrabold uppercase tracking-widest text-zinc-300 mb-4">Reach Us</h5>
          <div className="flex items-center gap-3 text-zinc-500">
            <Phone className="w-4 h-4 text-[#2076C7] shrink-0" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-500">
            <Mail className="w-4 h-4 text-[#2076C7] shrink-0" />
            <span>support@bhartisharemarket.com</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-500">
            <MapPin className="w-4 h-4 text-[#2076C7] shrink-0" />
            <span>Bharati Mall, Main Road, Pune, Maharashtra - 411001</span>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <p>© 2026 Bharati Mall. All rights reserved. Powered by Bharti Share Market.</p>
        <p>Disclaimers: Stock trading involves high risk. All B2C advisory is educational in nature.</p>
      </div>
    </footer>
  );
}
