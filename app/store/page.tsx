import { products } from "@/utils/products";
import ProductCard from "@/components/ProdCard";

const Store = () => {
  return (
    <div className="">
      <br />
      <br />
      <br />
      <br />
      <h1 className="p-5 text-slate-800 font-bold text-4xl">Browse our bestsellers!</h1>
      <div className="flex flex-col md:flex-row flex-wrap ">
        {products.map((product) => { return <ProductCard key={product.id} prod_id={product.id} prod={product.name} image={product.image} /> })}
      </div>
    </div>
  );
}

export default Store;
