"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ShoppingBag, 
  X, 
  Menu, 
  Sparkles,
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
  Dog
} from "lucide-react";
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{ fullName: string; email: string } | null>(null);

  // Dropdown states
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
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
        setProductDropdownOpen(false);
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
    window.location.href = "/";
  };

  const insuranceProducts = [
    { name: "Life Insurance", href: "/products/life-insurance", icon: HeartHandshake },
    { name: "Health Insurance", href: "/products/health-insurance", icon: Activity },
    { name: "Motor Insurance", href: "/products/motor-insurance", icon: Car },
    { name: "Travel Insurance", href: "/products/travel-insurance", icon: Plane },
    { name: "Fire Insurance", href: "/products/fire-insurance", icon: Flame },
    { name: "Cattle Insurance", href: "/products?category=Insurance&tab=cattle-insurance", icon: Shield },
    { name: "Marine Insurance", href: "/products?category=Insurance&tab=marine-insurance", icon: Ship },
    { name: "Corporate Insurance", href: "/products?category=Insurance&tab=corporate-insurance", icon: Building2 },
    { name: "Loan Protector", href: "/products?category=Insurance&tab=loan-protector", icon: ShieldAlert },
    { name: "Pet Insurance", href: "/products?category=Insurance&tab=pet-insurance", icon: Dog },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-zinc-200 bg-zinc-50 flex items-center justify-center p-0.5 group-hover:border-[#2076C7]/40 group-hover:shadow-md transition-all">
            <img 
              src="/logo.png" 
              alt="Bharti Share Market Logo" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-zinc-900 group-hover:text-[#2076C7] transition-colors flex items-center gap-1.5">
              BHARATI MALL
              <Sparkles className="w-4 h-4 text-[#2076C7] animate-pulse" />
            </span>
            <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest leading-none">
              B2C Financial Portal
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 xl:gap-8 relative" ref={dropdownRef}>
          {/* Home */}
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-[#2076C7] relative py-2 ${
              pathname === "/" ? "text-[#2076C7] font-semibold" : "text-zinc-600"
            }`}
          >
            Home
            {pathname === "/" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2076C7] rounded-full" />
            )}
          </Link>

          {/* About Us */}
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-[#2076C7] relative py-2 ${
              pathname === "/about" ? "text-[#2076C7] font-semibold" : "text-zinc-600"
            }`}
          >
            About Us
            {pathname === "/about" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2076C7] rounded-full" />
            )}
          </Link>

          {/* Insurance Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductDropdownOpen(true)}
            onMouseLeave={() => setProductDropdownOpen(false)}
          >
            <Link
              href="/products"
              onClick={() => setProductDropdownOpen(false)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#2076C7] py-2 cursor-pointer ${
                pathname.startsWith("/products") || productDropdownOpen ? "text-[#2076C7] font-semibold" : "text-zinc-600"
              }`}
            >
              <span>Insurance</span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 ${
                  productDropdownOpen ? "rotate-180 text-[#2076C7]" : "text-zinc-400"
                }`} 
              />
              {pathname.startsWith("/products") && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2076C7] rounded-full" />
              )}
            </Link>

            {/* Desktop Insurance Dropdown */}
            {productDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden min-w-[320px] animate-fade-in z-50">
                <div className="p-3">
                  <div className="flex items-center justify-between px-3 py-1.5 mb-1 border-b border-zinc-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2076C7]">
                      Insurance Solutions
                    </span>
                    <Link
                      href="/products?category=Insurance"
                      onClick={() => setProductDropdownOpen(false)}
                      className="text-[11px] font-medium text-zinc-400 hover:text-[#2076C7] transition-colors"
                    >
                      View All →
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 gap-1 max-h-[400px] overflow-y-auto py-1 pr-1 custom-scrollbar">
                    {insuranceProducts.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setProductDropdownOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-zinc-700 hover:bg-[#E8F6FA] hover:text-[#2076C7] transition-colors group/item"
                        >
                          <Icon className="w-4 h-4 text-zinc-400 group-hover/item:text-[#2076C7] transition-colors" />
                          <span className="group-hover/item:translate-x-1 transition-transform flex-1">{item.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-zinc-300 group-hover/item:text-[#2076C7] transition-colors" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Media Center */}
          <Link
            href="/media-center"
            className={`text-sm font-medium transition-colors hover:text-[#2076C7] relative py-2 ${
              pathname === "/media-center" ? "text-[#2076C7] font-semibold" : "text-zinc-600"
            }`}
          >
            Media Center
            {pathname === "/media-center" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2076C7] rounded-full" />
            )}
          </Link>
        </nav>

        {/* Header Action Controls */}
        <div className="flex items-center gap-4">
          {/* Shopping / Catalog Button */}
          <Link
            href="/products"
            className="relative p-2.5 rounded-full bg-zinc-50 border border-zinc-200 hover:border-zinc-300 hover:text-[#2076C7] transition-all group"
            aria-label="View Insurance Products"
          >
            <ShoppingBag className="w-5 h-5 text-zinc-600 group-hover:text-[#2076C7] transition-colors" />
          </Link>

          {/* User Account Operations */}
          {user ? (
            <div className="hidden sm:flex items-center gap-3">
              <Link 
                href="/dashboard"
                className="text-xs font-bold text-zinc-700 flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 hover:border-zinc-300 pl-3 pr-3.5 py-2.5 rounded-xl transition-all"
              >
                <User className="w-3.5 h-3.5 text-[#2076C7] shrink-0" />
                Hi, {user.fullName.split(" ")[0]}!
              </Link>
              <button
                onClick={handleLogout}
                className="p-2.5 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:text-red-500 text-zinc-400 hover:bg-zinc-50 transition-colors cursor-pointer"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2 xl:gap-3">
              <Link
                href="/login"
                className={`px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2076C7] to-[#1CADA3] hover:shadow-md hover:shadow-[#2076C7]/15 active:scale-95 transition-all text-center ${
                  pathname === "/login" ? "brightness-95" : ""
                }`}
              >
                Login
              </Link>
              <Link
                href="/register"
                className={`px-5 py-2 rounded-xl text-xs font-bold text-[#1CADA3] border-2 border-[#1CADA3] bg-white hover:bg-[#E8F6FA] active:scale-95 transition-all text-center ${
                  pathname === "/register" ? "bg-zinc-50" : ""
                }`}
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden rounded-full border border-zinc-200 text-zinc-600 hover:text-[#2076C7]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto animate-fade-in">
          <div className="relative">
            <input
              type="text"
              placeholder="Search insurance..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-full py-2 pl-10 pr-4 text-xs text-zinc-800"
            />
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
          </div>

          <div className="flex flex-col gap-1.5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-zinc-50 transition-colors ${
                pathname === "/" ? "text-[#2076C7] bg-[#E8F6FA] font-semibold" : "text-zinc-700"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-zinc-50 transition-colors ${
                pathname === "/about" ? "text-[#2076C7] bg-[#E8F6FA] font-semibold" : "text-zinc-700"
              }`}
            >
              About Us
            </Link>

            {/* Collapsible Mobile Insurance Products */}
            <div className="border border-zinc-100 rounded-xl overflow-hidden bg-zinc-50/50">
              <div 
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="flex items-center justify-between py-2.5 px-3 cursor-pointer text-sm font-medium text-zinc-800 hover:bg-zinc-100/70"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#2076C7]" />
                  <span>Insurance Products</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
              </div>

              {mobileProductsOpen && (
                <div className="p-2 space-y-1 bg-white border-t border-zinc-100">
                  {insuranceProducts.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 text-xs text-zinc-600 hover:text-[#2076C7] hover:bg-zinc-50 rounded-lg transition-colors"
                      >
                        <Icon className="w-4 h-4 text-zinc-400" />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/media-center"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-zinc-50 transition-colors ${
                pathname === "/media-center" ? "text-[#2076C7] bg-[#E8F6FA] font-semibold" : "text-zinc-700"
              }`}
            >
              Media Center
            </Link>
          </div>

          {user ? (
            <div className="flex flex-col gap-2 pt-2 border-t border-zinc-100">
              <Link 
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-bold text-zinc-700 flex items-center gap-1.5 px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-all"
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
            <div className="flex flex-col gap-2 pt-2 border-t border-zinc-100">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2076C7] to-[#1CADA3] text-center"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-[#1CADA3] border-2 border-[#1CADA3] bg-white text-center"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}