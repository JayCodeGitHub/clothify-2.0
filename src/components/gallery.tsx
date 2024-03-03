"use client";

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useMeasure from 'react-use-measure'
import useKeypress from "react-use-keypress";

const MotionImage = motion(Image);

export default function Gallery({gallery, title}: {gallery: any[], title: string}) {
    const [index, setIndex] = useState(0);
    const [tuple, setTuple] = useState([null, index]);
    const [ref, {width}] = useMeasure();

    const variants = {
        enter: ({direction, width}: {direction: number, width: number}) => ({ x: direction * width}),
        center: { x: 0},
        exit: ({direction, width}: {direction: number, width: number}) => ({ x: direction * -width})
    }

    useKeypress("ArrowRight", () => {
        if (index < gallery.length - 1) {
          setIndex(prevIndex => prevIndex + 1);
        }
      });
    
      useKeypress("ArrowLeft", () => {
        if (index > 0) {
          setIndex(prevIndex => prevIndex - 1);
        }
      });

    if (tuple[1] !== index) {
        setTuple([tuple[1], index]);
    }

    let prev = tuple[0];
    let direction = prev !== null && index > prev ? 1 : -1;

    return (
        <span className='w-full'>
            <span 
                ref={ref}
                className='w-full aspect-square flex relative rounded-lg overflow-hidden justify-center'
            >
                <AnimatePresence custom={{direction, width}}>
                    <MotionImage
                        key={gallery[index].id} 
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        custom={{direction, width}}
                        src={gallery[index].responsiveImage.src}
                        width={gallery[index].responsiveImage.width}
                        height={gallery[index].responsiveImage.height}
                        alt={`Image of product: ${title}`}
                        className='h-full w-auto rounded-lg m-auto absolute'
                    />
                </AnimatePresence>
            </span>
        <div className=' h-12 md:h-24 w-full mt-4 flex justify-between'>
            <button 
                onClick={() => index > 0 ? setIndex(prevIndex => prevIndex - 1) : null}
                className={`h-full w-1/12 flex justify-center items-center transition-all ${
                    index == 0 ? 'cursor-default text-gray-300' : 'cursor-pointer text-black'
                }`}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M15 18l-6-6 6-6"/>
                </svg>
            </button>
                <div className='w-full h-full flex overflow-hidden justify-start'>
                <motion.div 
                    className='w-full h-full flex'
                    style={{ x: (index == 0 ? 115 : 0)}}
                    animate={{ x: -115 * (index - 1)}}
                >
                    {gallery.map(({id, responsiveImage}, i) => (
                        <MotionImage
                            key={id}
                            onClick={() => setIndex(i)}
                            src={responsiveImage.src}
                            width={responsiveImage.width}
                            height={responsiveImage.height}
                            alt={`Image of product: ${title}`}
                            className={`h-auto w-1/5 mx-3 rounded-lg shrink-0 object-cover cursor-pointer border-2 transition-all ${
                                i === index ? "border-primary" : "border-transparent" 
                            }`}
                        />
                    ))}
                </motion.div>
                </div>
            <button 
                onClick={() => index < gallery.length -1 ? setIndex(prevIndex => prevIndex + 1) : null}
                className={`h-full w-1/12 flex justify-center items-center transition-all ${
                    index >= gallery.length - 1 ? 'cursor-default text-gray-300' : 'cursor-pointer text-black'
                }`}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M9 18l6-6-6-6"/>
                </svg>
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