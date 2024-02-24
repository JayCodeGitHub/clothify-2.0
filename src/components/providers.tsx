import { AuthProvider, CartProvider, ItemsProvider, AlertProvider } from '@/hooks'
import { ItemType } from '@/types';

export default function Providers({
    children, allItems
  }: {
    children: React.ReactNode
    allItems: Array<ItemType>
  }) {
  return (
    <AuthProvider>
        <ItemsProvider initialItems={allItems}>
            <CartProvider>
                <AlertProvider>
                    {children}
                </AlertProvider>
            </CartProvider>
        </ItemsProvider>
    </AuthProvider>
  );
}