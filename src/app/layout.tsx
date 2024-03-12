import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from "@/components/navbar"
import Footer from '@/components/footer'
import { performRequest } from '../lib/datocms';
import { PAGE_CONTENT_QUERY } from '@/lib/queries';
import { SetupState } from '@/state'

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { data: { allItems } } = await performRequest({ query: PAGE_CONTENT_QUERY });
  return (
    <html lang="en">
      <body className={`${inter.className} bg-secondary`}>
          <SetupState allItems={allItems} />
          <NavBar/>
          {children}
          <Footer />
        </body>
    </html>
  )
}
