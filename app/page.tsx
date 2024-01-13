import ProdCard from '@/components/ProdCard';
import { products } from '@/utils/products';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <img src='/Group_2.svg' className='w-screen h-screen fixed -z-10' />
      <img src="mangoes.svg" className='-translate-x-[1vw] w-[7rem] h-[7rem] md:w-[15rem] md:h-[15rem]' />
      <div className=''>
        <img src="/can.svg" className='z-20 translate-y-[20vh] md:translate-x-[28vw] 2xl:translate-x-[50vw] fixed' />
        <img src="/blueberry.svg" className='hidden md:block z-10 translate-y-[73vh] md:translate-x-[43vw] 2xl:translate-x-[57vw] fixed' />
        <img src="/mango.svg" className='hidden md:block z-10 translate-y-[45vh] md:translate-x-[60vw] 2xl:translate-x-[75vw] fixed' />
        <img src="/blueberry.svg" className='hidden md:block z-10 translate-y-[73vh] md:translate-x-[68vw] 2xl:translate-x-[75vw] fixed' />
        <img src="/blueberry.svg" className='hidden md:block z-10 translate-y-[75vh] md:translate-x-[65vw] 2xl:translate-x-[73vw] fixed' />
      </div>

      <div className='flex flex-col w-screen h-screen md:justify-center align-middle z-20 p-10'>
        {/* <h1 className='text-5xl font-bold text-orange-700'>Healthy Human</h1> */}
        {/* <p className='text-xl text-orange-600'>Healthy Human is a health food store that sells a variety of products from fruits to vegetables to grains.</p> */}
        <img src="/hero-text.svg" className="w-[50rem] md:text-3xl md:w-[60rem]" />
        <br />
        <a href='/store' className='text-center rounded-md bg-sky-800 border-white shadow-gray-900 justify-center content-center flex text-slate-100 max-w-36 px-5 py-2'>
          Shop Now
        </a>
      </div>

      {/* {products.map((prod) => { */}
      {/*   return ( */}
      {/*     <ProdCard key={prod.id} prod={prod.name} image={prod.image} /> */}
      {/*   ) */}
      {/* })} */}
    </main>
  )
}
