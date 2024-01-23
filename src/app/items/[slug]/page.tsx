import { performRequest } from '../../../lib/datocms';

const ITEMS_CONTENT_QUERY = `
  query Shop {
    allItems {
        title
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
        allItems(filter: {slug: {eq: ${params.slug}}}) {
          title
      }
    }`;

    const { data: { allItems } } = await performRequest({ query: ITEM_CONTENT_QUERY });

    const items = allItems[0]

    const { title } = items

    return (
        <div>
            <h1>{title}</h1>
            <h2>{`slug: ${params.slug}`}</h2>
        </div>
    )
  }