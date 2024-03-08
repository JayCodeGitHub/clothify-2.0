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

export const ITEM_CONTENT_QUERY = (slug: string) =>  `
    query Shop {
        allItems(filter: {slug: {eq: "${slug}"}}) {
          id
          title
  				description
  				price
  				productType
  				sizes
  				thumbnailAlt
          thumbnail {
            responsiveImage(imgixParams: {w: 800, h: 1200}) {
              src
              width
              height
            }
          }
  				gallery {
            id
         		responsiveImage(imgixParams: {w: 800, h: 1200}) {
              	src
              	width
              	height
            }
      		}
      }
    }`;

export const ABOUT_QUERY = () =>  `
    query Shop {
      about {
        title,
         description
     }
    }
`;