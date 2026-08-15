"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  title: string;
  funds: any[];
  renderItem: (item: any) => React.ReactNode;
}

export default function TopPicksSection({ title, funds, renderItem }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 2);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [funds]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 350);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section 
      className="space-y-6 relative max-w-[1400px] mx-auto px-4 font-sans"
      aria-labelledby="top-picks-heading"
    >
      <h2 
        id="top-picks-heading"
        className="text-xl sm:text-2xl font-extrabold text-center text-[#171717] mb-6 tracking-tight"
      >
        {title}
      </h2>
      
      <div 
        className="relative group px-2 md:px-6"
        role="region"
        aria-label={`${title} carousel`}
      >
        {/* Left Arrow */}
        {funds.length > 3 && showLeft && (
          <button
            onClick={scrollLeft}
            aria-label={`Scroll ${title} left`}
            title={`Previous ${title} items`}
            className="absolute -left-2 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white p-2.5 md:p-3 rounded-full shadow-lg border border-[#E5E5E0] hover:bg-[#FFF8D6] text-[#171717] transition-all flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F4C430] focus:ring-offset-2"
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>
        )}

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory hide-scrollbar pb-6 pt-2 px-2 items-stretch"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          role="list"
          aria-label={`${title} items`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              e.preventDefault();
              scrollLeft();
            } else if (e.key === 'ArrowRight') {
              e.preventDefault();
              scrollRight();
            }
          }}
        >
          {funds.map((fund, index) => (
            <div
              key={`${fund.schemeCode || fund.code}-${fund.name}`}
              role="listitem"
              aria-label={`${fund.name || fund.schemeName || `Item ${index + 1}`}`}
              aria-roledescription="slide"
              aria-setsize={funds.length}
              aria-posinset={index + 1}
              className="w-[85vw] md:w-[calc(80%)] lg:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)] flex-shrink-0 snap-center md:snap-start h-auto"
            >
              {renderItem(fund)}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {funds.length > 3 && showRight && (
          <button
            onClick={scrollRight}
            aria-label={`Scroll ${title} right`}
            title={`Next ${title} items`}
            className="absolute -right-2 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white p-2.5 md:p-3 rounded-full shadow-lg border border-[#E5E5E0] hover:bg-[#FFF8D6] text-[#171717] transition-all flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F4C430] focus:ring-offset-2"
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Visually hidden description for screen readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {`Showing ${funds.length} ${title.toLowerCase()} items. Use arrow keys or buttons to navigate.`}
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}