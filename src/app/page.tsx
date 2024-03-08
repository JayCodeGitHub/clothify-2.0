"use client"

import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  useLayoutEffect(() => {
    router.push('/shop');
  }, [])
  
  return (
    <main>
      <h1>Home</h1>
    </main>
  )
}