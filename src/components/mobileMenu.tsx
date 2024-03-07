"use client";

import { useState } from "react";
import NavLink from "./navlink";
import Link from "next/link";
import CartIcon from "./cartIcon";
import { NavigationItems } from "@/items/navigationItems";

export default function MobileMenu({ toggleCart }: { toggleCart: () => void }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(currentState => !currentState);
    const { cart } = NavigationItems;


    return (
        <div className="flex md:hidden justify-between items-center px-4 h-20 ">
            <Link href={NavigationItems.list[0].href} className="text-xl">{NavigationItems.list[0].name}</Link>  
            <span className="flex justify-center items-center gap-8">
                <span onClick={toggleCart} className="cursor-pointer">
                    <CartIcon name={cart.name}/>
                </span>
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