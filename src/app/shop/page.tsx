import { performRequest } from '../../lib/datocms';

const PAGE_CONTENT_QUERY = `
  query Shop {
    allItems {
      id
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
            {allItems.map(({ id, title}: {title: string, id: string}) => (
                    <h2 key={id}>{title}</h2>
                )
            )}
            </section>
        </main>
    )
}
