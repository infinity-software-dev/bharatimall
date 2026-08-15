"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Shield,
  TrendingUp,
  Building2,
  Activity,
  AlertTriangle,
  CheckCircle,
  Lock,
  Clock,
  HelpCircle,
  FileText,
  UserCheck,
  ChevronRight,
  Sparkles,
  Layers,
  Award,
  Laptop,
  Factory,
  HardHat,
  Stethoscope,
  Store,
  Landmark,
  Scale,
  Handshake,
  MapPin,
  Users,
  Wallet,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Briefcase
} from "lucide-react";

export default function GeneralInsurancePage() {
  const [activeRiskHover, setActiveRiskHover] = useState<string | null>(null);
  const [activeDistHover, setActiveDistHover] = useState<string | null>(null);

  // Premium Calculator States
  const [calcTab, setCalcTab] = useState<"commercial" | "group-health">("commercial");
  const [commercialBusinessType, setCommercialBusinessType] = useState("Office / IT / Consulting");
  const [commercialTurnover, setCommercialTurnover] = useState("Up to ₹50 Lakhs");
  const [commercialAssetValue, setCommercialAssetValue] = useState(1000000); // 10 Lakhs by default
  const [commercialCovers, setCommercialCovers] = useState({
    fire: true,
    burglary: true,
    liability: false,
  });

  const [healthEmployeeCount, setHealthEmployeeCount] = useState(10);
  const [healthSumInsured, setHealthSumInsured] = useState(300000); // 3 Lakhs by default
  const [healthCovers, setHealthCovers] = useState({
    maternity: false,
    opd: false,
  });

  // FAQ Accordion States
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Insurer Toggling State
  const [showAllInsurers, setShowAllInsurers] = useState(false);

  // Selected Product Category Filter State
  const [selectedProductCategory, setSelectedProductCategory] = useState("All");

  // Insurance Products Toggling State
  const [showAllProducts, setShowAllProducts] = useState(false);

  const insuranceProductsList = [
    {
      name: "Group Personal Accident (GPA) Cover",
      description: "24x7 accident coverage for all employees — covers accidental death, permanent disability, temporary disability, and medical expenses arising from accidents.",
      claimRatio: "99%",
      premium: "Starts at ₹200/emp/year",
      category: "Accident",
      icon: <Shield className="w-5 h-5" />
    },
    {
      name: "Group Medical Cover (GMC)",
      description: "Comprehensive cashless hospitalization cover for employees and their families — includes pre & post hospitalization, day-care procedures, maternity, and OPD benefits.",
      claimRatio: "98%+",
      premium: "Starts at ₹400/emp/month",
      category: "Health",
      icon: <Activity className="w-5 h-5" />
    },
    {
      name: "Group Term Life (GTL)",
      description: "Life insurance for the entire workforce — provides a lump-sum payout to the nominee in case of an employee's death during service, at very low group premium rates.",
      claimRatio: "99%+",
      premium: "Starts at ₹100/emp/year",
      category: "Life",
      icon: <Users className="w-5 h-5" />
    },
    {
      name: "Bharat Laghu Udyam Policy",
      description: "Commercial property insurance for mid-size businesses with assets ₹5Cr-₹50Cr.",
      claimRatio: "94%",
      premium: "Based on asset value",
      category: "Property",
      icon: <Building2 className="w-5 h-5" />
    },
    {
      name: "Workmen Compensation",
      description: "Mandatory protection for employee injury, disability, or death during employment.",
      claimRatio: "92%",
      premium: "0.5% - 2% of wages",
      category: "Accident",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      name: "Marine & Transit Insurance",
      description: "Coverage for goods transported via road, rail, air, or sea.",
      claimRatio: "91%",
      premium: "0.2% - 0.5% of consignment",
      category: "Property",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      name: "General Liability Insurance",
      description: "Protection against third-party injury, property damage, or legal claims.",
      claimRatio: "95%",
      premium: "₹10,000 - ₹2L annually",
      category: "Liability",
      icon: <Scale className="w-5 h-5" />
    },
    {
      name: "Professional Indemnity",
      description: "Protection against claims due to professional negligence or service errors.",
      claimRatio: "91%",
      premium: "0.5% - 2% of sum insured",
      category: "Liability",
      icon: <FileText className="w-5 h-5" />
    },
    {
      name: "Directors & Officers Insurance",
      description: "Protect company directors from personal liability claims.",
      claimRatio: "98%",
      premium: "₹25,000 - ₹5L annually",
      category: "Liability",
      icon: <Lock className="w-5 h-5" />
    },
    {
      name: "Cyber Insurance",
      description: "Coverage against hacking, ransomware, and data breaches.",
      claimRatio: "96%",
      premium: "₹15,000 - ₹2L annually",
      category: "Cyber",
      icon: <Layers className="w-5 h-5" />
    },
    {
      name: "Contractor All Risk",
      description: "Coverage for construction projects against accidental damage.",
      claimRatio: "92%",
      premium: "0.3% - 1% of project value",
      category: "Property",
      icon: <HardHat className="w-5 h-5" />
    },
    {
      name: "Contractors Plant & Machinery (CPM)",
      description: "Comprehensive cover for construction machinery and equipment against accidental damage, breakdown, or external perils during operation or at rest.",
      claimRatio: "90%",
      premium: "0.5% - 2.5% of equipment value",
      category: "Property",
      icon: <Laptop className="w-5 h-5" />
    },
    {
      name: "Office Package Policy",
      description: "Comprehensive insurance covering office assets and liabilities.",
      claimRatio: "94%",
      premium: "₹5,000 - ₹20,000 annually",
      category: "Property",
      icon: <Building2 className="w-5 h-5" />
    },
    {
      name: "Key Man Insurance",
      description: "Protects your business against financial loss arising from the death or disability of a key employee or founder.",
      claimRatio: "97%",
      premium: "upto 2% of sum assured annually",
      category: "Life",
      icon: <UserCheck className="w-5 h-5" />
    },
    {
      name: "Surety Bonds",
      description: "Financial guarantee bonds for contractors, government projects, and tenders — covering bid bonds, performance bonds, advance payment bonds, and contract bonds.",
      claimRatio: "92%",
      premium: "0.5% - 3% of bond value annually",
      category: "Liability",
      icon: <Wallet className="w-5 h-5" />
    }
  ];

  // Top Business Risks in India Donut Chart Data
  const riskData = [
    { label: "Cyber Attacks", percentage: 35, color: "#F4C430", offset: 0 },
    { label: "Employee Health", percentage: 25, color: "#FFD21F", offset: 35 },
    { label: "Legal Liability", percentage: 20, color: "#3b82f6", offset: 60 },
    { label: "Property Damage", percentage: 15, color: "#14b8a6", offset: 80 },
    { label: "Theft & Fraud", percentage: 5, color: "#6366f1", offset: 95 }
  ];

  // Enterprise Premium Distribution Donut Chart Data
  const distData = [
    { label: "Cyber & Liability", percentage: 42, color: "#F4C430", offset: 0 },
    { label: "Property & Fire", percentage: 22, color: "#FFD21F", offset: 42 },
    { label: "Group Health (GMC)", percentage: 18, color: "#3b82f6", offset: 64 },
    { label: "Marine & Cargo", percentage: 10, color: "#14b8a6", offset: 82 },
    { label: "Engineering/Other", percentage: 8, color: "#6366f1", offset: 92 }
  ];

  // Claim Settlement Ratio FY25 Bar Chart Data
  const csrData = [
    { name: "ICICI Lombard", ratio: 95, color: "bg-[#F4C430]" },
    { name: "Bajaj Allianz", ratio: 92, color: "bg-[#F4C430]" },
    { name: "Tata AIG", ratio: 88, color: "bg-[#F5F5F3]0" },
    { name: "HDFC ERGO", ratio: 86, color: "bg-[#F5F5F3]0" },
    { name: "goDigit", ratio: 82, color: "bg-indigo-500" },
    { name: "SBI General", ratio: 80, color: "bg-cyan-500" }
  ];

  // Financial Impact (Liability Costs) Line Chart Data points
  const liabilityTimeline = [
    { year: "2020", value: 50, height: "25%" },
    { year: "2021", value: 70, height: "35%" },
    { year: "2022", value: 100, height: "50%" },
    { year: "2023", value: 150, height: "75%" },
    { year: "2024", value: 180, height: "90%" }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#171717] flex flex-col selection:bg-[#F4C430] selection:text-[#171717]">
      <Header />

      <main className="flex-1">
        {/* Top Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] text-xs font-semibold text-[#6B6B6B] hover:text-[#171717] hover:border-[#F4C430] shadow-xs transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </div>

        {/* 1. Hero Section */}
        <section className="relative overflow-hidden py-14 lg:py-20 bg-[#FFFFFF] border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Text Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4C430] border border-[#F4C430] text-[#171717] text-xs font-bold uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5 animate-pulse" />
                  <span>General Insurance • Infinity Arthvishva</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#171717] tracking-tight leading-tight">
                  Protect Your <br />
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#171717] tracking-tight leading-tight">
                    Business Assets
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#292929] leading-relaxed max-w-2xl">
                  Comprehensive insurance solutions for modern Indian businesses. Protect your employees, assets, and operations with coverage from top-rated insurers.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => {
                      const el = document.getElementById("insights-section");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-3.5 rounded-xl text-sm font-bold text-[#171717] bg-[#F4C430] hover:shadow-lg hover:shadow-[#F4C430]/20 active:scale-98 transition-all cursor-pointer flex items-center gap-1"
                  >
                    View Products <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Illustration Banner */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md aspect-square bg-[#F5F5F3] rounded-3xl border border-[#E5E5E0] p-8 flex items-center justify-center shadow-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#F5F5F3] to-[#E5E5E0] opacity-60" />
                  {/* Custom SVG Illustration mirroring the prompt illustration */}
                  <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
                    <defs>
                      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD21F" />
                        <stop offset="100%" stopColor="#F4C430" />
                      </linearGradient>
                      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f8fafc" />
                        <stop offset="100%" stopColor="#e2e8f0" />
                      </linearGradient>
                    </defs>

                    {/* Background elements */}
                    <circle cx="200" cy="200" r="160" fill="url(#bgGrad)" opacity="0.5" />
                    <path d="M 50,300 Q 200,260 350,300 L 350,380 L 50,380 Z" fill="#e2e8f0" opacity="0.8" />

                    {/* Shield Illustration */}
                    <path d="M 160,80 L 240,80 Q 280,160 200,240 Q 120,160 160,80 Z" fill="url(#shieldGrad)" className="drop-shadow-lg" />
                    {/* Tick Mark inside Shield */}
                    <path d="M 180,150 L 195,165 L 225,130" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                    {/* Tiny Checkbox List */}
                    <rect x="80" y="100" width="60" height="90" rx="6" fill="white" stroke="#cbd5e1" strokeWidth="2" />
                    <line x1="95" y1="120" x2="125" y2="120" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="95" y1="140" x2="120" y2="140" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="95" y1="160" x2="115" y2="160" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="90" cy="120" r="2.5" fill="#FFD21F" />
                    <circle cx="90" cy="140" r="2.5" fill="#FFD21F" />
                    <circle cx="90" cy="160" r="2.5" fill="#FFD21F" />

                    {/* Blue Car */}
                    <path d="M 70,225 L 85,215 L 125,215 L 140,225 L 142,240 L 68,240 Z" fill="#F4C430" />
                    <circle cx="85" cy="240" r="7.5" fill="#334155" />
                    <circle cx="125" cy="240" r="7.5" fill="#334155" />

                    {/* General Building */}
                    <rect x="270" y="120" width="60" height="110" fill="#94a3b8" />
                    <rect x="280" y="135" width="10" height="15" fill="#f8fafc" />
                    <rect x="300" y="135" width="10" height="15" fill="#f8fafc" />
                    <rect x="280" y="165" width="10" height="15" fill="#f8fafc" />
                    <rect x="300" y="165" width="10" height="15" fill="#f8fafc" />
                    <rect x="280" y="195" width="10" height="15" fill="#f8fafc" />
                    <rect x="300" y="195" width="10" height="15" fill="#f8fafc" />

                    {/* Small Safe Shield */}
                    <path d="M 280,210 Q 300,240 320,210 L 320,195 L 280,195 Z" fill="#FFD21F" />

                    {/* General Businessman & Family silhouettes */}
                    <circle cx="210" cy="220" r="10" fill="#475569" />
                    <path d="M 195,270 L 225,270 L 220,230 L 200,230 Z" fill="#475569" />

                    {/* Child figure */}
                    <circle cx="235" cy="235" r="7" fill="#64748b" />
                    <path d="M 225,270 L 245,270 L 242,242 L 228,242 Z" fill="#64748b" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1.5 Premium Calculators Section */}
        <section className="py-14 md:py-20 bg-[#F5F5F3] border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight uppercase text-center">
                Premium Calculators
              </h2>
              <p className="text-sm sm:text-base text-[#6B6B6B] font-semibold max-w-2xl mx-auto text-center">
                Choose a calculator to estimate your insurance premiums instantly.
              </p>
            </div>

            {/* Tabs Selector Toggle */}
            <div className="flex justify-center">
              <div className="inline-flex bg-zinc-200/50 p-1.5 rounded-2xl border border-zinc-250">
                <button
                  onClick={() => setCalcTab("commercial")}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${calcTab === "commercial"
                      ? "bg-[#FFF8D6] text-[#171717] shadow-md shadow-[#F4C430]/15"
                      : "text-[#6B6B6B] hover:text-[#292929]"
                    }`}
                >
                  Commercial
                </button>
                <button
                  onClick={() => setCalcTab("group-health")}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${calcTab === "group-health"
                      ? "bg-[#FFF8D6] text-[#171717] shadow-md shadow-[#F4C430]/15"
                      : "text-[#6B6B6B] hover:text-[#292929]"
                    }`}
                >
                  Group Health
                </button>
              </div>
            </div>

            {/* Calculator Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Side: Copy content & Bullet points */}
              {calcTab === "commercial" ? (
                <div className="lg:col-span-5 text-left space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4C430] border border-[#F4C430] text-[#171717] text-xs font-bold uppercase tracking-wider">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Business Shield Estimator</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight leading-tight">
                    Estimate Your Business Insurance Cost
                  </h3>

                  <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed font-semibold">
                    Comprehensive protection for your assets, stock, and legal liabilities. Secure your business against Fire, Theft, and Third-Party claims.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#171717] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-extrabold text-[#292929]">Assets Cover</h4>
                        <p className="text-xs text-[#6B6B6B] leading-relaxed font-semibold">
                          Protects Building, Plant, Machinery & Stock.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#171717] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-extrabold text-[#292929]">Burglary</h4>
                        <p className="text-xs text-[#6B6B6B] leading-relaxed font-semibold">
                          Coverage against Keyman theft and forcible entry.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#171717] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-extrabold text-[#292929]">Liability</h4>
                        <p className="text-xs text-[#6B6B6B] leading-relaxed font-semibold">
                          Legal protection against third-party bodily injury or property damage.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#F5F5F3] rounded-xl p-4 border border-[#E5E5E0] text-[11px] text-[#6B6B6B] leading-relaxed font-semibold text-left">
                    * This calculator gives a quick estimate of business insurance costs based on common SME risk factors. Final premiums may vary depending on asset valuation, business operations, claims history, and insurer underwriting.
                  </div>
                </div>
              ) : (
                <div className="lg:col-span-5 text-left space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4C430] border border-[#F4C430] text-[#171717] text-xs font-bold uppercase tracking-wider">
                    <Users className="w-3.5 h-3.5" />
                    <span>Employee Wellness Estimator</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight leading-tight">
                    Estimate Your Group Health Insurance Cost
                  </h3>

                  <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed font-semibold">
                    Offer comprehensive health cover to your employees. Boost retention and provide financial security during medical emergencies.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#171717] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-extrabold text-[#292929]">GMC Cover</h4>
                        <p className="text-xs text-[#6B6B6B] leading-relaxed font-semibold">
                          Hospitalization expenses, room rent, and ICU charges.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#171717] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-extrabold text-[#292929]">Maternity & OPD Add-ons</h4>
                        <p className="text-xs text-[#6B6B6B] leading-relaxed font-semibold">
                          Optional cover for new mothers and outpatient visits.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#171717] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-extrabold text-[#292929]">Pre-existing Diseases</h4>
                        <p className="text-xs text-[#6B6B6B] leading-relaxed font-semibold">
                          Covered from Day 1 for all employees under group policy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#F5F5F3] rounded-xl p-4 border border-[#E5E5E0] text-[11px] text-[#6B6B6B] leading-relaxed font-semibold text-left">
                    * Indicative premiums are calculated per employee per year. Final premium is subject to demographic data (age distribution) and claims history of the group.
                  </div>
                </div>
              )}

              {/* Right Side: The Calculator Card itself */}
              <div className="lg:col-span-7 bg-[#FFFFFF] rounded-3xl border border-[#E5E5E0] shadow-xl overflow-hidden text-left">
                {calcTab === "commercial" ? (
                  <>
                    <div className="bg-[#FFF8D6] text-[#171717] p-6 text-center space-y-1">
                      <h4 className="text-lg font-black tracking-tight">SME Package Calculator</h4>
                      <p className="text-xs font-semibold text-[#171717]/80">Fire + Burglary + Public Liability</p>
                    </div>

                    <div className="p-6 sm:p-8 space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">
                            Business Type
                          </label>
                          <select
                            value={commercialBusinessType}
                            onChange={(e) => setCommercialBusinessType(e.target.value)}
                            className="w-full bg-[#F5F5F3] border border-[#E5E5E0] rounded-xl px-4 py-3 text-sm text-[#292929] focus:outline-none focus:border-[#F4C430]"
                          >
                            <option>Office / IT / Consulting</option>
                            <option>Manufacturing / Warehouse</option>
                            <option>Retail / Shop</option>
                            <option>Other / Healthcare</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">
                            Annual Turnover (For Liability)
                          </label>
                          <select
                            value={commercialTurnover}
                            onChange={(e) => setCommercialTurnover(e.target.value)}
                            className="w-full bg-[#F5F5F3] border border-[#E5E5E0] rounded-xl px-4 py-3 text-sm text-[#292929] focus:outline-none focus:border-[#F4C430]"
                          >
                            <option>Up to ₹50 Lakhs</option>
                            <option>₹50 Lakhs - ₹5 Crores</option>
                            <option>₹5 Crores - ₹25 Crores</option>
                            <option>₹25 Crores+</option>
                          </select>
                        </div>
                      </div>

                      {/* Assets Slider */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-xs font-bold text-[#6B6B6B] uppercase tracking-wider">
                          <span>Total Value of Assets (Stock + Furniture)</span>
                          <span className="bg-[#F4C430] text-[#171717] px-3 py-1 rounded-lg text-sm font-black">
                            ₹{commercialAssetValue.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="500000"
                          max="50000000"
                          step="100000"
                          value={commercialAssetValue}
                          onChange={(e) => setCommercialAssetValue(Number(e.target.value))}
                          className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#F4C430]"
                        />
                        <div className="flex justify-between text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider">
                          <span>₹5L</span>
                          <span>₹5Cr+</span>
                        </div>
                      </div>

                      {/* Selected Covers Checkboxes */}
                      <div className="space-y-2">
                        <span className="block text-xs font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">
                          Selected Covers
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <button
                            onClick={() =>
                              setCommercialCovers({ ...commercialCovers, fire: !commercialCovers.fire })
                            }
                            className={`flex items-center gap-2.5 p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${commercialCovers.fire
                                ? "bg-[#F4C430] border-[#F4C430] text-[#171717]"
                                : "bg-[#FFFFFF] border-[#E5E5E0] hover:bg-[#F5F5F3] text-[#292929]"
                              }`}
                          >
                            <input
                              type="checkbox"
                              checked={commercialCovers.fire}
                              readOnly
                              className="accent-[#F4C430] shrink-0"
                            />
                            <span>Fire & Perils</span>
                          </button>

                          <button
                            onClick={() =>
                              setCommercialCovers({ ...commercialCovers, burglary: !commercialCovers.burglary })
                            }
                            className={`flex items-center gap-2.5 p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${commercialCovers.burglary
                                ? "bg-[#F4C430] border-[#F4C430] text-[#171717]"
                                : "bg-[#FFFFFF] border-[#E5E5E0] hover:bg-[#F5F5F3] text-[#292929]"
                              }`}
                          >
                            <input
                              type="checkbox"
                              checked={commercialCovers.burglary}
                              readOnly
                              className="accent-[#F4C430] shrink-0"
                            />
                            <span>Burglary</span>
                          </button>

                          <button
                            onClick={() =>
                              setCommercialCovers({ ...commercialCovers, liability: !commercialCovers.liability })
                            }
                            className={`flex items-center gap-2.5 p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${commercialCovers.liability
                                ? "bg-[#F4C430] border-[#F4C430] text-[#171717]"
                                : "bg-[#FFFFFF] border-[#E5E5E0] hover:bg-[#F5F5F3] text-[#292929]"
                              }`}
                          >
                            <input
                              type="checkbox"
                              checked={commercialCovers.liability}
                              readOnly
                              className="accent-[#F4C430] shrink-0"
                            />
                            <span>Public Liability</span>
                          </button>
                        </div>
                      </div>

                      {/* Estimated Annual Premium box */}
                      <div className="bg-[#F5F5F3] rounded-2xl p-6 border border-[#E5E5E0] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider block">
                            Estimated Annual Premium
                          </span>
                          <div className="text-3xl font-black text-[#292929]">
                            ₹
                            {(
                              (commercialCovers.fire ? Math.round(commercialAssetValue * 0.0005) : 0) +
                              (commercialCovers.burglary ? Math.round(commercialAssetValue * 0.001) : 0) +
                              (commercialCovers.liability
                                ? commercialTurnover === "Up to ₹50 Lakhs"
                                  ? 750
                                  : commercialTurnover === "₹50 Lakhs - ₹5 Crores"
                                    ? 2200
                                    : commercialTurnover === "₹5 Crores - ₹25 Crores"
                                      ? 5500
                                      : 12500
                                : 0)
                            ).toLocaleString("en-IN")}
                            <span className="text-xs font-bold text-[#6B6B6B] lowercase tracking-normal"> + GST</span>
                          </div>

                          {/* Premium Breakdown */}
                          <div className="text-[11px] font-bold text-[#6B6B6B] space-y-1 mt-2">
                            {commercialCovers.fire && (
                              <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                <span>Fire: ₹{Math.round(commercialAssetValue * 0.0005).toLocaleString("en-IN")}</span>
                              </div>
                            )}
                            {commercialCovers.burglary && (
                              <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F5F5F3]0" />
                                <span>Burglary: ₹{Math.round(commercialAssetValue * 0.001).toLocaleString("en-IN")}</span>
                              </div>
                            )}
                            {commercialCovers.liability && (
                              <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                <span>
                                  Liability: ₹
                                  {(commercialTurnover === "Up to ₹50 Lakhs"
                                    ? 750
                                    : commercialTurnover === "₹50 Lakhs - ₹5 Crores"
                                      ? 2200
                                      : commercialTurnover === "₹5 Crores - ₹25 Crores"
                                        ? 5500
                                        : 12500
                                  ).toLocaleString("en-IN")}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="text-[10px] text-[#6B6B6B] font-semibold text-left">
                        *Indicative premium for selected{" "}
                        {Object.values(commercialCovers).filter(Boolean).length} covers.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-[#FFF8D6] text-[#171717] p-6 text-center space-y-1">
                      <h4 className="text-lg font-black tracking-tight">Group Health (GMC) Calculator</h4>
                      <p className="text-xs font-semibold text-[#171717]/80">Employee Medical Benefits</p>
                    </div>

                    <div className="p-6 sm:p-8 space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">
                            Number of Employees
                          </label>
                          <select
                            value={healthEmployeeCount}
                            onChange={(e) => setHealthEmployeeCount(Number(e.target.value))}
                            className="w-full bg-[#F5F5F3] border border-[#E5E5E0] rounded-xl px-4 py-3 text-sm text-[#292929] focus:outline-none focus:border-[#F4C430]"
                          >
                            <option value={10}>10 Employees</option>
                            <option value={25}>25 Employees</option>
                            <option value={50}>50 Employees</option>
                            <option value={100}>100 Employees</option>
                            <option value={250}>250 Employees</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">
                            Sum Insured (Per Employee)
                          </label>
                          <select
                            value={healthSumInsured}
                            onChange={(e) => setHealthSumInsured(Number(e.target.value))}
                            className="w-full bg-[#F5F5F3] border border-[#E5E5E0] rounded-xl px-4 py-3 text-sm text-[#292929] focus:outline-none focus:border-[#F4C430]"
                          >
                            <option value={200000}>₹2 Lakhs</option>
                            <option value={300000}>₹3 Lakhs</option>
                            <option value={500000}>₹5 Lakhs</option>
                          </select>
                        </div>
                      </div>

                      {/* Add-ons Cover Checkboxes */}
                      <div className="space-y-2">
                        <span className="block text-xs font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">
                          Add-on Covers
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <button
                            onClick={() =>
                              setHealthCovers({ ...healthCovers, maternity: !healthCovers.maternity })
                            }
                            className={`flex items-center gap-2.5 p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${healthCovers.maternity
                                ? "bg-[#F4C430] border-[#F4C430] text-[#171717]"
                                : "bg-[#FFFFFF] border-[#E5E5E0] hover:bg-[#F5F5F3] text-[#292929]"
                              }`}
                          >
                            <input
                              type="checkbox"
                              checked={healthCovers.maternity}
                              readOnly
                              className="accent-[#FFD21F] shrink-0"
                            />
                            <span>Maternity Cover</span>
                          </button>

                          <button
                            onClick={() =>
                              setHealthCovers({ ...healthCovers, opd: !healthCovers.opd })
                            }
                            className={`flex items-center gap-2.5 p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${healthCovers.opd
                                ? "bg-[#F4C430] border-[#F4C430] text-[#171717]"
                                : "bg-[#FFFFFF] border-[#E5E5E0] hover:bg-[#F5F5F3] text-[#292929]"
                              }`}
                          >
                            <input
                              type="checkbox"
                              checked={healthCovers.opd}
                              readOnly
                              className="accent-[#FFD21F] shrink-0"
                            />
                            <span>OPD Consultations</span>
                          </button>
                        </div>
                      </div>

                      {/* Estimated Annual Premium box */}
                      <div className="bg-[#F5F5F3] rounded-2xl p-6 border border-[#E5E5E0] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider block">
                            Estimated Annual Premium
                          </span>
                          <div className="text-3xl font-black text-[#292929]">
                            ₹
                            {(
                              ((healthSumInsured === 200000
                                ? 1800
                                : healthSumInsured === 300000
                                  ? 2450
                                  : 3600) +
                                (healthCovers.maternity ? 850 : 0) +
                                (healthCovers.opd ? 500 : 0)) *
                              healthEmployeeCount
                            ).toLocaleString("en-IN")}
                            <span className="text-xs font-bold text-[#6B6B6B] lowercase tracking-normal"> + GST</span>
                          </div>

                          {/* Premium Breakdown */}
                          <div className="text-[11px] font-bold text-[#6B6B6B] space-y-1 mt-2">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F5F5F3]0" />
                              <span>
                                Base GMC: ₹
                                {(
                                  (healthSumInsured === 200000
                                    ? 1800
                                    : healthSumInsured === 300000
                                      ? 2450
                                      : 3600) * healthEmployeeCount
                                ).toLocaleString("en-IN")}
                              </span>
                            </div>
                            {healthCovers.maternity && (
                              <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                                <span>Maternity: ₹{(850 * healthEmployeeCount).toLocaleString("en-IN")}</span>
                              </div>
                            )}
                            {healthCovers.opd && (
                              <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F5F5F3]0" />
                                <span>OPD: ₹{(500 * healthEmployeeCount).toLocaleString("en-IN")}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="text-[10px] text-[#6B6B6B] font-semibold text-left">
                        *Indicative premium calculated for {healthEmployeeCount} employees at Sum Insured of ₹
                        {(healthSumInsured / 100000).toFixed(0)}L.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 1.7 Leading Commercial & General Insurers in India */}
        <section className="py-14 md:py-20 bg-[#FFFFFF] border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
            {/* Header */}
            <div className="max-w-3xl mx-auto space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight uppercase">
                Leading Commercial & General Insurers in India
              </h2>
              <p className="text-sm sm:text-base text-[#6B6B6B] font-semibold max-w-3xl mx-auto">
                We partner with IRDAI-approved insurers rated on Claim Settlement Ratio, Network Hospitals, and Financial Stability.
              </p>
            </div>

            {/* Grid of Insurers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "HDFC ERGO",
                  claimRatio: "98.71%",
                  network: "13,500+",
                  marketCap: "₹48,000Cr",
                  slogan: "Comprehensive Business Packages",
                  logo: (
                    <div className="flex items-center gap-1 font-sans">
                      <span className="bg-red-600 text-[#171717] px-2 py-0.5 text-[10px] font-black rounded-xs">HDFC</span>
                      <span className="text-[#292929] font-black text-xs">ERGO</span>
                    </div>
                  )
                },
                {
                  name: "ICICI Lombard",
                  claimRatio: "98.84%",
                  network: "12,800+",
                  marketCap: "₹82,000Cr",
                  slogan: "Tech-driven Claims Processing",
                  logo: (
                    <div className="flex items-center gap-1 font-sans">
                      <span className="text-[#F4C430] font-black text-xs">ICICI</span>
                      <span className="text-[#292929] font-bold text-xs">Lombard</span>
                    </div>
                  )
                },
                {
                  name: "New India Assurance",
                  claimRatio: "92.50%",
                  network: "10,000+",
                  marketCap: "₹1,20,000Cr",
                  slogan: "Public Sector Reliability",
                  logo: (
                    <div className="flex items-center gap-1.5 font-sans">
                      <span className="bg-blue-600 text-[#171717] rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-black">N</span>
                      <span className="text-[#F4C430] font-black text-[11px]">New India</span>
                    </div>
                  )
                },
                {
                  name: "Tata AIG",
                  claimRatio: "97.10%",
                  network: "11,000+",
                  marketCap: "₹78,000Cr",
                  slogan: "Best for Liability Insurance",
                  logo: (
                    <div className="flex items-center gap-1 font-sans">
                      <span className="text-[#F4C430] font-black text-xs">TATA</span>
                      <span className="bg-[#F5F5F3]0 text-[#171717] px-1.5 py-0.5 text-[9px] font-black rounded-xs">AIG</span>
                    </div>
                  )
                },
                {
                  name: "Bajaj Allianz",
                  claimRatio: "98.00%",
                  network: "10,500+",
                  marketCap: "₹54,000Cr",
                  slogan: "Customer-Centric Services",
                  logo: (
                    <div className="flex items-center gap-1 font-sans">
                      <span className="text-[#F4C430] font-black text-xs">BAJAJ</span>
                      <span className="text-[#292929] font-black text-xs">Allianz</span>
                    </div>
                  )
                },
                {
                  name: "SBI General",
                  claimRatio: "96.60%",
                  network: "14,000+",
                  marketCap: "₹66,000Cr",
                  slogan: "Wide Reach & Trust",
                  logo: (
                    <div className="flex items-center gap-1 font-sans">
                      <span className="bg-indigo-650 text-[#171717] px-2 py-0.5 text-[10px] font-black rounded-xs">SBI</span>
                      <span className="text-indigo-850 font-bold text-xs">General</span>
                    </div>
                  )
                },
                {
                  name: "goDigit Insurance",
                  claimRatio: "98.04%",
                  network: "8,000+",
                  marketCap: "₹28,500Cr",
                  slogan: "Digital-First General Insurance",
                  logo: (
                    <div className="flex items-center gap-0.5 font-sans">
                      <span className="text-[#292929] font-black text-sm tracking-tight">digit</span>
                    </div>
                  )
                },
                {
                  name: "Cholamandalam MS",
                  claimRatio: "98.50%",
                  network: "7,200+",
                  marketCap: "₹22,000Cr",
                  slogan: "SME & Motor Insurance",
                  logo: (
                    <div className="flex flex-col items-center font-sans">
                      <span className="text-emerald-700 font-black text-[10px] uppercase tracking-wider">Chola MS</span>
                    </div>
                  )
                },
                {
                  name: "Royal Sundaram",
                  claimRatio: "94.80%",
                  network: "8,500+",
                  marketCap: "₹16,000Cr",
                  slogan: "Complete Business Protection",
                  logo: (
                    <div className="flex items-center gap-1 font-sans">
                      <span className="text-[#171717] font-black text-xs">Royal</span>
                      <span className="text-[#F4C430] font-black text-xs">Sundaram</span>
                    </div>
                  )
                },
                {
                  name: "Future Generali",
                  claimRatio: "98.25%",
                  network: "8,000+",
                  marketCap: "₹18,500Cr",
                  slogan: "Retail & SME General Plans",
                  logo: (
                    <div className="flex items-center gap-1 font-sans">
                      <span className="bg-red-650 text-[#171717] px-2 py-0.5 text-[10px] font-black rounded-xs">FUTURE</span>
                      <span className="text-[#292929] font-bold text-xs">GENERALI</span>
                    </div>
                  )
                },
                {
                  name: "Zurich Kotak",
                  claimRatio: "98.30%",
                  network: "8,400+",
                  marketCap: "₹32,500Cr",
                  slogan: "Global Expertise, Indian Roots",
                  logo: (
                    <div className="flex items-center gap-1 font-sans">
                      <span className="text-[#D64545] font-black text-xs">Zurich</span>
                      <span className="text-[#292929] font-bold text-xs">Kotak</span>
                    </div>
                  )
                },
                {
                  name: "Liberty General",
                  claimRatio: "90.80%",
                  network: "8,000+",
                  marketCap: "₹12,000Cr",
                  slogan: "Motor & Commercial Lines",
                  logo: (
                    <div className="flex items-center gap-1 font-sans">
                      <span className="text-[#F4C430] font-black text-xs">Liberty</span>
                      <span className="text-[#F4C430] font-bold text-xs">General</span>
                    </div>
                  )
                }
              ].slice(0, showAllInsurers ? 12 : 8).map((ins) => (
                <div
                  key={ins.name}
                  className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#E5E5E0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left space-y-4"
                >
                  <div className="space-y-4">
                    {/* Logo Area */}
                    <div className="h-12 flex items-center justify-center border-b border-[#E5E5E0] pb-3">
                      {ins.logo}
                    </div>

                    {/* Stats List */}
                    <div className="space-y-2 pt-1">
                      <div className="flex justify-between text-xs py-1 border-b border-zinc-50 font-semibold">
                        <span className="text-[#6B6B6B]">Claim Ratio</span>
                        <span className="text-[#198754] font-extrabold">{ins.claimRatio}</span>
                      </div>
                      <div className="flex justify-between text-xs py-1 border-b border-zinc-50 font-semibold">
                        <span className="text-[#6B6B6B]">Network</span>
                        <span className="text-[#292929] font-extrabold">{ins.network}</span>
                      </div>
                      <div className="flex justify-between text-xs py-1 font-semibold">
                        <span className="text-[#6B6B6B]">Market Cap</span>
                        <span className="text-[#292929] font-extrabold">{ins.marketCap}</span>
                      </div>
                    </div>

                    {/* Slogan Badge */}
                    <div className="text-center bg-[#F5F5F3] py-2 px-3 rounded-xl border border-[#E5E5E0]">
                      <span className="text-[10px] text-[#6B6B6B] font-bold uppercase tracking-wider">
                        {ins.slogan}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More / Show Less Button */}
            <div className="flex justify-center pt-6">
              <button
                onClick={() => setShowAllInsurers(!showAllInsurers)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-250 bg-[#FFFFFF] text-xs font-bold text-[#171717] hover:bg-[#F5F5F3] transition-all shadow-xs cursor-pointer"
              >
                <span>{showAllInsurers ? "Show Less —" : "Show More +"}</span>
              </button>
            </div>
          </div>
        </section>

        {/* 1.8 Insurance Products Catalog Section */}
        <section className="py-14 md:py-20 bg-[#F5F5F3] border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
            {/* Header */}
            <div className="max-w-3xl mx-auto space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight uppercase">
                Insurance Products
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {["All", "Accident", "Health", "Property", "Liability", "Cyber", "Life"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedProductCategory(cat);
                    setShowAllProducts(false);
                  }}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${selectedProductCategory === cat
                      ? "bg-[#0D9488] border-[#0D9488] text-[#171717] shadow-md shadow-[#0D9488]/15"
                      : "bg-[#FFFFFF] border-[#E5E5E0] text-[#6B6B6B] hover:bg-[#F5F5F3]"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid of Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {insuranceProductsList
                .filter((prod) => selectedProductCategory === "All" || prod.category === selectedProductCategory)
                .slice(0, showAllProducts ? undefined : 3)
                .map((prod) => (
                  <div
                    key={prod.name}
                    className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#E5E5E0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-center space-y-4"
                  >
                    <div className="space-y-3">
                      {/* Product Icon */}
                      <div className="w-10 h-10 rounded-full bg-[#F5F5F3] text-[#0D9488] flex items-center justify-center mx-auto shadow-xs border border-[#E5E5E0]">
                        {prod.icon}
                      </div>

                      {/* Product Name */}
                      <h3 className="text-sm font-extrabold text-[#292929]">{prod.name}</h3>

                      {/* Description */}
                      <p className="text-xs text-[#6B6B6B] font-semibold leading-relaxed">
                        {prod.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-[#E5E5E0]">
                      <div className="flex justify-between text-xs font-semibold py-0.5">
                        <span className="text-[#6B6B6B]">Claim Ratio:</span>
                        <span className="text-[#198754] font-extrabold">{prod.claimRatio}</span>
                      </div>
                      <div className="flex justify-between text-xs font-semibold py-0.5">
                        <span className="text-[#6B6B6B]">Premium:</span>
                        <span className="text-[#292929] font-extrabold">{prod.premium}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* View More / Show Less Button */}
            {insuranceProductsList.filter((prod) => selectedProductCategory === "All" || prod.category === selectedProductCategory).length > 3 && (
              <div className="flex justify-center pt-6">
                <button
                  onClick={() => setShowAllProducts(!showAllProducts)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#E5E5E0] bg-[#FFFFFF] text-xs font-bold text-[#0D9488] hover:bg-[#F5F5F3] transition-all shadow-xs cursor-pointer"
                >
                  <span>{showAllProducts ? "Show Less —" : "View More +"}</span>
                </button>
              </div>
            )}
          </div>
        </section>


        {/* 2. Insights Section (Why General Insurance Matters) */}
        <section id="insights-section" className="py-14 md:py-20 bg-[#F5F5F3] border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight uppercase text-center">
                Why General Insurance Matters
              </h2>
              <p className="text-sm sm:text-base text-[#6B6B6B] font-semibold max-w-2xl mx-auto text-center">
                Data-driven insights on why comprehensive coverage is crucial for business continuity in India.
              </p>
            </div>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E0] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider block mb-1">
                    TOTAL COMMERCIAL PREMIUM
                  </span>
                  <div className="text-2xl font-black text-[#292929]">₹1.24 Lakh Cr</div>
                  <p className="text-xs text-[#6B6B6B] mt-2 font-medium">
                    Gross premium in Indian general insurance sector (2026)
                  </p>
                </div>
              </div>

              <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E0] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider block mb-1">
                    CYBER CLAIMS GROWTH
                  </span>
                  <div className="text-2xl font-black text-[#198754]">+300%</div>
                  <p className="text-xs text-[#6B6B6B] mt-2 font-medium">
                    Increase in general cyber claims since 2023
                  </p>
                </div>
              </div>

              <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E0] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] text-[#292929] flex items-center justify-center font-bold mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider block mb-1">
                    AVERAGE GMC CLAIM
                  </span>
                  <div className="text-2xl font-black text-[#292929]">₹78,000</div>
                  <p className="text-xs text-[#6B6B6B] mt-2 font-medium">
                    Average payout per Group Medical claim
                  </p>
                </div>
              </div>

              <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E0] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-4">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider block mb-1">
                    SME COVERAGE GAP
                  </span>
                  <div className="text-2xl font-black text-rose-600">85%</div>
                  <p className="text-xs text-[#6B6B6B] mt-2 font-medium">
                    Startups/SMEs operating without liability cover
                  </p>
                </div>
              </div>
            </div>

            {/* Charts Grid 1: Risks Donut & Financial Impact Line Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
              {/* Card 1: Top Business Risks in India */}
              <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E5E5E0] shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-base sm:text-lg font-bold text-[#292929] tracking-tight uppercase">
                        Top Business Risks in India
                      </h3>
                      <p className="text-xs text-[#6B6B6B] font-bold uppercase tracking-wider">
                        Risk Distribution Analysis
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center my-6">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="38" stroke="#f1f5f9" strokeWidth="16" fill="transparent" />
                        {/* Interactive segments based on exact offsets */}
                        {riskData.map((seg) => {
                          const circum = 2 * Math.PI * 38;
                          const segmentLength = (seg.percentage / 100) * circum;
                          const offset = (seg.offset / 100) * circum;
                          return (
                            <circle
                              key={seg.label}
                              cx="50"
                              cy="50"
                              r="38"
                              stroke={seg.color}
                              strokeWidth="16"
                              fill="transparent"
                              strokeDasharray={`${segmentLength} ${circum}`}
                              strokeDashoffset={-offset}
                              className="transition-all duration-300 hover:opacity-85 cursor-pointer"
                              onMouseEnter={() => setActiveRiskHover(seg.label)}
                              onMouseLeave={() => setActiveRiskHover(null)}
                            />
                          );
                        })}
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none p-4">
                        <span className="text-2xl font-black text-[#292929]">
                          {activeRiskHover ?
                            riskData.find(r => r.label === activeRiskHover)?.percentage + "%"
                            : "35%"}
                        </span>
                        <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider">
                          {activeRiskHover || "Cyber Attacks"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E5E0] flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-wider">
                  {riskData.map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-1.5 px-2 py-0.5 rounded-lg transition-colors cursor-pointer ${activeRiskHover === item.label ? "bg-[#F5F5F3] text-[#171717]" : "text-[#6B6B6B]"
                        }`}
                      onMouseEnter={() => setActiveRiskHover(item.label)}
                      onMouseLeave={() => setActiveRiskHover(null)}
                    >
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                      <span>{item.label} ({item.percentage}%)</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Financial Impact (Liability Costs) Area/Line Chart */}
              <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E5E5E0] shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-base sm:text-lg font-bold text-[#292929] tracking-tight uppercase">
                        Financial Impact (Liability Costs)
                      </h3>
                      <p className="text-xs text-[#6B6B6B] font-bold uppercase tracking-wider">
                        Average Litigation & Settlements
                      </p>
                    </div>
                  </div>

                  {/* Clean SVG Area Chart representation */}
                  <div className="h-44 sm:h-52 w-full mt-4 flex items-end relative border-b border-l border-[#E5E5E0] pb-2 pl-2">
                    <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-[#6B6B6B] pointer-events-none select-none pl-6 pt-2">
                      <div className="border-t border-dashed border-[#E5E5E0] w-full text-left">₹200k</div>
                      <div className="border-t border-dashed border-[#E5E5E0] w-full text-left">₹150k</div>
                      <div className="border-t border-dashed border-[#E5E5E0] w-full text-left">₹100k</div>
                      <div className="border-t border-dashed border-[#E5E5E0] w-full text-left">₹50k</div>
                      <div className="text-left">₹0k</div>
                    </div>

                    <div className="w-full h-full flex justify-between items-end relative z-10 pt-4">
                      {liabilityTimeline.map((item) => (
                        <div key={item.year} className="flex flex-col items-center group flex-1">
                          <div className="relative w-full flex flex-col items-center justify-end h-32">
                            {/* Area marker bar */}
                            <div
                              className="w-4 bg-gradient-to-t from-[#F5F5F3] to-[#E5E5E0] rounded-t-sm group-hover:brightness-110 transition-all duration-500"
                              style={{ height: item.height }}
                            />
                            {/* Hover tooltip */}
                            <div className="absolute -top-6 bg-zinc-900 text-[#171717] text-[9px] font-black px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                              ₹{item.value}k
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-[#6B6B6B] mt-2">{item.year}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E5E0] text-left text-xs font-semibold text-[#6B6B6B] flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#F4C430] shrink-0" />
                  <span>Litigation expenses for SMBs have tripled over the last 4 years.</span>
                </div>
              </div>
            </div>

            {/* Charts Grid 2: Claim Settlement Ratios & Premium Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
              {/* Card 3: Claim Settlement Ratios (FY25) */}
              <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E5E5E0] shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-base sm:text-lg font-bold text-[#292929] tracking-tight uppercase">
                        Claim Settlement Ratios (FY25)
                      </h3>
                      <p className="text-xs text-[#6B6B6B] font-bold uppercase tracking-wider">
                        Official IRDAI Disclosures
                      </p>
                    </div>
                  </div>

                  {/* Vertical Bar Chart */}
                  <div className="h-44 sm:h-52 w-full mt-4 flex items-end justify-between border-b border-zinc-250 pb-2">
                    {csrData.map((item) => (
                      <div key={item.name} className="flex flex-col items-center group flex-1">
                        <div className="h-32 w-full flex items-end justify-center relative">
                          <div
                            className={`w-6 ${item.color} rounded-t-lg transition-all duration-700 ease-out group-hover:brightness-105`}
                            style={{ height: `${item.ratio}%` }}
                          />
                          <div className="absolute -top-6 bg-zinc-900 text-[#171717] text-[9px] font-black px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.ratio}%
                          </div>
                        </div>
                        <span className="text-[9px] font-extrabold text-[#292929] mt-2 block rotate-12 sm:rotate-0 whitespace-nowrap">
                          {item.name.split(" ")[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E5E0] text-[10px] text-[#6B6B6B] text-center font-semibold uppercase tracking-wider">
                  *Official IRDAI annual disclosure reports for Indian insurance providers.
                </div>
              </div>

              {/* Card 4: Enterprise Premium Distribution */}
              <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E5E5E0] shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-base sm:text-lg font-bold text-[#292929] tracking-tight uppercase">
                        Enterprise Premium Distribution
                      </h3>
                      <p className="text-xs text-[#6B6B6B] font-bold uppercase tracking-wider">
                        Typical Mid-Market Budget Allocation
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center my-6">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="38" stroke="#f1f5f9" strokeWidth="16" fill="transparent" />
                        {distData.map((seg) => {
                          const circum = 2 * Math.PI * 38;
                          const segmentLength = (seg.percentage / 100) * circum;
                          const offset = (seg.offset / 100) * circum;
                          return (
                            <circle
                              key={seg.label}
                              cx="50"
                              cy="50"
                              r="38"
                              stroke={seg.color}
                              strokeWidth="16"
                              fill="transparent"
                              strokeDasharray={`${segmentLength} ${circum}`}
                              strokeDashoffset={-offset}
                              className="transition-all duration-300 hover:opacity-85 cursor-pointer"
                              onMouseEnter={() => setActiveDistHover(seg.label)}
                              onMouseLeave={() => setActiveDistHover(null)}
                            />
                          );
                        })}
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none p-4">
                        <span className="text-2xl font-black text-[#292929]">
                          {activeDistHover ?
                            distData.find(d => d.label === activeDistHover)?.percentage + "%"
                            : "42%"}
                        </span>
                        <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider">
                          {activeDistHover || "Cyber & Liability"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E5E0] flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-wider">
                  {distData.map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-1.5 px-2 py-0.5 rounded-lg transition-colors cursor-pointer ${activeDistHover === item.label ? "bg-[#F5F5F3] text-[#171717]" : "text-[#6B6B6B]"
                        }`}
                      onMouseEnter={() => setActiveDistHover(item.label)}
                      onMouseLeave={() => setActiveDistHover(null)}
                    >
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                      <span>{item.label} ({item.percentage}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Insider Facts Section (Did You Know?) */}
        <section className="py-14 md:py-20 bg-[#FFFFFF] border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8D6] border border-[#E5E5E0] text-[#171717] text-xs font-black uppercase tracking-wider mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Insider Facts</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight text-center">
                Did You Know?
              </h2>
              <p className="text-sm sm:text-base text-[#6B6B6B] font-semibold max-w-2xl mx-auto text-center">
                Surprising statistics and essential facts about the general insurance landscape in India today.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F5F5F3] rounded-2xl p-8 border border-[#E5E5E0] shadow-xs hover:border-[#F4C430] hover:shadow-md transition-all text-left space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-[#292929] leading-snug">
                  43% of cyber attacks target small businesses.
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed font-semibold">
                  Cyber insurance is no longer optional; it's a necessity for digital safety. Premiums start at just ₹15,000 annually for basic coverage.
                </p>
              </div>

              <div className="bg-[#F5F5F3] rounded-2xl p-8 border border-[#E5E5E0] shadow-xs hover:border-[#F4C430] hover:shadow-md transition-all text-left space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-[#292929] leading-snug">
                  75% of businesses are underinsured.
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed font-semibold">
                  Many companies fail to update their coverage as they grow, leaving gaps in protection that could be catastrophic.
                </p>
              </div>

              <div className="bg-[#F5F5F3] rounded-2xl p-8 border border-[#E5E5E0] shadow-xs hover:border-indigo-500/30 hover:shadow-md transition-all text-left space-y-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-[#292929] leading-snug">
                  Group Health premiums grew 9% in FY26.
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed font-semibold">
                  Retail health grew even faster at 10%, showing increased awareness of health coverage needs among Indians.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Mandatory vs Recommended Section */}
        <section className="py-14 md:py-20 bg-[#F5F5F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F3] border border-[#E5E5E0] text-[#171717] text-xs font-black uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Coverage Guide</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight text-center">
                Mandatory vs. Recommended
              </h2>
              <p className="text-sm sm:text-base text-[#6B6B6B] font-semibold max-w-2xl mx-auto text-center">
                Not sure what insurance your business needs? Here is a breakdown of legally required policies versus recommended coverage to keep your business safe.
              </p>
            </div>

            {/* 3-Column Comparison Table */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Column 1: Mandatory by Law */}
              <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5E5E0] shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-base font-extrabold text-[#171717]">Mandatory by Law</h3>
                      <p className="text-[10px] text-[#6B6B6B] font-bold uppercase tracking-wider">
                        Legally required in India
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#6B6B6B] font-semibold text-left">
                    Legally required for businesses in India under various acts.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-[#171717] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-extrabold text-[#292929]">Workmen's Compensation</h4>
                        <p className="text-xs text-[#6B6B6B] mt-0.5 leading-relaxed font-semibold">
                          Mandatory for all manufacturing/construction businesses with employees.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-[#171717] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-extrabold text-[#292929]">Third-Party Motor Insurance</h4>
                        <p className="text-xs text-[#6B6B6B] mt-0.5 leading-relaxed font-semibold">
                          Mandatory for all commercial vehicles owned by the company.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-[#171717] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-extrabold text-[#292929]">Public Liability Act Policy</h4>
                        <p className="text-xs text-[#6B6B6B] mt-0.5 leading-relaxed font-semibold">
                          Mandatory for businesses handling hazardous substances.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Highly Recommended */}
              <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5E5E0] shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-base font-extrabold text-[#171717]">Highly Recommended</h3>
                      <p className="text-[10px] text-[#6B6B6B] font-bold uppercase tracking-wider">
                        Business Continuity Shield
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#6B6B6B] font-semibold text-left">
                    Essential policies to protect against major financial losses.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-[#171717] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-extrabold text-[#292929]">Group Health (GMC)</h4>
                        <p className="text-xs text-[#6B6B6B] mt-0.5 leading-relaxed font-semibold">
                          Crucial for employee retention and well-being.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-[#171717] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-extrabold text-[#292929]">Fire & Burglary</h4>
                        <p className="text-xs text-[#6B6B6B] mt-0.5 leading-relaxed font-semibold">
                          Protects office premises, inventory, and assets.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-[#171717] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-extrabold text-[#292929]">Commercial General Liability</h4>
                        <p className="text-xs text-[#6B6B6B] mt-0.5 leading-relaxed font-semibold">
                          Protects against third-party bodily injury and property damage.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Good to Have / Niche */}
              <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5E5E0] shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-base font-extrabold text-[#171717]">Good to Have / Niche</h3>
                      <p className="text-[10px] text-[#6B6B6B] font-bold uppercase tracking-wider">
                        Specialized Risks Coverage
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#6B6B6B] font-semibold text-left">
                    Advanced protection for modern and specialized risks.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-extrabold text-[#292929]">Cyber Liability</h4>
                        <p className="text-xs text-[#6B6B6B] mt-0.5 leading-relaxed font-semibold">
                          Essential for IT, finance, and data-heavy businesses.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-extrabold text-[#292929]">Directors & Officers (D&O)</h4>
                        <p className="text-xs text-[#6B6B6B] mt-0.5 leading-relaxed font-semibold">
                          Protects management from personal liability claims.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-extrabold text-[#292929]">Trade Credit</h4>
                        <p className="text-xs text-[#6B6B6B] mt-0.5 leading-relaxed font-semibold">
                          Protects against non-payment by B2B customers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Industries We Serve Section */}
        <section className="py-14 md:py-20 bg-[#FFFFFF] border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
            {/* Header */}
            <div className="max-w-3xl mx-auto space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight uppercase">
                Industries We Serve
              </h2>
            </div>

            {/* Grid of 6 Industry Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E5E5E0] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold mx-auto">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#292929]">IT & Software Companies</h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed font-semibold">
                  Cyber, Professional Indemnity, Group Health
                </p>
              </div>

              <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E5E5E0] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold mx-auto">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#292929]">Manufacturing</h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed font-semibold">
                  Fire, Workmen Compensation, Machinery Breakdown
                </p>
              </div>

              <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E5E5E0] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold mx-auto">
                  <HardHat className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#292929]">Construction & Infrastructure</h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed font-semibold">
                  Workmen Compensation, Contractor All Risk (CAR), CPM, Marine & Liability
                </p>
              </div>

              <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E5E5E0] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold mx-auto">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#292929]">Healthcare & Hospitals</h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed font-semibold">
                  Medical Malpractice, Group Health, Property
                </p>
              </div>

              <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E5E5E0] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold mx-auto">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#292929]">Retail & Shops</h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed font-semibold">
                  Fire, Theft, Public Liability
                </p>
              </div>

              <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E5E5E0] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold mx-auto">
                  <Landmark className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#292929]">Finance & Banking</h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed font-semibold">
                  D&O, Professional Indemnity, Cyber
                </p>
              </div>
            </div>

            {/* View All Button */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#E5E5E0] bg-[#FFFFFF] text-xs font-bold text-[#171717] shadow-xs select-none">
                View All +
              </div>
            </div>
          </div>
        </section>

        {/* 6. How It Works Section */}
        <section className="py-14 md:py-20 bg-[#F5F5F3] border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
            {/* Header */}
            <div className="max-w-3xl mx-auto space-y-2">
              <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider block">
                Insurance Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight uppercase">
                How It Works
              </h2>
              <p className="text-sm sm:text-base text-[#6B6B6B] font-semibold max-w-2xl mx-auto">
                Get insured in 4 simple steps
              </p>
            </div>

            {/* Steps Timeline Grid */}
            <div className="relative">
              {/* Connecting Line (Hidden on Mobile) */}
              <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-zinc-200 -translate-y-12 hidden md:block" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#FFFFFF] border border-[#E5E5E0] text-[#171717] flex items-center justify-center font-bold shadow-md">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="bg-[#F5F5F3] border border-[#E5E5E0] px-3 py-1 rounded-full text-[9px] font-bold text-[#171717] uppercase tracking-wider">
                    Step 01
                  </div>
                  <h4 className="text-sm font-extrabold text-zinc-850">Submit Your Requirement</h4>
                  <p className="text-xs text-[#6B6B6B] font-semibold max-w-xs leading-relaxed">
                    Tell us about your business and insurance needs. Free consultation.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#FFFFFF] border border-[#E5E5E0] text-[#171717] flex items-center justify-center font-bold shadow-md">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div className="bg-[#F5F5F3] border border-[#E5E5E0] px-3 py-1 rounded-full text-[9px] font-bold text-[#171717] uppercase tracking-wider">
                    Step 02
                  </div>
                  <h4 className="text-sm font-extrabold text-zinc-850">Get Expert Consultation</h4>
                  <p className="text-xs text-[#6B6B6B] font-semibold max-w-xs leading-relaxed">
                    Our IRDAI-certified experts analyze your risks and suggest best policies from top insurers.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#FFFFFF] border border-[#E5E5E0] text-[#171717] flex items-center justify-center font-bold shadow-md">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div className="bg-[#F5F5F3] border border-[#E5E5E0] px-3 py-1 rounded-full text-[9px] font-bold text-[#171717] uppercase tracking-wider">
                    Step 03
                  </div>
                  <h4 className="text-sm font-extrabold text-zinc-850">Compare & Choose Plan</h4>
                  <p className="text-xs text-[#6B6B6B] font-semibold max-w-xs leading-relaxed">
                    Compare multiple insurers, premiums, and coverage to choose the best fit.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#FFFFFF] border border-[#E5E5E0] text-[#171717] flex items-center justify-center font-bold shadow-md">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div className="bg-[#F5F5F3] border border-[#E5E5E0] px-3 py-1 rounded-full text-[9px] font-bold text-[#171717] uppercase tracking-wider">
                    Step 04
                  </div>
                  <h4 className="text-sm font-extrabold text-zinc-850">Policy Issuance</h4>
                  <p className="text-xs text-[#6B6B6B] font-semibold max-w-xs leading-relaxed">
                    Instant policy issuance with full documentation support (24-48 hrs).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Seamless Claims Experience Section */}
        <section className="py-14 md:py-20 bg-[#FFFFFF] border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#F5F5F3] rounded-3xl border border-[#E5E5E0] p-8 md:p-12 text-center space-y-8">
              {/* Header */}
              <div className="max-w-3xl mx-auto space-y-2">
                <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider block bg-[#FFFFFF] border border-[#E5E5E0] rounded-full px-3 py-1 w-max mx-auto shadow-xs">
                  Claims Assistance
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
                  Seamless Claims Experience
                </h2>
                <p className="text-sm sm:text-base text-[#6B6B6B] font-semibold max-w-2xl mx-auto">
                  We don't just sell policies; we settle claims. Our dedicated team ensures you get what you were promised.
                </p>
              </div>

              {/* Grid of 4 Claims Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E0] shadow-xs hover:shadow-md transition-all text-left space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#292929]">Dedicated Manager</h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed font-semibold">
                    A single point of contact for all your claim-related queries.
                  </p>
                </div>

                <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E0] shadow-xs hover:shadow-md transition-all text-left space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#292929]">Documentation Support</h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed font-semibold">
                    Complete handholding with paperwork to avoid rejections.
                  </p>
                </div>

                <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E0] shadow-xs hover:shadow-md transition-all text-left space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#292929]">Insurer Coordination</h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed font-semibold">
                    We talk to the insurers so you can focus on your business.
                  </p>
                </div>

                <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E0] shadow-xs hover:shadow-md transition-all text-left space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F5F3] text-[#171717] flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#292929]">Escalation Support</h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed font-semibold">
                    Priority resolution channels for complex or delayed claims.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Benefits Section */}
        <section className="py-14 md:py-20 bg-[#F5F5F3] border-b border-[#E5E5E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
            {/* Header */}
            <div className="max-w-3xl mx-auto space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight uppercase">
                Benefits
              </h2>
              <p className="text-sm sm:text-base text-[#6B6B6B] font-semibold max-w-2xl mx-auto">
                Why choose our general insurance solutions
              </p>
            </div>

            {/* Grid of 5 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between items-center text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F3] text-[#171717] flex items-center justify-center mx-auto">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-black text-[#292929] uppercase tracking-tight">
                  Complete Business Protection
                </h3>
                <p className="text-[10px] text-[#6B6B6B] leading-relaxed font-semibold">
                  Protect employees, assets, operations, and liabilities under one roof.
                </p>
              </div>

              <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between items-center text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F3] text-[#171717] flex items-center justify-center mx-auto">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-black text-[#292929] uppercase tracking-tight">
                  Regulatory Compliance
                </h3>
                <p className="text-[10px] text-[#6B6B6B] leading-relaxed font-semibold">
                  Ensure compliance with Indian labor laws, IRDAI, and general regulations.
                </p>
              </div>

              <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between items-center text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F3] text-[#171717] flex items-center justify-center mx-auto">
                  <Wallet className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-black text-[#292929] uppercase tracking-tight">
                  Financial Security
                </h3>
                <p className="text-[10px] text-[#6B6B6B] leading-relaxed font-semibold">
                  Prevent large financial losses and protect revenue streams.
                </p>
              </div>

              <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between items-center text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F3] text-[#171717] flex items-center justify-center mx-auto">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-black text-[#292929] uppercase tracking-tight">
                  Employee Satisfaction
                </h3>
                <p className="text-[10px] text-[#6B6B6B] leading-relaxed font-semibold">
                  Improve retention with strong employee benefits and wellness programs.
                </p>
              </div>

              <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between items-center text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F3] text-[#171717] flex items-center justify-center mx-auto">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-black text-[#292929] uppercase tracking-tight">
                  Pan India Service
                </h3>
                <p className="text-[10px] text-[#6B6B6B] leading-relaxed font-semibold">
                  On-ground support across all major cities and states — from policy issuance to claims, wherever your business operates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Disclaimer Box */}
        <div className="max-w-5xl mx-auto px-4 mt-12 mb-6">
          <div className="bg-[#F4C430]/50 border border-[#F4C430] rounded-2xl p-5 text-xs text-[#171717] leading-relaxed font-semibold text-center">
            Disclaimer: Information and premium quotes provided are for general guidance and are subject to change. Please verify all details with the respective insurance providers before making a final decision.
          </div>
        </div>

        {/* 10. Frequently Asked Questions Section */}
        <section className="py-14 md:py-20 bg-[#FFFFFF] border-b border-[#E5E5E0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Header */}
            <div className="text-center space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight uppercase">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {[
                {
                  q: "Is general insurance mandatory in India?",
                  a: "Yes, certain policies like Workmen's Compensation and Commercial Third-Party Motor insurance are legally mandatory under Indian labor and transport laws."
                },
                {
                  q: "Who should buy general insurance?",
                  a: "Any registered business enterprise—from startups and SMEs to large corporations—that has employees, physical offices, or faces operational/legal liabilities."
                },
                {
                  q: "How fast can policy be issued?",
                  a: "Depending on the risk complexity, standard policies like Group Health or Fire can be issued in 24 to 48 hours once documentation is complete."
                },
                {
                  q: "What is the typical claim settlement ratio?",
                  a: "Our partner insurers maintain claim settlement ratios of over 90% for general lines. We provide dedicated assistance to expedite claims."
                },
                {
                  q: "Can I customize coverage for my industry?",
                  a: "Absolutely. We specialize in tailoring custom packages combining property, liability, and group health policies specifically optimized for your industry sector."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border border-[#E5E5E0] rounded-2xl overflow-hidden hover:border-[#F4C430] transition-all text-left"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex justify-between items-center px-6 py-4.5 bg-[#F5F5F3] text-sm font-extrabold text-[#292929] focus:outline-none hover:bg-[#F5F5F3] transition-colors"
                  >
                    <span>{item.q}</span>
                    <span className="text-[#171717] font-bold text-lg select-none">
                      {openFaqIndex === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-6 py-4 border-t border-zinc-150 bg-[#FFFFFF] text-xs sm:text-sm text-[#6B6B6B] font-semibold leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Bottom CTA Banner */}
        <section className="py-14 bg-[#FFF8D6] text-[#171717] text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Secure Your Enterprise Today
            </h2>
            <p className="text-sm sm:text-base text-[#171717]/90 max-w-2xl mx-auto leading-relaxed text-center">
              Consult with our certified General Insurance experts to structure a highly compliant, cost-effective policy that covers your business end-to-end.
            </p>
            <div
              className="inline-block px-8 py-3.5 rounded-xl font-bold bg-[#F4C430] text-[#171717] shadow-lg select-none"
            >
              Get Free Consultation
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
