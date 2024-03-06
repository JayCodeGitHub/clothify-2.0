import Image from "next/image";
import { OrderItemType } from "@/types";

interface OrderItemProps {
    item : OrderItemType
}

export default function OrderItem({item}: OrderItemProps) {
    const { title, price, size, quantity, thumbnail, thumbnailAlt} = item;
    const { responsiveImage: { src, width, height} } = thumbnail;
    return (
        <div className="flex justify-start items-center gap-8 p-4 w-full bg-slate-100 rounded-lg flex-row">
           <Image
              src={src}
              width={width}
              height={height}
              alt={thumbnailAlt}
              className="self-center object-cover w-24 h-40 rounded-md md:w-32 md:h-32"
          />
            <span className="flex flex-col justify-start items-start">
                <h1 className=" text-lg">{title}</h1>
                <span className=" flex gap-4">
                    <h2>{price}$</h2>
                    <h2>{size}</h2>
                    <h3>{quantity}</h3>
                </span>
            </span>
        </div>
    )
}



