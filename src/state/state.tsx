import { create } from 'zustand'
import { ItemType } from '@/types';

interface StoreState {
    shopItems: Array<ItemType> | false;
}

interface StoreActions {
    setShopItems: (items: Array<ItemType> | false) => void;
}

interface Store extends StoreState, StoreActions {}

const useStore = create<Store>((set) => ({
    shopItems: false,
    setShopItems: (items) => set((state: StoreState) => ({ shopItems: items})),
}))

export default useStore