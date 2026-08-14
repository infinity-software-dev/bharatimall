"use client";
import {
  CloudLightning,
  Bomb,
  Plane,
  Shield,
  ShieldAlert,
  Droplet,
  Wind,
  Truck,
  Target,
  Mountain,
  Flame,
  RotateCw,
  Trash2
} from "lucide-react";

export default function FirePerilsCoverage() {
  const perilsList = [
    { title: "FIRE & LIGHTNING", icon: CloudLightning },
    { title: "EXPLOSION / IMPLOSION", icon: Bomb },
    { title: "AIRCRAFT DAMAGE", icon: Plane },
    { title: "RIOT & STRIKE", icon: Shield },
    { title: "MALICIOUS DAMAGE", icon: ShieldAlert },
    { title: "RAIN & FLOODING", icon: Droplet },
    { title: "STORM & CYCLONE", icon: Wind },
    { title: "IMPACT FROM VEHICLES", icon: Truck },
    { title: "MISSILE TESTING", icon: Target },
    { title: "LANDSLIDE / ROCKSLIDE", icon: Mountain },
    { title: "BUSH FIRE", icon: Flame },
    { title: "AUTOMATIC SPRINKLER LEAKAGE", icon: RotateCw },
  ];

  const exclusions = [
    { title: "NUCLEAR PERILS", icon: ShieldAlert },
    { title: "WAR & INVASION", icon: Shield },
    { title: "THEFT DURING FIRE", icon: ShieldAlert },
    { title: "POLLUTION & CONTAMINATION", icon: Trash2 },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8fbff]/70 border-b border-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2076C7] tracking-tight leading-tight uppercase">
            WHAT'S COVERED UNDER <br />
            <span className="text-[#1CADA3]">FIRE INSURANCE?</span>
          </h2>

          <p className="mt-4 text-zinc-600 font-medium text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From natural calamities to accidental explosions, we provide a wide shield of protection against diverse risks.
          </p>
        </div>

        {/* 12 Peril Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
          {perilsList.map((peril, idx) => {
            const Icon = peril.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[1.8rem] p-6 sm:p-7 border border-zinc-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-blue-200 transition-all flex flex-col items-center justify-center text-center group min-h-[140px]"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#2076C7] group-hover:bg-[#2076C7] group-hover:text-white flex items-center justify-center mb-3.5 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-zinc-700 group-hover:text-[#2076C7] transition-colors tracking-tight uppercase">
                  {peril.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Standard Exclusions Floating Card (Matching Screenshot 3) */}
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-zinc-100">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2076C7] tracking-tight uppercase mb-2">
              STANDARD EXCLUSIONS
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed">
              It's important to understand what's not covered to ensure you have the right add-ons if needed.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {exclusions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center justify-center p-3 group">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50/70 text-[#1CADA3] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-black text-zinc-600 uppercase tracking-tight">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
