"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { AuthNavigationItems } from '@/items/authNavigationItems';

export default function AuthNavBar() {  
    const currentRoute = usePathname();

  return (
        <span className='w-80 py-2 px-4'>
            <nav className='flex w-full justify-around'>
            {AuthNavigationItems.map(({name, href}: {name: string, href: string}) => (
                <Link 
                    key={href} 
                    href={href}  
                    className={`
                        ${currentRoute === href ? "text-white" : "text-dark hover:text-gray-500" }
                        relative px-3 py-1.5 font-medium outline-sky-400 transition focus-visible:outline-2
                    `}>
                        {currentRoute === href && (
                            <motion.div 
                                layoutId='active-tab'
                                className='absolute inset-0 bg-primary'
                                style={{ borderRadius: 9999 }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className='relative z-10'>{name}</span>
                </Link>
            ))}
            </nav>
        </span>
  )
}

