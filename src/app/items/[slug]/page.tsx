import Image from 'next/image';
import { performRequest } from '../../../lib/datocms';

const ITEMS_CONTENT_QUERY = `
  query Shop {
    allItems {
        slug
    }
  }`;

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

    const ITEM_CONTENT_QUERY = `
    query Shop {
        allItems(filter: {slug: {eq: "${params.slug}"}}) {
          title
          thumbnail {
            responsiveImage(imgixParams: {w: 800, h: 1200}) {
              src
              width
              height
            }
          }
      }
    }`;

      const { data: { allItems } } = await performRequest({ query: ITEM_CONTENT_QUERY });
      const items = allItems[0];
      const {title, thumbnail} = items;

    return (
        <div>
            <h1>{title}</h1>
            <Image src={thumbnail.responsiveImage.src} width={thumbnail.responsiveImage.width} height={thumbnail.responsiveImage.height} alt={title}/>
        </div>
    )
  }