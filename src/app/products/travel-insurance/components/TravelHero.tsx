"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Shield, Globe, ArrowRight, MapPin, Calendar, Home } from "lucide-react";

interface TravelHeroProps {
  onGetQuote: (data: { destination: string; region: string; dates: string }) => void;
}

export default function TravelHero({ onGetQuote }: TravelHeroProps) {
  const [destination, setDestination] = useState("Schengen Area (Europe)");
  const [region, setRegion] = useState("India");
  const [dates, setDates] = useState("Next 14 Days");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGetQuote({ destination, region, dates });
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-14 lg:pb-20">
      {/* Background ambient blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/60 text-[#2076C7] text-xs font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#2076C7] animate-ping" />
              <span>TRAVEL FEARLESSLY</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#1660A7] leading-[1.12]">
              Explore Your Boundaries with Travel Insurance.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-600 max-w-xl font-normal leading-relaxed">
              Explore the world with confidence. Our comprehensive travel insurance protects you against medical emergencies, trip cancellations, and lost baggage across 195+ countries.
            </p>
          </div>

          {/* Hero Right Visual Graphic with Girl on Luggage */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-square rounded-full bg-gradient-to-b from-teal-50/80 via-sky-50/50 to-white flex items-center justify-center p-6 shadow-inner border border-sky-100">
              
              {/* Floating Badge Top Right: Protection */}
              <div className="absolute top-6 right-2 sm:right-4 z-20 inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-gray-100 shadow-lg text-left">
                <div className="w-8 h-8 rounded-xl bg-teal-50 text-[#1CADA3] flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block leading-none">
                    PROTECTION
                  </span>
                  <span className="text-xs font-bold text-gray-900">
                    Secure Journey
                  </span>
                </div>
              </div>

              {/* Floating Badge Bottom Left: Global */}
              <div className="absolute bottom-6 left-2 sm:left-4 z-20 inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-gray-100 shadow-lg text-left">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#2076C7] flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block leading-none">
                    GLOBAL
                  </span>
                  <span className="text-xs font-bold text-gray-900">
                    195+ Countries
                  </span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative w-full h-full max-w-[320px] max-h-[320px] flex items-center justify-center z-10">
                <Image
                  src="/images/travel-hero.png"
                  alt="Traveler with suitcase and passport"
                  width={340}
                  height={340}
                  priority
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Booking / Quote Strip Form */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xl max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-center">
            
            {/* Destination */}
            <div className="lg:col-span-3 p-3 bg-gray-50/80 rounded-xl border border-gray-200/70 space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#2076C7]" />
                <span>Travel Destination</span>
              </div>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent text-xs font-bold text-gray-800 outline-none cursor-pointer"
              >
                <option value="Schengen Area (Europe)">Schengen Area (Europe)</option>
                <option value="USA">USA & Canada</option>
                <option value="Thailand">Thailand</option>
                <option value="UAE (Dubai)">UAE (Dubai)</option>
                <option value="Indonesia (Bali)">Indonesia (Bali)</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Worldwide">Worldwide (All Countries)</option>
              </select>
            </div>

            {/* Residing In */}
            <div className="lg:col-span-3 p-3 bg-gray-50/80 rounded-xl border border-gray-200/70 space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <Home className="w-3.5 h-3.5 text-[#2076C7]" />
                <span>Residing In</span>
              </div>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full bg-transparent text-xs font-bold text-gray-800 outline-none cursor-pointer"
              >
                <option value="India">India</option>
                <option value="NRI / Non-Resident">NRI / Non-Resident</option>
              </select>
            </div>

            {/* Departure Date */}
            <div className="lg:col-span-3 p-3 bg-gray-50/80 rounded-xl border border-gray-200/70 space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-[#2076C7]" />
                <span>Departure Date</span>
              </div>
              <select
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                className="w-full bg-transparent text-xs font-bold text-gray-800 outline-none cursor-pointer"
              >
                <option value="Next 7 Days">Next 7 Days</option>
                <option value="Next 14 Days">Next 14 Days</option>
                <option value="Next 30 Days">Next 30 Days</option>
                <option value="Multi-Trip Annual">Multi-Trip Annual Pass</option>
              </select>
            </div>

            {/* Submit Action */}
            <div className="lg:col-span-3">
              <button
                type="submit"
                className="w-full h-14 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(to right, #2076C7, #1CADA3)" }}
              >
                <span>GET QUOTE & APPLY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
