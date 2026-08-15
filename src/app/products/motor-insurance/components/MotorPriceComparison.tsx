"use client";

import React, { useState, useMemo } from "react";
import { Bike, Car, Truck, HelpCircle, Check, ChevronDown, ChevronUp, AlertCircle } from "lucide-react";

export interface MotorPlan {
  id: string;
  name: string;
  logoText: string;
  // Two Wheeler
  twoWheelerCompPrice: number;
  twoWheelerTpPrice: number;
  twoWheelerOdPrice: number;
  // Car
  carCompPrice: number;
  carTpPrice: number;
  carOdPrice: number;
  // Commercial
  commercialCompPrice?: number;
  commercialTpPrice?: number;
  // Misc D
  miscDCompPrice?: number;
  miscDTpPrice?: number;
  insurerType: "Private" | "Public";
  features: string[];
}

export const MOTOR_PLANS_DATA: MotorPlan[] = [
  {
    id: "mp-1",
    name: "Tata AIG",
    logoText: "TATA AIG",
    twoWheelerCompPrice: 1005,
    twoWheelerTpPrice: 843,
    twoWheelerOdPrice: 326,
    carCompPrice: 14746,
    carTpPrice: 2471,
    carOdPrice: 8950,
    commercialCompPrice: 26093,
    commercialTpPrice: 16049,
    insurerType: "Private",
    features: ["Cashless network in 6,000+ garages", "Instant online claim registration", "No Claim Bonus up to 50%"]
  },
  {
    id: "mp-2",
    name: "Bajaj Allianz",
    logoText: "Bajaj Allianz",
    twoWheelerCompPrice: 748,
    twoWheelerTpPrice: 843,
    twoWheelerOdPrice: 136,
    carCompPrice: 13091,
    carTpPrice: 2471,
    carOdPrice: 7850,
    insurerType: "Private",
    features: ["Zero depreciation available", "24x7 spot assistance", "DriveSmart telemetry discounts"]
  },
  {
    id: "mp-3",
    name: "Digit",
    logoText: "Digit",
    twoWheelerCompPrice: 899,
    twoWheelerTpPrice: 843,
    twoWheelerOdPrice: 250,
    carCompPrice: 12549,
    carTpPrice: 2471,
    carOdPrice: 7350,
    insurerType: "Private",
    features: ["Smartphone self-inspection claim", "Zero physical paperwork", "Pick up and drop repair service"]
  },
  {
    id: "mp-4",
    name: "Royal Sundaram",
    logoText: "Royal Sundaram",
    twoWheelerCompPrice: 920,
    twoWheelerTpPrice: 843,
    twoWheelerOdPrice: 280,
    carCompPrice: 13942,
    carTpPrice: 2471,
    carOdPrice: 8250,
    commercialCompPrice: 26935,
    commercialTpPrice: 16049,
    insurerType: "Private",
    features: ["Unlimited claims in policy tenure", "Engine protector add-on", "Key replacement cover"]
  },
  {
    id: "mp-5",
    name: "Chola MS",
    logoText: "Chola MS",
    twoWheelerCompPrice: 850,
    twoWheelerTpPrice: 843,
    twoWheelerOdPrice: 220,
    carCompPrice: 15353,
    carTpPrice: 2471,
    carOdPrice: 9450,
    commercialCompPrice: 24049,
    commercialTpPrice: 16049,
    miscDCompPrice: 46194,
    miscDTpPrice: 20305,
    insurerType: "Private",
    features: ["High settlement speed", "Towing support within 50 km", "Accidental cover up to ₹15 Lakh"]
  },
  {
    id: "mp-6",
    name: "Shriram General",
    logoText: "Shriram General",
    twoWheelerCompPrice: 780,
    twoWheelerTpPrice: 843,
    twoWheelerOdPrice: 150,
    carCompPrice: 12196,
    carTpPrice: 2471,
    carOdPrice: 6980,
    insurerType: "Private",
    features: ["Lowest premium quotes", "Hassle-free renewal", "Comprehensive theft and fire cover"]
  },
  {
    id: "mp-7",
    name: "Zuno",
    logoText: "Zuno",
    twoWheelerCompPrice: 810,
    twoWheelerTpPrice: 843,
    twoWheelerOdPrice: 190,
    carCompPrice: 13458,
    carTpPrice: 2471,
    carOdPrice: 6720,
    insurerType: "Private",
    features: ["Pay-how-you-drive savings", "Instant e-policy download", "Consumables add-on available"]
  },
  {
    id: "mp-8",
    name: "IFFCO-Tokio",
    logoText: "IFFCO-Tokio",
    twoWheelerCompPrice: 880,
    twoWheelerTpPrice: 843,
    twoWheelerOdPrice: 240,
    carCompPrice: 13641,
    carTpPrice: 2471,
    carOdPrice: 7920,
    insurerType: "Private",
    features: ["QCS On-The-Spot survey", "Widespread network in Tier 2/3 cities", "Personal accident cover"]
  },
  {
    id: "mp-9",
    name: "Magma HDI",
    logoText: "Magma HDI",
    twoWheelerCompPrice: 860,
    twoWheelerTpPrice: 843,
    twoWheelerOdPrice: 210,
    carCompPrice: 14287,
    carTpPrice: 2471,
    carOdPrice: 7650,
    commercialCompPrice: 22967,
    commercialTpPrice: 16049,
    miscDCompPrice: 48625,
    miscDTpPrice: 20305,
    insurerType: "Private",
    features: ["Roadside breakdown cover", "NCB protection add-on", "Fast documentless approval"]
  },
  {
    id: "mp-10",
    name: "SBI General",
    logoText: "SBI General",
    twoWheelerCompPrice: 830,
    twoWheelerTpPrice: 843,
    twoWheelerOdPrice: 200,
    carCompPrice: 13850,
    carTpPrice: 2471,
    carOdPrice: 7800,
    commercialCompPrice: 22005,
    commercialTpPrice: 16049,
    insurerType: "Public",
    features: ["Backed by India's largest bank", "Over 7,500 cashless garages", "24x7 toll-free support"]
  },
  {
    id: "mp-11",
    name: "Universal Sompo",
    logoText: "Universal Sompo",
    twoWheelerCompPrice: 840,
    twoWheelerTpPrice: 843,
    twoWheelerOdPrice: 205,
    carCompPrice: 13248,
    carTpPrice: 2471,
    carOdPrice: 7540,
    commercialCompPrice: 25131,
    commercialTpPrice: 16049,
    insurerType: "Private",
    features: ["Overnight repair service", "Zero paperwork digital inspection", "Lifetime renewal discount"]
  }
];

interface MotorPriceComparisonProps {
  selectedVehicleType: "Two Wheeler" | "Car" | "Commercial" | "Misc D";
  onSelectVehicleType: (type: "Two Wheeler" | "Car" | "Commercial" | "Misc D") => void;
}

export default function MotorPriceComparison({
  selectedVehicleType,
  onSelectVehicleType,
}: MotorPriceComparisonProps) {
  const [selectedPlanType, setSelectedPlanType] = useState<"Comprehensive" | "Third party plans" | "Own Damage plans">("Comprehensive");
  const [selectedEngineCap, setSelectedEngineCap] = useState("75cc - 150cc");
  const [selectedIdv, setSelectedIdv] = useState("₹ 3.0 Lac");
  const [selectedInsurerType, setSelectedInsurerType] = useState<"All" | "Private" | "Public">("Private");
  const [showAllPlans, setShowAllPlans] = useState(false);

  // Available Plan Types Tabs based on Vehicle Type
  const availablePlanTypes = useMemo(() => {
    if (selectedVehicleType === "Commercial" || selectedVehicleType === "Misc D") {
      return ["Comprehensive", "Third party plans"] as const;
    }
    return ["Comprehensive", "Third party plans", "Own Damage plans"] as const;
  }, [selectedVehicleType]);

  // Adjust selected plan type if invalid for category
  if ((selectedVehicleType === "Commercial" || selectedVehicleType === "Misc D") && selectedPlanType === "Own Damage plans") {
    setSelectedPlanType("Comprehensive");
  }

  // Dynamic capacity / weight options
  const capacityOptions = useMemo(() => {
    if (selectedVehicleType === "Two Wheeler") {
      return ["75cc - 150cc", "150cc - 350cc", "Above 350cc"];
    } else if (selectedVehicleType === "Car") {
      return ["Up to 1000cc", "1000cc - 1500cc", "Above 1500cc"];
    } else if (selectedVehicleType === "Commercial") {
      return ["Up to 7,500 kg", "7,500 - 12,000 kg", "Above 12,000 kg"];
    } else {
      return ["Up to 1500 CC", "Above 1500 CC"];
    }
  }, [selectedVehicleType]);

  // IDV options
  const idvOptions = useMemo(() => {
    if (selectedVehicleType === "Two Wheeler") {
      return ["₹ 30,000", "₹ 60,000", "₹ 1.2 Lac", "₹ 2.0 Lac"];
    } else if (selectedVehicleType === "Car") {
      return ["₹ 3.0 Lac", "₹ 5.0 Lac", "₹ 8.0 Lac", "₹ 12.0 Lac"];
    } else if (selectedVehicleType === "Commercial") {
      return ["₹ 8.0 Lac", "₹ 12.0 Lac", "₹ 15.0 Lac", "₹ 20.0 Lac"];
    } else {
      return ["₹ 12.0 Lac", "₹ 15.0 Lac", "₹ 18.0 Lac", "₹ 25.0 Lac"];
    }
  }, [selectedVehicleType]);

  // Subheader badge text
  const getSubheaderFilterText = () => {
    if (selectedVehicleType === "Commercial") return "LCV - Goods Carrier";
    if (selectedVehicleType === "Misc D") return "Misc D - Up to 1500 CC";
    if (selectedVehicleType === "Two Wheeler") return selectedEngineCap;
    return selectedEngineCap;
  };

  // Dropdown Label
  const getCapacityLabel = () => {
    if (selectedVehicleType === "Commercial") return "GVW";
    return "ENGINE CAPACITY";
  };

  // Footnote text
  const getFootnoteText = () => {
    if (selectedVehicleType === "Commercial") {
      return "* Prices are indicative starting premiums for a LCV - Goods Carrier with 0% NCB in Zone B. Actual premiums may vary based on vehicle model, age, location, and coverage selected. Insurance is a subject matter of solicitation.";
    }
    if (selectedVehicleType === "Misc D") {
      return "* Prices are indicative starting premiums for a Misc D - Up to 1500 CC with 0% NCB in Zone B. Actual premiums may vary based on vehicle model, age, location, and coverage selected. Insurance is a subject matter of solicitation.";
    }
    if (selectedVehicleType === "Car") {
      return "* Prices are indicative starting premiums for a Up to 1000cc with 0% NCB in Zone B. Actual premiums may vary based on vehicle model, age, location, and coverage selected. Insurance is a subject matter of solicitation.";
    }
    return "* Prices are indicative starting premiums for a 75cc - 150cc with 0% NCB in Zone B. Actual premiums may vary based on vehicle model, age, location, and coverage selected. Insurance is a subject matter of solicitation.";
  };

  // Compute final price for each plan
  const computedPlans = useMemo(() => {
    return MOTOR_PLANS_DATA.filter((plan) => {
      if (selectedInsurerType !== "All" && plan.insurerType !== selectedInsurerType) {
        return false;
      }
      if (selectedVehicleType === "Commercial" && !plan.commercialCompPrice) {
        return false;
      }
      if (selectedVehicleType === "Misc D" && !plan.miscDCompPrice) {
        return false;
      }
      return true;
    }).map((plan) => {
      let finalPrice = 0;

      if (selectedVehicleType === "Two Wheeler") {
        if (selectedPlanType === "Comprehensive") finalPrice = plan.twoWheelerCompPrice;
        else if (selectedPlanType === "Third party plans") finalPrice = plan.twoWheelerTpPrice;
        else finalPrice = plan.twoWheelerOdPrice;

        if (selectedEngineCap === "150cc - 350cc") finalPrice = Math.round(finalPrice * 1.35);
        if (selectedEngineCap === "Above 350cc") finalPrice = Math.round(finalPrice * 1.8);
      } else if (selectedVehicleType === "Car") {
        if (selectedPlanType === "Comprehensive") finalPrice = plan.carCompPrice;
        else if (selectedPlanType === "Third party plans") finalPrice = plan.carTpPrice;
        else finalPrice = plan.carOdPrice;

        if (selectedEngineCap === "1000cc - 1500cc") finalPrice = Math.round(finalPrice * 1.25);
        if (selectedEngineCap === "Above 1500cc") finalPrice = Math.round(finalPrice * 1.6);
      } else if (selectedVehicleType === "Commercial") {
        if (selectedPlanType === "Comprehensive") finalPrice = plan.commercialCompPrice || 24000;
        else finalPrice = plan.commercialTpPrice || 16049;
      } else {
        // Misc D
        if (selectedPlanType === "Comprehensive") finalPrice = plan.miscDCompPrice || 46194;
        else finalPrice = plan.miscDTpPrice || 20305;
      }

      return {
        ...plan,
        calculatedPrice: finalPrice
      };
    });
  }, [selectedVehicleType, selectedPlanType, selectedEngineCap, selectedInsurerType]);

  const visiblePlans = showAllPlans ? computedPlans : computedPlans.slice(0, 6);



  return (
    <section id="price-comparison" className="py-14 lg:py-20 bg-[#F5F5F3] border-t border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Compare Insurance Starting Prices
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B6B]">
            Get instant quotes from top-rated insurers. Save up to 85% on your premium with our transparent comparison tool.
          </p>
        </div>

        {/* Main Grid: Filters Sidebar + Top Controls & Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar Filters */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 border border-[#E5E5E0] shadow-md space-y-6">
              
              {/* Filter Title */}
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-[#292929] pb-2 border-b border-[#E5E5E0]">
                <span>Filters</span>
              </div>

              {/* Vehicle Type Selector */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider">
                  VEHICLE TYPE
                </span>
                <div className="space-y-2">
                  {[
                    { id: "Two Wheeler" as const, label: "Two Wheeler", icon: Bike },
                    { id: "Car" as const, label: "Car", icon: Car },
                    { id: "Commercial" as const, label: "Commercial", icon: Truck },
                    { id: "Misc D" as const, label: "Misc D", icon: HelpCircle },
                  ].map((v) => {
                    const isSelected = selectedVehicleType === v.id;
                    const Icon = v.icon;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => {
                          onSelectVehicleType(v.id);
                          if (v.id === "Two Wheeler") {
                            setSelectedEngineCap("75cc - 150cc");
                            setSelectedIdv("₹ 60,000");
                          } else if (v.id === "Car") {
                            setSelectedEngineCap("Up to 1000cc");
                            setSelectedIdv("₹ 3.0 Lac");
                          } else if (v.id === "Commercial") {
                            setSelectedEngineCap("Up to 7,500 kg");
                            setSelectedIdv("₹ 8.0 Lac");
                          } else {
                            setSelectedEngineCap("Up to 1500 CC");
                            setSelectedIdv("₹ 12.0 Lac");
                          }
                        }}
                        className={`w-full h-12 px-4 rounded-xl flex items-center justify-between text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#F4C430] text-[#171717] shadow-md"
                            : "bg-[#F5F5F3] text-[#292929] hover:bg-[#F5F5F3] border border-[#E5E5E0]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4" />
                          <span>{v.label}</span>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-[#171717]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Insurer Type Selector */}
              <div className="space-y-2 pt-2 border-t border-[#E5E5E0]">
                <span className="text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider">
                  INSURER TYPE
                </span>
                <div className="space-y-2 text-xs font-medium text-[#292929]">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="insurerType"
                      checked={selectedInsurerType === "Private"}
                      onChange={() => setSelectedInsurerType("Private")}
                      className="text-[#171717] focus:ring-[#F4C430]"
                    />
                    <span>Private</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="insurerType"
                      checked={selectedInsurerType === "Public"}
                      onChange={() => setSelectedInsurerType("Public")}
                      className="text-[#171717] focus:ring-[#F4C430]"
                    />
                    <span>Public</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="insurerType"
                      checked={selectedInsurerType === "All"}
                      onChange={() => setSelectedInsurerType("All")}
                      className="text-[#171717] focus:ring-[#F4C430]"
                    />
                    <span>All Insurers</span>
                  </label>
                </div>
              </div>

            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Bar: Plan Types + Engine Capacity/GVW + IDV */}
            <div className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border border-[#E5E5E0] shadow-md flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Plan Type Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {availablePlanTypes.map((tab) => {
                  const isActive = selectedPlanType === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setSelectedPlanType(tab as "Comprehensive" | "Third party plans" | "Own Damage plans")}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#F4C430] text-[#171717] shadow-sm"
                          : "bg-[#F5F5F3] text-[#292929] hover:bg-[#F5F5F3] border border-[#E5E5E0]"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* Dropdowns */}
              <div className="flex items-center gap-3">
                {/* Engine Capacity / GVW */}
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-0.5">
                    {getCapacityLabel()}
                  </span>
                  <select
                    value={selectedEngineCap}
                    onChange={(e) => setSelectedEngineCap(e.target.value)}
                    className="h-9 px-3 bg-[#F5F5F3] border border-[#E5E5E0] rounded-lg text-xs font-bold text-[#292929] outline-none cursor-pointer"
                  >
                    {capacityOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Selected IDV (hidden in Third Party plans) */}
                {selectedPlanType !== "Third party plans" && (
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-0.5">
                      SELECTED IDV
                    </span>
                    <select
                      value={selectedIdv}
                      onChange={(e) => setSelectedIdv(e.target.value)}
                      className="h-9 px-3 bg-[#F5F5F3] border border-[#E5E5E0] rounded-lg text-xs font-bold text-[#171717] outline-none cursor-pointer"
                    >
                      {idvOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

            </div>

            {/* Showing Count */}
            <div className="text-xs text-[#6B6B6B] font-medium px-1">
              Showing <span className="font-bold text-[#171717]">{computedPlans.length}</span> of <span className="font-bold text-[#171717]">{computedPlans.length} plans</span> for <span className="text-[#171717] font-bold">{getSubheaderFilterText()}</span>
            </div>

            {/* Commercial Third Party Notice Banner */}
            {selectedVehicleType === "Commercial" && selectedPlanType === "Third party plans" && (
              <div className="p-3.5 bg-[#F4C430]/90 border border-[#F4C430] rounded-xl text-xs text-[#171717] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#171717] shrink-0" />
                <span>
                  <strong>Prices shown are base TP premiums.</strong> Final price will be shown at the time of purchase.
                </span>
              </div>
            )}

            {/* Plans List Cards */}
            <div className="space-y-4">
              {visiblePlans.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-[#FFFFFF] rounded-2xl border-l-4 border-l-[#F4C430] border border-[#E5E5E0] p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  {/* Left: Insurer Logo text & Name */}
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-12 rounded-xl bg-[#F5F5F3] border border-[#E5E5E0] flex items-center justify-center p-2 text-center text-xs font-black text-[#292929] tracking-tight shadow-inner">
                      {plan.logoText}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#E91E63] transition-colors">
                        {plan.name}
                      </h4>
                      <p className="text-xs text-[#171717] font-medium">
                        {selectedPlanType} Cover
                      </p>
                    </div>
                  </div>

                  {/* Right: Starting Price */}
                  <div className="flex items-center justify-between sm:justify-end gap-5">
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-[#6B6B6B] block leading-none">
                        STARTING FROM
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-xl sm:text-2xl font-extrabold text-[#171717]">
                          ₹ {plan.calculatedPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-[#6B6B6B]">/year</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* See More / See Less Plans Button (if more than 6 plans) */}
            {computedPlans.length > 6 && (
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setShowAllPlans(!showAllPlans)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-[#E5E5E0] bg-[#FFFFFF] text-xs font-bold text-[#292929] hover:text-[#171717] hover:border-[#F4C430] shadow-xs transition-all cursor-pointer"
                >
                  <span>{showAllPlans ? "See less plans" : "See more plans"}</span>
                  {showAllPlans ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            )}

            {/* Soliciation Footnote */}
            <div className="p-4 rounded-xl bg-[#F5F5F3] border border-[#E5E5E0] text-[10px] text-[#6B6B6B] leading-relaxed text-center">
              {getFootnoteText()}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
