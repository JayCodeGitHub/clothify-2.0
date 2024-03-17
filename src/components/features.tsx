import { FeaturesItems } from "@/items/FeaturesItems"

export default function Features() {
  return (
    <section className="backdrop-blur-md tracking-wide bg-primary/5">
      <div className="2xl:px-52 xl:px-32 px-16 py-10 md:grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 md:gap-12 md:space-y-0 space-y-24">
        {FeaturesItems.map(({icon, title, description}, i) => (
          <div key={i} className="flex flex-col items-start gap-2">
            <div  className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 text-primary">
              {icon}
            </div>
            <h3 className="mb-2 text-xl font-bold text-light">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}