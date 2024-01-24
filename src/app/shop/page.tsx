import Image from 'next/image';
import { performRequest } from '../../lib/datocms';
import NavLink from '@/components/navlink';

const PAGE_CONTENT_QUERY = `
  query Shop {
    allItems {
      id
      slug
      title
      price
      thumbnail {
        responsiveImage(imgixParams: {w: 800, h: 1200}) {
          src
          width
          height
        }
      }
    }
  }`;

export default async function Shop() {
    const { data: { allItems } } = await performRequest({ query: PAGE_CONTENT_QUERY });
    return (
        <main>
           <section className='my-14'>
            <ul className='grid 2xl:px-44 xl:px-28 px-4 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-20'>
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
                <li key={id} className='w-64 justify-self-center flex flex-col justify-start items-center gap-4'>
                    <Image
                      src={thumbnail.responsiveImage.src}
                      width={thumbnail.responsiveImage.width}
                      height={thumbnail.responsiveImage.height}
                      
                      alt={thumbnailAlt}
                      className='h-64 w-auto'
                      />
                    <NavLink href={`/items/${slug}`}>{title}</NavLink>
                    <p>{price}$</p>
                </li>
              )
            )}
              </ul>
            </section>
        </main>
    )
}
