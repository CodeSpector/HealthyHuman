"use client"

import { useEffect, useState } from 'react';

interface Product {
  product_id: number;
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
      {isLoading && <p>Loading products...</p>}
      {products.length > 0 && (
        <ul>
          {products.map((product) => (
            <li key={product.product_id}>
              Product ID: {product.product_id}, Amount: {product.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
