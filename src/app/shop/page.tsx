import { performRequest } from '../../lib/datocms';
import Items from '@/components/items';

const PAGE_CONTENT_QUERY = `
  query Shop {
    allItems {
      id
      slug
      title
      price
      thumbnailAlt
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
          <Items allItems={allItems} />
        </main>
    )
}
