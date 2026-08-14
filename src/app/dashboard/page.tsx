'use client';

import React, { useState, useEffect, Suspense, useMemo, useCallback } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from 'framer-motion';
import { 
  Building2,
  TrendingUp, 
  IndianRupee,
  ShieldCheck,
  CheckCircle, 
  BookOpen,
  PieChart as PieChartIcon,
  Percent,
  Layers,
  Banknote,
  FolderKanban
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const tooltipStyle = {
  borderRadius: '16px',
  border: 'none',
  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  fontSize: '13px',
  padding: '10px 16px',
  background: 'white',
  fontWeight: 500,
} as React.CSSProperties;

function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "dashboard";
  
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [fullUserProfile, setFullUserProfile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

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

  const [chartReady, setChartReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setChartReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !currentUser) {
    return (
      <div className="min-h-full flex items-center justify-center text-gray-500 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC]">
        <div className="animate-pulse flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full border-t-2 border-[#1CADA3] animate-spin mb-2" />
          <span className="text-xs font-semibold">Loading dashboard...</span>
        </div>
      </div>
    );
  }

  const firstName = currentUser.fullName ? currentUser.fullName.split(' ')[0] : "Prasad";

  // Recharts Data (Colorful mock data)
  const pieData = [
    { name: 'Unlisted Shares', value: 45, color: '#2076C7' },
    { name: 'Mutual Funds', value: 30, color: '#1CADA3' },
    { name: 'Bonds', value: 15, color: '#F59E0B' },
    { name: 'Cash Allocation', value: 10, color: '#8B5CF6' }
  ];

  const trendData = [
    { month: 'Jan', value: 0, returns: 0 },
    { month: 'Feb', value: 0, returns: 0 },
    { month: 'Mar', value: 0, returns: 0 },
    { month: 'Apr', value: 0, returns: 0 },
    { month: 'May', value: 0, returns: 0 },
    { month: 'Jun', value: 0, returns: 0 }
  ];

  return (
    <div className="flex-1 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 lg:py-8 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC] min-h-screen font-sans w-full text-left">
      <div className="w-full max-w-[1600px] mx-auto animate-fade-in">
        {/* TAB 1: OVERVIEW */}
        {activeTab === "dashboard" && (
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-gradient-to-r from-[#2076C7] to-[#1CADA3] rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 text-white shadow-lg"
            >
              <div className="absolute bottom-4 right-4 sm:right-6 text-xs sm:text-sm font-mono text-white/90 bg-black/20 px-2 sm:px-3 py-1 rounded-md border border-white/10">
                ID: <span className="text-white font-bold ml-1">CUS_0001</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 pr-16 sm:pr-20">
                Welcome back, {firstName}!
              </h2>
              <p className="text-sm sm:text-base text-white/90">
                Track and manage your Bharati Mall portfolio in real-time
              </p>
            </motion.div>

            {/* Portfolio Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Unlisted Shares Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: '#2076C715' }}>
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#2076C7' }} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800">Unlisted Shares</h3>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">Net Value & Index Performance</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-blue-100">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <IndianRupee className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2076C7]" />
                      <p className="text-[10px] sm:text-xs text-gray-600 font-medium">Net Portfolio Value</p>
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">₹0.00</p>
                    <div className="mt-1.5 sm:mt-2 flex items-center gap-1.5 sm:gap-2">
                      <span className="text-[10px] sm:text-xs font-semibold text-emerald-600">+0.00%</span>
                      <span className="text-[9px] sm:text-[10px] text-gray-400">since inception</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-teal-50 to-teal-100/30 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-teal-100">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1CADA3]" />
                      <p className="text-[10px] sm:text-xs text-gray-600 font-medium">Index Value</p>
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">0.00</p>
                    <div className="mt-1.5 sm:mt-2 flex items-center gap-1.5 sm:gap-2">
                      <span className="text-[10px] sm:text-xs font-semibold text-emerald-600">+0.00%</span>
                      <span className="text-[9px] sm:text-[10px] text-gray-400">current performance</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mutual Funds Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: '#1CADA315' }}>
                    <FolderKanban className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#1CADA3' }} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800">Mutual Funds</h3>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">Net Value & Performance Summary</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100/30 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-teal-100">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <IndianRupee className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1CADA3]" />
                      <p className="text-[10px] sm:text-xs text-gray-600 font-medium">Net Portfolio Value</p>
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">₹0.00</p>
                    <div className="mt-1.5 sm:mt-2 flex items-center gap-1.5 sm:gap-2">
                      <span className="text-[10px] sm:text-xs font-semibold text-emerald-600">+0.00%</span>
                      <span className="text-[9px] sm:text-[10px] text-gray-400">total return</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100/30 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-orange-100">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F59E0B]" />
                      <p className="text-[10px] sm:text-xs text-gray-600 font-medium">Active SIPs / Schemes</p>
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">0</p>
                    <div className="mt-1.5 sm:mt-2 flex items-center gap-1.5 sm:gap-2">
                      <span className="text-[10px] sm:text-xs font-semibold text-[#F59E0B]">₹0.00</span>
                      <span className="text-[9px] sm:text-[10px] text-gray-400">total gains</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-4 sm:mb-6 md:mb-8">
              {/* Asset Allocation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3 mb-4 sm:mb-5 md:mb-6">
                  <div className="text-center xs:text-left">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto xs:mx-0 shadow-sm" style={{ backgroundColor: '#2076C715' }}>
                      <PieChartIcon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#2076C7' }} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-3">Asset Allocation</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Portfolio diversification breakdown</p>
                  </div>
                </div>

                <div className="h-[250px] xs:h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] w-full">
                  {chartReady ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius="30%"
                          outerRadius="75%"
                          paddingAngle={3}
                          dataKey="value"
                          stroke="white"
                          strokeWidth={2}
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color}>
                              <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin={`${index * 0.1}s`} />
                            </Cell>
                          ))}
                        </Pie>
                        <RechartsTooltip contentStyle={tooltipStyle} />
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-12 border-2 sm:border-3 border-[#2076C7] border-t-transparent" />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
                  {pieData.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 sm:gap-2 p-1 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shadow-sm" style={{ backgroundColor: item.color }} />
                      <span className="text-[10px] sm:text-xs text-gray-600 flex-1 font-medium truncate">{item.name}</span>
                      <span className="text-[10px] sm:text-xs font-bold text-gray-800">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Portfolio Performance */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3 mb-4 sm:mb-5 md:mb-6">
                  <div className="text-center xs:text-left">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">Portfolio Performance</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Last 6 months growth analysis</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: '#2076C7' }} />
                      <span className="text-[10px] sm:text-xs text-gray-500">Value</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: '#1CADA3' }} />
                      <span className="text-[10px] sm:text-xs text-gray-500">Returns</span>
                    </div>
                  </div>
                </div>
                <div className="h-[250px] xs:h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData}>
                      <defs>
                        <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2076C7" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#2076C7" stopOpacity={0.02} />
                        </linearGradient>
                        <linearGradient id="returnsGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#1CADA3" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="#1CADA3" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" strokeWidth={0.5} />
                      <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6B7280' }} axisLine={false} tickLine={false} />
                      <YAxis yAxisId="left" tick={{ fontSize: 10, fill: '#6B7280' }} axisLine={false} tickLine={false} tickFormatter={(value) => `₹${value}`} />
                      <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10, fill: '#6B7280' }} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
                      <RechartsTooltip contentStyle={tooltipStyle} />
                      <Area yAxisId="left" type="monotone" dataKey="value" stroke="#2076C7" fill="url(#portfolioGradient)" strokeWidth={2} name="Portfolio Value" />
                      <Area yAxisId="right" type="monotone" dataKey="returns" stroke="#1CADA3" fill="url(#returnsGradient)" strokeWidth={2} name="Returns %" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* TAB 2: MY PROFILE */}
        {activeTab === "profile" && (
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-gradient-to-r from-[#2076C7] to-[#1CADA3] rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 text-white shadow-lg"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 pr-16 sm:pr-20">
                My Profile
              </h2>
              <p className="text-sm sm:text-base text-white/90">
                Complete your verification to unlock all features.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-gray-100 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Onboarding Progress</span>
                <span className="font-bold text-emerald-600 text-xs">0%</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#1CADA3] h-full" style={{ width: "0%" }} />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg flex flex-col">
                <div className="h-28 bg-[#1CADA3] relative flex items-end justify-center">
                  <div className="w-20 h-20 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-md translate-y-10 flex items-center justify-center p-0.5 z-10">
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#2076C7] to-[#1CADA3] text-white flex items-center justify-center text-2xl font-bold">
                      {firstName.charAt(0).toUpperCase()}
                    </div>
                  </div>
                </div>
                <div className="pt-14 pb-6 px-6 text-center space-y-4">
                  <h4 className="text-sm font-extrabold text-gray-800">Contact</h4>
                  <div className="text-left space-y-3 text-xs leading-normal border-t border-gray-100 pt-4">
                    <div>
                      <span className="block text-[9px] uppercase font-bold text-gray-400">Mobile Number</span>
                      <span className="font-bold text-gray-700">{fullUserProfile?.mobileNumber || "-"}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase font-bold text-gray-400">Email</span>
                      <span className="font-bold text-gray-700 break-all">{fullUserProfile?.email || currentUser.email}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg space-y-5 flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <h4 className="text-sm font-extrabold text-gray-800">Personal Details</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs text-left">
                    <div>
                      <span className="block text-[9px] uppercase font-extrabold text-gray-400 mb-1.5 tracking-widest">Full Name</span>
                      <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs text-gray-800 font-bold shadow-sm">
                        {fullUserProfile?.fullName || currentUser.fullName}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="block text-[9px] uppercase font-extrabold text-gray-400 mb-1.5 tracking-widest">Email Address</span>
                      <div className="relative w-full shadow-sm">
                        <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs text-gray-800 font-bold pr-10">
                          {fullUserProfile?.email || currentUser.email}
                        </div>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-full p-0.5 border border-emerald-100 shadow-sm">
                          <CheckCircle className="w-3.5 h-3.5 fill-emerald-50" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* OTHER TABS */}
        {["investments", "finance", "insurance"].includes(activeTab) && (
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-gradient-to-r from-[#2076C7] to-[#1CADA3] rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 text-white shadow-lg"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 pr-16 sm:pr-20 capitalize">
                Bharati Mall {activeTab}
              </h2>
              <p className="text-sm sm:text-base text-white/90">
                Explore our curated {activeTab} offerings tailored to your needs.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {activeTab === "investments" && (
                <>
                  <div className="p-5 border border-blue-100 rounded-xl space-y-3 bg-[#E8F6FA] hover:shadow-lg transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-[#2076C7]/15 flex items-center justify-center text-[#2076C7]">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-black text-gray-800">Unlisted IPOs</h4>
                    <p className="text-xs text-gray-500">Pre-IPO allotments in highly anticipated tech startups.</p>
                  </div>
                  <div className="p-5 border border-blue-100 rounded-xl space-y-3 bg-white shadow-md hover:shadow-lg transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-[#1CADA3]/15 flex items-center justify-center text-[#1CADA3]">
                      <PieChartIcon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-black text-gray-800">Equity Funds</h4>
                    <p className="text-xs text-gray-500">Diversified equity funds managed by Bharati Mall experts.</p>
                  </div>
                </>
              )}
              {activeTab === "finance" && (
                <>
                  <div className="p-5 border border-emerald-100 rounded-xl space-y-3 bg-emerald-50 hover:shadow-lg transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <Banknote className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-black text-gray-800">Quick Loans</h4>
                    <p className="text-xs text-gray-500">Instant approval loans powered by Bharati Mall partnerships.</p>
                  </div>
                  <div className="p-5 border border-emerald-100 rounded-xl space-y-3 bg-white shadow-md hover:shadow-lg transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-black text-gray-800">Credit Health Check</h4>
                    <p className="text-xs text-gray-500">Monitor your CIBIL score and get customized financing rates.</p>
                  </div>
                </>
              )}
              {activeTab === "insurance" && (
                <>
                  <div className="p-5 border border-orange-100 rounded-xl space-y-3 bg-orange-50 hover:shadow-lg transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-black text-gray-800">Life Insurance</h4>
                    <p className="text-xs text-gray-500">Term plans offering up to 100x coverage at minimal premiums.</p>
                  </div>
                  <div className="p-5 border border-orange-100 rounded-xl space-y-3 bg-white shadow-md hover:shadow-lg transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-black text-gray-800">Health Insurance</h4>
                    <p className="text-xs text-gray-500">Cashless treatments across 10,000+ network hospitals.</p>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="mt-6 sm:mt-8 pt-4 sm:pt-6 text-center border-t border-gray-200"
        >
          <p className="text-[10px] sm:text-xs text-gray-400 flex items-center justify-center gap-1 sm:gap-2">
            <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" />
            Secure & Encrypted • Powered by Bharati Mall
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DashboardContent />
        </Suspense>
    );
}
