import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-gray-50 font-sans">
            <div className="hidden md:block">
                <DashboardSidebar />
            </div>

            <div className="flex-1 flex flex-col min-h-screen w-full overflow-x-hidden">
                <DashboardHeader />
                <main className="flex-1 overflow-y-auto max-h-screen">
                    {children}
                </main>
            </div>
        </div>
    );
}
