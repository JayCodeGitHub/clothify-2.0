"use client"
import { useAuth } from "@/hooks/useAuth"

export default function NavBar() {
    const { token } = useAuth();
    return (
        <nav>
            <a href="/">Home</a>
            <a href="/cart">Cart</a>
            <a href="/about">About</a>
            <a href="/shop">Shop</a>
            {token === false ? <a href="/auth">Auth</a> : <a href="/profile">Profile</a>}
      </nav>
    )
}