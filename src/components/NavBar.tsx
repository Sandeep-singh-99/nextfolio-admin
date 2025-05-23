import React from "react";
import { useTheme } from "next-themes";

import { LogOutIcon, Moon, Sun } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const { setTheme } = useTheme();

  const router = useRouter()

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      router.push("/login")
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Logout failed");
    }
  }
  return (
    <div className="flex flex-col items-center justify-center border-b-2 w-full h-16">
      <div className="flex items-center justify-between w-full max-w-8xl px-4">
        <div className="text-2xl text-black dark:text-white font-bold">Admin.</div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button onClick={() => handleLogout()} className="flex items-center justify-center w-10 h-10 p-2 text-gray-500 transition-colors duration-200 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring focus:ring-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
            <LogOutIcon/>
          </button>
        </div>
      </div>
    </div>
  );
}
