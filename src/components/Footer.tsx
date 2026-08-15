"use client";

import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin,
  Sparkles
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1C2E] text-gray-300 pt-14 pb-8 mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Logo & Company Names */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-base font-bold tracking-tight text-white">BHARTI MALL</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-205">
                Market King Business Services Limited
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Formerly known as R Bharti Enterprises Ltd.
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Formerly known as Ravindra Bharti Buizcorp Limited
              </p>
            </div>
          </div>

          {/* Our Courses */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-linear-to-r after:from-[#2076C7] after:to-[#1CADA3] after:mt-2">
              Our Courses
            </h3>
            <ul className="space-y-2 text-sm text-gray-405">
              <li>
                <a 
                  href="https://bhartisharemarket.com/online-share-market-course" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#1CADA3] transition-colors duration-200"
                >
                  Mastery in Trading & Investment-Online
                </a>
              </li>
              <li>
                <a 
                  href="https://bhartisharemarket.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#1CADA3] transition-colors duration-200"
                >
                  Mastery in Trading & Investment-Offline
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-linear-to-r after:from-[#2076C7] after:to-[#1CADA3] after:mt-2">
              Contacts
            </h3>
            <ul className="space-y-2 text-sm text-gray-405">
              <li>
                <a 
                  href="https://bhartisharemarket.com/about-us" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#1CADA3] transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="https://bhartisharemarket.com/contact-us" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#1CADA3] transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="https://bhartisharemarket.com/faq" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#1CADA3] transition-colors duration-200"
                >
                  Faq's
                </a>
              </li>
              <li>
                <a 
                  href="/terms-and-conditions"
                  className="hover:text-[#1CADA3] transition-colors duration-200"
                >
                  Terms And Conditions
                </a>
              </li>
              <li>
                <a 
                  href="/privacy-policy"
                  className="hover:text-[#1CADA3] transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/refund-policy"
                  className="hover:text-[#1CADA3] transition-colors duration-200"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details / Reach Us */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-linear-to-r after:from-[#2076C7] after:to-[#1CADA3] after:mt-2">
              Reach Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-405">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#1CADA3] shrink-0" />
                <a href="tel:+917057101010" className="hover:text-[#1CADA3] transition-colors duration-200">
                  +91 7057101010
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#1CADA3] shrink-0" />
                <a href="mailto:support@bhartisharemarket.com" className="hover:text-[#1CADA3] transition-colors duration-200">
                  support@bhartisharemarket.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1CADA3] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>Head Office:</strong> No 4110, 4th Floor, Marvel Fuego, Near Amanora Mall, Opp Seasons Mall, Magarpatta, Pune 411036.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimers & Notes */}
        <div className="pt-8 border-t border-gray-750 space-y-4 text-xs text-gray-400 leading-relaxed">
          <p>
            <span className="font-bold text-white">Disclaimer:</span> We do not provide any tips or advisory. This is only education and learning platform. Investment In Stock market is subject to market risk. There are no assured / Fixed / Guaranteed returns in the stock market so invest as per your risk appetite and read all the documents carefully.
          </p>
          <p className="flex items-center gap-1">
            <span className="font-bold text-[#1CADA3] flex items-center gap-1 shrink-0">
              <Sparkles className="w-3.5 h-3.5 inline animate-pulse" />
              IMP Note:
            </span>{" "}
            As Per SEBI Guidelines We Teach Based on The Data which is Older Than Three Months.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-4 text-center">
          
          <p className="text-sm text-gray-400">
            © 2026 <span className="font-medium text-white">Bharti Share Market</span> — All Rights Reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>
              Designed By{" "}
              <a 
                href="https://digitizebrand.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#1CADA3] transition-colors font-semibold text-white"
              >
                DigitizeBrand
              </a>
            </span>
          </div>

        </div>

      </div>

      {/* Bottom Gradient */}
      <div className="mt-8 h-1 bg-linear-to-r from-[#2076C7] to-[#1CADA3]"></div>
    </footer>
  );
}
