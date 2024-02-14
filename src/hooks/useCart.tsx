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
  quantityIncrementation: (id: string, quantity: number, size: string) => void;
  quantityDecrementation: (id: string, quantity: number, size: string) => void;
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
    quantity: number,
    selectedSize: string
  ) => void;
  removeItem: (id: string, size: string) => void;
}

const CartContext = React.createContext<CartContextProps>(
  {} as CartContextProps
);

const defaultState: any[] | (() => any[]) = [];

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState(defaultState);

  function quantityIncrementation(id: string, step: number, size: string) {
    const newCart = cart.map((item) => {
      if (item.id === id && item.size === size) {
        return {
          ...item,
          quantity: item.quantity + step,
        };
      }
      return item;
    });
    setCart(newCart);
  }

  function quantityDecrementation(id: string, step: number, size: string) {
    let remove = false;
    const newCart = cart.map((item) => {
      if (item.id === id && item.size === size) {
        if (item.quantity === 1) {
          remove = true;
        } else {
          return {
            ...item,
            quantity: item.quantity - step,
          };
        }
      }
      return item;
    });
    setCart(newCart);
    if (remove) {
      removeItem(id, size);
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
    quantity: number,
    selectedSize: string
  ) {
    let isNew = true;
    cart.map((item) => {
      if (item.id === newItem.id && item.size === selectedSize) {
        isNew = false;
      }
    });
    if (isNew) {
      const newCart = () => {
          const newCartItem = { ...newItem, quantity: quantity, size: selectedSize }
          const newCart = [...cart, newCartItem];

          return newCart;
      };
      
      setCart(newCart());
    } else {
      quantityIncrementation(newItem.id, quantity, selectedSize);
    }
    
  }

  function removeItem(id: string, size: string) {
    setCart(cart.filter((item) => !(item.id === id && item.size === size)));
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