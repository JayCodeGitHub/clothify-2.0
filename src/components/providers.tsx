import { CartProvider } from '@/hooks'

export default function Providers({
    children
  }: {
    children: React.ReactNode
  }) {
  return (
      <CartProvider>
        {children}
      </CartProvider>
  );
}