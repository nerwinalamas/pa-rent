"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";

const DashboardNavbar = () => {
    return (
        <nav className="p-4 flex items-center justify-end border-b border-sidebar-border bg-sidebar">
            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    );
};

export default DashboardNavbar;
