"use client"

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth"
import { deleteCookie, getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useItems } from "@/hooks/useItems";
import axios from "axios";
import Button from "@/components/button";
import PurchaseHistoryItem from "@/components/purchaseHistoryItem";


type purchaseHistoryItemType = {
  id: number,
  userId: number,
  title: string;
  price: number,
  quantity: number,
  thumbnail: {
    responsiveImage: {
      src: string,
      width: number,
      height: number
    }
  },
  thumbnailAlt: string;
}

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

    purchaseHistory.forEach((item: { id: number, userId: number, title: string, price: number, quantity: number }, index: number) => {
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
       <section className='xl:w-2/5 w-full h-full '>
          <h1 className="md:text-xl text-lg"> Profile</h1>           
          <div>
            {profile ? (
              <>
              <p className="p-4 md:text-lg text-base">Email: {profile.email}</p>
              </>
            ) : (
              <p>Loading ...</p>
            )}
          </div>
        </section>
        <section className='xl:w-2/5 w-full h-full '>
          <h3 className="md:text-xl text-lg">Purchase History</h3>
          {profile ? (
              <div className="flex flex-col gap-4 p-4">
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