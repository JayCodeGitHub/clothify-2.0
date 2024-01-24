import Image from 'next/image';
import NavLink from '@/components/navlink';

interface ItemsProps {
    allItems: {
        id: string,
        slug: string,
        title: string,
        price: number,
        thumbnail: {
          responsiveImage: {
            src: string,
            width: number,
            height: number
          }
        }, 
        thumbnailAlt: string
      }[]
}

export default async function Items({allItems}: ItemsProps) {
    return (
           <section className='my-14'>
            <ul className='grid 2xl:px-44 xl:px-28 px-4 2xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 lg:gap-y-20 gap-y-14 gap-x-4 lg:gap-x-0'>
            {allItems.map(({ id, slug, title, price, thumbnail, thumbnailAlt}: {
                id: string,
                slug: string,
                title: string,
                price: number,
                thumbnail: {
                  responsiveImage: {
                    src: string,
                    width: number,
                    height: number
                  }
                }, 
                thumbnailAlt: string
              }) => (
                <li key={id} className='place-self-center w-full lg:w-auto'>
                  <NavLink href={`/items/${slug}`} key={id}>
                    <div className='flex flex-col justify-center items-center gap-3 p-5 rounded-lg lg:w-72 bg-white'>
                    <Image
                      src={thumbnail.responsiveImage.src}
                      width={thumbnail.responsiveImage.width}
                      height={thumbnail.responsiveImage.height}
                      
                      alt={thumbnailAlt}
                      className=' self-center object-cover lg:h-80 h-64 w-auto rounded-lg'
                      />
                      <span className='h-24 lg:h-14 flex justify-start items-center w-full'>
                        <h2 className='text-base lg:text-lg text-black hover:text-black'>{title}</h2>
                      </span>
                    <p className='self-start text-base lg:text-lg text-black hover:text-black'>{price}$</p>
                      </div>
                  </NavLink>
                </li>
              )
            )}
              </ul>
            </section>
    )
}
