"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';


const navigationItems = [
    { name: 'Login', href: '/auth/login' },
    { name: 'Register', href: '/auth/register' },
]

export default function AuthNavBar() {  
const currentRoute = usePathname();

console.log(currentRoute)
  return (
        <span className='flex justify-around w-80 py-2'>
            {navigationItems.map(({name, href}: {name: string, href: string}) => (
                <Link key={name} href={href}  className={`hover:text-gray-500 relative ${
                    currentRoute === href ? "bg-primary" : ""
                } rounded-full px-3 py-1.5 font-medium outline-sky-400 transition focus-visible:outline-2`}>
                    {name}
                </Link>
            ))}
        </span>
  )
}

