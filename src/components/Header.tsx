"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ShoppingBag, 
  Search, 
  X, 
  Menu, 
  Sparkles,
  User,
  LogOut
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Media Center", href: "/media-center" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-zinc-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-zinc-200 bg-zinc-50 flex items-center justify-center p-0.5 group-hover:border-[#2076C7]/30 transition-colors">
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
              B2C Portal
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#2076C7] relative py-2 ${
                  isActive ? "text-[#2076C7]" : "text-zinc-600"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2076C7] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Header Action Controls */}
        <div className="flex items-center gap-4">
          
          {/* Search Bar - Desktop */}
          <div className="relative hidden lg:block w-48 xl:w-60">
            <input
              type="text"
              placeholder="Search catalog..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-full py-1.5 pl-10 pr-4 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#2076C7] focus:ring-1 focus:ring-[#2076C7]/20 transition-all"
            />
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-2.5" />
          </div>

          {/* Shopping Cart Button */}
          <Link
            href="/products"
            className="relative p-2.5 rounded-full bg-zinc-50 border border-zinc-200 hover:border-zinc-300 hover:text-[#2076C7] transition-all group"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5 text-zinc-600 group-hover:text-[#2076C7] transition-colors" />
          </Link>

          {/* User Account Operations - B2C Customer Customization */}
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden rounded-full border border-zinc-200 text-zinc-600 hover:text-[#2076C7]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white px-4 py-6 space-y-4 animate-fade-in">
          <div className="relative">
            <input
              type="text"
              placeholder="Search catalog..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-full py-2 pl-10 pr-4 text-xs text-zinc-800"
            />
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-zinc-50 transition-colors ${
                    isActive ? "text-[#2076C7] bg-[#E8F6FA]" : "text-zinc-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

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
        </div>
      )}
    </header>
  );
}
