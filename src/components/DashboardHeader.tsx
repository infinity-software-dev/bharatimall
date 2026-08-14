"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User as UserIcon, LogOut, UserCircle, ChevronDown, Bell } from "lucide-react";
import { MobileSidebar, SidebarProvider } from "./ui/sidebar";
import { useRouter, usePathname } from "next/navigation";
import { 
    User, 
    BookOpen, 
    TrendingUp, 
    Settings, 
    Layers,
    FileText,
    Calculator as CalcIcon,
    HelpCircle,
    ShieldCheck
  } from "lucide-react";

export default function DashboardHeader() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [userName, setUserName] = useState<string>("Customer");
    
    const router = useRouter();
    const pathname = usePathname();

    const links = [
        { label: "Dashboard", href: "/dashboard", icon: <User className="h-4 w-4" /> },
        { label: "My Profile", href: "/dashboard?tab=profile", icon: <Settings className="h-4 w-4" /> },
        { label: "Investments", href: "/dashboard?tab=investments", icon: <Layers className="h-4 w-4" /> },
        { label: "Finance", href: "/dashboard?tab=finance", icon: <TrendingUp className="h-4 w-4" /> },
        { label: "Insurance", href: "/dashboard?tab=insurance", icon: <ShieldCheck className="h-4 w-4" /> },
        { label: "Portfolio", href: "/dashboard?tab=portfolio", icon: <BookOpen className="h-4 w-4" /> },
        { label: "Calculator", href: "/dashboard?tab=calculator", icon: <CalcIcon className="h-4 w-4" /> },
        { label: "Help & Support", href: "/dashboard?tab=help", icon: <HelpCircle className="h-4 w-4" /> }
    ];

    useEffect(() => {
        const active = sessionStorage.getItem("bharatimall_active_user");
        if(active) {
            try {
                const parsed = JSON.parse(active);
                if(parsed.fullName) {
                    setUserName(parsed.fullName);
                }
            } catch (e) {}
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsProfileOpen(false);
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const getActiveLabel = (items: any[]): string => {
        for (const item of items) {
            // Simplified check for now
            if (item.href === pathname || (item.href.includes("?tab=") && window.location.search.includes(item.href.split("?")[1]))) return item.label;
        }
        return "Dashboard";
    };

    const handleLogout = () => {
        sessionStorage.removeItem("bharatimall_active_user");
        window.location.href = "/";
    };

    // Use window.location in client if pathname doesn't include query params in next 13+ usePathname
    const [activeLabel, setActiveLabel] = useState("Dashboard");
    
    useEffect(() => {
        setActiveLabel(getActiveLabel(links));
    }, [pathname]);

    return (
        <SidebarProvider>
            <motion.header className="border-b flex items-center justify-between px-4 sm:px-6 py-3 shadow-sm bg-white relative z-50">
                {/* Left */}
                <div className="flex items-center gap-4">
                    <MobileSidebar
                        links={links}
                        onNavigate={(href) => router.push(href)}
                    />
                    <h1 className="text-lg sm:text-xl font-bold text-[#2076C7]">
                        {activeLabel}
                    </h1>
                </div>

                {/* Right */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Notification Bell */}
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-slate-50 transition-colors relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
                    </button>

                    {/* Profile Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-50 transition-colors group">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#2076C7] rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform overflow-hidden border border-slate-100 font-bold">
                                {userName.charAt(0).toUpperCase()}
                            </div>
                            <div className="hidden sm:flex flex-col items-start leading-tight">
                                <span className="text-sm font-semibold text-gray-700">{userName.split(" ")[0]}</span>
                            </div>
                            <ChevronDown size={14} className={`text-gray-400 transition-transform hidden sm:block ${isProfileOpen ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {isProfileOpen && (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-xl py-2 z-20"
                                    >
                                        <button
                                            onClick={() => {
                                                router.push("/dashboard?tab=profile");
                                                setIsProfileOpen(false);
                                            }}
                                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                                        >
                                            <UserCircle size={18} className="text-gray-400" />
                                            My Profile
                                        </button>
                                        <div className="border-t border-gray-100 my-1" />
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                                        >
                                            <LogOut size={18} />
                                            Sign Out
                                        </button>
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.header>
        </SidebarProvider>
    );
}
