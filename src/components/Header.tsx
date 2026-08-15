"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  X, 
  Menu, 
  User,
  LogOut,
  ChevronDown,
  ChevronRight,
  Shield,
  HeartHandshake,
  Activity,
  Car,
  Plane,
  Flame,
  Ship,
  Building2,
  ShieldAlert,
  Dog,
  Search
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const loansOptions = [
  { label: "Personal Loan", href: "/products/personal-loan" },
  { label: "Business Loan", href: "/products/business-loan" },
  { label: "Education Loan", href: "/products/education-loan" },
  { label: "Vehicle Loan", href: "/products/vehicle-loan" },
  { label: "Loan Against Securities", href: "/products/loan-against-securities" },
  { label: "Credit cards", href: "/products/credit-card" },
];

const insuranceOptions = [
  { label: "Term Insurance", href: "/products/term-insurance" },
  { label: "Health Insurance", href: "/products/health-insurance" },
  { label: "Motor Insurance", href: "/products/motor-insurance" },
  { label: "Travel Insurance", href: "/products/travel-insurance" },
];

const mutualFundOptions = [
  { label: "Mutual Fund", href: "/products/mutual-funds" },
];

const investmentOptions = [
  { label: "NPS", href: "/products/nps" },
   { label: "FD", href: "/products/fd" },
];

const unlistedOptions = [
  { label: "Unlisted", href: "/products/unlisted" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState<{ fullName: string; email: string } | null>(null);

  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isLoansOpen, setIsLoansOpen] = useState(false);
  const [isInsuranceOpen, setIsInsuranceOpen] = useState(false);
  const [isMutualFundOpen, setIsMutualFundOpen] = useState(false);
  const [isInvestmentOpen, setIsInvestmentOpen] = useState(false);
  const [isUnlistedOpen, setIsUnlistedOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const active = sessionStorage.getItem("bharatimall_active_user");
    if (active) {
      try {
        setUser(JSON.parse(active));
      } catch (e) {
        console.error("Failed to parse active user session", e);
      }
    }
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("bharatimall_active_user");
    setUser(null);
    window.location.href = "/"; // Redirect and reload to clear state
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Media Center", href: "/media-center" },
    { name: "Calculator", href: "/calculator" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-linear-to-br from-[#E8F6FA] via-[#F0FAFB] to-[#E9F8F6] backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300 border-b border-[#1CADA3]/20 font-sans">
      <div className="max-w-[1600px] container mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between lg:justify-center lg:gap-8 xl:gap-10">
        
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center group shrink-0">
          <img 
            src="/main_logo.webp" 
            alt="Bharti Finance Mall Logo" 
            className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain transition-transform duration-350 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3" ref={dropdownRef}>
          
          {/* Home & About Us */}
          {navLinks.slice(0, 2).map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="relative group rounded-lg overflow-hidden cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 rounded-lg bg-linear-to-r from-[#2076C7]/10 to-[#1CADA3]/10 opacity-0 group-hover:opacity-100 blur-sm"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                />
                <Link
                  href={link.href}
                  className={`relative z-10 px-2 xl:px-3 py-2 font-semibold transition-colors duration-300 group-hover:text-[#2076C7] text-sm xl:text-base whitespace-nowrap ${
                    isActive ? "text-[#2076C7]" : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
                <span className={`absolute left-0 bottom-0 h-0.5 bg-linear-to-r from-[#2076C7] to-[#1CADA3] transition-all duration-300 group-hover:w-full ${
                  isActive ? "w-full" : "w-0"
                }`} />
              </motion.div>
            );
          })}

          {/* Products Dropdown */}
          <motion.div
            className="relative"
            onMouseEnter={() => setIsProductOpen(true)}
            onMouseLeave={() => {
              setIsProductOpen(false);
              setIsLoansOpen(false);
              setIsInsuranceOpen(false);
              setIsMutualFundOpen(false);
              setIsInvestmentOpen(false);
              setIsUnlistedOpen(false);
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="relative group rounded-lg overflow-hidden cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 rounded-lg bg-linear-to-r from-[#2076C7]/10 to-[#1CADA3]/10 opacity-0 group-hover:opacity-100 blur-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 0, scale: 0.95 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
              />
              <button className={`relative z-10 px-2 xl:px-3 py-2 font-semibold transition-colors duration-300 group-hover:text-[#2076C7] flex items-center space-x-1 text-sm xl:text-base cursor-pointer ${
                isProductOpen || pathname.startsWith("/products") ? "text-[#2076C7]" : "text-gray-700"
              }`}>
                <span>Products</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${isProductOpen ? "rotate-180" : ""}`}
                />
              </button>
              <span className={`absolute left-0 bottom-0 h-0.5 bg-linear-to-r from-[#2076C7] to-[#1CADA3] transition-all duration-300 group-hover:w-full ${
                isProductOpen || pathname.startsWith("/products") ? "w-full" : "w-0"
              }`} />
            </motion.div>

            <AnimatePresence>
              {isProductOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-48 xl:w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                >
                  {/* Loans Submenu */}
                  <div
                    className="relative"
                    onMouseEnter={() => setIsLoansOpen(true)}
                    onMouseLeave={() => setIsLoansOpen(false)}
                  >
                    <div className="flex items-center justify-between px-3 xl:px-4 py-2 text-gray-700 hover:bg-[#E8F6FA] hover:text-[#2076C7] transition-colors duration-200 cursor-pointer">
                      <span className="text-sm xl:text-base">Loans</span>
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 -rotate-90 ${isLoansOpen ? "rotate-0" : ""}`}
                      />
                    </div>
                    <AnimatePresence>
                      {isLoansOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-full top-0 ml-2 w-48 xl:w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-60"
                        >
                          {loansOptions.map((option, index) => (
                            <Link
                              key={index}
                              href={option.href}
                              className="block px-3 xl:px-4 py-2 text-gray-700 hover:bg-[#E8F6FA] hover:text-[#2076C7] transition-colors duration-200 text-sm xl:text-base"
                              onClick={() => {
                                setIsProductOpen(false);
                                setIsLoansOpen(false);
                              }}
                            >
                              {option.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Insurance Submenu */}
                  <div
                    className="relative"
                    onMouseEnter={() => setIsInsuranceOpen(true)}
                    onMouseLeave={() => setIsInsuranceOpen(false)}
                  >
                    <div className="flex items-center justify-between px-3 xl:px-4 py-2 text-gray-700 hover:bg-[#E8F6FA] hover:text-[#2076C7] transition-colors duration-200 cursor-pointer">
                      <span className="text-sm xl:text-base">Insurance</span>
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 -rotate-90 ${isInsuranceOpen ? "rotate-0" : ""}`}
                      />
                    </div>
                    <AnimatePresence>
                      {isInsuranceOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-full top-0 ml-2 w-48 xl:w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-60"
                        >
                          {insuranceOptions.map((option, index) => (
                            <Link
                              key={index}
                              href={option.href}
                              className="block px-3 xl:px-4 py-2 text-gray-700 hover:bg-[#E8F6FA] hover:text-[#2076C7] transition-colors duration-200 text-sm xl:text-base"
                              onClick={() => {
                                setIsProductOpen(false);
                                setIsInsuranceOpen(false);
                              }}
                            >
                              {option.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mutual Fund Submenu */}
                  <div
                    className="relative"
                    onMouseEnter={() => setIsMutualFundOpen(true)}
                    onMouseLeave={() => setIsMutualFundOpen(false)}
                  >
                    <div className="flex items-center justify-between px-3 xl:px-4 py-2 text-gray-700 hover:bg-[#E8F6FA] hover:text-[#2076C7] transition-colors duration-200 cursor-pointer">
                      <span className="text-sm xl:text-base">Mutual Fund</span>
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 -rotate-90 ${isMutualFundOpen ? "rotate-0" : ""}`}
                      />
                    </div>
                    <AnimatePresence>
                      {isMutualFundOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-full top-0 ml-2 w-48 xl:w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-60"
                        >
                          {mutualFundOptions.map((option, index) => (
                            <Link
                              key={index}
                              href={option.href}
                              className="block px-3 xl:px-4 py-2 text-gray-700 hover:bg-[#E8F6FA] hover:text-[#2076C7] transition-colors duration-200 text-sm xl:text-base"
                              onClick={() => {
                                setIsProductOpen(false);
                                setIsMutualFundOpen(false);
                              }}
                            >
                              {option.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Investment Submenu */}
                  <div
                    className="relative"
                    onMouseEnter={() => setIsInvestmentOpen(true)}
                    onMouseLeave={() => setIsInvestmentOpen(false)}
                  >
                    <div className="flex items-center justify-between px-3 xl:px-4 py-2 text-gray-700 hover:bg-[#E8F6FA] hover:text-[#2076C7] transition-colors duration-200 cursor-pointer">
                      <span className="text-sm xl:text-base">Investments</span>
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 -rotate-90 ${isInvestmentOpen ? "rotate-0" : ""}`}
                      />
                    </div>
                    <AnimatePresence>
                      {isInvestmentOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-full top-0 ml-2 w-48 xl:w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-60"
                        >
                          {investmentOptions.map((option, index) => (
                            <Link
                              key={index}
                              href={option.href}
                              className="block px-3 xl:px-4 py-2 text-gray-700 hover:bg-[#E8F6FA] hover:text-[#2076C7] transition-colors duration-200 text-sm xl:text-base"
                              onClick={() => {
                                setIsProductOpen(false);
                                setIsInvestmentOpen(false);
                              }}
                            >
                              {option.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Unlisted Submenu */}
                  <div
                    className="relative"
                    onMouseEnter={() => setIsUnlistedOpen(true)}
                    onMouseLeave={() => setIsUnlistedOpen(false)}
                  >
                    <div className="flex items-center justify-between px-3 xl:px-4 py-2 text-gray-700 hover:bg-[#E8F6FA] hover:text-[#2076C7] transition-colors duration-200 cursor-pointer">
                      <span className="text-sm xl:text-base">Unlisted</span>
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 -rotate-90 ${isUnlistedOpen ? "rotate-0" : ""}`}
                      />
                    </div>
                    <AnimatePresence>
                      {isUnlistedOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-full top-0 ml-2 w-48 xl:w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-60"
                        >
                          {unlistedOptions.map((option, index) => (
                            <Link
                              key={index}
                              href={option.href}
                              className="block px-3 xl:px-4 py-2 text-gray-700 hover:bg-[#E8F6FA] hover:text-[#2076C7] transition-colors duration-200 text-sm xl:text-base"
                              onClick={() => {
                                setIsProductOpen(false);
                                setIsUnlistedOpen(false);
                              }}
                            >
                              {option.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Media Center, Calculator & Contact Us */}
          {navLinks.slice(3).map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="relative group rounded-lg overflow-hidden cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 rounded-lg bg-linear-to-r from-[#2076C7]/10 to-[#1CADA3]/10 opacity-0 group-hover:opacity-100 blur-sm"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                />
                <Link
                  href={link.href}
                  className={`relative z-10 px-2 xl:px-3 py-2 font-semibold transition-colors duration-300 group-hover:text-[#2076C7] text-sm xl:text-base whitespace-nowrap ${
                    isActive ? "text-[#2076C7]" : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
                <span className={`absolute left-0 bottom-0 h-0.5 bg-linear-to-r from-[#2076C7] to-[#1CADA3] transition-all duration-300 group-hover:w-full ${
                  isActive ? "w-full" : "w-0"
                }`} />
              </motion.div>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          
          {/* User Profile / Logout / Enquiry */}
          {user ? (
            <div className="hidden sm:flex items-center gap-3">
              <Link 
                href="/dashboard"
                className="text-xs font-bold text-gray-700 flex items-center gap-1.5 bg-white/80 border border-[#1CADA3]/20 hover:border-[#1CADA3]/40 pl-3 pr-3.5 py-2.5 rounded-xl transition-all"
              >
                <User className="w-3.5 h-3.5 text-[#2076C7] shrink-0" />
                Hi, {user.fullName.split(" ")[0]}!
              </Link>
              <button
                onClick={handleLogout}
                className="p-2.5 rounded-xl border border-[#1CADA3]/20 hover:border-red-500 hover:text-red-500 text-zinc-400 hover:bg-[#E8F6FA] transition-colors cursor-pointer"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center space-x-2 xl:space-x-3 pl-1 xl:pl-2">
              
              <motion.div
                whileHover={{ scale: 1.07, y: -2 }}
                transition={{ type: "tween", duration: 0.1 }}
              >
                <Link
                  href="/enquiry"
                  className="font-sans bg-linear-to-r from-[#2076C7] to-[#1CADA3] text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer text-sm xl:text-base whitespace-nowrap block"
                >
                  Enquiry
                </Link>
              </motion.div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full border border-[#1CADA3]/20 text-[#2076C7] hover:bg-[#E8F6FA] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-linear-to-br from-[#E8F6FA] via-[#F0FAFB] to-[#E9F8F6] backdrop-blur-md shadow-md border-t border-[#1CADA3]/10"
          >
            <div className="flex flex-col items-center space-y-3 py-6 px-4">

              {/* Home & About Us */}
              {navLinks.slice(0, 2).map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`w-[80%] max-w-xs text-center py-2 px-3 rounded-lg font-medium transition-colors ${
                      isActive ? "text-[#2076C7] bg-[#E8F6FA]" : "text-gray-700 hover:text-[#2076C7] hover:bg-[#E8F6FA]/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile Products Dropdown */}
              <div className="w-full text-center">
                <button
                  onClick={() => setIsProductOpen(!isProductOpen)}
                  className="text-gray-700 font-medium hover:text-[#2076C7] transition flex items-center justify-center space-x-1 mx-auto text-base py-2"
                >
                  <span>Products</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isProductOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isProductOpen && (
                  <div className="mt-2 space-y-3 pl-4">
                    {/* Mobile Loans Dropdown */}
                    <div className="w-full text-center">
                      <button
                        onClick={() => setIsLoansOpen(!isLoansOpen)}
                        className="text-gray-600 font-medium hover:text-[#2076C7] transition flex items-center justify-center space-x-1 mx-auto text-sm py-1"
                      >
                        <span>Loans</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${isLoansOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isLoansOpen && (
                        <div className="mt-2 space-y-2 pl-4">
                          {loansOptions.map((option, index) => (
                            <Link
                              key={index}
                              href={option.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsProductOpen(false);
                                setIsLoansOpen(false);
                              }}
                              className="block text-gray-500 hover:text-[#2076C7] transition text-xs py-1"
                            >
                              {option.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Mobile Insurance Dropdown */}
                    <div className="w-full text-center">
                      <button
                        onClick={() => setIsInsuranceOpen(!isInsuranceOpen)}
                        className="text-gray-600 font-medium hover:text-[#2076C7] transition flex items-center justify-center space-x-1 mx-auto text-sm py-1"
                      >
                        <span>Insurance</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${isInsuranceOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isInsuranceOpen && (
                        <div className="mt-2 space-y-2 pl-4">
                          {insuranceOptions.map((option, index) => (
                            <Link
                              key={index}
                              href={option.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsProductOpen(false);
                                setIsInsuranceOpen(false);
                              }}
                              className="block text-gray-500 hover:text-[#2076C7] transition text-xs py-1"
                            >
                              {option.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Mobile Mutual Fund Dropdown */}
                    <div className="w-full text-center">
                      <button
                        onClick={() => setIsMutualFundOpen(!isMutualFundOpen)}
                        className="text-gray-600 font-medium hover:text-[#2076C7] transition flex items-center justify-center space-x-1 mx-auto text-sm py-1"
                      >
                        <span>Mutual Fund</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${isMutualFundOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isMutualFundOpen && (
                        <div className="mt-2 space-y-2 pl-4">
                          {mutualFundOptions.map((option, index) => (
                            <Link
                              key={index}
                              href={option.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsProductOpen(false);
                                setIsMutualFundOpen(false);
                              }}
                              className="block text-gray-500 hover:text-[#2076C7] transition text-xs py-1"
                            >
                              {option.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Mobile Investment Dropdown */}
                    <div className="w-full text-center">
                      <button
                        onClick={() => setIsInvestmentOpen(!isInvestmentOpen)}
                        className="text-gray-600 font-medium hover:text-[#2076C7] transition flex items-center justify-center space-x-1 mx-auto text-sm py-1"
                      >
                        <span>Investments</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${isInvestmentOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isInvestmentOpen && (
                        <div className="mt-2 space-y-2 pl-4">
                          {investmentOptions.map((option, index) => (
                            <Link
                              key={index}
                              href={option.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsProductOpen(false);
                                setIsInvestmentOpen(false);
                              }}
                              className="block text-gray-500 hover:text-[#2076C7] transition text-xs py-1"
                            >
                              {option.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Mobile Unlisted Dropdown */}
                    <div className="w-full text-center">
                      <button
                        onClick={() => setIsUnlistedOpen(!isUnlistedOpen)}
                        className="text-gray-600 font-medium hover:text-[#2076C7] transition flex items-center justify-center space-x-1 mx-auto text-sm py-1"
                      >
                        <span>Unlisted</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${isUnlistedOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isUnlistedOpen && (
                        <div className="mt-2 space-y-2 pl-4">
                          {unlistedOptions.map((option, index) => (
                            <Link
                              key={index}
                              href={option.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsProductOpen(false);
                                setIsUnlistedOpen(false);
                              }}
                              className="block text-gray-500 hover:text-[#2076C7] transition text-xs py-1"
                            >
                              {option.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Actions */}
              {user ? (
                <div className="flex flex-col gap-2 pt-4 border-t border-[#1CADA3]/10 w-[80%] max-w-xs">
                  <Link 
                    href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-bold text-gray-700 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white/80 border border-[#1CADA3]/20 rounded-xl hover:border-zinc-300 transition-all font-sans"
                  >
                    <User className="w-3.5 h-3.5 text-[#2076C7]" />
                    Hi, {user.fullName}!
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full py-3 rounded-xl text-xs font-bold text-white bg-red-500 hover:bg-red-650 text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2 pt-4 border-t border-[#1CADA3]/10 w-[80%] max-w-xs">
                  <Link
                    href="/enquiry"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-linear-to-r from-[#2076C7] to-[#1CADA3] text-center"
                  >
                    Enquiry
                  </Link>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}