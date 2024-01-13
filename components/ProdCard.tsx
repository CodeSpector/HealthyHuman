"use client"
import Image from "next/image";

const ProdCard = ({ prod, prod_id, prod_price, image }: { prod: string, prod_id: number, prod_price: number, image: string }) => {

  const handelCart = () => {
    fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_name: prod,
        product_id: prod_id,
        product_price: prod_price,
        quantity: 1
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  return (
    <div className="flex flex-col m-5 p-5 bg-slate-200 shadow-black shadow-md">
      <Image alt="Image" width={500} height={500} src={image} className="" />
      <br />
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold">{prod}</h1>
        <p className="text-xl font-bold">${prod_price}</p>
        <button onClick={handelCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProdCard;
