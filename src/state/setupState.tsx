"use client"

import { useEffect } from "react";
import { useStore } from "@/state";
import { ItemType } from '@/types';
import { getCookie, deleteCookie } from "cookies-next";
import axios from "axios";

export default function SetupState({
    allItems
  }: {
    allItems: Array<ItemType>
  }) {
    const setShopItems = useStore((state) => state.setShopItems);
    const setToken = useStore((state) => state.setToken);

    const checkToken = async (token: string) => {
      try {
        const { data } = await axios.post('/api/auth/me', { token });
        setToken(data);
      } catch (error) {
        setToken((error as any).response.data);
        deleteCookie("token");
      }
    }

    useEffect(() => {
        setShopItems(allItems);

        const cookieToken = getCookie("token");
            
        if (cookieToken) {
          checkToken(cookieToken);
        }
    }, [allItems])
    return(<></>)
}