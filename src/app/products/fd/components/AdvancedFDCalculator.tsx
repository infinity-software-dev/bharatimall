'use client';

import React, { useState, useMemo } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip
} from 'recharts';
import {
  IndianRupee,
  Info
} from 'lucide-react';
import { motion } from 'framer-motion';

const formatCurrency = (value: number | string | undefined): string => {
  const numericValue = value === undefined ? 0 : Number(value);
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(numericValue);
};

const AdvancedFDCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7.5);
  const [tenure, setTenure] = useState(5);

  const { maturity, totalInterest, pieData } = useMemo(() => {
    const n = 4;
    const r = rate / 100;

    const maturityValue = principal * Math.pow(1 + r / n, n * tenure);
    const interestTotal = maturityValue - principal;

    return {
      maturity: Math.round(maturityValue),
      totalInterest: Math.round(interestTotal),
      pieData: [
        { name: 'Principal', value: principal, color: '#171717' },
        { name: 'Interest', value: Math.round(interestTotal), color: '#F4C430' },
      ]
    };
  }, [principal, rate, tenure]);

  return (
    <div className="w-full bg-white rounded-xl border border-[#E5E5E0] shadow-sm overflow-hidden text-left font-sans">
      <div className="flex flex-col lg:flex-row">

        {/* ================= LEFT ================= */}
        <div className="w-full lg:w-[320px] p-5 bg-[#FFFDF5] border-r border-[#E5E5E0]">

          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-[#F4C430] flex items-center justify-center text-[#171717] shadow-xs">
              <IndianRupee size={18} />
            </div>
            <h2 className="text-sm font-bold text-[#171717]">
              FD Calculator
            </h2>
          </div>

          <div className="space-y-5">

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-xs text-[#6B6B6B] font-bold uppercase tracking-widest">Investment</span>
                <span className="text-sm font-black text-[#171717]">
                  {formatCurrency(principal)}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="5000000"
                step="10000"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full accent-[#F4C430] h-1.5 rounded-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-xs text-[#6B6B6B] font-bold uppercase tracking-widest">Interest</span>
                <span className="text-sm font-black text-[#198754]">
                  {rate}%
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full accent-[#F4C430] h-1.5 rounded-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-xs text-[#6B6B6B] font-bold uppercase tracking-widest">Tenure</span>
                <span className="text-sm font-black text-[#171717]">
                  {tenure} yrs
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full accent-[#F4C430] h-1.5 rounded-full"
              />
            </div>
          </div>

          <div className="mt-5 flex gap-2 text-[10px] text-[#6B6B6B] font-bold uppercase tracking-tighter">
            <Info size={14} className="text-[#F4C430]" />
            <p>Quarterly compounding applied</p>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex-1 p-5 flex flex-col gap-4">

          {/* TOP SUMMARY */}
          <div className="grid grid-cols-3 gap-3">

            <motion.div whileHover={{ y: -2 }} className="p-3 bg-[#FFFDF5] border border-[#E5E5E0] rounded-lg">
              <p className="text-[10px] text-[#6B6B6B] font-black uppercase tracking-widest">Invest</p>
              <p className="text-sm font-black text-[#171717]">
                {formatCurrency(principal)}
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="p-3 bg-[#FFF8D6]/60 border border-[#F4C430]/30 rounded-lg">
              <p className="text-[10px] text-[#198754] font-black uppercase tracking-widest">Returns</p>
              <p className="text-sm font-black text-[#198754]">
                +{formatCurrency(totalInterest)}
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="p-3 bg-[#171717] rounded-lg text-white shadow-md">
              <p className="text-[10px] text-[#E5E5E0]/80 font-black uppercase tracking-widest">Total</p>
              <p className="text-sm font-black text-white">
                {formatCurrency(maturity)}
              </p>
            </motion.div>
          </div>

          {/* HORIZONTAL SECTION */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

            {/* Chart */}
            <div className="w-full md:w-[50%] flex justify-center">
              <div className="w-[240px] h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={95}
                      paddingAngle={5}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: any) => formatCurrency(value)}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Details */}
            <div className="w-full md:w-[50%] space-y-4">

              <div className="flex justify-between text-sm">
                <span className="text-[#6B6B6B] font-bold uppercase tracking-widest text-[10px]">Principal</span>
                <span className="font-black text-[#171717]">
                  {formatCurrency(principal)}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-[#6B6B6B] font-bold uppercase tracking-widest text-[10px]">Interest Earned</span>
                <span className="font-black text-[#198754]">
                  +{formatCurrency(totalInterest)}
                </span>
              </div>

              <div className="flex justify-between text-sm border-t border-[#E5E5E0] pt-3">
                <span className="text-[#171717] font-black uppercase tracking-widest text-[10px]">Maturity</span>
                <span className="font-black text-[#171717]">
                  {formatCurrency(maturity)}
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AdvancedFDCalculator;