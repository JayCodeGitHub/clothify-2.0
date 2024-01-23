import { all } from 'axios';
import { performRequest } from '../../../lib/datocms';

const ITEMS_CONTENT_QUERY = `
  query Shop {
    allItems {
      id
      title
    }
  
    _allItemsMeta {
      count
    }
  }`;

export async function generateStaticParams() {
    try {
        const { data: { allItems } } = await performRequest({ query: ITEMS_CONTENT_QUERY });

        return allItems.map(({title}: {title: string}) => ({
            slug: title,
        }));
    } catch (error) {
        console.error("Error fetching items:", error);
        return [];
    }
}
  

export default function Page({ params }: { params: { slug: string} }) {
    return <h1>{params.slug}</h1>
  }