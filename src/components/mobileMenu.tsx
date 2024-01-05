"use client";

import { useState } from "react";
import NavLink from "./navlink";
import Link from "next/link";
import { NavigationItems } from "@/items/navigationItems";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(currentState => !currentState);
    const { cart } = NavigationItems;


    return (
        <div className="flex md:hidden justify-between items-center px-4 h-20 ">
            <Link href={NavigationItems.list[0].href} className="text-xl">{NavigationItems.list[0].name}</Link>  
            <span className="flex justify-center items-center gap-8">
            <NavLink href={cart.href}>
                <span className="flex justify-center items-center flex-col text-sm">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
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
            <span
                className="flex flex-col justify-between w-6 h-4 cursor-pointer md:hidden z-20 relative"
                onClick={toggleMenu}
            >
                <span className={`w-full h-[0.2rem] rounded-sm transition-all absolute top-1/2 left-0 ${isOpen ? "bg-white translate-y-0 rotate-45" : "bg-black translate-y-1 rotate-0"}`} />
                <span className={`w-full h-[0.2rem] rounded-sm transition-all absolute top-1/2 left-0 ${isOpen ? "bg-white -translate-y-0 -rotate-45" : "bg-black -translate-y-1 -rotate-0"}`} />
            </span>
            <div className={`z-10 absolute top-0 left-0 bg-dark w-full h-full transition-all ${isOpen ? "-translate-x-0" : "-translate-x-full"}`}>
            <ul className="flex flex-col w-full h-full justify-around items-center gap-6 text-white py-48">
                {NavigationItems.list.map(({href, name}) => (
                    <li key={name} onClick={toggleMenu}>
                        <NavLink href={href}>{name}</NavLink>    
                    </li>
                ))}
                <li onClick={toggleMenu}>
                <NavLink href={NavigationItems.profile.href}>{NavigationItems.profile.name}</NavLink>  
                </li>
            </ul>
            </div>
        </span>
        </div>
    )
}