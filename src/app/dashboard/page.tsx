"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  BookOpen,
  TrendingUp, Settings,
  LogOut, FileText, Building2,
  Layers, IndianRupee,
  ShieldCheck,
  Bell, Calculator as CalcIcon,
  HelpCircle,
  QrCode,
  Smartphone,
  ChevronRight
} from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [fullUserProfile, setFullUserProfile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Authenticate user session
  useEffect(() => {
    const active = sessionStorage.getItem("bharatimall_active_user");
    if (!active) {
      router.push("/login");
      return;
    }

    try {
      const parsedUser = JSON.parse(active);
      setCurrentUser(parsedUser);

      // Find full profile details from registration records
      const usersJSON = localStorage.getItem("bharatimall_users");
      const users = usersJSON ? JSON.parse(usersJSON) : [];
      const profile = users.find((u: any) => u.email.toLowerCase() === parsedUser.email.toLowerCase());
      if (profile) {
        setFullUserProfile(profile);
      }
    } catch (e) {
      console.error(e);
      router.push("/login");
    }
    
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("bharatimall_active_user");
    window.location.href = "/";
  };

  if (isLoading || !currentUser) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-gray-500">
        <div className="animate-pulse flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full border-t-2 border-[#1CADA3] animate-spin mb-2" />
          <span className="text-xs font-semibold">Verifying B2C session...</span>
        </div>
      </div>
    );
  }

  const firstName = currentUser.fullName ? currentUser.fullName : "Prasad Vasant Mall";

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: User },
    { id: "profile", name: "My Profile", icon: Settings },
    { id: "products", name: "Our Products", icon: BookOpen, hasArrow: true },
    { id: "portfolio", name: "Portfolio", icon: Layers },
    { id: "calculator", name: "Calculator", icon: CalcIcon },
    { id: "compare", name: "Compare Products", icon: TrendingUp },
    { id: "reports", name: "Reports", icon: FileText },
    { id: "help", name: "Help & Support", icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-800 flex flex-col lg:flex-row font-sans">
      
      {/* SIDEBAR PANEL */}
      <aside className="w-full lg:w-64 bg-white border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-between shrink-0 shadow-sm z-30">
        <div>
          {/* Brand header */}
          <div className="h-20 border-b border-gray-100 px-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#2076C7]/15 flex items-center justify-center font-black text-[#2076C7] text-sm border border-[#2076C7]/20 shadow-sm">
                IA
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black tracking-tight text-gray-800 leading-tight">Infinity</span>
                <span className="text-[10px] font-bold text-[#1CADA3] uppercase tracking-widest leading-none mt-0.5">
                  Arthvishva
                </span>
              </div>
            </Link>

            {/* Mobile menu toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1 rounded hover:bg-slate-100 text-gray-600"
            >
              <Smartphone className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className={`p-4 space-y-1 ${mobileMenuOpen ? "block" : "hidden lg:block"}`}>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#1CADA3] text-white shadow-sm"
                      : "text-gray-500 hover:text-[#2076C7] hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </div>
                  {item.hasArrow && <ChevronRight className="w-3.5 h-3.5 opacity-60" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Sidebar QR Card & Logout */}
        <div className={`p-4 border-t border-gray-100 space-y-4 bg-slate-50/40 ${mobileMenuOpen ? "block" : "hidden lg:block"}`}>
          
          {/* App Stores QR Card */}
          <div className="bg-white border border-gray-150 rounded-xl p-3.5 text-center shadow-xs space-y-2">
            <div className="flex gap-2 justify-center mb-1">
              <span className="text-[9px] font-extrabold uppercase text-[#2076C7] bg-[#2076C7]/10 px-2 py-0.5 rounded border border-[#2076C7]/15">
                Android
              </span>
              <span className="text-[9px] font-extrabold uppercase text-gray-400 bg-slate-100 px-2 py-0.5 rounded border border-gray-200">
                iOS
              </span>
            </div>
            
            <div className="w-24 h-24 mx-auto bg-slate-100 border border-gray-200 rounded flex items-center justify-center p-1.5">
              <QrCode className="w-full h-full text-zinc-700" />
            </div>

            <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider leading-none">
              Scan for Android App
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold text-gray-600 border border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all cursor-pointer bg-white shadow-xs"
          >
            <LogOut className="w-3.5 h-3.5" />
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT PANE */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        
        {/* Top dashboard header */}
        <header className="h-20 bg-white border-b border-gray-250/60 px-6 sm:px-8 flex items-center justify-between shrink-0 shadow-xs z-20">
          <div className="text-left">
            <h2 className="text-base font-black text-gray-800">Dashboard</h2>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-slate-50 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
            </button>

            <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
              <div className="w-8 h-8 rounded-full bg-[#2076C7] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                {firstName.charAt(0).toUpperCase()}
              </div>
              <span className="text-xs font-bold text-gray-700 hidden sm:inline">{firstName.split(" ")[0]}</span>
            </div>
          </div>
        </header>

        {/* Dashboard Panels */}
        <div className="p-6 sm:p-8 max-w-[1400px] w-full mx-auto space-y-6 sm:space-y-8">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === "dashboard" && (
            <div className="space-y-6 sm:space-y-8 animate-fade-in text-left">
              
              {/* Flat Teal Welcome Accent banner */}
              <div className="relative bg-[#1CADA3] rounded-2xl p-6 text-white shadow-sm flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    Welcome back, {firstName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 mt-1 font-medium">
                    Track and manage your unlisted shares portfolio in real-time
                  </p>
                </div>
                <div className="text-xs font-mono font-bold text-white/90 bg-black/15 px-3 py-1.5 rounded-lg border border-white/10 w-fit shrink-0">
                  ID: CUS_0001
                </div>
              </div>

              {/* Stats Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                
                {/* Section 1: Unlisted Shares */}
                <div className="bg-white border border-gray-150 rounded-2xl p-5 shadow-xs space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#2076C7]/10 flex items-center justify-center shadow-xs">
                      <Building2 className="w-4 h-4 text-[#2076C7]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-gray-800 leading-tight">Unlisted Shares</h4>
                      <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Net Value & Index Performance</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Inner Card 1 */}
                    <div className="bg-[#E8F6FA] border border-blue-100 rounded-xl p-4.5 text-left">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                        <IndianRupee className="w-3.5 h-3.5 text-[#2076C7]" /> Net Portfolio Value
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-gray-800 mt-2">₹85.00</h3>
                      <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5 mt-2">
                        +0.00% since inception
                      </span>
                    </div>

                    {/* Inner Card 2 */}
                    <div className="bg-teal-50/50 border border-teal-100 rounded-xl p-4.5 text-left">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-[#1CADA3]" /> Index Value
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-gray-800 mt-2">10640.24</h3>
                      <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5 mt-2">
                        +0.00% current performance
                      </span>
                    </div>
                  </div>
                </div>

                {/* Section 2: Mutual Funds */}
                <div className="bg-white border border-gray-150 rounded-2xl p-5 shadow-xs space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#1CADA3]/10 flex items-center justify-center shadow-xs">
                      <BookOpen className="w-4 h-4 text-[#1CADA3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-gray-800 leading-tight">Mutual Funds</h4>
                      <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Net Value & Performance Summary</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Inner Card 1 */}
                    <div className="bg-[#E8F6FA] border border-blue-100 rounded-xl p-4.5 text-left">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                        <IndianRupee className="w-3.5 h-3.5 text-[#1CADA3]" /> Net Portfolio Value
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-gray-800 mt-2">₹198.42</h3>
                      <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5 mt-2">
                        +0.79% total return
                      </span>
                    </div>

                    {/* Inner Card 2 */}
                    <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-4.5 text-left">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-[#F59E0B]" /> Active SIPs / Schemes
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-gray-800 mt-2">1</h3>
                      <span className="text-[10px] text-orange-600 font-bold flex items-center gap-0.5 mt-2">
                        ₹-1.58 total gains
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Lower Section Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                
                {/* Chart Box 1: Asset Allocation */}
                <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-xs space-y-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#2076C7]/10 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-[#2076C7]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-gray-800">Asset Allocation</h4>
                      <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Portfolio diversification breakdown</p>
                    </div>
                  </div>

                  {/* Clean SVG Donut Chart representing Asset Allocation */}
                  <div className="relative h-64 flex items-center justify-center">
                    <svg className="w-48 h-48 transform -rotate-90">
                      {/* Donut background slice representing Unlisted Shares (100% blue) */}
                      <circle
                        cx="96"
                        cy="96"
                        r="70"
                        stroke="#2076C7"
                        strokeWidth="24"
                        fill="transparent"
                        strokeDasharray="440"
                        strokeDashoffset="0"
                        className="transition-all duration-500 hover:opacity-90"
                      />
                      {/* Innermost circle matching parent page background for Donut hole */}
                      <circle cx="96" cy="96" r="58" fill="white" />
                    </svg>

                    <div className="absolute flex flex-col items-center justify-center text-center">
                      <span className="text-2xl font-black text-gray-800">100%</span>
                      <span className="text-[9px] uppercase font-bold text-gray-400 mt-0.5">Unlisted Shares</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#2076C7]" />
                      <span className="text-xs font-semibold text-gray-600">Unlisted Shares</span>
                      <span className="text-xs font-bold text-gray-800">100%</span>
                    </div>
                  </div>
                </div>

                {/* Chart Box 2: Portfolio Performance */}
                <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-xs space-y-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#1CADA3]/10 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-[#1CADA3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-gray-800">Portfolio Performance</h4>
                      <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Last 6 months growth analysis</p>
                    </div>
                  </div>

                  {/* Clean SVG Area Chart representing growth line curve */}
                  <div className="h-64 flex items-end">
                    <svg className="w-full h-full" viewBox="0 0 300 150">
                      {/* Gradient fill */}
                      <defs>
                        <linearGradient id="svgGraphGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#1CADA3" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#1CADA3" stopOpacity="0.01" />
                        </linearGradient>
                      </defs>

                      {/* Area Fill */}
                      <path
                        d="M 0 150 L 50 120 L 100 130 L 150 90 L 200 100 L 250 50 L 300 60 L 300 150 Z"
                        fill="url(#svgGraphGrad)"
                      />

                      {/* Sparklines Line */}
                      <path
                        d="M 0 150 L 50 120 L 100 130 L 150 90 L 200 100 L 250 50 L 300 60"
                        fill="none"
                        stroke="#1CADA3"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Guide gridlines */}
                      <line x1="0" y1="50" x2="300" y2="50" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="3 3" />
                      <line x1="0" y1="100" x2="300" y2="100" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="3 3" />

                      {/* Reference markers */}
                      <circle cx="250" cy="50" r="4.5" fill="#2076C7" stroke="white" strokeWidth="1.5" />
                    </svg>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-4 text-xs font-semibold text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2076C7]" /> Value
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1CADA3]" /> Returns
                    </span>
                  </div>
                </div>

              </div>

              {/* Secure banner Footer */}
              <div className="pt-6 border-t border-gray-150 text-center">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Secure & Encrypted • Powered by Infinity Arthvishva
                </p>
              </div>

            </div>
          )}

          {/* TAB 2: MY PROFILE */}
          {activeTab === "profile" && (
            <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto animate-fade-in text-left space-y-6 shadow-xs">
              
              <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#2076C7] to-[#1CADA3] text-white flex items-center justify-center text-xl font-bold shadow-sm">
                  {firstName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-800">{currentUser.fullName || "Aditya"}</h3>
                  <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider flex items-center gap-1.5 mt-0.5">
                    Verified Customer Profile
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                
                <div>
                  <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Full Name</span>
                  <div className="bg-slate-50 border border-gray-100 p-3 rounded-lg text-gray-700 font-bold">
                    {fullUserProfile?.fullName || currentUser.fullName}
                  </div>
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Email Address</span>
                  <div className="bg-slate-50 border border-gray-100 p-3 rounded-lg text-gray-700 font-bold truncate">
                    {fullUserProfile?.email || currentUser.email}
                  </div>
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Mobile Number</span>
                  <div className="bg-slate-50 border border-gray-100 p-3 rounded-lg text-gray-700 font-bold font-mono">
                    {fullUserProfile?.mobileNumber || "+91 98765 43210"}
                  </div>
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Referral Code Used</span>
                  <div className="bg-slate-50 border border-gray-100 p-3 rounded-lg text-gray-700 font-bold font-mono">
                    {fullUserProfile?.referralCode || "N/A"}
                  </div>
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Registered State</span>
                  <div className="bg-slate-50 border border-gray-100 p-3 rounded-lg text-gray-700 font-bold">
                    {fullUserProfile?.state || "Maharashtra"}
                  </div>
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Registered City</span>
                  <div className="bg-slate-50 border border-gray-100 p-3 rounded-lg text-gray-700 font-bold">
                    {fullUserProfile?.city || "Pune"}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: OUR PRODUCTS */}
          {activeTab === "products" && (
            <div className="space-y-6 animate-fade-in text-left bg-white border border-gray-150 rounded-2xl p-6 shadow-xs">
              <h3 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#2076C7] rounded-full inline-block" />
                Available B2C Investment Products
              </h3>
              <p className="text-xs text-gray-500">
                Explore pre-screened mutual funds, unlisted shares, and wealth packages.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <div className="p-4 border border-gray-100 rounded-xl space-y-2 bg-slate-50/50">
                  <h4 className="text-xs font-bold text-gray-800">Unlisted Share Indices</h4>
                  <p className="text-[10px] text-gray-500">Access pre-IPO allocations of high-growth companies.</p>
                  <Link href="/products" className="inline-block text-[10px] font-bold text-[#2076C7] hover:underline">
                    View Catalog →
                  </Link>
                </div>
                <div className="p-4 border border-gray-100 rounded-xl space-y-2 bg-slate-50/50">
                  <h4 className="text-xs font-bold text-gray-800">Mutual Fund Portfolios</h4>
                  <p className="text-[10px] text-gray-500">Curated mutual funds adjusted for tax savings and returns.</p>
                  <Link href="/products" className="inline-block text-[10px] font-bold text-[#2076C7] hover:underline">
                    View Schemes →
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CALCULATOR */}
          {activeTab === "calculator" && (
            <div className="bg-white border border-gray-150 rounded-2xl p-6 max-w-xl mx-auto animate-fade-in text-left space-y-6 shadow-xs">
              <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#1CADA3] rounded-full inline-block" />
                SIP & Lumpsum Investment Calculator
              </h3>
              
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-gray-500 font-bold mb-1.5">Monthly SIP Amount (₹)</label>
                  <input
                    type="number"
                    defaultValue={5000}
                    className="w-full bg-slate-50 border border-gray-200 rounded-lg p-2.5 font-bold focus:outline-none focus:border-[#1CADA3]"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 font-bold mb-1.5">Expected Return Rate (% p.a.)</label>
                  <input
                    type="number"
                    defaultValue={12}
                    className="w-full bg-slate-50 border border-gray-200 rounded-lg p-2.5 font-bold focus:outline-none focus:border-[#1CADA3]"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 font-bold mb-1.5">Tenure (Years)</label>
                  <input
                    type="number"
                    defaultValue={10}
                    className="w-full bg-slate-50 border border-gray-200 rounded-lg p-2.5 font-bold focus:outline-none focus:border-[#1CADA3]"
                  />
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl space-y-1">
                  <span className="text-[10px] uppercase font-bold text-emerald-600">Estimated Portfolio Value</span>
                  <h4 className="text-xl font-black text-gray-850">₹11,61,695.00</h4>
                  <span className="text-[9px] text-gray-400 block mt-0.5">Total Invested: ₹6,00,000 | Est. Wealth Gain: ₹5,61,695</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: HELP & SUPPORT */}
          {activeTab === "help" && (
            <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto animate-fade-in text-left space-y-6 shadow-xs">
              <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#2076C7] rounded-full inline-block" />
                Customer Support Helpdesk
              </h3>
              
              <div className="space-y-4 text-xs leading-relaxed text-gray-600">
                <p>
                  Need assistance with your unlisted shares index, mutual fund portfolios, or portal settings? Get in touch with our B2C advisory team.
                </p>

                <div className="p-4 border border-gray-100 rounded-xl space-y-2 bg-slate-50/50">
                  <h5 className="font-bold text-gray-800">Headquarters Support</h5>
                  <p>📍 Location: Bharti Share Market Office, Pune, India</p>
                  <p>📞 Phone Support: +91 20 6712 1199</p>
                  <p>✉️ Email Care: support@infinityarthvishva.com</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

    </div>
  );
}
