import { performRequest } from '../../lib/datocms';
import { ABOUT_QUERY } from '../../lib/queries';

export default async function About() {
    const query =  ABOUT_QUERY();
  
    const { data: { about } } = await performRequest({ query: query});
     
    const { title, description } = about;
    return (
        <main className="w-full min-h-restPhone md:h-restDesktop">
            <section className="mx-auto pt-16 2xl:px-56 xl:px-44 px-4">
                <h1 className="pb-12 text-3xl">
                    {title}
                </h1>
                <p className="text-md md:text-xl">
                    {description}
                </p>
            </section>
      </main>
    )
}
  