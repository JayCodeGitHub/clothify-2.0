"use client"

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth"
import { deleteCookie, getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import axios from "axios";

export default function Profile() {  
  const { setToken } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState(false);

  const getProfile = async () => {
    const token = getCookie('token')
    const { data } = await axios.get('/api/auth/me', { headers: { Authorization: token } });
    if (data === false) {
      deleteCookie('token');
    }
    setProfile(data);
  }

  useEffect(() => { 
    if (!getCookie('token')) {
      router.push('/auth')
    } else {
      getProfile();
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
     <div>
      {profile ? (
        <h3>Email: {profile}</h3>
      ) : (
        <h3>Loading ...</h3>
      )}

     </div>
     <button onClick={logout}>Logout</button>
    </main>
  )
}