"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import { cn } from "../lib/utils";
import { 
  LogOut, 
  ChevronDown, 
  ChevronRight, 
  Smartphone,
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
import { useRouter, usePathname } from "next/navigation";

export interface SidebarItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: SidebarItem[];
}

// Removed PlatformToggle as requested

export default function DashboardSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // Hardcoding the links specific to bharatimall customer dashboard
  const links: SidebarItem[] = [
    { label: "Dashboard", href: "/dashboard", icon: <User className="h-4 w-4" /> },
    { label: "My Profile", href: "/dashboard?tab=profile", icon: <Settings className="h-4 w-4" /> },
    { label: "Investments", href: "/dashboard?tab=investments", icon: <Layers className="h-4 w-4" /> },
    { label: "Finance", href: "/dashboard?tab=finance", icon: <TrendingUp className="h-4 w-4" /> },
    { label: "Insurance", href: "/dashboard?tab=insurance", icon: <ShieldCheck className="h-4 w-4" /> },
    { label: "Portfolio", href: "/dashboard?tab=portfolio", icon: <BookOpen className="h-4 w-4" /> },
    { label: "Calculator", href: "/dashboard?tab=calculator", icon: <CalcIcon className="h-4 w-4" /> },
    { label: "Help & Support", href: "/dashboard?tab=help", icon: <HelpCircle className="h-4 w-4" /> }
  ];

  const handleLogout = () => {
    sessionStorage.removeItem("bharatimall_active_user");
    window.location.href = "/";
  };

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isActive = (href?: string) => {
    if (!href) return false;
    // Basic active check (can be improved if query params are used)
    return pathname === href || (pathname === '/dashboard' && href.startsWith('/dashboard')); 
  };

  const renderLinks = (items: SidebarItem[], level = 0, parentKey = "") => {
    const baseClass = "flex items-center justify-between w-full py-2.5 px-3 rounded-lg text-sm transition-all duration-200 text-left";
    const activeClass = "bg-[#1CADA3] text-white font-medium shadow-sm";
    const inactiveClass = "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900";

    return items.map((item, index) => {
      const key = `${parentKey}-${index}`;
      const hasChildren = item.children && item.children.length > 0;
      const active = isActive(item.href) && (item.label === 'Dashboard'); // simplified logic
      const isExpanded = expanded[key];

      return (
        <div key={key}>
          <button
            onClick={() => {
              if (hasChildren) {
                toggleExpand(key);
              } else if (item.href) {
                router.push(item.href);
              }
            }}
            className={cn(baseClass, active ? activeClass : inactiveClass)}
            style={{ paddingLeft: `${level * 16 + 12}px` }}>
            <div className="flex items-center gap-2">
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </div>

            {hasChildren && (
              <span>
                {isExpanded ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </span>
            )}
          </button>

          {hasChildren && isExpanded && (
            <div className="flex flex-col gap-1 mt-1">
              {renderLinks(item.children!, level + 1, key)}
            </div>
          )}
        </div>
      );
    });
  };



  return (
    <div className="flex h-full flex-col border-r border-neutral-300">
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-hidden bg-gray-100">
            <Logo />
            <div className="mt-8 flex-1 overflow-y-auto px-2 custom-scrollbar [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]">
              <div className="flex flex-col gap-1 pb-10">
                {renderLinks(links)}
              </div>
            </div>
          </div>

          <div>
            <SidebarLink
              link={{
                label: "Logout",
                href: "#",
                icon: <LogOut className="h-5 w-5 text-neutral-800" />,
                onClick: handleLogout,
              }}
              className="text-red-600 hover:bg-red-50 mt-4 mx-2"
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

export const Logo = () => {
  return (
    <div className="h-20 w-full flex flex-col items-center justify-center pt-6 pb-2 text-[#2076C7]">
        <img 
            src="/logo.png" 
            alt="Bharati Mall Logo" 
            className="h-12 w-auto object-contain mb-2"
        />
        <span className="text-sm font-black tracking-tight leading-tight">Bharati Mall</span>
    </div>
  );
};
