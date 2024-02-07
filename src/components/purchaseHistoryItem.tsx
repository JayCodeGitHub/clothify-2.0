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


export default function PurchaseHistoryItem({title, price, quantity, thumbnail, thumbnailAlt}: CartItemProps) {
    return (
        <div className="flex justify-start items-center gap-8 p-4 w-full bg-slate-100 rounded-lg flex-row">
           <Image
              src={thumbnail.responsiveImage.src}
              width={thumbnail.responsiveImage.width}
              height={thumbnail.responsiveImage.height}        
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
