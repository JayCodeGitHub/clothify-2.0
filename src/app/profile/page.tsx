"use client"

import { useEffect, useState } from "react";
import { useAuth, useItems } from "@/hooks"
import { deleteCookie, getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import axios from "axios";
import Button from "@/components/button";
import PurchaseHistoryItem from "@/components/purchaseHistoryItem";
import { HistoryItemType } from "@/types";

type purchaseHistoryItemType = HistoryItemType

export default function Profile() {  
  const { setToken } = useAuth();
  const { shopItems } = useItems();
  const router = useRouter();
  const [profile, setProfile] = useState<{email: string, purchaseHistory: Array<purchaseHistoryItemType>} | false>(false);

  const getProfile = async () => {
    const token = getCookie('token')
    const { data } = await axios.get('/api/auth/me', { headers: { Authorization: token } });
    if (data === false) {
      deleteCookie('token');
    }
    const { email, purchaseHistory } = data;

    let newPurchaseHistory: Array<purchaseHistoryItemType> = [];

    purchaseHistory.forEach((item: HistoryItemType) => {
      if(shopItems) {
        let newItem = {
          ... item, 
          thumbnail: shopItems.find((shopItem) => shopItem.title === item.title)!.thumbnail,
          thumbnailAlt: shopItems.find((shopItem) => shopItem.title === item.title)!.thumbnailAlt,
        }
        newPurchaseHistory.push(newItem)
      }
    })
   
    setProfile({ email, purchaseHistory: newPurchaseHistory });
  }

  useEffect(() => { 
    if (!getCookie('token')) {
      router.push('/auth')
    } else {
      if (shopItems) {
        getProfile();
      }
    }
  }
  , [router, shopItems])

  const logout = () => {
    setToken(false);
    deleteCookie('token');
    router.push('/auth')
  }
  
  return (
    <main className='flex flex-col justify-center items-center w-full min-h-rest 2xl:px-56 xl:px-44 px-4 md:items-start gap-4 py-8'>
       <section className='xl:w-2/5 md:w-3/5 w-full h-full flex flex-col gap-4'>
          <h1 className="md:text-xl text-lg"> Profile</h1>           
          <div>
            {profile ? (
              <>
              <p className="p-2 md:p-4 md:text-lg text-base">Email: {profile.email}</p>
              </>
            ) : (
              <p>Loading ...</p>
            )}
          </div>
        </section>
        <section className='xl:w-2/5 md:w-3/5 w-full h-full flex flex-col gap-4'>
          <h3 className="md:text-xl text-lg">Purchase History</h3>
          {profile ? (
              <div className="flex flex-col gap-4 md:p-4 p-2">
              {profile.purchaseHistory.map(({id, title, price, quantity, thumbnail, thumbnailAlt}, index) => (
                <PurchaseHistoryItem key={id} title={title} price={price} quantity={quantity} thumbnail={thumbnail} thumbnailAlt={thumbnailAlt}/>
              ))}
              </div>
            ) : (
              <p>Loading ...</p>
            )}   
        </section>
        <span className=" w-36">
          <Button onClick={logout}>Logout</Button>
        </span>
    </main>
  )
}