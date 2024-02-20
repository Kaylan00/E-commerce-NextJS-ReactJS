import { ProductType } from './types/ProductTypes';
import Product from './components/Product';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return await res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className='max-w-7xl mx-auto pt-8 px-8 xl:px-0 flex flex-wrap'>
      {products.map((product: ProductType) => (
        <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}
