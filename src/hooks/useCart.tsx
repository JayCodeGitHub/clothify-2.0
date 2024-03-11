"use client"

import React, { useContext, useState, useEffect } from "react";
import { getCookie, deleteCookie, setCookie } from "cookies-next";
import { CartItemType } from "@/types"

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContextProps {
  cart: CartItemType[];
  quantityIncrementation: (id: string, quantity: number, size: string) => void;
  quantityDecrementation: (id: string, quantity: number, size: string) => void;
  addItem: (
    newItem: CartItemType,
    quantity: number,
    selectedSize: string
  ) => void;
  removeItem: (id: string, size: string) => void;
  clearCart: () => void;
}

const CartContext = React.createContext<CartContextProps>(
  {} as CartContextProps
);

const defaultState: any[] | (() => any[]) = [];

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState(defaultState);

  useEffect(() => {
    const cookieCart = getCookie("cart");
      
    if (cookieCart) {
      setCart(JSON.parse(cookieCart));
    } else {
      setCookie("cart", JSON.stringify(cart))
    }
  }, []);

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
    setCookie("cart", JSON.stringify(newCart))
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
    setCookie("cart", JSON.stringify(newCart))
    if (remove) {
      removeItem(id, size);
    }
  }

  function addItem(
    newItem: CartItemType,
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
      setCookie("cart", JSON.stringify(newCart()))
    } else {
      quantityIncrementation(newItem.id, quantity, selectedSize);
    }
    
  }

  function removeItem(id: string, size: string) {
    const newCart = cart.filter((item) => !(item.id === id && item.size === size));
    setCart(newCart);
    setCookie("cart", JSON.stringify(newCart))
  }

  function clearCart() {
    setCart(defaultState);
    deleteCookie("cart");
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        quantityIncrementation,
        quantityDecrementation,
        addItem,
        removeItem,
        clearCart,
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