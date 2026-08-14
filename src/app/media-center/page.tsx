"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, Video, ArrowRight, X, Sparkles } from "lucide-react";

const GALLERY_IMAGES = [
  {
    src: "/images/media_1786698459253.png",
    alt: "Radio One Award Celebration",
    title: "Leadership Excellence recognition at the Radio One Awards Ceremony"
  },
  {
    src: "/images/media_1786698462892.png",
    alt: "Bharti Share Market recognition ceremony",
    title: "Honorary recognition ceremony celebrating financial literacy milestones"
  },
  {
    src: "/images/media_1786698466011.png",
    alt: "Ajit Pawar Leadership Award",
    title: "Distinguished Leadership Award presented by Deputy CM Ajit Pawar"
  },
  {
    src: "/images/media_1786698469173.png",
    alt: "Global Achievers Awards Ceremony",
    title: "SaaM TV Global Achievers Award celebrating stock market education contributions"
  }
];

const TESTIMONIALS_DATA = [
  { videoId: "gjHWhOqa_w4", title: "Mr. Shailendra Badal" },
  { videoId: "cwhO8l2fknU", title: "Mrs. Gaurav Sathe" },
  { videoId: "ovi8hSW1Rnc", title: "Mrs. Neha Khandave" },
  { videoId: "01HOVJVOOx4", title: "Mr. Rohit Donikar" },
  { videoId: "YRxFQ_sFHgY", title: "Mr. Chetan Rajukar" },
  { videoId: "UOQ2ARkHMec", title: "Mrs. Maitryee Deshmukh" }
];

function GalleryImage({ src, alt, title }: { src: string; alt: string; title: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1.5 w-full border border-gray-100 flex flex-col group">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <h4 className="text-base font-bold text-gray-800 leading-snug group-hover:text-[#2076C7] transition-colors duration-250">
          {title}
        </h4>
        <div className="flex items-center pt-3 mt-4 border-t border-gray-100">
          <div className="flex items-center text-xs font-bold text-[#1CADA3]">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 animate-pulse" />
            Bharti Achievements
          </div>
        </div>
      </div>
    </div>
  );
}

function YouTubeVideo({ videoId, title }: { videoId: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 w-full flex flex-col group">
      <div 
        className="relative w-full h-0 pb-[56.25%] overflow-hidden bg-gray-100 cursor-pointer"
        onClick={() => setIsPlaying(true)}
      >
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Soft dark gradient overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300" />
            
            {/* Custom animated play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-red-650 text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 active:scale-95 transition-all duration-300 pl-1">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <h4 className="text-base font-bold text-gray-800 leading-snug group-hover:text-[#2076C7] transition-colors duration-250">
          {title}
        </h4>
        <div className="flex items-center pt-3 mt-4 border-t border-gray-100 text-xs font-bold text-[#1CADA3]">
          <Sparkles className="w-3.5 h-3.5 mr-1.5 animate-pulse" />
          Student Testimonial
        </div>
      </div>
    </div>
  );
}

export default function MediaCenterPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        
        {/* Page Header (Celebrations at the Top) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-[#1CADA3] uppercase tracking-widest bg-[#E8F6FA] px-3 py-1 rounded-full border border-[#1CADA3]/10">
            Achievements & Recognition
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#2076C7] to-[#1CADA3] bg-clip-text text-transparent mt-4">
            Success & Awards Celebrations
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-3 leading-relaxed">
            Capturing memorable milestones and prestigious awards honoring stock market education excellence.
          </p>
        </div>

        {/* Celebrations & Awards Grid Section */}
        <div className="mb-20 pb-16 border-b border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {GALLERY_IMAGES.map((image, idx) => (
              <GalleryImage 
                key={idx} 
                src={image.src} 
                alt={image.alt} 
                title={image.title} 
              />
            ))}
          </div>
        </div>

        {/* Student Testimonials Grid Section */}
        <div className="mb-20 pb-16 border-b border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#2076C7] to-[#1CADA3] bg-clip-text text-transparent">
              Student Testimonials
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto">
              Discover inspiring success stories and testimonials from students at Bharti Share Market. Learn how our courses help you achieve financial independence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((testimonial, idx) => (
              <YouTubeVideo 
                key={idx}
                videoId={testimonial.videoId}
                title={testimonial.title}
              />
            ))}
          </div>
        </div>

        {/* Our Media Partners Grid Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-12 py-10 mb-12">
          {/* Left Column Description */}
          <div className="lg:col-span-4 flex flex-col justify-start text-left pr-4">
            <span className="text-xs font-extrabold text-[#1CADA3] uppercase tracking-widest bg-[#E8F6FA] px-3 py-1 rounded-full border border-[#1CADA3]/10 w-fit">
              OUR PARTNERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#2076C7] to-[#1CADA3] bg-clip-text text-transparent mt-4">
              Our Media Partners
            </h2>
            {/* Clean theme-colored accent line */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#2076C7] to-[#1CADA3] rounded-full mt-3 mb-6" />
            <p className="text-xs text-gray-500 leading-relaxed">
              Media partnerships are essential for enhancing brand visibility and establishing connections within various industries. 
              When pitching your event to media partners, it's essential to craft a compelling narrative that highlights its uniqueness and relevance. 
              Start by thoroughly researching potential media contacts to ensure your pitch aligns with their interests and audience.
            </p>
          </div>

          {/* Right Column Grid of Partner Logos */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 border-t pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:border-gray-200 lg:pl-6">
            {/* Column 1 */}
            <div className="flex flex-col items-center justify-center gap-10 py-6 border-r border-gray-200 px-6">
              <img src="/images/brand/sakal.webp" alt="Sakal" className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-all duration-300" />
              <img src="/images/brand/zeenews.webp" alt="Zee News" className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-all duration-300" />
              <img src="/images/brand/pvrcinemas.webp" alt="PVR Cinemas" className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-all duration-300" />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center justify-center gap-10 py-6 border-r border-gray-200 px-6">
              <img src="/images/brand/mirchi.webp" alt="Radio Mirchi" className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-all duration-300" />
              <img src="/images/brand/tv9marathi.webp" alt="TV9 Marathi" className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-all duration-300" />
              <img src="/images/brand/feverfm.webp" alt="Fever FM" className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-all duration-300" />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center justify-center gap-10 py-6 border-r border-gray-200 px-6">
              <img src="/images/brand/redfm.webp" alt="Red FM" className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-all duration-300" />
              <img src="/images/brand/saamtv.webp" alt="Saam TV" className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-all duration-300" />
              <img src="/images/brand/bigfm.webp" alt="Big FM" className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-all duration-300" />
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-center justify-center gap-10 py-6 px-6">
              <img src="/images/brand/zee24taas.webp" alt="Zee 24 Taas" className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-all duration-300" />
              <img src="/images/brand/pudhari.webp" alt="Pudhari" className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-all duration-300" />
              <div className="h-10 sm:h-12" /> {/* empty space element for matching height spacing */}
            </div>
          </div>
        </div>

      </main>

      {/* EDUCATIONAL VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setActiveVideo(null)}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm" 
          />

          <div className="relative w-full max-w-3xl bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-2xl z-10">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80 border border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-100 z-20 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="p-2 bg-gray-50">
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
