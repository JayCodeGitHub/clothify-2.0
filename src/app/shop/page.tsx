import { performRequest } from '../../lib/datocms';
import Items from '@/components/items';
import { PAGE_CONTENT_QUERY } from '@/lib/queries';

export default async function Shop() {
    const { data: { allItems } } = await performRequest({ query: PAGE_CONTENT_QUERY });
    return (
        <main className='min-h-[91vh]'>
          <Items allItems={allItems} />
        </main>
    )
}
