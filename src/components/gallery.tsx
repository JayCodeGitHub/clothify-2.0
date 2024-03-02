"use client";

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useMeasure from 'react-use-measure'

const MotionImage = motion(Image);

export default function Gallery({gallery, title}: {gallery: any[], title: string}) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [tuple, setTuple] = useState([null, selectedImage]);
    const [ref, {width}] = useMeasure()

    if (tuple[1] !== selectedImage) {
        setTuple([tuple[1], selectedImage]);
    }

    let prev = tuple[0];
    let direction = prev !== null && selectedImage > prev ? 1 : -1;

    return (
        <span className='w-full'>
            <span ref={ref} className='w-full aspect-square block relative rounded-lg overflow-hidden'>
                <AnimatePresence custom={{direction, width}}>
                <MotionImage
                    key={gallery[selectedImage].id} 
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    custom={{direction, width}}
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
                {selectedImage - 1 < 0 ? (<span className='w-1/6'/>) : null}
                {gallery.map(({id, responsiveImage}, i) => (
                        (i >= selectedImage - 1 && i <= selectedImage + 2) ? (
                            <MotionImage
                                key={id}
                                onClick={() => setSelectedImage(i)}
                                src={responsiveImage.src}
                                width={responsiveImage.width}
                                height={responsiveImage.height}
                                alt={`Image of product: ${title}`}
                                className={`h-auto w-1/6 rounded-lg object-cover cursor-pointer ${ i === selectedImage ? "border-2 border-primary" : "border-0"}`}
                            />
                        ) : null)
                )}
                {selectedImage + 1 >= gallery.length ? (<span className='w-1/6'/>) : null}
                {selectedImage + 2 >= gallery.length ? (<span className='w-1/6'/>) : null}
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
    enter: ({direction, width}: {direction: number, width: number}) => ({ x: direction * width}),
    center: { x: 0},
    exit: ({direction, width}: {direction: number, width: number}) => ({ x: direction * -width})
}