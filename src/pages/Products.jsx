import { products } from "../data/products";
import ProductCard from "../components/product/ProductCard";

export default function Products() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Produtos</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
