"use client"

import { useAuth } from "@/hooks/useAuth"
import NavLink from "./navlink";

export default function NavBar() {
    const { token } = useAuth();
    return (
        <nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/cart">Cart</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/shop">Shop</NavLink>
            {token === false ? <NavLink href="/auth">Auth</NavLink> : <NavLink href="/profile">Profile</NavLink>}
      </nav>
    )
}