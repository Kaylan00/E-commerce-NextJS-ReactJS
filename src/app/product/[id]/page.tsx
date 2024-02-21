import AddCart from '@/app/components/AddCart';
import ProductImage from '@/app/components/ProductImage';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import Stripe from 'stripe';

type ProductPageProps = {
  params: {
    id: string;
  };
};

interface Product {
  id: string;
  price: number;
  name: string;
  image: string;
  description: string;
  currency: string;
}

async function getProductDetails(stripe: Stripe, product: any): Promise<Product> {
  const price = await stripe.prices.list({
    product: product.id,
  });

  const unitAmount = price.data[0]?.unit_amount ?? 0;

  return {
    id: product.id,
    price: unitAmount,
    name: product.name,
    image: product.images[0],
    description: product.description,
    currency: price.data[0]?.currency ?? 'USD',
  };
}

async function getProduct(id: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16',
  });
  const product = await stripe.products.retrieve(id);
  return getProductDetails(stripe, product);
}

async function getRelatedProducts(): Promise<Product[]> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16',
  });
  const products = await stripe.products.list({ limit: 4 });
  const productList = await Promise.all(
    products.data.map(async (product: any) => getProductDetails(stripe, product))
  );

  return productList;
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);
  const relatedProducts = await getRelatedProducts();

  return (
    <div className="container w-full">
      <div className="bg-customLightGreen w-full">
        <div className="md:flex w-full items-center justify-center gap-32">
          <ProductImage product={product} />

          <div className="md:w-1/2 md:pl-1 w-full">
            <h1 className="text-2xl font-bold mb-2 text-customPurple">{product.name}</h1>
            <h3 className="text-lg text-customGreen font-semibold mb-2">{formatPrice(product.price)}</h3>
            <p className="text-base text-customGreen mb-6">{product.description}</p>
            <div className="flex items-center mb-4">
              <label className="mr-4 text-slate-400">Quantidade:</label>
              <input type="number" className="border border-gray-300 rounded-md p-1 w-16" defaultValue="1" min="1" />
            </div>
            <AddCart product={product} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white rounded-lg shadow-md p-5">
            <h3 className="text-base font-semibold mb-1 text-customPurple">Devoluções</h3>
            <p className="text-xs text-gray-600">Ei! Está pensando em trocar alguma peça? Então deixa a gente te explicar como funciona</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 ">
            <h3 className="text-base font-semibold mb-1 text-customPurple">Frete grátis</h3>
            <p className="text-xs text-gray-600">Nas compras acima de R$ 299,99</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3">
            <h3 className="text-base font-semibold mb-1 text-customPurple">20% na primeira compra</h3>
            <p className="text-xs text-gray-600">Use o cupom PRIMEIRA20 e ganhe 20% no seu primeiro pedido</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-customPurple my-8">Veja também:</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
      {relatedProducts.map((relatedProduct) => (
  <div key={relatedProduct.id} className="flex flex-col shadow-lg bg-customLightGreen rounded-lg overflow-hidden relative">
    <Link href={`/product/${product.id}`}>
      <div className="relative h-52">
        <ProductImage product={relatedProduct} fill />
        <button className="absolute inset-0 flex items-center justify-center w-full h-full bg-customPurple bg-opacity-0 hover:bg-opacity-25 transition duration-300 rounded-lg group">
          <span className="text-customLightGreen text-lg font-bold opacity-0 group-hover:opacity-100">Mostrar detalhes</span>
        </button>
      </div>
    </Link>
    <div className="p-4 flex flex-col">
      <div>
        <h2 className="text-xl font-semibold mb-2 text-customDarkBlue2">{relatedProduct.name}</h2>
        <p className="text-lg mb-3 font-bold text-customDarkBlue2">{formatPrice(relatedProduct.price)}</p>
      </div>
      <AddCart product={relatedProduct} />
    </div>
  </div>
))}
      </div>
     
    </div>
  );
}
