"use client"

import { useEffect, useState } from 'react';
import CartProdCart from '@/components/CartProdCart';

interface Product {
  product_name: string;
  product_image: string;
  product_id: number;
  product_price: number;
  quantity: number;
}

const CartPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/cart'); // Replace with your API endpoint
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <h1 className='text-4xl font-bold md:p-10 text-slate-800'>Cart</h1>
      {isLoading && <p>Loading products...</p>}
      {products.length > 0 && (
        <ul className='mt-5 flex flex-col md:flex-row flex-wrap'>
          {products.map((product) => (
            <CartProdCart prod_img={product.product_image} prod_name={product.product_name} prod_price={product.product_price} prod_quantity={product.quantity} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
