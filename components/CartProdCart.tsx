import Image from 'next/image'

const CartProdCart = ({ prod_img, prod_name, prod_price, prod_quantity }: { prod_img: string, prod_name: string, prod_price: number, prod_quantity: number }) => {
  return (
    <div>
      <div className="flex flex-col m-5 p-5 bg-slate-200 shadow-black rounded-lg shadow-md mb-5">
        <Image alt="Image" width={500} height={500} src={prod_img} className="" />
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
