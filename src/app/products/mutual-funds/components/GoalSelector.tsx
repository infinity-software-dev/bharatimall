"use client";
import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  IndianRupee,
  Shield,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  Calendar,
  AlertTriangle,
  Layers,
} from "lucide-react";

interface Goal {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
  categories: string[];
  horizon: string;
  risk: string;
  color: string;
  ringColor: string;
  textColor: string;
  badgeColor: string;
}

const GOALS: Goal[] = [
  {
    id: "retirement",
    title: "Retirement",
    desc: "Build a secure retirement corpus through long-term SIP investing.",
    icon: Target,
    categories: ["Large Cap", "Flexi Cap", "Hybrid"],
    horizon: "10-25 Years",
    risk: "Moderate",
    color: "bg-[#FFF8D6]",
    ringColor: "ring-[#F4C430] border-[#F4C430] shadow-[#F4C430]/20",
    textColor: "text-[#171717]",
    badgeColor: "bg-[#FFF8D6] text-[#171717] border-[#F4C430]/40",
  },
  {
    id: "tax-saving",
    title: "Tax Saving",
    desc: "Save tax up to ₹46,800/year under Sec 80C with high equity returns.",
    icon: IndianRupee,
    categories: ["ELSS Tax Saver"],
    horizon: "3+ Years",
    risk: "High Risk",
    color: "bg-[#FFF8D6]",
    ringColor: "ring-[#F4C430] border-[#F4C430] shadow-[#F4C430]/20",
    textColor: "text-[#171717]",
    badgeColor: "bg-[#FFF8D6] text-[#171717] border-[#F4C430]/40",
  },
  {
    id: "emergency-fund",
    title: "Emergency Fund",
    desc: "Create a safety net. Invest in highly liquid, low-risk debt funds.",
    icon: Shield,
    categories: ["Debt Funds"],
    horizon: "0-2 Years",
    risk: "Low Risk",
    color: "bg-[#FFF8D6]",
    ringColor: "ring-[#F4C430] border-[#F4C430] shadow-[#F4C430]/20",
    textColor: "text-[#171717]",
    badgeColor: "bg-[#FFF8D6] text-[#171717] border-[#F4C430]/40",
  },
  {
    id: "child-education",
    title: "Child Education",
    desc: "Fund higher education. Balance growth & safety with equity/hybrid.",
    icon: GraduationCap,
    categories: ["Large Cap", "Flexi Cap", "Hybrid"],
    horizon: "5-15 Years",
    risk: "Moderate to High",
    color: "bg-[#FFF8D6]",
    ringColor: "ring-[#F4C430] border-[#F4C430] shadow-[#F4C430]/20",
    textColor: "text-[#171717]",
    badgeColor: "bg-[#FFF8D6] text-[#171717] border-[#F4C430]/40",
  },
  {
    id: "wealth-creation",
    title: "Wealth Creation",
    desc: "Maximize wealth growth over the long run with aggressive equity exposure.",
    icon: TrendingUp,
    categories: ["Small Cap", "Mid Cap", "Multi Cap", "Index"],
    horizon: "7+ Years",
    risk: "High / Very High",
    color: "bg-[#FFF8D6]",
    ringColor: "ring-[#F4C430] border-[#F4C430] shadow-[#F4C430]/20",
    textColor: "text-[#171717]",
    badgeColor: "bg-[#FFF8D6] text-[#171717] border-[#F4C430]/40",
  },
];

interface GoalSelectorProps {
  selectedGoal?: string | null;
  setSelectedGoal?: (goalId: string | null) => void;
  onExploreFunds?: (goalId: string) => void;
  onSelectGoal?: (goalId: string | null) => void;
}

export default function GoalSelector({
  selectedGoal = null,
  setSelectedGoal = () => {},
  onExploreFunds = () => {},
  onSelectGoal,
}: GoalSelectorProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const handleSelect = (id: string | null) => {
    setSelectedGoal(id);
    if (onSelectGoal) onSelectGoal(id);
  };

  const activeGoal = GOALS.find((g) => g.id === selectedGoal);

  const handleGoalSelect = (goalId: string) => {
    if (selectedGoal === goalId) {
      setSelectedGoal(null);
    } else {
      setSelectedGoal(goalId);
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        // Focus the panel for accessibility
        panelRef.current?.focus();
      }, 100);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, goalId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleGoalSelect(goalId);
    }
  };

  const handleExplore = (goalId: string) => {
    onExploreFunds(goalId);
  };

  return (
    <section 
      className="space-y-6 sm:space-y-8 md:space-y-10 py-4 sm:py-6 font-sans"
      aria-labelledby="goal-selector-heading"
    >
      {/* HEADING */}
      <div className="text-center space-y-2 sm:space-y-3 px-2 sm:px-0">
        <h2 
          id="goal-selector-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#171717]"
        >
          Goal-Based <span className="text-[#F4C430]">Investing</span>
        </h2>
        <p className="text-[#6B6B6B] font-normal max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
          Investing is easier when you do it for a reason. Choose what you are saving for, and we&apos;ll help you find the right mutual funds.
        </p>
      </div>

      {/* GOALS GRID */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5"
        role="radiogroup"
        aria-label="Select your investment goal"
        aria-orientation="horizontal"
      >
        {GOALS.map((goal) => {
          const Icon = goal.icon;
          const isSelected = selectedGoal === goal.id;

          return (
            <motion.div
              key={goal.id}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleGoalSelect(goal.id)}
              onKeyDown={(e) => handleKeyDown(e, goal.id)}
              role="radio"
              aria-checked={isSelected}
              aria-label={`${goal.title}: ${goal.desc}. Horizon: ${goal.horizon}. Risk: ${goal.risk}`}
              tabIndex={0}
              className={`relative cursor-pointer rounded-2xl sm:rounded-[1.5rem] md:rounded-[2rem] p-4 sm:p-5 md:p-6 border bg-white transition-all duration-300 flex flex-col justify-between group h-full shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#F4C430]/50 ${
                isSelected
                  ? `ring-2 ring-[#F4C430] border-[#F4C430] bg-[#FFF8D6]/20 shadow-lg`
                  : "border-[#E5E5E0] hover:border-[#F4C430]/50"
              }`}
            >
              <div className="space-y-3 sm:space-y-4">
                {/* ICON BOX */}
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#F4C430] mx-auto sm:mx-0 shadow-xs"
                  aria-hidden="true"
                >
                  <Icon size={20} className="sm:w-[22px] sm:h-[22px] stroke-[2.5]" />
                </div>

                {/* TITLE */}
                <h3 className="text-base sm:text-[17px] md:text-[19px] font-bold text-[#171717] group-hover:text-[#F4C430] transition-colors leading-tight text-center sm:text-left">
                  {goal.title}
                </h3>

                {/* STATS TABLE */}
                <div className="space-y-1.5 sm:space-y-2 py-2 sm:py-2.5 border-t border-b border-[#E5E5E0]">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold">
                    <span className="uppercase tracking-wider text-[8px] sm:text-[9px] text-[#6B6B6B] w-10 sm:w-12 shrink-0 text-right sm:text-left">Horizon:</span>
                    <span className="text-[#171717] font-extrabold">{goal.horizon}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold">
                    <span className="uppercase tracking-wider text-[8px] sm:text-[9px] text-[#6B6B6B] w-10 sm:w-12 shrink-0 text-right sm:text-left">Risk:</span>
                    <span className="font-extrabold text-[#171717]">{goal.risk}</span>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-[#6B6B6B] text-[10px] sm:text-xs leading-relaxed font-normal group-hover:text-[#292929] transition-colors text-center sm:text-left">
                  {goal.desc}
                </p>
              </div>

              {/* CARD DECORATIVE BAR */}
              <div
                className="h-1 sm:h-1.5 w-6 sm:w-8 rounded-full bg-[#F4C430] mt-4 sm:mt-5 group-hover:w-full transition-all duration-300 mx-auto sm:mx-0"
                aria-hidden="true"
              />
            </motion.div>
          );
        })}
      </div>

      {/* RECOMMENDATION DETAIL PANEL */}
      <AnimatePresence mode="wait">
        {activeGoal && (
          <motion.div
            key={activeGoal.id}
            ref={panelRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FFFDF5] border border-[#E5E5E0] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mt-4 sm:mt-6 relative overflow-hidden focus:outline-none shadow-xl"
            tabIndex={-1}
            role="region"
            aria-label={`${activeGoal.title} investment plan details`}
          >
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start lg:items-center justify-between relative z-10">
              {/* Left Column: Goal Summary & Action */}
              <div className="space-y-3 sm:space-y-4 max-w-xl w-full lg:w-auto">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl flex items-center justify-center bg-[#FFF8D6] text-[#171717] border border-[#F4C430]/40"
                    aria-hidden="true"
                  >
                    <activeGoal.icon size={18} className="sm:w-5 sm:h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-[#171717]">
                    {activeGoal.title} Plan
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-[#292929] leading-relaxed font-normal">
                  To achieve your goal for <strong>{activeGoal.title}</strong>, we recommend investing in a curated portfolio balanced for your expected horizon and risk capability.
                </p>

                <div>
                  <button
                    onClick={() => handleExplore(activeGoal.id)}
                    className="inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 bg-[#F4C430] hover:bg-[#FFD21F] text-[#171717] text-[10px] sm:text-xs font-bold rounded-xl sm:rounded-2xl transition-all duration-300 tracking-[0.1em] uppercase shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F4C430]/50 cursor-pointer"
                    aria-label={`Explore curated funds for ${activeGoal.title}`}
                  >
                    Explore Curated Funds
                    <ArrowRight size={14} className="stroke-[3]" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Right Column: Asset recommendation / Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full lg:w-auto lg:min-w-[400px] xl:min-w-[450px] bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#E5E5E0] shadow-xs">
                {/* Horizon */}
                <div className="space-y-1 sm:space-y-1.5">
                  <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-[#6B6B6B] font-bold uppercase tracking-wider">
                    <Calendar size={12} className="sm:w-[13px] sm:h-[13px] text-[#F4C430]" aria-hidden="true" />
                    Time Horizon
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-[#171717]">
                    {activeGoal.horizon}
                  </div>
                </div>

                {/* Risk Profile */}
                <div className="space-y-1 sm:space-y-1.5">
                  <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-[#6B6B6B] font-bold uppercase tracking-wider">
                    <AlertTriangle size={12} className="sm:w-[13px] sm:h-[13px] text-[#F4C430]" aria-hidden="true" />
                    Risk Suitability
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-[#171717]">
                    {activeGoal.risk}
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-1 sm:space-y-1.5">
                  <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-[#6B6B6B] font-bold uppercase tracking-wider">
                    <Layers size={12} className="sm:w-[13px] sm:h-[13px] text-[#F4C430]" aria-hidden="true" />
                    Suggested Assets
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {activeGoal.categories.map((cat, i) => (
                      <span
                        key={i}
                        className="px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[9px] font-bold rounded-md border tracking-wide uppercase bg-[#FFF8D6] text-[#171717] border-[#F4C430]/40"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}