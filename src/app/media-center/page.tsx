"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, Video, ArrowRight, X } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
}

const ARTICLES_DATA: Article[] = [
  {
    id: "art-1",
    title: "How to Build a Diversified Portfolio for 2026",
    excerpt: "Learn the fundamentals of asset allocation across equities, mutual funds, and commodities to build long-term wealth.",
    date: "August 10, 2026",
    readTime: "5 min read",
    category: "Market Education",
    imageUrl: "💼",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: "art-2",
    title: "5 Common Trading Mistakes & How to Avoid Them",
    excerpt: "Over-leveraging, revenge trading, and ignoring stop-losses can ruin your capital. Read how to cultivate trader discipline.",
    date: "August 04, 2026",
    readTime: "7 min read",
    category: "Trader Psychology",
    imageUrl: "🧠"
  },
  {
    id: "art-3",
    title: "Understanding Candlestick Formations in 10 Minutes",
    excerpt: "A cheat sheet of the most powerful reversal signals: Hammer, Bullish Engulfing, and Shooting Star patterns.",
    date: "July 28, 2026",
    readTime: "4 min read",
    category: "Technical Analysis",
    imageUrl: "📈",
    videoUrl: "https://www.w3schools.com/html/movie.mp4"
  }
];

export default function MediaCenterPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#2076C7] uppercase tracking-widest">Media Center & News</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Webinars, Press & Market Updates</h1>
          <p className="text-sm text-zinc-400 mt-3">
            Stay informed with the latest updates from Bharti Share Market, watch financial educational videos, and read expert commentary.
          </p>
        </div>

        {/* Video Banner Play highlight */}
        <div className="relative aspect-video max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden mb-16 group flex items-center justify-center shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 z-10" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setActiveVideo("https://www.w3schools.com/html/mov_bbb.mp4")}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-[#2076C7] to-[#1CADA3] text-white flex items-center justify-center shadow-2xl shadow-[#2076C7]/20 group-hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer pl-1.5"
              aria-label="Play educational webinar intro video"
            >
              <Video className="w-8 h-8 fill-white" />
            </button>
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
              Featured Webinar Intro
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-white mt-3">
              Introduction to Technical Analysis & Option Scalping
            </h4>
            <p className="text-xs text-zinc-400 mt-1 max-w-xl">
              Watch this 5-minute teaser previewing our standard B2C Stock Market Masterclass.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((article) => (
            <div 
              key={article.id} 
              className="bg-zinc-900/30 border border-zinc-900 hover:border-zinc-850 rounded-2xl overflow-hidden p-6 flex flex-col justify-between transition-all text-left"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2076C7] mb-3 block">
                  {article.category}
                </span>

                <h4 className="text-base font-bold text-white mb-2.5 line-clamp-2 hover:text-[#2076C7] transition-colors">
                  {article.title}
                </h4>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {article.videoUrl ? (
                <button
                  onClick={() => setActiveVideo(article.videoUrl || null)}
                  className="flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 w-fit cursor-pointer"
                >
                  <Video className="w-4 h-4" />
                  Watch Video Lesson
                </button>
              ) : (
                <a
                  href="#media-center"
                  className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white w-fit"
                >
                  Read full article
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* EDUCATIONAL VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setActiveVideo(null)}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm" 
          />

          <div className="relative w-full max-w-3xl bg-zinc-955 border border-zinc-900 rounded-2xl overflow-hidden shadow-2xl z-10">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-850 z-20 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="p-1.5">
              <video 
                src={activeVideo} 
                controls 
                autoPlay 
                className="w-full rounded-lg aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
