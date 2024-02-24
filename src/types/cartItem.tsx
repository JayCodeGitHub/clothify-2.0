export interface CartItemType {
    id: string;
    title: string;
    slug: string;
    thumbnail: {
      responsiveImage: {
        src: string,
        width: number,
        height: number
      }
    }
    thumbnailAlt: string;
    price: number;
    size: string;
    description: string;
    quantity: number;
}