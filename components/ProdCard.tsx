"use client"
import Image from "next/image";
import { useState } from "react";

const ProdCard = ({ prod, prod_id, prod_price, image }: { prod: string, prod_id: number, prod_price: number, image: string }) => {

  const [quantity, setQuantity] = useState(1);

  const quantityNeagative = () => {
    if (quantity <= 1) return setQuantity(1)
    else setQuantity(quantity - 1)
  }
  const quantityPositive = () => { setQuantity(quantity + 1) }

  const handelCart = () => {
    fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_name: prod,
        product_image: image,
        product_id: prod_id,
        product_price: prod_price,
        quantity: quantity,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  return (
    <div className="flex flex-col md:flex-row m-5 p-5 bg-slate-200 shadow-black shadow-md rounded-xl">
      <div className="rounded-sm">
        <Image alt="Image" width={250} height={500} src={image} className="rounded-lg shadow-md shadow-slate-700" />
      </div>
      <br />
      <div className="bg-slate-100 shadow-md shadow-slate-700 rounded-md flex flex-col ml-5 p-5 justify-between">
        <h1 className="text-2xl font-bold text-center">{prod}</h1>
        <div className="flex flex-row align-middle">
          <p className="text-xl font-bold flex align-middle justify-center content-center items-center mr-6">${prod_price}</p>
          <button onClick={handelCart} className="">Add to Cart</button>
          <div className="flex flex-col-reverse ml-5 p-1 shadow-slate-700 shadow-md rounded-lg">
            <button onClick={quantityNeagative} className="transition hover:bg-black hover:text-white rounded-full">-</button>
            <p>{quantity}</p>
            <button onClick={quantityPositive} className="transition hover:bg-black hover:text-white rounded-full">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdCard;
