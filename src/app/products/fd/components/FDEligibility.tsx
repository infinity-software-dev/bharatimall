"use client";

import { motion } from "framer-motion";
import {
    User,
    MapPin,
    FileCheck,
    BadgeCheck,
    Briefcase
} from "lucide-react";

const documents = [
    { title: "Aadhar Card (e-KYC)", icon: <User size={20} /> },
    { title: "PAN Card (Mandatory)", icon: <Briefcase size={20} /> },
    { title: "Bank Passbook/Statement", icon: <FileCheck size={20} /> },
    { title: "Identity Documentation", icon: <User size={20} /> },
    { title: "Address Proof (Utility Bill)", icon: <MapPin size={20} /> },
    { title: "Nominee Details", icon: <User size={20} /> },
    { title: "Recent Digital Photograph", icon: <User size={20} /> },
    { title: "Form 15G/15H (For TDS)", icon: <FileCheck size={20} /> }
];

export default function FDEligibility() {
    return (
        <div className="flex flex-col font-sans">
            {/* Documents Section (Full Width) */}
            <section className="py-14 md:py-24 bg-white border-b border-[#E5E5E0]">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
                            Required Documents
                        </h2>
                        <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal">
                            Keep these digital copies ready for a quick and seamless paperless investment process.
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {documents.map((doc, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="flex items-center gap-3 p-4 rounded-3xl bg-[#FFFDF5] border border-[#E5E5E0] hover:border-[#F4C430] hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-2xl bg-[#FFF8D6] text-[#171717] flex items-center justify-center transition-all shadow-xs group-hover:bg-[#F4C430] group-hover:scale-110 shrink-0">
                                    {doc.icon}
                                </div>
                                <span className="text-[#171717] font-bold text-sm tracking-tight leading-tight">{doc.title}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-10 sm:mt-16 max-w-4xl mx-auto p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-[#FFF8D6] border border-[#F4C430]/40 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 shadow-sm text-center sm:text-left"
                    >
                        <div className="shrink-0 w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#171717] shadow-xs border border-[#F4C430]/30">
                            <BadgeCheck size={32} className="text-[#F4C430]" />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#171717] mb-1">100% Secure &amp; Paperless</h4>
                            <p className="text-sm text-[#292929] font-medium leading-relaxed">
                                Note: Most applications are approved instantly through Aadhar e-KYC. Additional documents may be requested for bulk deposits or as per bank requirement.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
