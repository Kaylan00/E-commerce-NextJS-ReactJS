import { ProductType } from '../types/ProductTypes';
import ProductImage from './ProductImage';

type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  return (
    <div className="flex flex-col shadow-lg bg-white rounded-lg overflow-hidden max-w-md">
      <div className="relative h-52 ">
        <ProductImage product={product} fill />
      </div>
      <div className="p-4 w-full">
        <h2 className="text-lg font-semibold mb-2 truncate text-customDarkBlue">{product.title}</h2>
        <p className='text-sm text-customOliveGreen'>Description:</p>
        <details>
          <summary className="text-customDarkBlue text-sm truncate">{product.description}</summary>
          <p className="text-customDarkBlue text-sm">{product.description}</p>
        </details>
        <div className="flex flex-col mt-5">
          <p className="text-customOliveGreen font-semibold text-lg">${product.price}</p> 
          <button className="bg-customDarkGray text-customLightGreen px-1 py-2 rounded-lg hover:bg-customDarkBlue transition duration-300">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}