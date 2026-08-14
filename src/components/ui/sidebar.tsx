"use client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export interface Links {
    label: string;
    href?: string;
    icon: React.ReactNode;
    onClick?: () => void;
    children?: Links[]; 
}

interface SidebarContextProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
    undefined
);

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};

export const SidebarProvider = ({
    children,
    open: openProp,
    setOpen: setOpenProp,
    animate = true,
}: {
    children: React.ReactNode;
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    animate?: boolean;
}) => {
    const [openState, setOpenState] = useState(false);

    const open = openProp !== undefined ? openProp : openState;
    const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

    return (
        <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const Sidebar = ({
    children,
    open,
    setOpen,
    animate,
}: {
    children: React.ReactNode;
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    animate?: boolean;
}) => {
    return (
        <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
            {children}
        </SidebarProvider>
    );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
    return <DesktopSidebar {...props} />;
};

export const DesktopSidebar = ({
    className,
    children,
    ...props
}: React.ComponentProps<typeof motion.div>) => {
    const { open, setOpen, animate } = useSidebar();

    return (
        <motion.div
            className={cn(
                "hidden md:flex flex-col bg-gray-100 px-4 py-4 h-screen shrink-0 overflow-y-auto",
                className
            )}
            animate={{
                width: animate ? (open ? "260px" : "64px") : "260px",
            }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            {...props}>
            {children}
        </motion.div>
    );
};

export const MobileSidebar = ({
    links,
    onNavigate,
    onLogout
}: {
    links: Links[];
    onNavigate: (href: string) => void;
    onLogout?: () => void;
}) => {
    const router = useRouter();
    const { open, setOpen } = useSidebar();

    const handleLogout = () => {
        if (onLogout) {
            onLogout();
        } else {
            sessionStorage.removeItem("bharatimall_active_user");
            window.location.href = "/";
        }
    };

    return (
        <div className="md:hidden">
            <div className="p-2">
                <Menu
                    className="h-7 w-7 text-neutral-700 cursor-pointer"
                    onClick={() => setOpen(true)}
                />
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-white z-50 p-6 flex flex-col overflow-y-auto"
                    >
                        <X
                            className="absolute right-6 top-6 h-7 w-7 text-gray-700 cursor-pointer"
                            onClick={() => setOpen(false)}
                        />

                        <div className="h-20 mb-6 mt-12 mx-auto flex flex-col items-center justify-center font-bold text-xl text-[#2076C7]">
                            <img 
                                src="/logo.png" 
                                alt="Bharati Mall Logo" 
                                className="h-12 w-auto object-contain mb-2"
                            />
                        </div>

                        <div className="flex flex-col gap-2 mt-4">
                            {links.map((link, index) => (
                                <MobileNavItem 
                                    key={index} 
                                    link={link} 
                                    onNavigate={onNavigate} 
                                    setOpen={setOpen} 
                                />
                            ))}
                        </div>

                        {/* Logout Section */}
                        <div className="mt-auto pt-6 border-t">
                             <button
                                onClick={handleLogout}
                                className="flex items-center gap-3 py-2 px-3 text-gray-700 hover:bg-red-50 w-full rounded-md"
                            >
                                <LogOut className="h-5 w-5" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const MobileNavItem = ({ 
    link, 
    onNavigate, 
    setOpen,
    depth = 0 
}: { 
    link: Links; 
    onNavigate: (href: string) => void; 
    setOpen: (open: boolean) => void;
    depth?: number;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = link.children && link.children.length > 0;

    const handleClick = () => {
        if (hasChildren) {
            setIsOpen(!isOpen);
        } else if (link.href) {
            onNavigate(link.href);
            setOpen(false);
        } else if (link.onClick) {
            link.onClick();
            setOpen(false);
        }
    };

    return (
        <div className="flex flex-col">
            <button
                onClick={handleClick}
                className={cn(
                    "flex items-center justify-between py-2 px-3 rounded-md text-left transition-all",
                    "text-gray-800 hover:bg-gray-100",
                    depth > 0 && "ml-4 text-sm text-gray-600"
                )}
            >
                <div className="flex items-center gap-3">
                    {link.icon}
                    <span>{link.label}</span>
                </div>
                {hasChildren && (
                    isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
                )}
            </button>

            <AnimatePresence>
                {hasChildren && isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col"
                    >
                        {link.children?.map((child, idx) => (
                            <MobileNavItem 
                                key={idx} 
                                link={child} 
                                onNavigate={onNavigate} 
                                setOpen={setOpen}
                                depth={depth + 1}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const SidebarLink = ({
    link,
    className,
    ...props
}: {
    link: Links;
    className?: string;
}) => {
    const { open, animate } = useSidebar();
    return (
        <button
            onClick={() => {
                if(link.onClick) link.onClick();
                else if (link.href) window.location.href = link.href;
            }}
            className={cn(
                "flex items-center gap-3 py-2 px-3 rounded-md hover:bg-[#60b2ff9c] transition-all",
                className
            )}
            {...props}>
            {link.icon}

            <motion.span
                animate={{
                    display: animate ? (open ? "inline-block" : "none") : "inline-block",
                    opacity: animate ? (open ? 1 : 0) : 1,
                }}
                className="text-neutral-800 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block p-0! m-0!">
                {link.label}
            </motion.span>
        </button>
    );
};
