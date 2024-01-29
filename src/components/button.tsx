export default function Button({
        children,
        onClick
    }: {
        children: React.ReactNode
        onClick?: () => void
    }) {
    return (
        <button 
            onClick={onClick}
            className={`
                w-4/5
                py-4
                font-semibold
                text-sm
                text-white
                cursor-pointer
                rounded-md
                bg-primary
                border-solid
                border-2
                border-transparent
                transition-all 
                hover:bg-transparent
                hover:text-gray-900
                hover:border-primary
                
            `}
        >
            {children}
        </button>
    )
}