'use client';

import { CheckCircle2, FileText, User, CreditCard, Camera, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const eligibilityItems = [
    {
        dot: 'bg-[#E91E63]',
        label: 'Citizenship',
        value: 'Indian Citizens, NRIs & OCI Card Holders',
    },
    {
        dot: 'bg-[#E91E63]',
        label: 'Age Limit',
        value: '18 – 70 Years (at the time of entry)',
    },
    {
        dot: 'bg-[#E91E63]',
        label: 'Account Types',
        value: 'Available for both Tier I & Tier II Accounts',
    },
    {
        dot: 'bg-[#E91E63]',
        label: 'Employment',
        value: 'Applicable to Government, Corporate & Individual Subscribers',
    },
];

const documents = [
    { icon: User, title: 'KYC Documents', desc: 'Aadhaar, PAN Card, or Passport' },
    { icon: CreditCard, title: 'Bank Details', desc: 'Cancelled Cheque or Passbook Copy' },
    { icon: Camera, title: 'Digital Uploads', desc: 'Recent Photograph & Signature' },
    { icon: MapPin, title: 'Address Proof', desc: 'Passport, Utility Bills, or Bank Statement' },
];

export default function Eligibility() {
    return (
        <section id="eligibility" className="relative py-12 md:py-16 bg-[#F5F5F3] overflow-hidden border-b border-[#E5E5E0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
                        NPS Eligibility &amp; Documents
                    </h2>
                    <p className="max-w-2xl mx-auto text-[#6B6B6B] font-normal text-base leading-relaxed">
                        Opening an NPS account is simple and transparent. Review the eligibility criteria and keep your documents ready.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* --- Eligibility Card --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl border border-[#E5E5E0] shadow-lg overflow-hidden flex flex-col"
                    >
                        {/* Card Header */}
                        <div className="bg-[#171717] px-8 py-5">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
                                    <CheckCircle2 size={20} className="text-[#E91E63]" />
                                </div>
                                <h3 className="text-lg font-black text-white">Eligibility Criteria</h3>
                            </div>
                        </div>

                        {/* Items */}
                        <div className="flex-1 p-6 space-y-4">
                            {eligibilityItems.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex items-start gap-4 p-4 bg-[#FFFDF5] rounded-xl border border-[#E5E5E0] hover:border-[#E91E63] transition-all duration-200"
                                >
                                    <div className={`w-3 h-3 rounded-full ${item.dot} mt-1.5 shrink-0`} />
                                    <div>
                                        <p className="text-[10px] font-black text-[#6B6B6B] uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="font-bold text-[#171717] text-sm leading-snug">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* --- Documents Card --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl border border-[#E5E5E0] shadow-lg overflow-hidden flex flex-col"
                    >
                        {/* Card Header */}
                        <div className="bg-[#292929] px-8 py-5">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
                                    <FileText size={20} className="text-[#E91E63]" />
                                </div>
                                <h3 className="text-lg font-black text-white">Required Documents</h3>
                            </div>
                        </div>

                        {/* Document Grid */}
                        <div className="flex-1 p-6">
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                {documents.map((doc, i) => {
                                    const Icon = doc.icon;
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.08 }}
                                            className="flex flex-col gap-3 p-4 bg-[#FFFDF5] rounded-xl border border-[#E5E5E0] hover:border-[#F4C430] transition-all duration-200"
                                        >
                                            <div className="w-9 h-9 bg-[#FFF8D6] text-[#171717] rounded-xl flex items-center justify-center">
                                                <Icon size={18} className="text-[#171717]" />
                                            </div>
                                            <div>
                                                <h4 className="font-extrabold text-[#171717] text-sm mb-0.5">{doc.title}</h4>
                                                <p className="text-[11px] text-[#6B6B6B] font-medium leading-tight">{doc.desc}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Tip */}
                            <div className="flex items-start gap-3 p-4 bg-[#FFF8D6] border border-[#F4C430]/40 rounded-xl">
                                <div className="w-8 h-8 bg-[#F4C430]/30 rounded-lg flex items-center justify-center shrink-0">
                                    <FileText size={16} className="text-[#171717]" />
                                </div>
                                <p className="text-sm text-[#171717] font-semibold leading-relaxed">
                                    Keep digital copies ready for a <span className="font-black text-[#171717]">100% paperless</span> onboarding experience.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
