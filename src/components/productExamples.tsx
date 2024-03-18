import Item from "./item";
import { ItemType } from '@/types';
import ArrowButton from "./arrowButton";

interface productExampleProps {
  productExamples: ItemType[]
}

export default function productExamples({productExamples}: productExampleProps) {
  return (
    <section className='my-24'>
       <div className="flex md:flex-row flex-col justify-between md:items-center items-start 2xl:px-48 xl:px-28 px-4 my-16">
        <h2 className=" text-lg font-semibold">Some of our Products</h2>
        <ArrowButton/>
      </div>
      <ul className='grid 2xl:px-40 xl:px-28 px-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-y-20 gap-y-14 gap-x-4 lg:gap-x-0'>
        {productExamples.map((item) => (
          <Item key={item.id} item={item}/>
        ))}
      </ul>
  </section>
  )
}