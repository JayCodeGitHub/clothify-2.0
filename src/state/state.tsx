import { create } from 'zustand'
import { ItemType, CartItemType } from '@/types';

interface StoreState {
    shopItems: Array<ItemType> | false;
    alert: string | false;
    token: string | false;
    cart: Array<CartItemType>;
}

interface StoreActions {
    setShopItems: (items: Array<ItemType> | false) => void;
    setAlert: (message: string | false) => void;
    setToken: (token: string | false) => void;
    setCart: (cart: Array<CartItemType>) => void;
}

interface Store extends StoreState, StoreActions {}

const useStore = create<Store>((set) => ({
    shopItems: false,
    alert: false,
    token: false,
    cart: [],
    setShopItems: (items) => set(() => ({ shopItems: items})),
    setAlert: (message) => set(() => ({ alert: message })),
    setToken: (token) => set(() => ({ token: token })),
    setCart: (cart) => set(() => ({ cart: cart }))
}))

export default useStore