"use client"

import React, { useContext, useState } from "react";

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContextProps {
  cart: {
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
  }[];
  quantityIncrementation: (id: string, quantity: number) => void;
  quantityDecrementation: (id: string, quantity: number) => void;
  addItem: (
    newItem: {
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
    },
    quantity: number
  ) => void;
  removeItem: (id: string) => void;
}

const CartContext = React.createContext<CartContextProps>(
  {} as CartContextProps
);

const defaultState: any[] | (() => any[]) = [];

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState(defaultState);

  function quantityIncrementation(id: string, quantity: number) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + quantity,
        };
      }
      return item;
    });
    setCart(newCart);
  }

  function quantityDecrementation(id: string, quantity: number) {
    let remove = false;
    const newCart = cart.map((item) => {
      if (item.id === id) {
        if (item.quantity === 1) {
          remove = true;
        } else {
          return {
            ...item,
            quantity: item.quantity - quantity,
          };
        }
      }
      return item;
    });
    setCart(newCart);
    if (remove) {
      removeItem(id);
    }
  }

  function addItem(
    newItem: {
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
    },
    quantity: number
  ) {
    let isNew = true;
    cart.map((item) => {
      if (item.id === newItem.id) {
        isNew = false;
      }
    });
    if (isNew) {
      cart.push({ ...newItem, quantity: quantity });
    } else {
      quantityIncrementation(newItem.id, quantity);
    }
    
  }

  function removeItem(id: string) {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        quantityIncrementation,
        quantityDecrementation,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const cart = useContext(CartContext);

  return cart;
}