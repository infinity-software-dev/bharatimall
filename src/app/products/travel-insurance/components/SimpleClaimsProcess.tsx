"use client";

import React, { useState } from "react";
import { FileText, Upload, CheckSquare, Headphones, ArrowRight } from "lucide-react";

interface SimpleClaimsProcessProps {
  onStartNotification?: () => void;
}

export default function SimpleClaimsProcess({ onStartNotification }: SimpleClaimsProcessProps) {
  const [notificationSent, setNotificationSent] = useState(false);

  const steps = [
    {
      icon: FileText,
      title: "Report Incident",
      desc: "Notify us within 24 hours of the incident."
    },
    {
      icon: Upload,
      title: "Upload Files",
      desc: "Submit receipts and reports through our portal."
    },
    {
      icon: CheckSquare,
      title: "Claim Review",
      desc: "Our experts verify your claim within 48 hours."
    },
    {
      icon: Headphones,
      title: "Settlement",
      desc: "Approved claims paid out directly to your account."
    }
  ];

  const handleStartNotification = () => {
    if (onStartNotification) {
      onStartNotification();
    } else {
      setNotificationSent(true);
      setTimeout(() => setNotificationSent(false), 3000);
    }
  };

  return (
    <section className="py-14 lg:py-20 bg-white border-t border-zinc-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            Simple 4-Step Claims Process
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Our claims team is available 24/7 to ensure your international journey stays protected.
          </p>
        </div>

        {/* Horizontal Connected Timeline */}
        <div className="relative">
          {/* Connecting Line (hidden on small mobile, visible sm+) */}
          <div className="hidden sm:block absolute top-7 left-[10%] right-[10%] h-[2px] bg-sky-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#008ba3] text-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mt-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-[210px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Start Notification Button */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={handleStartNotification}
            className="px-8 py-3.5 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            style={{ background: "linear-gradient(to right, #1CADA3, #2076C7)" }}
          >
            <span>{notificationSent ? "HELPLINE INITIATED ✓" : "START NOTIFICATION"}</span>
            {!notificationSent && <ArrowRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Disclaimer Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-center max-w-4xl mx-auto shadow-2xs">
          <p className="text-xs text-gray-700 leading-relaxed">
            <strong className="text-gray-900 font-bold">Disclaimer:</strong> Information and premium quotes provided are for general guidance and are subject to change. Please verify all details with the respective insurance providers before making a final decision.
          </p>
        </div>

      </div>
    </section>
  );
}
