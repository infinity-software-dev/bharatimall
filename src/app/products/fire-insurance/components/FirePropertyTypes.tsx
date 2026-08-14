"use client";
import React from "react";
import { 
  Factory, 
  Warehouse, 
  Building2, 
  Store, 
  Home, 
  GraduationCap,
  ArrowRight
} from "lucide-react";

interface FirePropertyTypesProps {
  onSelectProperty?: (type: string) => void;
}

export default function FirePropertyTypes({ onSelectProperty }: FirePropertyTypesProps) {
  const properties = [
    {
      id: "industrial",
      title: "INDUSTRIAL PLANTS",
      desc: "Coverage for large manufacturing units, factories, and processing plants including machinery.",
      icon: Factory,
      iconBg: "bg-blue-50 text-[#2076C7]",
      borderColor: "border-gray-100 hover:border-blue-200"
    },
    {
      id: "warehouse",
      title: "GODOWNS & WAREHOUSES",
      desc: "Secure your high-value stock, raw materials, and storage facilities against fire and theft.",
      icon: Warehouse,
      iconBg: "bg-teal-50 text-[#1CADA3]",
      borderColor: "border-gray-100 hover:border-teal-200"
    },
    {
      id: "office",
      title: "COMMERCIAL OFFICES",
      desc: "Protection for office buildings, IT parks, and corporate spaces including interiors and equipment.",
      icon: Building2,
      iconBg: "bg-blue-50 text-[#2076C7]",
      borderColor: "border-gray-100 hover:border-blue-200"
    },
    {
      id: "retail",
      title: "RETAIL SHOPS",
      desc: "Comprehensive shield for retail outlets, showrooms, and shopping malls against accidental damage.",
      icon: Store,
      iconBg: "bg-teal-50 text-[#1CADA3]",
      borderColor: "border-gray-100 hover:border-teal-200"
    },
    {
      id: "residential",
      title: "RESIDENTIAL UNITS",
      desc: "Secure your home, villas, and apartments from unforeseen fire accidents and natural perils.",
      icon: Home,
      iconBg: "bg-blue-50 text-[#2076C7]",
      borderColor: "border-gray-100 hover:border-blue-200"
    },
    {
      id: "educational",
      title: "EDUCATIONAL INSTITUTES",
      desc: "Specialized coverage for schools, colleges, and training centers protecting assets and infrastructure.",
      icon: GraduationCap,
      iconBg: "bg-teal-50 text-[#1CADA3]",
      borderColor: "border-gray-100 hover:border-teal-200"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#1CADA3] mb-4">
              <span>DIVERSE PROTECTION PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2076C7] tracking-tight leading-tight uppercase">
              COMPREHENSIVE COVERAGE <br />
              <span className="text-[#1CADA3]">FOR</span> <br />
              EVERY PROPERTY TYPE
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-zinc-600 font-medium text-sm sm:text-base leading-relaxed">
              Whether it's a small shop or a massive industrial plant, we provide tailored insurance solutions for all your assets.
            </p>
          </div>
        </div>

        {/* 6 Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {properties.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectProperty && onSelectProperty(item.title)}
                className={`bg-white rounded-[2rem] p-8 border ${item.borderColor} shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xs`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#2076C7] transition-colors tracking-tight uppercase mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-zinc-100 flex items-center text-xs font-bold text-[#2076C7] group-hover:text-[#1CADA3] transition-colors">
                  <span>Explore Coverage</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
