"use client";
import {
  Target,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Smartphone,
  Headphones,
  CheckCircle2
} from "lucide-react";

export default function WhyChooseFire() {
  const valueProps = [
    {
      id: "agreed-value",
      title: "AGREED VALUE BASIS",
      desc: "Option to insure assets on an agreed value basis, ensuring full recovery without depreciation disputes.",
      icon: Target,
      iconBg: "bg-blue-50 text-[#2076C7]"
    },
    {
      id: "risk-audit",
      title: "EXPERT RISK AUDIT",
      desc: "Free risk inspection and safety audit by certified engineers for high-value industrial properties.",
      icon: Lightbulb,
      iconBg: "bg-teal-50 text-[#1CADA3]"
    },
    {
      id: "addons",
      title: "FLEXIBLE ADD-ONS",
      desc: "Customize your policy with riders like STFI (Storm, Tempest, Flood & Inundation) and Terrorism cover.",
      icon: ShieldCheck,
      iconBg: "bg-blue-50 text-[#2076C7]"
    },
    {
      id: "high-limit",
      title: "HIGH CLAIM LIMIT",
      desc: "Ability to handle high-value claims with a dedicated team of surveyors across India.",
      icon: TrendingUp,
      iconBg: "bg-teal-50 text-[#1CADA3]"
    },
    {
      id: "digital-desk",
      title: "DIGITAL CLAIMS DESK",
      desc: "100% paperless claim intimation and tracking via our premium mobile portal.",
      icon: Smartphone,
      iconBg: "bg-blue-50 text-[#2076C7]"
    },
    {
      id: "support",
      title: "24/7 SUPPORT",
      desc: "Round-the-clock emergency assistance for fire incidents and rapid coordination with authorities.",
      icon: Headphones,
      iconBg: "bg-teal-50 text-[#1CADA3]"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2076C7] tracking-tight leading-tight uppercase">
            WHY CHOOSE BHARATI MALL <br />
            <span className="text-[#1CADA3]">FIRE INSURANCE?</span>
          </h2>

          <p className="mt-4 text-zinc-600 font-medium text-sm sm:text-base md:text-lg leading-relaxed">
            We don't just provide a policy; we offer a strategic partnership to safeguard your most valuable investments.
          </p>
        </div>

        {/* 6 Value Prop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-start gap-4 p-4 group"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xs`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-[#2076C7] transition-colors tracking-tight uppercase mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* IRDAI Certified Partners Capsule Banner (Matching Screenshot 4) */}
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-50 text-[#1CADA3] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-extrabold text-[#2076C7] uppercase tracking-tight">
                IRDAI CERTIFIED PARTNERS
              </h4>
              <p className="text-[11px] sm:text-xs text-zinc-400 font-bold uppercase tracking-wider">
                GLOBAL REINSURANCE STANDARDS
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-end gap-8 sm:gap-12 w-full sm:w-auto border-t sm:border-t-0 pt-4 sm:pt-0 border-zinc-100">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#2076C7]">
                98.5%
              </div>
              <div className="text-[10px] sm:text-[11px] text-zinc-400 font-bold uppercase tracking-wider">
                CLAIM RATIO
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#2076C7]">
                15 Min
              </div>
              <div className="text-[10px] sm:text-[11px] text-zinc-400 font-bold uppercase tracking-wider">
                QUOTE TIME
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
