"use client";

import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    return (
        <nav className="container mx-auto p-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">pa-rent</Link>
            <div>
                <SignedOut>
                    <Button asChild>
                        <SignInButton />
                    </Button>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
};

export default Navbar;
