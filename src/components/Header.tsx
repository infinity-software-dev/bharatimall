"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  X,
  Menu,
  ChevronDown,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const loansOptions = [
  { label: "Personal Loan", href: "/products" },
  { label: "Business Loan", href: "/products" },
  { label: "Education Loan", href: "/products" },
  { label: "Vehicle Loan", href: "/products" },
  { label: "Loan Against Securities", href: "/products" },
  { label: "Credit Cards", href: "/products" },
];

const insuranceOptions = [
  { label: "Term Life Insurance", href: "/products/term-life-insurance" },
  { label: "Health Insurance", href: "/products/health-insurance" },
  { label: "Motor Insurance", href: "/products/motor-insurance" },
  { label: "General Insurance", href: "/products/general-insurance" },
];

const mutualFundOptions = [
  { label: "Mutual Funds & SIPs", href: "/products" },
];

const investmentOptions = [
  { label: "NPS (National Pension)", href: "/products" },
  { label: "Fixed Deposits (FD)", href: "/products" },
];

const realEstateOptions = [
  { label: "Commercial & Residential Advisory", href: "/products" },
];

const unlistedOptions = [
  { label: "Unlisted Equities & Shares", href: "/products" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop Dropdowns
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isLoansOpen, setIsLoansOpen] = useState(false);
  const [isInsuranceOpen, setIsInsuranceOpen] = useState(false);
  const [isMutualFundOpen, setIsMutualFundOpen] = useState(false);
  const [isInvestmentOpen, setIsInvestmentOpen] = useState(false);
  const [isUnlistedOpen, setIsUnlistedOpen] = useState(false);

  // Mobile Dropdown & Sub-dropdown States (matching user screenshot)
  const [mobileProductOpen, setMobileProductOpen] = useState(true);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Media Center", href: "/media-center" },
    { name: "Calculator", href: "/calculator" },
    { name: "Contact Us", href: "/contact" },
  ];

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  const toggleSubmenu = (name: string) => {
    setMobileSubmenu((prev) => (prev === name ? null : name));
  };

  return (
    <header className="bg-white backdrop-blur-md shadow-xs sticky top-0 z-50 transition-all duration-300 border-b border-[#E5E5E0] font-sans">
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
                  className="absolute inset-0 rounded-lg bg-[#FFF8D6]/80 opacity-0 group-hover:opacity-100 blur-xs"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                />
                <Link
                  href={link.href}
                  className={`relative z-10 px-2 xl:px-3 py-2 font-semibold transition-colors duration-300 group-hover:text-[#171717] text-sm xl:text-base whitespace-nowrap ${isActive ? "text-[#171717] font-bold" : "text-[#292929]"
                    }`}
                >
                  {link.name}
                </Link>
                <span className={`absolute left-0 bottom-0 h-0.5 bg-[#F4C430] transition-all duration-300 group-hover:w-full ${isActive ? "w-full" : "w-0"
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
                className="absolute inset-0 rounded-lg bg-[#FFF8D6]/80 opacity-0 group-hover:opacity-100 blur-xs"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 0, scale: 0.95 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
              />
              <Link
                href="/products"
                className={`relative z-10 px-2 xl:px-3 py-2 font-semibold transition-colors duration-300 group-hover:text-[#171717] flex items-center space-x-1 text-sm xl:text-base cursor-pointer ${isProductOpen || pathname.startsWith("/products") ? "text-[#171717] font-bold" : "text-[#292929]"
                  }`}
              >
                <span>Products</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${isProductOpen ? "rotate-180 text-[#F4C430]" : ""}`}
                />
              </Link>
              <span className={`absolute left-0 bottom-0 h-0.5 bg-[#F4C430] transition-all duration-300 group-hover:w-full ${isProductOpen || pathname.startsWith("/products") ? "w-full" : "w-0"
                }`} />
            </motion.div>

            <AnimatePresence>
              {isProductOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-52 xl:w-60 bg-white rounded-2xl shadow-xl border border-[#E5E5E0] py-2.5 z-50"
                >
                  {/* All Products Catalog Link */}
                  <Link
                    href="/products"
                    onClick={() => setIsProductOpen(false)}
                    className="flex items-center justify-between px-4 py-2 text-xs font-bold text-[#855F05] bg-[#FFF8D6]/60 hover:bg-[#FFF8D6] mx-2 rounded-xl border border-[#F4C430]/30 transition-colors mb-1.5"
                  >
                    <span>All Products Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F4C430]" />
                  </Link>

                  {/* Insurance Submenu */}
                  <div
                    className="relative"
                    onMouseEnter={() => setIsInsuranceOpen(true)}
                    onMouseLeave={() => setIsInsuranceOpen(false)}
                  >
                    <div className="flex items-center justify-between px-4 py-2 text-[#292929] hover:bg-[#FFF8D6] hover:text-[#171717] transition-colors duration-200 cursor-pointer">
                      <span className="text-sm font-medium">Insurance</span>
                      <ChevronRight size={13} className="text-[#6B6B6B]" />
                    </div>
                    <AnimatePresence>
                      {isInsuranceOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-full top-0 ml-1.5 w-56 bg-white rounded-2xl shadow-xl border border-[#E5E5E0] py-2 z-60"
                        >
                          {insuranceOptions.map((option, index) => (
                            <Link
                              key={index}
                              href={option.href}
                              className="block px-4 py-2 text-[#292929] hover:bg-[#FFF8D6] hover:text-[#171717] transition-colors duration-200 text-sm font-medium"
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

                  {/* Loans Submenu */}
                  <div
                    className="relative"
                    onMouseEnter={() => setIsLoansOpen(true)}
                    onMouseLeave={() => setIsLoansOpen(false)}
                  >
                    <div className="flex items-center justify-between px-4 py-2 text-[#292929] hover:bg-[#FFF8D6] hover:text-[#171717] transition-colors duration-200 cursor-pointer">
                      <span className="text-sm font-medium">Loans</span>
                      <ChevronRight size={13} className="text-[#6B6B6B]" />
                    </div>
                    <AnimatePresence>
                      {isLoansOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-full top-0 ml-1.5 w-56 bg-white rounded-2xl shadow-xl border border-[#E5E5E0] py-2 z-60"
                        >
                          {loansOptions.map((option, index) => (
                            <Link
                              key={index}
                              href={option.href}
                              className="block px-4 py-2 text-[#292929] hover:bg-[#FFF8D6] hover:text-[#171717] transition-colors duration-200 text-sm font-medium"
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

                  {/* Mutual Fund Submenu */}
                  <div
                    className="relative"
                    onMouseEnter={() => setIsMutualFundOpen(true)}
                    onMouseLeave={() => setIsMutualFundOpen(false)}
                  >
                    <div className="flex items-center justify-between px-4 py-2 text-[#292929] hover:bg-[#FFF8D6] hover:text-[#171717] transition-colors duration-200 cursor-pointer">
                      <span className="text-sm font-medium">Mutual Funds</span>
                      <ChevronRight size={13} className="text-[#6B6B6B]" />
                    </div>
                    <AnimatePresence>
                      {isMutualFundOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-full top-0 ml-1.5 w-56 bg-white rounded-2xl shadow-xl border border-[#E5E5E0] py-2 z-60"
                        >
                          {mutualFundOptions.map((option, index) => (
                            <Link
                              key={index}
                              href={option.href}
                              className="block px-4 py-2 text-[#292929] hover:bg-[#FFF8D6] hover:text-[#171717] transition-colors duration-200 text-sm font-medium"
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
                    <div className="flex items-center justify-between px-4 py-2 text-[#292929] hover:bg-[#FFF8D6] hover:text-[#171717] transition-colors duration-200 cursor-pointer">
                      <span className="text-sm font-medium">Investments</span>
                      <ChevronRight size={13} className="text-[#6B6B6B]" />
                    </div>
                    <AnimatePresence>
                      {isInvestmentOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-full top-0 ml-1.5 w-56 bg-white rounded-2xl shadow-xl border border-[#E5E5E0] py-2 z-60"
                        >
                          {investmentOptions.map((option, index) => (
                            <Link
                              key={index}
                              href={option.href}
                              className="block px-4 py-2 text-[#292929] hover:bg-[#FFF8D6] hover:text-[#171717] transition-colors duration-200 text-sm font-medium"
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
                    <div className="flex items-center justify-between px-4 py-2 text-[#292929] hover:bg-[#FFF8D6] hover:text-[#171717] transition-colors duration-200 cursor-pointer">
                      <span className="text-sm font-medium">Unlisted Equities</span>
                      <ChevronRight size={13} className="text-[#6B6B6B]" />
                    </div>
                    <AnimatePresence>
                      {isUnlistedOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-full top-0 ml-1.5 w-56 bg-white rounded-2xl shadow-xl border border-[#E5E5E0] py-2 z-60"
                        >
                          {unlistedOptions.map((option, index) => (
                            <Link
                              key={index}
                              href={option.href}
                              className="block px-4 py-2 text-[#292929] hover:bg-[#FFF8D6] hover:text-[#171717] transition-colors duration-200 text-sm font-medium"
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
                  className="absolute inset-0 rounded-lg bg-[#FFF8D6]/80 opacity-0 group-hover:opacity-100 blur-xs"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                />
                <Link
                  href={link.href}
                  className={`relative z-10 px-2 xl:px-3 py-2 font-semibold transition-colors duration-300 group-hover:text-[#171717] text-sm xl:text-base whitespace-nowrap ${isActive ? "text-[#171717] font-bold" : "text-[#292929]"
                    }`}
                >
                  {link.name}
                </Link>
                <span className={`absolute left-0 bottom-0 h-0.5 bg-[#F4C430] transition-all duration-300 group-hover:w-full ${isActive ? "w-full" : "w-0"
                  }`} />
              </motion.div>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Desktop Enquiry Action Button */}
          <div className="hidden sm:flex items-center space-x-2 xl:space-x-3 pl-1 xl:pl-2">
            <motion.div
              whileHover={{ scale: 1.07, y: -2 }}
              transition={{ type: "tween", duration: 0.1 }}
            >
              <Link
                href="/enquiry"
                className="font-sans bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] py-2 px-4 rounded-lg font-semibold shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer text-sm xl:text-base whitespace-nowrap block"
              >
                Enquiry
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 rounded-full border border-[#E5E5E0] text-[#171717] hover:bg-[#F5F5F3] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#171717]" /> : <Menu className="w-5 h-5 text-[#171717]" />}
          </button>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE NAVIGATION DRAWER (MATCHING USER SCREENSHOT HIERARCHY & CENTERING) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white shadow-2xl border-t border-[#E5E5E0] max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col items-center space-y-4 py-8 px-6 text-center">

              {/* 1. Home */}
              <Link
                href="/"
                onClick={closeMobile}
                className={`text-base font-medium transition-colors ${pathname === "/" ? "text-[#171717] font-bold" : "text-[#292929] hover:text-[#171717]"
                  }`}
              >
                Home
              </Link>

              {/* 2. About Us */}
              <Link
                href="/about"
                onClick={closeMobile}
                className={`text-base font-medium transition-colors ${pathname === "/about" ? "text-[#171717] font-bold" : "text-[#292929] hover:text-[#171717]"
                  }`}
              >
                About Us
              </Link>

              {/* 3. Product Dropdown & Sub-dropdowns */}
              <div className="w-full flex flex-col items-center">
                <button
                  onClick={() => setMobileProductOpen(!mobileProductOpen)}
                  className="flex items-center justify-center gap-1.5 text-base font-medium text-[#292929] hover:text-[#171717] transition-colors cursor-pointer py-1"
                >
                  <span>Product</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductOpen ? "rotate-180 text-[#F4C430]" : ""}`} />
                </button>

                {mobileProductOpen && (
                  <div className="flex flex-col items-center space-y-3.5 mt-3 w-full animate-fadeIn">

                    {/* A. Loans Subdropdown */}
                    <div className="w-full flex flex-col items-center">
                      <button
                        onClick={() => toggleSubmenu("loans")}
                        className="flex items-center justify-center gap-1 text-sm font-normal text-[#292929] hover:text-[#171717] transition-colors cursor-pointer py-0.5"
                      >
                        <span>Loans</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSubmenu === "loans" ? "rotate-180 text-[#F4C430]" : ""}`} />
                      </button>

                      {mobileSubmenu === "loans" && (
                        <div className="flex flex-col items-center space-y-2 mt-2 py-2 px-4 bg-[#FFFDF5] rounded-xl border border-[#E5E5E0] w-full max-w-xs">
                          {loansOptions.map((opt, i) => (
                            <Link
                              key={i}
                              href={opt.href}
                              onClick={closeMobile}
                              className="text-xs text-[#6B6B6B] hover:text-[#171717] hover:font-semibold transition-colors py-0.5"
                            >
                              {opt.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* B. Insurance Subdropdown */}
                    <div className="w-full flex flex-col items-center">
                      <button
                        onClick={() => toggleSubmenu("insurance")}
                        className="flex items-center justify-center gap-1 text-sm font-normal text-[#292929] hover:text-[#171717] transition-colors cursor-pointer py-0.5"
                      >
                        <span>Insurance</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSubmenu === "insurance" ? "rotate-180 text-[#F4C430]" : ""}`} />
                      </button>

                      {mobileSubmenu === "insurance" && (
                        <div className="flex flex-col items-center space-y-2 mt-2 py-2 px-4 bg-[#FFFDF5] rounded-xl border border-[#E5E5E0] w-full max-w-xs">
                          {insuranceOptions.map((opt, i) => (
                            <Link
                              key={i}
                              href={opt.href}
                              onClick={closeMobile}
                              className="text-xs text-[#6B6B6B] hover:text-[#171717] hover:font-semibold transition-colors py-0.5"
                            >
                              {opt.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* C. Mutual Fund Subdropdown */}
                    <div className="w-full flex flex-col items-center">
                      <button
                        onClick={() => toggleSubmenu("mutualFund")}
                        className="flex items-center justify-center gap-1 text-sm font-normal text-[#292929] hover:text-[#171717] transition-colors cursor-pointer py-0.5"
                      >
                        <span>Mutual Fund</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSubmenu === "mutualFund" ? "rotate-180 text-[#F4C430]" : ""}`} />
                      </button>

                      {mobileSubmenu === "mutualFund" && (
                        <div className="flex flex-col items-center space-y-2 mt-2 py-2 px-4 bg-[#FFFDF5] rounded-xl border border-[#E5E5E0] w-full max-w-xs">
                          {mutualFundOptions.map((opt, i) => (
                            <Link
                              key={i}
                              href={opt.href}
                              onClick={closeMobile}
                              className="text-xs text-[#6B6B6B] hover:text-[#171717] hover:font-semibold transition-colors py-0.5"
                            >
                              {opt.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* D. Investment Subdropdown */}
                    <div className="w-full flex flex-col items-center">
                      <button
                        onClick={() => toggleSubmenu("investment")}
                        className="flex items-center justify-center gap-1 text-sm font-normal text-[#292929] hover:text-[#171717] transition-colors cursor-pointer py-0.5"
                      >
                        <span>Investment</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSubmenu === "investment" ? "rotate-180 text-[#F4C430]" : ""}`} />
                      </button>

                      {mobileSubmenu === "investment" && (
                        <div className="flex flex-col items-center space-y-2 mt-2 py-2 px-4 bg-[#FFFDF5] rounded-xl border border-[#E5E5E0] w-full max-w-xs">
                          {investmentOptions.map((opt, i) => (
                            <Link
                              key={i}
                              href={opt.href}
                              onClick={closeMobile}
                              className="text-xs text-[#6B6B6B] hover:text-[#171717] hover:font-semibold transition-colors py-0.5"
                            >
                              {opt.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* E. Real Estate Subdropdown */}
                    <div className="w-full flex flex-col items-center">
                      <button
                        onClick={() => toggleSubmenu("realEstate")}
                        className="flex items-center justify-center gap-1 text-sm font-normal text-[#292929] hover:text-[#171717] transition-colors cursor-pointer py-0.5"
                      >
                        <span>Real Estate</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSubmenu === "realEstate" ? "rotate-180 text-[#F4C430]" : ""}`} />
                      </button>

                      {mobileSubmenu === "realEstate" && (
                        <div className="flex flex-col items-center space-y-2 mt-2 py-2 px-4 bg-[#FFFDF5] rounded-xl border border-[#E5E5E0] w-full max-w-xs">
                          {realEstateOptions.map((opt, i) => (
                            <Link
                              key={i}
                              href={opt.href}
                              onClick={closeMobile}
                              className="text-xs text-[#6B6B6B] hover:text-[#171717] hover:font-semibold transition-colors py-0.5"
                            >
                              {opt.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* F. Unlisted Subdropdown */}
                    <div className="w-full flex flex-col items-center">
                      <button
                        onClick={() => toggleSubmenu("unlisted")}
                        className="flex items-center justify-center gap-1 text-sm font-normal text-[#292929] hover:text-[#171717] transition-colors cursor-pointer py-0.5"
                      >
                        <span>Unlisted</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSubmenu === "unlisted" ? "rotate-180 text-[#F4C430]" : ""}`} />
                      </button>

                      {mobileSubmenu === "unlisted" && (
                        <div className="flex flex-col items-center space-y-2 mt-2 py-2 px-4 bg-[#FFFDF5] rounded-xl border border-[#E5E5E0] w-full max-w-xs">
                          {unlistedOptions.map((opt, i) => (
                            <Link
                              key={i}
                              href={opt.href}
                              onClick={closeMobile}
                              className="text-xs text-[#6B6B6B] hover:text-[#171717] hover:font-semibold transition-colors py-0.5"
                            >
                              {opt.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                )}
              </div>

              {/* 4. Media Center */}
              <Link
                href="/media-center"
                onClick={closeMobile}
                className={`text-base font-medium transition-colors ${pathname === "/media-center" ? "text-[#171717] font-bold" : "text-[#292929] hover:text-[#171717]"
                  }`}
              >
                Media Center
              </Link>

              {/* 5. Calculator */}
              <Link
                href="/calculator"
                onClick={closeMobile}
                className={`text-base font-medium transition-colors ${pathname === "/calculator" ? "text-[#171717] font-bold" : "text-[#292929] hover:text-[#171717]"
                  }`}
              >
                Calculator
              </Link>

              {/* 6. Contact Us */}
              <Link
                href="/contact"
                onClick={closeMobile}
                className={`text-base font-medium transition-colors ${pathname === "/contact" ? "text-[#171717] font-bold" : "text-[#292929] hover:text-[#171717]"
                  }`}
              >
                Contact Us
              </Link>

              {/* 7. Enquiry Action Button */}
              <div className="pt-2 w-full max-w-xs">
                <Link
                  href="/enquiry"
                  onClick={closeMobile}
                  className="w-full py-3 rounded-xl text-sm font-bold text-[#171717] bg-[#F4C430] hover:bg-[#FFD21F] text-center shadow-xs block transition-colors"
                >
                  Enquiry
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}