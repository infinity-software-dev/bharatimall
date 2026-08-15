"use client";

import React, { useState, useRef, useMemo } from "react";
import { X, CheckCircle2, UploadCloud, Trash2, Plus, ChevronDown } from "lucide-react";

const STYLES = {
  input: (err: boolean) =>
    `w-full border rounded-lg p-2.5 bg-[#FFFFFF] text-[#292929] outline-none text-sm transition-all placeholder-[#6B6B6B] appearance-none ${
      err
        ? "border-[#D64545] focus:border-[#D64545]"
        : "border-[#E5E5E0] focus:border-[#F4C430] focus:ring-1 focus:ring-[#F4C430]"
    }`,
  label: "block text-xs md:text-sm font-bold mb-1 text-[#171717]",
  btn: "w-full sm:w-56 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] py-3 rounded-xl transition-all text-base font-bold shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
  err: "text-[#D64545] text-xs mt-1 font-medium",
};

const BASE_DOCS = [
  "Identity Proof (Aadhaar / Passport)",
  "PAN Card",
  "3 Months Salary Slips",
  "Form 16",
  "6 Months Bank Statement",
  "Current Address Proof",
  "Passport Size Photo",
  "Company ID Card",
];

interface PersonalLoanFormProps {
  onClose: () => void;
  selectedBank?: string;
  prefilledData?: {
    name: string;
    email: string;
    mobile: string;
  };
}

export default function PersonalLoanForm({
  onClose,
  prefilledData,
  selectedBank,
}: PersonalLoanFormProps) {
  const [form, setForm] = useState<Record<string, string>>({
    clientName: prefilledData?.name || "",
    phone: prefilledData?.mobile || "",
    email: prefilledData?.email || "",
    dob: "",
    location: "",
    loanAmount: "",
    deductionDetails: "",
    companyName: "",
    companyAddress: "",
    hasOtherLoan: "",
    otherLoanAmount: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [uploadedDocs, setUploadedDocs] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const requiredDocs = useMemo(
    () =>
      form.hasOtherLoan === "Yes"
        ? [...BASE_DOCS, "Existing Loan Statement"]
        : BASE_DOCS,
    [form.hasOtherLoan]
  );

  const handleInputChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "hasOtherLoan" && value === "No" ? { otherLoanAmount: "" } : {}),
    }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    const req = (f: string, msg: string) => {
      if (!form[f]?.trim()) errs[f] = msg;
    };

    [
      "clientName",
      "location",
      "dob",
      "loanAmount",
      "deductionDetails",
      "companyName",
      "companyAddress",
    ].forEach((f) =>
      req(
        f,
        `${f
          .split(/(?=[A-Z])/)
          .join(" ")
          .replace(/^\w/, (c) => c.toUpperCase())} is required`
      )
    );

    if (!form.phone || form.phone.length !== 10) errs.phone = "Enter a valid 10-digit mobile number";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address";
    if (!form.hasOtherLoan) errs.hasOtherLoan = "Select an option";
    if (form.hasOtherLoan === "Yes" && !form.otherLoanAmount) errs.otherLoanAmount = "Existing loan amount required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Static dummy submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 600);
  };

  const fieldProps = (name: string) => ({
    value: form[name],
    onChange: (v: string) => handleInputChange(name, v),
    error: errors[name],
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-2 sm:p-4 text-[#292929] font-sans">
      <div className="bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#E5E5E0] w-full max-w-4xl mx-auto h-[95vh] sm:h-[90vh] flex flex-col relative overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b border-[#E5E5E0] px-5 sm:px-6 py-4 shrink-0 bg-[#FFFFFF]">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-[#171717]">
              {selectedBank ? `Personal Loan Application — ${selectedBank}` : "Personal Loan Application"}
            </h2>
            <p className="text-xs text-[#6B6B6B] mt-0.5">Fill out your information for preliminary verification</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-[#F5F5F3] hover:bg-[#D64545]/10 flex items-center justify-center text-[#292929] hover:text-[#D64545] transition-colors cursor-pointer border border-[#E5E5E0]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Form Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 bg-[#FFFDF5]">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Field label="Full Name" placeholder="Enter applicant name" {...fieldProps("clientName")} required />
            <Field label="Phone Number" placeholder="10-digit mobile number" type="tel" maxLength={10} onlyNumber {...fieldProps("phone")} required />
            <Field label="Email Address" placeholder="name@example.com" type="email" {...fieldProps("email")} required />
            <Field label="Date of Birth" type="date" {...fieldProps("dob")} required />
            <Field label="Current City / Location" placeholder="e.g. Pune" {...fieldProps("location")} required />
            <Field label="Required Loan Amount (₹)" placeholder="e.g. 500000" onlyNumber {...fieldProps("loanAmount")} required />
            <Field label="Monthly Deductions (₹)" placeholder="Existing monthly EMI / deductions" {...fieldProps("deductionDetails")} required />
            <Field label="Company / Employer Name" placeholder="Enter current company name" {...fieldProps("companyName")} required />

            <div className="col-span-1 md:col-span-2">
              <Field label="Company Address" placeholder="Enter full office address" {...fieldProps("companyAddress")} required />
            </div>

            <Field label="Any Other Active Loan Obligations?" type="select" options={["No", "Yes"]} {...fieldProps("hasOtherLoan")} required />
            {form.hasOtherLoan === "Yes" && (
              <Field label="Total Existing Loan Balance (₹)" placeholder="Enter total outstanding" onlyNumber {...fieldProps("otherLoanAmount")} required />
            )}

            {/* Document Upload Area */}
            <div className="col-span-1 md:col-span-2 mt-4 pt-4 border-t border-[#E5E5E0]">
              <div className="mb-4">
                <h3 className="text-base font-bold text-[#171717]">Upload Supporting Documents</h3>
                <p className="text-xs text-[#6B6B6B]">Upload clear scanned copies or photos (Max 180KB per file)</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {requiredDocs.map((lbl) => (
                  <FileUpload
                    key={lbl}
                    label={lbl}
                    allowMultiple={!["Identity Proof (Aadhaar / Passport)", "PAN Card", "Passport Size Photo"].includes(lbl)}
                    onUpdate={(has: boolean) => {
                      setUploadedDocs((p) => ({ ...p, [lbl]: has }));
                      if (has) setErrors((p) => ({ ...p, [`doc_${lbl}`]: "" }));
                    }}
                    error={errors[`doc_${lbl}`]}
                  />
                ))}
              </div>
            </div>

            {/* Submit Action */}
            <div className="col-span-1 md:col-span-2 flex justify-center mt-6 pb-4">
              <button type="submit" disabled={isSubmitting} className={STYLES.btn}>
                {isSubmitting ? "Submitting Application..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>

        {/* Success Modal */}
        {showSuccess && <SuccessModal onClose={onClose} />}
      </div>
    </div>
  );
}

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 rounded-2xl p-4">
      <div className="bg-[#FFFFFF] border border-[#E5E5E0] p-6 sm:p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full mx-auto">
        <div className="w-16 h-16 bg-[#FFF8D6] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#F4C430]/40">
          <CheckCircle2 className="w-10 h-10 text-[#198754]" />
        </div>
        <h3 className="text-2xl font-extrabold text-[#171717] mb-2">Application Received!</h3>
        <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
          Your personal loan application has been recorded. Our lending advisor will reach out to you shortly.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="w-full bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] py-3 rounded-xl font-bold transition-colors cursor-pointer"
        >
          Okay, Got It
        </button>
      </div>
    </div>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  options?: string[];
  required?: boolean;
  placeholder?: string;
  onlyNumber?: boolean;
  maxLength?: number;
  error?: string;
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  options,
  required,
  placeholder,
  onlyNumber,
  maxLength,
  error,
}: FieldProps) {
  return (
    <div className="w-full relative">
      <label className={STYLES.label}>
        {label} {required && <span className="text-[#D64545]">*</span>}
      </label>
      <div className="relative">
        {type === "select" ? (
          <>
            <select
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className={`${STYLES.input(!!error)} cursor-pointer font-medium text-[#171717] pr-9`}
            >
              <option value="">Select {label}</option>
              {options?.map((opt) => (
                <option key={opt} value={opt} className="text-[#292929]">
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 text-[#6B6B6B] pointer-events-none" size={16} />
          </>
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (
                onlyNumber &&
                !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key) &&
                !/^[0-9]$/.test(e.key)
              ) {
                e.preventDefault();
              }
            }}
            maxLength={maxLength}
            placeholder={placeholder}
            className={STYLES.input(!!error)}
          />
        )}
      </div>
      {error && <p className={STYLES.err}>{error}</p>}
    </div>
  );
}

interface FileUploadProps {
  label: string;
  allowMultiple?: boolean;
  onUpdate: (has: boolean) => void;
  error?: string;
}

function FileUpload({ label, allowMultiple, onUpdate, error }: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    if (!newFiles.length) return;
    if (newFiles.some((f) => f.size > 184320)) {
      setFileError("Max file size: 180KB");
      return;
    }
    const updated = allowMultiple ? [...files, ...newFiles] : [newFiles[0]];
    setFiles(updated);
    onUpdate(true);
    setFileError("");
    e.target.value = "";
  };

  const removeFile = (idx: number) => {
    const updated = files.filter((_, i) => i !== idx);
    setFiles(updated);
    onUpdate(updated.length > 0);
  };

  return (
    <div className="flex flex-col">
      <label className="text-xs font-bold mb-1 text-[#171717] flex justify-between">
        <span>{label}</span>
        <span className="text-[10px] text-[#6B6B6B] font-normal">
          {allowMultiple ? "(Multiple allowed, <180KB)" : "(<180KB)"}
        </span>
      </label>
      <input
        type="file"
        ref={ref}
        multiple={allowMultiple}
        onChange={handleFiles}
        className="hidden"
        accept="image/*,application/pdf"
      />
      <div className="flex flex-col gap-2">
        {files.length === 0 && (
          <div
            onClick={() => ref.current?.click()}
            className={`cursor-pointer border border-dashed rounded-lg h-11 flex items-center justify-center gap-2 bg-[#FFFFFF] hover:bg-[#FFF8D6]/30 transition-colors group ${
              error ? "border-[#D64545] bg-[#D64545]/5" : "border-[#E5E5E0] hover:border-[#F4C430]"
            }`}
          >
            <UploadCloud size={16} className={error ? "text-[#D64545]" : "text-[#6B6B6B] group-hover:text-[#171717]"} />
            <span className={`text-xs font-semibold ${error ? "text-[#D64545]" : "text-[#6B6B6B] group-hover:text-[#171717]"}`}>
              {error ? "Upload Required" : "Choose File"}
            </span>
          </div>
        )}
        {files.map((f, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-[#FFFFFF] border border-[#E5E5E0] px-3 py-1.5 rounded-lg text-xs"
          >
            <div className="flex items-center truncate max-w-[85%]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#198754] mr-2 shrink-0" />
              <span className="truncate text-[#292929]">{f.name}</span>
            </div>
            <button
              type="button"
              onClick={() => removeFile(i)}
              className="text-[#6B6B6B] hover:text-[#D64545] cursor-pointer"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
        {allowMultiple && files.length > 0 && files.length < 6 && (
          <button
            type="button"
            onClick={() => ref.current?.click()}
            className="flex justify-center items-center gap-1 text-[11px] font-bold text-[#171717] bg-[#FFF8D6] border border-[#F4C430]/40 rounded-lg py-1.5 hover:bg-[#FFD21F] transition-colors cursor-pointer"
          >
            <Plus size={13} /> Add more files
          </button>
        )}
      </div>
      {(fileError || (error && !fileError)) && (
        <span className="text-xs text-[#D64545] mt-1 font-medium">{fileError || error}</span>
      )}
    </div>
  );
}