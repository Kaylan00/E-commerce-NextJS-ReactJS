import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ProductType } from '@/types/ProductTypes';

type CartState = {
  cart: ProductType[];
  addProduct: (product: ProductType, quantity?: number) => void; // Adicionando o parâmetro de quantidade opcional
  removeProduct: (product: ProductType) => void;
  updateProductQuantity: (productId: string, newQuantity: number) => void; // Adicionando a função updateProductQuantity
  isOpen: boolean;
  toggleCart: () => void;
  clearCart: () => void;
  onCheckout: string;
  setCheckout: (checkout: string) => void;
  paymentIntent: string;
  setPaymentIntent: (paymentIntent: string) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addProduct: (item, quantity = 1) => 
        set((state) => {
          const updatedCart: ProductType[] = state.cart ? [...state.cart] : [];

          const productIndex = updatedCart.findIndex((p) => p.id === item.id);

          if (productIndex !== -1) {
            updatedCart[productIndex] = {
              ...updatedCart[productIndex],
              quantity: (updatedCart[productIndex].quantity || 0) + quantity 
            };
          } else {
            updatedCart.push({ ...item, quantity: quantity }); 
          }

          return { cart: updatedCart };
        }),
        removeProduct: (item) =>
        set((state) => {
          const updatedCart = state.cart.map((p) => {
            if (p.id === item.id && p.quantity! > 1) {
              return { ...p, quantity: p.quantity! - 1 };
            }
            return p;
          });
          const filteredCart = updatedCart.filter((p) => p.id !== item.id);
          return { cart: filteredCart };
        }),
      
      updateProductQuantity: (productId: string, newQuantity: number) => // Implementando a função updateProductQuantity
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          )
        })),
      isOpen: false,
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      onCheckout: 'cart',
      setCheckout: (checkout) => set(() => ({ onCheckout: checkout })),
      paymentIntent: '',
      setPaymentIntent: (paymentIntent) => set(() => ({ paymentIntent })),
      clearCart: () => set(() => ({ cart: [] })),
    }),
    { name: 'cart-storage' }
  )
);
