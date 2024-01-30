"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavLink({
    children, href
  }: {
    children: React.ReactNode
    href: string
  }) {
    const currentRoute = usePathname();
    return (
        <Link 
          href={href}
          className={
            `md:text-base text-2xl hover:text-primary transition-all 
              ${ currentRoute.length > 1 ? 
                href.substring(0, currentRoute.length) === currentRoute ? " text-primary" : "" : 
                currentRoute === href ? " text-primary" : ""
              }
            `}
        >
          {children}
        </Link>
    )
}