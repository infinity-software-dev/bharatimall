"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, AlertTriangle, HelpCircle, Flame, Shield, Compass } from "lucide-react";

interface ComparisonRow {
  parameter: string;
  sip: string;
  sipIcon: React.ReactNode;
  fd: string;
  fdIcon: React.ReactNode;
  ppf: string;
  ppfIcon: React.ReactNode;
  highlight: "sip" | "fd" | "ppf";
}

export default function SIPVsFDVsPPFComparison() {
  const comparisonData: ComparisonRow[] = [
    {
      parameter: "Average Returns",
      sip: "12% - 15% (Historically)",
      sipIcon: <Flame className="w-5 h-5 text-[#E91E63]" />,
      fd: "6.0% - 7.5% (Fixed)",
      fdIcon: <Shield className="w-5 h-5 text-[#6B6B6B]" />,
      ppf: "7.1% (Govt set)",
      ppfIcon: <Shield className="w-5 h-5 text-[#6B6B6B]" />,
      highlight: "sip",
    },
    {
      parameter: "Inflation-Beating Ability",
      sip: "High (Beats 6% inflation by a wide margin)",
      sipIcon: <Check className="w-5 h-5 text-[#198754] font-bold" />,
      fd: "Negative to Low (Post-tax returns often fail to beat inflation)",
      fdIcon: <AlertTriangle className="w-5 h-5 text-[#D64545]" />,
      ppf: "Marginal (Matches or slightly beats inflation safely)",
      ppfIcon: <HelpCircle className="w-5 h-5 text-[#F4C430]" />,
      highlight: "sip",
    },
    {
      parameter: "Tax Efficiency",
      sip: "Highly Efficient (LTCG taxed at only 12.5% after ₹1.25L free limit)",
      sipIcon: <Check className="w-5 h-5 text-[#198754]" />,
      fd: "Poor (Interest taxed at your slab rate up to 30%+)",
      fdIcon: <AlertTriangle className="w-5 h-5 text-[#D64545]" />,
      ppf: "Exempt (EEE: 100% Tax-Free interest & maturity)",
      ppfIcon: <Check className="w-5 h-5 text-[#198754]" />,
      highlight: "ppf",
    },
    {
      parameter: "Liquidity & Lock-in",
      sip: "High (Withdraw anytime, except 3 years lock-in for ELSS tax saver)",
      sipIcon: <Check className="w-5 h-5 text-[#198754]" />,
      fd: "Moderate (Withdrawal allowed with premature penalty of 0.5%-1%)",
      fdIcon: <HelpCircle className="w-5 h-5 text-[#F4C430]" />,
      ppf: "Low (15-year maturity; partial withdrawals permitted from 7th year)",
      ppfIcon: <AlertTriangle className="w-5 h-5 text-[#D64545]" />,
      highlight: "sip",
    },
    {
      parameter: "Risk & Guarantee",
      sip: "Market-Linked (Volatile in short-term, but highly rewarding over long-term)",
      sipIcon: <HelpCircle className="w-5 h-5 text-[#F4C430]" />,
      fd: "Very Low Risk (Insured up to ₹5 Lakhs by DICGC)",
      fdIcon: <Check className="w-5 h-5 text-[#198754]" />,
      ppf: "Sovereign Guarantee (100% safe, backed by Government of India)",
      ppfIcon: <Check className="w-5 h-5 text-[#198754]" />,
      highlight: "ppf",
    },
    {
      parameter: "15-Year Wealth Effect",
      sip: "Creates massive wealth via compounding on equity growth",
      sipIcon: <Flame className="w-5 h-5 text-[#E91E63]" />,
      fd: "Capital preservation only (Value decays due to inflation)",
      fdIcon: <AlertTriangle className="w-5 h-5 text-[#D64545]" />,
      ppf: "Moderate growth (Ideal for risk-free retirement corpus)",
      ppfIcon: <Shield className="w-5 h-5 text-[#6B6B6B]" />,
      highlight: "sip",
    },
  ];

  return (
    <div className="py-12 bg-white overflow-hidden font-sans border-y border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 mb-3 shadow-xs"
          >
            <Compass className="w-4 h-4 text-[#E91E63]" /> Smart Investing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight"
          >
            SIP Mutual Funds vs <span className="text-[#E91E63]">FD vs PPF</span>
          </motion.h2>
          <div className="w-20 h-1 mx-auto bg-[#E91E63] rounded-full mb-3" />
          <p className="text-[#6B6B6B] font-normal text-base">
            Discover why systematic investing in equity mutual funds (SIP) is the single most effective way to beat inflation and compound your wealth compared to traditional saving options.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-[2rem] border border-[#E5E5E0] shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-[#FFFDF5] border-b border-[#E5E5E0]">
                  <th className="px-6 py-6 text-xs font-bold uppercase tracking-wider text-[#171717] w-[20%]">Comparison Feature</th>
                  <th className="px-6 py-6 text-sm font-black text-center text-[#171717] bg-[#FFF8D6]/60 relative w-[26%] border-t-2 border-t-[#E91E63]">
                    SIP Mutual Funds (Equity)
                  </th>
                  <th className="px-6 py-6 text-sm font-black text-center text-[#292929] w-[26%]">Fixed Deposits (FD)</th>
                  <th className="px-6 py-6 text-sm font-black text-center text-[#292929] w-[26%]">Public Provident Fund (PPF)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E0]">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FFFDF5] transition-colors">
                    {/* Parameter */}
                    <td className="px-6 py-5">
                      <span className="text-sm font-bold text-[#171717]">{row.parameter}</span>
                    </td>

                    {/* SIP Column */}
                    <td className="px-6 py-5 bg-[#FFF8D6]/20 border-x border-[#E5E5E0]">
                      <div className="flex items-start gap-3 justify-start max-w-xs mx-auto">
                        <span className="shrink-0 mt-0.5">{row.sipIcon}</span>
                        <span className="text-sm font-bold text-[#171717] leading-normal">{row.sip}</span>
                      </div>
                    </td>

                    {/* FD Column */}
                    <td className="px-6 py-5">
                      <div className="flex items-start gap-3 justify-start max-w-xs mx-auto">
                        <span className="shrink-0 mt-0.5">{row.fdIcon}</span>
                        <span className="text-sm font-medium text-[#292929] leading-normal">{row.fd}</span>
                      </div>
                    </td>

                    {/* PPF Column */}
                    <td className="px-6 py-5">
                      <div className="flex items-start gap-3 justify-start max-w-xs mx-auto">
                        <span className="shrink-0 mt-0.5">{row.ppfIcon}</span>
                        <span className="text-sm font-medium text-[#292929] leading-normal">{row.ppf}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Inflation Callout Box */}
        <div className="mt-6 bg-[#FFF8D6] border border-[#F4C430]/40 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-xs">
          <div className="w-14 h-14 bg-[#F4C430] text-[#171717] rounded-2xl flex items-center justify-center shrink-0 shadow-xs">
            <Flame className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-[#171717] font-extrabold text-lg mb-2">The Hidden Cost of &quot;Safety&quot; (Inflation Tax)</h4>
            <p className="text-[#292929] text-sm leading-relaxed">
              If average inflation in India is 6% and your Fixed Deposit offers 7% interest, your post-tax return (in the 30% tax bracket) is only 4.9%. This means <strong>you are losing purchasing power over time</strong>. Equity SIPs are designed to combat this by delivering compound returns that outpace inflation over the long-term.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
