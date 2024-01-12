import ProdCard from '@/components/ProdCard';
import { products } from '@/utils/products';

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-between p-24">
      {products.map((prod) => {
        return (
          <ProdCard key={prod.id} prod={prod.name} image={prod.image} />
        )
      })}
    </main>
  )
}
