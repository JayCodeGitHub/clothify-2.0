import Image from "next/image";
import { OrderItemType } from "@/types";

interface OrderItemProps {
    item : OrderItemType
}

export default function OrderItem({item}: OrderItemProps) {
    const { title, price, quantity, thumbnail, thumbnailAlt} = item;
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
          <span className="flex flex-col justify-start items-start gap-2">
            <h3 className=" text-base">{title}</h3>
            <h2 className="">{price}$</h2>
            <h3>{quantity}</h3>
          </span>
        </div>
    )
}