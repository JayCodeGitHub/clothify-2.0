import { AboutItems } from "../../items/aboutItems";

export default function About() {
    const { title, description } = AboutItems;
    return (
        <main className="w-full h-rest">
            <section className="mx-auto mt-16 md:px-0 md:w-1/2">
                <h1 className="mb-12 text-3xl">
                    {title}
                </h1>
                <p className="text-md md:text-xl">
                    {description}
                </p>
            </section>
      </main>
    )
}
  