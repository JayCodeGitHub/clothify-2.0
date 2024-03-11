"use client";

interface QuantityProps {
    quantity: number;
    updateCount: (value: number) => void;
    inactive?: boolean;
}

export default function Quantity({quantity, updateCount, inactive}: QuantityProps) {
    return (
    <span className=" flex items-center gap-1 mt-auto">
        Quantity:
        <button
            className={`flex justify-center items-center w-8 h-8 border-0 rounded-full bg-dark ${
                inactive && quantity <= 1 ? "opacity-50 cursor-default" : "opacity-100 cursor-pointer"
            } transition-all `}
            aria-label="button with a minus icon to reduce the amount of product"
            onClick={() => (updateCount(-1))}
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        </button>
        <h3 className='w-6 items-center text-center'>{quantity}</h3>
        <button
             className={`flex justify-center items-center w-8 h-8 border-0 rounded-full bg-dark ${
                quantity >= 9 ? "opacity-50 cursor-default" : "opacity-100 cursor-pointer"
            } transition-all `}
            aria-label="button with a plus icon to increase the amount of product"
            onClick={() => updateCount(1)}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        </button>
    </span>
)
}