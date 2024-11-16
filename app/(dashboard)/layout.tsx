import DashboardNavbar from "./_components/navbar";
import DashboardSidebar from "./_components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <DashboardSidebar />
            <main className="w-full">
                <DashboardNavbar />
                <section className="container mx-auto p-4">{children}</section>
            </main>
        </SidebarProvider>
    );
}
