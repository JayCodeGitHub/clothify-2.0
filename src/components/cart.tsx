"use client"

import Button from "./button";
import CartItem from "./cartItem";
import { useCart } from "@/hooks/useCart";

interface CartProps {
    isCart: boolean;
    toggleCart: () => void;
}

export default function Cart({ isCart, toggleCart }: CartProps) {
    const { cart } = useCart();
    return (
        <div className="fixed z-50">
            <div 
                onClick={toggleCart}
                className="fixed top-0 left-0 z-30 w-full h-full"
                style={{ 
                    backgroundColor: `${ isCart ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'}`,
                    visibility: `${ isCart ? 'visible' : 'hidden'}`,
                    transition: 'all .3s .1s ease-in-out'
                }}
            />
            <section 
                className="flex fixed flex-col items-center gap-8 top-0 right-0 py-8 px-0 w-[80%] md:w-[35%] h-screen overflow-auto z-40 bg-white"
                style={{ 
                    transform: `${ isCart ? 'translateX(0)' : 'translateX(+100%)'}`,
                    transition: 'transform .3s .1s ease-in-out',
                }}
            >
                <div></div>
                {cart.map(({id, title, price, quantity, thumbnail, thumbnailAlt}) => (
                    <CartItem 
                        key={id}
                        title={title}
                        price={price}
                        quantity={quantity}
                        thumbnail={thumbnail}
                        thumbnailAlt={thumbnailAlt}/>
                ))}
                <p>Subtotal:</p>
                <Button>Purchase</Button>
            </section>
        </div>
    )
}