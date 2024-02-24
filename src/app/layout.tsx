import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from "@/components/navbar"
import { performRequest } from '../lib/datocms';
import Providers from '@/components/providers'

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
        <Providers allItems={allItems}>
          <NavBar items={allItems}/>
          {children}
        </Providers>
        </body>
    </html>
  )
}
