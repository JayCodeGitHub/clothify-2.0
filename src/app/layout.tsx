import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from "@/components/navbar"
import { AuthProvider } from '@/hooks/useAuth'
import { CartProvider } from '@/hooks/useCart'
import { ItemsProvider } from '@/hooks/useItems'
import { AlertProvider } from '@/hooks/useAlert'
import { performRequest } from '../lib/datocms';

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

const PAGE_CONTENT_QUERY = `
  query Shop {
    allItems {
      id
      slug
      title
      price
      sizes
      thumbnailAlt
      thumbnail {
        responsiveImage(imgixParams: {w: 800, h: 1200}) {
          src
          width
          height
        }
      }
    }
  }`;


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: { allItems } } = await performRequest({ query: PAGE_CONTENT_QUERY });
  return (
    <html lang="en">
      <body className={`${inter.className} bg-secondary`}>
        <AuthProvider>
          <ItemsProvider initialItems={allItems}>
          <CartProvider>
            <AlertProvider>
              <NavBar items={allItems}/>
              {children}
            </AlertProvider>
          </CartProvider>
          </ItemsProvider>
        </AuthProvider>
        </body>
    </html>
  )
}
