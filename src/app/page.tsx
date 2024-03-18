import Hero from '@/components/hero';
import Features from '@/components/features';
import ProductExamples from '@/components/productExamples';
import { PAGE_CONTENT_QUERY } from '@/lib/queries';
import { performRequest } from '../lib/datocms';

export default async function Home() {
  const { data: { allItems } } = await performRequest({ query: PAGE_CONTENT_QUERY });
  const items = allItems.slice(0, 3);
  return (
    <main>
      <Hero />
      <Features />
      <ProductExamples productExamples={items}/>
    </main>
  )
}