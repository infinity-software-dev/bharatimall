"use client";

import React from "react";
import { Shield, ShieldCheck, Car, CheckCircle2, XCircle } from "lucide-react";

export default function MotorCoverageComparison() {
  const comparisonData = [
    {
      feature: "Third Party Liabilities",
      tp: true,
      comp: true,
      od: false
    },
    {
      feature: "Damages from Accidents",
      tp: false,
      comp: true,
      od: true
    },
    {
      feature: "Theft & Burglary",
      tp: false,
      comp: true,
      od: true
    },
    {
      feature: "Fire & Explosions",
      tp: false,
      comp: true,
      od: true
    },
    {
      feature: "Natural Calamities",
      tp: false,
      comp: true,
      od: true
    },
    {
      feature: "Personal Accident Cover",
      tp: true,
      comp: true,
      od: false
    },
    {
      feature: "Add-on Coverage",
      tp: false,
      comp: true,
      od: true
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-white border-t border-zinc-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17859c] tracking-tight">
            Compare Policy Coverages
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            A quick comparison to help you understand the protection offered by different plans.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="py-6 px-6 sm:px-8 text-xs sm:text-sm font-bold text-gray-900 tracking-wider">
                    Features & Benefits
                  </th>
                  
                  {/* Third-Party Column */}
                  <th className="py-6 px-4 text-center">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                        <Shield className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-gray-800">
                        Third-Party<br />Liability
                      </span>
                    </div>
                  </th>

                  {/* Comprehensive Column */}
                  <th className="py-6 px-4 text-center">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-gray-800">
                        Comprehensive<br />Cover
                      </span>
                    </div>
                  </th>

                  {/* Standalone Own Damage Column */}
                  <th className="py-6 px-4 text-center">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                        <Car className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-gray-800">
                        Standalone<br />Own Damage
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700 font-medium">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-semibold text-gray-900">
                      {row.feature}
                    </td>

                    {/* Third Party Status */}
                    <td className="py-4 px-4 text-center">
                      {row.tp ? (
                        <CheckCircle2 className="w-5 h-5 text-teal-600 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>

                    {/* Comprehensive Status */}
                    <td className="py-4 px-4 text-center">
                      {row.comp ? (
                        <CheckCircle2 className="w-5 h-5 text-teal-600 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>

                    {/* Own Damage Status */}
                    <td className="py-4 px-4 text-center">
                      {row.od ? (
                        <CheckCircle2 className="w-5 h-5 text-teal-600 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
