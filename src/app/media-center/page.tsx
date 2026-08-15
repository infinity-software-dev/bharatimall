"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  Award,
  Users,
  Handshake,
} from "lucide-react";

// Top 4 Awards Data (Matching Screenshot)
const TOP_AWARDS = [
  {
    id: 1,
    image: "/images/media_1786698459253.png",
    alt: "Radio One Leadership Excellence Award",
    title: "Radio One Leadership Excellence Award",
    category: "Industry Honor"
  },
  {
    id: 2,
    image: "/images/media_1786698462892.png",
    alt: "National Felicitation & Memento Presentation",
    title: "National Felicitation & Memento Presentation",
    category: "National Honor"
  },
  {
    id: 3,
    image: "/images/media_1786698466011.png",
    alt: "Maharashtra State Business Achievers Felicitation",
    title: "Maharashtra State Business Achievers Felicitation",
    category: "State Honor"
  },
  {
    id: 4,
    image: "/images/media_1786698469173.png",
    alt: "SaaM TV Global Achievers Leadership Trophy",
    title: "SaaM TV Global Achievers Leadership Trophy",
    category: "Media Award"
  }
];

// Section 1: Success Stories Data
const SUCCESS_STORIES = [
  {
    type: "image",
    image: "/gallery/gallery1.png",
    alt: "Bharti Share Market at Sakal Vastu Expo",
    title: "Empowering Dreams, Enabling Investments – Bharti Share Market at Sakal Vastu Expo",
    description: "Expert investment guidance and financial literacy empowerment for future investors at Sakal Vastu Expo.",
    category: "Event Coverage"
  },
  {
    type: "image",
    image: "/gallery/gallery7.png",
    alt: "Success Talk with Senior Mentors",
    title: "Success Talk with Senior Mentors & Market Leaders",
    description: "Inspiring stock trading journeys and strategies shared by our expert mentors.",
    category: "Mentor Talk"
  },
  {
    type: "image",
    image: "/gallery/gallery3.png",
    alt: "Winner at ET Business Awards",
    title: "🏆 Winner at ET Business Awards – Pune",
    description: "A milestone achievement celebrating vision, execution, and excellence in retail financial services.",
    category: "Award"
  }
];

// Section 2: Achievers & Leadership Contests Data
const ACHIEVERS_CONTESTS = [
  {
    title: "Annual Achievers Meet",
    description: "Celebrating dedication, leadership, and outstanding performance across our enterprise. Congratulations to all achievers who made this milestone truly special!",
    images: [
      "/gallery/gallery4.png",
      "/gallery/gallery5.png",
      "/gallery/gallery6.png"
    ],
    stats: { attendees: 250, awards: 45 },
    featured: true
  },
  {
    title: "National Leadership Summit",
    description: "Our journey of passion, purpose, and investor empowerment reaching new heights. Proud of every mentor, educator, and team member who made this success possible!",
    images: [
      "/gallery/gallery7.png",
      "/gallery/gallery8.png",
      "/gallery/gallery9.png"
    ],
    stats: { attendees: 180, awards: 30 },
    featured: false
  }
];

// Section 3: Business Events Data
const BUSINESS_EVENTS = [
  {
    title: "Regional Investors Meet & Workshop",
    date: "Annual Edition",
    subtitle: "Meeting success, exchanging strategies & exceeding goals",
    location: "Regional Business Hub",
    images: [
      "/gallery/gallery10.png",
      "/gallery/gallery11.png",
      "/gallery/gallery12.png",
      "/gallery/gallery13.png"
    ]
  },
  {
    title: "Investors Mega Conclave & Seminar",
    date: "Special Session",
    subtitle: "Empowering hundreds with practical price-action and wealth management insights",
    location: "Corporate Hubs",
    images: [
      "/gallery/gallery14.png",
      "/gallery/gallery15.png",
      "/gallery/gallery16.png"
    ]
  }
];

// Section 4: Life at Bharti Share Market Photos
const LIFE_AT_BHARTI_IMAGES = [
  { src: "/gallery/gallery13.png", alt: "Team Celebration at Bharti Share Market" },
  { src: "/gallery/gallery14.png", alt: "Festive Traditional Day at Pune Head Office" },
  { src: "/gallery/gallery15.png", alt: "Leadership and Mentors Group" },
  { src: "/gallery/gallery16.png", alt: "All-Hands Community Meet & Strategy Session" },
  { src: "/gallery/gallery17.png", alt: "Milestone Celebration & Certificate Ceremony" },
  { src: "/gallery/gallery18.png", alt: "Faculty and Research Analysts Discussion" }
];

// Media Partners Data
const MEDIA_PARTNERS = [
  { name: "Sakal", logo: "/images/brand/sakal.webp", type: "Newspaper" },
  { name: "Zee News", logo: "/images/brand/zeenews.webp", type: "TV Channel" },
  { name: "PVR Cinemas", logo: "/images/brand/pvrcinemas.webp", type: "Cinema" },
  { name: "Radio Mirchi", logo: "/images/brand/mirchi.webp", type: "Radio" },
  { name: "TV9 Marathi", logo: "/images/brand/tv9marathi.webp", type: "TV Channel" },
  { name: "Fever FM", logo: "/images/brand/feverfm.webp", type: "Radio" },
  { name: "Red FM", logo: "/images/brand/redfm.webp", type: "Radio" },
  { name: "Saam TV", logo: "/images/brand/saamtv.webp", type: "TV Channel" },
  { name: "Big FM", logo: "/images/brand/bigfm.webp", type: "Radio" },
  { name: "Zee 24 Taas", logo: "/images/brand/zee24taas.webp", type: "TV Channel" },
  { name: "Pudhari", logo: "/images/brand/pudhari.webp", type: "Newspaper" }
];

// Image Carousel Component
function ImageCarousel({ images, altPrefix }: { images: string[]; altPrefix: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F5F5F3] group">
      <img
        src={images[currentIndex]}
        alt={`${altPrefix} slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#292929]/70 hover:bg-[#292929] text-[#F4C430] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#292929]/70 hover:bg-[#292929] text-[#F4C430] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`transition-all duration-300 cursor-pointer ${currentIndex === idx
              ? "bg-[#F4C430] w-5 h-1.5 rounded-full"
              : "bg-white/70 hover:bg-white w-1.5 h-1.5 rounded-full"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

// Story Card Component
function StoryCard({ image, alt, title, description, category }: any) {
  return (
    <div className="bg-white border border-[#E5E5E0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F5F5F3]">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-[#FFF8D6] text-[#F4C430] border border-[#F4C430]/40 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
            {category}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-base font-bold text-[#F4C430] leading-snug">
            {title}
          </h3>
          <p className="text-xs text-[#6B6B6B] mt-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

// Featured Event Card Component
function FeaturedEventCard({ title, description, images, stats }: any) {
  return (
    <div className="bg-white border border-[#E5E5E0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300">
      <ImageCarousel images={images} altPrefix={title} />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="px-2.5 py-0.5 bg-[#FFF8D6] border border-[#F4C430]/40 rounded-full text-[10px] font-bold text-[#F4C430]">
            Featured
          </div>
          <div className="px-2.5 py-0.5 bg-[#F5F5F3] rounded-full text-[10px] font-semibold text-[#6B6B6B]">
            Annual Edition
          </div>
        </div>
        <h3 className="text-lg sm:text-xl font-extrabold text-[#F4C430] mb-2">{title}</h3>
        <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">{description}</p>
        <div className="mt-4 pt-4 border-t border-[#F5F5F3] flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#F4C430]" />
            <span className="text-sm font-bold text-[#F4C430]">{stats.attendees}+</span>
            <span className="text-xs text-[#6B6B6B]">Attendees</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#F4C430]" />
            <span className="text-sm font-bold text-[#F4C430]">{stats.awards}+</span>
            <span className="text-xs text-[#6B6B6B]">Felicitations</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MediaCenterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF5] text-[#292929] font-sans antialiased">
      <Header />

      {/* ========================================================================= */}
      {/* 1. MEDIA CENTER HERO BANNER & AWARDS COMBINED SEAMLESSLY (No Divider Line) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#FFFDF5] pt-14 pb-8 sm:pt-16 sm:pb-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4C430]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F4C430]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header Title & Tagline */}
          <div className="text-center mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF8D6] border border-[#F4C430]/40 text-[#F4C430] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#F4C430]" />
              Bharti Share Market
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F4C430] tracking-tight leading-tight">
              Media Center
            </h1>
            <p className="text-sm sm:text-base text-[#6B6B6B] mt-3 max-w-2xl mx-auto leading-relaxed">
              Explore success stories, national awards, leadership events, and corporate milestones across our enterprise
            </p>
          </div>

          {/* Awards Heading & Curved Underline (Directly Below Tagline, text-[#F4C430] Heading) */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4C430] tracking-tight">
              Awards
            </h2>
            <div className="flex justify-center mt-1.5">
              <svg 
                viewBox="0 0 120 16" 
                className="w-24 sm:w-28 h-3.5 text-[#F4C430] fill-none stroke-current stroke-[4] stroke-linecap-round"
              >
                <path d="M 8,11 Q 60,3 112,11" />
              </svg>
            </div>
          </div>

          {/* 4 Awards Images Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TOP_AWARDS.map((award) => (
              <div 
                key={award.id}
                className="bg-white border border-[#E5E5E0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F5F5F3]">
                  <img 
                    src={award.image} 
                    alt={award.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SEQUENTIAL MEDIA CONTENT SECTIONS */}
      {/* ========================================================================= */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full space-y-16 sm:space-y-20 bg-[#FFFDF5]">

        {/* Section 1: Success Stories */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-[#E5E5E0]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#F4C430]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4C430]">Highlights</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4C430] tracking-tight">
                Success Stories & Keynote Addresses
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1">
                Inspiring investment journeys, mentor insights, and marquee exhibition features
              </p>
            </div>
            <span className="text-xs text-[#F4C430] bg-[#FFF8D6] px-3 py-1.5 rounded-full font-bold border border-[#F4C430]/40 w-fit shadow-2xs">
              {SUCCESS_STORIES.length} Featured Highlights
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUCCESS_STORIES.map((story, idx) => (
              <StoryCard key={idx} {...story} />
            ))}
          </div>
        </section>

        {/* Section 2: Featured Achievers */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-[#E5E5E0]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#F4C430]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4C430]">Recognition</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4C430] tracking-tight">
                Featured Achievers & Leadership Summits
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1">
                Celebrating outstanding dedication, regional directors, and annual milestones
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ACHIEVERS_CONTESTS.map((contest, idx) => (
              <FeaturedEventCard key={idx} {...contest} />
            ))}
          </div>
        </section>

        {/* Section 3: Business Events & Conclaves */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-[#E5E5E0]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#F4C430]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4C430]">Pan-India Meets</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4C430] tracking-tight">
                Conclaves & Regional Forums
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1">
                Full-day strategy sessions, market analysis forums, and wealth preservation expos
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BUSINESS_EVENTS.map((evt, idx) => (
              <div key={idx} className="bg-white border border-[#E5E5E0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                <ImageCarousel images={evt.images} altPrefix={evt.title} />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-base text-[#F4C430]">{evt.title}</h4>
                    <span className="text-[10px] font-bold bg-[#FFF8D6] text-[#F4C430] px-2.5 py-0.5 rounded-full border border-[#F4C430]/40 whitespace-nowrap">
                      {evt.date}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6B6B] mt-1.5 leading-relaxed">{evt.subtitle}</p>
                  <div className="mt-3 flex items-center text-xs font-semibold text-[#F4C430] bg-[#FFF8D6]/60 px-3 py-1.5 rounded-xl w-fit border border-[#F4C430]/20">
                    <MapPin className="w-3.5 h-3.5 text-[#F4C430] mr-1.5 shrink-0" />
                    <span>{evt.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Life at Bharti Share Market */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-[#E5E5E0]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#F4C430]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4C430]">Culture & Community</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4C430] tracking-tight">
                Life at Bharti Share Market
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1">
                Behind the scenes, team culture, campus events, and celebrations across our enterprise
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
            {LIFE_AT_BHARTI_IMAGES.map((img, idx) => (
              <div key={idx} className="bg-white border border-[#E5E5E0] rounded-2xl overflow-hidden shadow-xs flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F3]">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </div>
                <div className="p-3.5 bg-white">
                  <p className="text-xs font-semibold text-[#F4C430] line-clamp-1">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Our Media Partners */}
        <section className="bg-white border border-[#E5E5E0] rounded-3xl overflow-hidden shadow-xs">
          <div className="bg-gradient-to-r from-[#FFFDF5] to-[#FFF8D6] px-6 sm:px-8 py-8 border-b border-[#E5E5E0]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#F4C430]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4C430]">
                    Our Partners
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4C430] tracking-tight">
                  Our Media Partners
                </h2>
                <p className="text-xs sm:text-sm text-[#6B6B6B] mt-2 max-w-3xl leading-relaxed">
                  Media partnerships are essential for enhancing brand visibility and establishing connections within various industries. We collaborate with leading publications, broadcast networks, and digital channels to share compelling market narratives.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#F4C430] bg-[#FFF8D6] px-4 py-2 rounded-full border border-[#F4C430]/40 shrink-0 w-fit shadow-2xs">
                <Handshake className="w-4 h-4 text-[#F4C430]" />
                <span>{MEDIA_PARTNERS.length}+ Media Alliances</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-white">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {MEDIA_PARTNERS.map((partner, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 bg-[#FFFDF5] rounded-2xl border border-[#E5E5E0] hover:border-[#F4C430] flex flex-col items-center justify-center gap-3 shadow-2xs hover:shadow-md transition-all group"
                >
                  <div className="h-14 sm:h-16 w-full flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-11 sm:max-h-12 w-auto object-contain filter contrast-110" 
                    />
                  </div>
                  <span className="text-xs font-bold text-[#F4C430] text-center">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}