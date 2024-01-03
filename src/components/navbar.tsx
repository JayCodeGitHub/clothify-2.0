"use client"

import { useAuth } from "@/hooks/useAuth"
import NavLink from "./navlink";
import { NavigationItems } from "@/items/navigationItems";

export default function NavBar() {
    const { token } = useAuth();
    const { auth, profile, cart } = NavigationItems;
    return (
        <nav className="w-full h-24 flex justify-between items-center px-44">
            <ul className="flex justify-center items-center gap-4">
                {NavigationItems.list.map(({href, name}) => (
                    <li key={name}>
                        <NavLink href={href}>{name}</NavLink>    
                    </li>
                ))}
            </ul>
            <ul className="flex justify-center items-center gap-4">
                <li>
                    {token === false ? <NavLink href={auth.href}>{auth.name}</NavLink> : <NavLink href={profile.href}>{profile.name}</NavLink>}
                </li>
                <li>
                    <NavLink href={cart.href}>{cart.name}</NavLink>
                </li>
            </ul>  
      </nav>
    )
}