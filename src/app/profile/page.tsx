"use client"

import { useAuth } from "@/hooks/useAuth"
import { deleteCookie, getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

export default function Profile() {  
  const { setToken } = useAuth();
  const router = useRouter();

  useEffect(() => { 
    if (!getCookie('token')) {
      router.push('/auth')
    }
  }
  , [router])

  const logout = () => {
    setToken(false);
    deleteCookie('token');
    router.push('/auth')
  }

  
  return (
    <main>
     <h1>Profile</h1>
     <button onClick={logout}>Logout</button>
    </main>
  )
}