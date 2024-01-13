import Image from 'next/image'

const CartProdCart = ({ prod_img, prod_name, prod_price, prod_quantity }: { prod_img: string, prod_name: string, prod_price: number, prod_quantity: number }) => {
  return (
    <div>
      <div className="flex flex-col m-5 p-5 bg-slate-200 shadow-black shadow-md">
        <Image alt="Image" width={5} height={5} src={prod_img} className="" />
        <br />
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-bold">{prod_name}</h1>
          <br />
          <p className="text-xl font-bold">${prod_price}</p>
          <br />
          <p>Quantity: {prod_quantity}</p>
          <br />
        </div>
      </div>
    </div>
  )
}

export default CartProdCart;
