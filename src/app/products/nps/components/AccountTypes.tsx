'use client';

export default function AccountTypes() {
    return (
        <section id="account-types" className="py-12 md:py-16 bg-[#F5F5F3] border-b border-[#E5E5E0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
                        NPS Account Types
                    </h2>
                    <p className="mt-2 text-[#6B6B6B] font-normal text-base">
                        Choose the right account structure for your needs.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-2xl shadow-lg border border-[#E5E5E0] bg-white">
                    <table className="w-full text-left border-collapse border border-[#E5E5E0] overflow-hidden">
                        <thead>
                            <tr className="bg-[#FFF8D6] border-b border-[#E5E5E0]">
                                <th className="p-5 text-[#171717] font-extrabold uppercase tracking-wider text-xs w-1/4">Feature</th>
                                <th className="p-5 text-[#E91E63] font-extrabold uppercase tracking-wider text-xs w-1/3">Tier I (Pension Account)</th>
                                <th className="p-5 text-[#E91E63] font-extrabold uppercase tracking-wider text-xs w-1/3">Tier II (Investment Account)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E5E5E0]">
                            <tr className="hover:bg-[#FFFDF5] transition-colors">
                                <td className="p-5 font-bold text-[#171717]">Purpose</td>
                                <td className="p-5 text-[#292929] font-medium">Retirement Savings (Mandatory)</td>
                                <td className="p-5 text-[#292929] font-medium">Voluntary Savings (Optional)</td>
                            </tr>
                            <tr className="hover:bg-[#FFFDF5] transition-colors">
                                <td className="p-5 font-bold text-[#171717]">Withdrawals</td>
                                <td className="p-5 text-[#292929] font-medium">Restricted (Lock-in till 60)</td>
                                <td className="p-5 text-[#292929] font-medium">Unrestricted (Anytime withdrawal)</td>
                            </tr>
                            <tr className="hover:bg-[#FFFDF5] transition-colors">
                                <td className="p-5 font-bold text-[#171717]">Tax Benefit</td>
                                <td className="p-5 text-[#292929] font-medium">Available u/s 80CCD(1) & 80CCD(1B)</td>
                                <td className="p-5 text-[#292929] font-medium">No Tax Benefit*</td>
                            </tr>
                            <tr className="hover:bg-[#FFFDF5] transition-colors">
                                <td className="p-5 font-bold text-[#171717]">Minimum Contribution</td>
                                <td className="p-5 text-[#292929] font-medium">₹500 per contribution / ₹1,000 per year</td>
                                <td className="p-5 text-[#292929] font-medium">₹250 per contribution</td>
                            </tr>
                            <tr className="hover:bg-[#FFFDF5] transition-colors">
                                <td className="p-5 font-bold text-[#171717]">Account Status</td>
                                <td className="p-5 text-[#292929] font-medium">Individual Pension Account</td>
                                <td className="p-5 text-[#292929] font-medium">Add-on to Tier I</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="py-4 px-5 text-xs sm:text-sm font-medium text-[#6B6B6B] text-center bg-[#FFFDF5] border-t border-[#E5E5E0]">*Tier II tax benefits available only for Govt employees with 3-year lock-in.</p>
                </div>
            </div>
        </section>
    );
}
