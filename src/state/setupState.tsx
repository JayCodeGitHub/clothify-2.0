"use client"

import { useEffect } from "react";
import { useStore } from "@/state";
import { ItemType } from '@/types';

export default function SetupState({
    allItems
  }: {
    allItems: Array<ItemType>
  }) {
    const setShopItems = useStore((state) => state.setShopItems);
    useEffect(() => {
        setShopItems(allItems);
    }, [allItems])
    return(<></>)
}