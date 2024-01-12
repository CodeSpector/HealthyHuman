import ProdCard from '@/components/ProdCard';
import { products } from '@/utils/products';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <img src='/Group_2.svg' className='w-screen h-screen fixed -z-10' />
      <img src="mangoes.svg" className='-translate-x-[1vw] w-[7rem] h-[7rem] md:w-[15rem] md:h-[15rem]' />
      <img src="/can.svg" className='translate-y-[20vh] translate-x-[65vw] fixed' />

      <div className='flex flex-col h-screen md:justify-center align-middle z-4 p-10'>
        {/* <h1 className='text-5xl font-bold text-orange-700'>Healthy Human</h1> */}
        {/* <p className='text-xl text-orange-600'>Healthy Human is a health food store that sells a variety of products from fruits to vegetables to grains.</p> */}
        <img src="/hero-text.svg" className="h-[50rem] w-[50rem] md:text-3xl md:w-[60rem] md:h-[60rem]" />
      </div>

      {/* {products.map((prod) => { */}
      {/*   return ( */}
      {/*     <ProdCard key={prod.id} prod={prod.name} image={prod.image} /> */}
      {/*   ) */}
      {/* })} */}
    </main>
  )
}
