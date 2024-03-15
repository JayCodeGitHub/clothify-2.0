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
          className='w-full'
          initial={{ scale: 1.2}}
          animate={{ scale: 1}}
          transition={{ duration: 0.5}}
        />
      </div>      
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='z-10 absolute top-1/2 -translate-y-1/2 left-80 max-w-xl flex flex-col gap-4'
    >
      <h1 className='text-5xl font-bold'>
        Unleash Innovation in Every Byte.
      </h1>
      <h2 className='text-3xl font-semibold'>
        Explore a World of Cutting-Edge Technology.
      </h2>
      <div className='w-32 mt-8'>
        <NavLink
          href="/shop"
          >
          <Button>Our Offer</Button>
        </NavLink>
      </div>
    </motion.header>
  </section>
  )
}