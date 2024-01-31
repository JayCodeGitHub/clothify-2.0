"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function AuthNavBar() {  
const currentRoute = usePathname();

console.log(currentRoute)
  return (
        <span className='flex justify-around w-80 py-2'>
            <Link href='/auth/login'  className={`hover:text-gray-500 relative ${
                currentRoute === '/auth/login' ? "bg-primary" : ""
            } rounded-full px-3 py-1.5 font-medium outline-sky-400 transition focus-visible:outline-2`}>
                Login
            </Link>
            <Link href='/auth/register' className={`hover:text-gray-500 relative ${
                currentRoute === '/auth/register' ? "bg-primary" : ""
            } rounded-full px-3 py-1.5 font-medium outline-sky-400 transition focus-visible:outline-2`}>
                Register
            </Link>
        </span>
  )
}

