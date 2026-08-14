"use client";
import React from "react";
import { 
  PhoneCall, 
  Search, 
  FileText, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  AlertOctagon,
  ArrowRight
} from "lucide-react";

interface FireClaimProcessProps {
  onTalkToExpert?: () => void;
}

export default function FireClaimProcess({ onTalkToExpert }: FireClaimProcessProps) {
  const steps = [
    {
      number: "01",
      title: "Immediate Claim Intimation",
      desc: "Notify our 24x7 emergency helpline or digital claims desk within 24 hours of the fire or perils incident. Receive your unique claim tracking ID instantly.",
      icon: PhoneCall,
      highlight: "24x7 Helpline"
    },
    {
      number: "02",
      title: "Spot Surveyor Inspection",
      desc: "An IRDAI-licensed certified surveyor is deputed to the site within 24-48 hours to assess physical damages, take photographs, and minimize secondary loss.",
      icon: Search,
      highlight: "On-site within 24-48h"
    },
    {
      number: "03",
      title: "Document Submission",
      desc: "Upload Fire Brigade report, police FIR (if applicable), stock register records, repair estimates, and original bills via our secure digital portal.",
      icon: FileText,
      highlight: "100% Digital Upload"
    },
    {
      number: "04",
      title: "Approval & Direct Settlement",
      desc: "Following surveyor final assessment, approval is processed swiftly. Funds are directly disbursed to your verified bank account without delay.",
      icon: CheckCircle2,
      highlight: "Direct Bank Transfer"
    }
  ];

  const requiredDocuments = [
    "Duly filled & signed Fire Claim Form",
    "Fire Brigade Incident & Attendance Report",
    "Police First Information Report (FIR) / Panchanama",
    "Stock registers & audited balance sheet for stock claims",
    "Itemized repair / replacement quotation from contractors",
    "Photographs / video footage of damage before cleanup"
  ];

  return (
    <section className="py-14 md:py-20 bg-white border-b border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2076C7] text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Clock className="w-4 h-4" />
            <span>Fast-Track Claim Assistance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase">
            How Fire Claims <span className="bg-gradient-to-r from-[#2076C7] to-[#1CADA3] bg-clip-text text-transparent">Are Settled</span>
          </h2>

          <p className="mt-3 text-zinc-600 font-medium text-sm sm:text-base leading-relaxed">
            Our dedicated claim officers guide you at every single step to ensure zero hassle and maximum recovery.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="relative bg-zinc-50/70 hover:bg-white rounded-3xl p-6 border border-zinc-200/80 hover:border-[#2076C7]/50 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#2076C7]/30">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-bold bg-blue-100/60 text-[#2076C7] px-2.5 py-1 rounded-full">
                      {step.highlight}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-[#2076C7] mb-4 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h4 className="font-bold text-zinc-900 text-base mb-2">
                    {step.title}
                  </h4>

                  <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Documents Checklist Box */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/30">
                <AlertOctagon className="w-3.5 h-3.5" />
                <span>Documents Checklist</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Keep These Handy For Rapid Processing
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                Having these essential documents prepared helps our survey team clear your claims in record time without repeated clarifications.
              </p>
              
              {onTalkToExpert && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onTalkToExpert}
                    className="px-5 py-2.5 rounded-xl bg-white text-zinc-900 text-xs font-bold hover:bg-teal-50 hover:text-[#2076C7] transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Talk to Claim Specialist</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {requiredDocuments.map((doc, idx) => (
                <div 
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-start gap-2.5 text-xs text-zinc-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
