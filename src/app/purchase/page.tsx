"use client"

import { useState } from "react";
import { useCart } from "@/hooks/useCart"
import CartItem from "@/components/cartItem";
import Button from "@/components/button";
import PurchaseForm from "@/components/purchaseForm";


export default function Purchase() {
    const { cart } = useCart();

    const initialForm = {
        fullName: '',
        email: '',
        address: '',
        country: '',
        cardName: '',
        cardNumber: '',
        cardDate: '',
        cardCvv: '',
    }
    
    const [form, setForm] = useState({ ...initialForm})
    const [error, setError] = useState<null | string>(null)

    function subtotal() {
        let current = 0;
        cart.map((item) => (current += item.price * item.quantity));
        return current;
    }

    const validate = () => {
        const { 
            fullName,
            email,
            address,
            country,
            cardName,
            cardNumber,
            cardDate,
            cardCvv
        } = form;
        if(!fullName || !email || !address || !country || !cardName || !cardNumber || !cardDate || !cardCvv) {
            setError('All fields are required');
            return false;
        }
        setError(null);
        return true;
    }

    const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = validate();
        if(isValid) {
            console.log(form);
            setForm({...initialForm});
            e.currentTarget.reset();
        }
    }

    return (
        <main className='flex flex-col justify-center items-center w-full min-h-rest 2xl:px-40 xl:px-28 md:flex-row md:items-start md:gap-4 py-8 px-8 md:px-2'>
            <section className='xl:w-2/5 w-full h-full'>
                <h1 className="text-xl mx-12 my-8 font-medium">Your order</h1>
                <div className="flex flex-col w-full gap-8 items-center 2xl:px-12 xl:px-6 md:px-2 px-16">
                    {cart.map(({id, title, price, size, quantity, thumbnail, thumbnailAlt}) => (
                        <CartItem 
                            key={id.concat(size)}
                            id={id}
                            title={title}
                            price={price}
                            size={size}
                            quantity={quantity}
                            thumbnail={thumbnail}
                            thumbnailAlt={thumbnailAlt}
                        />
                    ))}
                </div>
            </section>
            <section className='xl:w-2/5 w-full h-full pt-10'>
                <PurchaseForm />
                <p className="pt-4 my-4 font-medium">Subtotal: {subtotal()}$</p>
                <Button type="submit">Order Now</Button>
            </section>
        </main>
    )
}
