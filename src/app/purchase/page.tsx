"use client"

import { useCart } from "@/hooks"
import CartItem from "@/components/cartItem";
import PurchaseForm from "@/components/purchaseForm";


export default function Purchase() {
    const { cart } = useCart();
    return (
        <main className='flex flex-col justify-center items-center w-full min-h-rest 2xl:px-40 xl:px-28 md:flex-row md:items-start md:gap-4 py-8 px-8 md:px-2 min-h-[91vh]'>
            <section className='xl:w-2/5 w-full h-full'>
                <h1 className="text-xl mx-12 my-8 font-medium">Your order</h1>
                <div className="flex flex-col w-full gap-8 items-center 2xl:px-12 xl:px-6 md:px-2 px-8">
                    {cart.map((item) => (
                        <CartItem
                            name="PurchaseItem"
                            key={item.id.concat(item.size)}
                            item={item}
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
