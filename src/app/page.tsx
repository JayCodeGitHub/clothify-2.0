"use client"

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  router.push('/shop');
  
  return (
    <main>
      <h1>Home</h1>
    </main>
  )
}