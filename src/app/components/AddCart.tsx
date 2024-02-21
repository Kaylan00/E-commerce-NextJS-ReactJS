'use client';

import { useCartStore } from '@/store';
import { ProductType } from '@/types/ProductTypes';

export default function Product({ product }: { product: ProductType }) {
  const { addProduct } = useCartStore();

  return (
    <button
      onClick={() => addProduct(product)}
      className='rounded-md bg-customDarkBlue2 text-white px-3.5 py-2.5 text-sm text-center hover:bg-customPurple w-full'
    >
      Adicionar ao Carrinho
    </button>
  );
}
