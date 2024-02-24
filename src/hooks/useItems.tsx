"use client"

import React, { useEffect, useContext, useState } from "react";
import { ItemType } from "@/types";

interface ItemsProviderProps {
  children: React.ReactNode;
  initialItems: Array<Item> | false;
}

type Item = ItemType;

interface ItemsContextProps {
    shopItems: Array<Item> | false;
    setShopItems (items: Array<Item> | false): void;
}

const ItemsContext = React.createContext({} as ItemsContextProps);

export const ItemsProvider = ({ children, initialItems }: ItemsProviderProps) => {
  const [shopItems, setShopItems] = useState<Array<Item> | false>(false);

  useEffect(() => {
    setShopItems(initialItems);
  }, [initialItems])

  return (
    <ItemsContext.Provider value={{ shopItems, setShopItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => {
  const itemsContext = useContext(ItemsContext);

  return itemsContext;
};