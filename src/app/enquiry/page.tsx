"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductEnquiryForm from "@/components/ProductEnquiryForm";
import { ALL_PRODUCTS_DATA, OTHER_PRODUCTS_DATA, InsuranceProduct } from "@/lib/productsData";

function EnquiryPageContent() {
  const searchParams = useSearchParams();
  const productIdParam = searchParams.get("product");

  const [preselectedProduct, setPreselectedProduct] = useState<InsuranceProduct | null>(null);

  useEffect(() => {
    if (productIdParam) {
      const all = [...ALL_PRODUCTS_DATA, ...OTHER_PRODUCTS_DATA];
      const found = all.find(p => p.id === productIdParam);
      if (found) {
        setPreselectedProduct(found);
      }
    }
  }, [productIdParam]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF5] text-[#292929] selection:bg-[#F4C430] selection:text-[#171717] font-sans">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 w-full bg-gradient-to-b from-[#FFFDF5] via-[#FFF8D6]/20 to-[#F5F5F3]">
        {/* Only Enquiry Form */}
        <ProductEnquiryForm preselectedProduct={preselectedProduct} />
      </main>

      <Footer />
    </div>
  );
}

export default function EnquiryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FFFDF5] text-[#171717] flex items-center justify-center font-bold text-sm">Loading Bharati Share Market Enquiry Form...</div>}>
      <EnquiryPageContent />
    </Suspense>
  );
}
