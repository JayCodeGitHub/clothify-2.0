import Image from "next/image";
import Quantity from "./quantity";
import { useCart } from "@/hooks";
import { motion } from "framer-motion";
import { CartItemType } from "@/types/cartItem";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({item} : CartItemProps) {
  const { quantityIncrementation, quantityDecrementation } = useCart();
  const { id, title, price, quantity, thumbnail, thumbnailAlt, size } = item;
  const { responsiveImage: {src, width, height} } = thumbnail;

  const updateCount = (value: number) => {
    if (value === 1) {
      quantityIncrementation(id, 1, size);
    } else if (value === -1) {
      quantityDecrementation(id, 1, size);
    }
  }

    return (
        <motion.div  
          initial={{ opacity: "0%" }}
          animate={{ opacity: "100%" }}
          transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }}
          exit={{ opacity: "0%" }}
          layoutId={id.concat(size)} 
          className="flex flex-col justify-start items-center gap-8 p-4 w-full bg-slate-100 rounded-lg md:flex-row"
        >
           <Image
              src={src}
              width={width}
              height={height}
              alt={thumbnailAlt}
              className=" self-center object-cover w-40 h-40 rounded-md md:w-32 md:h-32"
          />
          <span className="flex flex-col justify-start items-start">
            <h1 className=" text-lg">{title}</h1>
            <span className=" flex gap-4">
              <h2>{price}$</h2>
              <h2>{size}</h2>
            </span>
            <Quantity quantity={quantity} updateCount={updateCount}/>
          </span>
         
        </motion.div>
    )
}