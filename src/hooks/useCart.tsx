"use client"

import { useEffect } from "react";
import { getCookie, deleteCookie, setCookie } from "cookies-next";
import { CartItemType } from "@/types"
import { useStore } from "@/state";

export const useCart = () => {
  const cart = useStore((state) => state.cart);
  const setCart = useStore((state) => state.setCart);
  const shopItems = useStore((state) => state.shopItems);

  useEffect(() => {
    const cookieCart = getCookie("cart");

    if (cookieCart) {
      let restoreCart: Array<any> = [];
      JSON.parse(cookieCart).map((item: CartItemType) => {
        if(shopItems) {
         const shopItem = shopItems.find(shopItem => shopItem.title === item.title);
         const newItem = { ...shopItem, size: item.size, quantity: item.quantity };
         restoreCart.push(newItem);
        }
      })
      setCart(restoreCart)    
  
    } else {
      setCookie("cart", JSON.stringify(cart))
    }
  }, [shopItems]);

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
    const newCookie = newCart.map(({title, size, quantity}) => { return {title, size, quantity} })
    setCookie("cart", JSON.stringify(newCookie));
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
    const newCookie = newCart.map(({title, size, quantity}) => { return {title, size, quantity} })
    setCookie("cart", JSON.stringify(newCookie));
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

      const newCookie = newCart().map(({title, size, quantity}) => { return {title, size, quantity} })
      setCookie("cart", JSON.stringify(newCookie));
    } else {
      quantityIncrementation(newItem.id, quantity, selectedSize);
    }
    
  }

  function removeItem(id: string, size: string) {
    const newCart = cart.filter((item) => !(item.id === id && item.size === size));
    setCart(newCart);
    const newCookie = newCart.map(({title, size, quantity}) => { return {title, size, quantity} })
    setCookie("cart", JSON.stringify(newCookie))
  }

  function clearCart() {
    setCart([]);
    deleteCookie("cart");
  }

  return { 
    cart,
    quantityIncrementation,
    quantityDecrementation,
    addItem,
    removeItem,
    clearCart,
  }
};