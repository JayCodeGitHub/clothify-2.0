import { AuthProvider, CartProvider, AlertProvider } from '@/hooks'

export default function Providers({
    children
  }: {
    children: React.ReactNode
  }) {
  return (
      <AuthProvider>
              <CartProvider>
                  <AlertProvider>
                      {children}
                  </AlertProvider>
              </CartProvider>
      </AuthProvider>
  );
}