import { AuthProvider, CartProvider } from '@/hooks'

export default function Providers({
    children
  }: {
    children: React.ReactNode
  }) {
  return (
    <AuthProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </AuthProvider>
  );
}