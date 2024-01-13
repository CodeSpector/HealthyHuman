import { products } from "@/utils/products";
import ProductCard from "@/components/ProdCard";

const Store = () => {
  return (
    <div className="min-h-screen">
      <img src='/Group_2.svg' className='w-screen h-screen fixed -z-10' />
      <br />
      <br />
      <br />
      <br />
      <h1 className="p-5 text-slate-800 font-bold text-4xl">Browse our bestsellers!</h1>
      <div className="flex flex-col md:flex-row flex-wrap ">
        {products.map((product) => { return <ProductCard key={product.id} prod_id={product.id} prod={product.name} prod_price={product.price} image={product.image} /> })}
      </div>
    </div>
  );
}

export default Store;
