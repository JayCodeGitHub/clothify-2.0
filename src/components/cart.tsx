"use client"

import Button from "./button";
import CartItem from "./cartItem";
import { useCart } from "@/hooks";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionButtonWrapper = motion(Link);

interface CartProps {
    isCart: boolean;
    toggleCart: () => void;
}

export default function Cart({ isCart, toggleCart }: CartProps) {
    const { cart } = useCart();
    function subtotal() {
        let current = 0;
        cart.map((item) => (current += item.price * item.quantity));
        return current;
      }
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
                className="flex fixed flex-col items-center gap-8 top-0 right-0 py-8 w-[80%] md:w-[70%] lg:w-[45%] xl:w-[35%] h-screen overflow-auto z-40 bg-white 2xl:px-16 xl:px-8 md:px-4 px-16"
                style={{ 
                    transform: `${ isCart ? 'translateX(0)' : 'translateX(+100%)'}`,
                    transition: 'transform .3s .1s ease-in-out',
                }}
            >
                {cart.map(({id, title, price, size, quantity, thumbnail, thumbnailAlt}) => (
                    <CartItem 
                        key={id.concat(size)}
                        id={id}
                        title={title}
                        price={price}
                        size={size}
                        quantity={quantity}
                        thumbnail={thumbnail}
                        thumbnailAlt={thumbnailAlt}/>
                ))}
                <motion.p layout transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }} className="self-start pt-4 pr-0 pb-0">Subtotal: {subtotal()}$</motion.p>
                <MotionButtonWrapper 
                    layout
                    transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }}
                    href="/purchase"
                    className={`w-full ${ cart.length > 0 ? 'pointer-events-auto' : ' pointer-events-none'}`}
                    onClick={toggleCart}
                >
                    <Button isActive={cart.length > 0 ? true : false }>Purchase</Button>
                </MotionButtonWrapper>
            </section>
        </div>
    )
}