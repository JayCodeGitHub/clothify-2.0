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
        <Link href={href} className={currentRoute == href ? "text-red-500" : ""}>{children}</Link>
    )
}