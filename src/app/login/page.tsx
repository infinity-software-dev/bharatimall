"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Mail, Lock, CheckCircle } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const usersJSON = localStorage.getItem("bharatimall_users");
    const users = usersJSON ? JSON.parse(usersJSON) : [];

    const matchedUser = users.find(
      (u: any) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (matchedUser) {
      sessionStorage.setItem("bharatimall_active_user", JSON.stringify({
        fullName: matchedUser.fullName,
        email: matchedUser.email
      }));
      setIsSuccess(true);
      setTimeout(() => {
        window.location.href = "/dashboard"; // Redirect to customer dashboard
      }, 1500);
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-955 text-zinc-100">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md bg-zinc-950 border border-zinc-900 rounded-3xl p-8 shadow-2xl space-y-6">
          
          {/* Form Header */}
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
              Customer Sign In
            </span>
          </div>

          {isSuccess ? (
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col items-center text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-green-500 animate-pulse" />
              <h3 className="text-white font-bold text-base">Sign In Verified!</h3>
              <p className="text-xs text-zinc-400">
                Welcome back to your Bharati Mall B2C Customer panel.
              </p>
              <Link
                href="/"
                className="inline-block mt-4 text-xs font-semibold text-white bg-gradient-to-r from-[#2076C7] to-[#1CADA3] px-5 py-2.5 rounded-xl"
              >
                Go to Homepage
              </Link>
            </div>
          ) : (
            <>
              {error && (
                <div className="p-3.5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl text-left font-semibold">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-zinc-400 mb-1.5">Registered Email</label>
                  <div className="relative text-left">
                    <input
                      type="email"
                      required
                      placeholder="customer@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-zinc-650 focus:outline-none focus:border-[#2076C7]"
                    />
                    <Mail className="w-4 h-4 text-zinc-600 absolute left-3.5 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-zinc-400 mb-1.5">Password</label>
                  <div className="relative text-left">
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-zinc-650 focus:outline-none focus:border-[#2076C7]"
                    />
                    <Lock className="w-4 h-4 text-zinc-600 absolute left-3.5 top-3" />
                  </div>
                </div>

                <div className="text-right">
                  <button type="button" className="text-[10px] font-bold text-zinc-500 hover:text-[#2076C7]">
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2076C7] to-[#1CADA3] hover:shadow-lg transition-all cursor-pointer"
                >
                  Sign In
                </button>

                <div className="text-center pt-2 text-xs text-zinc-500">
                  New customer?{" "}
                  <Link href="/register" className="font-bold text-[#2076C7] hover:underline">
                    Create an account
                  </Link>
                </div>
              </form>
            </>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
