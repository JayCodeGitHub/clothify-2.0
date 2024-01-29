"use client";

export default function Quantity({count, updateCount}: {count: number, updateCount: (value: number) => void}) {
    return (
    <span className=" flex items-center gap-1 mt-auto">
        Quantity:
        <button
            className="flex justify-center items-center w-8 h-8 cursor-pointer border-0 rounded-full bg-dark"
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
        <h3 className='w-6 items-center text-center'>{count}</h3>
        <button
            className="flex justify-center items-center w-8 h-8 cursor-pointer border-0 rounded-full bg-dark"
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