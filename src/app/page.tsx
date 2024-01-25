import Carousel from "@/components/carousel"
import Product from "@/components/product/product"

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 12 }, (_, index) => (
          <Product key={index} />
        ))}
      </div>
    </>
  )
}
