import Image from "next/image";

interface CartItemProps {
    title: string;
    price: number,
    quantity: number,
    thumbnail: {
      responsiveImage: {
        src: string,
        width: number,
        height: number
      }
    },
    thumbnailAlt: string;
}

export default function CartItem({title, price, quantity, thumbnail, thumbnailAlt}: CartItemProps) {
    return (
        <div className="w-1/2">
        <h1>{title}</h1>
        <h2>{price}</h2>
        <h3>{quantity}</h3>
        <Image
              src={thumbnail.responsiveImage.src}
              width={thumbnail.responsiveImage.width}
              height={thumbnail.responsiveImage.height}        
              alt={thumbnailAlt}
            />
        </div>
    )
}