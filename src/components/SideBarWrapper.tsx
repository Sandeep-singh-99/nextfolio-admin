"use client";
import React, { useMemo } from "react";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { AppSidebar } from "./AppSidebar";

const HIDDEN_PATHS = ["/login"];

export default function SideBarWrapper({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const shouldHideNavBar = useMemo(
    () => HIDDEN_PATHS.some((path) => pathName?.includes(path)),
    [pathName]
  );

  if (shouldHideNavBar) {
    return (
      <main className="min-h-screen flex flex-col">
        {children}
      </main>
    );
  }

  return (
    <SessionProvider>
      <SidebarProvider>
        <div className="flex min-h-screen">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <header className="sticky px-4 py-2 flex items-center">
              <SidebarTrigger size="lg" className="mr-4 cursor-pointer" />
            </header>
            <main className="flex-1 p-4 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </SessionProvider>
  );
}