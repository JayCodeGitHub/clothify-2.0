import { FeaturesItems } from "@/items/FeaturesItems"

export default function Features() {
  return (
    <section>
      <div>
        {FeaturesItems.map((item, index) => (
          <div key={index}>
            <div>
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}