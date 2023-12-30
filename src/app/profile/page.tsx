"use client"

import { useAuth } from "@/hooks/useAuth"
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

export default function Profile() {  
  const { setToken } = useAuth();
  const router = useRouter()

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