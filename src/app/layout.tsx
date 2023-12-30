import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from "@/components/navbar/navbar"
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clothify',
  description: 'Clothify is a clothing store project created for my developer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  console.log(token)
  return (
    <html lang="en">
      <body className={inter.className}>
          <NavBar />
          {children}
        </body>
    </html>
  )
}
