"use client";

import React from "react";
import {
  Anchor,
  Shield,
  Star,
  Zap,
  Gem,
  GraduationCap,
  Building2,
  ShieldAlert,
  Briefcase,
  Heart,
  ArrowRight
} from "lucide-react";

export default function CategoryGrid({ onSelectCategory }: { onSelectCategory?: (category: string) => void }) {
  const categories = [
    {
      id: "term",
      icon: Shield,
      iconBg: "bg-emerald-600 text-[#171717]",
      tag: "PURE PROTECTION",
      title: "Term Insurance",
      desc: "High life cover at the lowest premium. Foundation of security.",
      filterCategory: "Term Insurance"
    },
    {
      id: "1cr",
      badge: "TRENDING",
      badgeColor: "bg-emerald-600 text-[#171717]",
      icon: Star,
      iconBg: "bg-blue-600 text-[#171717]",
      tag: "HIGH VALUE",
      title: "1 Crore Term Plan",
      desc: "Standard high-value coverage for your family's big dreams.",
      filterCategory: "Term Insurance"
    },
    {
      id: "zero-cost",
      icon: Zap,
      iconBg: "bg-emerald-600 text-[#171717]",
      tag: "TROP BENEFIT",
      title: "Zero Cost Term",
      desc: "Get 100% of your premiums back if you survive the term.",
      filterCategory: "Term Insurance"
    },
    {
      id: "whole-life",
      icon: Gem,
      iconBg: "bg-blue-600 text-[#171717]",
      tag: "COVER TILL 100",
      title: "Whole Life Insurance",
      desc: "Lifetime protection that leaves a massive legacy for children.",
      filterCategory: "Term Insurance"
    },
    {
      id: "saral-jeevan",
      icon: ShieldAlert,
      iconBg: "bg-emerald-600 text-[#171717]",
      tag: "STANDARD PLAN",
      title: "Saral Jeevan Bima",
      desc: "Simple and standardized term plan as per IRDAI guidelines.",
      filterCategory: "Term Insurance"
    },
    {
      id: "salaried",
      icon: Briefcase,
      iconBg: "bg-blue-600 text-[#171717]",
      tag: "EXCLUSIVE RATES",
      title: "Term Plan (Salaried)",
      desc: "Special discounted rates and easy KYC for salaried professionals.",
      filterCategory: "Term Insurance"
    },
    {
      id: "women",
      icon: Heart,
      iconBg: "bg-emerald-600 text-[#171717]",
      tag: "SPECIAL BENEFITS",
      title: "Women Term Life",
      desc: "Lower premium rates and wellness benefits exclusively for women.",
      filterCategory: "Term Insurance"
    }
  ];

  const handleClick = (filterCat: string) => {
    if (onSelectCategory) {
      onSelectCategory(filterCat);
    }
    const el = document.getElementById("blueprints-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#FFFFFF] font-sans border-t border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 10 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                onClick={() => handleClick(c.filterCategory)}
                className="group relative bg-[#FFFFFF] hover:bg-[#FFFFFF] rounded-3xl border border-[#E5E5E0] hover:border-[#F4C430] p-6 flex flex-col justify-between items-center text-center shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[260px]"
              >
                {/* Badge if available */}
                {c.badge && (
                  <div className={`absolute top-4 right-4 text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded-full ${c.badgeColor}`}>
                    {c.badge}
                  </div>
                )}

                {/* Center Icon */}
                <div className="flex flex-col items-center space-y-3 pt-2">
                  <div className={`w-12 h-12 rounded-2xl ${c.iconBg} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-[10px] font-bold text-[#171717] uppercase tracking-widest">
                    {c.tag}
                  </div>

                  <h3 className="text-sm font-extrabold text-[#171717] group-hover:text-[#171717] transition-colors leading-tight">
                    {c.title}
                  </h3>

                  <p className="text-[11px] text-[#6B6B6B] line-clamp-2 leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="pt-4 mt-auto">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#6B6B6B] group-hover:text-[#171717] uppercase tracking-wider transition-colors">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
