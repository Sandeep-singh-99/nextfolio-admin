"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import NavBar from "./NavBar";
import { usePathname } from "next/navigation";

export default function NavBarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathName = usePathname()

  const hiddenPaths = ["/login"]

  const shouldHideNavBar = hiddenPaths.some((path) => pathName?.includes(path))

  if (shouldHideNavBar) {
    return <>{children}</>;
  }
  return (
    <>
      <SessionProvider>
        <NavBar />
        {children}
      </SessionProvider>
    </>
  );
}
