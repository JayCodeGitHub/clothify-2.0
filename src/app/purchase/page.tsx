"use client"

import { useState } from "react";
import { useCart } from "@/hooks/useCart"
import CartItem from "@/components/cartItem";
import Button from "@/components/button";
import PaymentForm from "@/components/paymentForm";
import PersonalForm from "@/components/personalForm";


export default function Purchase() {
    const { cart } = useCart();

    const [payment, setPayment] = useState({})
    const [form, setForm] = useState({})

    function subtotal() {
        let current = 0;
        cart.map((item) => (current += item.price * item.quantity));
        return current;
      }
    return (
        <main className='flex flex-col justify-center items-center w-full h-rest 2xl:px-40 xl:px-28 md:flex-row md:items-start md:gap-4 py-8 px-8 md:px-2'>
            <section className='xl:w-2/5 w-full h-full'>
                <h1 className="text-xl mx-12 my-8 font-medium">Your order</h1>
                <div className="flex flex-col w-full gap-8 items-center 2xl:px-12 xl:px-6 md:px-2 px-16">
                    {cart.map(({id, title, price, quantity, thumbnail, thumbnailAlt}) => (
                        <CartItem 
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            quantity={quantity}
                            thumbnail={thumbnail}
                            thumbnailAlt={thumbnailAlt}
                        />
                    ))}
                </div>
            </section>
            <section className='xl:w-2/5 w-full h-full'>
                <h1 className="text-lg mx-8 my-6 font-medium">Personal Data</h1>
               <PersonalForm />
                <h1 className="text-lg mx-8 my-6 font-medium">Payment Data</h1>
                <PaymentForm />
                <p className="pt-4 my-4 font-medium">Subtotal: {subtotal()}$</p>
                <Button>Order Now</Button>
            </section>
        </main>
    )
}
