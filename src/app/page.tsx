"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import { UserButton } from "@/features/auth/components/user-button";
import { useEffect, useState } from "react";
export default function Home() {
  const { signOut } = useAuthActions();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    await signOut();
    if (mounted) {
      window.location.reload()
    }
  };

  if (!mounted) { 
    return null;
  }
  return (
    
    <div>
      <UserButton/>
    </div>
  ); 
}
