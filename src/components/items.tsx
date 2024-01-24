import Item from './item';

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
            <ul className='grid 2xl:px-44 xl:px-28 px-4 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-y-20 gap-y-14 gap-x-4 lg:gap-x-0'>
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
                <Item key={id} slug={slug} title={title} price={price} thumbnail={thumbnail} thumbnailAlt={thumbnailAlt} />
              )
            )}
              </ul>
            </section>
    )
}