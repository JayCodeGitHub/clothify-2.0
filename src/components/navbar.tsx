"use client"

import { useAuth } from "@/hooks/useAuth"
import NavLink from "./navlink";
import { NavigationItems } from "@/items/navigationItems";

export default function NavBar() {
    const { token } = useAuth();
    const { auth, profile, cart } = NavigationItems;

    return (
        <nav className="w-full h-24 flex justify-between items-center px-44">
            <ul className="flex justify-center items-center gap-6">
                {NavigationItems.list.map(({href, name}) => (
                    <li key={name}>
                        <NavLink href={href}>{name}</NavLink>    
                    </li>
                ))}
            </ul>
            <ul className="flex justify-center items-center gap-12">
                <li>
                    <NavLink href={`${token === false ? auth.href : profile.href}`}>
                        <span className="flex justify-center items-center flex-col">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                            {token === false ? auth.name : profile.name}
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink href={cart.href}>
                        <span className="flex justify-center items-center flex-col">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="#000000" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path 
                                d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"
                            />
                        </svg>
                            {cart.name}
                        </span>
                    </NavLink>
                </li>
            </ul>  
      </nav>
    )
}