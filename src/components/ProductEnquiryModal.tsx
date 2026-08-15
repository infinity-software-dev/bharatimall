"use client";

import React from "react";
import ProductEnquiryForm from "@/components/ProductEnquiryForm";
import { InsuranceProduct } from "@/lib/productsData";
import { X } from "lucide-react";
import { ProductEnquiry } from "@/lib/enquiryStorage";

interface ProductEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: InsuranceProduct | null;
  onSuccess?: (enquiry: ProductEnquiry) => void;
}

export default function ProductEnquiryModal({
  isOpen,
  onClose,
  product,
  onSuccess,
}: ProductEnquiryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
          title="Close Form"
        >
          <X className="w-4 h-4" />
        </button>

        <ProductEnquiryForm
          preselectedProduct={product}
          onSuccess={onSuccess}
          onCancel={onClose}
          isModal={true}
        />
      </div>
    </div>
  );
}
