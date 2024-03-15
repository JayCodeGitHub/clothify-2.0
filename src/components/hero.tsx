"use client";

import Image from 'next/image'
import Button from './button'
import NavLink from './navlink'
import { motion } from 'framer-motion'

const MotionImage = motion(Image)

export default function Hero() {
  return (
    <section className='px-40 py-10 w-full h-restDesktop relative'>
      <div className='w-full h-full z-0 overflow-hidden rounded-3xl'>
        <MotionImage
          src="/images/hero.jpg"
          width="3500"
          height="2333"
          alt="Hero Image"
          className=' object-cover w-full h-full z-0 rounded-3xl'
          initial={{ scale: 1.1}}
          animate={{ scale: 1}}
        />
      </div>      
    <header className='z-10 absolute bg-red-500 top-1/2'>
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