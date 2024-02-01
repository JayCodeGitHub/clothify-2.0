export default function Button({
        children,
        onClick,
        type,
    }: {
        children: React.ReactNode
        onClick?: () => void
        type?: 'submit' | 'button'
    }) {
    return (
        <button 
            onClick={onClick}
            type={type}
            className={`
                w-full
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