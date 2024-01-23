import { performRequest } from '../../lib/datocms';
import NavLink from '@/components/navlink';

const PAGE_CONTENT_QUERY = `
  query Shop {
    allItems {
      id
      slug
      title
      _status
      _firstPublishedAt
    }
  
    _allItemsMeta {
      count
    }
  }`;

export default async function Shop() {
    const { data: { allItems } } = await performRequest({ query: PAGE_CONTENT_QUERY });
    return (
        <main>
           <section>
            <h1>Shop</h1>
            {allItems.map(({ id, slug, title}: { id: string, slug: string, title: string}) => (
                    <NavLink key={id} href={`/items/${slug}`}>{title}</NavLink>
                )
            )}
            </section>
        </main>
    )
}
