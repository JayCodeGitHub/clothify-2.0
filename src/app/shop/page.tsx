import { performRequest } from '../../lib/datocms';
import NavLink from '@/components/navlink';

const PAGE_CONTENT_QUERY = `
  query Shop {
    allItems {
      id
      slug
      title
    }
  }`;

export default async function Shop() {
    const { data: { allItems } } = await performRequest({ query: PAGE_CONTENT_QUERY });
    return (
        <main>
           <section>
            <h1>Shop</h1>
            <ul className='flex flex-col'>
            {allItems.map(({ id, slug, title}: { id: string, slug: string, title: string}) => (
                <li key={id}>
                  <NavLink href={`/items/${slug}`}>{title}</NavLink>
                </li>
              )
            )}
              </ul>
            </section>
        </main>
    )
}
