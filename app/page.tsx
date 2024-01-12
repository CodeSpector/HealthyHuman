import ProdCard from '@/components/ProdCard';
import { products } from '@/utils/products';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <img src='/Group_2.svg' className='w-screen h-screen fixed -z-10' />
      <img src="mangoes.svg" className='-translate-x-[1vw] w-[7rem] h-[7rem] md:w-[15rem] md:h-[15rem]' />
      <img src="/can.svg" className='translate-y-[20vh] translate-x-[65vw] fixed' />

      <div className='flex flex-col h-screen justify-center align-middle z-4'>
        <h1 className='text-5xl font-bold text-sky-800'>Healthy Human</h1>
        <p className='text-xl text-sky-800'>Healthy Human is a health food store that sells a variety of products from fruits to vegetables to grains.</p>
      </div>

      {/* {products.map((prod) => { */}
      {/*   return ( */}
      {/*     <ProdCard key={prod.id} prod={prod.name} image={prod.image} /> */}
      {/*   ) */}
      {/* })} */}
    </main>
  )
}
