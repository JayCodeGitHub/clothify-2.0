"use client";

import { useState } from "react";
import Button from "./button";
import Quantity from "./quantity";

export default function AddToCart({ sizes, items }: { sizes: string, items: any}) {
    const [count, setCount] = useState(1);

    const updateCount = (value: number) => {
        if (value === 1) {
            setCount(count + 1);
        } else if (value === -1) {
            count > 1 ? setCount(count - 1) : null;
        }
    }
   return (
    <>
        <h4>{sizes}</h4>
        <Quantity count={count} updateCount={updateCount}/>
        <Button>Add to Cart</Button>
    </>
   )
}