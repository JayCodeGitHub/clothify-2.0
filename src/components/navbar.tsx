"use client"

import { useAuth } from "@/hooks/useAuth"
import Link from "next/link";

export default function NavBar() {
    const { token } = useAuth();
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/about">About</Link>
            <Link href="/shop">Shop</Link>
            {token === false ? <Link href="/auth">Auth</Link> : <Link href="/profile">Profile</Link>}
      </nav>
    )
}