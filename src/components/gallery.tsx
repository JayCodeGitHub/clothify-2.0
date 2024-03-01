"use client";

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MotionImage = motion(Image);



export default function Gallery({gallery, title}: {gallery: any[], title: string}) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [tuple, setTuple] = useState([null, selectedImage]);

    if (tuple[1] !== selectedImage) {
        setTuple([tuple[1], selectedImage]);
    }

    let prev = tuple[0];
    let direction = prev !== null && selectedImage > prev ? "right" : "left";

    const previousImage = () => {
        if (selectedImage !== 0) {
            return selectedImage - 1;
        } else {
            return gallery.length - 1;
        }
    };

    const nextImage = () => {
        if (selectedImage !== gallery.length - 1) {
            return selectedImage + 1;
        } else {
            return 0;
        }
    }

    const nextImage2 = () => {
       if (selectedImage + 2 < gallery.length - 1) {
            return selectedImage + 2;
       } else if (selectedImage + 2 === gallery.length) {
            return 0;
       } else {
            return 1;
       }
    }

    return (
        <span className='w-full'>
            <span className='w-full aspect-square block relative overflow-hidden'>
                <AnimatePresence custom={direction}>
                <MotionImage
                    key={gallery[selectedImage].id} 
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    custom={direction}
                    src={gallery[selectedImage].responsiveImage.src}
                    width={gallery[selectedImage].responsiveImage.width}
                    height={gallery[selectedImage].responsiveImage.height}
                    alt={`Image of product: ${title}`}
                    className='h-full w-auto rounded-lg m-auto absolute'
                />
                </AnimatePresence>
            </span>
        <div className=' h-12 md:h-24 w-full mt-4 flex justify-between'>
            <button onClick={() => selectedImage > 0 ? setSelectedImage(selectedImage - 1) : null} className='h-full w-1/12 flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <Image 
                src={gallery[previousImage()].responsiveImage.src}
                width={gallery[previousImage()].responsiveImage.width}
                height={gallery[previousImage()].responsiveImage.height}
                alt={`Image of product: ${title}`}
                className='h-auto w-1/6 rounded-lg object-cover'
                />
                <Image 
                src={gallery[selectedImage].responsiveImage.src}
                width={gallery[selectedImage].responsiveImage.width}
                height={gallery[selectedImage].responsiveImage.height}
                alt={`Image of product: ${title}`}
                className='h-auto w-1/6 rounded-lg object-cover'
                />
                 <Image 
                src={gallery[nextImage()].responsiveImage.src}
                width={gallery[nextImage()].responsiveImage.width}
                height={gallery[nextImage()].responsiveImage.height}
                alt={`Image of product: ${title}`}
                className='h-auto w-1/6 rounded-lg object-cover'
                />
                <Image 
                src={gallery[nextImage2()].responsiveImage.src}
                width={gallery[nextImage2()].responsiveImage.width}
                height={gallery[nextImage2()].responsiveImage.height}
                alt={`Image of product: ${title}`}
                className='h-auto w-1/6 rounded-lg object-cover'
                />
            <button onClick={() => selectedImage < gallery.length -1 ? setSelectedImage(selectedImage + 1) : null} className='h-full w-1/12 flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
        </div>
        {gallery.map(({id, responsiveImage}:{
            id: string,
            responsiveImage: {
                src: string,
                width: number,
                height: number
            }
        }) => (    
            <Image 
                key={id} 
                src={responsiveImage.src}
                width={responsiveImage.width}
                height={responsiveImage.height}
                alt={`Image of product: ${title}`}
                className='w-52 hidden'
            />
        )
        )}
        </span>
    )
}


const variants = {
    enter: (direction: string) => ({ x: direction === 'right' ? 600 : -600}),
    center: { x: 0},
    exit: (direction: string) => ({ x: direction === 'right' ? -600 : 600})
}