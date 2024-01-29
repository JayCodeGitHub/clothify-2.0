"use client";

import { useState } from "react";
import Button from "./button";
import Quantity from "./quantity";
import { useCart } from "../hooks/useCart";

export default function AddToCart({ sizes, item }: { sizes: string, item: any}) {
    const [count, setCount] = useState(1);
    const { addItem } = useCart();
    

    const updateCount = (value: number) => {
        if (value === 1) {
            setCount(count + 1);
        } else if (value === -1) {
            count > 1 ? setCount(count - 1) : null;
        }
    }

    const handleAddToCart = () => {
        if (count > 0) {
            () => addItem(item, count);
        }
        setCount(1);
    }

    return (
        <>
            <h4>{sizes}</h4>
            <Quantity count={count} updateCount={updateCount}/>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
        </>
   )
}