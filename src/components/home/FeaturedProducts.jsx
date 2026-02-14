import ProductCard from "../ProductCard"
import { products } from "../../data/products"


function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-gray-900">
          Produtos em destaque
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturedProducts
