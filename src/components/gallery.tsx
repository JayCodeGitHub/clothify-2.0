import Image from 'next/image'


export default function Gallery({gallery, title}: {gallery: any[], title: string}) {
    return (
        <>
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
        </>
    )
}