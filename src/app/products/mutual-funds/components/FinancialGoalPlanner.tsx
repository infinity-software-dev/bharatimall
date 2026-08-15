"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Calendar, Target, ArrowRight, IndianRupee } from "lucide-react";

interface FinancialGoalPlannerProps {
  onInvest?: (goalName: string) => void;
}

const categories = [
  { name: "Retirement", icon: "👴" },
  { name: "Education", icon: "🎓" },
  { name: "Home", icon: "🏠" },
  { name: "Car", icon: "🚗" },
  { name: "Vacation", icon: "✈️" },
  { name: "Emergency Fund", icon: "🚨" },
  { name: "Other", icon: "🎯" },
];

const categoryGoalNames: Record<string, string> = {
  Retirement: "Retirement Planning",
  Education: "Daughter's Education",
  Home: "Dream Home",
  Car: "New Car",
  Vacation: "Dream Vacation",
  "Emergency Fund": "Emergency Fund",
  Other: "",
};

export default function FinancialGoalPlanner({ onInvest }: FinancialGoalPlannerProps) {
  const [formData, setFormData] = useState({
    name: "Retirement Planning",
    category: "Retirement",
    targetAmount: "5000000",
    targetDate: "2035-12-31",
  });
  const [goals, setGoals] = useState<any[]>([
    {
      id: 1,
      name: "Retirement Corpus",
      category: "Retirement",
      targetAmount: "10000000",
      targetDate: "2040-12-31",
    },
    {
      id: 2,
      name: "Child Higher Education",
      category: "Education",
      targetAmount: "2500000",
      targetDate: "2032-06-30",
    }
  ]);

  const handleSave = () => {
    if (!formData.name || !formData.targetAmount || !formData.targetDate) {
      alert("Please fill in all goal fields.");
      return;
    }
    
    const newGoal = {
      ...formData,
      id: Date.now(),
    };
    
    setGoals((prev) => [newGoal, ...prev]);
    setFormData({
      name: "",
      category: "Retirement",
      targetAmount: "",
      targetDate: "",
    });
  };

  const deleteGoal = (id: number) => {
    setGoals(goals.filter(g => g.id !== id));
  };

  return (
    <section
      className="relative bg-white rounded-3xl p-8 md:p-12 border border-[#E5E5E0] overflow-hidden font-sans shadow-md"
    >
      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#171717] tracking-tight">
          Plan Your <span className="text-[#F4C430]">Future</span>
        </h2>
        <div className="w-20 h-1 mx-auto bg-[#F4C430] rounded-full mb-4" />
        <p className="text-[#6B6B6B] font-normal text-base">Create personalized financial goals and start your wealth journey.</p>
      </div>

      {/* FORM SECTION */}
      <div className={`max-w-4xl mx-auto ${goals.length > 0 ? 'mb-16' : 'mb-0'} bg-[#FFFDF5] p-6 md:p-10 rounded-[2.5rem] border border-[#E5E5E0]`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#6B6B6B] mb-2">What&apos;s the goal?</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. World Tour"
                className="w-full px-6 py-4 bg-white border border-[#E5E5E0] rounded-2xl focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none transition-all font-bold text-[#171717] shadow-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#6B6B6B] mb-4">Category</label>
              <div className="grid grid-cols-4 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => setFormData({ ...formData, category: cat.name, name: categoryGoalNames[cat.name] || "" })}
                    className={`p-3 rounded-xl flex flex-col items-center gap-1 border transition-all cursor-pointer ${
                      formData.category === cat.name
                        ? "bg-[#F4C430] border-[#F4C430] shadow-md scale-105 text-[#171717]"
                        : "bg-white border-[#E5E5E0] text-[#292929] hover:border-[#F4C430]"
                    }`}
                  >
                    <span className="text-xl">{cat.icon}</span>
                    <span className={`text-[8px] font-bold uppercase truncate w-full ${formData.category === cat.name ? "text-[#171717]" : "text-[#6B6B6B]"}`}>
                      {cat.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#6B6B6B] mb-2">Target Amount</label>
              <div className="relative">
                <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" size={18} />
                <input
                  type="number"
                  value={formData.targetAmount}
                  onChange={(e) => setFormData({ ...formData, targetAmount: e.target.value })}
                  placeholder="0.00"
                  className="w-full pl-12 pr-6 py-4 bg-white border border-[#E5E5E0] rounded-2xl focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none font-bold text-[#171717] shadow-xs"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#6B6B6B] mb-2">Target Date</label>
              <input
                type="date"
                value={formData.targetDate}
                onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                className="w-full px-6 py-4 bg-white border border-[#E5E5E0] rounded-2xl focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none font-bold text-[#171717] shadow-xs"
              />
            </div>
            <button 
              type="button"
              onClick={handleSave}
              className="w-full bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] py-4 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
            >
              Add to My Goals
            </button>
          </div>
        </div>
      </div>

      {/* GOALS GRID */}
      {goals.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {goals.map((goal) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative bg-white p-8 rounded-[2rem] border border-[#E5E5E0] shadow-md hover:shadow-xl hover:border-[#F4C430] transition-all group overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF8D6] flex items-center justify-center text-3xl border border-[#F4C430]/40 shadow-xs">
                      {categories.find(c => c.name === goal.category)?.icon}
                    </div>
                    <button 
                      type="button"
                      onClick={() => deleteGoal(goal.id)}
                      className="p-2 text-[#6B6B6B] hover:text-[#D64545] transition-colors cursor-pointer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-[#171717] mb-1">{goal.name}</h3>
                  <span className="px-3 py-1 bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 text-[10px] font-bold rounded-full uppercase tracking-tighter">
                    {goal.category}
                  </span>

                  <div className="grid grid-cols-2 gap-4 my-8">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest flex items-center gap-1">
                        <Target size={12} className="text-[#F4C430]" /> Target
                      </p>
                      <p className="text-base font-black text-[#198754]">
                        ₹{Number(goal.targetAmount).toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest flex items-center gap-1">
                        <Calendar size={12} className="text-[#F4C430]" /> Date
                      </p>
                      <p className="text-base font-bold text-[#171717]">
                        {new Date(goal.targetDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'short' })}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onInvest ? onInvest(goal.name) : alert(`Starting SIP for ${goal.name}`)}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] rounded-2xl font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                  >
                    Start Investing for Goal
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}