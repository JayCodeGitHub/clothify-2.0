"use client";

import { useState } from "react";
import Button from "./button";
import Quantity from "./quantity";
import { useCart } from "../hooks/useCart";

export default function AddToCart({ sizes, item }: { sizes: string, item: any}) {
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useCart();
    

    const updateCount = (value: number) => {
        if (value === 1) {
            setQuantity(quantity + 1);
        } else if (value === -1) {
            quantity > 1 ? setQuantity(quantity - 1) : null;
        }
    }

    const handleAddToCart = () => {
        if (quantity > 0) {
            addItem(item, quantity);
        }
        setQuantity(1);
    }

    return (
        <>
            <h4>{sizes}</h4>
            <Quantity quantity={quantity} updateCount={updateCount}/>
            <span className="w-4/5">
                <Button onClick={handleAddToCart}>Add to Cart</Button>
            </span>
        </>
   )
}