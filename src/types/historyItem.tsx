export type HistoryItemType = {
    id: number,
    userId: number,
    title: string;
    price: number,
    quantity: number,
    thumbnail: {
      responsiveImage: {
        src: string,
        width: number,
        height: number
      }
    },
    thumbnailAlt: string;
}