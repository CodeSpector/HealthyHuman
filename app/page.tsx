import ProdCard from '@/components/ProdCard';
import { products } from '@/utils/products';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <img src='/Group_2.svg' className='w-screen h-screen fixed -z-10' />
      <img src="mangoes.svg" className='-translate-x-[1vw] w-[15rem] h-[15rem]' />
      {/* {products.map((prod) => { */}
      {/*   return ( */}
      {/*     <ProdCard key={prod.id} prod={prod.name} image={prod.image} /> */}
      {/*   ) */}
      {/* })} */}
    </main>
  )
}
