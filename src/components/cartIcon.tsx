"use client"

import { useCart } from "@/hooks";

export default function CartIcon({name}: {name: string,}) {
    const { cart } = useCart();

    return (
        <span className={`flex justify-center items-center flex-col relative`}>
            <span className={`
                flex 
                absolute 
                items-center 
                justify-center 
                top-0 
                right-0 
                w-5 
                h-5 
                text-white 
                bg-primary
                rounded-full
                text-sm
                translate-x-1/2 
                -translate-y-1/2
                transition-all
                ${cart.length === 0 ? 'opacity-0' : 'opacity-100'}
            `}>
                {cart.length}
            </span>
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
                <path 
                    d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"
                />
            </svg>
            {name}
        </span>
    )
}