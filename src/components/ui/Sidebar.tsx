// Mark this file as a client component
"use client"; 

import { Settings, Home, Package2, ShoppingCart, Users, UserPlus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";  // Import the hook for current path

export default function Sidebar() {
  const pathname = usePathname(); // Get the current pathname

  // Helper function to determine if the link is active
  const isActive = (path: string) => pathname === path;

  return (
    <aside className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center justify-between border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Dripto</span>
          </Link>
          <ModeToggle />
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/dashboard") ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/devices"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/devices") ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              Devices
            </Link>
            <Link
              href="/nurses"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/nurses") ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              <UserPlus className="h-4 w-4" />
              Nurses
            </Link>
            <Link
              href="/nurse-allocation"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/nurse-allocation") ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              <Users className="h-4 w-4" />
              Nurse Allocation
            </Link>
            <Link
              href="/settings"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/settings") ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Button size="sm" className="w-full">
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
}
