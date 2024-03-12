import { create } from 'zustand'
import { ItemType } from '@/types';

interface StoreState {
    shopItems: Array<ItemType> | false;
    alert: string | false;
}

interface StoreActions {
    setShopItems: (items: Array<ItemType> | false) => void;
    setAlert: (message: string | false) => void;
}

interface Store extends StoreState, StoreActions {}

const useStore = create<Store>((set) => ({
    shopItems: false,
    alert: false,
    setShopItems: (items) => set(() => ({ shopItems: items})),
    setAlert: (message) => set(() => ({ alert: message })),
}))

export default useStore