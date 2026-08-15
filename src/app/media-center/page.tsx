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
  Calendar,
  Camera,
  Trophy
} from "lucide-react";

// Top 4 Awards Data
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
    category: "Event Coverage",
    badgeColor: "magenta"
  },
  {
    type: "image",
    image: "/gallery/gallery7.png",
    alt: "Success Talk with Senior Mentors",
    title: "Success Talk with Senior Mentors & Market Leaders",
    description: "Inspiring stock trading journeys and strategies shared by our expert mentors.",
    category: "Mentor Talk",
    badgeColor: "magenta"
  },
  {
    type: "image",
    image: "/gallery/gallery3.png",
    alt: "Winner at ET Business Awards",
    title: "🏆 Winner at ET Business Awards – Pune",
    description: "A milestone achievement celebrating vision, execution, and excellence in retail financial services.",
    category: "Award",
    badgeColor: "magenta"
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
    edition: "Annual Edition"
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
    edition: "National Edition"
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
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 backdrop-blur-xs cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 backdrop-blur-xs cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 cursor-pointer ${currentIndex === idx
              ? "bg-[#E91E63] w-5 h-1.5 rounded-full"
              : "bg-white/80 hover:bg-white w-1.5 h-1.5 rounded-full"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

// Story Card Component with Crisp Design and Magenta Badge
function StoryCard({ image, alt, title, description, category }: any) {
  return (
    <div className="bg-white border border-[#E5E5E0] hover:border-[#E91E63]/40 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F5F5F3]">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Brand Magenta Pill Badge */}
          <div className="absolute top-3 left-3 bg-[#FCE4EC] text-[#E91E63] border border-[#E91E63]/30 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-2xs">
            {category}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-base font-bold text-[#171717] group-hover:text-[#E91E63] transition-colors duration-200 leading-snug">
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
function FeaturedEventCard({ title, description, images, stats, edition }: any) {
  return (
    <div className="bg-white border border-[#E5E5E0] hover:border-[#E91E63]/40 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group">
      <ImageCarousel images={images} altPrefix={title} />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="px-2.5 py-0.5 bg-[#FCE4EC] text-[#E91E63] border border-[#E91E63]/25 rounded-full text-[10px] font-bold">
            Featured
          </span>
          <span className="px-2.5 py-0.5 bg-[#F5F5F3] text-[#6B6B6B] rounded-full text-[10px] font-semibold">
            {edition}
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-extrabold text-[#171717] group-hover:text-[#E91E63] transition-colors mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
          {description}
        </p>
        <div className="mt-5 pt-4 border-t border-[#E5E5E0] flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#FCE4EC] flex items-center justify-center text-[#E91E63]">
              <Users className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#171717] block">{stats.attendees}+</span>
              <span className="text-[10px] text-[#8E8E8E]">Attendees</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#FFF8D6] flex items-center justify-center text-[#B27B00]">
              <Award className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#171717] block">{stats.awards}+</span>
              <span className="text-[10px] text-[#8E8E8E]">Felicitations</span>
            </div>
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
      {/* 1. HERO BANNER & AWARDS SHOWCASE (Soft Off-White #FFFDF5 Theme) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#FFFDF5] pt-14 pb-10 sm:pt-16 sm:pb-12 overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#FFF8D6]/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#FCE4EC]/35 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Header Title & Tagline */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCE4EC] border border-[#E91E63]/25 text-[#E91E63] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E91E63]" />
              Media & Corporate Highlights
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#171717] tracking-tight leading-[1.12]">
              Media Center
            </h1>
            <p className="text-sm sm:text-base text-[#6B6B6B] mt-3.5 max-w-2xl mx-auto leading-relaxed">
              Explore success stories, national awards, leadership events, and corporate milestones across our enterprise.
            </p>
          </div>

          {/* Awards Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E91E63] uppercase tracking-wider mb-1">
              <Trophy className="w-3.5 h-3.5" />
              <span>National Honors & Recognition</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
              Awards & Felicitations
            </h2>
            <div className="w-12 h-1 bg-[#F4C430] mx-auto mt-2.5 rounded-full" />
          </div>

          {/* 4 Awards Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {TOP_AWARDS.map((award) => (
              <div
                key={award.id}
                className="bg-white border border-[#E5E5E0] hover:border-[#E91E63]/40 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F5F5F3]">
                  <img
                    src={award.image}
                    alt={award.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#FFF8D6] text-[#B27B00] border border-[#F4C430]/40 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
                    {award.category}
                  </div>
                </div>
                <div className="p-3.5 bg-white flex-1 flex flex-col justify-center">
                  <h3 className="text-xs font-bold text-[#171717] group-hover:text-[#E91E63] transition-colors line-clamp-2 leading-snug">
                    {award.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SEQUENTIAL MEDIA CONTENT SECTIONS (Soft Warm #FFFDF5 Theme) */}
      {/* ========================================================================= */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full space-y-14 sm:space-y-16 bg-[#FFFDF5]">

        {/* Section 1: Success Stories */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-[#E5E5E0]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FCE4EC] text-[#E91E63] text-[10px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Highlights</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                Success Stories & Keynote Addresses
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1">
                Inspiring investment journeys, mentor insights, and marquee exhibition features
              </p>
            </div>
            <span className="text-xs text-[#E91E63] bg-[#FCE4EC] px-3.5 py-1.5 rounded-full font-bold border border-[#E91E63]/25 w-fit shadow-2xs">
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
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FCE4EC] text-[#E91E63] text-[10px] font-bold uppercase tracking-wider mb-2">
                <Trophy className="w-3 h-3" />
                <span>Recognition</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
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
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFF8D6] text-[#B27B00] border border-[#F4C430]/40 text-[10px] font-bold uppercase tracking-wider mb-2">
                <Calendar className="w-3 h-3" />
                <span>Pan-India Meets</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                Conclaves & Regional Forums
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1">
                Full-day strategy sessions, market analysis forums, and wealth preservation expos
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BUSINESS_EVENTS.map((evt, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#E5E5E0] hover:border-[#E91E63]/40 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <ImageCarousel images={evt.images} altPrefix={evt.title} />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-base text-[#171717] group-hover:text-[#E91E63] transition-colors">{evt.title}</h3>
                    <span className="text-[10px] font-bold bg-[#FCE4EC] text-[#E91E63] px-2.5 py-0.5 rounded-full border border-[#E91E63]/25 whitespace-nowrap">
                      {evt.date}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6B6B] mt-1.5 leading-relaxed">{evt.subtitle}</p>
                  <div className="mt-3 flex items-center text-xs font-semibold text-[#E91E63] bg-[#FCE4EC]/60 px-3 py-1.5 rounded-xl w-fit border border-[#E91E63]/20">
                    <MapPin className="w-3.5 h-3.5 text-[#E91E63] mr-1.5 shrink-0" />
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
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FCE4EC] text-[#E91E63] text-[10px] font-bold uppercase tracking-wider mb-2">
                <Camera className="w-3 h-3" />
                <span>Culture & Campus</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                Life at Bharti Share Market
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1">
                Behind the scenes, team culture, campus events, and celebrations across our enterprise
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
            {LIFE_AT_BHARTI_IMAGES.map((img, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#E5E5E0] hover:border-[#E91E63]/40 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F3]">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-3.5 bg-white">
                  <p className="text-xs font-semibold text-[#171717] group-hover:text-[#E91E63] transition-colors line-clamp-1">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}