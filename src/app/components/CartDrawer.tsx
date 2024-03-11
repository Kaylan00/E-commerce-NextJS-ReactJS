import React from 'react';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/store';
import Image from 'next/image';
import CheckoutButton from './CheckoutButton';

export default function CartDrawer() {
  const { cart, toggleCart, updateProductQuantity, addProduct, removeProduct, onCheckout } = useCartStore();

  const totalPrice = cart.reduce((total, item) => {
    const itemPrice = item.price ?? 0;
    const itemQuantity = item.quantity ?? 0;
    return total + itemPrice * itemQuantity;
  }, 0);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateProductQuantity(productId, newQuantity);
  };

  const useStore = useCartStore()


  return (
    <div
      onClick={toggleCart}
      className='fixed w-full h-screen bg-white/75 left-0 top-0 z-50 flex justify-center items-center overflow-hidden'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='absolute bg-gray-100 right-0 top-0 w-2/3 max-w-lg h-full p-8 overflow-y-auto'
      >
        <button
          onClick={toggleCart}
          className='font-bold text-sm text-customGreen hover:bg-customGreen hover:text-white hover:border-customDarkGreen py-2 px-4 border border-customGreen rounded-md mb-4'
        >
          Voltar para loja
        </button>
        <div className='border-t border-gray-400 my-4'></div>
        {cart.map((item) => (
          <div key={item.id} className='flex gap-4 py-4'>
            <div className="relative w-24 h-24">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h2 className='w-42 truncate'>{item.name}</h2>
              <h2>
                Quantidade:{' '}
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className='border border-gray-400 rounded-md p-1'
                />
              </h2>
              <p className='text-customGreen text-sm font-bold'>
                {formatPrice(item.price)}
              </p>
              <button
                className='py-1 px-2 border border-customGreen rounded-md mt-2 text-sm mr-1 hover:bg-customGreen hover:text-white hover:border-customDarkGreen'
                onClick={() => addProduct(item)}
              >
                Adicionar
              </button>
              <button
                onClick={() => removeProduct(item)}
                className='py-1 px-2 border border-customGreen rounded-md mt-2 text-sm hover:bg-customGreen hover:text-white hover:border-customDarkGreen'>
                Remover
              </button>
            </div>
          </div>
        ))}
        <CheckoutButton totalPrice={totalPrice} />
      </div>
    </div>
  );
}
