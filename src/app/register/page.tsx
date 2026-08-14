"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Mail, Lock, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password && agree) {
      setIsSuccess(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-955 text-zinc-100">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md bg-zinc-950 border border-zinc-900 rounded-3xl p-8 shadow-2xl space-y-6">
          
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full overflow-hidden border border-zinc-200 bg-zinc-50 flex items-center justify-center p-1 mb-2">
              <img 
                src="/logo.png" 
                alt="Bharti Share Market Auth Logo" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <h1 className="text-xl font-black text-white">BHARATI MALL CLIENT</h1>
            <span className="text-[10px] text-[#2076C7] font-bold uppercase tracking-wider">
              Customer Registration
            </span>
          </div>

          {isSuccess ? (
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col items-center text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-green-500 animate-pulse" />
              <h3 className="text-white font-bold text-base">Account Created!</h3>
              <p className="text-xs text-zinc-400">
                Welcome to your Bharati Mall B2C Customer account.
              </p>
              <Link
                href="/login"
                className="inline-block mt-4 text-xs font-semibold text-white bg-gradient-to-r from-[#2076C7] to-[#1CADA3] px-5 py-2.5 rounded-xl"
              >
                Sign In Now
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-[10px] uppercase font-bold text-zinc-400 mb-1.5">Customer Name</label>
                <input
                  type="text"
                  required
                  placeholder="Aditya"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-2.5 px-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#2076C7]"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-zinc-400 mb-1.5">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="customer@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#2076C7]"
                  />
                  <Mail className="w-4 h-4 text-zinc-600 absolute left-3.5 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-zinc-400 mb-1.5">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    placeholder="Minimum 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#2076C7]"
                  />
                  <Lock className="w-4 h-4 text-zinc-600 absolute left-3.5 top-3" />
                </div>
              </div>

              <div className="flex items-start gap-2.5 py-1">
                <input
                  type="checkbox"
                  id="agree-reg"
                  required
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-0.5 rounded border-zinc-850 bg-zinc-900 text-amber-500 focus:ring-amber-500"
                />
                <label htmlFor="agree-reg" className="text-[10px] text-zinc-500 leading-normal">
                  I agree to the Terms of Service & Privacy Policy of Bharti Share Market. I declare that this account is for customer-only B2C retail access.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2076C7] to-[#1CADA3] hover:shadow-lg transition-all cursor-pointer"
              >
                Create B2C Customer Account
              </button>

              <div className="text-center pt-2 text-xs text-zinc-500">
                Already registered?{" "}
                <Link href="/login" className="font-bold text-[#2076C7] hover:underline">
                  Sign In
                </Link>
              </div>
            </form>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
