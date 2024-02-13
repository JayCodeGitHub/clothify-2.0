export default function Button({
        children,
        onClick,
        type,
        isActive = true
    }: {
        children: React.ReactNode
        onClick?: () => void
        type?: 'submit' | 'button'
        isActive?: boolean 
    }) {

    const handleClick = () => {
        if (isActive && onClick) {
            onClick();
        }
    }
    return (
        <button
            onClick={handleClick}
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
                    isActive ? 
                    'hover:text-gray-900 hover:border-primary hover:bg-transparent bg-primary cursor-pointer' :
                    ' bg-red-300 cursor-default'
                }
                
            `}
        >
            {children}
        </button>
    )
}