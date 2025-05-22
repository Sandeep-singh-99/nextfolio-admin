"use client";
import Dashboard from "./dashboard/page";
import Login from "./login/page";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } =  useSession()
  
  return (
   <div>
    {!session ? <Login/> : <Dashboard/>}
   </div>
  );
}
