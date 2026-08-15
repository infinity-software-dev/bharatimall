"use client";

import React from "react";
import { Bike, Car, Truck, ShieldCheck, ArrowRight } from "lucide-react";

interface MotorProductCategoriesProps {
  onSelectCategory: (categoryKey: "Two Wheeler" | "Car" | "Commercial" | "Misc D") => void;
}

export default function MotorProductCategories({ onSelectCategory }: MotorProductCategoriesProps) {
  const categories: Array<{
    id: "Two Wheeler" | "Car" | "Commercial" | "Misc D";
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }> = [
    {
      id: "Two Wheeler",
      icon: Bike,
      title: "Two Wheeler Insurance",
      description: "Comprehensive coverage for your bike or scooter against accidents and theft."
    },
    {
      id: "Car",
      icon: Car,
      title: "Car Insurance",
      description: "Protect your car with instant policy issuance and a high claim settlement ratio."
    },
    {
      id: "Commercial",
      icon: Truck,
      title: "Commercial Vehicle",
      description: "Specialized insurance for trucks, buses, and other business-related vehicles."
    },
    {
      id: "Misc D",
      icon: ShieldCheck,
      title: "Misc D Insurance",
      description: "Coverage for miscellaneous vehicles and unique risks in the motor segment."
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#FFFFFF] border-t border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Our Motor Insurance Products
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B6B]">
            Experience the most transparent way to secure your vehicle with our tailored plans.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-[#FFFFFF] rounded-2xl border border-[#E5E5E0] p-6 sm:p-7 shadow-md hover:shadow-xl hover:border-[#F4C430] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#171717]">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectCategory(cat.id);
                      document.getElementById("price-comparison")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#171717] hover:text-[#171717] transition-colors cursor-pointer group-hover:gap-2"
                  >
                    <span>Explore Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
