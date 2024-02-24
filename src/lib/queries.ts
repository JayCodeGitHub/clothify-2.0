export const PAGE_CONTENT_QUERY = `
query Shop {
  allItems {
    id
    slug
    title
    price
    sizes
    thumbnailAlt
    thumbnail {
      responsiveImage(imgixParams: {w: 800, h: 1200}) {
        src
        width
        height
      }
    }
  }
}`;

export const ITEMS_CONTENT_QUERY = `
query Shop {
  allItems {
      slug
  }
}`;