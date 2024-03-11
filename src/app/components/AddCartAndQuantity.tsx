'use client';
import React, { useState } from 'react';
import { useCartStore } from '@/store';
import { ProductType } from '@/types/ProductTypes';

export default function AddCartWithQuantity({ product }: { product: ProductType }) {
  const { addProduct } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addProduct(product);
    }
    setQuantity(1);
  };

  return (
    <div className="flex items-center gap-9 my-4">
      <div className="flex items-center space-x-2">
        <button onClick={decreaseQuantity} className="px-5 py-1.5 bg-customDarkBlue2 text-white rounded-md hover:bg-customPurple">
          -
        </button>
        <span className='border-2 border-solid border-customGreen py-1.5 px-3.5 text-customGreen rounded-md'>{quantity}</span>
        <button onClick={increaseQuantity} className="px-5 py-1.5 bg-customDarkBlue2 text-white rounded-md hover:bg-customPurple">
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart} 
        className="rounded-md bg-customGreen text-white px-3.5 py-3 text-sm text-center hover:bg-customPurple"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
