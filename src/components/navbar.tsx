"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useAuth } from "@/hooks/useAuth"

export default function NavBar() {
    const { token } = useAuth();
    const currentRoute = usePathname();
    return (
        <nav>
            <Link href="/" className={currentRoute == "/" ? "text-red-500" : ""}>Home</Link>
            <Link href="/cart" className={currentRoute == "/cart" ? "text-red-500" : ""}>Cart</Link>
            <Link href="/about" className={currentRoute == "/about" ? "text-red-500" : ""}>About</Link>
            <Link href="/shop" className={currentRoute == "/shop" ? "text-red-500" : ""}>Shop</Link>
            {token === false ? <Link href="/auth" className={currentRoute == "/auth" ? "text-red-500" : ""}>Auth</Link> : <Link href="/profile" className={currentRoute == "/profile" ? "text-red-500" : ""}>Profile</Link>}
      </nav>
    )
}