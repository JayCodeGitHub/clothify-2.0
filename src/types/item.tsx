export interface ItemType {
    id: string,
    slug: string,
    title: string,
    price: number,
    sizes: Array<string>,
    thumbnail: {
      responsiveImage: {
        src: string,
        width: number,
        height: number
      }
    }, 
    thumbnailAlt: string
}