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
            `md:text-base text-2xl hover:text-primary transition-all ${
              href.length > 1 ? currentRoute.slice(0, href.length) === href ? " text-primary" : "" : currentRoute === href ? " text-primary" : "" 
            }`}>{children}</Link>
    )
}