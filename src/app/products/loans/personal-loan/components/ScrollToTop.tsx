"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 z-50 p-3 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-full border border-[#E5E5E0] shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                }`}
        >
            <ArrowUp size={22} strokeWidth={2.5} />
        </button>
    );
}