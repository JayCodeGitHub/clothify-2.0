import Image from 'next/image';
import NavLink from '@/components/navlink';

interface ItemProps {
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
}

export default async function Item({slug, thumbnail, thumbnailAlt, title, price}: ItemProps) {
    return (
      <li className='place-self-center w-full lg:w-auto'>
        <NavLink href={`/items/${slug}`}>
          <div className='flex flex-col justify-center items-center gap-3 p-5 rounded-lg lg:w-72  bg-white'>
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
}
