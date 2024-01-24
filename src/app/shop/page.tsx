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
           <section>
            <h1>Shop</h1>
            <ul className='flex flex-col'>
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
                <li key={id}>
                  <Image
                    src={thumbnail.responsiveImage.src}
                    width={thumbnail.responsiveImage.width}
                    height={thumbnail.responsiveImage.height}
                    alt={thumbnailAlt}
                    className=' w-24'
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
