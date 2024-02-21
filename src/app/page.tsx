import { ProductType } from '@/types/ProductTypes';
import Product from './components/Product';
import Stripe from 'stripe';

async function getProducts(): Promise<ProductType[]> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16'
  });  

  const products = await stripe.products.list();
  const formattedProducts = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({
        product: product.id,
      });
      return {
        id: product.id,
        price: prices.data[0].unit_amount,
        name: product.name,
        image: product.images[0],
        description: product.description,
        currency: prices.data[0].currency,
      };
    })
  );
  return formattedProducts;
}

export default async function Home() {
  const product = await getProducts();

  return (
    <div className='max-w-7xl mx-auto pt-8 px-8 xl:px-0 flex flex-wrap'>
      {product.map((product: ProductType) => (
        <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}
