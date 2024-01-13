"use client"

import { useEffect, useState } from 'react';
import CartProdCart from '@/components/CartProdCart';
import { redirect } from 'next/navigation';

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

  const handelCheckout = () => {
    // TODO: Checkout
    redirect('/checkout')
  };

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
    <div className='min-h-screen'>
      <img src='/Group_2.svg' className='w-screen h-screen fixed -z-10' />
      <h1 className='text-4xl font-bold md:p-10 text-slate-800'>Cart</h1>
      {isLoading && <p>Loading products...</p>}
      {products.length === 0 && !isLoading && <p>No products in cart.</p>}
      {products.length > 0 && (
        <ul className='mt-5 flex flex-col md:flex-row flex-wrap'>
          {products.map((product) => (
            <CartProdCart key={product.product_id} prod_img={product.product_image} prod_name={product.product_name} prod_price={product.product_price} prod_quantity={product.quantity} />
          ))}
        </ul>
      )}
      {products.length > 0 && !isLoading ? (<a href='/checkout' onClick={handelCheckout} className='ml-5 bg-slate-800 text-white rounded-md shadow-slate-700 shadow-md p-5'>Checkout!</a>) : ""}
    </div>
  );
}

export default CartPage;
