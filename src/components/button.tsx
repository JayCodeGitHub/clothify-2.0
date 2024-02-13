export default function Button({
        children,
        onClick,
        type,
        active = true
    }: {
        children: React.ReactNode
        onClick?: () => void
        type?: 'submit' | 'button'
        active?: boolean 
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
                rounded-md
                border-solid
                border-2
                border-transparent
                transition-all 
                ${ 
                    active ? 
                    'hover:text-gray-900 hover:border-primary hover:bg-transparent bg-primary cursor-pointer' :
                    ' bg-red-300 cursor-default'
                }
                
            `}
        >
            {children}
        </button>
    )
}