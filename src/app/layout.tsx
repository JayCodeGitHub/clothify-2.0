import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from "@/components/navbar"
import { AuthProvider } from '@/hooks/useAuth'
import { CartProvider } from '@/hooks/useCart'
import { ItemsProvider } from '@/hooks/useItems'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clothify',
  description: 'Clothify is a clothing store project created for my developer portfolio',
  icons: {
    icon: [
      {
        url: "/images/favicon.svg", 
        href: "/images/favicon.svg", 
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-secondary`}>
        <AuthProvider>
          <ItemsProvider>
          <CartProvider>
          <NavBar />
          {children}
          </CartProvider>
          </ItemsProvider>
        </AuthProvider>
        </body>
    </html>
  )
}
