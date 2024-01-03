"use client"

import { useAuth } from "@/hooks/useAuth"
import NavLink from "./navlink";
import { NavigationItems } from "@/items/navigationItems";

export default function NavBar() {
    const { token } = useAuth();
    const { auth, profile } = NavigationItems;
    return (
        <nav>
            {NavigationItems.list.map(({href, name}) => (
                <NavLink key={name} href={href}>{name}</NavLink>    
            ))}
            {token === false ? <NavLink href={auth.href}>{auth.name}</NavLink> : <NavLink href={profile.href}>{profile.name}</NavLink>}
      </nav>
    )
}