"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
} from "./ui/sidebar";
import { LogOut, Sun, Moon, Monitor, UserCircle2, LayoutDashboardIcon, Projector, Package2Icon, Contact2Icon, Home, HeartOffIcon, Sparkles, UserCheck, Code } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import Link from "next/link";

export function AppSidebar() {
  const { setTheme, theme } = useTheme();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      router.push("/login");
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <Sidebar
      collapsible="icon"
      className="border-r bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-3xl font-bold text-gray-900 dark:text-white py-6 px-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 bg-clip-text">
            ADMIN.
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg"
                >
                  <Link href="/dashboard" className="flex items-center">
                    <LayoutDashboardIcon className="mr-3 h-5 w-5 text-gray-600 dark:text-gray-300" />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg"
                >
                  <Link href="/hero" className="flex items-center">
                    <UserCheck className="mr-3 h-5 w-5 text-gray-600 dark:text-gray-300" />
                    <span className="font-medium">Hero</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg"
                >
                  <Link href="/about" className="flex items-center">
                    <UserCircle2 className="mr-3 h-5 w-5 text-gray-600 dark:text-gray-300" />
                    <span className="font-medium">About</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg"
                >
                  <Link href="/skill" className="flex items-center">
                    <Code className="mr-3 h-5 w-5 text-gray-600 dark:text-gray-300" />
                    <span className="font-medium">Skill</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg"
                >
                  <Link href="/project" className="flex items-center">
                    <Package2Icon className="mr-3 h-5 w-5 text-gray-600 dark:text-gray-300" />
                    <span className="font-medium">Project</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg"
                >
                  <Link href="/contact" className="flex items-center">
                    <Contact2Icon className="mr-3 h-5 w-5 text-gray-600 dark:text-gray-300" />
                    <span className="font-medium">Contact</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* Enhanced Theme Toggle Dropdown */}
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="group relative flex items-center justify-between hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg">
                      <div className="flex items-center">
                        {theme === "light" ? (
                          <Sun className="mr-3 h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                        ) : theme === "dark" ? (
                          <Moon className="mr-3 h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                        ) : (
                          <Monitor className="mr-3 h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                        )}
                        <span className="font-medium">Theme</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                        {theme}
                      </span>
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg p-2"
                  >
                    <DropdownMenuItem
                      onClick={() => setTheme("light")}
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 rounded-md transition-colors duration-150 cursor-pointer"
                    >
                      <Sun className="mr-2 h-4 w-4" />
                      <span>Light</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setTheme("dark")}
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 rounded-md transition-colors duration-150 cursor-pointer"
                    >
                      <Moon className="mr-2 h-4 w-4" />
                      <span>Dark</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setTheme("system")}
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 rounded-md transition-colors duration-150 cursor-pointer"
                    >
                      <Monitor className="mr-2 h-4 w-4" />
                      <span>System</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
              {/* Logout Button */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="hover:bg-red-100 dark:hover:bg-red-900/50 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200 rounded-lg"
                >
                  <button
                    onClick={() => handleLogout()}
                    className="flex cursor-pointer items-center"
                  >
                    <LogOut className="mr-3 h-5 w-5 text-red-500 dark:text-red-400" />
                    <span className="font-medium">Sign Out</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
