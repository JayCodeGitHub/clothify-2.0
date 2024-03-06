export type OrderItemType = {
    id: number,
    orderId: number,
    title: string;
    price: number,
    quantity: number,
    size: string,
    thumbnail: {
      responsiveImage: {
        src: string,
        width: number,
        height: number
      }
    },
    thumbnailAlt: string;
}