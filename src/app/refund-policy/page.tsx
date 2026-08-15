"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RefundPolicyPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed top-28 left-4 z-50 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200 text-[#2076C7] font-medium border border-gray-100 group cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform duration-200">
          <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
        </svg>
        <span>Back</span>
      </button>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg flex flex-col hover:shadow-xl transition-shadow duration-300">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#2076C7] to-[#1CADA3] text-white py-8 px-6 text-center shrink-0 rounded-t-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Refund Policy</h1>
            <p className="text-blue-100 italic">Our Refund Policy</p>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-8">

            {/* Courses */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Courses</h2>
              <p className="text-gray-700 leading-relaxed">
                Users can opt out and get a refund if they raise a refund request within 2 days of making payment and before enrollment is sent to students. Once enrollment is made, refund is not possible.
              </p>
            </section>

            {/* Live Classes */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Live Classes</h2>
              <p className="text-gray-700 leading-relaxed">
                Users can opt out and get a refund if they raise a refund request within 2 days of making payment and before enrollment is sent to students. Once enrollment is made, refund is not possible.
              </p>
            </section>

            {/* Important Notice */}
            <section>
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                <div className="flex items-start space-x-3">
                  <div className="text-amber-500 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-amber-800">Important Notice:</strong>
                    <p className="text-amber-700 mt-1">
                      Please ensure you review all course details and enrollment terms carefully before making a purchase. Refund requests must be raised within the specified time frame through our official support channels.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <div className="flex items-start space-x-3">
                  <div className="text-blue-500 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-blue-800">
                    For refund-related queries, contact us at <span className="bg-amber-50 px-2 py-1 rounded font-semibold text-amber-800">ecourse@bhartiinstitute.com</span>.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
