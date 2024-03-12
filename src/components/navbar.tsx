"use client"

import { useState } from "react";
import { useAuth, useAlert } from "@/hooks";
import Alert from "./alert";
import NavLink from "./navlink";
import { NavigationItems } from "@/items/navigationItems";
import MobileMenu from "./mobileMenu";
import Cart from "./cart";
import CartIcon from "./cartIcon";
import { useStore } from "@/state";

export default function NavBar() {
    const { token } = useAuth();
    const [isCart, setIsCart] = useState(false);
    const { auth, profile, cart } = NavigationItems;
    const { alert } = useStore();

    const toggleCart = () => {
        setIsCart(prevValue => !prevValue);
    }

    return (
        <nav className="w-full">
             {alert ? <Alert message={alert} /> : null}
            <MobileMenu toggleCart={toggleCart} token={token}/>
            <Cart isCart={isCart} toggleCart={toggleCart}/>
            <div  className="w-full h-24 md:flex justify-between items-center 2xl:px-44 xl:px-28 px-4 hidden ">
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
                                    stroke="currentColor"
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
                    <li onClick={toggleCart} className={`cursor-pointer hover:text-primary transition-all`}>
                           <CartIcon name={cart.name}/>
                    </li>
                </ul>  
            </div>
      </nav>
    )
}