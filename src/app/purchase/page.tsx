"use client"

import { useCart } from "@/hooks/useCart"
import CartItem from "@/components/cartItem";
import PurchaseForm from "@/components/purchaseForm";


export default function Purchase() {
    const { cart } = useCart();
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
            </section>
        </main>
    )
}
