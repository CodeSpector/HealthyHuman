"use client"

import { useEffect } from 'react';

const CartPage = () => {

  useEffect(() => {
    const cartItems = fetch('/api/cart/');
    console.log(cartItems);
  });

  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
}

export default CartPage;
