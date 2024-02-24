"use client";

import { useState } from "react";
import Button from "./button";
import Quantity from "./quantity";
import SizePicker from "./sizePicker";
import { useCart, useAlert } from "@/hooks";

export default function AddToCart({ sizes, item }: { sizes: Array<string>, item: any}) {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState<null | string>(null);
    const { addItem } = useCart();
    const { dispatchAlert, setStatus } = useAlert();
    
    const updateCount = (value: number) => {
        if (value === 1) {
            setQuantity(quantity + 1);
        } else if (value === -1) {
            quantity > 1 ? setQuantity(quantity - 1) : null;
        }
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            return;
        }
        if (quantity > 0) {
            addItem(item, quantity, selectedSize);
            dispatchAlert(`${item.title} added to your cart`);
            setStatus(true);
        }
        setQuantity(1);
        setSelectedSize(null);
    }

    return (
        <>
         <div className="flex gap-2">
            <SizePicker sizes={sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
        </div>
            <Quantity quantity={quantity} updateCount={updateCount}/>
            <span className="w-4/5">
                <Button onClick={handleAddToCart} isActive={selectedSize ? true : false} >Add to Cart</Button>
            </span>
        </>
   )
}