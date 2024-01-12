"use client"

import { useEffect } from 'react';

type Items<> = {
  product_id: number,
  quantity: number,
}

const CartPage = () => {

  const cartItems = fetch('/api/cart/');

  useEffect(() => {
    const cartItems = fetch('/api/cart/');
    if (!cartItems) { document.getElementById("cart")?.innerText.replace("", "death") }
    console.log(cartItems);
  });

  return (
    <div>
      <h1>Cart</h1>
      <div id="cart">
      </div>
    </div>
  );
}

export default CartPage;
