import AddToCart from '@/components/addToCart';
import Image from 'next/image';
import { performRequest } from '../../../lib/datocms';
import { ITEMS_CONTENT_QUERY, ITEM_CONTENT_QUERY } from '../../../lib/queries';

export async function generateStaticParams() {
    try {
        const { data: { allItems } } = await performRequest({ query: ITEMS_CONTENT_QUERY });
        return allItems.map((item: any) => ({
            slug: item.slug,
        }));
    } catch (error) {
        console.error("Error fetching items:", error);
        return [];
    }
}

export default async function Page({ params }: { params: { slug: string} }) {

      const query =  ITEM_CONTENT_QUERY(params.slug);
  
      const { data: { allItems } } = await performRequest({ query: query});
      const items = allItems[0];
      const {
        title,
        description,
        price,
        sizes,
        thumbnailAlt,
        thumbnail,
        gallery
      } = items;

      const { responsiveImage: {src, width, height} } = thumbnail;

    return (
        <main className='flex flex-col justify-center items-center w-full 2xl:px-40 xl:px-28 md:flex-row md:items-start 2xl:gap-32 xl:gap-16 md:gap-8 py-8 px-8 md:px-0'>
          <span className='object-contain md:w-2/5 w-full aspect-square rounded-lg flex justify-center'>
           <Image 
              src={src}
              width={width}
              height={height}
              alt={thumbnailAlt}
              className=' h-full w-auto rounded-lg'
            />
              </span>
            <div className='flex flex-col justify-around gap-8 py-8 md:w-2/6 w-full'>
              <h1 className='font-bold text-2xl pl-2'>{title}</h1>
              <p>{description}</p>
              <h2 className='font-bold text-xl pl-2'>{price}$</h2>
              <AddToCart sizes={sizes} item={items}/>
            </div>
            {gallery.map(({id, responsiveImage}:{
              id: string,
              responsiveImage: {
                src: string,
                width: number,
                height: number
              }
            }) => (
                <Image 
                  key={id} 
                  src={responsiveImage.src}
                  width={responsiveImage.width}
                  height={responsiveImage.height}
                  alt={thumbnailAlt}
                  className='w-52 hidden'
                />
            )
            )}
        </main>
    )
  }