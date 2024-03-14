import Image from 'next/image'
import Button from './button'
import NavLink from './navlink'

export default function Hero() {
  return (
    <section>
    <Image
      src="/images/hero.jpg"
      width="3500"
      height="2333"
      alt="Hero Image"
    />
    <header>
      <h1>
        Unleash Innovation in Every Byte.
      </h1>
      <h2>
        Explore a World of Cutting-Edge Technology.
      </h2>
      <NavLink
        href="/shop"
      >
        <Button>Our Offer</Button>
      </NavLink>
    </header>
  </section>
  )
}