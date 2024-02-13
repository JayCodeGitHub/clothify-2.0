
interface SizePickerProps {
    sizes: Array<string>;
    selectedSize: null | string;
    setSelectedSize: (size: string) => void;

}


export default function SizePicker({sizes, selectedSize, setSelectedSize}: SizePickerProps) {
    return (
        <>
            {sizes.map((size, index) => (
                <button 
                    key={size} 
                    className={` 
                        border-2 border-black p-2 rounded-md min-w-14 transition-all
                        ${ size === selectedSize ? " text-primary border-primary" : " text-black"}
                    `} 
                    onClick={() => setSelectedSize(size)}>{size}
                </button>
            ))}
        </>
    )
}