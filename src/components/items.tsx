import Item from './item';
import { ItemType } from '@/types';

interface ItemsProps {
    allItems: ItemType[]
}

export default function Items({allItems}: ItemsProps) {
    return (
      <section className='my-14'>
        <ul className='grid 2xl:px-40 xl:px-28 px-4 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-y-20 gap-y-14 gap-x-4 lg:gap-x-0'>
          {allItems.map((item) => (
            <Item key={item.id} item={item}/>
          ))}
        </ul>
      </section>
    )
}
