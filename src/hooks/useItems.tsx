"use client"

import React, { useContext, useState } from "react";

interface ItemsProviderProps {
  children: React.ReactNode;
}

interface ItemsContextProps {
  items: Array<
  {
    slug: string,
    title: string,
    price: number,
    thumbnail: {
      responsiveImage: {
        src: string,
        width: number,
        height: number
      }
    },
    thumbnailAlt: string
}> | false;
  setItems (items: Array<
    {
        slug: string,
        title: string,
        price: number,
        thumbnail: {
          responsiveImage: {
            src: string,
            width: number,
            height: number
          }
        },
        thumbnailAlt: string
    }> | false): void;
}

const ItemsContext = React.createContext({} as ItemsContextProps);

export const ItemsProvider = ({ children }: ItemsProviderProps) => {
  const [items, setItems] = useState<Array<
  {
    slug: string,
    title: string,
    price: number,
    thumbnail: {
      responsiveImage: {
        src: string,
        width: number,
        height: number
      }
    },
    thumbnailAlt: string
}> | false>(false);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => {
  const itemsContext = useContext(ItemsContext);

  return itemsContext;
};