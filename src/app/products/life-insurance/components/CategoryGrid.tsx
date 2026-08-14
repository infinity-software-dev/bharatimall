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
      id: "retire",
      badge: "POPULAR",
      badgeColor: "bg-blue-600 text-white",
      icon: Anchor,
      iconBg: "bg-blue-600 text-white",
      tag: "PENSION FOR LIFE",
      title: "Retirement Plans",
      desc: "Secure your golden years with guaranteed lifelong monthly income.",
      filterCategory: "Retirement"
    },
    {
      id: "term",
      icon: Shield,
      iconBg: "bg-emerald-600 text-white",
      tag: "PURE PROTECTION",
      title: "Term Insurance",
      desc: "High life cover at the lowest premium. Foundation of security.",
      filterCategory: "Term Insurance"
    },
    {
      id: "1cr",
      badge: "TRENDING",
      badgeColor: "bg-emerald-600 text-white",
      icon: Star,
      iconBg: "bg-blue-600 text-white",
      tag: "HIGH VALUE",
      title: "1 Crore Term Plan",
      desc: "Standard high-value coverage for your family's big dreams.",
      filterCategory: "Term Insurance"
    },
    {
      id: "zero-cost",
      icon: Zap,
      iconBg: "bg-emerald-600 text-white",
      tag: "TROP BENEFIT",
      title: "Zero Cost Term",
      desc: "Get 100% of your premiums back if you survive the term.",
      filterCategory: "Term Insurance"
    },
    {
      id: "whole-life",
      icon: Gem,
      iconBg: "bg-blue-600 text-white",
      tag: "COVER TILL 100",
      title: "Whole Life Insurance",
      desc: "Lifetime protection that leaves a massive legacy for children.",
      filterCategory: "Term Insurance"
    },
    {
      id: "child-future",
      icon: GraduationCap,
      iconBg: "bg-emerald-600 text-white",
      tag: "EDUCATION FUND",
      title: "Child Future Plans",
      desc: "Ensure your child's milestones are funded even in your absence.",
      filterCategory: "Child Plan"
    },
    {
      id: "money-back",
      icon: Building2,
      iconBg: "bg-blue-600 text-white",
      tag: "LIQUIDITY PLUS",
      title: "Money Back Plan",
      desc: "Regular payouts every few years while your cover stays active.",
      filterCategory: "Guaranteed Savings"
    },
    {
      id: "saral-jeevan",
      icon: ShieldAlert,
      iconBg: "bg-emerald-600 text-white",
      tag: "STANDARD PLAN",
      title: "Saral Jeevan Bima",
      desc: "Simple and standardized term plan as per IRDAI guidelines.",
      filterCategory: "Term Insurance"
    },
    {
      id: "salaried",
      icon: Briefcase,
      iconBg: "bg-blue-600 text-white",
      tag: "EXCLUSIVE RATES",
      title: "Term Plan (Salaried)",
      desc: "Special discounted rates and easy KYC for salaried professionals.",
      filterCategory: "Term Insurance"
    },
    {
      id: "women",
      icon: Heart,
      iconBg: "bg-emerald-600 text-white",
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
    <section className="py-16 md:py-20 bg-white font-sans border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 10 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                onClick={() => handleClick(c.filterCategory)}
                className="group relative bg-[#fcfdff] hover:bg-white rounded-3xl border border-slate-200/80 hover:border-[#1CADA3]/40 p-6 flex flex-col justify-between items-center text-center shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[260px]"
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

                  <div className="text-[10px] font-bold text-[#1CADA3] uppercase tracking-widest">
                    {c.tag}
                  </div>

                  <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-[#2076C7] transition-colors leading-tight">
                    {c.title}
                  </h3>

                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="pt-4 mt-auto">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-400 group-hover:text-[#2076C7] uppercase tracking-wider transition-colors">
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
