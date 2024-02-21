import { ProductType } from '../../types/ProductTypes';

import ProductImage from './ProductImage';

import { formatPrice } from '../../lib/utils';

import Link from 'next/link';

type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="flex flex-col shadow-lg bg-slate-50 rounded-lg overflow-hidden max-w-md">
        <div className="relative h-52 ">
          <ProductImage product={product} fill />
        </div>
        <div className="p-4 w-full">
          <h2 className="text-lg font-semibold mb-2 truncate text-customDarkBlue">{product.name}</h2>
          <div className="flex flex-col mt-5">
            <p className="text-customPurple font-semibold text-lg">{formatPrice(product.price)}</p>
            <button className="bg-customDarkBlue2 text-customLightGreen px-1 py-2 rounded-lg hover:bg-slate-700 transition duration-300">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </Link>

  );
}