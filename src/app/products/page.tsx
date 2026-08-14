"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Search, CheckCircle, ShoppingBag } from "lucide-react";

interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  image: string;
}

const PRODUCTS_DATA: Product[] = [
  {
    id: "prod-1",
    title: "Stock Market Masterclass",
    description: "Go from absolute beginner to profitable trader. Covers option strategy, price action, and risk management.",
    category: "Courses",
    price: 199,
    originalPrice: 499,
    rating: 4.9,
    reviewsCount: 1420,
    badge: "Bestseller",
    image: "📊"
  },
  {
    id: "prod-2",
    title: "Technical Analysis E-Book Bundle",
    description: "The complete guide to chart patterns, Japanese candlesticks, and market volume analysis. Lifetime updates.",
    category: "E-Books",
    price: 29,
    originalPrice: 79,
    rating: 4.8,
    reviewsCount: 684,
    badge: "Save 63%",
    image: "📚"
  },
  {
    id: "prod-3",
    title: "Live Trading Advisory Pack",
    description: "1-Month access to our exclusive daily live trading room, analysis channels, and real-time market updates.",
    category: "Advisory",
    price: 89,
    originalPrice: 199,
    rating: 4.7,
    reviewsCount: 312,
    badge: "Popular",
    image: "📈"
  },
  {
    id: "prod-4",
    title: "Pro Trader Excel Dashboard",
    description: "Automated risk-reward calculator, trading journal log, and asset allocation tracker built for high performance.",
    category: "Tools",
    price: 19,
    originalPrice: 49,
    rating: 4.6,
    reviewsCount: 245,
    image: "💻"
  },
  {
    id: "prod-5",
    title: "Bharti Wealth Annual Magazine",
    description: "Get 12 monthly issues of financial insights, mutual fund ratings, and stock picks delivered to your doorstep.",
    category: "Media",
    price: 49,
    originalPrice: 99,
    rating: 4.8,
    reviewsCount: 89,
    image: "📰"
  },
  {
    id: "prod-6",
    title: "Intraday Scalping Strategy Book",
    description: "Unlock 5 highly effective, battle-tested indicators and quick rules for 1-minute chart momentum scalping.",
    category: "E-Books",
    price: 15,
    originalPrice: 35,
    rating: 4.5,
    reviewsCount: 190,
    badge: "New Release",
    image: "⚡"
  }
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = ["All", "Courses", "E-Books", "Advisory", "Tools", "Media"];

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesSearch = 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-xs font-bold text-[#2076C7] uppercase tracking-widest mb-2">B2C Premium Catalog</h2>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Our E-Learning & Advisor Store</h1>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              Elevate your stock trading skills with expert-compiled learning resources, professional templates, and live advisory access.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2.5 pl-10 pr-4 text-sm text-zinc-200 focus:outline-none focus:border-[#2076C7]"
            />
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-zinc-900">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#2076C7] to-[#1CADA3] text-white shadow-md shadow-[#2076C7]/10"
                  : "bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
              return (
                <div 
                  key={product.id} 
                  className="glass-card rounded-2xl overflow-hidden p-6 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        {product.image}
                      </div>
                      {product.badge ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                          {product.badge}
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                          {discount}% Off
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {product.title}
                    </h4>

                    <div className="flex items-center gap-1.5 mb-3.5">
                      <div className="flex text-amber-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3.5 h-3.5 ${
                              i < Math.floor(product.rating) ? "fill-amber-500 text-amber-500" : "text-zinc-700"
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-zinc-300">{product.rating}</span>
                      <span className="text-xs text-zinc-500">({product.reviewsCount})</span>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-zinc-500 line-through">
                        ${product.originalPrice}
                      </span>
                      <span className="text-xl font-black text-white">
                        ${product.price}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setAddedId(product.id);
                        setTimeout(() => setAddedId(null), 1500);
                      }}
                      className={`flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        addedId === product.id
                          ? "bg-green-500 text-zinc-950"
                          : "bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-gradient-to-r hover:from-[#2076C7] hover:to-[#1CADA3] hover:border-transparent hover:text-white"
                      }`}
                    >
                      {addedId === product.id ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Added
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          Buy Product
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-900/20 border border-zinc-900 rounded-2xl">
            <h4 className="text-lg font-bold text-white">No products found</h4>
            <p className="text-xs text-zinc-500 max-w-xs mx-auto mt-2">
              Try adjusting your search criteria.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
